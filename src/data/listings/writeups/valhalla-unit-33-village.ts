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
      "Private balcony hot tub",
      "Village North, walk to the slopes",
      "3 bedrooms, 3 bathrooms, sleeps 8",
      "Gas fireplace",
      "Free underground parking",
      "Keyless self check-in",
      "BBQ and private balcony",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 7,
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
      photoIndex: 16,
      alt: "Valhalla Peaks hot tub",
    },
    paragraphs: [
      "Valhalla Peaks is located in Whistler Village itself, in the convenient Village North area. You are staying within the Village, rather than in an outlying neighbourhood that requires a drive to reach the ski hill and restaurants. Village North is one of the most convenient areas for experiencing Whistler on foot, with immediate access to the energy of the Village while sitting in a quieter residential complex away from the busiest nightlife.",
      "The Whistler Village Gondola is approximately a 12-minute walk through the pedestrian Village. Head out for a day on Whistler Blackcomb, with cafés, breakfast stops and ski rental shops along the way. Allow extra time when walking in ski boots or snowy conditions. From Valhalla, simply join the pedestrian Village Stroll. Restaurants, boutiques, cafés, après-ski spots, Olympic Plaza and year-round events are all nearby, with the Whistler and Blackcomb gondolas easily accessible through the Village.",
      "At the end of the ski day, walk back through the Village to your townhouse. Stop for après, pick up something for dinner or head straight home to the fireplace and private hot tub. There is no need to organise a car journey just to get between your home and the ski hill.",
      "A complimentary Village shuttle also stops nearby, giving you another convenient option when carrying equipment or travelling with younger skiers.",
      "Being able to walk to and from the mountain makes a real difference to a Whistler holiday. Early risers can head to the lifts while others enjoy a slower morning, and anyone finishing their ski day sooner can make their own way home. Your group does not have to work around one driver's schedule.",
      "Directly across the street is Marketplace, home to Fresh St. Market, Whistler's largest full-service grocery store, along with cafés, shops, the liquor store and other everyday essentials. It makes everything from stocking the kitchen for a family stay to grabbing breakfast or last-minute supplies incredibly easy. Olympic Plaza and the Village Stroll are just steps away.",
      "Enjoy the atmosphere of a proper ski town, from breakfast before the lifts to dinner after a day on the mountain. You can leave the car parked and experience the Village on foot.",
      "Despite this central location, Valhalla has a quieter residential setting than accommodation directly above the busiest Village nightlife. Enjoy Whistler's energy, then return to your own relaxing retreat.",
      "In summer, the surrounding pedestrian paths and Valley Trail connect into Whistler's extensive network of walking and biking routes, making Valhalla just as convenient for summer adventures as it is for skiing. It is a particularly good location for guests who want to park when they arrive and spend the rest of their vacation exploring Whistler on foot.",
      "Walk to the ski hill, walk home through the Village, and finish the day in your own private hot tub. That is the Valhalla Peaks experience.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Maximum occupancy is 8 guests.",
    floors: [
      {
        label: "Townhouse",
        note: "A short flight of stairs leads to the main living area, with the bedrooms located one level above.",
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
      "One reserved underground parking stall is included, plus access to one visitor parking space. A lockable ski and bike storage room is located at entry level, helping keep equipment secure and out of the main living areas. Collect your gear before walking to the ski hill, then store it when you return. Two whisper-quiet portable A/C units are available from May 15 through October 15, one in the living room and one in Bedroom 2. One shorter flight of stairs is required to enter the home. Very common in Whistler townhomes. Please consider this when booking for anyone with mobility limitations.",
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have exclusive access to the entire 3-bedroom townhouse throughout their stay. The home is completely private for your group, including all bedrooms and bathrooms, the open living and dining areas, fully equipped kitchen, in-suite washer and dryer, private balcony, BBQ and your own private hot tub overlooking the surrounding mountains.",
      "One reserved underground parking stall is included, along with access to one visitor parking space. There is also a private, lockable ski and bike storage room at the entry level, making it easy to safely store equipment without bringing it into the main living areas. Keyless entry allows for a simple and convenient arrival.",
      "A short flight of stairs is required to enter the home, and the townhouse is arranged across multiple levels. The stairs are very manageable for most guests, including many older guests. The benefit of the slightly elevated layout is greater privacy and beautiful views over Whistler Village and the surrounding mountains.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "Fast Wi-Fi and a laptop/work area.",
      "Board games and streaming apps.",
      "In-suite washer and dryer with detergent supplied.",
      "Keyless entry.",
      "24/7 local support from AceHost Whistler.",
      "Staircase: Please note that this chalet-style townhome is arranged over multiple levels. A short flight of stairs leads to the main living area, with the bedrooms located one level above. The stairs are manageable and convenient for all guests, including many elderly/older guests, but we like to mention them upfront for anyone with significant mobility limitations. A major benefit of the elevated layout is the beautiful outlook over Whistler Village and the surrounding mountains. For most guests, the stairs are simply a common and manageable feature of Whistler's chalet-style townhomes.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00014368",
      "Provincial registration number: PM535952713",
    ],
  },
};

export default valhallaWriteup;
