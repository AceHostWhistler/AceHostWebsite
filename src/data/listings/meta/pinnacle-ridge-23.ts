import type { ListingData } from "../types";
import {
  PINNACLE_RIDGE_23_AIRBNB_LINK,
  PINNACLE_RIDGE_23_COVER,
  PINNACLE_RIDGE_23_PHOTOS,
} from "../pinnacleRidge23Photos";

const listing: ListingData = {
  slug: "pinnacle-ridge-23",
  photos: PINNACLE_RIDGE_23_PHOTOS,
  seo: {
    title: "Pinnacle Ridge 23 | Ski-In/Out | Hot Tub | Village - AceHost",
    description:
      "Renovated 6-bedroom Blackcomb townhome at Pinnacle Ridge 23. Ski access about 2 minutes from the door, an 8-minute walk to Upper Village and 13 minutes to Whistler Village. Private hot tub, fireplace, chef's kitchen and space for 14 guests.",
  },
  header: {
    title: "Pinnacle Ridge 23 | Ski-In/Out | Hot Tub | Village",
    guests: 14,
    bedrooms: 6,
    beds: 10,
    bathrooms: 5.5,
    priceRange: "Nightly Price Range: $1,365-$3,675+",
    winterPrice: "$2,100-$3,675+ Nightly | Winter",
    holidayPrice: "$4,200-$7,560+ Nightly | Christmas & NY",
    airbnbLink: PINNACLE_RIDGE_23_AIRBNB_LINK,
  },
  galleryTitle: "Pinnacle Ridge 23 | Ski-In/Out | Hot Tub | Village",
  photoAltPrefix: "Pinnacle Ridge 23",
  structuredData: {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Pinnacle Ridge 23 | Ski-In/Out | Hot Tub | Village",
    image: PINNACLE_RIDGE_23_COVER,
    description:
      "Renovated 6-bedroom Blackcomb townhome at Pinnacle Ridge 23. Ski access about 2 minutes from the door, an 8-minute walk to Upper Village and 13 minutes to Whistler Village. Private hot tub, fireplace, chef's kitchen and space for 14 guests.",
    sku: "pinnacle-ridge-23",
    brand: {
      "@type": "Brand",
      name: "AceHost",
    },
  },
};

export default listing;
