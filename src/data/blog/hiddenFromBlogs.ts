/** Properties that must never appear in blog posts, cards, or auto-generated blog lists. */
const HIDDEN_FROM_BLOGS_IDS = new Set([
  "golf-course-views",
  "glaciers-reach",
  "blackcomb-pines",
  "luxe-cozy-3-bed-whistler-village",
]);

const HIDDEN_FROM_BLOGS_SLUGS = new Set([
  "golf-course-views-luxury-4-bed-whistler-village",
  "glaciers-reach-whistler-village",
  "blackcomb-pines",
  "luxe-cozy-3-bed-whistler-village",
]);

const HIDDEN_NAME_RE =
  /muirfield|glaciers reach|blackcomb pines|golf course views|luxe[- ]?cozy 3-bed|cozy luxe 3-bed/i;

export function isHiddenFromBlogs(property: {
  id?: string;
  name?: string;
  slug?: string;
  listingHref?: string;
  image?: string;
  imageSrc?: string;
}): boolean {
  const id = (property.id ?? "").toLowerCase();
  const slug = (property.slug ?? "").toLowerCase();
  const href = (property.listingHref ?? "").toLowerCase();
  const name = property.name ?? "";
  const image = `${property.image ?? ""} ${property.imageSrc ?? ""}`;

  if (HIDDEN_FROM_BLOGS_IDS.has(id) || HIDDEN_FROM_BLOGS_SLUGS.has(slug)) {
    return true;
  }

  if (
    href.includes("golf-course-views") ||
    href.includes("glaciers-reach") ||
    href.includes("blackcomb-pines") ||
    href.includes("luxe-cozy-3-bed")
  ) {
    return true;
  }

  if (
    image.includes("Muirfield Golf Course") ||
    image.includes("Glaciers Reach") ||
    image.includes("Cozy Luxe 3-Bed")
  ) {
    return true;
  }

  return (
    HIDDEN_NAME_RE.test(name) ||
    HIDDEN_NAME_RE.test(id) ||
    HIDDEN_NAME_RE.test(slug)
  );
}
