import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const luxeCozyWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to our luxurious 3-bedroom, 2.5-bathroom townhome in Blackcomb, Whistler. This end unit offers an ideal mountain retreat for those looking for a unique & cozy log chalet feel. A peaceful location with easy access to the biking/hiking trails at Lost Lake and snowshoe/cross-country trails during the winter. SKI In SKI Out home. Walking distance to the main Whistler Village and ski lifts.",
    ],
    highlights: [
      "3 bed · 2.5 bath townhome",
      "End unit, log chalet feel",
      "Ski-in / ski-out",
      "Walk to Village & lifts",
      "Private hot tub",
      "Wood-burning fireplace",
      "EV charging in garage",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 4,
      alt: "Blackcomb Pines interior",
    },
    paragraphs: [
      "Escape to mountain bliss in our stunning 3-bedroom, 2.5-bathroom townhome nestled in Blackcomb, Whistler. This end unit promises the ultimate retreat with serene surroundings and direct access to the Lost Lake biking and hiking trails. In winter, enjoy the convenience of ski-in access (snow conditions permitting) or hop on the free shuttle to the slopes.",
      "Step inside to find a spacious, inviting living area featuring a cozy wood-burning fireplace and upscale furnishings. The fully equipped kitchen and dining area are perfect for family meals, and the private patio with BBQ grill offers delightful al fresco dining. After a day of adventure, relax in your private hot tub or explore the nearby trails.",
      "Our townhome comfortably accommodates 6 guests, with a king bed in the master suite, a queen bed in the second bedroom, and two singles in the third. Additional amenities include EV charging in the garage (note: adaptor not included). For your comfort and convenience, please note that we do not allow pets, smoking, or parties.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 9,
      alt: "Blackcomb Pines living area",
    },
    paragraphs: [
      "This end-unit townhome sits in Blackcomb, with a peaceful setting and walking distance to the main Whistler Village and ski lifts. Lost Lake trails are nearby for summer biking and hiking, and winter snowshoe and cross-country routes.",
      "Ski-in access is available when snow conditions permit, with a free shuttle option to the slopes as well.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Sleeps 6 guests.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Master Suite",
            details: "King bed.",
          },
          {
            name: "Second Bedroom",
            details: "Queen bed.",
          },
          {
            name: "Third Bedroom",
            details: "Two single beds.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests enjoy the full townhome, including the private patio, hot tub, and garage with EV charging.",
    ],
    notes: [
      "No pets allowed.",
      "No smoking.",
      "No party crowds.",
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00012532",
      "Provincial registration number: PM436933324",
    ],
  },
};

export default luxeCozyWriteup;
