/** Keep embed hosts aligned with scripts/csp.js EMBED_FRAME_SOURCES */
export const EMBED_FRAME_HOSTS = [
  "player.vimeo.com",
  "www.youtube.com",
  "www.youtube-nocookie.com",
  "www.instagram.com",
] as const;

const VIMEO_APP_ID = "58479";

type VimeoEmbedOptions = {
  hash?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  background?: boolean;
  showTitle?: boolean;
  showByline?: boolean;
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

export function buildVimeoEmbedUrl(
  videoId: string,
  {
    hash,
    autoplay = false,
    muted = false,
    loop = false,
    background = false,
    showTitle = false,
    showByline = false,
    showPortrait = false,
  }: VimeoEmbedOptions = {}
): string {
  const params = new URLSearchParams({
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: VIMEO_APP_ID,
    title: showTitle ? "1" : "0",
    byline: showByline ? "1" : "0",
    portrait: showPortrait ? "1" : "0",
    autoplay: autoplay ? "1" : "0",
    muted: muted || autoplay ? "1" : "0",
    loop: loop ? "1" : "0",
    background: background ? "1" : "0",
  });

  if (hash) {
    params.set("h", hash);
  }

  const query = params.toString();

  if (process.env.NODE_ENV === "development") {
    return `/api/dev/vimeo/video/${videoId}?${query}`;
  }

  return `https://player.vimeo.com/video/${videoId}?${query}`;
}

export function buildVimeoThumbnailUrl(
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
