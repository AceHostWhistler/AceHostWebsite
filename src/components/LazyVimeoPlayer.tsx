import React, { useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  buildVimeoEmbedUrl,
  buildVimeoThumbnailUrl,
} from "@/lib/videoEmbeds";
import VideoEmbedFrame from "@/components/VideoEmbedFrame";

type LoadStrategy = "click" | "immediate" | "inView";

interface LazyVimeoPlayerProps {
  videoId: string;
  title: string;
  aspectRatio?: "video" | "square" | "portrait";
  className?: string;
  thumbnailQuality?: "default" | "high";
  autoplay?: boolean;
  loop?: boolean;
  background?: boolean;
  showByline?: boolean;
  showTitle?: boolean;
  showPortrait?: boolean;
  hash?: string;
  loadStrategy?: LoadStrategy;
}

const LazyVimeoPlayer: React.FC<LazyVimeoPlayerProps> = ({
  videoId,
  title,
  aspectRatio = "video",
  className = "",
  thumbnailQuality = "high",
  autoplay = false,
  loop = false,
  background = false,
  showByline = false,
  showTitle = false,
  showPortrait = false,
  hash,
  loadStrategy = "inView",
}) => {
  const [clicked, setClicked] = useState(false);
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: loadStrategy === "inView" ? "400px 0px" : "200px 0px",
  });

  const shouldLoadIframe =
    loadStrategy === "immediate" ||
    clicked ||
    (loadStrategy === "inView" && inView);

  const aspectRatioClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "portrait"
        ? "aspect-[9/16]"
        : "aspect-video";

  const vimeoUrl = useMemo(() => {
    if (!shouldLoadIframe) {
      return null;
    }

    return buildVimeoEmbedUrl(videoId, {
      hash,
      autoplay: autoplay && shouldLoadIframe,
      loop,
      background,
      showByline,
      showTitle,
      showPortrait,
    });
  }, [
    autoplay,
    background,
    hash,
    loop,
    shouldLoadIframe,
    showByline,
    showPortrait,
    showTitle,
    videoId,
  ]);

  const thumbnailUrl = buildVimeoThumbnailUrl(videoId, thumbnailQuality);

  return (
    <div
      ref={ref}
      className={`relative ${aspectRatioClass} overflow-hidden ${className}`}
    >
      {!shouldLoadIframe || !vimeoUrl ? (
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => setClicked(true)}
          aria-label={`Play ${title}`}
        >
          <div className="absolute inset-0 bg-black">
            {!thumbnailFailed ? (
              <img
                src={thumbnailUrl}
                alt={title}
                className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-95"
                loading="lazy"
                decoding="async"
                onError={() => setThumbnailFailed(true)}
              />
            ) : (
              <div className="h-full w-full bg-neutral-900" aria-hidden="true" />
            )}
          </div>

          <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-black/70">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
              aria-hidden="true"
            >
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
            </svg>
          </div>
        </button>
      ) : (
        <VideoEmbedFrame
          src={vimeoUrl}
          title={title}
          loading={loadStrategy === "immediate" ? "eager" : "lazy"}
        />
      )}
    </div>
  );
};

export default LazyVimeoPlayer;
