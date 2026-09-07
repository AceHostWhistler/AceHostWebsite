import type { ListingData } from "../types";

/** Temporary placeholder until Cascade 514 gallery is added */
export const CASCADE_LODGE_514_COVER =
  "/photos/properties/Cascade 615/615 snow.png";

const AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1698669698880515260?guests=1&adults=1&s=67&unique_share_id=c50ee5ca-2a60-44f8-98a9-dcce220de545";

const listing: ListingData = {
  slug: "cascade-lodge-514-luxe-mountain-view-studio",
  photos: [CASCADE_LODGE_514_COVER],
  seo: {
    title: "Luxe Mountain View Studio # 514 Cascade Lodge - AceHost",
    description:
      "Newly renovated luxe mountain-view studio at Cascade Lodge in Whistler Village with queen bed, sofa bed, kitchenette, Smart TV, and shared pool, hot tubs, saunas and fitness room.",
  },
  header: {
    title: "Luxe Mountain View Studio # 514 Cascade Lodge",
    guests: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    priceRange: "$250-850 CAD per night",
    airbnbLink: AIRBNB_LINK,
  },
  galleryTitle: "Luxe Mountain View Studio # 514 Cascade Lodge",
  photoAltPrefix: "Cascade Lodge #514",
};

export default listing;
