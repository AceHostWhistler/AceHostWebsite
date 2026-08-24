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
  fit?: "contain" | "cover";
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
  loadStrategy = "click",
  fit = "contain",
}) => {
  const [clicked, setClicked] = useState(loadStrategy === "immediate");
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: loadStrategy === "inView" ? "400px 0px" : "200px 0px",
  });

  const shouldLoadIframe =
    loadStrategy === "immediate" ||
    clicked ||
    (loadStrategy === "inView" && inView);

  const showPoster =
    loadStrategy === "click" ||
    (loadStrategy === "inView" && inView && !shouldLoadIframe);

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
      autoplay: autoplay && (clicked || loadStrategy === "immediate"),
      muted: false,
      loop,
      background,
      showByline,
      showTitle,
      showPortrait,
    });
  }, [
    autoplay,
    background,
    clicked,
    hash,
    loadStrategy,
    loop,
    shouldLoadIframe,
    showByline,
    showPortrait,
    showTitle,
    videoId,
  ]);

  const thumbnailUrl = buildVimeoThumbnailUrl(videoId, thumbnailQuality);

  const iframeClass =
    fit === "cover"
      ? "absolute left-1/2 top-[44%] z-10 h-[126%] w-[130%] max-w-none -translate-x-1/2 -translate-y-1/2 border-0"
      : "absolute inset-0 z-10 h-full w-full border-0";

  if (loadStrategy === "inView" && !inView) {
    return (
      <div
        ref={ref}
        className={`relative ${aspectRatioClass} overflow-hidden bg-neutral-900 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={ref}
      className={`relative ${aspectRatioClass} overflow-hidden ${className}`}
    >
      {shouldLoadIframe && vimeoUrl ? (
        <VideoEmbedFrame
          src={vimeoUrl}
          title={title}
          className={iframeClass}
          loading={loadStrategy === "immediate" ? "eager" : "lazy"}
        />
      ) : showPoster ? (
        <button
          type="button"
          className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
          onClick={() => setClicked(true)}
          aria-label={`Play ${title}`}
        >
          <div className="absolute inset-0 bg-black">
            {!thumbnailFailed ? (
              <img
                src={thumbnailUrl}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity hover:opacity-95"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                onError={() => setThumbnailFailed(true)}
              />
            ) : (
              <div className="h-full w-full bg-neutral-900" aria-hidden="true" />
            )}
          </div>

          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-black/70">
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
        <div className="absolute inset-0 bg-neutral-900" aria-hidden="true" />
      )}
    </div>
  );
};

export default LazyVimeoPlayer;
