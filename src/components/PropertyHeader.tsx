import React from "react";
import { Users, Bed, Bath, Camera, FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

interface PropertyHeaderProps {
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
  /** Opens the full photo gallery when provided (e.g. from PropertyListingLayout). */
  onMorePhotosClick?: () => void;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatItem({ icon, label, value }: StatItemProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200/80 bg-neutral-50/60 px-3 py-4 backdrop-blur-sm transition-colors hover:border-neutral-300/90 hover:bg-neutral-50">
      <div className="mb-2 text-neutral-500">{icon}</div>
      <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
        {label}
      </span>
      <span className="mt-0.5 text-center text-sm font-semibold tracking-tight text-neutral-900 sm:text-[15px]">
        {value}
      </span>
    </div>
  );
}

interface ParsedPrice {
  amount: string;
  detail?: string;
}

/** Split a price string into a prominent dollar range and quieter supporting text. */
function parsePriceText(raw: string): ParsedPrice {
  const segments = raw
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  const primary = segments[0] ?? raw;

  const amountMatch = primary.match(
    /(\$[\d,]+(?:\.\d+)?(?:\s*[-–]\s*\$?[\d,]+(?:\.\d+)?)?\+?)/
  );

  if (!amountMatch) {
    return { amount: primary, detail: segments.slice(1).join(" · ") || undefined };
  }

  const amount = amountMatch[1];
  const afterAmount = primary.slice(amountMatch.index! + amount.length).trim();
  const detailParts = [afterAmount, ...segments.slice(1)].filter(Boolean);
  const detail = detailParts.length > 0 ? detailParts.join(" · ") : undefined;

  return { amount, detail };
}

function cleanPriceDetail(detail: string | undefined, label: string): string | undefined {
  if (!detail) return undefined;
  const labelLower = label.toLowerCase();
  const cleaned = detail
    .split(" · ")
    .map((part) => part.trim())
    .filter((part) => {
      const lower = part.toLowerCase();
      if (lower === labelLower) return false;
      if (lower === "nightly" && labelLower !== "nightly") return false;
      return part.length > 0;
    })
    .join(" · ");
  return cleaned || undefined;
}

interface PriceTierProps {
  label: string;
  value: string;
}

function PriceTier({ label, value }: PriceTierProps) {
  const { amount, detail } = parsePriceText(value);
  const subtitle = cleanPriceDetail(detail, label);

  return (
    <div className="flex min-h-[88px] flex-col items-center justify-center rounded-2xl border border-neutral-200/80 bg-neutral-50/60 px-3 py-4 text-center backdrop-blur-sm">
      <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
        {label}
      </span>
      <span className="mt-2 text-[15px] font-semibold leading-tight tracking-tight text-neutral-900 sm:text-base">
        {amount}
      </span>
      {subtitle && (
        <span className="mt-1.5 max-w-[220px] text-[11px] leading-snug text-neutral-500">
          {subtitle}
        </span>
      )}
    </div>
  );
}

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
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
  onMorePhotosClick,
}) => {
  const router = useRouter();
  const [cleanPath] = (router.asPath || "/").split("?");
  const canonicalPath =
    cleanPath.endsWith("/") && cleanPath !== "/"
      ? cleanPath.slice(0, -1)
      : cleanPath;
  const canonicalUrl = `https://acehost.ca${canonicalPath}`;
  const toNumber = (value: number | string | undefined): number | undefined => {
    if (value === undefined) return undefined;
    if (typeof value === "number") return value;
    const match = String(value).match(/\d+(\.\d+)?/);
    return match ? Number(match[0]) : undefined;
  };
  const guestCount = toNumber(guests);
  const bedroomCount = toNumber(bedrooms);
  const bedCount = toNumber(beds);
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
      ? {
          "@type": "QuantitativeValue",
          value: guestCount,
        }
      : undefined,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Ski access",
        value: title.toLowerCase().includes("ski"),
      },
    ],
    makesOffer: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
  };

  const additionalPropertySchema = {
    "@context": "https://schema.org",
    "@type": "PropertyValue",
    name: "Vacation rental details",
    valueReference: {
      "@type": "DefinedTermSet",
      name: "Accommodation specs",
    },
    value: JSON.stringify({
      guests: guestCount,
      bedrooms: bedroomCount,
      beds: bedCount,
      bathrooms: bathroomCount,
      pricing: {
        standard: priceRange,
        winter: winterPrice,
        holiday: holidayPrice,
      },
    }),
  };

  const iconClass = "h-[18px] w-[18px] stroke-[1.5]";
  const stats: StatItemProps[] = [
    {
      icon: <Users className={iconClass} />,
      label: "Guests",
      value: String(guests),
    },
    {
      icon: <Bed className={iconClass} />,
      label: "Bedrooms",
      value: String(bedrooms),
    },
    ...(beds
      ? [
          {
            icon: <Bed className={iconClass} />,
            label: "Beds",
            value: String(beds),
          },
        ]
      : []),
    {
      icon: <Bath className={iconClass} />,
      label: "Baths",
      value: String(bathrooms),
    },
  ];

  const statCols = beds ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3";

  const priceTiers = [
    { label: "Nightly", value: priceRange },
    ...(winterPrice ? [{ label: "Winter", value: winterPrice }] : []),
    ...(holidayPrice ? [{ label: "Holidays", value: holidayPrice }] : []),
  ];
  const priceCols =
    priceTiers.length === 1
      ? "grid-cols-1 max-w-xs mx-auto"
      : priceTiers.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-3";

  const primaryCtaClass =
    "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 text-[15px] font-medium tracking-tight text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98] sm:h-11 sm:w-auto sm:min-w-[200px]";

  const secondaryCtaClass =
    "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-neutral-300/90 bg-white/80 px-5 text-[15px] font-medium tracking-tight text-neutral-900 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50 active:scale-[0.98] sm:h-11 sm:flex-1";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(additionalPropertySchema),
          }}
        />
      </Head>
      <nav aria-label="Breadcrumb" className="sr-only">
        <Link href="/">Home</Link>
        <Link href="/properties">Luxury Rental Homes</Link>
        <Link href={canonicalPath || "/"}>{title}</Link>
      </nav>

      <header className="border-b border-neutral-200/60 bg-gradient-to-b from-neutral-50/80 to-white">
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12">
          <h1 className="text-center text-[1.35rem] font-semibold leading-[1.25] tracking-tight text-neutral-900 sm:text-[1.75rem] md:text-[2rem]">
            {title}
          </h1>

          <div className={`mt-8 grid ${statCols} gap-2.5 sm:gap-3`}>
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>

          <div className={`mt-6 grid ${priceCols} gap-2.5 sm:gap-3`}>
            {priceTiers.map((tier) => (
              <PriceTier key={tier.label} {...tier} />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2.5 sm:mt-10">
            {airbnbLink ? (
              <a
                href={airbnbLink}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryCtaClass}
              >
                Book on Airbnb
                <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : contactLink ? (
              <Link href={contactLink} className={primaryCtaClass}>
                {contactText}
              </Link>
            ) : (
              <Link href="/contact" className={primaryCtaClass}>
                Book Now
              </Link>
            )}

            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:justify-center sm:gap-3">
              <button
                type="button"
                onClick={() =>
                  onMorePhotosClick
                    ? onMorePhotosClick()
                    : scrollToId("photos")
                }
                className={secondaryCtaClass}
              >
                <Camera className="h-4 w-4 text-neutral-500" />
                More Photos
              </button>
              <button
                type="button"
                onClick={() => scrollToId("details")}
                className={secondaryCtaClass}
              >
                <FileText className="h-4 w-4 text-neutral-500" />
                Details
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default PropertyHeader;
