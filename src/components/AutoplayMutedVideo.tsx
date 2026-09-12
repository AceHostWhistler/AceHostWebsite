import React, { useEffect, useRef } from "react";

interface AutoplayMutedVideoProps {
  src: string;
  poster: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
}

export default function AutoplayMutedVideo({
  src,
  poster,
  className = "",
  preload = "metadata",
}: AutoplayMutedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playAttempt = video.play();
    if (playAttempt) {
      playAttempt.catch(() => {
        /* Autoplay can be rejected; the poster remains visible. */
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
