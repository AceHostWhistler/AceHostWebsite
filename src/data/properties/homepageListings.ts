import {
  isWhistlerAreaLocation,
  propertyCategories,
  type PropertyFeature,
} from "./catalog";
import { getPropertyListingPath } from "./listingPath";

/** Card shape used by the homepage property grid. */
export interface HomepageListing {
  id: string;
  name: string;
  image: string;
  guests: number | string;
  bedrooms: number | null;
  beds?: number | null;
  bathrooms: number | null;
  priceRange?: string;
  winterPrice?: string;
  holidayPrice?: string;
  /** Filter bucket for homepage tabs (`whistler` vs worldwide). */
  locationFilter: string;
  link: string;
  airbnbLink?: string;
  contactLink?: string;
  isPetFriendly?: boolean;
  isSkiInSkiOut?: boolean;
}

/** Homepage display order — ids must exist in the property catalog. */
export const HOMEPAGE_PROPERTY_ORDER: readonly string[] = [
  "two-cedars",
  "chalet-la-forja",
  "luxury-ski-in-ski-out-7-bedroom-kadenwood",
  "panoramic-estate",
  "slopeside-villa",
  "timber-haven-luxury-ski-in-ski-out-kadenwood",
  "heron-views-whistler",
  "falcon-blueberry-drive",
  "luxury-6-bedroom-blueberry",
  "luxe-5-bed-scandinave-retreat",
  "bluffs-unit-8",
  "golf-course-views",
  "scandinavian-mountainside-retreat-pemberton-meadows-50-acres",
  "rare-3-bedroom-whistler-village",
  "ravens-nest",
  "the-nest",
  "snow-pine",
  "wedge-mountain-lodge-spa",
  "luxe-cozy-3-bed-whistler-village",
  "whispering-pines",
  "marquise-2-bed",
  "ski-in-ski-out-walk-to-lifts-2-bed",
  "whistler-village-views-luxury-2-5-bedroom",
  "luxury-3-bed-stunning-views",
  "santorini-greece-villa-eclipse",
  "villa-oineas-greece-mykonos",
  "helios-estate-mykonos",
  "villa-rosabella-mykonos",
  "super-yacht-thailand",
  "cotswolds-uk-soho-farm-house",
  "mykonos-crystal-villa",
  "punta-mita---casa-juntos",
  "cozy-lakefront-whistler-condo",
  "hood-river-luxury-home",
  "valhalla-unit-33-village",
  "whistler-village-penthouse",
  "vancouver-house-corner",
  "bluffs-unit-4",
  "squamish-retreat",
  "whistler-village-penthouse-3-bdr",
  "northlands-walk-to-village-slopes-luxury-4-bed",
  "hotel-booking-assistance",
];

function getCatalogPropertyMap(): Map<string, PropertyFeature> {
  const map = new Map<string, PropertyFeature>();
  for (const category of propertyCategories) {
    for (const property of category.properties) {
      if (!map.has(property.id)) {
        map.set(property.id, property);
      }
    }
  }
  return map;
}

function toHomepageListing(property: PropertyFeature): HomepageListing {
  return {
    id: property.id,
    name: property.name,
    image: property.images[0] ?? "",
    guests: property.guests,
    bedrooms: property.bedrooms,
    beds: property.beds ?? undefined,
    bathrooms: property.bathrooms,
    priceRange: property.priceRange,
    winterPrice: property.winterPrice,
    holidayPrice: property.holidayPrice,
    locationFilter: isWhistlerAreaLocation(property.location)
      ? "whistler"
      : property.location,
    link: getPropertyListingPath(property),
    airbnbLink: property.airbnbLink,
    contactLink: property.contactLink,
    isPetFriendly: property.isPetFriendly,
    isSkiInSkiOut: property.isSkiInSkiOut,
  };
}

/** Homepage property cards derived from the shared catalog. */
export function getHomepageListings(): HomepageListing[] {
  const byId = getCatalogPropertyMap();
  return HOMEPAGE_PROPERTY_ORDER.flatMap((id) => {
    const property = byId.get(id);
    if (!property) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`Homepage property id not found in catalog: ${id}`);
      }
      return [];
    }
    return [toHomepageListing(property)];
  });
}
