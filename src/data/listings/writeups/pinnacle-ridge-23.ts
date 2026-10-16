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
      "Stay at Pinnacle Ridge 23, a beautifully renovated 6-bedroom mountain home on Blackcomb with ski access approximately 2 minutes from the door and a private outdoor hot tub. Enjoy vaulted ceilings, a gas fireplace, chef's kitchen, 2 decks, BBQ and central A/C, all just an 8-minute walk from Upper Village and approximately 13 minutes from Whistler Village.",
      "Sleeps up to 14 guests across 6 bedrooms, or up to 16 including a bonus sleeping den, with free on-site parking for multiple vehicles.",
    ],
    highlights: [
      "Ski access about 2 minutes from the door",
      "Yellow Brick Road to Blackcomb Gondola",
      "8-minute walk to Upper Village",
      "13 minutes to Whistler Village",
      "Private hot tub",
      "6 bedrooms plus bonus den, up to 16",
      "Chef's kitchen, dining for 13+ plus 4 at the island",
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
      "Pinnacle Ridge 23 is a beautifully renovated 2,460 sq. ft. mountain home spread across 3 levels on Blackcomb Mountain. The home combines a quiet mountainside setting with excellent ski access and easy walking access to Upper Village and Whistler Village.",
      "The bright, vaulted living area offers comfortable seating, a gas fireplace and a 70-inch 4K TV with upgraded sound system. Large windows bring in plenty of natural light and create a warm mountain atmosphere for relaxing after a day in Whistler. The home also features 2 outdoor decks, a BBQ, central A/C, fast Wi-Fi, private laundry and a dedicated workspace.",
      "The fully equipped chef's kitchen includes a large island, 2 refrigerators and everything needed to prepare meals for a family or group. The main dining table seats 13 or more guests, with seating for another 4 at the kitchen island.",
      "After skiing or exploring Whistler, relax in your private outdoor hot tub surrounded by the peaceful Blackcomb setting. A boot and glove dryer is provided at the home for added convenience.",
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
      "Pinnacle Ridge is located slopeside on Blackcomb Mountain in Whistler's Upper Benchlands, one of the resort's most desirable locations for guests who want privacy, ski access and easy access to both villages. From the home, it is approximately a 2-minute walk to the Yellow Brick Road ski trail, which leads down toward the Blackcomb Gondola and Magic Chair. When snow conditions allow, guests can also ski back toward the Pinnacle Ridge complex. Ski access depends on sufficient snow coverage and mountain operations.",
      "Upper Village is approximately an 8-minute walk away and offers access to the Blackcomb Gondola, restaurants, cafés, shops and the Upper Village après scene. Whistler's Main Village is approximately 13 minutes away on foot or 2 to 3 minutes by car. For guests walking to and from the Village, the ski-trail route is generally preferable to Glacier Drive, which is a winding road without a sidewalk.",
      "In summer, you are within walking distance of both villages, restaurants, shopping, trails and Whistler's many outdoor activities.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary:
      "Pinnacle Ridge 23 offers 6 bedrooms plus a bonus sleeping den, sleeping up to 14 guests, or up to 16 including the den.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Bedroom 1",
            details: "King bed with private ensuite bathroom. Sleeps 2.",
          },
          {
            name: "Bedroom 2",
            details: "King bed with private ensuite bathroom. Sleeps 2.",
          },
          {
            name: "Bedroom 3",
            details: "Bunk room with 2 bunk beds. Sleeps 4.",
          },
          {
            name: "Bedroom 4",
            details: "King bed. Sleeps 2.",
          },
          {
            name: "Bedroom 5",
            details: "2 Twin beds. Sleeps 2.",
          },
          {
            name: "Bedroom 6",
            details: "King bed. Sleeps 2.",
          },
          {
            name: "Bonus sleeping den",
            details:
              "2 Twin beds. Sleeps 2. This is an additional sleeping area rather than a fully enclosed bedroom and is best suited to children or guests comfortable with a little less privacy.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Pinnacle Ridge 23 is conveniently located for both skiing and accessing Whistler's villages. In winter, ski access is approximately 2 minutes from the home via the Yellow Brick Road trail. Upper Village is approximately an 8-minute walk away, and Whistler Village is approximately a 13-minute walk.",
      "Guests have private access to the entire home, including the private hot tub, 2 decks, BBQ, kitchen, laundry facilities and dedicated workspace. Self check-in is available with a smart lock.",
      "Free parking is available for guests travelling with vehicles. There is space for 1 vehicle directly in front of the home, plus additional unreserved visitor parking throughout the Pinnacle Ridge complex. Additional visitor spaces are shared and cannot be guaranteed. There is no guest garage access, as the former garage has been converted into interior living space.",
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
