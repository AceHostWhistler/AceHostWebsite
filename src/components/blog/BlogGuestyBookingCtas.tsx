import React from "react";
import BookWhistlerWinterButton from "@/components/blog/BookWhistlerWinterButton";

/** Full-width banner before related articles — end-of-article booking prompt */
export function BlogGuestyPreRelatedBanner() {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Plan your trip
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Ready to book your Whistler stay?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto">
          Browse luxury chalets, village condos, and ski-in/ski-out homes with
          live availability through AceHost.
        </p>
        <BookWhistlerWinterButton
          variant="hero"
          label="Book Whistler Stays"
          className="px-8"
        />
      </div>
    </div>
  );
}

/** Compact strip after related articles */
export function BlogGuestyPostRelatedBanner() {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 bg-white border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 px-5 py-5 sm:px-6">
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed text-center sm:text-left">
            See what&apos;s available for your dates — Whistler winter homes,
            updated in real time.
          </p>
          <BookWhistlerWinterButton
            variant="secondary"
            label="Check Live Availability"
            className="shrink-0 w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

/** Inline banner for mid or end of article body (prose-width) */
export function BlogGuestyInlineBanner({
  compact = false,
}: {
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="not-prose my-10 rounded-xl border border-gray-200 bg-gray-50 px-5 py-5 sm:px-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4 sm:mb-0">
          Planning a Whistler trip? Browse AceHost stays with live availability.
        </p>
        <BookWhistlerWinterButton
          variant="primary"
          label="Book Whistler Stays"
          className="shrink-0 w-full sm:w-auto text-sm"
        />
      </div>
    );
  }

  return (
    <div className="not-prose my-10 rounded-xl bg-gray-900 text-white px-6 py-8 sm:px-8 sm:py-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
        AceHost Whistler
      </p>
      <p className="text-lg font-semibold text-white mb-2">
        Find your perfect mountain home
      </p>
      <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md mx-auto">
        Luxury vacation rentals in Whistler — chalets, condos, and ski-in/ski-out
        properties bookable online.
      </p>
      <BookWhistlerWinterButton variant="hero" label="Browse & Book Stays" />
    </div>
  );
}
