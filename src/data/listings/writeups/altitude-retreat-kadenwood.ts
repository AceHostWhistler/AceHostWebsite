import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  KADENWOOD_LOCATION_PARAGRAPHS,
} from "./shared";

const altitudeRetreatWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Altitude Retreat is situated in the most prestigious ski-in ski-out neighbourhood in Whistler. Located just a stone's throw from the exclusive Kadenwood residents-only gondola, this property is the perfect location for your Whistler vacation.",
      "This well equipped property features everything you need for an indulgent stay. Enjoy a workout in the fully spec'd gym, then take a dip in the hot tub. Secluded by trees, it doesn't get more private than this.",
    ],
    highlights: [
      "~10,000 sq. ft. interior",
      "7 bedrooms, 5.5 baths",
      "Private butler included",
      "Library and in-home gym",
      "Sauna and ski mud room",
      "560 sq. ft. deck and balcony",
      "Private Kadenwood Gondola",
    ],
  },
  walkthrough: {
    reelId: "DSoAIEhEkPq",
    title: "Altitude Retreat walkthrough",
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 2,
      alt: "Altitude Retreat interior",
    },
    paragraphs: [
      "This magnificent 10,000 sq. ft. interior has 7 bedrooms and 5.5 bathrooms. This one-of-a-kind hideaway has features such as a library, luxurious in-home gym, sauna, and ski and board mud room.",
      "560 sq. ft. of deck and balcony space and 800 sq. ft. of outdoor living space with your own private forest and stunning garden setting. This high end residence has a fully equipped gym, a soothing hot tub, and is surrounded by trees for maximum solitude.",
      "Experience the luxury and beauty of Altitude Retreat through the walkthrough video: stunning mountain views, spacious interiors, and world-class amenities from the gym to the private hot tub surrounded by nature.",
      "Whether you're planning a family vacation, corporate retreat, or special celebration, Altitude Retreat provides direct ski-in/ski-out access through the private Kadenwood gondola and unparalleled privacy in one of Whistler's most exclusive communities.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Altitude Retreat in Kadenwood",
    },
    paragraphs: [
      "Extraordinary retreat on a private park-like setting with fantastic ski-in/ski-out access to Whistler Mountain via your private residents-only Kadenwood gondola.",
      "Take the five-minute gondola ride, a five-minute drive, or a quick ski ride down to amenities in Creekside Village. Enjoy Whistler's best restaurants and shops: Rockit Coffee and BReD, Red Door Bistro, Rimrock Cafe, Cure Lounge, Creekbread, Dusty's, and Mekong fine-dining Thai with patio. Shop at 122 West and Abigail's. The Co-op gas station convenience store is open until 10 pm. Creekside Market is within walking distance.",
      ...KADENWOOD_LOCATION_PARAGRAPHS.slice(0, 2),
      "The property's exclusive location in Kadenwood offers the perfect balance of seclusion and convenience, with easy access to Whistler's world-class amenities in winter and summer.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Sleeps 18 across 7 bedrooms (10 + 4 + 4).",
    floors: [
      {
        label: "Upper Level",
        note: "Sleeps 10.",
        bedrooms: [
          {
            name: "Master bedroom",
            details:
              "King bed with ensuite bathroom (large walk-in shower and stand-alone bathtub), 12' x 15' walk-in closet. Large TV and fireplace with stunning mountain views.",
          },
          {
            name: "Bunk house (via master)",
            details:
              "Behind the master bedroom: three queen beds, large smart TV, spacious games table with balcony. Access through the master bedroom; shares the spacious master bathroom.",
          },
          {
            name: "Additional upper bedroom",
            details:
              "King bed with ensuite bathroom at the other end of the upper floor corridor.",
          },
        ],
      },
      {
        label: "Main Level",
        note: "Sleeps 4. Main floor garage is currently not in service.",
        bedrooms: [
          {
            name: "King bedroom with balcony",
            details:
              "King bed with private balcony, office fireplace, large view windows and bookshelves.",
          },
          {
            name: "Queen bedroom",
            details:
              "Queen bed with closet. Main floor bedrooms can use the powder room plus the shower next to the gym (gym on lower level) if needed.",
          },
        ],
      },
      {
        label: "Lower Level",
        note: "Sleeps 4. Equipped gym and sauna on this level.",
        bedrooms: [
          {
            name: "Lower master bedroom 1",
            details: "King bed with ensuite bathroom.",
          },
          {
            name: "Lower master bedroom 2",
            details: "King bed with ensuite bathroom.",
          },
        ],
      },
    ],
    footnote:
      "Optional: an additional twin bed can be rented and arranged in the office for a private sleeping room for one guest.",
  },
  service: {
    title: "Service at Altitude Retreat",
    lead: ["Private butler included with your stay."],
    body: [
      "In addition to serving breakfast, lunch, and dinner, the butler is responsible for all food and drink service throughout the day. To create the perfect ambiance, they will set up the hot tub, light the fire, and adjust the music and household functions. Get your daily dose of caffeine from your own personal barista. Overall, the butler is there to make your stay as smooth and comfortable as possible.",
    ],
  },
  stay: acehostStay({
    included: [
      "Private butler",
      ...ACEHOST_INCLUDED_SKI,
    ],
  }),
  other: {
    title: "Other details",
    notes: [
      "Included when booking this property, we will help you with VIP experiences such as coordinating chefs, chalet hosts and servers, helicopter experiences, transportation to and from the airport, snowmobiling, restaurant reservations and recommendations, hiking recommendations, and more.",
      "Our dedicated concierge team can arrange private chefs, in-home spa treatments, and personalized itinerary planning for an exceptional Whistler stay.",
      "Main floor level garage is currently not in service.",
    ],
  },
};

export default altitudeRetreatWriteup;
