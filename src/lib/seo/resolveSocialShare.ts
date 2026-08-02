import { allArticles } from "@/utils/blogArticles";
import { getListing } from "@/data/listings";
import { businessInfo } from "@/data/seo/business";
import {
  DEFAULT_SOCIAL_IMAGE,
  normalizePath,
  type SocialSharePayload,
} from "@/lib/seo/socialShare";

type StaticPageMeta = Omit<SocialSharePayload, "type">;

const STATIC_PAGES: Record<string, StaticPageMeta> = {
  "/": {
    title: "AceHost | Luxury Vacation Rental Properties in Whistler",
    description:
      "AceHost offers luxury rental properties in Whistler, VIP concierge services, and property management. Explore our exclusive collection of Whistler chalets and homes.",
    image: "/photos/homepage/WhistlerVacationRental.jpg",
  },
  "/properties": {
    title: "Luxury Vacation Rentals in Whistler | AceHost",
    description:
      "Browse our exclusive collection of luxury vacation rentals in Whistler, BC. Ski-in/ski-out chalets, premium condos, and spectacular mountain homes available.",
    image: "/photos/properties/Two Cedars New/Two Cedars Cover photo snow.png",
  },
  "/blogs": {
    title: "The AceHost Blog | Luxury Whistler Vacation Rentals & Tips",
    description:
      "Explore the AceHost blog for insights on luxury accommodations in Whistler, property management tips, seasonal ski reports, and exclusive travel experiences.",
    image: allArticles[0]?.coverImage ?? DEFAULT_SOCIAL_IMAGE,
  },
  "/contact": {
    title: "Contact Us | AceHost Whistler",
    description:
      "Get in touch with AceHost Whistler for luxury property management services, vacation rentals, and VIP concierge services in Whistler.",
    image: "/photos/homepage/pm/cedars full res.jpg",
  },
  "/concierge-service": {
    title: "Whistler VIP Concierge Services | AceHost",
    description:
      "Personalized luxury concierge services for your Whistler vacation. From private chefs to heli-skiing, we take care of every detail.",
    image: "/photos/homepage/concierge-service/PrivateChef.jpeg",
  },
  "/faq": {
    title: "FAQ - AceHost | Luxury Vacation Rental Properties in Whistler",
    description:
      "Find answers to frequently asked questions about AceHost luxury vacation rentals in Whistler, our concierge services, and property management.",
    image: DEFAULT_SOCIAL_IMAGE,
  },
  "/our-story": {
    title: "Our Story | AceHost Whistler Luxury Vacation Rentals",
    description:
      "Learn about the AceHost team and our mission to provide exceptional luxury vacation rental experiences in Whistler.",
    image: "/thumbnails/20241125 A7M3 02 A1_05791-Edit.jpg",
  },
  "/list-property": {
    title:
      "List Your Luxury Vacation Rental Property | AceHost Whistler Property Management",
    description:
      "Partner with AceHost to manage and market your luxury Whistler vacation rental with professional property management and concierge services.",
    image: "/photos/homepage/WhistlerVacationRental.jpg",
  },
  "/listings/hotel-booking-assistance": {
    title: "Hotel Booking Assistance & Concierge Services | AceHost",
    description:
      "AceHost hotel booking assistance and concierge services for Whistler and beyond.",
    image: "/thumbnails/Fairmont Image.webp",
  },
  "/privacy": {
    title: "Privacy Policy | AceHost Whistler",
    description: "AceHost Whistler privacy policy.",
    image: DEFAULT_SOCIAL_IMAGE,
  },
  "/terms": {
    title: "Terms of Service | AceHost Whistler",
    description: "AceHost Whistler terms of service.",
    image: DEFAULT_SOCIAL_IMAGE,
  },
};

const WORLDWIDE_LISTINGS: Record<string, StaticPageMeta> = {
  "helios-estate-mykonos": {
    title: "Helios Estate | Mykonos, Greece - AceHost",
    description: businessInfo.description,
    image:
      "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (1).jpg",
  },
  "mykonos-crystal-villa": {
    title: "Villa Aegean | Mykonos, Greece - AceHost",
    description: businessInfo.description,
    image:
      "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
  },
  "villa-oineas-greece-mykonos": {
    title: "Villa Oineas | Mykonos, Greece - AceHost",
    description: businessInfo.description,
    image:
      "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06907.jpg",
  },
  "villa-rosabella-mykonos": {
    title: "Villa Rosabella | Mykonos, Greece - AceHost",
    description: businessInfo.description,
    image:
      "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (22).jpg",
  },
  "santorini-greece-villa-eclipse": {
    title: "Villa Eclipse | Santorini, Greece - AceHost",
    description: businessInfo.description,
    image:
      "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(7 of 25).jpg",
  },
  "punta-mita---casa-juntos": {
    title: "Punta Mita - Casa Juntos | AceHost Luxury Rentals",
    description: businessInfo.description,
    image: "/photos/properties/Punta Mita/242608_2093 copy 2.jpg",
  },
  "hood-river-luxury-home": {
    title: "Hood River, US | Water Views - AceHost",
    description: businessInfo.description,
    image: "/photos/properties/hood-river-luxury-home/View 1.jpg",
  },
  "super-yacht-thailand": {
    title: "Super Yacht | Thailand / SE Asia - AceHost",
    description: businessInfo.description,
    image: "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
  },
  "luxe-5-bed-scandinave-retreat": {
    title: "Luxe 5-BED Scandinave Retreat | Walk to Slopes - AceHost",
    description: businessInfo.description,
    image: "/high-quality/scandinave-fixed/scandinave-7.jpg",
  },
  "cotswolds-uk-soho-farm-house": {
    title:
      "Luxury Cotswolds Rental Home Near Soho Farmhouse | AceHost",
    description: businessInfo.description,
    image:
      "/photos/properties/Cotswolds UK - Soho Farm House/224A8292.jpg",
  },
  "vancouver-house-corner-unit-30th-floor": {
    title: "The Vancouver House, Corner Unit | 30th Floor - AceHost",
    description: businessInfo.description,
    image:
      "/photos/properties/vancouver-house/645adc4aca79d22167763483_Vancouver_House-03.jpg",
  },
};

const articleByLink = new Map(
  allArticles.map((article) => [article.link, article])
);

function resolveListingSocialShare(
  slug: string,
  prefix: "listings" | "worldwide-listings" | "vancouver-listings"
): SocialSharePayload | null {
  if (prefix === "listings") {
    const listing = getListing(slug);
    if (!listing) return null;

    return {
      title: listing.seo.title,
      description: listing.seo.description,
      image: listing.photos[0] ?? DEFAULT_SOCIAL_IMAGE,
      type: "website",
    };
  }

  const listingMeta = WORLDWIDE_LISTINGS[slug];
  if (!listingMeta) return null;

  return {
    ...listingMeta,
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
      image: `/photos/post/${slug}/hero.jpg`,
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
