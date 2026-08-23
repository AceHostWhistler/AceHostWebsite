/** Shared Content-Security-Policy for Next.js headers (CommonJS). */

/** Explicit iframe/embed hosts — keep in sync with src/lib/videoEmbeds.ts */
const EMBED_FRAME_SOURCES = [
  "'self'",
  "https://player.vimeo.com",
  "https://www.youtube.com",
  "https://www.youtube-nocookie.com",
  "https://www.instagram.com",
];

function buildContentSecurityPolicy() {
  const frameSrc = EMBED_FRAME_SOURCES;

  return [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: https://player.vimeo.com https://www.youtube.com https://www.instagram.com",
    "style-src 'self' 'unsafe-inline' https:",
    "img-src 'self' data: https: https://i.vimeocdn.com https://vumbnail.com",
    "font-src 'self' data: https:",
    "connect-src 'self' https: https://player.vimeo.com https://vimeo.com",
    `frame-src ${frameSrc.join(" ")}`,
    `child-src ${frameSrc.join(" ")}`,
    "media-src 'self' https: blob:",
    "object-src 'none'",
    "form-action 'self' https:",
  ].join("; ");
}

module.exports = { buildContentSecurityPolicy, EMBED_FRAME_SOURCES };
