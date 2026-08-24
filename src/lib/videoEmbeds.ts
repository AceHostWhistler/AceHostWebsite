/** Keep embed hosts aligned with scripts/csp.js EMBED_FRAME_SOURCES */
export const EMBED_FRAME_HOSTS = [
  "player.vimeo.com",
  "www.youtube.com",
  "www.youtube-nocookie.com",
  "www.instagram.com",
] as const;

const VIMEO_APP_ID = "58479";
const VIMEO_PROXY_PREFIX = "/api/vimeo";

export type ParsedVimeoVideo = {
  videoId: string;
  hash?: string;
};

type VimeoPlayEmbedOptions = {
  hash?: string;
  loop?: boolean;
  showPortrait?: boolean;
};

/** Official Vimeo CDN posters — more accurate than vumbnail for portrait clips */
const VIMEO_POSTER_OVERRIDES: Record<string, string> = {
  "1122267050":
    "https://i.vimeocdn.com/video/2113216144-e33261ed68ffa73f7f37ff4b716fd6c1d00dc9a9c47cb067e45d7c96ca1c9941-d",
  "1122268553":
    "https://i.vimeocdn.com/video/2063559667-7256546b7f523f4af102396f6b5e735cd01fa8daf9607bdb28697b215ac9e097-d",
};

const VIMEO_POSTER_WIDTH: Record<"default" | "high", string> = {
  default: "640",
  high: "1280",
};

type YouTubeEmbedOptions = {
  autoplay?: boolean;
  mute?: boolean;
  loop?: boolean;
  playlist?: string;
  controls?: boolean;
  modestBranding?: boolean;
  playsInline?: boolean;
};

type InstagramEmbedOptions = {
  hideCaption?: boolean;
  autoplay?: boolean;
};

export function parseVimeoInput(
  input: string
): ParsedVimeoVideo | null {
  const trimmed = input.trim();
  if (!trimmed) {
    return null;
  }

  if (/^\d+$/.test(trimmed)) {
    return { videoId: trimmed };
  }

  try {
    const url = trimmed.startsWith("http")
      ? new URL(trimmed)
      : new URL(`https://${trimmed}`);

    const hash = url.searchParams.get("h") ?? undefined;

    const pathMatch = url.pathname.match(/\/(?:video\/)?(\d+)/);
    if (pathMatch?.[1]) {
      return { videoId: pathMatch[1], hash };
    }
  } catch {
    return null;
  }

  return null;
}

export function resolveVimeoVideo({
  videoId,
  videoUrl,
  hash,
}: {
  videoId?: string;
  videoUrl?: string;
  hash?: string;
}): ParsedVimeoVideo | null {
  if (videoId) {
    return { videoId, hash };
  }

  if (videoUrl) {
    const parsed = parseVimeoInput(videoUrl);
    if (!parsed) {
      return null;
    }

    return {
      videoId: parsed.videoId,
      hash: hash ?? parsed.hash,
    };
  }

  return null;
}

function buildVimeoPlayParams({
  hash,
  loop = false,
  showPortrait = false,
}: VimeoPlayEmbedOptions = {}): URLSearchParams {
  const params = new URLSearchParams({
    autoplay: "1",
    controls: "1",
    playsinline: "1",
    title: "0",
    byline: "0",
    portrait: showPortrait ? "1" : "0",
    dnt: "1",
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: VIMEO_APP_ID,
    loop: loop ? "1" : "0",
    background: "0",
    muted: "0",
  });

  if (hash) {
    params.set("h", hash);
  }

  return params;
}

/** Canonical Vimeo player URL — for logging and embed-domain checks. */
export function getVimeoCanonicalPlayUrl(
  videoId: string,
  options: VimeoPlayEmbedOptions = {}
): string {
  const params = buildVimeoPlayParams(options);
  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
}

/** Use the first-party proxy only on localhost where DNS may block player.vimeo.com. */
export function shouldUseVimeoProxy(hostname?: string): boolean {
  const host =
    hostname ??
    (typeof window !== "undefined" ? window.location.hostname : "");

  return host === "localhost" || host === "127.0.0.1";
}

/** Build embed URL after the visitor presses Play — autoplay is intentional here. */
export function buildVimeoPlayEmbedUrl(
  videoId: string,
  options: VimeoPlayEmbedOptions = {}
): string {
  const params = buildVimeoPlayParams(options);

  if (shouldUseVimeoProxy()) {
    return `${VIMEO_PROXY_PREFIX}/video/${videoId}?${params.toString()}`;
  }

  return getVimeoCanonicalPlayUrl(videoId, options);
}

export function getVimeoPosterUrl(
  videoId: string,
  quality: "default" | "high" = "high"
): string {
  const override = VIMEO_POSTER_OVERRIDES[videoId];
  if (override) {
    return `${override}?mw=${VIMEO_POSTER_WIDTH[quality]}&q=85`;
  }

  return quality === "high"
    ? `https://vumbnail.com/${videoId}.jpg`
    : `https://vumbnail.com/${videoId}_medium.jpg`;
}

/** @deprecated Use getVimeoPosterUrl */
export function buildVimeoThumbnailUrl(
  videoId: string,
  quality: "default" | "high" = "high"
): string {
  return getVimeoPosterUrl(videoId, quality);
}

export function buildYouTubeEmbedUrl(
  videoId: string,
  {
    autoplay = false,
    mute = false,
    loop = false,
    playlist,
    controls = true,
    modestBranding = true,
    playsInline = true,
  }: YouTubeEmbedOptions = {}
): string {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    mute: mute ? "1" : "0",
    playsinline: playsInline ? "1" : "0",
    controls: controls ? "1" : "0",
    modestbranding: modestBranding ? "1" : "0",
  });

  if (loop) {
    params.set("loop", "1");
    params.set("playlist", playlist ?? videoId);
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

export function buildInstagramEmbedUrl(
  reelId: string,
  { hideCaption = true, autoplay = false }: InstagramEmbedOptions = {}
): string {
  const params = new URLSearchParams({
    utm_source: "ig_embed",
    utm_campaign: "loading",
    utm_medium: "embed",
    autoplay: autoplay ? "true" : "false",
  });

  if (hideCaption) {
    params.set("hidecaption", "1");
  }

  return `https://www.instagram.com/reel/${reelId}/embed/?${params.toString()}`;
}
