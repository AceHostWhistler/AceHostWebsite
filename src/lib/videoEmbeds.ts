const VIMEO_APP_ID = "58479";

type VimeoEmbedOptions = {
  hash?: string;
  autoplay?: boolean;
  loop?: boolean;
  background?: boolean;
  showTitle?: boolean;
  showByline?: boolean;
  showPortrait?: boolean;
};

export function buildVimeoEmbedUrl(
  videoId: string,
  {
    hash,
    autoplay = false,
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
    loop: loop ? "1" : "0",
    background: background ? "1" : "0",
  });

  if (hash) {
    params.set("h", hash);
  }

  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
}
