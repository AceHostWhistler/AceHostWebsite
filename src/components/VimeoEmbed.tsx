import React, { useMemo } from "react";
import {
  buildVimeoEmbedUrl,
  resolveVimeoVideo,
} from "@/lib/videoEmbeds";

type AspectRatioPreset = "video" | "square" | "portrait";

export interface VimeoEmbedProps {
  videoId?: string;
  videoUrl?: string;
  hash?: string;
  title: string;
  aspectRatio?: AspectRatioPreset;
  className?: string;
  loop?: boolean;
  priority?: boolean;
  showPortrait?: boolean;
}

const ASPECT_CLASS: Record<AspectRatioPreset, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[9/16]",
};

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({
  videoId,
  videoUrl,
  hash,
  title,
  aspectRatio = "video",
  className = "",
  loop = false,
  priority = false,
  showPortrait = false,
}) => {
  const resolvedVideo = useMemo(
    () => resolveVimeoVideo({ videoId, videoUrl, hash }),
    [hash, videoId, videoUrl]
  );

  if (!resolvedVideo) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-neutral-900 ${ASPECT_CLASS[aspectRatio]} ${className}`}
        aria-hidden="true"
      />
    );
  }

  const embedUrl = buildVimeoEmbedUrl(resolvedVideo.videoId, {
    hash: resolvedVideo.hash,
    loop,
    showPortrait,
  });

  return (
    <div
      className={`relative w-full overflow-hidden bg-black ${ASPECT_CLASS[aspectRatio]} ${className}`}
    >
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        loading={priority ? "eager" : "lazy"}
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VimeoEmbed;
