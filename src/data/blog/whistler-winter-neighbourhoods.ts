import { getListing } from "@/data/listings";

export type WinterNeighbourhoodPropertyRef = {
  slug?: string;
  listingHref?: string;
  name?: string;
  image?: string;
  footnote?: string;
  contactOnly?: boolean;
};

export type ResolvedWinterProperty = {
  name: string;
  image: string;
  listingHref: string;
  bedrooms?: number | string;
  guests?: number | string;
  footnote?: string;
  contactOnly?: boolean;
};

export function resolveWinterProperty(
  ref: WinterNeighbourhoodPropertyRef
): ResolvedWinterProperty | null {
  if (ref.slug) {
    const listing = getListing(ref.slug);
    if (listing) {
      return {
        name: listing.header.title,
        image: listing.photos[0] ?? ref.image ?? "",
        listingHref: ref.listingHref ?? `/listings/${ref.slug}`,
        bedrooms: listing.header.bedrooms,
        guests: listing.header.guests,
        footnote: ref.footnote,
        contactOnly: ref.contactOnly,
      };
    }
  }

  if (ref.listingHref && ref.name && ref.image) {
    return {
      name: ref.name,
      image: ref.image,
      listingHref: ref.listingHref,
      footnote: ref.footnote,
      contactOnly: ref.contactOnly,
    };
  }

  return null;
}

export const villagePropertyRefs: WinterNeighbourhoodPropertyRef[] = [
  { slug: "rare-3-bedroom-whistler-village-walk-to-hill" },
  { slug: "whistler-village-views-luxury-2-5-bedroom" },
  { slug: "whistler-village-penthouse" },
  { slug: "valhalla-unit-33-village" },
  { slug: "whistler-village-penthouse-3-bdr-walk-to-ski" },
  { slug: "northlands-walk-to-village-slopes-luxury-4-bed" },
];

export const upperVillagePropertyRefs: WinterNeighbourhoodPropertyRef[] = [
  { slug: "whispering-pines-ski-in-ski-out" },
  { slug: "marquise-2-bed-ski-in-ski-out" },
  { slug: "ski-in-ski-out-walk-to-lifts-2-bed" },
  { slug: "luxe-cozy-3-bed-whistler-village" },
  { slug: "ravens-nest-ski-in-ski-out-views" },
];

export const creeksidePropertyRefs: WinterNeighbourhoodPropertyRef[] = [
  {
    listingHref: "/worldwide-listings/luxe-5-bed-scandinave-retreat",
    name: "Luxe 5-BED Scandinave Retreat | Walk to Slopes",
    image: "/high-quality/scandinave-fixed/scandinave-26.jpg",
  },
  { slug: "bluffs-unit-4-taluswood" },
  { slug: "bluffs-unit-8-taluswood" },
  {
    slug: "snow-pine",
    footnote: "Extended-stay property. Contact AceHost for availability.",
    contactOnly: true,
  },
  {
    slug: "the-nest-ski-in-ski-out",
    footnote: "Extended-stay property. Contact AceHost for availability.",
  },
];

export const kadenwoodPropertyRefs: WinterNeighbourhoodPropertyRef[] = [
  { slug: "two-cedars-kadenwood" },
  { slug: "chalet-la-forja-kadenwood" },
  { slug: "luxury-ski-in-ski-out-7-bedroom-kadenwood" },
  { slug: "panoramic-estate-kadenwood" },
  { slug: "slopeside-villa-kadenwood" },
  { slug: "timber-haven-luxury-ski-in-ski-out-kadenwood" },
];

export const blueberryPropertyRefs: WinterNeighbourhoodPropertyRef[] = [
  { slug: "falcon-blueberry-drive" },
  { slug: "luxury-6-bedroom-whistler-village-blueberry" },
  { slug: "heron-views-whistler-village" },
];

export const nicklausNorthPropertyRefs: WinterNeighbourhoodPropertyRef[] = [
  { slug: "golf-course-views-luxury-4-bed-whistler-village" },
  { slug: "cozy-lakefront-whistler-condo-mountain-view" },
];

export const retreatPropertyRefs: WinterNeighbourhoodPropertyRef[] = [
  {
    slug: "wedge-mountain-lodge-spa",
    footnote: "Contact AceHost for private availability and event pricing.",
    contactOnly: true,
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is the best area to stay in Whistler for a first visit?",
    answer:
      "Whistler Village is usually the easiest option for first-time visitors because ski lifts, restaurants, shops and entertainment are nearby. It is particularly convenient for couples, families and smaller groups.",
  },
  {
    question: "Where should I stay in Whistler if I am taking ski lessons?",
    answer:
      "Whistler Village is extremely convenient for many lessons, but Creekside also has ski lesson options. If you are staying in Creekside or Kadenwood, make sure you book the correct lesson location. AceHost can help guests coordinate lessons that make sense for where they are staying.",
  },
  {
    question: "Is Whistler Village or Creekside better?",
    answer:
      "Whistler Village is generally better for guests wanting the largest concentration of restaurants, shops and nightlife. Creekside is better for travellers wanting a quieter atmosphere, direct Whistler Mountain access and a more local neighbourhood feel.",
  },
  {
    question: "Where should large groups stay in Whistler?",
    answer:
      "Large groups often find better options outside the central Village because Whistler's biggest private homes tend to be located in neighbourhoods such as Kadenwood and Blueberry. These areas offer larger kitchens, more bedrooms, private hot tubs and significantly more living space.",
  },
  {
    question: "Is Kadenwood good for families taking ski lessons?",
    answer:
      "Yes, but lesson location matters. Because Kadenwood is located above Creekside, Creekside-based lessons or conveniently arranged private instruction may be much easier than travelling into Whistler Village every morning.",
  },
  {
    question: "Where should families stay in Whistler?",
    answer:
      "Whistler Village, Upper Village and Creekside are all convenient for families. Larger families may prefer Blueberry or Kadenwood because substantially larger private homes are available.",
  },
  {
    question: "Can you stay ski-in, ski-out in Whistler?",
    answer:
      "Yes. AceHost offers ski-access properties in areas including Kadenwood, Blackcomb, Creekside, Nordic and Taluswood. Exact access varies by property and snow conditions, so guests should always review the individual listing details.",
  },
  {
    question: "Do you need a car in Whistler?",
    answer:
      "Not if you are staying centrally. Guests in Whistler Village and Upper Village can often walk or use local transportation. A vehicle or arranged transportation is more useful for Kadenwood, Blueberry, Nicklaus North and other residential areas.",
  },
];
