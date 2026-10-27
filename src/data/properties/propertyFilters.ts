export const PROPERTY_CATEGORY_FILTERS = [
  { id: "all", label: "All Properties" },
  { id: "whistler", label: "Whistler All Properties" },
  { id: "homes", label: "Whistler Homes" },
  { id: "townhomes", label: "Whistler Townhomes" },
  { id: "condos", label: "Whistler Condos" },
  { id: "pets", label: "Whistler Pet Friendly" },
  { id: "skiinout", label: "Whistler Ski in Ski out" },
  { id: "worldwide", label: "Worldwide" },
] as const;

export type PropertyCategoryFilterId =
  (typeof PROPERTY_CATEGORY_FILTERS)[number]["id"];

export function propertyCategoryHref(id: PropertyCategoryFilterId) {
  return `/properties?category=${id}`;
}
