import { BLUFFS_AIRBNB_LINK } from "../listings/bluffsAirbnbLink";
import { BLUFFS_UNIT_8_AIRBNB_LINK } from "../listings/bluffsUnit8AirbnbLink";
import { SCANDINAVE_COVER, SCANDINAVE_PHOTOS } from "../scandinavePhotos";

export interface PropertyFeature {
  id: string;
  name: string;
  images: string[];
  guests: number | string;
  bedrooms: number | null;
  bathrooms: number | null;
  description: string;
  features: string[];
  location: string;
  sqm?: number;
  highlights?: string[];
  priceRange?: string;
  winterPrice?: string;
  holidayPrice?: string;
  isPetFriendly?: boolean;
  isSkiInSkiOut?: boolean;
  link?: string;
  country?: string;
  airbnbLink?: string;
  contactLink?: string;
  beds?: number | null;
}

export interface PropertyCategory {
  id: string;
  title: string;
  description?: string;
  properties: PropertyFeature[];
}

export const TOWNHOME_IDS = new Set([
  "ravens-nest",
  "snow-pine",
  "rare-3-bedroom-whistler-village",
  "luxe-cozy-3-bed-whistler-village",
  "luxe-5-bed-scandinave-retreat",
  "northlands-walk-to-village-slopes-luxury-4-bed",
]);

export const CONDO_IDS = new Set([
  "whispering-pines",
  "marquise-2-bed",
  "ski-in-ski-out-walk-to-lifts-2-bed",
  "whistler-village-views-luxury-2-5-bedroom",
  "luxury-3-bed-stunning-views",
  "valhalla-unit-33-village",
  "bluffs-unit-4",
  "bluffs-unit-8",
  "cozy-lakefront-whistler-condo",
  "whistler-village-penthouse",
  "whistler-village-penthouse-3-bdr",
  "blackcomb-greens",
]);

export const HOME_IDS = new Set([
  "two-cedars",
  "chalet-la-forja",
  "timber-haven-luxury-ski-in-ski-out-kadenwood",
  "luxury-ski-in-ski-out-7-bedroom-kadenwood",
  "panoramic-estate",
  "slopeside-villa",
  "heron-views-whistler",
  "falcon-blueberry-drive",
  "luxury-6-bedroom-blueberry",
  "golf-course-views",
  "wedge-mountain-lodge-spa",
  "squamish-retreat",
  "hood-river-luxury-home",
  "cotswolds-uk-soho-farm-house",
  "mykonos-crystal-villa",
  "villa-oineas-greece-mykonos",
  "helios-estate-mykonos",
  "villa-rosabella-mykonos",
  "punta-mita---casa-juntos",
]);

export function isWhistlerAreaLocation(location: string): boolean {
  const loc = location.toLowerCase();
  return (
    loc === "whistler" ||
    loc.includes("whistler") ||
    loc.includes("pemberton") ||
    loc.includes("squamish")
  );
}

/** All unique properties across categories (first occurrence wins). */
export function getAllCatalogProperties(): PropertyFeature[] {
  const byId = new Map<string, PropertyFeature>();
  for (const category of propertyCategories) {
    for (const property of category.properties) {
      if (!byId.has(property.id)) {
        byId.set(property.id, property);
      }
    }
  }
  return Array.from(byId.values());
}

export function getPropertyType(
  property: Pick<PropertyFeature, "id" | "name">
): "home" | "townhome" | "condo" {
  const id = property.id;
  const name = property.name.toLowerCase();

  if (TOWNHOME_IDS.has(id)) return "townhome";
  if (CONDO_IDS.has(id)) return "condo";
  if (HOME_IDS.has(id)) return "home";
  if (name.includes("townhome")) return "townhome";
  if (name.includes("condo") || name.includes("penthouse")) return "condo";
  if (
    name.includes("chalet") ||
    name.includes("estate") ||
    name.includes("villa") ||
    name.includes("house") ||
    name.includes("home")
  ) {
    return "home";
  }
  return "home";
}

