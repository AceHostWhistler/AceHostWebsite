import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const tyndallStoneWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to this freshly renovated 2.5-bedroom retreat in the heart of Whistler Village, overlooking Olympic Plaza and the surrounding mountains. Sleeping up to 6 guests, the home features two bathrooms, A/C, a full kitchen, in-suite laundry and a cozy living area.",
      "Step outside to restaurants, cafés, shops and après-ski, with Fresh St. Market nearby and the gondolas an easy walk or free shuttle away. Guests also enjoy a shared pool and hot tub, plus one guaranteed underground parking space.",
    ],
    highlights: [
      "Olympic Plaza views",
      "Freshly renovated",
      "Shared pool and hot tub",
      "A/C",
      "In-suite laundry",
      "Guaranteed parking",
      "Tyndall Stone Lodge",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 3,
      alt: "Tyndall Stone Lodge interior",
    },
    paragraphs: [
      "Welcome to your home in the heart of Whistler Village. Recently renovated and overlooking Olympic Plaza and the surrounding mountains, this bright 2.5-bedroom retreat combines one of Whistler's best locations with a comfortable layout for families, couples and smaller groups.",
      "The main living area is open and inviting, with large windows framing the Village and mountain surroundings. Relax together after skiing, enjoy a movie on Netflix, prepare dinner in the fully equipped kitchen or simply watch the activity of Olympic Plaza from above.",
      "The kitchen is fully stocked for meals at home, while in-suite laundry makes longer stays especially convenient. A/C provides additional comfort during Whistler's warmer summer months.",
    ],
  },
  location: {
    title: "Location & Village Access",
    imageSide: "left",
    image: {
      photoIndex: 4,
      alt: "Tyndall Stone Lodge bedroom",
    },
    paragraphs: [
      "Location is one of the biggest reasons to stay here. Tyndall Stone Lodge sits directly in Whistler Village North beside Olympic Plaza, putting restaurants, cafés, shopping, groceries, après-ski and year-round Village events just outside your door.",
      "The Whistler and Blackcomb gondolas are within easy walking distance, or guests can use the complimentary Village shuttle that stops nearby for an effortless ride to the base of the mountains.",
      "Fresh St. Market, Whistler's largest full-service grocery store, is only moments away, making it exceptionally easy to stock the kitchen or grab anything you need during your stay. Once you arrive, most guests can park the car and explore Whistler almost entirely on foot.",
      "Guests have access to Tyndall Stone Lodge's shared outdoor pool and hot tub. After a day skiing, biking or hiking, head downstairs for a soak before walking out into the Village for dinner or drinks.",
      "One designated underground parking space is reserved and guaranteed with every stay. For a property this central in Whistler Village, having guaranteed secure parking is an especially valuable convenience. Limited visitor parking may also be available on a first-come basis.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Comfortably accommodates up to 6 guests across 4 beds, with two full bathrooms.",
    floors: [
      {
        label: "Condo",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary bedroom",
            details: "Queen bed with views toward Whistler Olympic Plaza.",
          },
          {
            name: "Bedroom 2",
            details:
              "Two single beds, ideal for children, friends or individual sleepers.",
          },
          {
            name: "Additional sleeping area",
            details: "Queen pullout sofa in the main living room.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire home throughout their stay, including both bedrooms, the living and dining areas, kitchen and in-suite laundry.",
      "You will also have access to Tyndall Stone Lodge's shared outdoor pool and hot tub, secure ski and bike storage, and one guaranteed underground parking space.",
      "The home uses keyless entry, with access instructions provided before arrival.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "A/C, in-suite washer and dryer, fully equipped kitchen, Netflix, high-speed Wi-Fi, shared pool and hot tub, guaranteed underground parking, ski and snowboard storage, bike storage and keyless self check-in.",
      "Bedside table alarm clocks have USB ports, as do the backs of the sofa tables and under the island/bar.",
      "Fireplace typically does not work. It is a building issue that disconnects the gas. If it does work great! We have amazing central heating otherwise.",
      "Netflix is available. A/C works well! Washer and dryer located in the cabinet to the left of the kitchen sink.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00013236",
      "Provincial registration number: PM092723067",
    ],
  },
};

export default tyndallStoneWriteup;
