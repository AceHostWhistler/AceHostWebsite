import type { ListingData } from "../types";
import {
  BLUFFS_UNIT_8_AIRBNB_LINK,
} from "../bluffsUnit8AirbnbLink";

const listing: ListingData = {
  slug: "bluffs-unit-8-taluswood",
  photos: [
    "/photos/properties/Bluffs Unit 8/Bluffs 8 edit 4.png",
    "/photos/properties/Bluffs Unit 8/01 - 20260805 MM4P 010149.jpg",
    "/photos/properties/Bluffs Unit 8/04 - 20260805 A7M4 02 A1_09717.jpg",
    "/photos/properties/Bluffs Unit 8/05 - 20260805 A7M4 02 A1_09723.jpg",
    "/photos/properties/Bluffs Unit 8/08 - 20260805 A7M4 02 A1_09747.jpg",
    "/photos/properties/Bluffs Unit 8/09 - 20260805 A7M4 02 A1_09757.jpg",
    "/photos/properties/Bluffs Unit 8/12 - 20260805 A7M4 02 A1_09779.jpg",
    "/photos/properties/Bluffs Unit 8/14 - 20260805 A7M4 02 A1_09876.jpg",
    "/photos/properties/Bluffs Unit 8/18 - 20260805 A7M4 02 A1_09912.jpg",
    "/photos/properties/Bluffs Unit 8/19 - 20260805 A7M4 02 A1_09921.jpg",
    "/photos/properties/Bluffs Unit 8/20 - 20260805 A7M4 02 A1_09930.jpg",
    "/photos/properties/Bluffs Unit 8/21 - 20260805 A7M4 02 A1_09905.jpg",
    "/photos/properties/Bluffs Unit 8/28 - 20260805 A7M4 02 A1_09884.jpg",
    "/photos/properties/Bluffs Unit 8/29 - 20260805 A7M4 02 A1_09898.jpg",
    "/photos/properties/Bluffs Unit 8/30 - 20260805 A7M4 02 A1_09891.jpg",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 edit.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 edit 1.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 edit 2.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 edit 3.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 edit 5.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 edit 6.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 Master.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 Master 3.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 white bed.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 white bed 1.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 white bed 2.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 white bed 3.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 white bed 5.png",
    "/photos/properties/Bluffs Unit 8/Bluffs 8 white bed4.png",
    "/photos/properties/Bluffs Unit 8/Hot tub snow bluffs.png",
  ],
  seo: {
    title:
      "Bluffs #8 - Luxury 3 Bed - Ski in Ski out - Views! | AceHost",
    description:
      "Perched in Taluswood's Bluffs, this 3-bedroom ski-in ski-out retreat offers a King suite, bunk room, hot tub, mountain views, and space for up to 8 guests in Whistler.",
  },
  header: {
    title: "Bluffs #8 - Luxury 3 Bed - Ski in Ski out - Views!",
    guests: 8,
    bedrooms: 3,
    beds: 7,
    bathrooms: 3,
    priceRange: "Summer: $450-$1,200+ | Winter: $750-$1,600+ | Christmas/NY: $2,300-$3,100+",
    winterPrice: "$750-$1,600+ Nightly | Winter",
    holidayPrice: "$2,300-$3,100+ Nightly | Christmas & NY",
    airbnbLink: BLUFFS_UNIT_8_AIRBNB_LINK,
  },
  galleryTitle: "Bluffs #8 - Luxury 3 Bed - Ski in Ski out - Views!",
  photoAltPrefix: "Bluffs Unit 8 Taluswood",
  structuredData: {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Bluffs #8 - Luxury 3 Bed - Ski in Ski out - Views!",
    image: "/photos/properties/Bluffs Unit 8/Bluffs 8 edit 4.png",
    description:
      "Perched in Taluswood's Bluffs, this 3-bedroom ski-in ski-out retreat offers mountain views, a hot tub, and space for up to 8 guests in Whistler.",
    sku: "bluffs-unit-8-taluswood",
    brand: {
      "@type": "Brand",
      name: "AceHost",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: 3,
      lowPrice: 450,
      highPrice: 3100,
      priceCurrency: "CAD",
      availability: "https://schema.org/LimitedAvailability",
      validFrom: "2024-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Summer Rate",
          price: 450,
          priceCurrency: "CAD",
          availability: "https://schema.org/LimitedAvailability",
        },
        {
          "@type": "Offer",
          name: "Winter Rate",
          price: 750,
          priceCurrency: "CAD",
          availability: "https://schema.org/LimitedAvailability",
        },
        {
          "@type": "Offer",
          name: "Christmas & NY Rate",
          price: 2300,
          priceCurrency: "CAD",
          availability: "https://schema.org/LimitedAvailability",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1",
    },
  },
};

export default listing;
