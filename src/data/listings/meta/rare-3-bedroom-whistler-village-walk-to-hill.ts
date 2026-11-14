import type { ListingData } from "../types";

const base = "/photos/properties/John 3-bed Granite Court";

export const GRANITE_COURT_COVER = `${base}/Granite_snow_reno_edit_1_cleaned.jpg`;

export const GRANITE_COURT_PHOTOS = [
  GRANITE_COURT_COVER,
  `${base}/Granite snow reno edit 9.jpg`,
  `${base}/Granite snow reno edit 13.jpg`,
  `${base}/Granite snow reno edit 6.jpg`,
  `${base}/Granite snow reno edit 12.jpg`,
  `${base}/Granite snow reno edit 10.jpg`,
  `${base}/Granite snow reno edit 8.jpg`,
  `${base}/Granite snow reno edit 2.jpg`,
  `${base}/Granite snow reno edit 11.jpg`,
  `${base}/Granite snow reno edit 4.jpg`,
  `${base}/Granite snow reno edit 5.jpg`,
  `${base}/Granite snow reno edit 7.jpg`,
  `${base}/Granite snow reno edit 3.jpg`,
  `${base}/01 - 20251125 A7M4 01 A1_02152.jpg`,
  `${base}/30 - 20251125 A7M4 01 A1_02187.jpg`,
  `${base}/32.03 - 102 - 4405 Blackcomb Way, Whistler - 02 - 20261112 A7M4 04 A1_00518.jpg`,
  `${base}/32.03 - 102 - 4405 Blackcomb Way, Whistler - 05 - 20261112 A7M4 04 A1_00609.jpg`,
  `${base}/32.03 - 102 - 4405 Blackcomb Way, Whistler - 10 - 20261112 A7M4 04 A1_00582.jpg`,
  `${base}/32.03 - 102 - 4405 Blackcomb Way, Whistler - 11 - 20261112 A7M4 04 A1_00603.jpg`,
  `${base}/32.03 - 102 - 4405 Blackcomb Way, Whistler - 12 - 20261112 A7M4 04 A1_00589.jpg`,
  `${base}/32.03 - 102 - 4405 Blackcomb Way, Whistler - 14 - 20261112 A7M4 04 A1_00405.jpg`,
  `${base}/32.03 - 102 - 4405 Blackcomb Way, Whistler - 17 - 20261112 A7M4 04 A1_00433.jpg`,
  `${base}/32.03 - 102 - 4405 Blackcomb Way, Whistler - 18 - 20261112 A7M4 04 A1_00445.jpg`,
  `${base}/26 - 20251125 A7M4 01 A1_02000.jpg`,
  `${base}/27 - 20251125 A7M4 01 A1_02162.jpg`,
  `${base}/28 - 20251125 A7M4 01 A1_02167.jpg`,
  `${base}/29 - 20251125 A7M4 01 A1_02172.jpg`,
  `${base}/34 - 20251125 A7M4 01 A1_02043.jpg`,
  `${base}/35 - 20251125 A7M4 01 A1_02052.jpg`,
  `${base}/38 - 20251125 A7M4 01 A1_02142.jpg`,
  `${base}/41 - 20251125 A7M4 01 A1_02129.jpg`,
  `${base}/42 - 20251125 A7M4 01 A1_02135.jpg`,
  `${base}/43 - 20251125 A7M4 01 A1_02192.jpg`,
  `${base}/44 - 20251125 A7M4 01 A1_01985.jpg`,
  `${base}/45 - 20251125 A7M4 01 A1_02251.jpg`,
];

const listing: ListingData = {
  slug: "rare-3-bedroom-whistler-village-walk-to-hill",
  galleryPreserveOrder: true,
  photos: GRANITE_COURT_PHOTOS,
  seo: {
    title: "3-BDRM | Whistler Village | Walk to Hill | Hot Tub",
    description: "A rare Whistler Village chalet with the space and privacy of a home, just steps from restaurants, shops and the mountain. Spread across two levels, this 3-bedroom retreat features oversized wraparound balconies, mountain views, a private hot tub and cozy fireplace. One of its standout features is two guaranteed designated underground parking spaces, exceptionally rare for a central Village property, so groups arriving in multiple vehicles can park with ease and walk almost everywhere.",
  },
  header:   {
      "title": "3-BDRM | Whistler Village | Walk to Hill | Hot Tub",
      "guests": 8,
      "bedrooms": 3,
      "bathrooms": 3,
      "priceRange": "$450-1450 per night Summer",
      "beds": 4,
      "winterPrice": "$750-1600 Nightly | Winter",
      "holidayPrice": "$2000-3400 Nightly | Christmas & NY",
      "airbnbLink": "https://www.airbnb.ca/rooms/1565322561889624431?guests=1&adults=1&s=67&unique_share_id=bcb85131-d1b0-4d39-9975-7580fd94a5d9"
  },
  galleryTitle: "3-BDRM | Whistler Village | Walk to Hill | Hot Tub",
  photoAltPrefix: "3-BDRM | Whistler Village | Walk to Hill | Hot Tub",
};

export default listing;
