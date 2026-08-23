import type { NextApiRequest, NextApiResponse } from "next";
import {
  fetchVimeoThroughTrustedDns,
  rewriteVimeoDevProxyUrls,
} from "@/lib/devVimeoProxy";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(404).end();
  }

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
    "http://localhost:3000/";

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

    if (req.method === "HEAD") {
      return res.end();
    }

    const body = rewriteVimeoDevProxyUrls(upstream.body);
    return res.send(body);
  } catch (error) {
    console.error("[dev-vimeo-proxy]", error);
    return res.status(502).json({
      error:
        "Could not reach Vimeo through the local dev proxy. Try `npm run fix-dev-dns`.",
    });
  }
}
