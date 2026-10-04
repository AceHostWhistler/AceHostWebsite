import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const bluffsUnit4Writeup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Perched in Taluswood's Bluffs, this 2-bedroom retreat drops you onto the Dave Murray Downhill for true ski-in ski-out days and sunset mountain-view evenings.",
      "A King and Queen suite, a Queen sofa, a shared complex hot tub, quiet portable AC units that cool the living room (from May 1-Nov 1), Smart TVs, a gas fireplace, a BBQ and a chef-ready kitchen keep every season comfortable.",
      "Underground parking for two cars and secure ski & bike storage make arrivals effortless.",
    ],
    highlights: [
      "True ski-in / ski-out",
      "Dave Murray Downhill access",
      "2 bedrooms + sofa bed",
      "Shared complex hot tub",
      "2 underground parking stalls",
      "Secure ski & bike storage",
      "Portable AC (May 1 - Nov 1)",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 4,
      alt: "Bluffs Unit 4 living area",
    },
    paragraphs: [
      "Step through the front door into a warm, tiled mudroom with a ski-boot dryer. Hooks, shelves, and a bench make it easy to gear up or peel off layers without tracking snow through the home. Heated floors here (and in every bathroom) keep toes toasty.",
      "Enjoy same-floor living to the entire home (only 2 steps down after entering the home, otherwise would be step free) and bedrooms from the front door. An open-concept kitchen, dining, and living area with a gas fireplace and a portable AC unit (from May 1-Nov 1). The living room features two couches, including a queen pull-out sofa facing a gas fireplace and a 65-inch Smart TV with Netflix, Amazon Prime, and HDMI ports for your own devices. Sliding doors lead to a covered balcony where you will find a four-burner BBQ and an outdoor dining space.",
      "The chef's kitchen is fully stocked for longer stays: full-size fridge with bottom freezer; five-burner electric range, convection oven, microwave, and dishwasher; Nespresso original machine & drip coffee machine; high-end cookware, chef's knives, spice rack, baking basics, and ample glassware. A solid wood dining table seats six comfortably indoors.",
      "Portable, whisper-quiet AC units keep the living room cool from May 1 to November 1. In-floor heating in bathrooms and efficient baseboard heaters throughout the unit. The unit features high-speed Wi-Fi ideal for remote work or streaming.",
      "The shared complex hot tub looks directly toward the snow-capped Coast Mountains. Enjoy sunrise soaks or starlit sessions after a day on the slopes.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "All of our beds come with premium sheets and bedding.",
    floors: [
      {
        label: "Main Level",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary Suite",
            details:
              "King bed with hybrid mattress, 100 percent cotton linens, blackout blinds, oversized closet, a 47\" Smart TV, and an ensuite bath with deep soaker tub & shower, and heated floors.",
          },
          {
            name: "Second Bedroom",
            details:
              'Queen bed with a 58" Smart TV, with access to the shared unit bathroom with a standing shower.',
          },
          {
            name: "Living Room",
            details:
              "Queen pull-out sofa with a nice duvet. Sofa bed guests can use the shared bathroom in the unit.",
          },
        ],
      },
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 7,
      alt: "Bluffs Unit 4 bedroom",
    },
    paragraphs: [
      "This home sits in Taluswood's Bluffs, one of Whistler's most desirable mountainside neighbourhoods above Creekside. True ski-in / ski-out access drops you onto the Dave Murray Downhill, so ski days start and finish at the door rather than in a Village parking garage.",
      "Creekside Village is a short drive away, with the Creekside Gondola, restaurants, cafes, grocery shopping and ski rentals close at hand. Whistler Village is easily reached by car or taxi, giving you a quieter alpine setting with convenient access to the rest of the resort.",
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    notes: [
      "Underground parking offers two stalls for the unit, and secure gear storage in the underground garage allows guests to lock bikes and ski and snowboard gear. In the summer, you can rinse bikes on the communal wash-down pad near the garage entrance.",
      "A full-size front-load washer and dryer are tucked in a hallway closet with detergent, iron, and drying rack provided. We stock eco-friendly toiletries, basic cleaning supplies, spare bath and hot-tub towels, and starter packs of coffee, tea, and condiments so you can settle in before your first grocery run.",
      "Everything is designed for effortless mountain living. Arrive, unload in the mudroom, relax in the living room, and let the views remind you why you chose Whistler.",
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00015824",
      "Provincial registration number: PM274988523",
    ],
  },
};

export default bluffsUnit4Writeup;
