import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_CORE,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_REQUEST_GENERAL,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const cozyLakefrontWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Stylish top-floor 2 BDR/2BA plus pull out living room bed, located at the prestigious Nicklaus North Golf Course. Recently updated with modern décor, high ceilings, and stunning lake and mountain views from every room.",
      "Step outside to enjoy cross-country skiing, biking, and lakeside walks, or dine at Table 19, known for Whistler's best fondue, happy hour, lunch and dinner. In summer, golf steps from your door, all just a 7-minute drive to Whistler Village!",
    ],
    highlights: [
      "1,000 sq. ft. top floor",
      "Lake and mountain views",
      "200 sq. ft. patio",
      "Nicklaus North location",
      "Free underground parking",
      "Ultra high-speed Wi-Fi",
      "7 min drive to Village",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Cozy Lakefront Condo interior",
    },
    paragraphs: [
      "This 1,000 sq. ft. two-bedroom, two-bathroom condo sits on the top floor at Nicklaus North in Whistler, with a 200 sq. ft. patio for relaxing and taking in the view. Breathtaking lake and mountain outlooks extend from every room, in a safe and secure neighbourhood with amazing outdoor amenities nearby, including hiking, walking, cross-country skiing, mountain biking, lakefront trails, golf and disc golf.",
      "Free underground parking is included, with plenty of free outdoor parking available as well.",
      "The kitchen includes all appliances and plenty of counter space for cooking, with a stove, oven, microwave, dishwasher and cookware needed for a gourmet meal. The patio has enough room to relax and soak up the sun, read a book, or watch golfers on the fairway.",
      "Ultra high-speed fibre optic Wi-Fi (300mbps), one Smart TV in the main room, and a Bose Bluetooth speaker keep evenings connected. In-suite washer and dryer include detergent and fabric softener. Complimentary coffee, tea, salt, pepper, olive oil, soap, shampoo, conditioner and body wash are provided.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "left",
    image: {
      photoIndex: 2,
      alt: "Cozy Lakefront Condo kitchen and living area",
    },
    paragraphs: [
      "Located at Nicklaus North Golf Course, the home is approximately a 7-minute drive to Whistler Village, with Table 19 on site for fondue, happy hour, lunch and dinner.",
      "Step outside for cross-country skiing, biking, lakeside walks and summer golf right at your doorstep.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    floors: [
      {
        label: "Top floor",
        hideLabel: true,
        bedrooms: [
          {
            name: "Master bedroom",
            details:
              "King size, high-end mattress with new linens and a large walk-in closet.",
          },
          {
            name: "Master bathroom",
            details: "Bathtub and shower with plenty of towels.",
          },
          {
            name: "Second bedroom",
            details:
              "Two twin beds with new linens and a large closet for clothing storage.",
          },
          {
            name: "Second bathroom",
            details: "Walk-in shower.",
          },
          {
            name: "Living room",
            details: "Pull-out bed for additional sleeping space.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({
    included: ACEHOST_INCLUDED_CORE,
    request: ACEHOST_REQUEST_GENERAL,
  }),
  other: {
    title: "Other details",
    guestAccess: [
      "Rotating buzzer code to enter the building will be provided.",
      "Rotating front door of unit code will be provided.",
      "Key and fob will be left in the unit on the counter for the remainder of your stay.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "No smoking.",
      "No pets.",
      "No parties.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00013056",
      "Provincial registration number: H874382751",
    ],
  },
};

export default cozyLakefrontWriteup;
