import React, { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { buildVimeoEmbedUrl } from "@/lib/videoEmbeds";

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
  loadStrategy = "click",
}) => {
  const [clicked, setClicked] = useState(loadStrategy === "immediate");
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
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

  const vimeoUrl = buildVimeoEmbedUrl(videoId, {
    hash,
    autoplay: autoplay && shouldLoadIframe,
    loop,
    background,
    showByline,
    showTitle,
    showPortrait,
  });

  const thumbnailUrl =
    thumbnailQuality === "high"
      ? `https://vumbnail.com/${videoId}.jpg`
      : `https://vumbnail.com/${videoId}_medium.jpg`;

  return (
    <div
      ref={ref}
      className={`relative ${aspectRatioClass} overflow-hidden ${className}`}
    >
      {!shouldLoadIframe ? (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => setClicked(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setClicked(true);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Play ${title}`}
        >
          <div className="absolute inset-0 bg-black">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 hover:opacity-95 transition-opacity"
            />
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
        </div>
      ) : (
        <iframe
          src={vimeoUrl}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          title={title}
        />
      )}
    </div>
  );
};

export default LazyVimeoPlayer;
