import type { ListingData } from "../types";

const base = "/photos/properties/Valhalla Unit 33 Village";

const listing: ListingData = {
  slug: "valhalla-unit-33-village",
  photos: [
    `${base}/Living room angle 3.png`,
    `${base}/Living room angle 2.png`,
    `${base}/Living room brighter.png`,
    `${base}/Balcony.png`,
    `${base}/Ironed bed Master Northlands.png`,
    `${base}/Ironed Bed Master 2.png`,
    `${base}/Ironed Bed Master 3.png`,
    `${base}/Bedroom 2 ironed.png`,
    `${base}/Bedroom 2 Ironed 2.png`,
    `${base}/Bunk Bed Ironed.png`,
    `${base}/Bunk Bed ironed image 2.png`,
    `${base}/Bunk Bed Ironed 3.png`,
    `${base}/Hot tub Northlands snow.png`,
    `${base}/Northlands Outdoor snow.png`,
    `${base}/05 - 20260522 A7M4 01 A1_06186.jpg`,
    `${base}/06 - 20260522 A7M4 01 A1_06207.jpg`,
    `${base}/08 - 20260522 A7M4 01 A1_06004.jpg`,
    `${base}/09 - 20260522 A7M4 01 A1_05961.jpg`,
    `${base}/10 - 20260522 A7M4 01 A1_06201.jpg`,
    `${base}/11 - 20260522 A7M4 01 A1_05983.jpg`,
    `${base}/12 - 20260522 A7M4 01 A1_05971.jpg`,
    `${base}/13 - 20260522 A7M4 01 A1_05990.jpg`,
    `${base}/14 - 20260522 A7M4 01 A1_06193.jpg`,
    `${base}/15 - 20260522 A7M4 01 A1_06008.jpg`,
    `${base}/16 - 20260522 A7M4 01 A1_06020.jpg`,
    `${base}/17 - 20260522 A7M4 01 A1_06032.jpg`,
    `${base}/21 - 20260522 A7M4 01 A1_06068.jpg`,
    `${base}/22 - 20260522 A7M4 01 A1_06076.jpg`,
    `${base}/30 - 20260522 A7M4 01 A1_06159.jpg`,
    `${base}/31 - 20260522 A7M4 01 A1_06086.jpg`,
    `${base}/32 - 20260522 A7M4 01 A1_06218.jpg`,
  ],
  seo: {
    title: "Luxury 3-Bed Whistler Village | Private Hot Tub | AceHost",
    description:
      "Experience the ultimate Whistler escape at Valhalla Peaks. Ski-in/ski-out access, private hot tub, chef's kitchen, and three bedrooms in the heart of Whistler Village.",
  },
  header: {
    title: "Luxury 3-Bed Whistler Village | Private Hot Tub",
    guests: 8,
    bedrooms: 3,
    beds: 5,
    bathrooms: 3,
    priceRange: "$500-$2,000 per night",
    winterPrice: "$650-$1,700 Nightly | Winter",
    holidayPrice: "$2,000-$3,000 Nightly | Christmas & NY",
    airbnbLink:
      "https://www.airbnb.ca/rooms/1693450379764005787?guests=1&adults=1&s=67&unique_share_id=bd20bf84-b138-4958-9dc8-9128130a2028",
  },
  galleryTitle: "Valhalla Unit 33 Village",
  photoAltPrefix: "Valhalla Peaks Whistler Village",
  structuredData: {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Luxury 3-Bed Whistler Village | Private Hot Tub",
    image: `${base}/Living room angle 3.png`,
    description:
      "Valhalla Peaks apartment in Whistler Village with ski-in/ski-out access, private hot tub, and three bedrooms.",
    sku: "valhalla-unit-33-village",
    brand: {
      "@type": "Brand",
      name: "AceHost",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: 3,
      lowPrice: 500,
      highPrice: 3000,
      priceCurrency: "CAD",
      availability: "https://schema.org/LimitedAvailability",
      validFrom: "2024-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Standard Rate",
          price: 500,
          priceCurrency: "CAD",
          availability: "https://schema.org/LimitedAvailability",
        },
        {
          "@type": "Offer",
          name: "Winter Rate",
          price: 650,
          priceCurrency: "CAD",
          availability: "https://schema.org/LimitedAvailability",
        },
        {
          "@type": "Offer",
          name: "Christmas & NY Rate",
          price: 2000,
          priceCurrency: "CAD",
          availability: "https://schema.org/LimitedAvailability",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "12",
    },
  },
};

export default listing;
