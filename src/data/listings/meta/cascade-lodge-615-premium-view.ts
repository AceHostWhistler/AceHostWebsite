import type { ListingData } from "../types";

export const CASCADE_LODGE_615_COVER =
  "/photos/properties/Cascade 615/615 snow 5.png";

const AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1151559188640677466?guests=1&adults=1&s=67&unique_share_id=2e3dc34d-7ab2-4698-884c-11838031da54";

const listing: ListingData = {
  slug: "cascade-lodge-615-premium-view",
  photos: [
    CASCADE_LODGE_615_COVER,
    "/photos/properties/Cascade 615/615 snow.png",
    "/photos/properties/Cascade 615/615 snow 2.png",
    "/photos/properties/Cascade 615/615 snow 3.png",
    "/photos/properties/Cascade 615/615 snow 4.png",
    "/photos/properties/Cascade 615/615 snow 6.png",
    "/photos/properties/Cascade 615/615 snow 7.png",
    "/photos/properties/Cascade 615/20240621 A7M3 05 A1_02388.jpg",
    "/photos/properties/Cascade 615/20240621 A7M3 05 A1_02411.jpg",
    "/photos/properties/Cascade 615/20240621 A7M3 05 A1_02427.jpg",
    "/photos/properties/Cascade 615/20240621 A7M3 05 A1_02459.jpg",
    "/photos/properties/Cascade 615/20240621 A7M3 05 A1_02500.jpg",
    "/photos/properties/Cascade 615/20240621 A7M3 05 A1_02519.jpg",
    "/photos/properties/Cascade 615/20240621 A7M3 05 A1_02529.jpg",
    "/photos/properties/Cascade 615/20240621 A7M3 05 A1_02562.jpg",
    "/photos/properties/Cascade 615/20240621 A7M3 05 A1_02579.jpg",
  ],
  seo: {
    title: "Cascade Lodge #615 | Premium View - AceHost",
    description:
      "Sixth-floor Cascade Lodge condo at the gateway to Whistler Village with premium forest and mountain views, private balcony, gas fireplace, full kitchen, in-unit washer and dryer, and shared pool, hot tubs, saunas and fitness room.",
  },
  header: {
    title: "Cascade Lodge #615 | Premium View",
    guests: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    priceRange: "$250-900 CAD per night",
    airbnbLink: AIRBNB_LINK,
  },
  galleryTitle: "Cascade Lodge #615 | Premium View",
  photoAltPrefix: "Cascade Lodge #615",
};

export default listing;
