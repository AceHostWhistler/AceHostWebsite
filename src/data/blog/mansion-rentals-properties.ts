import { listings } from "@/data/listings";
import { getPropertyAirbnbLink } from "@/data/propertyAirbnbLinks";

export interface MansionRentalProperty {
  name: string;
  listingHref: string;
  airbnbHref?: string;
  area: string;
  bedrooms: number;
  guests: number;
  standout: string;
  /** Photo paths for article (from listing gallery or dedicated cover) */
  images: { src: string; alt: string }[];
  headline?: boolean;
}

function listingPhotos(slug: string, indices: number[]): string[] {
  const photos = listings[slug]?.photos ?? [];
  return indices.map((i) => photos[i]).filter(Boolean);
}

function listingAirbnb(slug: string, catalogId?: string): string | undefined {
  const fromListing = listings[slug]?.header?.airbnbLink;
  if (fromListing) return fromListing;
  if (catalogId) return getPropertyAirbnbLink(catalogId);
  return undefined;
}

/** Nine properties in article order for mansion rentals blog */
export const MANSION_RENTAL_PROPERTIES: MansionRentalProperty[] = [
  {
    name: "Two Cedars",
    listingHref: "/listings/two-cedars-kadenwood",
    airbnbHref: listingAirbnb("two-cedars-kadenwood"),
    area: "Kadenwood",
    bedrooms: 7,
    guests: 17,
    standout: "10,000 sq ft, daily winter butler, theatre, gym, indoor and outdoor hot tubs",
    headline: true,
    images: [
      {
        src: listingPhotos("two-cedars-kadenwood", [0])[0],
        alt: "Two Cedars Whistler mansion rental in Kadenwood",
      },
      {
        src: listingPhotos("two-cedars-kadenwood", [14])[0],
        alt: "Two Cedars home theatre and entertainment space",
      },
    ],
  },
  {
    name: "Chalet La Forja",
    listingHref: "/listings/chalet-la-forja-kadenwood",
    airbnbHref: listingAirbnb("chalet-la-forja-kadenwood"),
    area: "Kadenwood",
    bedrooms: 9,
    guests: 16,
    standout: "10,000+ sq ft, heated pool, hot tub, gym, daily winter butler and housekeeping every other day",
    headline: true,
    images: [
      {
        src: "/photos/properties/Chalet La Forja/New Drone Cover photo Forja.png",
        alt: "Chalet La Forja luxury Whistler mansion with heated pool",
      },
      {
        src: listingPhotos("chalet-la-forja-kadenwood", [6])[0],
        alt: "Chalet La Forja main living room and mountain views",
      },
    ],
  },
  {
    name: "The Mountaintop in Kadenwood",
    listingHref: "/listings/luxury-ski-in-ski-out-7-bedroom-kadenwood",
    airbnbHref: listingAirbnb("luxury-ski-in-ski-out-7-bedroom-kadenwood"),
    area: "Kadenwood",
    bedrooms: 7,
    guests: 16,
    standout: "Panoramic views, ski access, hot tub, sauna and steam room",
    headline: true,
    images: [
      {
        src: "/photos/properties/2919 Heritage/Mountaintop Snow cover.png",
        alt: "The Mountaintop luxury ski-in ski-out rental in Whistler",
      },
      {
        src: listingPhotos("luxury-ski-in-ski-out-7-bedroom-kadenwood", [4])[0],
        alt: "The Mountaintop hot tub and mountain views",
      },
    ],
  },
  {
    name: "Panoramic Estate",
    listingHref: "/listings/panoramic-estate-kadenwood",
    airbnbHref: listingAirbnb("panoramic-estate-kadenwood"),
    area: "Kadenwood",
    bedrooms: 8,
    guests: 17,
    standout: "Elevator, hot tub, indoor sauna, media room and mountain views",
    headline: true,
    images: [
      {
        src: "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
        alt: "Panoramic Estate luxury rental in Kadenwood Whistler",
      },
      {
        src: "/photos/properties/Panoramic Estate/20241127 MM4P 01 0225-Edit.jpg",
        alt: "Panoramic Estate open kitchen and living space with mountain views",
      },
    ],
  },
  {
    name: "Timber Haven",
    listingHref: "/listings/timber-haven-luxury-ski-in-ski-out-kadenwood",
    airbnbHref: listingAirbnb("timber-haven-luxury-ski-in-ski-out-kadenwood"),
    area: "Kadenwood",
    bedrooms: 8,
    guests: 16,
    standout: "Private gondola access, hot tub, sauna, central air conditioning and multiple lounges",
    headline: true,
    images: [
      {
        src: "/photos/properties/Timber Haven John Harris/Timber Haven cover.png",
        alt: "Timber Haven eight-bedroom Whistler luxury chalet",
      },
      {
        src: listingPhotos("timber-haven-luxury-ski-in-ski-out-kadenwood", [10])[0],
        alt: "Timber Haven dining room and main living area",
      },
    ],
  },
  {
    name: "Heron Views",
    listingHref: "/listings/heron-views-whistler-village",
    airbnbHref: listingAirbnb("heron-views-whistler-village"),
    area: "Blueberry Hill",
    bedrooms: 5,
    guests: 11,
    standout: "7,800 sq ft log chalet, 14-person hot tub, theatre and golf-course views",
    images: [
      {
        src: "/photos/properties/3445-Heron-Place/36-3445 Heron Place 36.jpg",
        alt: "Heron Views large log chalet rental in Whistler",
      },
    ],
  },
  {
    name: "Falcon",
    listingHref: "/listings/falcon-blueberry-drive",
    airbnbHref: listingAirbnb("falcon-blueberry-drive"),
    area: "Blueberry Hill",
    bedrooms: 7,
    guests: 15,
    standout: "Hot tub, barrel sauna, central air conditioning, fireplace and mountain views",
    images: [
      {
        src: "/photos/properties/Falcon/Cover photo Falcon.webp",
        alt: "Falcon seven-bedroom Whistler chalet with hot tub and sauna",
      },
    ],
  },
  {
    name: "Luxury 6-Bedroom",
    listingHref: "/listings/luxury-6-bedroom-whistler-village-blueberry",
    airbnbHref: listingAirbnb("luxury-6-bedroom-whistler-village-blueberry"),
    area: "Blueberry",
    bedrooms: 6,
    guests: 12,
    standout: "Ten beds, premium furnishings, ski storage and EV parking",
    images: [
      {
        src: "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry living room.png",
        alt: "Luxury six-bedroom Whistler vacation rental in Blueberry",
      },
    ],
  },
  {
    name: "Luxe 5-BED Scandinave Retreat",
    listingHref: "/worldwide-listings/luxe-5-bed-scandinave-retreat",
    airbnbHref: getPropertyAirbnbLink("luxe-5-bed-scandinave-retreat"),
    area: "Creekside",
    bedrooms: 3,
    guests: 8,
    standout: "Five beds, 400 m to the gondola, steam shower and lake views",
    images: [
      {
        src: "/photos/properties/Luxe 3-bed Scandinave/1-2 2221 Gondola Way 26.jpg",
        alt: "Luxe five-bed Creekside Whistler ski rental",
      },
    ],
  },
];

export const MANSION_RENTAL_ITEM_LIST = MANSION_RENTAL_PROPERTIES.map((p, i) => ({
  position: i + 1,
  name: p.name,
  url: `https://www.acehost.ca${p.listingHref}`,
}));
