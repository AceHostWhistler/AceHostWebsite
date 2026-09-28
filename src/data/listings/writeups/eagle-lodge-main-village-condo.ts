import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const eagleLodgeWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Stay directly in the centre of Whistler Village in this renovated 1-bedroom condo at Eagle Lodge. Walk approximately seven minutes to the gondolas, with restaurants, cafes, groceries, shops and Olympic Plaza just outside. The home features a king bedroom, sofa bed, full kitchen, gas fireplace, in-suite laundry, mountain views, a private balcony, seasonal portable air conditioning and one free underground parking space.",
    ],
    highlights: [
      "Whistler Village centre",
      "King bedroom plus sofa bed",
      "Gas fireplace",
      "Private balcony",
      "Free underground parking",
      "In-suite laundry",
      "Seasonal portable A/C",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Eagle Lodge living room with gas fireplace",
    },
    paragraphs: [
      "Eagle Lodge 238 is a renovated, approximately 600-square-foot condo on the second floor. It offers a comfortable single-level layout and a convenient location directly within Whistler's main pedestrian Village. Once you arrive and park, you can walk to the ski lifts, restaurants, cafes, groceries, shops and most of Whistler's central attractions.",
      "The open-plan living room is a comfortable place to relax after skiing, biking or exploring the Village. Settle in beside the gas fireplace, watch a movie on the large television or enjoy the mountain views through the windows. The living room includes a futon-style sofa bed, with sheets, a duvet and pillows provided.",
      "The full kitchen makes it easy to prepare breakfast before heading to the mountain, pack lunches or enjoy a relaxed dinner at home. It includes a refrigerator, stove and oven, microwave, dishwasher, coffee maker, kettle, toaster, cookware, dishes and essential utensils. The dining table seats 4 guests.",
      "Step onto the private balcony for fresh mountain air and surrounding views. It is a lovely place to start the morning with coffee before walking through the Village to the gondolas. A portable air-conditioning unit is available seasonally from May 1 through November 1.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Eagle Lodge in Whistler Village",
    },
    paragraphs: [
      "Eagle Lodge sits in Town Plaza, directly on the Whistler Village Stroll. You are staying within Whistler's main Village, rather than in a surrounding neighbourhood that requires driving or a shuttle into town.",
      "Step outside the building and you are immediately surrounded by restaurants, coffee shops, grocery stores, boutiques and apres spots. Olympic Plaza is only moments away, while the Whistler Village and Excalibur gondolas are approximately a seven-minute walk through the Village.",
      "For ski days, walk from the condo to the gondolas without needing to drive or wait for a shuttle. At the end of the day, walk back through the Village to the gas fireplace and your private balcony.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Sleeps four guests.",
    floors: [
      {
        label: "Condo",
        hideLabel: true,
        bedrooms: [
          {
            name: "Bedroom",
            details:
              "King-size bed, television, bedside tables, reading lamps, a full-size closet and clothing storage, with fresh linens, a duvet and pillows.",
          },
          {
            name: "Living room",
            details:
              "Sofa bed for two additional guests. Sheets, a duvet and pillows are provided.",
          },
          {
            name: "Bathroom",
            details:
              "One full bathroom with a bathtub and shower combination. Towels, shampoo, soap and a hair dryer are provided.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire condo, including the bedroom, bathroom, kitchen, living and dining area, private balcony and in-suite laundry. The reservation includes one complimentary underground parking space. An elevator connects the underground parking area to the residential floors. Detailed check-in, entrance and parking instructions will be sent before arrival.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "The underground parking area can be tight for larger vehicles, so please drive carefully and follow the instructions provided before arrival.",
      "The building's shared hot tub, fitness room and changing rooms are currently closed for renovations until further notice. These facilities are not included as available amenities at this time.",
      "This is a privately managed vacation rental and does not operate like a traditional hotel.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00013149",
      "Provincial registration number: PM895816775",
    ],
  },
};

export default eagleLodgeWriteup;
