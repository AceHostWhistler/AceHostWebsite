import { useEffect, useRef } from "react";

const WIDGET_CONTAINER_ID = "search-widget_IO312PWQ";

/** Exact embed snippet from Guesty dashboard — do not modify. */
const GUESTY_EMBED_SCRIPT = `!function(e,t,a,n,c,r){function s(t){e.console.log("[Guesty Embedded Widget]:",t)}var i,d,l,o,y,m,g,h,p,u;n&&(i=n,d=t.getElementsByTagName("head")[0],(l=t.createElement("link")).rel="stylesheet",l.type="text/css",l.href=i,l.media="all",d.appendChild(l)),o=function(){try{e[a].create(r).catch(function(e){s(e.message)})}catch(e){s(e.message)}},h=!1,y=c,m=function(){h||this.readyState&&"complete"!=this.readyState||(h=!0,o())},(g=t.createElement("script")).type="text/javascript",g.src=y,g.async="true",g.onload=g.onreadystatechange=m,p=g,(u=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,u)}(window,document,"GuestySearchBarWidget","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js",{"siteUrl":"acehost.guestybookings.com","color":"#206CFF"});`;

type GuestySearchWidgetProps = {
  variant?: "default" | "featured";
};

export default function GuestySearchWidget({
  variant = "default",
}: GuestySearchWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isFeatured = variant === "featured";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (container.dataset.guestyEmbed === "true") {
        return;
      }

      container.dataset.guestyEmbed = "true";

      const script = document.createElement("script");
      script.text = GUESTY_EMBED_SCRIPT;
      container.appendChild(script);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <aside
      className={`w-full ${isFeatured ? "mx-auto max-w-md text-center" : ""}`}
      aria-label="Book with us"
    >
      <h3
        className={
          isFeatured
            ? "mb-2 text-2xl font-light tracking-tight text-gray-900 sm:text-3xl"
            : "mb-3 text-lg font-semibold tracking-tight text-stone-900"
        }
      >
        Book with us
      </h3>

      {isFeatured && (
        <p className="mb-5 text-sm text-gray-600">
          Select your dates to check availability across our Whistler collection.
        </p>
      )}

      <div
        className={
          isFeatured
            ? "overflow-hidden rounded-2xl bg-white p-5 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.35)] ring-1 ring-stone-200/80 sm:p-6"
            : "rounded-xl bg-white p-4 shadow-sm ring-1 ring-stone-200/80"
        }
      >
        <div
          ref={containerRef}
          id={WIDGET_CONTAINER_ID}
          className="min-h-[280px] w-full"
        />
      </div>

      <p
        className={
          isFeatured
            ? "mx-auto mt-4 max-w-sm text-sm leading-relaxed text-gray-600"
            : "mt-3 text-sm leading-relaxed text-stone-600"
        }
      >
        Select dates to view availability and book with us. Airbnb links{" "}
        {isFeatured ? "above" : "below"} as an option as well.
      </p>
    </aside>
  );
}
