import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const blackcombGreensWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Experience luxury living in this stunning Blackcomb Greens townhouse. Featuring modern amenities, spectacular mountain views, and easy access to Whistler's attractions.",
    ],
    highlights: [
      "3 bedrooms",
      "2.5 bathrooms",
      "Sleeps 8 guests",
      "4 beds",
      "Blackcomb Greens",
      "Mountain views",
      "Walk to Village area",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 0,
      alt: "Blackcomb Greens exterior",
    },
    paragraphs: [
      "This Blackcomb Greens luxury townhouse offers a comfortable base for exploring Whistler, with room for families and groups who want modern amenities and convenient access to the resort.",
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    notes: [
      "Guests: 8. Bedrooms: 3. Beds: 4. Bathrooms: 2.5. Typical nightly range: $500-$1,200 per night.",
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
  },
};

export default blackcombGreensWriteup;
