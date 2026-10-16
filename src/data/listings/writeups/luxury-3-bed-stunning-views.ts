import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const marquisePenthouseWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Marquise 507, a spacious 2-bedroom, 3-bed penthouse-style retreat on Blackcomb Mountain with excellent ski-in/ski-out access just across the street. Step outside, reach the ski trail within moments, and ski down to the Blackcomb Gondola in minutes. After skiing, enjoy mountain views, a fireplace, full kitchen, A/C, free underground parking, plus access to the heated outdoor pool, glass-domed hot tub, sauna and gym.",
    ],
    highlights: [
      "Ski trail just across the street",
      "1 to 2-minute walk to ski access",
      "Fairmont and mountain views",
      "1,100 sq. ft. layout",
      "Glass-domed hot tub, pool, sauna and gym",
      "Free underground parking",
      "2 bedrooms, 3 beds, sleeps 6",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 7,
      alt: "Marquise Penthouse interior",
    },
    paragraphs: [
      "Welcome to Marquise 507, a spacious 1,100 sq. ft. penthouse-style retreat in one of Blackcomb's most convenient ski locations. The home combines beautiful mountain views, resort-style amenities and excellent ski access with considerably more space than a typical Whistler condo.",
      "The main living area features a gas fireplace, comfortable seating and beautiful views toward the Fairmont Chateau Whistler and surrounding mountains. A Queen sleeper sofa provides additional accommodation for up to two guests. Cable TV, Netflix and fast Wi-Fi make the space equally comfortable for relaxed evenings at home.",
      "The fully equipped kitchen includes a stove, oven, microwave, refrigerator, coffee maker and cooking essentials. The dining area provides plenty of room for meals after a day on the mountain.",
      "A newer air-conditioning unit is located in the main living area and provides cooling throughout the condo during warmer summer days. A/C is available in the summer months, May 1 to November 1.",
      "The suite includes a private washer and dryer, available for complimentary guest use, so you can do laundry without leaving the unit. For additional drying capacity, a shared coin-operated dryer is also available in the building.",
      "Guests have access to The Marquise's resort-style amenities, including a glass-domed hot tub, heated outdoor pool, sauna, fitness centre, and secure ski, snowboard and bike storage. After skiing back to the building, head downstairs for a hot tub or sauna before dinner.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 12,
      alt: "Marquise Penthouse bedroom",
    },
    paragraphs: [
      "For guests coming to Whistler to ski, The Marquise is exceptionally well positioned. The Blackcomb ski trail is located just across the street from the building, approximately a one to two-minute walk away. Grab your equipment from the secure ski storage, step outside and reach the ski access within moments. From there, ski downhill toward the Blackcomb Gondola in only a few minutes and begin your day on the mountain. At the end of your ski day, return via Blackcomb and head back across the street to The Marquise. There is no need to drive to the mountain, search for resort parking or carry your equipment all the way through Whistler Village.",
      "The Marquise sits on Blackcomb Mountain immediately above Upper Village. Upper Village, the Blackcomb Gondola, Fairmont Chateau Whistler, Four Seasons, restaurants, cafes and après-ski are all nearby. Whistler Village can also be reached comfortably on foot or by complimentary local shuttle. The combination of ski access, a quieter mountainside setting and easy Village access makes The Marquise one of Blackcomb's strongest condo locations for a ski holiday.",
      "The Marquise is located on Blackcomb Mountain in the Benchlands, immediately above Upper Village. The ski trail is just across the street from the building, making it exceptionally easy to begin and finish a ski day without using your vehicle. It is a fantastic location for guests who want genuine mountain convenience without staying directly in the busiest part of the Village.",
      "One guaranteed underground parking space is included free with every stay. Additional underground parking is available for approximately $25 CAD per vehicle, per day. The underground parkade has a height clearance of approximately 6'6\".",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Up to 6 guests across 2 bedrooms and 3 beds, with two full bathrooms.",
    floors: [
      {
        label: "Penthouse",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary bedroom",
            details:
              "King bed, private patio access with beautiful views, vanity area and direct access to a full bathroom.",
          },
          {
            name: "Bedroom 2",
            details: "Queen bed with private ensuite bathroom and bathtub.",
          },
          {
            name: "Living room",
            details: "Queen pullout sofa for additional guests.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire condo throughout their stay, including both bedrooms, both bathrooms, the kitchen, living and dining spaces and private patio.",
      "You will also have access to The Marquise's shared heated outdoor pool, glass-domed hot tub, sauna, fitness centre and secure ski, snowboard and bike storage.",
      "One guaranteed underground parking space is included free of charge. Additional vehicles can be parked underground for $25 CAD per vehicle, per day.",
      "Self check-in is available via smart lock, making arrival simple and flexible.",
    ],
    notes: [
      "The condo includes one guaranteed free underground parking spot. The underground parkade has a height clearance of approximately 6'6\". Additional parking may be available in the building for an additional nightly fee, subject to availability.",
      "The pool, hot tub, sauna, fitness room, ski storage, and other building amenities are shared with other guests and residents of The Marquise.",
      "The ski trail is located just across the street from the building, approximately a one to two-minute walk from the entrance.",
      "The home includes A/C, heating, a gas fireplace, fast Wi-Fi, and a fully equipped kitchen. The living room includes a Queen sofa bed for additional sleeping space.",
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00011211",
      "Provincial registration number: PM910753876",
    ],
  },
};

export default marquisePenthouseWriteup;
