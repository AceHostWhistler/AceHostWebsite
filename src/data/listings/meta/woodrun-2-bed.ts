import type { ListingData } from "../types";
import {
  WOODRUN_2_BED_AIRBNB_LINK,
  WOODRUN_2_BED_PHOTOS,
} from "../woodrun2BedPhotos";

const listing: ListingData = {
  slug: "woodrun-2-bed",
  photos: WOODRUN_2_BED_PHOTOS,
  seo: {
    title: "Ski-In Ski-Out Penthouse | Pool - Hot Tub - Views - AceHost",
    description:
      "Stay in a luxury ski-in/ski-out penthouse on Blackcomb Mountain, where exposed log beams, vaulted ceilings and rustic chalet charm meet modern renovations and top-of-the-line furnishings. Enjoy mountain views through floor-to-ceiling windows and from your private balcony, plus a gas fireplace, year-round heated pool and hot tub. Sleeps 7 with a King suite, Queen/Twin bunk and Queen sofa bed. Includes 2 guaranteed free parking spots, 2 ski lockers, boot dryer, AC, Pack 'n Play and high chair.",
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
};

export default listing;
