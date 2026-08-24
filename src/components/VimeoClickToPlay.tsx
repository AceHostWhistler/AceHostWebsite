import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import {
  buildVimeoPlayEmbedUrl,
  getVimeoCanonicalPlayUrl,
  getVimeoPosterUrl,
  resolveVimeoVideo,
} from "@/lib/videoEmbeds";

type AspectRatioPreset = "video" | "square" | "portrait";

type PlayerPhase = "idle" | "loading" | "ready" | "error";

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
const IS_DEV = process.env.NODE_ENV === "development";

const ASPECT_CLASS: Record<AspectRatioPreset, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[9/16]",
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

function logVimeoDebug(...args: unknown[]) {
  if (IS_DEV) {
    console.log("[VimeoClickToPlay]", ...args);
  }
}

function logVimeoError(...args: unknown[]) {
  if (IS_DEV) {
    console.error("[VimeoClickToPlay]", ...args);
  }
}

const VimeoClickToPlay: React.FC<VimeoClickToPlayProps> = ({
  videoId,
  videoUrl,
  hash,
  title,
  poster,
  aspectRatio = "video",
  className = "",
  loop = false,
  priority = false,
  showPortrait = false,
  posterQuality = "high",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<{ destroy?: () => Promise<void> } | null>(null);
  const [phase, setPhase] = useState<PlayerPhase>("idle");
  const [playUrl, setPlayUrl] = useState<string | null>(null);
  const [posterFailed, setPosterFailed] = useState(false);
  const [intentPrimed, setIntentPrimed] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resolvedVideo = useMemo(
    () => resolveVimeoVideo({ videoId, videoUrl, hash }),
    [hash, videoId, videoUrl]
  );

  const posterUrl =
    poster ??
    (resolvedVideo
      ? getVimeoPosterUrl(resolvedVideo.videoId, posterQuality)
      : "");

  const showPosterOverlay = phase !== "ready";
  const isInteractive = phase === "idle" || phase === "error";

  const resetToPoster = useCallback((message?: string) => {
    setPhase("error");
    setErrorMessage(message ?? "Vimeo playback failed.");
    setPlayUrl(null);

    if (playerRef.current?.destroy) {
      void playerRef.current.destroy().catch(() => undefined);
    }
    playerRef.current = null;
  }, []);

  const handleIntent = useCallback(() => {
    if (intentPrimed) {
      return;
    }

    setIntentPrimed(true);
    preconnectOnIntent();
  }, [intentPrimed]);

  const startPlayback = useCallback(() => {
    if (!resolvedVideo || !isInteractive) {
      return;
    }

    const playOptions = {
      hash: resolvedVideo.hash,
      loop,
      showPortrait,
    };

    const embedUrl = buildVimeoPlayEmbedUrl(resolvedVideo.videoId, playOptions);
    const canonicalUrl = getVimeoCanonicalPlayUrl(
      resolvedVideo.videoId,
      playOptions
    );

    logVimeoDebug("Vimeo ID:", resolvedVideo.videoId);
    logVimeoDebug("Vimeo privacy hash:", resolvedVideo.hash ?? "(none)");
    logVimeoDebug("Vimeo iframe URL (proxied):", embedUrl);
    logVimeoDebug("Vimeo canonical URL:", canonicalUrl);

    setErrorMessage(null);

    flushSync(() => {
      setPlayUrl(embedUrl);
      setPhase("loading");
    });
  }, [isInteractive, loop, resolvedVideo, showPortrait]);

  useEffect(() => {
    if (phase !== "loading" || !playUrl || !iframeRef.current) {
      return;
    }

    let cancelled = false;
    const iframe = iframeRef.current;

    const initializePlayer = async () => {
      try {
        const iframeMetrics = iframe.getBoundingClientRect();
        logVimeoDebug("Iframe mounted:", {
          src: iframe.src,
          width: iframeMetrics.width,
          height: iframeMetrics.height,
          top: iframeMetrics.top,
          left: iframeMetrics.left,
          transform: window.getComputedStyle(iframe).transform,
          opacity: window.getComputedStyle(iframe).opacity,
          visibility: window.getComputedStyle(iframe).visibility,
          zIndex: window.getComputedStyle(iframe).zIndex,
        });

        const Player = (await import("@vimeo/player")).default;
        if (cancelled) {
          return;
        }

        const player = new Player(iframe);
        playerRef.current = player;

        player.on("error", (event) => {
          logVimeoError("Vimeo player error event:", event);
          resetToPoster(typeof event === "string" ? event : "Vimeo player error.");
        });

        await player.ready();
        if (cancelled) {
          return;
        }

        logVimeoDebug("Vimeo player ready");
        setPhase("ready");

        await player.play().catch((error: unknown) => {
          logVimeoError("Vimeo playback failed:", error);
          resetToPoster(
            error instanceof Error ? error.message : "Vimeo playback failed."
          );
        });
      } catch (error) {
        if (cancelled) {
          return;
        }

        logVimeoError("Vimeo failed to initialize:", error);
        resetToPoster(
          error instanceof Error ? error.message : "Vimeo failed to initialize."
        );
      }
    };

    const onIframeLoad = () => {
      logVimeoDebug("Vimeo iframe load event fired");
      void initializePlayer();
    };

    const onIframeError = () => {
      logVimeoError("Vimeo iframe load error");
      resetToPoster("Vimeo iframe failed to load.");
    };

    iframe.addEventListener("load", onIframeLoad);
    iframe.addEventListener("error", onIframeError);

    return () => {
      cancelled = true;
      iframe.removeEventListener("load", onIframeLoad);
      iframe.removeEventListener("error", onIframeError);

      if (playerRef.current?.destroy) {
        void playerRef.current.destroy().catch(() => undefined);
      }
      playerRef.current = null;
    };
  }, [phase, playUrl, resetToPoster]);

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
      {playUrl ? (
        <iframe
          ref={iframeRef}
          src={playUrl}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow={IFRAME_ALLOW}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : null}

      {showPosterOverlay ? (
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center ${
            isInteractive ? "" : "pointer-events-none"
          }`}
        >
          <span className="absolute inset-0 bg-black" aria-hidden="true">
            {!posterFailed && posterUrl ? (
              isOptimizablePoster(posterUrl) ? (
                <Image
                  src={posterUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
                  className={`object-cover ${phase === "loading" ? "opacity-100" : "opacity-90"}`}
                  priority={priority}
                  loading={priority ? "eager" : "lazy"}
                  onError={() => setPosterFailed(true)}
                />
              ) : (
                <img
                  src={posterUrl}
                  alt={title}
                  className={`absolute inset-0 h-full w-full object-cover ${
                    phase === "loading" ? "opacity-100" : "opacity-90"
                  }`}
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

          {phase === "loading" ? (
            <span
              className="relative z-20 flex h-16 w-16 items-center justify-center rounded-full bg-black/70"
              aria-live="polite"
              aria-label="Loading video"
            >
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            </span>
          ) : (
            <button
              type="button"
              className="relative z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-0 bg-black/70 p-0"
              onPointerDown={handleIntent}
              onPointerEnter={handleIntent}
              onFocus={handleIntent}
              onClick={startPlayback}
              onKeyDown={handleKeyDown}
              aria-label={phase === "error" ? "Retry video" : "Play video"}
            >
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
            </button>
          )}

          {phase === "error" && errorMessage ? (
            <span className="absolute bottom-3 left-3 right-3 z-20 rounded bg-black/75 px-3 py-2 text-center text-xs text-white">
              {errorMessage}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default VimeoClickToPlay;
