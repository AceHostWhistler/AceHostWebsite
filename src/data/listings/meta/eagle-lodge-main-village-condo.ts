import type { ListingData } from "../types";

const base = "/photos/properties/Eagle Lodge 238";

export const EAGLE_LODGE_COVER = `${base}/Balcony snow shot.png`;

const AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1776955453586628651?guests=1&adults=1&s=67&unique_share_id=2e93f58e-f371-431b-81ae-330d43a91d41";

const listing: ListingData = {
  slug: "eagle-lodge-main-village-condo",
  galleryPreserveOrder: true,
  photos: [
    EAGLE_LODGE_COVER,
    `${base}/IMG_4305.JPG`,
    `${base}/IMG_4306.JPG`,
    `${base}/IMG_4307.JPG`,
    `${base}/IMG_4308.JPG`,
    `${base}/IMG_4309.JPG`,
    `${base}/IMG_4310.JPG`,
    `${base}/IMG_4311.JPG`,
    `${base}/IMG_4312.JPG`,
    `${base}/IMG_4314.JPG`,
    `${base}/IMG_4315.JPG`,
    `${base}/IMG_4316.JPG`,
    `${base}/IMG_4317.JPG`,
    `${base}/IMG_4318.JPG`,
    `${base}/IMG_4319.JPG`,
    `${base}/IMG_4320.JPG`,
  ],
  seo: {
    title: "Eagle Lodge | Main Village Condo | Walk to Lifts | Free Parking - AceHost",
    description:
      "Stay in the centre of Whistler Village at this renovated 1-bedroom Eagle Lodge condo. Walk about 7 minutes to the gondolas, with restaurants, shops and Olympic Plaza just outside. King bed, sofa bed, full kitchen, gas fireplace, private balcony and free underground parking.",
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
