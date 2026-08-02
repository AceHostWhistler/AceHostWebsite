import { allArticles } from "@/utils/blogArticles";
import { getListing } from "@/data/listings";
import { businessInfo } from "@/data/seo/business";
import { getPropertyCardCoverImage } from "@/lib/seo/propertyCardCovers";
import {
  ACEHOST_LOGO_IMAGE,
  DEFAULT_SOCIAL_IMAGE,
  normalizePath,
  type SocialSharePayload,
} from "@/lib/seo/socialShare";

type StaticPageMeta = Omit<SocialSharePayload, "type">;

const LA_FORJA_COVER_IMAGE =
  getPropertyCardCoverImage("/listings/chalet-la-forja-kadenwood") ??
  "/photos/properties/Chalet La Forja/New Drone Cover photo Forja.png";

const MOUNTAINTOP_COVER_IMAGE =
  "/photos/properties/2919 Heritage/Mountaintop Snow cover.png";

const STATIC_PAGES: Record<string, StaticPageMeta> = {
  "/": {
    title: "AceHost | Luxury Vacation Rental Properties in Whistler",
    description:
      "AceHost offers luxury rental properties in Whistler, VIP concierge services, and property management. Explore our exclusive collection of Whistler chalets and homes.",
    image: ACEHOST_LOGO_IMAGE,
  },
  "/properties": {
    title: "Luxury Vacation Rentals in Whistler | AceHost",
    description:
      "Browse our exclusive collection of luxury vacation rentals in Whistler, BC. Ski-in/ski-out chalets, premium condos, and spectacular mountain homes available.",
    image: LA_FORJA_COVER_IMAGE,
  },
  "/blogs": {
    title: "The AceHost Blog | Luxury Whistler Vacation Rentals & Tips",
    description:
      "Explore the AceHost blog for insights on luxury accommodations in Whistler, property management tips, seasonal ski reports, and exclusive travel experiences.",
    image: MOUNTAINTOP_COVER_IMAGE,
  },
  "/contact": {
    title: "Contact Us | AceHost Whistler",
    description:
      "Get in touch with AceHost Whistler for luxury property management services, vacation rentals, and VIP concierge services in Whistler.",
    image: ACEHOST_LOGO_IMAGE,
  },
  "/concierge-service": {
    title: "Whistler VIP Concierge Services | AceHost",
    description:
      "Personalized luxury concierge services for your Whistler vacation. From private chefs to heli-skiing, we take care of every detail.",
    image: ACEHOST_LOGO_IMAGE,
  },
  "/faq": {
    title: "FAQ - AceHost | Luxury Vacation Rental Properties in Whistler",
    description:
      "Find answers to frequently asked questions about AceHost luxury vacation rentals in Whistler, our concierge services, and property management.",
    image: ACEHOST_LOGO_IMAGE,
  },
  "/our-story": {
    title: "Our Story | AceHost Whistler Luxury Vacation Rentals",
    description:
      "Learn about the AceHost team and our mission to provide exceptional luxury vacation rental experiences in Whistler.",
    image: ACEHOST_LOGO_IMAGE,
  },
  "/list-property": {
    title:
      "List Your Luxury Vacation Rental Property | AceHost Whistler Property Management",
    description:
      "Partner with AceHost to manage and market your luxury Whistler vacation rental with professional property management and concierge services.",
    image: ACEHOST_LOGO_IMAGE,
  },
  "/listings/hotel-booking-assistance": {
    title: "Hotel Booking Assistance & Concierge Services | AceHost",
    description:
      "AceHost hotel booking assistance and concierge services for Whistler and beyond.",
    image: ACEHOST_LOGO_IMAGE,
  },
  "/privacy": {
    title: "Privacy Policy | AceHost Whistler",
    description: "AceHost Whistler privacy policy.",
    image: ACEHOST_LOGO_IMAGE,
  },
  "/terms": {
    title: "Terms of Service | AceHost Whistler",
    description: "AceHost Whistler terms of service.",
    image: ACEHOST_LOGO_IMAGE,
  },
};

