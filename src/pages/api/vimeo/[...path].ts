import type { NextApiRequest, NextApiResponse } from "next";
import {
  fetchVimeoThroughTrustedDns,
  rewriteVimeoDevProxyUrls,
} from "@/lib/devVimeoProxy";

const DEV_PROXY_CACHE_TTL_MS = 5 * 60 * 1000;
const devProxyCache = new Map<
  string,
  { status: number; contentType: string; body: string; expiresAt: number }
>();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    return res.status(405).end();
  }

  const pathParts = Array.isArray(req.query.path)
    ? req.query.path
    : req.query.path
      ? [req.query.path]
      : [];

  if (pathParts.length === 0) {
    return res.status(400).json({ error: "Missing Vimeo path." });
  }

  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(req.query)) {
    if (key === "path" || value == null) {
      continue;
    }

    if (Array.isArray(value)) {
      value.forEach((entry) => query.append(key, entry));
    } else {
      query.set(key, value);
    }
  }

  const referer =
    (typeof req.headers.referer === "string" && req.headers.referer) ||
    "https://www.acehost.ca/";

  const cacheKey = `${pathParts.join("/")}?${query.toString()}`;
  const cached = devProxyCache.get(cacheKey);
  if (cached && Date.now() < cached.expiresAt) {
    res.status(cached.status);
    res.setHeader("Content-Type", cached.contentType);
    res.setHeader("Cache-Control", "private, max-age=300");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");

    if (req.method === "HEAD") {
      return res.end();
    }

    return res.send(cached.body);
  }

  try {
    const upstream = await fetchVimeoThroughTrustedDns(
      `/${pathParts.join("/")}`,
      query.toString(),
      referer
    );

    const contentType =
      upstream.headers["content-type"] || "text/html; charset=utf-8";

    res.status(upstream.status);
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");

    if (req.method === "HEAD") {
      return res.end();
    }

    const origin =
      typeof req.headers.origin === "string"
        ? req.headers.origin
        : typeof req.headers.host === "string"
          ? `${req.headers["x-forwarded-proto"] === "http" ? "http" : "https"}://${req.headers.host}`
          : "https://www.acehost.ca";

    const body = rewriteVimeoDevProxyUrls(upstream.body, origin);
    const isHtml = contentType.includes("text/html");

    if (!isHtml) {
      devProxyCache.set(cacheKey, {
        status: upstream.status,
        contentType,
        body,
        expiresAt: Date.now() + DEV_PROXY_CACHE_TTL_MS,
      });
    }

    return res.send(body);
  } catch (error) {
    console.error("[vimeo-proxy]", error);
    return res.status(502).json({
      error:
        "Could not reach Vimeo through the Vimeo proxy. Try `npm run fix-dev-dns`.",
    });
  }
}
