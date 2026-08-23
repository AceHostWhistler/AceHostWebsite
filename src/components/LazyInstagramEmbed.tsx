import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { buildInstagramEmbedUrl } from "@/lib/videoEmbeds";
import VideoEmbedFrame from "@/components/VideoEmbedFrame";

type LoadStrategy = "click" | "immediate" | "inView";

interface LazyInstagramEmbedProps {
  reelId: string;
  title: string;
  aspectRatio?: "video" | "square" | "portrait";
  className?: string;
  loadStrategy?: LoadStrategy;
}

const LazyInstagramEmbed: React.FC<LazyInstagramEmbedProps> = ({
  reelId,
  title,
  aspectRatio = "portrait",
  className = "",
  loadStrategy = "inView",
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

  const embedUrl = buildInstagramEmbedUrl(reelId);

  return (
    <div
      ref={ref}
      className={`relative ${aspectRatioClass} overflow-hidden ${className}`}
    >
      {!shouldLoadIframe ? (
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] cursor-pointer"
          onClick={() => setClicked(true)}
          aria-label={`Play ${title}`}
        >
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
        <VideoEmbedFrame src={embedUrl} title={title} />
      )}
    </div>
  );
};

export default LazyInstagramEmbed;