const WORLDWIDE_LISTING_TITLES: Record<string, Pick<StaticPageMeta, "title" | "description">> = {
  "helios-estate-mykonos": {
    title: "Helios Estate | Mykonos, Greece - AceHost",
    description: businessInfo.description,
  },
  "mykonos-crystal-villa": {
    title: "Villa Aegean | Mykonos, Greece - AceHost",
    description: businessInfo.description,
  },
  "villa-oineas-greece-mykonos": {
    title: "Villa Oineas | Mykonos, Greece - AceHost",
    description: businessInfo.description,
  },
  "villa-rosabella-mykonos": {
    title: "Villa Rosabella | Mykonos, Greece - AceHost",
    description: businessInfo.description,
  },
  "santorini-greece-villa-eclipse": {
    title: "Villa Eclipse | Santorini, Greece - AceHost",
    description: businessInfo.description,
  },
  "punta-mita---casa-juntos": {
    title: "Punta Mita - Casa Juntos | AceHost Luxury Rentals",
    description: businessInfo.description,
  },
  "hood-river-luxury-home": {
    title: "Hood River, US | Water Views - AceHost",
    description: businessInfo.description,
  },
  "super-yacht-thailand": {
    title: "Super Yacht | Thailand / SE Asia - AceHost",
    description: businessInfo.description,
  },
  "luxe-5-bed-scandinave-retreat": {
    title: "Luxe 5-BED Scandinave Retreat | Walk to Slopes - AceHost",
    description: businessInfo.description,
  },
  "cotswolds-uk-soho-farm-house": {
    title: "Luxury Cotswolds Rental Home Near Soho Farmhouse | AceHost",
    description: businessInfo.description,
  },
  "vancouver-house-corner-unit-30th-floor": {
    title: "The Vancouver House, Corner Unit | 30th Floor - AceHost",
    description: businessInfo.description,
  },
};

const articleByLink = new Map(
  allArticles.map((article) => [article.link, article])
);

function resolveListingSocialShare(
  slug: string,
  prefix: "listings" | "worldwide-listings" | "vancouver-listings"
): SocialSharePayload | null {
  const listingPath = `/${prefix}/${slug}`;
  const cardCover = getPropertyCardCoverImage(listingPath);

  if (prefix === "listings") {
    const listing = getListing(slug);
    if (!listing) return null;

    return {
      title: listing.seo.title,
      description: listing.seo.description,
      image: cardCover ?? listing.photos[0] ?? DEFAULT_SOCIAL_IMAGE,
      type: "website",
    };
  }

  const listingMeta = WORLDWIDE_LISTING_TITLES[slug];
  if (!listingMeta) return null;

  return {
    ...listingMeta,
    image: cardCover ?? DEFAULT_SOCIAL_IMAGE,
    type: "website",
  };
}

export function resolveSocialShare(
  path: string,
  locales: readonly string[] = ["en"]
): SocialSharePayload {
  const normalizedPath = normalizePath(path, locales);

  const staticPage = STATIC_PAGES[normalizedPath];
  if (staticPage) {
    return { ...staticPage, type: "website" };
  }

  const postMatch = normalizedPath.match(/^\/post\/([^/]+)$/);
  if (postMatch) {
    const slug = postMatch[1];
    const article = articleByLink.get(`/post/${slug}`);
    if (article) {
      return {
        title: article.title,
        description: article.description ?? article.title,
        image: article.coverImage,
        type: "article",
      };
    }

    return {
      title: slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: businessInfo.description,
      image: ACEHOST_LOGO_IMAGE,
      type: "article",
    };
  }

  for (const prefix of [
    "listings",
    "worldwide-listings",
    "vancouver-listings",
  ] as const) {
    const match = normalizedPath.match(new RegExp(`^/${prefix}/([^/]+)$`));
    if (match) {
      const resolved = resolveListingSocialShare(match[1], prefix);
      if (resolved) return resolved;
    }
  }

  return {
    title: businessInfo.legalName,
    description: businessInfo.description,
    image: DEFAULT_SOCIAL_IMAGE,
    type: "website",
  };
}
