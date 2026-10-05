import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const bluffsUnit8Writeup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Perched in Taluswood's Bluffs, this 2-bedroom retreat puts you right on the Dave Murray Downhill for true ski-in ski-out days and beautiful mountain-view evenings. With a King suite, Queen bedroom, 4 Twin bunk beds, and a Queen sofa bed, the home is ideal for families and groups. A neighbourhood hot tub with stunning views, AC, Smart TVs, gas fireplace, BBQ, gorgeous patio view, chef-ready kitchen, generous parking, and secure ski & bike storage make every season comfortable and effortless.",
    ],
    highlights: [
      "True ski-in / ski-out",
      "Dave Murray Downhill",
      "2 bedrooms + sofa bed",
      "King suite on top floor",
      "4 twin bunk beds",
      "Neighbourhood hot tub",
      "2 underground + outdoor parking",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Bluffs Unit 8 living area",
    },
    paragraphs: [
      "Step inside to a warm and welcoming mountain home designed for easy Whistler stays. With plenty of space for families and groups, the home combines comfortable bedrooms, an open-concept living area, a fully equipped kitchen, beautiful views, and convenient access to the slopes.",
      "The main floor features the open-concept kitchen, dining, and living area, along with the Queen bedroom and bunk room. The living room includes a Queen pull-out sofa, gas fireplace, Smart TV, and a portable AC unit from May 1 to November 1. Sliding doors open to the covered balcony, where you can enjoy the mountain air, BBQ, and outdoor dining space.",
      "The chef's kitchen is fully stocked for longer stays: full-size fridge and freezer; electric range, oven, microwave, and dishwasher; Nespresso Original machine & drip coffee machine; high-end cookware, chef's knives, spice rack, baking basics, and ample glassware. The dining area provides plenty of room for the group to gather for meals after a day on the mountain.",
      "Bathrooms feature in-floor heating, with efficient baseboard heating throughout the rest of the home. High-speed Wi-Fi is included for remote work, streaming, and staying connected during your stay.",
      "The hot tub is private to the complex and looks toward the surrounding Coast Mountains. Enjoy a morning soak before heading out for the day or relax under the stars after skiing.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "All of our beds come with premium sheets and bedding.",
    floors: [
      {
        label: "Top Floor",
        bedrooms: [
          {
            name: "Primary Suite",
            details: "King bed in a private upper-level bedroom.",
          },
        ],
      },
      {
        label: "Main Floor",
        bedrooms: [
          {
            name: "Queen Bedroom",
            details: "Queen bed conveniently located on the main living level.",
          },
          {
            name: "Bunk Room",
            details:
              "Four Twin bunk beds, perfect for children, friends, or larger groups.",
          },
          {
            name: "Living Room",
            details: "Queen pull-out sofa with comfortable bedding.",
          },
        ],
      },
    ],
    footnote:
      "Bedroom 1: 1 king bed. Bedroom 2: 1 queen bed. Bunk room: 4 single beds. Living room: 1 sofa bed.",
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 21,
      alt: "Bluffs Unit 8 master bedroom",
    },
    paragraphs: [
      "Taluswood is one of Whistler's most desirable mountainside neighbourhoods, set above Creekside in a peaceful alpine setting surrounded by forest and mountain views. The area is especially popular with skiers because of its convenient access to Whistler Mountain and the Dave Murray ski run.",
      "Creekside Village is only a short drive away and offers the Creekside Gondola, restaurants, cafés, grocery shopping, ski rentals and other essentials. Whistler Village is also easily accessible by car or taxi, making Taluswood a great choice for guests who want a quieter mountain setting while still being close to Whistler's main attractions.",
      "In summer, the area provides easy access to hiking, biking and nearby lakes, while the elevated setting offers a more relaxed residential atmosphere away from the busiest parts of the resort.",
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    notes: [
      "The unit includes two guaranteed underground parking spaces, with a maximum garage clearance of 6 feet 8 inches. In addition to the underground stalls, there are plenty of outdoor parking spaces directly outside the unit that guests are welcome to use throughout both winter and summer. This is a great bonus for groups travelling with several vehicles or anyone bringing an overheight vehicle that cannot fit in the underground garage.",
      "Secure gear storage in the underground garage provides space for ski, snowboard, and bike equipment. During summer, guests can also use the communal bike wash-down area near the garage entrance.",
      "A full-size washer and dryer are provided along with detergent, an iron, and drying rack. We stock eco-friendly toiletries, basic cleaning supplies, spare bath and hot-tub towels, and starter supplies of coffee, tea, and condiments so you can settle in before your first grocery run.",
      "There is one flight of stairs to enter the unit. It is manageable for nearly all guests, including many elderly guests, but we like to be upfront so there are no surprises for anyone with mobility limitations or personal preferences. The benefit is that the home sits slightly elevated, allowing for beautiful scenic views over Whistler Village and the surrounding mountains.",
      "Everything is designed for effortless mountain living. Ski straight into the neighbourhood, come home to plenty of space for the entire group, relax by the fireplace or in the hot tub, and enjoy the elevated views over Whistler and the surrounding mountains.",
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00015954",
      "Provincial registration number: PM930192813",
    ],
  },
};

export default bluffsUnit8Writeup;
