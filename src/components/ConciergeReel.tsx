import React from "react";
import AutoplayMutedVideo from "@/components/AutoplayMutedVideo";

export default function ConciergeReel() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[300px]" aria-hidden="true">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-[1.75rem] bg-black shadow-2xl ring-1 ring-white/20">
        <div className="border-b border-white/10 bg-black/80 px-4 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-300">
            Concierge Reel
          </span>
        </div>
        <div className="relative aspect-[9/16] bg-black">
          <img
            src="/videos/concierge-reel-poster.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
          <AutoplayMutedVideo
            src="/videos/concierge-reel.mp4"
            poster="/videos/concierge-reel-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            preload="metadata"
          />
        </div>
      </div>
    </div>
  );
}
