import { SITE_URL } from "@/data/seo/business";

export type SocialSharePayload = {
  title: string;
  description: string;
  image: string;
  type?: "website" | "article";
};

export const ACEHOST_LOGO_IMAGE = "/logo.png";
export const DEFAULT_SOCIAL_IMAGE = ACEHOST_LOGO_IMAGE;

export function toAbsoluteImageUrl(imagePath: string): string {
  if (!imagePath) {
    return `${SITE_URL}${encodeURI(DEFAULT_SOCIAL_IMAGE)}`;
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const path = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${SITE_URL}${encodeURI(path)}`;
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
