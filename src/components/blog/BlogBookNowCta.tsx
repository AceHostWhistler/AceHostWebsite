import React, { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { BOOK_WHISTLER_WINTER_URL } from "@/components/blog/BookWhistlerWinterButton";

export type BookNowPlacement =
  | "hero"
  | "comparison"
  | "properties"
  | "footer"
  | "mobile_sticky";

const BOOKING_URL = BOOK_WHISTLER_WINTER_URL;

function trackBookNow(placement: BookNowPlacement) {
  track("book_now", { placement });
}

const buttonBase =
  "inline-flex items-center justify-center rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function BlogBookNowButton({
  placement,
  variant = "onDark",
  className = "",
}: {
  placement: BookNowPlacement;
  variant?: "onDark" | "onLight";
  className?: string;
}) {
  const colours =
    variant === "onDark"
      ? "bg-white text-gray-900 hover:bg-gray-100 focus-visible:ring-white focus-visible:ring-offset-gray-900"
      : "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-900 focus-visible:ring-offset-white";

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBookNow(placement)}
      className={`${buttonBase} ${colours} w-full min-h-14 px-8 text-lg sm:min-h-[60px] md:min-h-16 md:min-w-[280px] md:w-auto md:text-[19px] ${className}`}
    >
      Book Now
    </a>
  );
}

export function BlogBookNowPanel({
  id,
  placement,
  headline,
  supporting,
  emphasis = false,
  compact = false,
}: {
  id: string;
  placement: Exclude<BookNowPlacement, "mobile_sticky">;
  headline: string;
  supporting: string;
  emphasis?: boolean;
  compact?: boolean;
}) {
  if (emphasis) {
    return (
      <section
        id={id}
        data-book-now-panel="true"
        className="not-prose relative w-screen left-1/2 -translate-x-1/2 bg-gray-900 text-white my-14 md:my-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
            AceHost Whistler
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {headline}
          </h2>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            {supporting}
          </p>
          <BlogBookNowButton placement={placement} variant="onDark" />
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      data-book-now-panel="true"
      className={`not-prose rounded-2xl bg-gray-900 text-white px-6 py-8 sm:px-8 sm:py-10 text-center shadow-sm ${
        compact ? "mt-0 mb-6 md:mb-8" : "my-8 md:my-10"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
        {headline}
      </h2>
      <p className="text-gray-200 text-base leading-relaxed mb-6 max-w-xl mx-auto">
        {supporting}
      </p>
      <BlogBookNowButton placement={placement} variant="onDark" />
    </section>
  );
}

export function BlogMobileStickyBookBar({
  heroSelector,
  panelSelector = "[data-book-now-panel='true']",
}: {
  heroSelector: string;
  panelSelector?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(heroSelector);
    const footer = document.querySelector("footer");
    if (!hero) return undefined;

    const update = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setVisible(false);
        return;
      }

      const heroGone = hero.getBoundingClientRect().bottom < 0;
      const panelVisible = Array.from(
        document.querySelectorAll(panelSelector)
      ).some((panel) => {
        const rect = panel.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
      const footerVisible = footer
        ? footer.getBoundingClientRect().top < window.innerHeight
        : false;

      setVisible(heroGone && !panelVisible && !footerVisible);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [heroSelector, panelSelector]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <p className="text-sm font-medium text-white leading-snug shrink min-w-0">
          Find your Whistler stay
        </p>
        <BlogBookNowButton
          placement="mobile_sticky"
          variant="onDark"
          className="min-h-14 min-w-0 w-auto flex-1 px-5 text-base md:min-h-14"
        />
      </div>
    </div>
  );
}
