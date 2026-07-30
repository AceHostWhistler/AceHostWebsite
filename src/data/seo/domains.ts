/** Canonical production host for AceHost (matches Vercel apex → www redirect). */
export const PRIMARY_HOST = "www.acehost.ca";

export const PRIMARY_SITE_URL = `https://${PRIMARY_HOST}`;

/**
 * Alternate domains that must not serve duplicate AceHost content in search.
 * All requests are 301-redirected to PRIMARY_SITE_URL with the same path.
 */
export const DUPLICATE_CONTENT_REDIRECT_HOSTS = new Set([
  "reelroom.ca",
  "www.reelroom.ca",
  "riviera-stays.com",
  "www.riviera-stays.com",
  "acecascade.ca",
  "www.acecascade.ca",
  "acecascade.com",
  "www.acecascade.com",
]);

export function isPrimaryHost(host: string): boolean {
  const normalized = host.toLowerCase().split(":")[0];
  return normalized === PRIMARY_HOST || normalized === "acehost.ca";
}

export function shouldRedirectToPrimary(host: string): boolean {
  const normalized = host.toLowerCase().split(":")[0];
  if (isPrimaryHost(normalized)) {
    return normalized === "acehost.ca";
  }
  return DUPLICATE_CONTENT_REDIRECT_HOSTS.has(normalized);
}

export function buildPrimaryUrl(pathname: string, search = ""): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${PRIMARY_SITE_URL}${path}${search}`;
}
