import type { ListingData } from "../types";

const base = "/photos/properties/Gables 11 Thi";

export const ALPINE_ESCAPE_AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1803047052383490890?guests=1&adults=1&s=67&unique_share_id=a96591df-1eb8-4d11-b26f-6f279e07d0cd";

export const ALPINE_ESCAPE_COVER = `${base}/Gables snow edit 3.jpg`;

const listing: ListingData = {
  slug: "alpine-escape-ski-in-out-whistler-village",
  photos: [
    ALPINE_ESCAPE_COVER,
    `${base}/Gables snow edit 2.jpg`,
    `${base}/Gables snow edit 6.jpg`,
    `${base}/IMG_4622.JPG`,
    `${base}/IMG_4624.JPG`,
    `${base}/IMG_4625.JPG`,
    `${base}/IMG_4626.JPG`,
    `${base}/Gables snow edit 4.jpg`,
    `${base}/Gables snow edit 5.jpg`,
    `${base}/IMG_4634.JPG`,
    `${base}/IMG_4631.JPG`,
    `${base}/IMG_4633.JPG`,
    `${base}/IMG_4635.JPG`,
    `${base}/Gables snow edit .jpg`,
    `${base}/Gables snow edit 1.jpg`,
    `${base}/IMG_4639.JPG`,
  ],
  galleryPreserveOrder: true,
  seo: {
    title: "Alpine Escape | Ski-In/Out | Whistler Village | AceHost",
    description:
      "Stay in one of Whistler's rarest locations, perfectly positioned between Whistler Village and the Upper Village, with ski-in/ski-out access and both gondolas less than a 5-minute walk away. This charming 3-bedroom, 2-bath chalet-style retreat features vaulted ceilings, a wood-burning fireplace, 2 King bedrooms, a bunk room, a spacious dining area and secure underground parking.",
  },
  header: {
    title: "Alpine Escape | Ski-In/Out | Whistler Village",
    guests: 8,
    bedrooms: 3,
    beds: 5,
    bathrooms: 2,
    priceRange: "$575-$3,450 per night",
    holidayPrice: "$2,875-$4,313 Nightly | Christmas & NY",
    airbnbLink: ALPINE_ESCAPE_AIRBNB_LINK,
  },
  galleryTitle: "Alpine Escape | Ski-In/Out | Whistler Village",
  photoAltPrefix: "Gables 11 Alpine Escape Whistler Village",
  structuredData: {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Alpine Escape | Ski-In/Out | Whistler Village",
    image: ALPINE_ESCAPE_COVER,
    description:
      "Stay in one of Whistler's rarest locations, perfectly positioned between Whistler Village and the Upper Village, with ski-in/ski-out access and both gondolas less than a 5-minute walk away.",
    sku: "alpine-escape-ski-in-out-whistler-village",
    brand: {
      "@type": "Brand",
      name: "AceHost",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: 2,
      lowPrice: 575,
      highPrice: 4313,
      priceCurrency: "CAD",
      availability: "https://schema.org/LimitedAvailability",
      validFrom: "2024-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Standard Rate",
          price: 575,
          priceCurrency: "CAD",
          availability: "https://schema.org/LimitedAvailability",
        },
        {
          "@type": "Offer",
          name: "Christmas & NY Rate",
          price: 2875,
          priceCurrency: "CAD",
          availability: "https://schema.org/LimitedAvailability",
        },
      ],
    },
  },
};

export default listing;
