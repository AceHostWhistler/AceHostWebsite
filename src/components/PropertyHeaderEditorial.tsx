import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { ArrowUpRight } from "lucide-react";
import { airbnbButtonPill } from "@/lib/airbnbButtonStyles";

interface PropertyHeaderEditorialProps {
  title: string;
  guests: number | string;
  bedrooms: number | string;
  beds?: number | string;
  bathrooms: number | string;
  priceRange: string;
  winterPrice?: string;
  holidayPrice?: string;
  airbnbLink?: string;
  contactLink?: string;
  contactText?: string;
  amenities?: string[];
  onMorePhotosClick?: () => void;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function parseTitleParts(title: string) {
  const parts = title.split("|").map((p) => p.trim()).filter(Boolean);
  return {
    primary: parts[0] ?? title,
    secondary: parts.slice(1).join(" · "),
  };
}

function parsePriceAmount(raw: string): { amount: string; note?: string } {
  const segments = raw
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  const primary = segments[0] ?? raw;
  const amountMatch = primary.match(
    /(\$[\d,]+(?:\.\d+)?(?:\s*[-–]\s*\$?[\d,]+(?:\.\d+)?)?\+?)/
  );
  if (!amountMatch) {
    return { amount: primary, note: segments.slice(1).join(" · ") || undefined };
  }
  const amount = amountMatch[1];
  const after = primary.slice(amountMatch.index! + amount.length).trim();
  const noteParts = [after, ...segments.slice(1)].filter(Boolean);
  return {
    amount,
    note: noteParts.length > 0 ? noteParts.join(" · ") : undefined,
  };
}

function stripLabelFromNote(note: string | undefined, labels: string[]): string | undefined {
  if (!note) return undefined;
  const lowered = labels.map((l) => l.toLowerCase());
  const cleaned = note
    .split(" · ")
    .map((p) => p.trim())
    .filter((p) => {
      const pl = p.toLowerCase();
      return !lowered.some((l) => pl === l || pl.includes(l));
    })
    .join(" · ");
  return cleaned || undefined;
}

interface PriceRowProps {
  season: string;
  value: string;
  highlight?: boolean;
}

function PriceRow({ season, value, highlight }: PriceRowProps) {
  const { amount, note } = parsePriceAmount(value);
  const detail = stripLabelFromNote(note, [
    season,
    "nightly",
    "per night",
    "winter",
    "holidays",
    "christmas",
    "private butler included",
    "private butler",
    "butler included",
    "butler",
  ]);

  return (
    <div
      className={`flex flex-col gap-0.5 border-b border-stone-200/90 py-2 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 ${
        highlight ? "bg-amber-50/60 -mx-4 px-4 sm:mx-0 sm:px-0 sm:bg-transparent" : ""
      }`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
        {season}
      </span>
      <div className="text-left sm:text-right">
        <span className="text-base tracking-tight text-stone-900 sm:text-lg">
          {amount}
        </span>
        {detail && (
          <p
            className={`mt-1 text-xs leading-snug ${
              highlight ? "text-amber-900/80" : "text-stone-500"
            }`}
          >
            {detail}
          </p>
        )}
      </div>
    </div>
  );
}

const PropertyHeaderEditorial: React.FC<PropertyHeaderEditorialProps> = ({
  title,
  guests,
  bedrooms,
  beds,
  bathrooms,
  priceRange,
  winterPrice,
  holidayPrice,
  airbnbLink,
  contactLink,
  contactText = "Contact Us",
  amenities = [],
  onMorePhotosClick,
}) => {
  const router = useRouter();
  const [cleanPath] = (router.asPath || "/").split("?");
  const canonicalPath =
    cleanPath.endsWith("/") && cleanPath !== "/"
      ? cleanPath.slice(0, -1)
      : cleanPath;
  const canonicalUrl = `https://acehost.ca${canonicalPath}`;

  const { primary, secondary } = parseTitleParts(title);
  const toNumber = (value: number | string | undefined): number | undefined => {
    if (value === undefined) return undefined;
    if (typeof value === "number") return value;
    const match = String(value).match(/\d+(\.\d+)?/);
    return match ? Number(match[0]) : undefined;
  };

  const guestCount = toNumber(guests);
  const bedroomCount = toNumber(bedrooms);
  const bathroomCount = toNumber(bathrooms);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://acehost.ca/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Luxury Rental Homes",
        item: "https://acehost.ca/properties",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  const vacationRentalSchema = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: title,
    url: canonicalUrl,
    description: `${title} vacation rental in Whistler, British Columbia.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Whistler",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    numberOfRooms: bedroomCount,
    occupancy: guestCount
      ? { "@type": "QuantitativeValue", value: guestCount }
      : undefined,
    makesOffer: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
  };

  const specs = [
    { value: String(guests), label: "Guests" },
    { value: String(bedrooms), label: "Bedrooms" },
    ...(beds ? [{ value: String(beds), label: "Beds" }] : []),
    { value: String(bathrooms), label: "Baths" },
  ];

  const holidayHasBooked =
    holidayPrice?.toLowerCase().includes("booked") ?? false;

  return (
    <>
      <Head>
        <link rel="up" href="https://acehost.ca/properties" />
        <link rel="bookmark" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(vacationRentalSchema),
          }}
        />
      </Head>
      <nav aria-label="Breadcrumb" className="sr-only">
        <Link href="/">Home</Link>
        <Link href="/properties">Luxury Rental Homes</Link>
        <Link href={canonicalPath || "/"}>{title}</Link>
      </nav>

      <header className="bg-[#f6f3ed] font-sans text-stone-900">
        {/* Title band */}
        <div className="border-b border-stone-300/50 bg-[#1c1917] px-4 py-5 text-stone-100 sm:px-6 sm:py-7">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-[1.5rem] font-medium leading-[1.1] tracking-tight sm:text-[2.05rem] md:text-[2.45rem]">
              {primary}
            </h1>
            {secondary && (
              <p className="mt-1.5 max-w-xl text-[12px] font-normal tracking-wide text-stone-300 sm:text-[13.5px]">
                {secondary}
              </p>
            )}
          </div>
        </div>

        {/* Spec rail */}
        <div className="border-b border-stone-300/50 bg-[#ebe6dc]">
          <div className="mx-auto flex max-w-6xl flex-wrap divide-x divide-stone-400/40">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex min-w-[25%] flex-1 flex-col items-center px-3 py-3 sm:min-w-0 sm:py-3.5"
              >
                <span className="text-[1.6875rem] font-medium leading-none text-stone-900 sm:text-[1.875rem]">
                  {spec.value}
                </span>
                <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.22em] text-stone-600">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="border-b border-stone-300/50 bg-[#f6f3ed]">
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Amenities
              </h2>
              <ul className="mt-2 grid gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
                {amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[12px] leading-snug text-stone-800"
                  >
                    <span
                      className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-stone-800"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Pricing + actions */}
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
          <div className="grid gap-5 lg:grid-cols-[1fr_minmax(195px,240px)] lg:gap-8">
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Rates
              </h2>
              <div className="mt-1">
                <PriceRow season="Nightly" value={priceRange} />
                {winterPrice && <PriceRow season="Winter" value={winterPrice} />}
                {holidayPrice && (
                  <PriceRow
                    season="Holidays"
                    value={holidayPrice}
                    highlight={holidayHasBooked}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center lg:border-l lg:border-stone-300/60 lg:pl-6">
              {airbnbLink ? (
                <a
                  href={airbnbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={airbnbButtonPill}
                >
                  Book on Airbnb
                  <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : contactLink ? (
                <Link
                  href={contactLink}
                  className="flex w-full items-center justify-between rounded-full bg-[#1c1917] px-5 py-2.5 text-[12px] font-semibold tracking-wide text-stone-100 shadow-sm transition-colors hover:bg-stone-800"
                >
                  {contactText}
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-between rounded-full bg-[#1c1917] px-5 py-2.5 text-[12px] font-semibold tracking-wide text-stone-100 shadow-sm transition-colors hover:bg-stone-800"
                >
                  Book Now
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </Link>
              )}

              <div className="mt-3 flex flex-col gap-1.5 border-t border-stone-300/60 pt-3">
                <button
                  type="button"
                  onClick={() =>
                    onMorePhotosClick
                      ? onMorePhotosClick()
                      : scrollToId("photos")
                  }
                  className="text-left text-xs font-medium text-stone-800 underline decoration-stone-400 underline-offset-4 transition-colors hover:text-stone-600 hover:decoration-stone-600"
                >
                  View all photos
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId("details")}
                  className="text-left text-xs font-medium text-stone-800 underline decoration-stone-400 underline-offset-4 transition-colors hover:text-stone-600 hover:decoration-stone-600"
                >
                  Property details
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default PropertyHeaderEditorial;
