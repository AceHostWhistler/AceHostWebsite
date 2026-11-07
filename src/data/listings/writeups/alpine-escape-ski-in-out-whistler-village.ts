import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const alpineEscapeWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Stay in one of Whistler's rarest locations, perfectly positioned between Whistler Village and the Upper Village, with ski-in/ski-out access and both gondolas less than a 5-minute walk away.",
      "This charming 3-bedroom, 2-bath chalet-style retreat features vaulted ceilings, a wood-burning fireplace, 2 King bedrooms, a bunk room, a spacious dining area and secure underground parking. Ski, dine, shop and enjoy après without needing your car.",
    ],
    highlights: [
      "Ski-in/ski-out, 150 to 200 metres",
      "Both gondolas under 5 minutes",
      "Between Village and Upper Village",
      "3 bedrooms, 2 baths, sleeps 8",
      "2 King bedrooms and a bunk room",
      "Dining table seats 10",
      "Wood-burning fireplace",
      "Secure underground parking",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Gables 11 living room with vaulted ceilings and wood-burning fireplace",
    },
    paragraphs: [
      "Welcome to Gables 11, a charming 3-bedroom, 2-bathroom mountain retreat in one of Whistler's most unique and desirable locations.",
      "Tucked into a peaceful, forested setting beside Fitzsimmons Creek, the home feels quiet and private while placing you directly between Whistler Village and the Upper Village. Both the Whistler and Blackcomb mountain bases are less than a 5-minute walk away, giving your group incredibly convenient access to both gondolas, world-class skiing, biking, restaurants, shopping and après-ski.",
      "This is the rare Whistler location where you do not have to choose between staying close to the mountain and staying close to the Village. You have the best of both, with 2 mountain bases and 2 Village areas almost equally close to your front door.",
      "Spread across approximately 1,283 square feet and 2 levels, the home offers considerably more character, privacy and space than a typical Whistler condo. Vaulted ceilings, warm wood details, comfortable furnishings and a wood-burning fireplace create the classic Whistler chalet atmosphere guests come to the mountains to experience.",
      "The bright, sunken living room is one of the most inviting parts of the home. Impressive vaulted ceilings give the room an open and airy feeling, while the wood-burning fireplace and cozy mountain furnishings make it an ideal gathering place after a day outdoors. Settle in beside the fire, enjoy a movie, plan the following day's adventures or simply relax together after skiing, biking or exploring Whistler. Large windows bring natural light into the home and complement its peaceful alpine setting. The living room opens onto a private balcony, providing another place to enjoy the fresh mountain air.",
      "The open layout connects the living room, dining area and kitchen, allowing everyone to spend time together without feeling crowded. A large dining table with seating for up to 10 creates a wonderful central gathering place for family breakfasts, après-ski snacks, holiday dinners and relaxed evenings at home. It is a rare and valuable feature for a central Whistler property, especially for families and groups who want to enjoy meals together. The fully equipped kitchen provides everything needed to prepare breakfast before the mountain, a quick lunch between activities or a complete dinner at home. Its open connection to the dining and living areas means whoever is cooking can still be part of the conversation.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 13,
      alt: "Private balcony at Gables 11 beside Fitzsimmons Creek",
    },
    paragraphs: [
      "The location is extremely difficult to beat. Ski-in/ski-out access is approximately 150 to 200 metres from the complex, and both the Blackcomb Gondola in the Upper Village and the Whistler Village gondolas are less than 5 minutes away on foot.",
      "In the morning, your group can choose which mountain base to start from without needing to drive, take a shuttle or deal with resort parking. Walk to the lifts with your skis, enjoy a full day on Whistler Blackcomb, and return home within minutes for a warm fire, a relaxed dinner or an evening in the Village.",
      "This location also gives different members of the group the freedom to enjoy Whistler on their own schedule. Early risers can head straight to the lifts, while others can enjoy a slower morning, visit a café or explore the Village. No one needs to organise their day around a single vehicle or driver.",
      "The Gables occupies one of Whistler's most unique locations, nestled beside Fitzsimmons Creek directly between Whistler Village and the Upper Village. The Upper Village is just across the street, placing the Blackcomb Gondola, Fairmont Chateau Whistler, Four Seasons Resort, restaurants, cafés, ski shops and après-ski within minutes of the home.",
      "In the opposite direction, a scenic walk beside Fitzsimmons Creek and across the pedestrian bridge brings you into the main Whistler Village. Skiers Plaza, the Whistler Village Gondola, the Excalibur Gondola, restaurants, shops, nightlife and the famous pedestrian Village Stroll are all less than a 5-minute walk away.",
      "This gives guests access to 2 completely different sides of Whistler. Enjoy the relaxed alpine atmosphere of the Upper Village, then walk into the energy, dining and entertainment of the main Village whenever you choose. Despite being so central, The Gables has a quieter and more natural setting than properties located directly above the busiest sections of the Village Stroll. Return from dinner or après-ski to trees, Fitzsimmons Creek and the cozy feeling of a private mountain home.",
      "The location is just as special during the summer. The Valley Trail runs directly beside The Gables, providing easy walking and biking connections throughout Whistler. Lost Lake, forest trails, beaches, golf, the Whistler Mountain Bike Park, Village patios and summer activities are all easily accessible.",
      "Whether you are visiting for skiing, mountain biking, hiking, golf, dining or simply a relaxing mountain escape, Gables 11 places the best of Whistler at your doorstep.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary:
      "The home comfortably accommodates up to 8 guests across 3 bedrooms and an additional living-room sofa bed.",
    floors: [
      {
        label: "Main Living Level",
        bedrooms: [
          {
            name: "Primary Bedroom",
            details:
              "King bed with a warm, comfortable mountain feel. Having a King bedroom on the main living level is especially convenient for couples who prefer not to use the interior stairs throughout the day.",
          },
          {
            name: "Living room",
            details: "Pullout sofa bed for additional sleeping flexibility.",
          },
        ],
      },
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Bedroom 2",
            details:
              "King bed with a comfortable and private layout, making the home particularly well suited to 2 couples or 2 families travelling together.",
          },
          {
            name: "Bedroom 3",
            details:
              "A cozy bunk room that is ideal for children, teens or friends. The bunk-room layout gives younger guests a fun space of their own while keeping them close to the other upper-level bedroom.",
          },
        ],
      },
    ],
    footnote:
      "There are 2 full bathrooms, with 1 located on each level. This makes the layout practical for families and groups, with convenient bathroom access from all 3 bedrooms and the main living area. Complimentary secure underground parking is included with your stay, allowing you to leave the vehicle protected from snow and weather. Outdoor visitor parking is also available on a first-come, first-served basis. The spacious enclosed entry provides a useful area for skis, boots, jackets and other mountain equipment. Once you arrive, you can park the car, organise your gear and enjoy most of Whistler entirely on foot.",
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire 3-bedroom home throughout their stay, including all bedrooms, both bathrooms, the fully equipped kitchen, living and dining areas, private balcony and in-suite laundry.",
      "Complimentary secure underground parking is included. Outdoor visitor parking is also available on a first-come, first-served basis.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "Please note that a short flight of stairs is required to enter the home. The primary King bedroom is located on the main living level once inside, but because of the entry stairs, we do not recommend the property for guests with significant mobility limitations. For everyone else, this is a very common and manageable feature in Whistler's chalet-style townhouse complexes.",
      ACEHOST_REACH_OUT_NOTE,
    ],
  },
};

export default alpineEscapeWriteup;
