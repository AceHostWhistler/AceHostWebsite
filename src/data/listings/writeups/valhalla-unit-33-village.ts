import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const valhallaWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Stay in the centre of main Whistler Village at Valhalla, a rare 3-bedroom townhouse with your own private hot tub. Steps from Marketplace, Olympic Plaza and the Village Stroll, you can walk to coffee shops, the ski hill and lifts, restaurants, groceries and après without a car. Enjoy the space and privacy of a townhouse, a cozy fireplace and free underground parking, all tucked into a quieter Village complex. A standout location for families and friends who want Whistler on their doorstep.",
    ],
    highlights: [
      "Private hot tub",
      "3-bedroom townhouse",
      "Walk to Village gondola",
      "Gas fireplace",
      "Free underground parking",
      "BBQ and private balcony",
      "Sleeps up to 8 guests",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 3,
      alt: "Valhalla Peaks balcony",
    },
    paragraphs: [
      "Welcome to Valhalla Peaks, your three-bedroom townhouse in the heart of Whistler Village, where you can walk to the ski hill in the morning and walk home after a day on the slopes. With your own private hot tub, a cozy gas fireplace and Village restaurants on your doorstep, this is a home made for the full Whistler ski-town experience.",
      "Finding a three-bedroom townhouse with this combination of space, privacy, a private hot tub and a central Village address is something special. Enjoy room to spread out while keeping skiing, dining, shopping and après within walking distance.",
      "The main living area is an inviting place to return to after skiing. Leave your equipment in the entry-level storage room, settle into the comfortable seating and warm up beside the gas fireplace. A 55-inch Smart TV and an open connection to the kitchen and dining area make it easy for everyone to spend time together.",
      "The fully equipped kitchen includes stainless-steel appliances, supplied cookware, and drip and French-press coffee options. Prepare breakfast before walking to the lifts, gather around the dining table with seating for six, or enjoy a relaxed dinner at home.",
      "Step outside to your private balcony, where your own hot tub overlooks the surrounding Whistler peaks. Walk home from the ski hill, change out of your ski gear and enjoy a well-earned soak without sharing the hot tub with other guests. It is equally inviting for morning relaxation or an evening under the stars. A BBQ is also available for meals at home.",
    ],
  },
  location: {
    title: "Location & Village Access",
    imageSide: "left",
    image: {
      photoIndex: 12,
      alt: "Valhalla Peaks hot tub",
    },
    paragraphs: [
      "Valhalla Peaks is located in Whistler Village itself, in the convenient Village North area. You are staying within the Village, rather than in an outlying neighbourhood that requires a drive to reach the ski hill and restaurants.",
      "The Whistler Village Gondola is approximately a 12-minute walk through the pedestrian Village. Head out for a day on Whistler Blackcomb, with cafés, breakfast stops and ski rental shops along the way. Allow extra time when walking in ski boots or snowy conditions.",
      "At the end of the ski day, walk back through the Village to your townhouse. Stop for après, pick up something for dinner or head straight home to the fireplace and private hot tub. There is no need to organise a car journey just to get between your home and the ski hill.",
      "A complimentary Village shuttle also stops nearby, giving you another convenient option when carrying equipment or travelling with younger skiers.",
      "Being able to walk to and from the mountain makes a real difference to a Whistler holiday. Early risers can head to the lifts while others enjoy a slower morning, and anyone finishing their ski day sooner can make their own way home. Your group does not have to work around one driver's schedule.",
      "Marketplace and Fresh St. Market are directly across the street, while Olympic Plaza and the Village Stroll are just steps away. Morning coffee, groceries, shops, restaurants and après-ski are all close by. Enjoy the atmosphere of a proper ski town, from breakfast before the lifts to dinner after a day on the mountain. You can leave the car parked and experience the Village on foot.",
      "Despite this central location, Valhalla has a quieter residential setting than accommodation directly above the busiest Village nightlife. Enjoy Whistler's energy, then return to your own relaxing retreat. In summer, the same walkable location puts Village patios, shopping, walking and biking routes within easy reach.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Maximum occupancy is 8 guests.",
    floors: [
      {
        label: "Townhouse",
        bedrooms: [
          {
            name: "Bedroom 1",
            details:
              "King bed, mountain views and a private ensuite bathroom with a tub/shower.",
          },
          {
            name: "Bedroom 2",
            details:
              "Queen bed, a full bathroom nearby and seasonal portable A/C.",
          },
          {
            name: "Bedroom 3",
            details:
              "Twin-over-twin bunk bed plus an additional single bed, with another full bathroom nearby. A practical setup for children, teens or friends travelling together.",
          },
          {
            name: "Living room",
            details: "Queen pull-out sofa for additional sleeping space.",
          },
        ],
      },
    ],
    footnote:
      "One reserved underground parking stall is included, plus access to one visitor parking space. A lockable ski and bike storage room is located at entry level. Two whisper-quiet portable A/C units are available from May 15 through October 15, one in the living room and one in Bedroom 2. One flight of stairs is required to enter the home. The townhouse also has multiple levels, so please consider this when booking for anyone with mobility limitations.",
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "The entire 3-bedroom home is exclusively yours during your stay, including your private hot tub, so you can enjoy complete privacy.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "Fast Wi-Fi and a laptop/work area.",
      "Board games and streaming apps.",
      "In-suite washer and dryer with detergent supplied.",
      "Fully equipped kitchen with dining table seating for six.",
      "Private hot tub, gas fireplace, BBQ and keyless entry.",
      "24/7 local support from AceHost Whistler.",
      "Staircase: Please note there is one flight of stairs to enter the unit. It is manageable for nearly all guests, including many elderly guests, but we like to be upfront so there are no surprises for anyone with mobility limitations or personal preferences. The benefit is that the home sits slightly elevated, allowing for beautiful scenic views over Whistler Village and the surrounding mountains.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00014368",
      "Provincial registration number: PM535952713",
    ],
  },
};

export default valhallaWriteup;
