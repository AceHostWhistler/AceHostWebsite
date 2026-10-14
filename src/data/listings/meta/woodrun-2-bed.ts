import type { ListingData } from "../types";
import {
  WOODRUN_2_BED_AIRBNB_LINK,
  WOODRUN_2_BED_COVER,
  WOODRUN_2_BED_PHOTOS,
} from "../woodrun2BedPhotos";

const listing: ListingData = {
  slug: "woodrun-2-bed",
  photos: WOODRUN_2_BED_PHOTOS,
  galleryPreserveOrder: true,
  seo: {
    title: "Ski-In Ski-Out Penthouse | Pool - Hot Tub - Views - AceHost",
    description:
      "Stay in the Woodrun Penthouse, a luxury ski-in/ski-out retreat on Blackcomb Mountain where exposed log beams and vaulted ceilings meet modern renovations and premium furnishings. Enjoy mountain views, a private balcony and gas fireplace, plus a shared year-round heated pool, hot tub, gym and sauna. Sleeps 7 with a King suite, Queen/Twin bunk and Queen sofa bed, plus two guaranteed free underground parking spots, two ski lockers, boot dryer, AC, Pack 'n Play and high chair.",
  },
  header: {
    title: "Ski-In Ski-Out Penthouse | Pool - Hot Tub - Views",
    guests: 7,
    bedrooms: 2,
    bathrooms: 2,
    beds: 4,
    priceRange: "$500-$3,000 per night",
    holidayPrice: "$2,500-$3,750 Nightly | Christmas & NY",
    airbnbLink: WOODRUN_2_BED_AIRBNB_LINK,
  },
  galleryTitle: "Ski-In Ski-Out Penthouse | Pool - Hot Tub - Views",
  photoAltPrefix: "Woodrun Lodge ski-in ski-out penthouse",
  structuredData: {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Ski-In Ski-Out Penthouse | Pool - Hot Tub - Views",
    image: WOODRUN_2_BED_COVER,
    description:
      "Stay in the Woodrun Penthouse, a luxury ski-in/ski-out retreat on Blackcomb Mountain where exposed log beams and vaulted ceilings meet modern renovations and premium furnishings. Enjoy mountain views, a private balcony and gas fireplace, plus a shared year-round heated pool, hot tub, gym and sauna.",
    sku: "woodrun-2-bed",
    brand: {
      "@type": "Brand",
      name: "AceHost",
    },
  },
};

export default listing;
