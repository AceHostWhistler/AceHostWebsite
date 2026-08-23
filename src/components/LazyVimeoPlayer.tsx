import React, { useCallback, useMemo, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  buildVimeoEmbedUrl,
  buildVimeoThumbnailUrl,
} from "@/lib/videoEmbeds";

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

const IFRAME_ALLOW =
  "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share";

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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const prefetchedRef = useRef(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: loadStrategy === "inView" ? "400px 0px" : "200px 0px",
  });

  const shouldLoadIframe = loadStrategy === "immediate" || clicked;
  const showPoster =
    loadStrategy === "immediate" ||
    ((loadStrategy === "click" || loadStrategy === "inView") && inView);

  const aspectRatioClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "portrait"
        ? "aspect-[9/16]"
        : "aspect-video";

  const playUrl = useMemo(
    () =>
      buildVimeoEmbedUrl(videoId, {
        hash,
        autoplay: autoplay && shouldLoadIframe,
        muted: autoplay && shouldLoadIframe,
        loop,
        background,
        showByline,
        showTitle,
        showPortrait,
      }),
    [
      autoplay,
      background,
      hash,
      loop,
      shouldLoadIframe,
      showByline,
      showPortrait,
      showTitle,
      videoId,
    ]
  );

  const clickPlayUrl = useMemo(
    () =>
      buildVimeoEmbedUrl(videoId, {
        hash,
        autoplay,
        muted: autoplay,
        loop,
        background,
        showByline,
        showTitle,
        showPortrait,
      }),
    [
      autoplay,
      background,
      hash,
      loop,
      showByline,
      showPortrait,
      showTitle,
      videoId,
    ]
  );

  const prefetchEmbed = useCallback(() => {
    if (!clickPlayUrl || prefetchedRef.current || shouldLoadIframe) {
      return;
    }

    prefetchedRef.current = true;
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = clickPlayUrl;
    link.as = "document";
    document.head.appendChild(link);
  }, [clickPlayUrl, shouldLoadIframe]);

  const handlePlay = useCallback(() => {
    const url = autoplay ? clickPlayUrl : playUrl;
    if (iframeRef.current && url) {
      iframeRef.current.src = url;
    }
    setClicked(true);
  }, [autoplay, clickPlayUrl, playUrl]);

  const thumbnailUrl = buildVimeoThumbnailUrl(videoId, thumbnailQuality);

  const iframeClass =
    fit === "cover"
      ? "absolute left-1/2 top-1/2 z-10 h-[130%] w-[130%] max-w-none -translate-x-1/2 -translate-y-1/2 border-0"
      : "absolute inset-0 z-10 h-full w-full border-0";

  if (!showPoster) {
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
      <iframe
        ref={iframeRef}
        src={loadStrategy === "immediate" ? playUrl : undefined}
        className={iframeClass}
        allow={IFRAME_ALLOW}
        allowFullScreen
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
      />

      {!shouldLoadIframe ? (
        <button
          type="button"
          className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center"
          onPointerEnter={prefetchEmbed}
          onFocus={prefetchEmbed}
          onClick={handlePlay}
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
      ) : null}
    </div>
  );
};

export default LazyVimeoPlayer;
