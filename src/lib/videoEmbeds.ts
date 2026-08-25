/** Keep embed hosts aligned with scripts/csp.js EMBED_FRAME_SOURCES */
export const EMBED_FRAME_HOSTS = [
  "player.vimeo.com",
  "www.youtube.com",
  "www.youtube-nocookie.com",
  "www.instagram.com",
] as const;

const VIMEO_APP_ID = "58479";

export type ParsedVimeoVideo = {
  videoId: string;
  hash?: string;
};

type VimeoEmbedOptions = {
  hash?: string;
  loop?: boolean;
  showPortrait?: boolean;
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

/** Standard Vimeo iframe URL — no autoplay; visitor uses Vimeo's native Play button. */
export function buildVimeoEmbedUrl(
  videoId: string,
  { hash, loop = false, showPortrait = false }: VimeoEmbedOptions = {}
): string {
  const params = new URLSearchParams({
    controls: "1",
    playsinline: "1",
    preload: "none",
    dnt: "1",
    title: "0",
    byline: "0",
    portrait: showPortrait ? "1" : "0",
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: VIMEO_APP_ID,
    loop: loop ? "1" : "0",
    play_button_position: "center",
  });

  if (hash) {
    params.set("h", hash);
  }

  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
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
