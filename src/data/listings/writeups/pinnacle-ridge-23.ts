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
      "Stay in one of Whistler's best ski-in/ski-out neighbourhoods at Pinnacle Ridge 23, a beautifully renovated 6-bedroom mountain home. Pinnacle Ridge sits slopeside on the main ski run, giving your group exceptional access to Blackcomb Mountain without driving, shuttles or hauling equipment through the Village. After skiing, return home to your private outdoor hot tub, gas fireplace, and spacious living areas. Both Upper Village and the main Whistler Village are walking distance.",
    ],
    highlights: [
      "Slopeside on Blackcomb's main ski run",
      "About a 2-minute walk from the door to ski",
      "Ski back into Pinnacle Ridge",
      "8-minute walk to Upper Village",
      "13-minute walk to Whistler Village",
      "Private outdoor hot tub",
      "6 bedrooms plus bonus den",
      "Chef's kitchen, dining for 13+",
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
      "Pinnacle Ridge 23 is a beautifully renovated 2,460 sq. ft. mountain home spread across three levels in one of Blackcomb Mountain's most sought-after locations. What truly separates this property is the skiing. Pinnacle Ridge is one of the best ski-in/ski-out neighbourhoods in Whistler, positioned slopeside directly alongside Blackcomb's main ski run. You are not staying in a neighbourhood where you need to navigate a long feeder trail before reaching home. The skiing is immediately beside Pinnacle Ridge.",
      "For guests coming to Whistler primarily to ski, this location is incredibly difficult to beat. From Pinnacle Ridge 23, it is approximately a two-minute walk from the door to the ski access. From there, simply ski downhill toward the Blackcomb Gondola and Magic Chair to begin your day. At the end of the afternoon, ski back into Pinnacle Ridge from Blackcomb Mountain and return to the home. Leave your skis and equipment at the entrance, place your boots and gloves on the dryer, then head straight for the private outdoor hot tub. There is no need to drive to the mountain, find ski-day parking, load skis into a vehicle or shuttle your group back and forth to the lifts.",
      "The bright, vaulted living room offers comfortable seating, a gas fireplace and a 70-inch 4K TV with upgraded sound system. Large windows bring in plenty of natural light and create a warm mountain atmosphere for relaxing together after skiing. The home also includes fast Wi-Fi, private laundry, a dedicated workspace and central A/C.",
      "The fully equipped chef's kitchen includes a large island, two refrigerators and everything needed to prepare meals for a large family or group. The main dining table accommodates 13 or more guests, with additional seating at the kitchen island, making the space ideal for family breakfasts, après-ski meals and private chef dinners.",
      "After your final run, return home and relax in your private outdoor hot tub surrounded by the peaceful Blackcomb setting. The home also includes two outdoor decks and a BBQ, providing additional space to enjoy Whistler throughout the year.",
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
      "Pinnacle Ridge is located slopeside on Blackcomb Mountain in Whistler's Upper Benchlands, one of the resort's most desirable locations for guests who want privacy, ski access and easy access to both villages. In winter, the Yellow Brick Road ski trail is approximately a 2-minute walk from the home. From there, guests can ski down to the Blackcomb Gondola or Magic Chair. When snow conditions allow, guests can also ski back toward the complex.",
      "Another major advantage of Pinnacle Ridge is that you do not have to choose between skiing and Village access. Upper Village is approximately an 8-minute walk away, with the Blackcomb Gondola, restaurants, cafes, ski shops and après-ski nearby. Whistler Village is approximately a 13-minute walk away, giving you easy access to the Village Stroll, restaurants, shopping and nightlife. Whistler's Main Village is also 2 to 3 minutes by car. This combination of genuine slopeside skiing and Village walkability is one of the reasons Pinnacle Ridge is such a special Whistler location.",
      "In summer, you are within walking distance of both villages, restaurants, shopping, trails and Whistler's many outdoor activities.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary:
      "Pinnacle Ridge 23 offers 6 bedrooms plus a bonus sleeping den. The listing sleeps 14 guests, with the den providing 2 additional twin beds.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Bedroom 1",
            details: "King bed with private ensuite bathroom.",
          },
          {
            name: "Bedroom 2",
            details: "King bed with private ensuite bathroom.",
          },
          {
            name: "Bedroom 3",
            details: "Bunk room with 2 bunk beds.",
          },
          {
            name: "Bedroom 4",
            details: "King bed.",
          },
          {
            name: "Bedroom 5",
            details: "2 Twin beds.",
          },
          {
            name: "Bedroom 6",
            details: "King bed.",
          },
          {
            name: "Bonus sleeping den",
            details:
              "2 Twin beds. This is an additional sleeping area rather than a fully enclosed bedroom and is best suited to children or guests comfortable with a little less privacy.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire home, including all living areas, bedrooms, kitchen, laundry facilities, private hot tub, two decks and BBQ.",
      "For skiing, Pinnacle Ridge 23 is approximately a two-minute walk from the ski access on Blackcomb Mountain. Ski down toward the Blackcomb Gondola in the morning and return to Pinnacle Ridge directly from the mountain at the end of your ski day. A boot and glove dryer is provided at the home for easy equipment storage and drying between ski days.",
      "Free parking is available throughout the Pinnacle Ridge complex. There is space for one vehicle directly in front of the home, along with several shared visitor spaces throughout Pinnacle Ridge. Please note that the original garage has been fully renovated into interior living space and is no longer available for parking or equipment storage.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "The bonus den is an additional sleeping area, not a fully enclosed bedroom. It is best suited to children or guests who are comfortable with a less private sleeping space.",
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
