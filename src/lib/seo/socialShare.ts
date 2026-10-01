import { SITE_URL } from "@/data/seo/business";

export type SocialSharePayload = {
  title: string;
  description: string;
  image: string;
  type?: "website" | "article";
  publishedAt?: string;
  modifiedAt?: string;
  /** Overrides og:title and twitter:title when set. */
  socialTitle?: string;
  /** Overrides og:description and twitter:description when set. */
  socialDescription?: string;
};

export const ACEHOST_LOGO_IMAGE = "/logo.png";
export const DEFAULT_SOCIAL_IMAGE = ACEHOST_LOGO_IMAGE;
/** Bump this when cover photos change so Google and iMessage recache the new image. */
export const SHARE_IMAGE_VERSION = "20260930";

export function toAbsoluteImageUrl(imagePath: string): string {
  if (!imagePath) {
    return withShareVersion(`${SITE_URL}${encodeURI(DEFAULT_SOCIAL_IMAGE)}`);
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return withShareVersion(imagePath);
  }
  const path = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return withShareVersion(`${SITE_URL}${encodeURI(path)}`);
}

function withShareVersion(url: string): string {
  if (url.includes("v=")) return url;
  return `${url}${url.includes("?") ? "&" : "?"}v=${SHARE_IMAGE_VERSION}`;
}

export function normalizePath(
  path: string,
  locales: readonly string[] = ["en"]
): string {
  let normalized = path.split("#")[0].split("?")[0] || "/";
  if (!normalized.startsWith("/")) normalized = `/${normalized}`;
  if (normalized !== "/" && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }

  const segments = normalized.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }

  return normalized;
}
