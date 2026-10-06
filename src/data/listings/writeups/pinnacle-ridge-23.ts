import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const pinnacleRidge23Writeup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Location, location, location. This renovated 6-bedroom Blackcomb retreat gives you the best of Whistler: ski access about 2 minutes from the door, an 8-minute walk to Upper Village and 13 minutes to Whistler Village. After the mountain, come home to your private hot tub, fireplace, chef's kitchen and room for the whole group. In summer, walk everywhere, relax on 2 decks and enjoy the forest setting.",
    ],
    highlights: [
      "Ski access about 2 minutes from the door",
      "8-minute walk to Upper Village",
      "13 minutes to Whistler Village",
      "Private hot tub",
      "6 bedrooms, groups up to 14",
      "Chef's kitchen, dining for 10 plus 4 at the island",
      "Central A/C and 2 decks",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Pinnacle Ridge 23 living area",
    },
    paragraphs: [
      "Welcome to Pinnacle Ridge 23, a beautifully renovated 2,460 sq. ft. mountain home spread across 3 levels in one of Blackcomb's best locations. You are approximately 2 minutes from the Yellow Brick Road ski trail, an 8-minute walk from Upper Village and 13 minutes from Whistler's Main Village.",
      "The heart of the home is the bright, vaulted living area with comfortable leather seating, a gas fireplace and a 70-inch 4K TV with an upgraded sound system. It is the perfect space for the whole group to relax after a day on the mountain.",
      "The fully equipped chef's kitchen includes a large island, 2 refrigerators and everything needed to cook for a large family or group. The dining table seats 10, with seating for another 4 guests at the kitchen island.",
      "After skiing, leave your equipment by the entrance, place your boots and gloves on the dryer and head straight to the private outdoor hot tub. The home also offers 2 decks, a BBQ, central A/C, fast Wi-Fi, laundry and a dedicated workspace.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 36,
      alt: "Pinnacle Ridge 23 snowy Whistler setting",
    },
    paragraphs: [
      "In summer, leave the car parked and walk to Upper Village, Whistler Village, restaurants, shopping, trails and mountain activities. In winter, enjoy the rare combination of village walkability and ski access to and from the home when snow conditions permit.",
      "Ski access depends on snowfall and mountain operations. It is normally available during the main winter season but cannot be guaranteed during early or late-season stays.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "6 bedrooms plus a bonus sleeping den, for up to 14 guests across 10 beds.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Bedroom 1",
            details: "King bed with ensuite bathroom.",
          },
          {
            name: "Bedroom 2",
            details: "King bed with ensuite bathroom.",
          },
          {
            name: "Bedroom 3",
            details: "King bed.",
          },
          {
            name: "Bedroom 4",
            details: "King bed.",
          },
          {
            name: "Bedroom 5",
            details: "2 twin beds.",
          },
          {
            name: "Bedroom 6",
            details: "2 double bunk beds.",
          },
          {
            name: "Bonus sleeping den",
            details:
              "2 twin beds. The bonus den is a practical additional sleeping area rather than a true bedroom. It is best suited to children or overflow sleeping within the home's approved occupancy.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire townhome, including the private hot tub, 2 decks, BBQ, kitchen, laundry facilities and dedicated workspace.",
      "There is parking for 1 vehicle directly in the driveway. Additional unreserved guest parking may be available within the complex, subject to availability.",
      "Self check-in is available through a keypad.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "The bonus den is an additional sleeping area, not a fully enclosed bedroom. It is best suited to children or guests who are comfortable with a less private sleeping space.",
      "This is a peaceful residential community. Parties, events, smoking and pets are not permitted. Quiet hours must be respected between 10:00 p.m. and 8:00 a.m.",
      "The primary renter must be at least 30 years old unless travelling as part of a family group.",
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00014440",
      "Provincial registration number: H789417644",
    ],
  },
};

export default pinnacleRidge23Writeup;
