import type { ListingData } from "../types";

export const CASCADE_LODGE_514_COVER =
  "/photos/properties/Cascade 514/514 Snow 3.png";

const AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1698669698880515260?guests=1&adults=1&s=67&unique_share_id=c50ee5ca-2a60-44f8-98a9-dcce220de545";

const listing: ListingData = {
  slug: "cascade-lodge-514-luxe-mountain-view-studio",
  photos: [
    CASCADE_LODGE_514_COVER,
    "/photos/properties/Cascade 514/514 Snow.png",
    "/photos/properties/Cascade 514/514 Snow 1.png",
    "/photos/properties/Cascade 514/514 Snow 2.png",
    "/photos/properties/Cascade 514/514 Snow 4.png",
    "/photos/properties/Cascade 514/01 - 20260527 MM4P 01 0142-Edit.jpg",
    "/photos/properties/Cascade 514/05 - 20260527 A7M4 01 A1_08023.jpg",
    "/photos/properties/Cascade 514/06 - 20260527 A7M4 01 A1_08139.jpg",
    "/photos/properties/Cascade 514/07 - 20260527 A7M4 01 A1_08081.jpg",
    "/photos/properties/Cascade 514/10 - 20260527 A7M4 01 A1_08057.jpg",
    "/photos/properties/Cascade 514/11 - 20260527 A7M4 01 A1_08129.jpg",
    "/photos/properties/Cascade 514/12 - 20260527 A7M4 01 A1_08132.jpg",
    "/photos/properties/Cascade 514/13 - 20260527 A7M4 01 A1_08050.jpg",
    "/photos/properties/Cascade 514/14 - 20260527 A7M4 01 A1_08161.jpg",
    "/photos/properties/Cascade 514/15 - 20260527 A7M4 01 A1_08088.jpg",
    "/photos/properties/Cascade 514/16 - 20260527 A7M4 01 A1_08104.jpg",
    "/photos/properties/Cascade 514/17 - 20260527 A7M4 01 A1_08113.jpg",
    "/photos/properties/Cascade 514/18 - 20260527 A7M4 01 A1_08148.jpg",
    "/photos/properties/Cascade 514/19 - 20260527 A7M4 01 A1_08153-Edit.jpg",
  ],
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
