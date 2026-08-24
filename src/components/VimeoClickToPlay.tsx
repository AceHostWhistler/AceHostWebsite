import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import {
  buildVimeoPlayEmbedUrl,
  getVimeoPosterUrl,
  resolveVimeoVideo,
} from "@/lib/videoEmbeds";
import { useVimeoCoverLayout } from "@/hooks/useVimeoCoverLayout";

type AspectRatioPreset = "video" | "square" | "portrait";

export interface VimeoClickToPlayProps {
  videoId?: string;
  videoUrl?: string;
  hash?: string;
  title: string;
  poster?: string;
  aspectRatio?: AspectRatioPreset;
  videoAspectRatio?: number;
  className?: string;
  loop?: boolean;
  priority?: boolean;
  showPortrait?: boolean;
  posterQuality?: "default" | "high";
}

const IFRAME_ALLOW = "autoplay; fullscreen; picture-in-picture";

const ASPECT_CLASS: Record<AspectRatioPreset, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[9/16]",
};

const DEFAULT_VIDEO_ASPECT: Record<AspectRatioPreset, number> = {
  video: 16 / 9,
  square: 1,
  portrait: 9 / 16,
};

const PRECONNECT_HOSTS = ["https://i.vimeocdn.com"] as const;

function preconnectOnIntent() {
  if (typeof document === "undefined") {
    return;
  }

  const hosts: string[] = [...PRECONNECT_HOSTS];
  if (typeof window !== "undefined" && window.location.origin) {
    hosts.push(window.location.origin);
  }

  for (const href of hosts) {
    const existing = document.querySelector(
      `link[rel="preconnect"][href="${href}"]`
    );
    if (existing) {
      continue;
    }

    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
}

function isOptimizablePoster(url: string): boolean {
  try {
    const hostname = new URL(url).hostname;
    return hostname === "i.vimeocdn.com" || hostname === "vumbnail.com";
  } catch {
    return false;
  }
}

const VimeoClickToPlay: React.FC<VimeoClickToPlayProps> = ({
  videoId,
  videoUrl,
  hash,
  title,
  poster,
  aspectRatio = "video",
  videoAspectRatio,
  className = "",
  loop = false,
  priority = false,
  showPortrait = false,
  posterQuality = "high",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playUrl, setPlayUrl] = useState<string | null>(null);
  const [posterFailed, setPosterFailed] = useState(false);
  const [intentPrimed, setIntentPrimed] = useState(false);

  const resolvedVideo = useMemo(
    () => resolveVimeoVideo({ videoId, videoUrl, hash }),
    [hash, videoId, videoUrl]
  );

  const sourceAspectRatio =
    videoAspectRatio ?? DEFAULT_VIDEO_ASPECT[aspectRatio];

  const coverStyle = useVimeoCoverLayout(
    containerRef,
    sourceAspectRatio,
    isPlaying
  );

  const posterUrl =
    poster ??
    (resolvedVideo
      ? getVimeoPosterUrl(resolvedVideo.videoId, posterQuality)
      : "");

  const handleIntent = useCallback(() => {
    if (intentPrimed) {
      return;
    }

    setIntentPrimed(true);
    preconnectOnIntent();
  }, [intentPrimed]);

  const startPlayback = useCallback(() => {
    if (!resolvedVideo || isPlaying) {
      return;
    }

    const url = buildVimeoPlayEmbedUrl(resolvedVideo.videoId, {
      hash: resolvedVideo.hash,
      loop,
      showPortrait,
    });

    if (iframeRef.current) {
      iframeRef.current.src = url;
    }

    flushSync(() => {
      setPlayUrl(url);
      setIsPlaying(true);
    });
  }, [isPlaying, loop, resolvedVideo, showPortrait]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      startPlayback();
    }
  };

  if (!resolvedVideo) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-neutral-900 ${ASPECT_CLASS[aspectRatio]} ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-black ${ASPECT_CLASS[aspectRatio]} ${className}`}
    >
      {isPlaying ? (
        <iframe
          ref={iframeRef}
          src={playUrl ?? undefined}
          title={title}
          className="absolute left-1/2 top-1/2 border-0"
          style={coverStyle}
          allow={IFRAME_ALLOW}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          onPointerDown={handleIntent}
          onPointerEnter={handleIntent}
          onFocus={handleIntent}
          onClick={startPlayback}
          onKeyDown={handleKeyDown}
          aria-label="Play video"
        >
          <span className="absolute inset-0 bg-black" aria-hidden="true">
            {!posterFailed && posterUrl ? (
              isOptimizablePoster(posterUrl) ? (
                <Image
                  src={posterUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
                  className="object-cover opacity-90"
                  priority={priority}
                  loading={priority ? "eager" : "lazy"}
                  onError={() => setPosterFailed(true)}
                />
              ) : (
                <img
                  src={posterUrl}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                  loading={priority ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={priority ? "high" : "low"}
                  onError={() => setPosterFailed(true)}
                />
              )
            ) : (
              <span className="block h-full w-full bg-neutral-900" />
            )}
          </span>

          <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-black/70">
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
          </span>
        </button>
      )}
    </div>
  );
};

export default VimeoClickToPlay;
