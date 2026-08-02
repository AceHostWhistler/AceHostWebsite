import {
  propertyCategories,
  type PropertyFeature,
} from "@/data/properties/catalog";
import { getPropertyListingPath } from "@/data/properties/listingPath";

function buildPropertyCardCoverMap(): Record<string, string> {
  const map: Record<string, string> = {};

  for (const category of propertyCategories) {
    for (const property of category.properties) {
      const listingPath = getPropertyListingPath(property);
      const coverImage = property.images[0];
      if (coverImage) {
        map[listingPath] = coverImage;
      }
    }
  }

  return map;
}

const PROPERTY_CARD_COVER_BY_PATH = buildPropertyCardCoverMap();

export function getPropertyCardCoverImage(listingPath: string): string | undefined {
  return PROPERTY_CARD_COVER_BY_PATH[listingPath];
}

export function getPropertyCardCoverForProperty(
  property: PropertyFeature
): string | undefined {
  return getPropertyCardCoverImage(getPropertyListingPath(property));
}
