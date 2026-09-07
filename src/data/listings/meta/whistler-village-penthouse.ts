import type { ListingData } from "../types";

export const HEARTHSTONE_COVER =
  "/photos/properties/3-Bed PH Whistler Village/snowy-room-blinds-only Hearthstone.png";

const listing: ListingData = {
  slug: "whistler-village-penthouse",
  photos: [
    HEARTHSTONE_COVER,
    "/photos/properties/3-Bed PH Whistler Village/Hearthstone snow 1.png",
    "/photos/properties/3-Bed PH Whistler Village/Hearthstone snow 2.png",
    "/photos/properties/3-Bed PH Whistler Village/Hearthstone snow 3.png",
    "/photos/properties/3-Bed PH Whistler Village/Hearthstone snow 4.png",
    "/photos/properties/3-Bed PH Whistler Village/Hearthstone snow 5.png",
    "/photos/properties/3-Bed PH Whistler Village/Hearthstone Hot tub.png",
    "/photos/properties/3-Bed PH Whistler Village/Hearthstone living room:hot tub.png",
  ],
  seo: {
    title: "Whistler Village Penthouse 4-Bed - Ski in Ski out | AceHost",
    description:
      "Hearthstone Lodge penthouse with private balcony hot tub, stone fireplace, log beams, and steps-from-gondola access in the heart of Whistler Village.",
  },
  header: {
    title: "Whistler Village Penthouse 4-Bed - Ski in Ski out",
    guests: 7,
    bedrooms: 2,
    bathrooms: 2,
    priceRange: "Nightly Price Range: $450-$1,700",
    winterPrice: "$700-$1,100+ Nightly | Winter",
    holidayPrice: "$1,300-$1,700+ Nightly | Christmas & NY",
    airbnbLink:
      "https://www.airbnb.ca/rooms/1471251206220643818?guests=1&adults=1&s=67&unique_share_id=0ec28644-49fa-4b63-9276-7e5f5c6a1153",
  },
  galleryTitle: "Hearthstone Lodge Penthouse",
  photoAltPrefix: "Hearthstone Lodge Whistler Village",
};

export default listing;
