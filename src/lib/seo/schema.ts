import { businessInfo, SITE_URL } from "@/data/seo/business";
import type { PropertyGeo } from "@/data/seo/propertyGeo";
import type { PropertyCategory, PropertyFeature } from "@/data/properties/catalog";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#localbusiness`,
    name: businessInfo.legalName,
    description: businessInfo.description,
    url: businessInfo.url,
    logo: businessInfo.logo,
    image: businessInfo.logo,
    email: businessInfo.email,
    telephone: businessInfo.telephone,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHours: businessInfo.openingHours,
    areaServed: businessInfo.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    sameAs: businessInfo.sameAs,
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AceHost",
    description: businessInfo.description,
    url: businessInfo.url,
    logo: businessInfo.logo,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    sameAs: businessInfo.sameAs,
    offers: {
      "@type": "AggregateOffer",
      description: "Luxury Vacation Rental Properties in Whistler Canada",
      areaServed: "Whistler, British Columbia",
      offerCount: "15+",
      priceCurrency: "CAD",
    },
    openingHours: businessInfo.openingHours,
  };
}

export function buildHomepageOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AceHost Whistler",
    url: businessInfo.url,
    logo: businessInfo.logo,
    sameAs: businessInfo.sameAs,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/properties?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury Vacation Rental Properties",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Chalet La Forja | Kadenwood | Private Butler",
            url: `${SITE_URL}/listings/chalet-la-forja-kadenwood`,
          },
        },
      ],
    },
    department: [
      {
        "@type": "Organization",
        name: "View Luxury Rental Properties",
        url: `${SITE_URL}/properties`,
      },
      {
        "@type": "Organization",
        name: "Our Story",
        url: `${SITE_URL}/our-story`,
      },
      {
        "@type": "Organization",
        name: "Contact Us",
        url: `${SITE_URL}/contact`,
      },
      {
        "@type": "Organization",
        name: "Property Management",
        url: `${SITE_URL}/list-property`,
      },
      {
        "@type": "Organization",
        name: "AceHost Whistler Luxury Rentals",
        url: `${SITE_URL}/properties`,
      },
      {
        "@type": "Organization",
        name: "Blog",
        url: `${SITE_URL}/blogs`,
      },
      {
        "@type": "Organization",
        name: "WorldWide Listings",
        url: `${SITE_URL}/worldwide-listings`,
      },
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AceHost Whistler Luxury Rentals",
    url: businessInfo.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/properties?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export interface VacationRentalSchemaInput {
  title: string;
  url: string;
  geo: PropertyGeo;
  bedroomCount?: number;
  guestCount?: number;
  images?: string[];
}

export function buildVacationRentalSchema({
  title,
  url,
  geo,
  bedroomCount,
  guestCount,
  images,
}: VacationRentalSchemaInput) {
  const absoluteImages = images
    ?.filter(Boolean)
    .map((img) => (img.startsWith("http") ? img : `${SITE_URL}${img}`));

  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: title,
    url,
    description: `${title} vacation rental in ${geo.locality}, ${geo.region}.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: geo.locality,
      addressRegion: geo.region,
      addressCountry: geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    ...(absoluteImages?.length ? { image: absoluteImages } : {}),
    ...(bedroomCount
      ? { numberOfRooms: bedroomCount }
      : {}),
    ...(guestCount
      ? {
          occupancy: {
            "@type": "QuantitativeValue",
            value: guestCount,
          },
        }
      : {}),
    makesOffer: {
      "@type": "Offer",
      url,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildBreadcrumbSchema(
  title: string,
  canonicalUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Luxury Rental Homes",
        item: `${SITE_URL}/properties`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonicalUrl,
      },
    ],
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
}

export function buildArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
}: ArticleSchemaInput) {
  const absoluteImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : businessInfo.logo;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    image: absoluteImage,
    author: {
      "@type": "Organization",
      name: businessInfo.legalName,
      url: businessInfo.url,
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.legalName,
      url: businessInfo.url,
      logo: {
        "@type": "ImageObject",
        url: businessInfo.logo,
      },
    },
    ...(datePublished ? { datePublished } : {}),
  };
}

function propertyUrl(property: PropertyFeature): string {
  if (property.link) {
    return property.link.startsWith("http")
      ? property.link
      : `${SITE_URL}${property.link}`;
  }
  return `${SITE_URL}/listings/${property.id}`;
}

export function buildPropertiesItemListSchema(
  categories: PropertyCategory[]
) {
  const allProperties = categories.flatMap((category) => category.properties);
  const priceValidUntil = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  )
    .toISOString()
    .split("T")[0];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: allProperties.length,
    itemListElement: allProperties.map((property, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Accommodation",
        name: property.name,
        image: property.images[0]?.startsWith("http")
          ? property.images[0]
          : `${SITE_URL}${property.images[0]}`,
        description: property.description,
        accommodationCategory: "Vacation Rental",
        numberOfRooms: property.bedrooms,
        amenityFeature: property.features.map((feature) => ({
          "@type": "LocationFeatureSpecification",
          name: feature,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: property.location,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          priceValidUntil,
          url: propertyUrl(property),
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}
