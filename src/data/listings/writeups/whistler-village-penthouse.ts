import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const hearthstonePenthouseWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Experience classic alpine charm in this two-level Whistler Village penthouse, just a short walk from the gondolas. Exposed log beams, high ceilings and a cozy wood-burning fireplace make it a welcoming mountain retreat. Unwind in your private balcony hot tub with mountain views, then stroll to nearby restaurants and shops. With Whistler Grocery Store and BC Liquor directly downstairs, plus complimentary parking, everything you need is close at hand.",
    ],
    highlights: [
      "2-level penthouse",
      "Private balcony hot tub",
      "Steps to gondolas",
      "Wood-burning fireplace",
      "Free parking included",
      "Hearthstone Lodge",
      "Sleeps up to 7 guests",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 2,
      alt: "Hearthstone penthouse interior",
    },
    paragraphs: [
      "Welcome to a true Whistler ski retreat in one of the most convenient locations in the Village. Hearthstone Lodge puts you just moments from the Whistler and Blackcomb gondolas, making morning ski days incredibly easy. Grab your gear, walk out the door and be at the lifts within minutes, then return after your final run to your own private hot tub in the heart of Whistler Village.",
      "The 2-level penthouse has the warmth and character guests look for in a classic Whistler ski chalet, with soaring ceilings, exposed log beams, a stone fireplace, skylights and mountain views. After a full day on the slopes, gather around the fireplace, relax in the living room or step onto the balcony for a private hot-tub soak.",
      "After skiing, step directly onto your private balcony and into your own professionally maintained hot tub. There are few better ways to finish a Whistler ski day than coming home, putting the gear away and soaking outside without having to leave the property again.",
      "The home includes a fully equipped kitchen for preparing meals during your stay, with dining space for up to 6 guests. With the grocery store directly downstairs, stocking the kitchen could not be much easier.",
      "One complimentary parking space is included. The parkade clearance is approximately 6'10\". Additional paid parking is available nearby if your group is travelling with more than one vehicle. Guests also have access to secure ski and bike storage in the parkade, making it easy to keep mountain equipment safely stored between adventures.",
      "Air conditioning is provided in the main living area during warmer periods. The cool air flows toward the bedrooms, particularly as Whistler temperatures drop during the evening, but there are no dedicated A/C units inside the bedrooms.",
    ],
  },
  location: {
    title: "Location & Village Access",
    imageSide: "left",
    image: {
      photoIndex: 6,
      alt: "Hearthstone private hot tub",
    },
    paragraphs: [
      "For skiers, this is one of the home's biggest advantages. You are staying directly in Whistler Village with exceptionally easy access to both Whistler and Blackcomb mountains. The gondolas and ski lifts are only a short walk through the Village, making it easy to head out in ski gear in the morning, come back to the property during the day if needed, and walk home after skiing without arranging transportation.",
      "Hearthstone Lodge sits in the heart of Whistler's main Village, putting some of the resort's best dining, shopping, skiing and apres-ski within a few minutes of your front door. Whistler Grocery Store and BC Liquor are located directly downstairs, making it exceptionally easy to pick up groceries, drinks or last-minute essentials. The Whistler Conference Centre is beside the building, while restaurants including Araxi and Il Caminetto, cafes, boutiques and the pedestrian Village Stroll are all just steps away.",
      "The Whistler and Blackcomb gondolas are also within easy walking distance, so guests can head from the penthouse to the mountain without needing to drive. In the evening, walk to dinner, drinks or apres-ski and return home without worrying about transportation. For such a central property, having complimentary parking is an added bonus. Many guests can park when they arrive and leave the vehicle there for most or all of their stay.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Up to 7 guests across 2 bedrooms and 4 beds, with two full bathrooms.",
    floors: [
      {
        label: "Penthouse",
        bedrooms: [
          {
            name: "Primary bedroom",
            details: "King bed plus a single pullout bed.",
          },
          {
            name: "Bedroom 2",
            details: "Queen bed.",
          },
          {
            name: "Living room",
            details: "Double pullout sofa bed for additional sleeping space.",
          },
        ],
      },
    ],
    footnote:
      "Two full bathrooms are available, each with a shower, making the layout convenient for families and groups.",
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire two-level penthouse for the duration of their stay, including the private balcony and private hot tub. One complimentary parking space is included in the underground parkade, along with secure ski and bike storage for your equipment. The building entrance and suite use keyless access, making check-in easy and allowing your group to come and go throughout the stay.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "Enjoy cozy evenings around Hearthstone's charming wood-burning fireplace. We provide one complimentary slow-burning log upon arrival to get you started. This is a starter supply only, rather than firewood for your entire stay. Additional firewood and slow-burning logs can be purchased at the grocery store directly downstairs, which has long daily opening hours, making it easy to pick up more during your visit.",
      "Please note that Hearthstone Lodge does not have an elevator. The suite is located on the third floor and guests must walk up three flights of stairs to reach it. There is also one additional flight of stairs inside the two-level home, so guests should be comfortable with stairs before booking.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00012619",
      "Provincial registration number: H213461779",
    ],
  },
};

export default hearthstonePenthouseWriteup;
