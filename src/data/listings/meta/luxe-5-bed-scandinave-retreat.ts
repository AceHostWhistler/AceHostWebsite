import type { ListingData } from "../types";
import { SCANDINAVE_PHOTOS } from "@/data/scandinavePhotos";
import { getPropertyAirbnbLink } from "@/data/propertyAirbnbLinks";

const listing: ListingData = {
  slug: "luxe-5-bed-scandinave-retreat",
  photos: SCANDINAVE_PHOTOS,
  seo: {
    title: "Luxe 5-BED Scandinave Retreat - Walk to Slopes - AceHost",
    description:
      "An ideal family ski home just 400m (8 min walk) to Whistler Creekside Gondola. Stunning, unobstructed views of the Tantalus Range, Alpha & Nita Lakes. Perfect for 1 large family, 3 couples, or 2 families. This 1,450 sqft, 3-bedroom, 5-bed, architecturally designed home features; vaulted ceilings, a steam shower, kids' triple bunk room, heated floors, a cozy living area with fireplace, and a kitchen for family dinners. Enjoy 2 free parking spots, A/C, & ski storage!",
  },
  header: {
    title: "Luxe 5-BED Scandinave Retreat - Walk to Slopes",
    guests: 8,
    bedrooms: 3,
    beds: 5,
    bathrooms: 3,
    priceRange: "$450-$1,200+ per night",
    winterPrice: "$750-$1,600+ Nightly | Winter",
    holidayPrice: "$2,300-$3,100+ Nightly | Christmas & NY",
    airbnbLink: getPropertyAirbnbLink("luxe-5-bed-scandinave-retreat"),
  },
  galleryTitle: "Luxe 5-BED Scandinave Retreat",
  photoAltPrefix: "Luxe 5-BED Scandinave Retreat - Walk to Slopes",
};

export default listing;
