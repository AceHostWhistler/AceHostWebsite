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

function photoBasename(path: string): string {
  return (path.split("/").pop() ?? "").replace(/\.[^.]+$/, "").toLowerCase();
}

/**
 * Puts the catalog card cover first so the gallery, iMessage preview, and
 * Google snippet all show the same photo as the property card.
 */
export function pinCoverPhoto(
  photos: readonly string[],
  cover?: string
): string[] {
  if (!cover) return [...photos];
  const coverBase = photoBasename(cover);
  const existing = photos.find((photo) => photoBasename(photo) === coverBase);
  const rest = photos.filter((photo) => photoBasename(photo) !== coverBase);
  return [existing ?? cover, ...rest];
}

export function getPropertyCardCoverForProperty(
  property: PropertyFeature
): string | undefined {
  return getPropertyCardCoverImage(getPropertyListingPath(property));
}
