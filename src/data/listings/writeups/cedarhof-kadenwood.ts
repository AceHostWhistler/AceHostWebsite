import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_REACH_OUT_NOTE,
  KADENWOOD_LOCATION_PARAGRAPHS,
} from "./shared";

const cedarhofWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to your dream escape in Kadenwood, Whistler's most exclusive ski-in/ski-out enclave. This luxury mountain retreat features a private gondola, heated pool, hot tub, and stunning views over Whistler Peak. With sleek design, cozy elegance, and all-day sun, it's perfect for après-ski lounging, summer barbecues, or wine nights in the tasting room.",
    ],
    highlights: [
      "Heated pool and hot tub",
      "Wine cellar and tasting lounge",
      "True ski-in / ski-out",
      "Private Kadenwood Gondola",
      "Elevator to all levels",
      "Private butler included",
      "7 bedrooms (6 beds)",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 6,
      alt: "Cedarhof interior",
    },
    paragraphs: [
      "Merging contemporary design with world-class craftsmanship, this newly built residence is set against dramatic granite rock and lush old-growth rainforest, with panoramic views of Whistler Peak and the Tantalus Range.",
      "Designed by Brent Murdoch and built by Gavan Construction Ltd, every detail was carefully considered, from the custom Shinnoki Oak millwork and Caesarstone quartz finishes to the chef's kitchen equipped with premium Gaggenau appliances.",
      "Inside, enjoy multiple living spaces including a cozy media room, wine cellar, and tasting lounge. An elevator services all levels, and the oversized double garage includes a ski and boot room perfect for mountain adventures.",
      "Outdoors, unwind on heated patios, soak in the hot tub, or swim in the pool as the sun sets over the peaks. Located in the prestigious Kadenwood neighbourhood, this home offers true ski-in/ski-out convenience with access to a private gondola and close proximity to Creekside and Whistler Village.",
      "Whether you're here to relax, entertain, or explore, this is mountain living at its finest.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Cedarhof in Kadenwood",
    },
    paragraphs: [
      "Sitting almost 1,000 feet above the valley floor, Kadenwood is Whistler's top ski-in/ski-out neighbourhood. Guests have access to the Kadenwood residents and guests only private Kadenwood Gondola. The neighbourhood is located a five-minute drive up a private road, and can also be accessed via the private gondola. A quick ski ride down brings you to amenities in Creekside Village, including the ski gondola.",
      "On your doorstep, you have some of Whistler's best restaurants. Enjoy quality coffee and delicious breads and pastries at Rockit Coffee and BReD. Red Door Bistro, Rimrock Cafe, Cure Lounge, Creekbread, Mekong, and Dusty's are all great options for dining. Shop at 122 West for beautiful home decor and Bask & Co for stylish clothing. The Husky gas station has a 24-hour convenience store. For groceries, the Creekside Market. All can be accessed via the private gondola and a short walk, or a short drive from the home.",
      ...KADENWOOD_LOCATION_PARAGRAPHS.slice(2),
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "7 bedrooms total, 6 beds. Laundry on upper and lower levels (washer, dryer, and folding space in each).",
    floors: [
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Primary Bedroom 1 (A)",
            details:
              "King bed. Open-concept layout with walk-in closet and ensuite bathroom (double sink, stand-up shower, bathtub, private toilet section). TV and blackout blinds.",
          },
          {
            name: "Guest Bedroom 2 (B)",
            details:
              "Queen bed. Ensuite bathroom with stand-up shower and single sink. Desk, TV, closest to elevator, blackout blinds.",
          },
          {
            name: "Guest Bedroom 3 (C)",
            details:
              "Two single beds. Ensuite bathroom with tub, shower, and single sink. Desk, TV, ideal for young children, closest to upper-level laundry, blackout blinds.",
          },
        ],
      },
      {
        label: "Mid Level",
        bedrooms: [
          {
            name: "Gym, Bedroom 4 (D)",
            details:
              "No bed. Treadmill, stationary bike, weight bench, fitness balls, dumbbells (5 to 35 lbs), multiple fitness mats, TV, ensuite bathroom with stand-up shower and single sink, access to wraparound deck.",
          },
          {
            name: "Guest Bedroom 5 (E)",
            details:
              "King bed. Ensuite bathroom with tub, shower, and double sink. TV, access to wraparound deck, blackout blinds.",
          },
        ],
      },
      {
        label: "Lower Level",
        bedrooms: [
          {
            name: "Guest Bedroom 6 (F)",
            details:
              "European-style king bed. Ensuite bathroom with stand-up shower and single sink. TV, closest to wine cellar, blackout blinds.",
          },
          {
            name: "Guest Bedroom 7 (G)",
            details:
              "Queen bed. Ensuite bathroom with stand-up shower and single sink. Double desk, TV, closest to media room and elevator, blackout blinds.",
          },
        ],
      },
    ],
  },
  service: {
    title: "Service at Cedarhof",
    lead: [
      "Private butler included for the whole stay, typically 10 to 12 hours per day.",
    ],
    body: [
      "Enhancing your stay and included in the reservation, a private butler is available to serve meals, fine drinks, and barista-made coffee throughout the day. They'll set the scene, lighting the fireplace, prepping the hot tub, and tuning the music, ensuring your experience is as seamless as it is unforgettable.",
      "We will cater to anything you need. Ben is happy to join you on the hill to show you the mountain as well as the ski-in ski-out trail.",
    ],
  },
  stay: acehostStay({
    included: [
      "Private butler (10 to 12 hours per day)",
      "AceHost VIP concierge",
      "Restaurant reservations and recommendations",
      "Ski lift pass ordering and delivery",
    ],
    request: [
      "Airport transfers",
      "Private chef (highly recommended)",
      "Chalet food and beverage stocking upon arrival",
      "Private driver",
      "In-home massage",
      "Ski and snowboard rental delivery",
      "Childcare",
      "Ski instructors",
      "Helicopter and snowmobile experiences",
    ],
  }),
  other: {
    title: "Other details",
    notes: [ACEHOST_REACH_OUT_NOTE],
  },
};

export default cedarhofWriteup;
