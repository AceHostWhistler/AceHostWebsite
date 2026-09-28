import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const leChamoisWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Le Chamois, one of Whistler's most sought-after ski locations at the base of Blackcomb Mountain. The Blackcomb Gondola and ski-out are only about a 2-minute walk away, making mountain days effortless. This contemporary 1-bedroom, 2-bath retreat features a king suite, flexible Murphy bedroom and free underground parking.",
      "After skiing, enjoy the outdoor pool, hot tub and gym, with the Fairmont, Upper Village dining and Whistler Village all within easy walking distance.",
    ],
    highlights: [
      "2 min to Blackcomb Gondola",
      "Murphy bedroom",
      "King primary suite",
      "Outdoor pool and hot tub",
      "Free underground parking",
      "Personal ski locker",
      "Upper Village base",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 2,
      alt: "Le Chamois interior",
    },
    paragraphs: [
      "Welcome to your Blackcomb mountain base at Le Chamois. Set directly in Upper Village at the foot of Blackcomb Mountain, this contemporary 638 sq. ft. retreat is designed for guests who want skiing, restaurants and resort amenities right outside the door.",
      "The living area offers a comfortable place to relax after skiing, with the flexible second Murphy bedroom folding away when not in use to create additional daytime living space.",
      "The kitchen includes a stovetop, refrigerator, air fryer and combination microwave/convection oven with roasting and baking functions, providing everything needed for breakfast, après-ski snacks or meals at home.",
    ],
  },
  location: {
    title: "Location & Village Access",
    imageSide: "left",
    image: {
      photoIndex: 2,
      alt: "Le Chamois at the base of Blackcomb",
    },
    paragraphs: [
      "For ski access, Le Chamois is exceptionally difficult to beat. The Blackcomb Gondola is only about a 2-minute walk from the building, putting Blackcomb Mountain practically outside your front door. Ski-out access is also approximately two minutes away, making it incredibly easy to get onto the mountain in the morning and return home after your final run.",
      "There is no need to load skis into a vehicle, search for parking at the mountain or commute from another neighbourhood. Grab your gear, walk outside and be at the lifts within minutes. A personal ski locker is included with your stay, so equipment can remain securely stored and ready for the next mountain day.",
      "Guests have access to Le Chamois' outdoor pool, hot tub and fitness centre. Le Chamois sits directly at the base of Blackcomb Mountain in the heart of Upper Village, beside the Fairmont Chateau Whistler and only moments from the Blackcomb Gondola. Restaurants, cafés, ski shops and après-ski are all immediately nearby, while the main Whistler Village is also an easy walk away.",
      "In summer, Lost Lake, biking and hiking trails, golf and Blackcomb's alpine adventures are also easily accessible.",
      "One complimentary underground parking space is included with your stay. Because skiing, dining and both Upper Village and Whistler Village are accessible on foot, many guests can park when they arrive and use their vehicle very little during the stay.",
      "A secured bike room is also available, making Le Chamois an excellent base for Whistler's summer biking season. Laundry facilities are shared with the hotel and available for approximately $2.50 per load.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Up to 4 guests across two sleeping areas and two full bathrooms.",
    floors: [
      {
        label: "Condo",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary bedroom",
            details:
              "Stylish king bed, large Smart TV and dedicated workspace. The private ensuite features a spacious walk-in shower, new fixtures and a Toto Japanese toilet.",
          },
          {
            name: "Bedroom 2 (living room)",
            details:
              "Double Murphy bed that folds conveniently into the wall when not in use, allowing the room to function as additional living space during the day. A second full bathroom is located directly off the main living area and includes a bathtub and shower.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire apartment for the duration of their stay.",
      "You will also have access to Le Chamois' outdoor pool, hot tub, fitness centre, personal ski locker, secure bike room and underground parking garage.",
      "One complimentary underground parking space is included.",
      "The home uses self check-in, with access instructions provided prior to arrival.",
    ],
    notes: [ACEHOST_VIP_CONCIERGE_NOTE, ACEHOST_SKI_PASS_NOTE, ACEHOST_REACH_OUT_NOTE],
    registration: [
      "Municipal registration number: 00013237",
      "Provincial registration number: PM775035019",
    ],
  },
};

export default leChamoisWriteup;
