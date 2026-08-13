import { ArrowUpRight, CalendarDays } from "lucide-react";

const GUESTY_BOOKING_URL = "https://acehost.guestybookings.com";

type GuestySearchWidgetProps = {
  airbnbLinksPosition?: "above" | "below";
};

export default function GuestySearchWidget({
  airbnbLinksPosition = "below",
}: GuestySearchWidgetProps) {
  return (
    <aside
      className="w-full rounded-xl bg-white p-5 shadow-sm ring-1 ring-stone-200/80 sm:p-6"
      aria-label="Book with us"
    >
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-800">
          <CalendarDays className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-stone-900">
            Book with us
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-stone-600">
            Search dates, view live availability, and book direct on our secure
            checkout.
          </p>
        </div>
      </div>

      <a
        href={GUESTY_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full items-center justify-center gap-2 rounded-md bg-stone-900 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-stone-800 active:scale-[0.99]"
      >
        Check availability
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>

      <p className="mt-3 text-xs leading-relaxed text-stone-500">
        Opens our booking site in a new tab. Airbnb links{" "}
        {airbnbLinksPosition} as an option as well.
      </p>
    </aside>
  );
}
