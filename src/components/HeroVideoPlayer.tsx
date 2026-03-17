"use client";

import React, { useRef } from "react";
import Script from "next/script";

const VIMEO_VIDEO_ID = "1122267050";

const HeroVideoPlayer = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  const initPlayer = () => {
    if (typeof window === "undefined") return;
    const Vimeo = (window as any).Vimeo;
    if (!Vimeo) return;
    const tryInit = (attempt = 0) => {
      if (iframeRef.current) {
        playerRef.current = new Vimeo.Player(iframeRef.current);
      } else if (attempt < 50) {
        setTimeout(() => tryInit(attempt + 1), 50);
      }
    };
    tryInit();
  };

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Retry init if Vimeo script loaded late
    if (!playerRef.current && iframeRef.current && (window as any).Vimeo) {
      const Vimeo = (window as any).Vimeo;
      playerRef.current = new Vimeo.Player(iframeRef.current);
    }
    if (!playerRef.current) return;
    try {
      const paused = await playerRef.current.getPaused();
      if (paused) {
        await playerRef.current.play();
      } else {
        await playerRef.current.pause();
      }
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative w-full bg-cream overflow-hidden">
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="afterInteractive"
        onLoad={initPlayer}
      />
      <div className="relative w-full aspect-[21/9] overflow-hidden cursor-pointer">
        {/* Video - zoomed and stretched to fill strip */}
        <div className="absolute inset-0 w-[130%] h-[130%] -left-[15%] -top-[15%]">
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=0&loop=1&background=0&controls=0`}
            className="absolute inset-0 w-full h-full pointer-events-none"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title="The AceHost Whistler Vacation Experience"
            loading="eager"
          />
        </div>
        {/* Click overlay - captures clicks for play/pause */}
        <div
          onClick={handleClick}
          className="absolute inset-0 z-10"
          aria-label="Click to play video"
        />
      </div>
    </section>
  );
};

export default HeroVideoPlayer;
