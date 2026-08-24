import net from "node:net";
import tls from "node:tls";
import { Resolver } from "node:dns/promises";

const VIMEO_HOST = "player.vimeo.com";
export const VIMEO_PROXY_PREFIX = "/api/vimeo";
const DEV_PROXY_PREFIX = VIMEO_PROXY_PREFIX;

const resolver = new Resolver();
resolver.setServers(["8.8.8.8", "1.1.1.1"]);

let cachedVimeoIp: { value: string; expiresAt: number } | null = null;

async function resolveVimeoHost(hostname: string): Promise<string> {
  if (cachedVimeoIp && Date.now() < cachedVimeoIp.expiresAt) {
    return cachedVimeoIp.value;
  }

  let ip: string;
  try {
    ip = (await resolver.resolve4(hostname))[0];
  } catch {
    const cname = await resolver.resolveCname(hostname);
    ip = (await resolver.resolve4(cname[0]))[0];
  }

  cachedVimeoIp = {
    value: ip,
    expiresAt: Date.now() + 60 * 60 * 1000,
  };

  return ip;
}

type VimeoProxyResponse = {
  status: number;
  headers: Record<string, string>;
  body: string;
};

function parseHttpResponse(raw: string): VimeoProxyResponse {
  const separator = raw.indexOf("\r\n\r\n");
  const head = raw.slice(0, separator);
  const body = raw.slice(separator + 4);
  const lines = head.split("\r\n");
  const status = Number.parseInt(lines[0]?.match(/^HTTP\/\d\.\d (\d+)/)?.[1] || "502", 10);
  const headers: Record<string, string> = {};

  for (const line of lines.slice(1)) {
    const index = line.indexOf(":");
    if (index === -1) {
      continue;
    }

    const key = line.slice(0, index).trim().toLowerCase();
    const value = line.slice(index + 1).trim();
    headers[key] = value;
  }

  return { status, headers, body };
}

export function rewriteVimeoDevProxyUrls(
  body: string,
  origin = "http://localhost:3000"
): string {
  let rewritten = body
    .replaceAll(`https://${VIMEO_HOST}`, DEV_PROXY_PREFIX)
    .replaceAll(`http://${VIMEO_HOST}`, DEV_PROXY_PREFIX)
    .replaceAll(`//${VIMEO_HOST}`, DEV_PROXY_PREFIX)
    .replaceAll('"player_url":"player.vimeo.com"', `"player_url":"${new URL(origin).host}${VIMEO_PROXY_PREFIX}"`)
    .replace(/(['"`])\/video\//g, `$1${DEV_PROXY_PREFIX}/video/`);

  if (rewritten.includes("<head") && !/<base[\s>]/i.test(rewritten)) {
    rewritten = rewritten.replace(
      /<head([^>]*)>/i,
      `<head$1><base href="${origin}${DEV_PROXY_PREFIX}/">`
    );
  }

  return rewritten;
}

export async function fetchVimeoThroughTrustedDns(
  pathWithLeadingSlash: string,
  queryString: string,
  referer: string
): Promise<VimeoProxyResponse> {
  const ip = await resolveVimeoHost(VIMEO_HOST);
  const requestPath = queryString
    ? `${pathWithLeadingSlash}?${queryString}`
    : pathWithLeadingSlash;

  const raw = await new Promise<string>((resolve, reject) => {
    const socket = net.connect({ host: ip, port: 443 }, () => {
      const secureSocket = tls.connect(
        {
          socket,
          servername: VIMEO_HOST,
          ALPNProtocols: ["http/1.1"],
        },
        () => {
          secureSocket.write(
            [
              `GET ${requestPath} HTTP/1.1`,
              `Host: ${VIMEO_HOST}`,
              "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              "Accept: */*",
              "Accept-Language: en-US,en;q=0.9",
              `Referer: ${referer}`,
              `Origin: ${new URL(referer).origin}`,
              "Accept-Encoding: identity",
              "Connection: close",
              "",
              "",
            ].join("\r\n")
          );
        }
      );

      let response = "";
      secureSocket.setEncoding("latin1");
      secureSocket.on("data", (chunk) => {
        response += chunk;
      });
      secureSocket.on("error", reject);
      secureSocket.on("end", () => resolve(response));
    });

    socket.on("error", reject);
  });

  const parsed = parseHttpResponse(raw);

  if (
    parsed.status >= 300 &&
    parsed.status < 400 &&
    parsed.headers.location
  ) {
    const redirectUrl = new URL(parsed.headers.location, `https://${VIMEO_HOST}`);
    return fetchVimeoThroughTrustedDns(
      redirectUrl.pathname,
      redirectUrl.search.slice(1),
      referer
    );
  }

  return parsed;
}

export function buildDevVimeoProxyPath(
  videoId: string,
  queryString: string
): string {
  return queryString
    ? `${DEV_PROXY_PREFIX}/video/${videoId}?${queryString}`
    : `${DEV_PROXY_PREFIX}/video/${videoId}`;
}
