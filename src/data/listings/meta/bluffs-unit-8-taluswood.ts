import type { ListingData } from "../types";
import {
  BLUFFS_UNIT_8_AIRBNB_LINK,
} from "../bluffsUnit8AirbnbLink";

export const BLUFFS_UNIT_8_COVER =
  "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_38 PM (8).png";

const listing: ListingData = {
  slug: "bluffs-unit-8-taluswood",
  photos: [
    BLUFFS_UNIT_8_COVER,
    "/photos/properties/Bluffs Unit 8/Bluffs 8 drone snow.avif",
    "/photos/properties/Bluffs Unit 8/Front door Bluffs 8.png",
    "/photos/properties/Bluffs Unit 8/08 - 20260805 A7M4 02 A1_09747.jpg",
    "/photos/properties/Bluffs Unit 8/12 - 20260805 A7M4 02 A1_09779.jpg",
    "/photos/properties/Bluffs Unit 8/14 - 20260805 A7M4 02 A1_09876.jpg",
    "/photos/properties/Bluffs Unit 8/18 - 20260805 A7M4 02 A1_09912.jpg",
    "/photos/properties/Bluffs Unit 8/19 - 20260805 A7M4 02 A1_09921.jpg",
    "/photos/properties/Bluffs Unit 8/20 - 20260805 A7M4 02 A1_09930.jpg",
    "/photos/properties/Bluffs Unit 8/21 - 20260805 A7M4 02 A1_09905.jpg",
    "/photos/properties/Bluffs Unit 8/28 - 20260805 A7M4 02 A1_09884.jpg",
    "/photos/properties/Bluffs Unit 8/29 - 20260805 A7M4 02 A1_09898.jpg",
    "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_37 PM (1).png",
    "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_38 PM (2).png",
    "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_38 PM (3).png",
    "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_38 PM (4).png",
    "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_38 PM (5).png",
    "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_38 PM (7).png",
    "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_39 PM (10).png",
    "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_35_39 PM (11).png",
    "/photos/properties/Bluffs Unit 8/ChatGPT Image Sep 4, 2026, 04_50_52 PM.png",
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
      "Bluffs Penthouse - Luxe 3-Bedroom - Ski-in Ski-out | AceHost",
    description:
      "Perched in Taluswood's Bluffs, this 3-bedroom retreat puts you right on the Dave Murray Downhill for true ski-in ski-out days and beautiful mountain-view evenings. With a King suite, Queen bedroom, 4 Twin bunk beds, and a Queen sofa bed, the home is ideal for families and groups. A neighbourhood hot tub with stunning views, AC, Smart TVs, gas fireplace, BBQ, gorgeous patio view, chef-ready kitchen, generous parking, and secure ski & bike storage make every season comfortable and effortless.",
  },
  header: {
    title: "Bluffs Penthouse - Luxe 3-Bedroom - Ski-in Ski-out",
    guests: 10,
    bedrooms: 3,
    beds: 7,
    bathrooms: 3,
    priceRange: "Summer: $450-$1,200+ | Winter: $750-$1,600+ | Christmas/NY: $2,300-$3,100+",
    winterPrice: "$750-$1,600+ Nightly | Winter",
    holidayPrice: "$2,300-$3,100+ Nightly | Christmas & NY",
    airbnbLink: BLUFFS_UNIT_8_AIRBNB_LINK,
  },
  galleryTitle: "Bluffs Penthouse - Luxe 3-Bedroom - Ski-in Ski-out",
  photoAltPrefix: "Bluffs Unit 8 Taluswood",
  structuredData: {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Bluffs Penthouse - Luxe 3-Bedroom - Ski-in Ski-out",
    image: BLUFFS_UNIT_8_COVER,
    description:
      "Perched in Taluswood's Bluffs, this 3-bedroom retreat puts you right on the Dave Murray Downhill for true ski-in ski-out days and beautiful mountain-view evenings. With a King suite, Queen bedroom, 4 Twin bunk beds, and a Queen sofa bed, the home is ideal for families and groups. A neighbourhood hot tub with stunning views, AC, Smart TVs, gas fireplace, BBQ, gorgeous patio view, chef-ready kitchen, generous parking, and secure ski & bike storage make every season comfortable and effortless.",
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
  },
};

export default listing;
