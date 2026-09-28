import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  ACEHOST_REQUEST_WINTER,
  KADENWOOD_LOCATION_PARAGRAPHS,
} from "./shared";

const twoCedarsWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Two Cedars, a one-of-a-kind architectural masterpiece in Whistler's prestigious Kadenwood neighbourhood. Designed by OpenSpace, this striking modern chalet blends dramatic mountain architecture, warm natural materials, soaring spaces, and refined luxury in a way rarely found in vacation rentals. Sleeps 17 with ski-in/ski-out access and private Kadenwood Gondola service to Creekside.",
      "Winter stays include private butler service from December 1 through April 30.",
    ],
    highlights: [
      "~10,000 sq. ft.",
      "OpenSpace architecture",
      "7 bedrooms, 8.5 baths",
      "Indoor and outdoor hot tubs",
      "Private theatre and gym",
      "True ski-in / ski-out",
      "Winter butler included",
    ],
  },
  walkthrough: {
    reelId: "C0slAOvLmII",
    title: "Two Cedars walkthrough",
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 2,
      alt: "Two Cedars living space",
    },
    paragraphs: [
      "Designed by OpenSpace, Two Cedars is one of Kadenwood's most distinctive private residences, combining bold contemporary architecture with the warmth of a true mountain home.",
      "Across approximately 10,000 sq. ft., soaring ceilings, expansive glass, natural materials, curated artwork and beautifully considered interiors create spaces that feel dramatic yet inviting. Floor-to-ceiling windows frame the surrounding mountains and forest, while generous living and entertaining areas give larger groups the ability to gather without sacrificing privacy.",
      "Seven bedrooms are spread throughout the residence, each with access to a private ensuite bathroom. The home also features a private theatre, fully equipped gym, infrared sauna, indoor hot tub, outdoor hot tub, foosball and multiple spaces for relaxing after a day on the mountain.",
      "True ski-in/ski-out access connects the home directly to Whistler Mountain, while Kadenwood's private gondola provides convenient access to Creekside Village.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Two Cedars in Kadenwood",
    },
    paragraphs: [
      "Two Cedars sits high above Creekside in Kadenwood, one of Whistler's most exclusive ski-in/ski-out neighbourhoods. Guests have access to the private Kadenwood Gondola, connecting the neighbourhood with Creekside Village in approximately five minutes. This gives you the privacy of a secluded mountain estate while keeping the Creekside Gondola, restaurants, cafes and groceries conveniently close, with Whistler Village approximately a 10-minute drive away.",
      ...KADENWOOD_LOCATION_PARAGRAPHS.slice(1),
      "Access the main Whistler Village via car, private driver or shuttle, taxi, ride app, or access Creekside Village via your own private gondola exclusively for Kadenwood residents and guests.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "12 beds total across 7 bedrooms.",
    floors: [
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Master Bedroom 1",
            details:
              "Plush king bed at the end of the top floor corridor for ultimate privacy. Ensuite shower and bathtub and walk-in wardrobe.",
          },
          {
            name: "Bedroom 6",
            details:
              "Queen bed on the top floor at the other end of the corridor from the master, next to Bedroom 7.",
          },
          {
            name: "Bedroom 7",
            details:
              "King bed at the opposite end of the corridor from the master on the top floor. Ensuite bathroom with shower and bath. Very near Bedroom 6.",
          },
        ],
      },
      {
        label: "Mid Level",
        note: "Powder room on the main floor.",
        bedrooms: [
          {
            name: "Bedroom 2",
            details:
              "King bed at the end of the corridor, far from the kitchen and living room (room on the left). Ensuite bathroom with bathtub.",
          },
          {
            name: "Bedroom 3",
            details:
              "Queen bed at the end of the corridor opposite Bedroom 2. Ensuite bathroom with shower.",
          },
        ],
      },
      {
        label: "Lower Level",
        note: "Additional full bathroom with a large walk-in shower on the basement level.",
        bedrooms: [
          {
            name: "Bedroom 4",
            details:
              "Two double beds and two twin beds above. Opposite end of the corridor from the media room. Ensuite bathroom with shower.",
          },
          {
            name: "Bedroom 5",
            details:
              "Opens into Bedroom 4 through a sliding door partition. One double bed and one twin bunk bed. Ensuite shower with bath.",
          },
        ],
      },
    ],
  },
  service: {
    title: "Service at Two Cedars",
    lead: [
      "Daily private butler included December 1 through April 30.",
      "Typically 10 to 12 hours per day during the winter season.",
    ],
    body: [
      "The butler assists with food and beverage service throughout the day, dining setup and cleanup, and helps your group settle in after time on the mountain.",
    ],
  },
  stay: acehostStay({
    included: [
      "Winter private butler (December 1 through April 30)",
      "AceHost VIP concierge",
      "Restaurant reservations and recommendations",
      "Ski lift pass ordering and delivery",
      "Chalet food and beverage stocking upon arrival",
    ],
    request: [
      ...ACEHOST_REQUEST_WINTER,
      "Daily cleaning",
      "Absolutely anything you need: let us know and we will arrange it",
    ],
  }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the residence and its advertised amenities. Please note that the garage is not available for guest use.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "Ben is happy to join you on the first day to show you the ski-in ski-out trail, as well as show you the mountain, if time permits.",
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00013206",
      "Provincial registration number: PM225242595",
    ],
  },
};

export default twoCedarsWriteup;
