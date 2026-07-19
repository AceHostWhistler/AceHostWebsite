import { listings } from "./listings";

/** Properties that should show Contact Us instead of Book Now on cards */
export const CONTACT_ONLY_PROPERTY_IDS = new Set([
  "scandinavian-mountainside-retreat-pemberton-meadows-50-acres",
  "hotel-booking-assistance",
  "super-yacht-thailand",
  "mykonos-crystal-villa",
  "punta-mita---casa-juntos",
  "hood-river-luxury-home",
  "santorini-greece-villa-eclipse",
  "villa-oineas-greece-mykonos",
  "helios-estate-mykonos",
  "villa-rosabella-mykonos",
  "vancouver-house-corner",
  "wedge-mountain-lodge",
  "wedge-mountain-lodge-spa",
]);

/** Catalog/homepage property IDs that differ from listing slugs */
const PROPERTY_ID_TO_LISTING_SLUG: Record<string, string> = {
  "two-cedars": "two-cedars-kadenwood",
  "chalet-la-forja": "chalet-la-forja-kadenwood",
  "panoramic-estate": "panoramic-estate-kadenwood",
  "slopeside-villa": "slopeside-villa-kadenwood",
  "heron-views-whistler": "heron-views-whistler-village",
  "luxury-6-bedroom-blueberry": "luxury-6-bedroom-whistler-village-blueberry",
  "golf-course-views": "golf-course-views-luxury-4-bed-whistler-village",
  "rare-3-bedroom-whistler-village": "rare-3-bedroom-whistler-village-walk-to-hill",
  "ravens-nest": "ravens-nest-ski-in-ski-out-views",
  "bluffs-unit-4": "bluffs-unit-4-taluswood",
  "cozy-lakefront-whistler-condo": "cozy-lakefront-whistler-condo-mountain-view",
  "squamish-retreat": "squamish-retreat-with-the-best-view",
  "whistler-village-penthouse-3-bdr": "whistler-village-penthouse-3-bdr-walk-to-ski",
  "wedge-mountain-lodge": "wedge-mountain-lodge-spa",
  "whispering-pines": "whispering-pines-ski-in-ski-out",
  "marquise-2-bed": "marquise-2-bed-ski-in-ski-out",
  "the-nest": "the-nest-ski-in-ski-out",
};

/** Airbnb links for cards not stored in listing meta */
const EXTRA_PROPERTY_AIRBNB_LINKS: Record<string, string> = {
  "falcon-blueberry-drive":
    "https://www.airbnb.ca/rooms/18060329?preview_for_ml=true&source_impression_id=p3_1684112119_tL0LL7QnYLFGOCBI",
  "luxe-5-bed-scandinave-retreat":
    "https://www.airbnb.ca/rooms/1313847204355627326?guests=1&adults=1&s=67&unique_share_id=507dffd6-1f84-49a3-99eb-d10f493a65a6",
  "cotswolds-uk-soho-farm-house":
    "https://www.airbnb.ca/rooms/1414129878809697902?guests=1&adults=1&s=67&unique_share_id=ba3bff7b-bc57-416c-bcd6-96b0943cfe51",
  "snow-pine":
    "https://www.airbnb.ca/rooms/744832560480313027?guests=1&adults=1&s=67&unique_share_id=50412c76-d839-4753-bf56-19310f38a4ef",
  "whistler-village-views-luxury-2-5-bedroom":
    "https://www.airbnb.ca/rooms/50025973?guests=1&adults=1&s=67&unique_share_id=04ceb090-1b8e-4e32-972f-d616b380a0a8",
  "whistler-village-views":
    "https://www.airbnb.ca/rooms/50025973?guests=1&adults=1&s=67&unique_share_id=04ceb090-1b8e-4e32-972f-d616b380a0a8",
};

function isValidAirbnbLink(link?: string): link is string {
  return (
    !!link &&
    link.trim().length > 0 &&
    !link.includes("your-listing-url")
  );
}

function getListingAirbnbLink(slug: string): string | undefined {
  const link = listings[slug]?.header?.airbnbLink;
  return isValidAirbnbLink(link) ? link : undefined;
}

/** Resolve the Airbnb booking URL for a property card by catalog/homepage id */
export function getPropertyAirbnbLink(
  propertyId: string,
  fallback?: string
): string | undefined {
  if (CONTACT_ONLY_PROPERTY_IDS.has(propertyId)) {
    return undefined;
  }

  if (EXTRA_PROPERTY_AIRBNB_LINKS[propertyId]) {
    return EXTRA_PROPERTY_AIRBNB_LINKS[propertyId];
  }

  if (isValidAirbnbLink(fallback)) {
    return fallback;
  }

  const slug = PROPERTY_ID_TO_LISTING_SLUG[propertyId] ?? propertyId;
  return getListingAirbnbLink(slug);
}

export function shouldUseContactForBooking(
  propertyId: string,
  contactLink?: string,
  airbnbLink?: string
): boolean {
  if (CONTACT_ONLY_PROPERTY_IDS.has(propertyId)) {
    return true;
  }
  return !getPropertyAirbnbLink(propertyId, airbnbLink) && !!contactLink;
}

export function getPropertyContactLink(
  propertyId: string,
  contactLink?: string
): string {
  if (contactLink) {
    return contactLink;
  }
  return "/contact";
}
