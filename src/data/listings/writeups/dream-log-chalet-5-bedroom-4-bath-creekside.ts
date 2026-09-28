import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const dreamLogChaletWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "The Dream Log Chalet is a breathtaking 5 bedroom, 4 bath luxury log home located at Whistler Creekside. This beautiful chalet offers over 5000 sq/ft of luxury living, open-concept wood-beam interior spaces, and incredible forest views.",
      "Welcome to this charming traditional log chalet, located in a quiet residential family-friendly neighborhood in Bayshores, Whistler. This home features 5 bedrooms, 4 baths, and a large backyard with a professionally built treehouse, perfect for children and socializing with guests. It's just a quick 4-minute drive to Creekside Village and the newly upgraded Creekside Gondola, which takes you up to the top of Whistler Mountain in record speed.",
    ],
    highlights: [
      "5 bed, 4 bath log chalet",
      "5000+ sq. ft. living space",
      "Professionally built treehouse",
      "Wood-burning fireplace",
      "Front deck BBQ and fire pit",
      "Tesla charger available",
      "4-minute drive to Creekside Gondola",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 0,
      alt: "Dream Log Chalet interior",
    },
    paragraphs: [
      "Free parking in the driveway for up to a maximum of 5 vehicles. Tesla Charger available for your use.",
      "Discounted pricing for long stays: 6-month winter at $17,000 per month; 6-month summer at $11,500 per month; 12-month rental at $13,000 per month.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 0,
      alt: "Dream Log Chalet in Bayshores Creekside",
    },
    paragraphs: [
      "Located in a quiet residential family-friendly neighborhood in Bayshores, Whistler. It's just a quick 4-minute drive to Creekside Village and the newly upgraded Creekside Gondola, which takes you up to the top of Whistler Mountain in record speed.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Five bedrooms across top, main and lower floors.",
    floors: [
      {
        label: "Top Floor",
        bedrooms: [
          {
            name: "Master Bedroom 1",
            details: "King bed and ensuite bathroom with a bathtub.",
          },
        ],
      },
      {
        label: "Main Floor",
        note: "Includes kitchen, living room with pull-out queen sofa bed, indoor wood-burning fireplace, dining room, and front deck with outdoor dining table, BBQ, fire pit and outdoor lounge seating.",
        bedrooms: [
          {
            name: "Bedroom 2",
            details: "Queen Murphy bed.",
          },
          {
            name: "Bedroom 3",
            details:
              "Queen Murphy bed. Bathroom 2 with a shower and bath opposite the kitchen and located next to bedrooms 2 and 3.",
          },
        ],
      },
      {
        label: "Lower Floor",
        bedrooms: [
          {
            name: "Bedroom 4",
            details:
              "Queen bed. The bathroom is located on this floor. Laundry area with a washer and dryer. Garage.",
          },
          {
            name: "Bedroom 5",
            details:
              "Private suite with ensuite bathroom on the ground floor, queen bed and a completely separate entrance to the home. Perfect for privacy for a family member wanting space from the main home, with easy access through the front door to the main house kitchen area.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    notes: [ACEHOST_VIP_CONCIERGE_NOTE, ACEHOST_REACH_OUT_NOTE],
  },
};

export default dreamLogChaletWriteup;