export const propertyCategories: PropertyCategory[] = [
      {
        id: "whistler",
        title: "Whistler Properties",
        description:
          "Discover our luxury chalets and condos in Whistler, perfect for an unforgettable mountain getaway with world-class ski in ski out access, prime locations near Whistler Village & Creekside, and fully stocked amenities.",
        properties: [
          {
            id: "two-cedars",
            name: "Two Cedars - Ski in-Ski out, Kadenwood Estate",
            images: [
              "/photos/properties/Two Cedars New/Two Cedars Cover photo snow.png",
              "/photos/properties/Two Cedars New/OSA_AncientCW1002 Panorama.jpg",
              "/photos/properties/Two Cedars New/24-2934 Ancient Cedars-24.jpg",
            ],
            guests: 17,
            bedrooms: 7,
            beds: 12,
            bathrooms: 8.5,
            location: "Kadenwood, Whistler",
            description:
              "A 10,000-square-foot OpenSpace-designed Kadenwood estate with ski-in/ski-out access, seven ensuite bedrooms, private gondola access, and daily winter butler service.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Kadenwood Gondola",
              "Indoor & Outdoor Hot Tubs",
              "Infrared Sauna",
              "Private Gym",
              "Home Theatre",
              "Central Air Conditioning",
              "Panoramic Views",
              "Gourmet Kitchen",
              "Multiple Fireplaces",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Panoramic Mountain Views",
              "Private Hot Tub",
              "Ski-in/Ski-out Access",
            ],
            priceRange: "$6,500-$9,500+ per night",
            winterPrice: "$8,500-$10,000+ Nightly | Winter",
            holidayPrice: "$17,500-$21,000+ Nightly | Christmas & NY",
            isPetFriendly: true,
            isSkiInSkiOut: true,
          },

          {
            id: "chalet-la-forja",
            name: "Chalet La Forja - Ski in Ski out Kadenwood Estate",
            images: [
              "/photos/properties/Chalet La Forja/New Drone Cover photo Forja.png",
              "/photos/properties/Chalet La Forja/02-2950 Heritage Peaks Trail-02.jpg",
              "/photos/properties/Chalet La Forja/03-2950 Heritage Peaks Trail-03.jpg",
              "/photos/properties/Chalet La Forja/04-2950 Heritage Peaks Trail-04.jpg",
              "/photos/properties/Chalet La Forja/05-2950 Heritage Peaks Trail-05 2.jpg",
              "/photos/properties/Chalet La Forja/0621e54e-ffe1-4cbd-8f47-e91bb5f1b979.avif",
              "/photos/properties/Chalet La Forja/07-2950 Heritage Peaks Trail-07.jpg",
              "/photos/properties/Chalet La Forja/08-2950 Heritage Peaks Trail-08.jpg",
              "/photos/properties/Chalet La Forja/09-2950 Heritage Peaks Trail-09 2.jpg",
              "/photos/properties/Chalet La Forja/0aea2bd5-2274-443e-b83a-5ce67895d20c.avif",
              "/photos/properties/Chalet La Forja/10-2950 Heritage Peaks Trail-10 2.jpg",
              "/photos/properties/Chalet La Forja/11-2950 Heritage Peaks Trail-11.jpg",
              "/photos/properties/Chalet La Forja/12-2950 Heritage Peaks Trail-12.jpg",
              "/photos/properties/Chalet La Forja/13-2950 Heritage Peaks Trail-13 2.jpg",
              "/photos/properties/Chalet La Forja/14-2950 Heritage Peaks Trail-14.jpg",
              "/photos/properties/Chalet La Forja/15-2950 Heritage Peaks Trail-15.jpg",
              "/photos/properties/Chalet La Forja/16-2950 Heritage Peaks Trail-16.jpg",
              "/photos/properties/Chalet La Forja/16141e0d-ce0f-4774-9b4b-d23d3dc3b495 (1).avif",
              "/photos/properties/Chalet La Forja/16fdf857-2677-4a35-aa2e-4c33e447de2b (1).avif",
              "/photos/properties/Chalet La Forja/17-2950 Heritage Peaks Trail-17.jpg",
              "/photos/properties/Chalet La Forja/19-2950 Heritage Peaks Trail-19.jpg",
              "/photos/properties/Chalet La Forja/20-2950 Heritage Peaks Trail-20 2.jpg",
              "/photos/properties/Chalet La Forja/22-2950 Heritage Peaks Trail-22.jpg",
              "/photos/properties/Chalet La Forja/24-2950 Heritage Peaks Trail-24.jpg",
              "/photos/properties/Chalet La Forja/25-2950 Heritage Peaks Trail-25.jpg",
              "/photos/properties/Chalet La Forja/26-2950 Heritage Peaks Trail-26 2.jpg",
              "/photos/properties/Chalet La Forja/27-2950 Heritage Peaks Trail-27.jpg",
              "/photos/properties/Chalet La Forja/28-2950 Heritage Peaks Trail-28.jpg",
              "/photos/properties/Chalet La Forja/29-2950 Heritage Peaks Trail-29.jpg",
              "/photos/properties/Chalet La Forja/2950 Heritage Peaks Trail 4 Large 2.png",
              "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb01.jpg",
              "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb22 2.jpg",
              "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb29 2.jpg",
              "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb30 2.jpg",
              "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb32 2.jpg",
              "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb33.jpg",
              "/photos/properties/Chalet La Forja/30-2950 Heritage Peaks Trail-30.jpg",
              "/photos/properties/Chalet La Forja/31-2950 Heritage Peaks Trail-31.jpg",
              "/photos/properties/Chalet La Forja/32-2950 Heritage Peaks Trail-32.jpg",
              "/photos/properties/Chalet La Forja/33-2950 Heritage Peaks Trail-33.jpg",
              "/photos/properties/Chalet La Forja/34-2950 Heritage Peaks Trail-34.jpg",
              "/photos/properties/Chalet La Forja/37bed73a-eb93-4b58-9dc8-513fbc37dc2c (1).avif",
              "/photos/properties/Chalet La Forja/3d791578-d5f1-4fae-847e-bd04bce10cb9.avif",
              "/photos/properties/Chalet La Forja/41934c58-f4a2-4f62-bcb6-f56437471ec7.avif",
              "/photos/properties/Chalet La Forja/82d66f63-7b68-438e-bbc8-b6618426841a.avif",
              "/photos/properties/Chalet La Forja/b30fb971-069a-4bb1-9848-da69fc17037f (1).avif",
              "/photos/properties/Chalet La Forja/bad9aa86-7dc0-4b6c-8b42-a57435a9ad7c.avif",
              "/photos/properties/Chalet La Forja/cad64758-b957-4682-b3f5-c11cdafff714.avif",
              "/photos/properties/Chalet La Forja/d1220a17-7f12-4f06-b6d3-eea69456555f (1).avif",
              "/photos/properties/Chalet La Forja/d34b41bd-4855-4193-abd9-08339c92686d (1).avif",
              "/photos/properties/Chalet La Forja/ffbeb9b6-b1bf-455f-b12b-4c563db6d143.avif",
              "/photos/properties/Chalet La Forja/Forja-3 copy.jpg",
              "/photos/properties/Chalet La Forja/hero00002.jpg",
              "/photos/properties/Chalet La Forja/IMG_1414 2.JPG",
              "/photos/properties/Chalet La Forja/La Forja 01.jpg",
              "/photos/properties/Chalet La Forja/La Forja 02.jpg",
              "/photos/properties/Chalet La Forja/La Forja 03.jpg",
  ],
            guests: 16,
            bedrooms: 9,
            beds: 16,
            bathrooms: 8,
            location: "Kadenwood, Whistler",
            description:
              "A 10,000-plus-square-foot Kadenwood estate with 9 bedrooms, ski-in/ski-out access, a heated pool, hot tub, sauna, gym, private gondola access, and winter butler service.",
            features: [
              "Private Hot Tub",
              "Heated Outdoor Pool",
              "Sauna & Steam Shower",
              "Private Gym",
              "Private Kadenwood Gondola",
              "Winter Butler Service",
              "Housekeeping Every Other Day",
              "Sonos Sound System",
              "Gourmet Kitchen",
              "Ski-In/Ski-Out Access",
              "Mountain Views",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Ski-In/Ski-Out Access",
              "Hot Tub with Mountain Views",
              "Luxury Design",
            ],
            priceRange: "$7,000-11,000+ per night",
            winterPrice: "$8500-$11,000+ Nightly | Winter",
            holidayPrice: "$16,000-$21,000+ Nightly | Christmas & NY",
            isPetFriendly: true,
            isSkiInSkiOut: true,
          },

          {
            id: "luxury-ski-in-ski-out-7-bedroom-kadenwood",
            name: "The Mountaintop in Kadenwood | Ski in Ski out",
            images: [
              "/photos/properties/2919 Heritage/Mountaintop Snow cover.png",
              "/photos/properties/2919 Heritage/Drone Mountaintop.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 2.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 3.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 4.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 5.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 6.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 7.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 8.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 9.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 10.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 11.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 12.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 13.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 14.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 15.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 16.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 17.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow18.png",
              "/photos/properties/2919 Heritage/Mountaintop living snow 19.png",
            ],
            guests: 16,
            bedrooms: 7,
            beds: 8,
            bathrooms: 6.5,
            location: "Kadenwood, Whistler",
            description:
              "A 6,200-square-foot Kadenwood ski-in/ski-out retreat with a chef's kitchen, hot tub, XL outdoor sauna, fire pits, gym, steam room, and private gondola access.",
            features: [
              "Renovated Chef's Kitchen",
              "Hot Tub",
              "XL Wood Barrel Sauna",
              "Fire Pits",
              "Ping Pong Table",
              "Wet Bar",
              "Steam Room",
              "Private Gym",
              "Air Conditioning",
              "Private Kadenwood Gondola",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "6200 Square Feet",
              "Ski-in/Ski-out Access",
              "Premium Appliances",
            ],
            priceRange: "$6,500-$9,000+ per night",
            winterPrice: "$8,000-$10,000+ Nightly | Winter",
            holidayPrice: "$14,900-$19,000 Nightly | Christmas & NY",
            isSkiInSkiOut: true,
            isPetFriendly: false,
          },

          {
            id: "panoramic-estate",
            name: "Panoramic Estate | Kadenwood | Ski In Ski Out",
            images: [
              "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
              "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
              "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
            ],
            guests: 17,
            bedrooms: 8,
            beds: 11,
            bathrooms: 7,
            location: "Kadenwood, Whistler",
            description:
              "An 8-bedroom Kadenwood timber chalet with mountain-view decks, ski-in/ski-out access, a private gondola, hot tub, sauna, elevator, media room, and gym.",
            features: [
              "Panoramic Mountain Views",
              "Private Hot Tub",
              "Private Sauna",
              "Media Room",
              "Private Gym",
              "Central AC from May 2027",
              "Ping Pong & Sound System",
              "Gourmet Kitchen",
              "Ski-in/Ski-out Access",
              "Elevator",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Panoramic Views",
              "Ski-in/Ski-out Access",
              "Ultimate Luxury Experience",
            ],
            priceRange: "$5,800-$9,000+ per night",
            winterPrice: "$8,500-$10,000+ | Winter",
            holidayPrice: "$16,000+ Nightly | Christmas & NY",
            isSkiInSkiOut: true,
            isPetFriendly: true,
          },

          {
            id: "slopeside-villa",
            name: "Slope Side Chalet | Ski-In/Out | Hot Tub",
            images: [
              "/photos/properties/Slopeside Kadenwood/01-2945 Slope Side 01.jpg",
              "/photos/properties/Slopeside Kadenwood/03-2945 Kadenwood Dr 03.jpg",
              "/photos/properties/Slopeside Kadenwood/10-2945 Kadenwood Dr 10.jpg",
            ],
            guests: 16,
            bedrooms: 7,
            beds: 12,
            bathrooms: 7.5,
            location: "Kadenwood, Whistler",
            description:
              "A 7-bedroom Kadenwood log chalet with direct ski-in/ski-out access beside the patio and ski room, plus a hot tub, steam shower, gym, and private gondola access.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Hot Tub",
              "Private Kadenwood Gondola",
              "Home Gym",
              "Steam Shower",
              "Sonos Sound System",
              "Mountain Views",
              "Gourmet Kitchen",
              "Multiple Fireplaces",
              "Large Deck",
              "Media Room",
              "Heated Floors",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Private Hot Tub",
              "Ski-in/Ski-out Access",
              "Mountain Views",
            ],
            priceRange: "$2,600-$6,000 per night",
            winterPrice: "$4,500-$6,500+ Nightly | Winter",
            holidayPrice: "$10,000+ Nightly | Christmas & NY",
            isSkiInSkiOut: true,
            isPetFriendly: true,
          },

          {
            id: "timber-haven-luxury-ski-in-ski-out-kadenwood",
            name: "Timber Haven - Luxury Ski in Ski out - Kadenwood",
            images: [
              "/photos/properties/Timber Haven John Harris/Timber Haven cover.png",
              "/photos/properties/Timber Haven John Harris/02 - 20260506 MM4P 02 0347.jpg",
              "/photos/properties/Timber Haven John Harris/Hot Tub Timber Haven Snow.png",
            ],
            guests: 16,
            bedrooms: 8,
            beds: 11,
            bathrooms: 6.5,
            location: "Kadenwood, Whistler",
            description:
              "An 8-bedroom Kadenwood estate with ski-in/ski-out access, a private hot tub, sauna, central air conditioning, curated artwork, and private gondola access.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Residents-Only Gondola",
              "Private Hot Tub",
              "Private Sauna",
              "Central Air Conditioning",
              "Gas Fireplace",
              "Fire Pit",
              "Ping Pong Table",
              "Outdoor Dining",
              "Multiple Lounge Spaces",
              "Home Office Space",
              "Curated Artwork",
            ],
            highlights: [
              "Main-Floor Primary Suite",
              "Step-Free Mid-Level Access",
              "Ideal for Large Families & Groups",
              "Mountain Views",
              "Exclusive Kadenwood Location",
            ],
            priceRange: "$4000-$9,000+ per night",
            winterPrice: "$6500-$9000+ Nightly | Winter",
            holidayPrice: "$12,000-$16,500 Nightly | Christmas & NY",
            link: "/listings/timber-haven-luxury-ski-in-ski-out-kadenwood",
            isSkiInSkiOut: true,
            isPetFriendly: false,
          },

          {
            id: "heron-views-whistler",
            name: "Heron Views | Whistler Village | Stunning Views",
            images: [
              "/photos/properties/3445-Heron-Place/Heron Snow cover.png",
              "/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05831-Edit.jpg",
              "/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05851.jpg",
            ],
            guests: 11,
            bedrooms: 5,
            beds: 6,
            bathrooms: 5.5,
            location: "Blueberry Hill, Whistler",
            description:
              "Welcome to Heron Views, a 7,800 sq. ft. traditional log chalet in prestigious Blueberry Hill, with sweeping views across Whistler Golf Course toward Whistler and Blackcomb mountains. Just a 3–4 minute drive from the Village and ski lifts, or a scenic walk along the Valley Trail, the home combines privacy with convenience. Enjoy two expansive decks, summer air conditioning, a 14-person hot tub, fire pit, theatre room, wet bar and generous living spaces for families and groups.",
            features: [
              "Blueberry Hill",
              "Mountain Views",
              "Whistler Golf Course Views",
              "Two Expansive Decks",
              "Summer Air Conditioning",
              "14-Person Hot Tub",
              "Fire Pit",
              "Theatre Room",
              "Wet Bar",
            ],
            highlights: [
              "7,800 sq. ft. Traditional Log Chalet",
              "3–4 Minute Drive to Village & Lifts",
              "Scenic Valley Trail Access",
              "Whistler & Blackcomb Views",
            ],
            priceRange: "$1,200-$3,500 per night",
            winterPrice: "",
            holidayPrice: "$4,000-$6,800+ Nightly | Christmas & NY",
            isPetFriendly: false,
            isSkiInSkiOut: false,
          },

          {
            id: "falcon-blueberry-drive",
            name: "Falcon | Whistler Village Chalet | Hot tub + Sauna",
            images: [
              "/photos/properties/Falcon/Cover photo Falcon.webp",
              "/photos/properties/Falcon/07 - 20250827 A7M4 01 DSC00268.webp",
              "/photos/properties/Falcon/08 - 20250827 A7M4 01 DSC00273.webp",
              "/photos/properties/Falcon/09 - 20250827 A7M4 01 DSC00278.webp",
              "/photos/properties/Falcon/10 - 20250827 A7M4 01 DSC00283.webp",
              "/photos/properties/Falcon/11 - 20250827 A7M4 01 DSC00288.webp",
              "/photos/properties/Falcon/12 - 20250827 A7M4 01 DSC00304-Edit.webp",
              "/photos/properties/Falcon/13 - 20250827 A7M4 01 DSC00313.webp",
              "/photos/properties/Falcon/14 - 20250827 A7M4 01 DSC00320.webp",
              "/photos/properties/Falcon/15 - 20250827 A7M4 01 DSC00330-Edit.webp",
              "/photos/properties/Falcon/16 - 20250827 A7M4 01 DSC00340.webp",
              "/photos/properties/Falcon/17 - 20250827 A7M4 01 DSC00355.webp",
              "/photos/properties/Falcon/18 - 20250827 A7M4 01 DSC00529.webp",
              "/photos/properties/Falcon/19 - 20250827 A7M4 01 DSC00349.webp",
              "/photos/properties/Falcon/23 - 20250827 A7M4 01 DSC00219.webp",
              "/photos/properties/Falcon/27 - 20250827 A7M4 01 DSC00378.webp",
              "/photos/properties/Falcon/28 - 20250827 A7M4 01 DSC00392.webp",
              "/photos/properties/Falcon/29 - 20250827 A7M4 01 DSC00404.webp",
              "/photos/properties/Falcon/30 - 20250827 A7M4 01 DSC00412.webp",
              "/photos/properties/Falcon/31 - 20250827 A7M4 01 DSC00418.webp",
              "/photos/properties/Falcon/38 - 20250827 A7M4 01 DSC00496.webp",
              "/photos/properties/Falcon/39 - 20250827 A7M4 01 DSC00538.webp",
              "/photos/properties/Falcon/40 - 20250827 A7M4 01 DSC00545.webp",
              "/photos/properties/Falcon/41 - 20250827 A7M4 01 DSC00553.webp",
              "/photos/properties/Falcon/42 - 20250827 A7M4 01 DSC00560.webp",
              "/photos/properties/Falcon/43 - 20250827 A7M4 01 DSC00571.webp",
              "/photos/properties/Falcon/44 - 20250827 A7M4 01 DSC00589.webp",
              "/photos/properties/Falcon/45 - 20250827 A7M4 01 DSC00604.webp",
              "/photos/properties/Falcon/46 - 20250827 A7M4 01 DSC00610.webp",
              "/photos/properties/Falcon/47 - 20250827 A7M4 01 DSC00617.webp",
              "/photos/properties/Falcon/44406c5e-85ca-4dd1-a6c7-c1dab050fee7.webp",
              "/photos/properties/Falcon/Falcon Cres-3.webp",
              "/photos/properties/Falcon/Falcon Living snow 2.png",
              "/photos/properties/Falcon/Falcon living snow 3.png",
              "/photos/properties/Falcon/Falcon living snow 4.png",
              "/photos/properties/Falcon/Falcon Living snow.png",
              "/photos/properties/Falcon/Falcon Main floor bedroom.webp",
              "/photos/properties/Falcon/Falcon Master snow.webp",
              "/photos/properties/Falcon/Falcon upper bedrom now.webp",
              "/photos/properties/Falcon/Hot tub sauna falcon snow.webp",
              "/photos/properties/Falcon/New bedroom 3 Falcon.webp",
              "/photos/properties/Falcon/Outdoor shot Falcon good.webp",
              "/photos/properties/Falcon/Outdoor shot falcon zoomed out.webp",
              "/photos/properties/Falcon/Outdoor shot falcon.webp"
            ],
            guests: 15,
            bedrooms: 7,
            beds: 9,
            bathrooms: 3.5,
            location: "Blueberry Hill, Whistler",
            description:
              "A spacious 7-bedroom Blueberry Hill chalet with a large indoor dining table seating 14, mountain views, central air conditioning, an outdoor sauna, private hot tub, and convenient access to Whistler Village.",
            features: [
              "Hot Tub",
              "Outdoor Barrel Sauna",
              "Central Air Conditioning",
              "Dining Table Seats 14",
              "Mountain Views",
              "Spacious Deck",
              "BBQ",
              "Wood-burning Fireplace",
              "Parking for 4-5 Cars",
              "Route 6 Bus Access",
            ],
            highlights: [
              "7 Spacious Bedrooms",
              "Dining Table Seats 14",
              "Family-Friendly Area",
              "Beautiful Mountain Views",
              "25-Minute Walk to Village",
            ],
            priceRange: "Nightly Price Range: $1,300-$3,500+",
            winterPrice: "$2,000-$3,500+ Nightly | Winter",
            holidayPrice: "$4,000-$7,200+ Nightly | Christmas & NY",
            isPetFriendly: true,
            isSkiInSkiOut: false,
            link: "/listings/falcon-blueberry-drive",
          },

          {
            id: "luxury-6-bedroom-blueberry",
            name: "Luxury 6-Bedroom - Whistler Village - Blueberry",
            images: [
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Cover Blueberry 306 snow.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Living blueberry 306.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry 306 Snow 5.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry 306 Snow 6.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry 306 Snow 7.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry 306 Snow 8.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry 306 Snow 9.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry 306 Snow 10.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry 306 Snow 11.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry 306 Snow 12.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry balcony shot.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Deck snow shot blueberry.png",
              "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Drone Blueberry shot.png"
            ],
            guests: 12,
            bedrooms: 6,
            beds: 10,
            bathrooms: 3,
            location: "Blueberry Hill, Whistler",
            description:
              "Welcome to this beautifully renovated 6-bedroom retreat in Whistler’s peaceful Blueberry Hill neighbourhood. Designed with Restoration Hardware and Rove Concepts furnishings, the home sleeps 12 across 10 beds and offers forest views, premium Puffy mattresses, ski and bike storage, summer A/C, and free EV charging. Whistler Village, the ski lifts and nearby lakes are only a 3–4 minute drive away, combining a quiet residential setting with exceptionally convenient access for families and groups.",
            features: [
              "Newly Renovated",
              "Forest Views",
              "Luxury Mattresses",
              "EV Charging",
              "Ski & Bike Storage",
              "Brand-new BBQ",
              "High-Speed WiFi",
              "Smart TVs",
            ],
            highlights: [
              "Prestigious Blueberry Hill Location",
              "Restoration Hardware Furnishings",
              "10 Beds for 12 Guests",
              "3-4 Min Drive to Village",
            ],
            priceRange: "$750-1800 per night Summer",
            winterPrice: "$1200-2600 Nightly | Winter",
            holidayPrice: "$3500-6000 Nightly | Christmas & NY",
            link: "/listings/luxury-6-bedroom-whistler-village-blueberry",
            airbnbLink: "https://www.airbnb.ca/rooms/1551638001847968788?guests=1&adults=1&s=67&unique_share_id=ff68258e-d89f-4493-8e79-fd85820e6872",
            isPetFriendly: false,
            isSkiInSkiOut: false,
          },

          {
            id: "luxe-5-bed-scandinave-retreat",
            name: "Luxe 5-BED Scandinave Retreat - Walk to Slopes",
            images: [
              SCANDINAVE_COVER,
              SCANDINAVE_PHOTOS[1],
              SCANDINAVE_PHOTOS[2],
            ],
            guests: 8,
            bedrooms: 3,
            beds: 5,
            bathrooms: 3,
            location: "Creekside, Whistler",
            description:
              "An ideal family ski home just 400m (8 min walk) to Whistler Creekside Gondola. Stunning, unobstructed views of the Tantalus Range, Alpha & Nita Lakes. Perfect for 1 large family, 3 couples, or 2 families. This 1,450 sqft, 3-bedroom, 5-bed, architecturally designed home features; vaulted ceilings, a steam shower, kids’ triple bunk room, heated floors, a cozy living area with fireplace, and a kitchen for family dinners. Enjoy 2 free parking spots, A/C, & ski storage!",
            features: [
              "Walk to Creekside Gondola",
              "Heated Floors",
              "Gas Fireplace",
              "Steam Shower",
              "Kids' Triple Bunk Room",
              "Air Conditioning",
              "Private Deck",
              "Secure Ski/Bike Storage"
            ],
            highlights: [
              "8 Min Walk to Gondola",
              "Stunning Mountain Views",
              "Unique 6 Half-Level Design",
              "Family-Friendly Layout"
            ],
            priceRange: "$450-$1200+ per night Summer",
            winterPrice: "$750-$1,600+ Nightly | Winter",
            holidayPrice: "$2300-$3100+ Nightly | Christmas & NY",
            link: "/worldwide-listings/luxe-5-bed-scandinave-retreat",
            airbnbLink: "https://www.airbnb.ca/rooms/1313847204355627326?guests=1&adults=1&s=67&unique_share_id=507dffd6-1f84-49a3-99eb-d10f493a65a6",
            isPetFriendly: false,
            isSkiInSkiOut: false,
          },

          {
            id: "bluffs-unit-8",
            name: "Bluffs Penthouse - Luxe 3-Bedroom - Ski-in Ski-out",
            images: [
              "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_38 PM (8).png",
              "/photos/properties/Bluffs Unit 8/01 - 20260805 MM4P 010149.jpg",
              "/photos/properties/Bluffs Unit 8/Hot tub snow bluffs.png",
            ],
            guests: 10,
            bedrooms: 3,
            beds: 7,
            bathrooms: 3,
            location: "Taluswood, Whistler",
            description:
              "Perched in Taluswood's Bluffs, this 3-bedroom retreat puts you right on the Dave Murray Downhill for true ski-in ski-out days and beautiful mountain-view evenings. With a King suite, Queen bedroom, 4 Twin bunk beds, and a Queen sofa bed, the home is ideal for families and groups. A neighbourhood hot tub with stunning views, AC, Smart TVs, gas fireplace, BBQ, gorgeous patio view, chef-ready kitchen, generous parking, and secure ski & bike storage make every season comfortable and effortless.",
            features: [
              "True Ski-in/Ski-out",
              "Neighbourhood Hot Tub",
              "Gas Fireplace",
              "Chef-Ready Kitchen",
              "Underground Parking (2 stalls)",
              "Ski & Bike Storage",
              "Mountain Views",
              "Portable AC (May–Nov)",
            ],
            highlights: [
              "Dave Murray Downhill Access",
              "King Suite on Top Floor",
              "Four Twin Bunk Beds",
              "Private Complex Hot Tub",
            ],
            priceRange: "$450-$1200+ per night Summer",
            winterPrice: "$750-$1,600+ Nightly | Winter",
            holidayPrice: "$2300-$3100+ Nightly | Christmas & NY",
            link: "/listings/bluffs-unit-8-taluswood",
            airbnbLink: BLUFFS_UNIT_8_AIRBNB_LINK,
            isPetFriendly: false,
            isSkiInSkiOut: true,
          },

          {
            id: "valhalla-unit-33-village",
            name: "Whistler Village - Private Hot Tub - Walk to Hill",
            images: [
              "/photos/properties/Valhalla Unit 33 Village/Living room angle 3.png",
              "/photos/properties/Valhalla Unit 33 Village/Living room brighter.png",
              "/photos/properties/Valhalla Unit 33 Village/Hot tub Northlands snow.png",
            ],
            guests: 8,
            bedrooms: 3,
            bathrooms: 3,
            beds: 5,
            location: "Whistler Village, Whistler",
            description:
              "Welcome to Valhalla Peaks, a spacious 3-bedroom Whistler Village townhome with a private hot tub, gas fireplace, underground parking, and room for up to 8 guests. Marketplace and Fresh St. Market are across the street, with the Village Stroll and lifts nearby.",
            features: [
              "Walk to Whistler Village Gondola",
              "Private Balcony Hot Tub",
              "Gas Fireplace",
              "Fully Equipped Kitchen",
              "Underground Parking",
              "Ski & Bike Storage",
              "In-Suite Laundry",
              "Portable AC (May 15–Oct 15)",
            ],
            highlights: [
              "North End of Whistler Village",
              "Private Hot Tub with Peak Views",
              "Three Bedrooms & Three Bathrooms",
              "Keyless Entry & AceHost Support",
            ],
            priceRange: "$500-$2000 per night",
            winterPrice: "$650-$1,700 Nightly | Winter",
            holidayPrice: "$2,000-$3,000 Nightly | Christmas & NY",
            link: "/listings/valhalla-unit-33-village",
            airbnbLink:
              "https://www.airbnb.ca/rooms/1693450379764005787?guests=1&adults=1&s=67&unique_share_id=bd20bf84-b138-4958-9dc8-9128130a2028",
            isPetFriendly: false,
            isSkiInSkiOut: false,
          },

          {
            id: "whistler-village-penthouse-3-bdr",
            name: "Whistler Village Penthouse - 3 BDR - Walk to Ski",
            images: [
              "/optimized/303-Tyndall-Lodge/new-cover.jpg",
              "/optimized/303-Tyndall-Lodge/01---20260107-A7M4-01-A1_03798.jpg",
              "/optimized/303-Tyndall-Lodge/03---20260107-A7M4-01-A1_03441.jpg"
            ],
            guests: 8,
            bedrooms: 3,
            bathrooms: 2,
            beds: 5,
            location: "Whistler Village, Whistler",
            description:
              "Penthouse in Tyndall Lodge in the heart of Whistler Village. 3 sleeping areas, 5 beds, loft bunk room, pool and hot tub access, and complimentary underground parking steps from Olympic Plaza.",
            features: [
              "Penthouse Unit",
              "High Ceilings",
              "Fully Equipped Kitchen",
              "Free Underground Parking",
              "Central Village Location",
              "Walk to Gondolas",
              "Loft Bedroom with Bunkbeds",
              "Spacious Living Area"
            ],
            highlights: [
              "Heart of Whistler Village",
              "Short Walk to Gondolas",
              "Penthouse with High Ceilings",
              "Free Underground Parking"
            ],
            priceRange: "$500-1200 per night Summer",
            winterPrice: "$750-1500 Nightly | Winter",
            holidayPrice: "$2500-3500+ Nightly | Christmas & NY",
            link: "/listings/whistler-village-penthouse-3-bdr-walk-to-ski",
            airbnbLink: "https://www.airbnb.ca/rooms/1595039212030139605?guests=1&adults=1&s=67&unique_share_id=dc75c08b-e1ae-46ae-8b17-0587b742fa45",
            isPetFriendly: true,
            isSkiInSkiOut: false,
          },

          {
            id: "whistler-village-penthouse",
            name: "Whistler Village Penthouse 4-Bed - Ski in Ski out",
            images: [
              "/photos/properties/3-Bed PH Whistler Village/snowy-room-blinds-only Hearthstone.png",
              "/photos/properties/3-Bed PH Whistler Village/Hearthstone Hot tub.png",
              "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-2.jpg"
            ],
            guests: 7,
            bedrooms: 2,
            bathrooms: 2,
            location: "Whistler Village",
            description:
              "Welcome to this Whistler Village penthouse at Hearthstone Lodge, a 2-level alpine retreat steps from the gondolas with a private balcony hot tub, stone fireplace, and free parking.",
            features: [
              "Private Hot Tub",
              "Walk to Gondolas",
              "Air Conditioning",
              "Free Parking",
              "High Ceilings",
              "Log Beams",
              "Stone Fireplace",
              "Mountain Views",
              "Fully Equipped Kitchen",
            ],
            highlights: [
              "Hearthstone Lodge · Whistler Village",
              "Private Balcony Hot Tub",
              "Steps from Gondolas",
              "Free Parking",
            ],
            priceRange: "$450-$1,700 per night",
            winterPrice: "$650-$1,700 Nightly | Winter",
            holidayPrice: "$2,000-$2,700 Nightly | Christmas & NY",
            link: "/listings/whistler-village-penthouse",
            airbnbLink: "https://www.airbnb.ca/rooms/1471251206220643818?guests=1&adults=1&s=67&unique_share_id=0ec28644-49fa-4b63-9276-7e5f5c6a1153",
            isPetFriendly: false,
            isSkiInSkiOut: true,
          },

          {
            id: "rare-3-bedroom-whistler-village",
            name: "3-BDRM | Whistler Village | Walk to Hill | Hot Tub",
            images: [
              "/photos/properties/John 3-bed Granite Court/03 - 20251125 A7M4 01 A1_01852.jpg",
              "/photos/properties/John 3-bed Granite Court/01 - 20251125 A7M4 01 A1_02152.jpg",
              "/photos/properties/John 3-bed Granite Court/02 - 20251125 A7M4 01 A1_02202.jpg"
            ],
            guests: 8,
            bedrooms: 3,
            bathrooms: 3,
            beds: 4,
            location: "Whistler Village, Whistler",
            description:
              "A rare Whistler Village chalet with the space and privacy of a home, just steps from restaurants, shops and the mountain. Spread across two levels, this 3-bedroom retreat features oversized wraparound balconies, mountain views, a private hot tub and cozy fireplace. One of its standout features is two guaranteed designated underground parking spaces, exceptionally rare for a central Village property, so groups arriving in multiple vehicles can park with ease and walk almost everywhere.",
            features: [
              "City skyline view",
              "Ski-in/Ski-out",
              "Kitchen",
              "Wifi",
              "Dedicated workspace",
              "Free parking garage on premises",
              "Hot tub",
              "TV",
              "Washer",
              "Free dryer – In unit",
            ],
            highlights: [],
            priceRange: "$450-1450 per night Summer",
            winterPrice: "$750-1600 Nightly | Winter",
            holidayPrice: "$2000-3400 Nightly | Christmas & NY",
            link: "/listings/rare-3-bedroom-whistler-village-walk-to-hill",
            airbnbLink: "https://www.airbnb.ca/rooms/1565322561889624431?guests=1&adults=1&s=67&unique_share_id=bcb85131-d1b0-4d39-9975-7580fd94a5d9",
            isPetFriendly: false,
            isSkiInSkiOut: true,
          },

          {
            id: "golf-course-views",
            name: "Golf Course Views | Luxury 4-bed Whistler Village",
            images: [
              "/photos/properties/Muirfield Golf Course/Muirfield drone snow.png",
              "/photos/properties/Muirfield Golf Course/Muirfield Snow shot.png",
              "/photos/properties/Muirfield Golf Course/44 - 20250820 MM4P 01 0016.jpg",
              "/photos/properties/Muirfield Golf Course/01 - 20250820 A7M4 01 A1_00497-Edit.jpg",
              "/photos/properties/Muirfield Golf Course/03 - 20250820 A7M4 01 A1_00186.jpg",
            ],
            guests: 8,
            bedrooms: 4,
            bathrooms: 3.5,
            beds: 6,
            location: "Nicklaus North, Whistler",
            description:
              "This cozy, standalone chalet sits right on Nicklaus North Golf Course with stunning views of Hole 14. Enjoy a private hot tub, media room, wood-burning fireplace, and chef's kitchen. Just a short drive to Whistler Village and the ski lifts, plus being north of the village helps you skip the city traffic after skiing.",
            features: [
              "Golf Course Views",
              "Private Hot Tub",
              "Media Room",
              "Wood-burning Fireplace",
              "Chef's Kitchen",
              "Parking for 5-6 Cars",
              "Wi-Fi",
              "Heating/Cooling System",
            ],
            highlights: [
              "Directly on Nicklaus North Golf Course",
              "Private Hot Tub",
              "Spacious Family Home",
              "Quick Drive to Village",
            ],
            priceRange: "$750-1500 per night Summer",
            winterPrice: "$1200-2000 Nightly | Winter",
            holidayPrice: "$3500-5000 Nightly | Christmas & NY",
            link: "/listings/golf-course-views-luxury-4-bed-whistler-village",
            airbnbLink: "https://www.airbnb.ca/rooms/1493522257280258231?guests=1&adults=1&s=67&unique_share_id=d98beea7-9f12-4195-8af6-52e4aa1a94cd",
            isPetFriendly: false,
            isSkiInSkiOut: false,
          },

          {
            id: "ravens-nest",
            name: "Raven's Nest | Ski in Ski out | Views",
            images: [
              "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05349.jpg",
              "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05358.jpg",
              "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05364.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 3,
            location: "Blackcomb, Whistler",
            description:
              "Ravens Nest is a beautiful ski-in/ski-out townhome on Blackcomb Mountain, offering stunning views and luxury accommodations for your Whistler getaway.",
            features: [
              "Ski-in/Ski-out Access",
              "Mountain Views",
              "Private Hot Tub",
              "Fully Equipped Kitchen",
              "Garage",
              "Fireplace",
              "High-Speed WiFi",
              "Smart TV",
            ],
            priceRange: "$2,000-$3,500 per night",
            winterPrice: "",
            holidayPrice: "$2,300-$4,000 Nightly | Christmas & NY",
            isSkiInSkiOut: true,
            isPetFriendly: false,
          },

          {
            id: "snow-pine",
            name: "Snowpine | Walk to Ski | 3 BDR | Private Hot Tub",
            images: [
              "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
              "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
              "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            beds: 3,
            bathrooms: 3.5,
            location: "Creekside Village, Whistler",
            description:
              "A modern 3-bedroom Creekside retreat with private hot tub, fireplace, BBQ and fire pit, just a 5-minute walk from the Creekside Gondola.",
            features: [
              "Private Hot Tub",
              "5-Minute Walk to Gondola",
              "3 Ensuite Bedrooms",
              "Fireplace",
              "Covered Patio & BBQ",
              "Outdoor Fire Pit",
              "Garage with Tesla Charger",
              "Ski Locker at Creekside Base",
            ],
            highlights: [
              "5-Minute Walk to Creekside Gondola",
              "Private Hot Tub",
              "3 Ensuite Bedrooms",
              "Pets Allowed",
            ],
            priceRange: "Monthly Price Range: $10,000-$12,000",
            winterPrice: "90 night minimum",
            holidayPrice: "$30,000 - 3 months | $40,000 - 4 months",
            airbnbLink:
              "https://www.airbnb.ca/rooms/744832560480313027?guests=1&adults=1&s=67&unique_share_id=50412c76-d839-4753-bf56-19310f38a4ef",
            isSkiInSkiOut: false,
            isPetFriendly: true,
          },

          {
            id: "wedge-mountain-lodge-spa",
            name: "Wedge Mountain Lodge & Spa",
            images: [
              "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 1.jpg",
              "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 2.jpg",
              "/photos/properties/Wedge Mountain Lodge Spa/WML Great Room (Looking South).jpg",
            ],
            guests: 26,
            bedrooms: 10,
            bathrooms: 13,
            location: "Wedgewoods, Whistler",
            description:
              "This spectacular mountain lodge in exclusive Stonebridge offers the ultimate in luxury and privacy. With 8,500 sq. ft. of living space, it features a private spa, home theater, and the option for private chef service.",
            features: [
              "Private Spa",
              "Heated Pool",
              "Home Theater",
              "Wine Cellar",
              "Private Chef Available",
              "Multiple Fireplaces",
              "Games Room",
              "Mountain Views",
            ],
            highlights: [
              "Private Spa Facilities",
              "Optional Private Chef",
              "Heated Outdoor Pool",
              "Ultimate Luxury Experience",
            ],
            priceRange: "$8,000-$11,500+ per night",
            winterPrice: "Request for Event & Wedding Venue Whistler Pricing",
            holidayPrice: "Request for Nightly rates",
            contactLink: "/contact",
          },

          {
            id: "luxe-cozy-3-bed-whistler-village",
            name: "Luxe Cozy 3-Bed Whistler Village",
            images: [
              "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/02-1 4668 Blackcomb Way 02-Edit.jpg",
              "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
              "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 3,
            location: "Upper Whistler Village, Whistler",
            description:
              "This stylish and recently renovated 3-bedroom condo in Whistler Village combines convenient location with modern comfort. Tastefully decorated with a cozy mountain aesthetic and just minutes from the gondolas.",
            features: [
              "Recently Renovated",
              "Modern Design",
              "Village Location",
              "Walk to Lifts",
              "Gas Fireplace",
              "Designer Furnishings",
              "Open Concept Living",
              "Mountain Views",
            ],
            highlights: [
              "Stylish Modern Interior",
              "Steps to Village Restaurants",
              "5-Minute Walk to Gondolas",
              "Fully Equipped Kitchen",
            ],
            priceRange: "$750-$2,200+ per night",
            winterPrice: "$750-$1,500+ Nightly | Winter",
            holidayPrice: "$1,800-$2,200+ Nightly | Christmas & NY",
          },

          {
            id: "whispering-pines",
            name: "The Aspens | On-Hill Ski-In/Out | Hot Tubs | 2 BDR",
            images: [
              "/photos/properties/The Aspens/4800-Spearhead-Drive-1.JPG",
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            location: "Upper Village, Whistler",
            description:
              "Ground-floor ski-in/ski-out at The Aspens on Blackcomb Mountain. Closest unit to the pool and three hot tubs, with a king primary suite, twin bedroom, patio BBQ and easy walk to Upper Village and Whistler Village.",
            features: [
              "Ski-in/Ski-out Access",
              "Pool & Three Hot Tubs",
              "Ground-Floor Unit",
              "King Primary Suite",
              "Patio & BBQ",
              "Fireplace",
              "Fully Equipped Kitchen",
              "Walk to Whistler Village",
            ],
            highlights: [
              "True Ski-in/Ski-out",
              "Prestigious Horstman Location",
              "Private Hot Tub",
              "Luxury Alpine Design",
            ],
            priceRange: "Nightly Price Range: $350-$1,300",
            winterPrice: "",
            holidayPrice: "",
            isSkiInSkiOut: true,
          },

          {
            id: "marquise-2-bed",
            name: "Marquise 2 Bed | Ski-In/Ski-Out | Whistler Village",
            images: [
              "/photos/properties/Marquise 2-bed/Marquise-15.jpg",
            ],
            guests: 4,
            bedrooms: 1,
            bathrooms: 1,
            location: "Upper Village, Whistler",
            description:
              "Main-floor ski-in/ski-out Marquise condo on Blackcomb Mountain with a brand-new Puffy Royal King bed, Queen pullout, fireplace, in-unit washer and dryer, free parking, pool, hot tub and gym. Upper Village is about a 5-minute walk away.",
            features: [
              "Ski-in/Ski-out Access",
              "In-Unit Washer & Dryer",
              "Shared Pool & Hot Tub",
              "Fitness Gym",
              "Main-Floor Unit",
              "Free Parking Included",
              "Gas Fireplace",
              "Fully Equipped Kitchen",
              "Secure Ski Storage",
            ],
            highlights: [
              "True Ski-in/Ski-out",
              "Pool & Hot Tub",
              "Easy Access to Blackcomb Base",
              "Cozy Mountain Retreat",
            ],
            priceRange: "Nightly Price Range: $160-450",
            winterPrice: "",
            holidayPrice: "",
            isPetFriendly: true,
            isSkiInSkiOut: true,
          },

          {
            id: "the-nest",
            name: "The Nest | Ski-In-Out | 5BR | Prime Spot | Hot Tub",
            images: [
              "/photos/properties/Wolverine Crescent/01 - 20251220 A7M4 01 A1_01116-Edit.jpg",
            ],
            guests: 11,
            bedrooms: 5,
            beds: 7,
            bathrooms: 4.5,
            location: "Nordic, Whistler",
            description:
              "Welcome to The Nest, a newly renovated 5-bedroom mountain home in Whistler’s peaceful Nordic neighbourhood, ideally positioned between Creekside and Whistler Village. Enjoy mountain views, beautiful sunsets, spacious living areas, high-end furnishings and a private hot tub after a day on the slopes. Ski access is only a short walk away, with the option to ski back toward the home, while Creekside Village, restaurants, cafés, groceries and the gondola are just a few minutes away by car.",
            features: [
              "Ski-in/ski-out – on a ski run",
              "Kitchen",
              "Wifi",
              "Dedicated workspace",
              "Free parking garage on premises",
              "Private hot tub",
              "Pets allowed",
              "TV",
              "Washer",
              "Free dryer – In unit",
            ],
            highlights: [],
            priceRange: "Monthly Price Range: $18,000-$29,000",
            winterPrice: "Allow stay for 28 days or more",
            holidayPrice: "$29,000 Monthly | Winter",
            link: "/listings/the-nest-ski-in-ski-out",
            isPetFriendly: true,
            isSkiInSkiOut: true,
          },

          {
            id: "ski-in-ski-out-walk-to-lifts-2-bed",
            name: "Le Chamois | Ski-In/Out | 2 Bed | Blackcomb",
            images: [
              "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-4.jpg",
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            beds: 2,
            location: "Upper Village, Whistler",
            description:
              "Le Chamois at the base of Blackcomb Mountain with a 2-minute walk to the gondola and ski-out. King suite, Murphy bedroom, free parking, EV charger, pool, hot tub and gym.",
            features: [
              "2-Minute Walk to Blackcomb Gondola",
              "King Suite & Murphy Bedroom",
              "Free Underground Parking",
              "EV Charger",
              "Outdoor Pool & Hot Tub",
              "Fitness Gym",
              "Personal Ski Locker",
            ],
            highlights: [],
            priceRange: "Nightly Price Range: $350-$1,200",
            winterPrice: "",
            holidayPrice: "",
            link: "/listings/ski-in-ski-out-walk-to-lifts-2-bed",
            isSkiInSkiOut: true,
            isPetFriendly: false,
          },

          {
            id: "whistler-village-views-luxury-2-5-bedroom",
            name: "Tyndall - Luxe 2 bedroom, Main Whistler Village",
            images: [
              "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-14.jpg",
            ],
            guests: 6,
            bedrooms: 2.5,
            bathrooms: 2,
            beds: 4,
            location: "Main Whistler Village",
            description:
              "Freshly renovated 2.5-bedroom Tyndall Stone Lodge retreat overlooking Olympic Plaza. A/C, in-suite laundry, pool and hot tub, guaranteed underground parking, and walk to gondolas.",
            features: [
              "Olympic Plaza Views",
              "Heart of Whistler Village",
              "Walk to Gondolas",
              "A/C & In-Suite Laundry",
              "Fully Equipped Kitchen",
              "Shared Pool & Hot Tub",
              "Guaranteed Underground Parking",
              "Netflix & High-Speed Wi-Fi",
            ],
            highlights: [
              "Overlooking Olympic Plaza",
              "Freshly Renovated",
              "Guaranteed Parking",
              "Village North Location",
            ],
            priceRange: "Nightly Price Range: $400-$1,150+",
            winterPrice: "$600-$900+ Nightly | Winter",
            holidayPrice: "$900-$1,150+ Nightly | Christmas & NY",
            isPetFriendly: false,
            isSkiInSkiOut: false,
          },

          {
            id: "cozy-lakefront-whistler-condo",
            name: "Cozy Lakefront Whistler Condo | Mountain View",
            images: [
              "/photos/properties/Nick North 2-Bed/01 - 20251006 A7M4 03 A1_03279-Edit.jpg",
              "/photos/properties/Nick North 2-Bed/02 - 20251006 A7M4 03 A1_03248-Edit-Edit.jpg",
              "/photos/properties/Nick North 2-Bed/03 - 20251006 A7M4 03 A1_03258-Edit.jpg"
            ],
            guests: 7,
            bedrooms: 2,
            bathrooms: 2,
            location: "Nicklaus North, Whistler",
            description:
              "Stylish top-floor 2 BDR/2BA + pull out living room bed, located at the prestigious Nicklaus North Golf Course. Recently updated with modern décor, high ceilings, and stunning lake and mountain views from every room. Step outside to enjoy cross-country skiing, biking, and lakeside walks, or dine at Table 19, known for Whistler's best fondue, happy hour, lunch & dinner. In summer, golf steps from your door, all just a 7-minute drive to Whistler Village!",
            features: [
              "Golf Course Views",
              "Lakefront Views",
              "Private Patio (200 sqft)",
              "Underground Parking",
              "High-Speed WiFi (300mbps)",
              "Smart TV & Bose Speaker",
              "Washer & Dryer",
              "Fully Equipped Kitchen"
            ],
            highlights: [
              "Nicklaus North Golf Course Location",
              "Lakefront & Mountain Views",
              "7 Minutes to Whistler Village",
              "Top Floor with Vaulted Ceilings"
            ],
            priceRange: "$250-800 per night Summer",
            winterPrice: "$500-1300 Nightly | Winter",
            holidayPrice: "$1400-1800 Nightly | Christmas & NY",
            link: "/listings/cozy-lakefront-whistler-condo-mountain-view",
            airbnbLink: "https://www.airbnb.ca/rooms/1305524887656641858?guests=1&adults=1&s=67&unique_share_id=23663c37-e33a-445b-a53c-6f927f30d084",
            isPetFriendly: false,
            isSkiInSkiOut: false,
          },

          {
            id: "scandinavian-mountainside-retreat-pemberton-meadows-50-acres",
            name: "Pemberton Escape | 50 Acres | Wellness & Heli Retreat",
            images: [
              "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14319-Edit-2.jpg",
              "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/DJI_0195-Edit.jpg",
              "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/DJI_0096-Edit.jpg",
              "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_R001526-Edit.jpg",
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 5,
            location: "Pemberton Meadows, Pemberton",
            description:
              "This 5-bed, 5-bath award-winning property was designed with the eye of a leading Japanese architect. Set on 50 acres of private land with breathtaking panoramic views of the Pemberton Valley Mountain Range. Includes private chef and butler service.",
            features: [
              "50 Acres Private Estate",
              "Private Chef & Butler",
              "Mountain Views",
              "Hot Tub",
              "On-site Gym",
              "Log Fireplace",
              "Floor-to-Ceiling Windows",
              "Hiking Trails Access"
            ],
            highlights: [
              "Award-Winning Architecture",
              "Perfect for Wellness Retreats",
              "Heli-Skiing Access",
              "Private Chef Included"
            ],
            priceRange: "Pricing: $30,000-35,000 per event",
            winterPrice: "Availability for Heli & Wellness Retreats coming soon",
            holidayPrice: "Includes 2 Night Accommodation",
          },

          {
            id: "villa-rosabella-mykonos",
            name: "Villa Rosabella | Mykonos",
            images: [
              "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (1).jpg",
              "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (10).jpg",
              "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (11).jpg"
            ],
            guests: 16,
            bedrooms: 8,
            bathrooms: 8,
            priceRange: "€3,500-€5,800 per night",
            location: "Mykonos, Greece",
            description: "Villa Rosabella is a world-class luxury retreat designed for UHNW guests seeking privacy, exclusivity, and unparalleled Aegean views. Perched on a cliffside overlooking the shimmering Aegean, this ultra-private estate seamlessly blends modern luxury with authentic Mykonian elegance, creating the ultimate high-end escape in Mykonos.",
            features: [
              "Private Infinity Pool",
              "Direct Sea Access",
              "Private Gym",
              "Outdoor Dining & BBQ Area",
              "Daily Housekeeping",
              "Wine Cellar",
              "Smart Home System",
              "Concierge Services"
            ],
            highlights: [
              "Unrivaled Sunset Views",
              "Exclusive Private Pathway to Beach",
              "Expansive Outdoor Living Areas",
              "Absolute Privacy & Luxury"
            ],
            link: "/worldwide-listings/villa-rosabella-mykonos",
            isSkiInSkiOut: false,
            isPetFriendly: false,
            country: "greece"
          },

          {
            id: "cotswolds-uk-soho-farm-house",
            name: "Cotswolds UK - Soho Farm House",
            images: [
              "/photos/properties/Cotswolds UK - Soho Farm House/224A8292.jpg",
              "/photos/properties/Cotswolds UK - Soho Farm House/DJI_20260720185020_0008_D.jpg",
              "/photos/properties/Cotswolds UK - Soho Farm House/Cotswolds Cover Pool 2.jpeg",
              "/photos/properties/Cotswolds UK - Soho Farm House/224A8465.jpg",
              "/photos/properties/Cotswolds UK - Soho Farm House/Hot tub shot no AC cotswolds.png"
            ],
            guests: 15,
            bedrooms: 8,
            bathrooms: 5,
            priceRange: "2-3 night minimum. £1,200-£3,100 per night | Dependent on season, day of week, holidays, etc.",
            location: "Cotswolds, United Kingdom",
            description: "Designer Stone Estate Near Soho Farmhouse – 8 Bedroom, Spa, Tennis Court, & Annex. Welcome to your countryside dream retreat, just 4 minutes by car (or a scenic 30-minute walk through a private trail) from the world-famous Soho Farmhouse. This beautifully renovated 8-bedroom, 5-bathroom stone estate offers over 320m² of luxurious living space across two dwellings, all set on a stunning and serene 2-acre property.",
            features: [
              "Private Tennis Court",
              "Infrared Sauna",
              "Hot Tub & Cold Plunge",
              "Designer Kitchen with AGA Oven",
              "Two Cozy Living Rooms",
              "Electric Car Charger",
              "Air Conditioning",
              "Outdoor BBQ & Dining",
              "Firepit"
            ],
            highlights: [
              "Near Soho Farmhouse",
              "320m² Luxury Living Space",
              "Main House + Separate Annex",
              "2-Acre Private Grounds"
            ],
            link: "/worldwide-listings/cotswolds-uk-soho-farm-house",
            airbnbLink: "https://www.airbnb.ca/rooms/1414129878809697902?guests=1&adults=1&s=67&unique_share_id=ba3bff7b-bc57-416c-bcd6-96b0943cfe51",
            isSkiInSkiOut: false,
            isPetFriendly: false,
            country: "uk"
          },

          {
            id: "vancouver-house-corner",
            name: "Vancouver House Corner Unit | 30th Floor",
            images: [
              "/photos/properties/vancouver-house/645adc4aca79d22167763483_Vancouver_House-03.jpg",
              "/photos/properties/vancouver-house/645adc49fb32ea8384334e2e_Vancouver_House-05.jpg",
              "/photos/properties/vancouver-house/645adc48fb32ea2543334d52_Vancouver_House-13.jpg"
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            location: "Vancouver, BC",
            description:
              "Experience the epitome of luxury urban living in this stunning corner unit at Vancouver House. Located on the 30th floor, this property offers breathtaking views of False Creek, downtown Vancouver, and the North Shore mountains.",
            features: [
              "Corner Unit Views",
              "30th Floor",
              "Fully Equipped Kitchen",
              "High-End Appliances",
              "In-Building Gym",
              "Concierge Service",
              "Central Location",
              "Parking Available",
            ],
            highlights: [
              "Panoramic City Views",
              "Luxury Finishes",
              "Prime Location",
              "Building Amenities",
            ],
            priceRange: "$12,000 per month | 3 month minimum",
            link: "/vancouver-listings/vancouver-house-corner-unit-30th-floor"
          },

          {
            id: "mykonos-crystal-villa",
            name: "Mykonos Crystal Villa | Infinity Pool | Sea Views",
            images: [
              "/photos/properties/Villa Aegean Mykonos Greece/Header5-TRG_5803.jpg",
              "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
              "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg"
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 5,
            priceRange: "$2,500-$5,000 per night",
            location: "Agios Lazaros, Mykonos, Greece",
            description: "Perched on a hillside in exclusive Agios Lazaros, Crystal Villa offers breathtaking views of the Aegean Sea and the famous Mykonos sunset. This architectural masterpiece combines traditional Cycladic design with modern luxury.",
            features: [
              "Infinity Pool",
              "Panoramic Sea Views",
              "Private Chef Available",
              "Daily Housekeeping",
              "Concierge Service",
              "Outdoor Dining Areas",
              "Alfresco Lounge",
              "Close to Psarou Beach"
            ],
            highlights: [
              "Stunning Aegean Views",
              "Infinity Pool",
              "Designer Interiors",
              "Close to Top Beaches"
            ],
            link: "/worldwide-listings/mykonos-crystal-villa",
            contactLink: "/contact",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            country: "greece"
          },

          {
            id: "super-yacht-thailand",
            name: "Super Yacht Thailand | Luxury Charter | Full Crew",
            images: [
              "/photos/properties/Yacht Thailand Sea D/Sun Deck WEB-12.jpg",
              "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
              "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg"
            ],
            guests: 10,
            bedrooms: 5,
            beds: 8,
            bathrooms: 6,
            priceRange: "Weekly Rate | 170,000 - 210,000 USD",
            location: "Phuket, Thailand",
            description: "Experience the height of luxury aboard our 100-foot super yacht in the stunning waters of Thailand. With a full crew including captain, chef, and stewards, explore the breathtaking islands and beaches of the Andaman Sea in complete comfort.",
            features: [
              "Full Professional Crew",
              "Private Chef",
              "Master Suite",
              "Water Sports Equipment",
              "Alfresco Dining",
              "Jacuzzi",
              "Stabilizers",
              "Air Conditioning Throughout"
            ],
            highlights: [
              "Explore Thailand by Sea",
              "Full Professional Crew",
              "All-Inclusive Experience",
              "Ultimate Luxury Adventure"
            ],
            link: "/worldwide-listings/super-yacht-thailand",
            contactLink: "/contact",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            country: "thailand"
          },

          {
            id: "punta-mita---casa-juntos",
            name: "Punta Mita - Casa Juntos | Beachfront | Full Staff",
            images: [
              "/photos/properties/Punta Mita/242608_2093 copy 2.jpg",
              "/photos/properties/Punta Mita/242608_2031 copy.jpg",
              "/photos/properties/Punta Mita/242608_2031 copy.jpg"
            ],
            guests: 12,
            bedrooms: 6,
            bathrooms: 6.5,
            priceRange: "$3,000-$7,000 per night",
            location: "Punta Mita, Mexico",
            description: "Located within the exclusive Punta Mita resort community, Casa Juntos is a stunning beachfront villa offering panoramic Pacific Ocean views and direct beach access. With full staff including private chef, this luxury retreat provides the ultimate Mexican Riviera experience.",
            features: [
              "Direct Beach Access",
              "Infinity Pool",
              "Full Staff Including Chef",
              "Golf Club Access",
              "Indoor/Outdoor Living",
              "Home Theater",
              "Fully Equipped Gym",
              "Ocean-View Master Suite"
            ],
            highlights: [
              "Private Beachfront",
              "Full Staff with Chef",
              "Exclusive Resort Access",
              "Spectacular Ocean Views"
            ],
            link: "/worldwide-listings/punta-mita---casa-juntos",
            contactLink: "/contact",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            country: "mexico"
          },

          {
            id: "hood-river-luxury-home",
            name: "Hood River Luxury Home",
            images: [
              "/photos/properties/hood-river-luxury-home/Interior 3.jpg",
              "/photos/properties/hood-river-luxury-home/Exterior 1.jpg",
              "/photos/properties/hood-river-luxury-home/Exterior 1.jpg"
            ],
            guests: 10,
            bedrooms: 4,
            bathrooms: 3.5,
            priceRange: "$800-$1,200 per night",
            location: "Hood River, Oregon",
            description: "This luxury home in Hood River, Oregon, offers breathtaking views of the Columbia River Gorge. Features include a private hot tub, sauna, and modern amenities.",
            features: [
              "Private Hot Tub",
              "Sauna",
              "Mountain Views",
              "Modern Amenities",
              "Gourmet Kitchen",
              "Outdoor Deck",
              "High-End Finishes",
              "Fireplace"
            ],
            highlights: [
              "Exclusive Location",
              "Luxury Design",
              "Private Hot Tub",
              "Sauna"
            ],
            link: "/worldwide-listings/hood-river-luxury-home",
            contactLink: "/contact",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            country: "usa"
          },

          {
            id: "luxury-3-bed-stunning-views",
            name: "Marquise Penthouse | Ski-In/Out | 3-Bed | Views",
            images: [
              "/photos/properties/Luxury 3-Bed | Stunning Views/04 - 20250707 A7M3 03 A1_07325.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/01 - 20250707 A7M3 03 A1_07650-Edit.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/02 - 20250707 A7M3 02 A1_07212.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/03 - 20250707 A7M3 03 A1_07314.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/05 - 20250707 A7M3 03 A1_07332.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/06 - 20250707 A7M3 03 A1_07340.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/07 - 20250707 A7M3 03 A1_07364.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/08 - 20250707 A7M3 03 A1_07385.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/09 - 20250707 A7M3 03 A1_07408.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/10 - 20250707 A7M3 03 A1_07425.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/11 - 20250707 A7M3 03 A1_07431.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/12 - 20250707 A7M3 03 A1_07440.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/13 - 20250707 A7M3 03 A1_07448.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/14 - 20250707 A7M3 03 A1_07455.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/15 - 20250707 A7M3 03 A1_07467.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/16 - 20250707 A7M3 03 A1_07474.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/17 - 20250707 A7M3 03 A1_07480.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/18 - 20250707 A7M3 03 A1_07489.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/19 - 20250707 A7M3 03 A1_07497.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/20 - 20250707 A7M3 03 A1_07505-Edit.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/21 - 20250707 A7M3 03 A1_07512.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/22 - 20250707 A7M3 03 A1_07519.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/23 - 20250707 A7M3 03 A1_07527.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/24 - 20250707 A7M3 03 A1_07539.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/25 - 20250707 A7M3 03 A1_07544.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/26 - 20250707 A7M3 03 A1_07554.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/27 - 20250707 A7M3 03 A1_07562.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/28 - 20250707 A7M3 03 A1_07571.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/29 - 20250707 A7M3 03 A1_07588.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/30 - 20250707 A7M3 03 A1_07598.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/31 - 20250707 A7M3 03 A1_07627.jpg",
              "/photos/properties/Luxury 3-Bed | Stunning Views/Pool Marquise 1.png",
              "/photos/properties/Luxury 3-Bed | Stunning Views/Pool Marquise 2.png"
            ],
            guests: 6,
            bedrooms: 2,
            bathrooms: 2,
            location: "Blackcomb Benchlands, Whistler",
            description:
              "Spacious 1,100 sq. ft. Marquise penthouse on Blackcomb with Fairmont and mountain views, 2 bedrooms, fireplace, private patio, A/C, glass-domed hot tub, pool, sauna and gym.",
            features: [
              "Fairmont & Mountain Views",
              "Glass-Domed Hot Tub",
              "Heated Pool & Sauna",
              "Fitness Center",
              "Gas Fireplace",
              "Private Patio",
              "Summer A/C",
              "Ski Access on Blackcomb",
            ],
            highlights: [
              "Fairmont & Mountain Views",
              "Marquise Penthouse on Blackcomb",
              "Resort Pool, Hot Tub & Sauna",
              "Spacious 1,100 sq ft Condo",
            ],
            priceRange: "Nightly Price Range: $400-$1,150+",
            winterPrice: "$650-$1000+ Nightly | Winter",
            holidayPrice: "$1000-$1280+ Nightly | Christmas & NY",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            airbnbLink: "https://www.airbnb.ca/rooms/1461637483646115205?guests=1&adults=1&s=67&unique_share_id=9b6640b9-138d-4627-bea4-cb2155e32c72",
            link: "/listings/luxury-3-bed-stunning-views",
          },

          {
            id: "bluffs-unit-4",
            name: "Bluffs - Luxury 2 Bed Ski in Ski out in Creeksside - Views!",
            images: [
              "/photos/properties/Bluffs Unit 4/IMG_001112.JPG",
              "/photos/properties/Bluffs Unit 4/01 - 20260522 MM4P 02 0362.jpg",
              "/photos/properties/Bluffs Unit 4/Hot tub.png",
            ],
            guests: 6,
            bedrooms: 2,
            bathrooms: 2,
            beds: 3,
            location: "Taluswood, Whistler",
            description:
              "Perched in Taluswood's Bluffs, this 2-bedroom retreat drops you onto the Dave Murray Downhill for true ski-in ski-out days and sunset mountain-view evenings.",
            features: [
              "True Ski-in/Ski-out",
              "Hot Tub",
              "Gas Fireplace",
              "Chef-Ready Kitchen",
              "Underground Parking (2 stalls)",
              "Ski & Bike Storage",
              "Mountain Views",
              "Portable AC (May–Nov)",
            ],
            highlights: [
              "Dave Murray Downhill Access",
              "King & Queen Suites",
              "Private Complex Hot Tub",
              "Heated Bathroom Floors",
            ],
            priceRange: "$380-950 in summer",
            winterPrice: "$500-1350 in winter",
            holidayPrice: "$1500-2500+ for Christmas/NYE",
            link: "/listings/bluffs-unit-4-taluswood",
            airbnbLink: BLUFFS_AIRBNB_LINK,
            isPetFriendly: false,
            isSkiInSkiOut: true,
          },

          {
            id: "squamish-retreat",
            name: "Squamish Retreat With The Best View!",
            images: [
              "/photos/properties/Squamish/16 - 20251104 A7M4 01 A1_06655.jpg",
              "/photos/properties/Squamish/01 - 20251104 A7M4 01 A1_06919-Edit.jpg",
              "/photos/properties/Squamish/02 - 20251104 MM4P 01 0036-Edit.jpg"
            ],
            guests: 8,
            bedrooms: 3,
            bathrooms: 3,
            location: "Squamish, BC",
            description:
              "Stylish Squamish house with breathtaking views! Your house is a 3000 sqft 3BR/3BA located in the heart of Squamish, BC. Squamish is home to legendary hikes, mountain biking, and skiing with Whistler only a quick 45-min drive away. New-ish house with a ski/mountain bike mud room, sauna, games room, free parking, dedicated workspace and multiple patios looking towards the mountains make the house unique and perfect for a work trip or vacation with family or friends.",
            features: [
              "3000 sqft Living Space",
              "Sauna",
              "Games Room",
              "Mountain Views",
              "Ski/Mountain Bike Storage",
              "Free Parking",
              "Dedicated Workspace",
              "Multiple Patios"
            ],
            highlights: [
              "Breathtaking Mountain Views",
              "Newly Finished Kitchen",
              "High-End Mattresses",
              "Ultra High Speed Fibre Optic WIFI (300mbps)"
            ],
            priceRange: "$500-1500 per night Summer",
            winterPrice: "$500-1500 Nightly | Winter",
            holidayPrice: "$2200-2500+ Nightly | Christmas & NY",
            link: "/listings/squamish-retreat-with-the-best-view",
            airbnbLink: "https://www.airbnb.ca/rooms/1047983607752975484?guests=1&adults=1&s=67&unique_share_id=1e623ba5-133a-4c05-b1c9-4ac721a40a6d",
            isPetFriendly: false,
            isSkiInSkiOut: false,
          },

          {
            id: "northlands-walk-to-village-slopes-luxury-4-bed",
            name: "Symphony - Walk to village & slopes - Luxury 4-bed",
            images: [
              "/photos/properties/Northlands Symphony 29/01 - 20251128 A7M4 02 A1_02882_.jpg",
              "/photos/properties/Northlands Symphony 29/02 - 20251128 A7M4 02 A1_02752.jpg",
              "/photos/properties/Northlands Symphony 29/03 - 20251128 A7M4 02 A1_02760.jpg"
            ],
            guests: 6,
            bedrooms: 2,
            bathrooms: 3,
            beds: 4,
            location: "Whistler Village, Whistler",
            description:
              "Unique 3-level townhome-style retreat in the Symphony Building with 2 bedrooms, 4 beds, 3 full bathrooms, shared hot tub, private exterior entrance, and free underground parking in Whistler Village.",
            features: [
              "King Primary Bedroom",
              "Private Exterior Entrance",
              "Three-Level Townhome Layout",
              "3 Full Bathrooms",
              "Shared Hot Tub",
              "Free Underground Parking",
              "Fully Equipped Kitchen",
              "Summer Air Conditioning",
              "Walk to Slopes (12–15 min)",
            ],
            highlights: [
              "Symphony Building · Village North",
              "Private Townhome Feel",
              "Fresh St. Market Across Street",
              "Walk to Slopes & Amenities",
            ],
            priceRange: "$500-1200 per night Summer",
            winterPrice: "$750-1500 Nightly | Winter",
            holidayPrice: "$2500-3500+ Nightly | Christmas & NY",
            link: "/listings/northlands-walk-to-village-slopes-luxury-4-bed",
            airbnbLink: "https://www.airbnb.ca/rooms/1566952897757488737?guests=1&adults=1&s=67&unique_share_id=70d8a9c5-be29-49cb-a1de-03c1e0ec667b",
            isPetFriendly: false,
            isSkiInSkiOut: false,
          },

          {
            id: "hotel-booking-assistance",
            name: "Hotel Booking Assistance & Concierge Services | Four Seasons, Fairmont, The Westin",
            images: [
              "/thumbnails/Four Seasons Resort and Residences Whistler_885.webp",
              "/thumbnails/Fairmont Image.webp",
              "/thumbnails/The-Westin-Resort-And-Spa-small_0006_Westin-Whistler-7-660x440.webp",
            ],
            guests: "2-25+",
            bedrooms: null,
            bathrooms: null,
            location: "Whistler",
            description:
              "Expert hotel booking assistance with exclusive perks and optional concierge services. Access priority reservations, room upgrades, dining credits, and more at no extra cost. Our local partnerships with premium hotels ensure you get the best possible experience.",
            features: [
              "Priority Room Upgrades",
              "Dining Credits",
              "Early/Late Checkout",
              "Included Breakfast",
              "VIP Status",
              "Optional Concierge",
              "Restaurant Reservations",
              "Transportation Services",
            ],
            highlights: [
              "No Extra Cost for Booking",
              "Exclusive Hotel Perks",
              "Optional Premium Concierge",
              "Local Expert Assistance",
            ],
            priceRange: "Subject to request, 5-night minimum stays, 2+ bedrooms",
            winterPrice: "$200 USD per hour concierge services",
            holidayPrice: "No charge for booking, only for optional concierge services",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            link: "/listings/hotel-booking-assistance"
          }],
      },
      {
        id: "worldwide",
        title: "Worldwide Properties",
        description:
          "Introducing AceHost Global VIP Concierge Services & Villas We're thrilled to announce that AceHost now offers exclusive VIP concierge services and handpicked luxury properties across the globe. Whether you're dreaming of a beachfront estate, a serene countryside chateau, or a sleek modern villa for a group getaway, our team will source the perfect destination tailored to your vision.\nBelow is a curated selection of homes we currently work with, but our network extends far beyond. If you're planning your next vacation and looking for a large, private villa paired with personalized service, we're here to make it happen.\nThis offering is reserved for our top-tier VIP clients & repeat guests. Inquire today to see if you qualify.",
        properties: [
          {
            id: "cotswolds-uk-soho-farm-house",
            name: "Cotswolds UK - Soho Farm House",
            images: [
              "/photos/properties/Cotswolds UK - Soho Farm House/224A8292.jpg",
              "/photos/properties/Cotswolds UK - Soho Farm House/DJI_20260720185020_0008_D.jpg",
              "/photos/properties/Cotswolds UK - Soho Farm House/Cotswolds Cover Pool 2.jpeg",
              "/photos/properties/Cotswolds UK - Soho Farm House/224A8465.jpg",
              "/photos/properties/Cotswolds UK - Soho Farm House/Hot tub shot no AC cotswolds.png"
            ],
            guests: 15,
            bedrooms: 8,
            bathrooms: 5,
            priceRange: "2-3 night minimum. £1,200-£3,100 per night | Dependent on season, day of week, holidays, etc.",
            location: "Cotswolds, United Kingdom",
            description: "Designer Stone Estate Near Soho Farmhouse – 8 Bedroom, Spa, Tennis Court, & Annex. Welcome to your countryside dream retreat, just 4 minutes by car (or a scenic 30-minute walk through a private trail) from the world-famous Soho Farmhouse. This beautifully renovated 8-bedroom, 5-bathroom stone estate offers over 320m² of luxurious living space across two dwellings, all set on a stunning and serene 2-acre property.",
            features: [
              "Private Tennis Court",
              "Infrared Sauna",
              "Hot Tub & Cold Plunge",
              "Designer Kitchen with AGA Oven",
              "Two Cozy Living Rooms",
              "Electric Car Charger",
              "Air Conditioning",
              "Outdoor BBQ & Dining",
              "Firepit"
            ],
            highlights: [
              "Near Soho Farmhouse",
              "320m² Luxury Living Space",
              "Main House + Separate Annex",
              "2-Acre Private Grounds"
            ],
            link: "/worldwide-listings/cotswolds-uk-soho-farm-house",
            airbnbLink: "https://www.airbnb.ca/rooms/1414129878809697902?guests=1&adults=1&s=67&unique_share_id=ba3bff7b-bc57-416c-bcd6-96b0943cfe51",
            isSkiInSkiOut: false,
            isPetFriendly: false,
            country: "uk"
          },
          {
            id: "santorini-greece-villa-eclipse",
            name: "Santorini Greece - Villa Eclipse",
            images: [
              "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(7 of 25).jpg",
              "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(6 of 25).jpg", 
              "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(16 of 25).jpg"
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 5,
            location: "Santorini, Greece",
            description:
              "Villa Eclipse is a luxury private villa in Santorini offering total privacy and breathtaking sea views. Located on a peaceful cliffside on the southwest coast of the island, it promises a tranquil retreat while remaining close to the island's best spots.",
            features: [
              "Private Infinity Pool",
              "Sea Views",
              "Outdoor Jacuzzi",
              "Daily Breakfast",
              "Concierge Services",
              "Air Conditioning",
              "Smart TVs",
              "Five En-suite Bedrooms"
            ],
            highlights: [
              "Breathtaking Sea Views",
              "Private Infinity Pool",
              "Luxury Cycladic Design",
              "Five-Star Services"
            ],
            priceRange: "€1,300-€1,920 per night",
            link: "/worldwide-listings/santorini-greece-villa-eclipse",
            country: "greece"
          },
          {
            id: "villa-oineas-greece-mykonos",
            name: "Villa Oineas - Greece Mykonos",
            images: [
              "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06907.jpg",
              "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06621.jpg",
              "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 17.jpg"
            ],
            guests: 12,
            bedrooms: 5,
            bathrooms: 5,
            priceRange: "€1,450-€2,550 per night",
            location: "Mykonos, Greece",
            description: "Villa Oineas is a newly built luxury estate in Santorini, nestled within 32 acres of private vineyards and designed to offer the ultimate blend of elegance, privacy, and premium living. With panoramic views of the island's southern coastline, this exclusive sanctuary is ideal for luxury holidays, destination weddings, and private VIP events.",
            features: [
              "Heated Seawater Infinity Pool",
              "Private Tennis Court",
              "Wine Cellar",
              "Cinema",
              "Daily Maid Service",
              "Concierge Services",
              "Smart TVs",
              "Private Heliport"
            ],
            highlights: [
              "32 Acres Private Estate",
              "Panoramic Sea Views",
              "Perfect for Events",
              "Five-Star Amenities"
            ],
            link: "/worldwide-listings/villa-oineas-greece-mykonos",
            isSkiInSkiOut: false,
            isPetFriendly: false,
            country: "greece"
          },
          {
            id: "helios-estate-mykonos",
            name: "Helios Estate - Mykonos",
            images: [
              "/photos/properties/Helios Estate - Mykonos/01.jpg",
              "/photos/properties/Helios Estate - Mykonos/02.jpg",
              "/photos/properties/Helios Estate - Mykonos/03.jpg"
            ],
            guests: 16,
            bedrooms: 8,
            bathrooms: 9,
            priceRange: "€15,000-€26,000 per night",
            location: "Mykonos, Greece",
            description: "Helios Estate is a magnificent luxury property perched on a hillside in one of Mykonos' most exclusive areas. With 8 luxurious bedrooms, 9 bathrooms, two swimming pools, expansive outdoor living spaces, and breathtaking panoramic views of the Aegean Sea, this exceptional estate offers an unparalleled retreat for the most discerning travelers.",
            features: [
              "Two Infinity Swimming Pools",
              "Private Tennis Court",
              "Fitness Center",
              "Spa & Wellness Area",
              "Cinema Room",
              "Wine Cellar",
              "Private Chef Available",
              "Concierge Services"
            ],
            highlights: [
              "Panoramic Sea Views",
              "Entertainment Areas",
              "Luxury Accommodations",
              "Premium Location"
            ],
            link: "/worldwide-listings/helios-estate-mykonos",
            isSkiInSkiOut: false,
            isPetFriendly: false,
            country: "greece"
          },
          {
            id: "villa-rosabella-mykonos",
            name: "Villa Rosabella | Mykonos",
            images: [
              "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (1).jpg",
              "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (10).jpg",
              "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (11).jpg"
            ],
            guests: 16,
            bedrooms: 8,
            bathrooms: 8,
            priceRange: "€3,500-€5,800 per night",
            location: "Mykonos, Greece",
            description: "Villa Rosabella is a world-class luxury retreat designed for UHNW guests seeking privacy, exclusivity, and unparalleled Aegean views. Perched on a cliffside overlooking the shimmering Aegean, this ultra-private estate seamlessly blends modern luxury with authentic Mykonian elegance, creating the ultimate high-end escape in Mykonos.",
            features: [
              "Private Infinity Pool",
              "Direct Sea Access",
              "Private Gym",
              "Outdoor Dining & BBQ Area",
              "Daily Housekeeping",
              "Wine Cellar",
              "Smart Home System",
              "Concierge Services"
            ],
            highlights: [
              "Unrivaled Sunset Views",
              "Exclusive Private Pathway to Beach",
              "Expansive Outdoor Living Areas",
              "Absolute Privacy & Luxury"
            ],
            link: "/worldwide-listings/villa-rosabella-mykonos",
            isSkiInSkiOut: false,
            isPetFriendly: false,
            country: "greece"
          },
          {
            id: "mykonos-crystal-villa",
            name: "Mykonos Crystal Villa | Infinity Pool | Sea Views",
            images: [
              "/photos/properties/Villa Aegean Mykonos Greece/Header5-TRG_5803.jpg",
              "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
              "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg"
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 5,
            priceRange: "$2,500-$5,000 per night",
            location: "Agios Lazaros, Mykonos, Greece",
            description: "Perched on a hillside in exclusive Agios Lazaros, Crystal Villa offers breathtaking views of the Aegean Sea and the famous Mykonos sunset. This architectural masterpiece combines traditional Cycladic design with modern luxury.",
            features: [
              "Infinity Pool",
              "Panoramic Sea Views",
              "Private Chef Available",
              "Daily Housekeeping",
              "Concierge Service",
              "Outdoor Dining Areas",
              "Alfresco Lounge",
              "Close to Psarou Beach"
            ],
            highlights: [
              "Stunning Aegean Views",
              "Infinity Pool",
              "Designer Interiors",
              "Close to Top Beaches"
            ],
            link: "/worldwide-listings/mykonos-crystal-villa",
            contactLink: "/contact",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            country: "greece"
          },
          {
            id: "super-yacht-thailand",
            name: "Super Yacht Thailand | Luxury Charter | Full Crew",
            images: [
              "/photos/properties/Yacht Thailand Sea D/Sun Deck WEB-12.jpg",
              "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
              "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg"
            ],
            guests: 10,
            bedrooms: 5,
            beds: 8,
            bathrooms: 6,
            priceRange: "Weekly Rate | 170,000 - 210,000 USD",
            location: "Phuket, Thailand",
            description: "Experience the height of luxury aboard our 100-foot super yacht in the stunning waters of Thailand. With a full crew including captain, chef, and stewards, explore the breathtaking islands and beaches of the Andaman Sea in complete comfort.",
            features: [
              "Full Professional Crew",
              "Private Chef",
              "Master Suite",
              "Water Sports Equipment",
              "Alfresco Dining",
              "Jacuzzi",
              "Stabilizers",
              "Air Conditioning Throughout"
            ],
            highlights: [
              "Explore Thailand by Sea",
              "Full Professional Crew",
              "All-Inclusive Experience",
              "Ultimate Luxury Adventure"
            ],
            link: "/worldwide-listings/super-yacht-thailand",
            contactLink: "/contact",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            country: "thailand"
          },
          {
            id: "punta-mita---casa-juntos",
            name: "Punta Mita - Casa Juntos | Beachfront | Full Staff",
            images: [
              "/photos/properties/Punta Mita/242608_2093 copy 2.jpg",
              "/photos/properties/Punta Mita/242608_2031 copy.jpg",
              "/photos/properties/Punta Mita/242608_2031 copy.jpg"
            ],
            guests: 12,
            bedrooms: 6,
            bathrooms: 6.5,
            priceRange: "$3,000-$7,000 per night",
            location: "Punta Mita, Mexico",
            description: "Located within the exclusive Punta Mita resort community, Casa Juntos is a stunning beachfront villa offering panoramic Pacific Ocean views and direct beach access. With full staff including private chef, this luxury retreat provides the ultimate Mexican Riviera experience.",
            features: [
              "Direct Beach Access",
              "Infinity Pool",
              "Full Staff Including Chef",
              "Golf Club Access",
              "Indoor/Outdoor Living",
              "Home Theater",
              "Fully Equipped Gym",
              "Ocean-View Master Suite"
            ],
            highlights: [
              "Private Beachfront",
              "Full Staff with Chef",
              "Exclusive Resort Access",
              "Spectacular Ocean Views"
            ],
            link: "/worldwide-listings/punta-mita---casa-juntos",
            contactLink: "/contact",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            country: "mexico"
          },
          {
            id: "hood-river-luxury-home",
            name: "Hood River Luxury Home",
            images: [
              "/photos/properties/hood-river-luxury-home/Interior 3.jpg",
              "/photos/properties/hood-river-luxury-home/Exterior 1.jpg",
              "/photos/properties/hood-river-luxury-home/Exterior 1.jpg"
            ],
            guests: 10,
            bedrooms: 4,
            bathrooms: 3.5,
            priceRange: "$800-$1,200 per night",
            location: "Hood River, Oregon",
            description: "This luxury home in Hood River, Oregon, offers breathtaking views of the Columbia River Gorge. Features include a private hot tub, sauna, and modern amenities.",
            features: [
              "Private Hot Tub",
              "Sauna",
              "Mountain Views",
              "Modern Amenities",
              "Gourmet Kitchen",
              "Outdoor Deck",
              "High-End Finishes",
              "Fireplace"
            ],
            highlights: [
              "Exclusive Location",
              "Luxury Design",
              "Private Hot Tub",
              "Sauna"
            ],
            link: "/worldwide-listings/hood-river-luxury-home",
            contactLink: "/contact",
            isPetFriendly: false,
            isSkiInSkiOut: false,
            country: "usa"
          },
        ],
      },
    ];
