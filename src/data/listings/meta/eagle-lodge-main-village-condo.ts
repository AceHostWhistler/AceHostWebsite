import type { ListingData } from "../types";

const base = "/photos/properties/Eagle Lodge 238";

export const EAGLE_LODGE_COVER = `${base}/Eagle edit 1.png`;

const AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1776955453586628651?guests=1&adults=1&s=67&unique_share_id=d783b88f-c389-425b-9d1e-371e0ddde809";

const listing: ListingData = {
  slug: "eagle-lodge-main-village-condo",
  galleryPreserveOrder: true,
  photos: [
    EAGLE_LODGE_COVER,
    `${base}/Eagle edit 3.png`,
    `${base}/Eagle edit 2.png`,
    `${base}/Eagle edit 4.png`,
    `${base}/Eagle edit 5.png`,
    `${base}/Eagle edit 6.png`,
    `${base}/Eagle edit 11.png`,
    `${base}/Eagle edit 7.png`,
    `${base}/Eagle edit 8.png`,
    `${base}/Eagle edit 9.png`,
    `${base}/Eagle edit 10.png`,
    `${base}/Eagle edit 13.png`,
    `${base}/Eagle edit.png`,
    `${base}/Eagle edit 12.png`,
    `${base}/Eagle edit 14.png`,
  ],
  seo: {
    title: "Eagle Lodge | Main Village Condo | Walk to Lifts | Free Parking - AceHost",
    description:
      "Stay in the centre of Whistler Village at this renovated 1-bedroom Eagle Lodge condo. Walk about 7 minutes to the gondolas. Brand-new shared hot tub and gym, king bed, sofa bed, full kitchen, gas fireplace, private balcony and free underground parking.",
  },
  header: {
    title: "Eagle Lodge | Main Village Condo | Walk to Lifts | Free Parking",
    guests: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    priceRange: "$200-$900 per night",
    airbnbLink: AIRBNB_LINK,
  },
  galleryTitle: "Eagle Lodge 238",
  photoAltPrefix: "Eagle Lodge Whistler Village condo",
};

export default listing;
