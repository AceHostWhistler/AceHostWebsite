import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_VIP_CONCIERGE_NOTE,
  KADENWOOD_LOCATION_PARAGRAPHS,
} from "./shared";

const mountaintopWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Set high above Creekside in exclusive Kadenwood, The Mountaintop is a 7,500 sq. ft. ski-in/ski-out estate designed for groups of 16 or more. The home offers panoramic mountain views, seven bedrooms, a chef's kitchen and exceptional entertaining spaces.",
      "After skiing, relax in the private hot tub, extra-large outdoor sauna or steam room, then gather around the fire pits, wet bar, ping-pong table or two 90-inch TVs. Private Kadenwood Gondola access makes reaching Creekside effortless.",
    ],
    highlights: [
      "7,500 sq. ft.",
      "7 bedrooms",
      "Two 90-inch TVs",
      "Outdoor hot tub and barrel sauna",
      "Wolf, Sub-Zero, Miele kitchen",
      "Ski-in / ski-out",
      "Private Kadenwood Gondola",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 6,
      alt: "The Mountaintop interior",
    },
    paragraphs: [
      "The Mountaintop combines refined contemporary design with the privacy and natural beauty of one of Whistler's most prestigious mountainside neighbourhoods. With 7,500 square feet of living space arranged across three levels, the home provides plenty of room for families and groups to spend time together while still enjoying privacy.",
      "Each bedroom enjoys beautiful mountain scenery, while multiple king suites, queen bedrooms and flexible sleeping spaces make the layout especially well suited to extended families, groups of couples and multi-generational stays.",
      "The open-concept main living level is framed by expansive windows showcasing incredible mountain and valley views. Comfortable lounge areas and two 90-inch televisions provide plenty of space for relaxed evenings, sports or movie nights.",
      "The gourmet kitchen is equipped with Wolf, Sub-Zero and Miele appliances, quartz countertops, generous preparation areas and a separate prep kitchen. It is ideal for everything from family breakfasts to professionally catered dinners and private chef experiences.",
      "Connected dining and entertaining areas include a main dining table seating 12 or more, a bar-height table for an additional 8 guests, and separate bar seating for 4 guests, giving larger groups flexibility without separating guests from the main entertaining area.",
      "Additional indoor amenities include a wet bar, ping-pong table, fitness space, steam room, ski and mudroom, laundry facilities and a large ski-boot drying system in the garage. After a day on Whistler Mountain, step outside to the private hot tub or extra-large outdoor barrel sauna, with outdoor fire pits for après-ski.",
      "The home has a powerful air-conditioning system in the main living area for summer comfort throughout the home, although individual bedrooms do not have separate air-conditioning units.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "The Mountaintop in Kadenwood",
    },
    paragraphs: [
      "The Mountaintop sits high above Creekside in Kadenwood, approximately 1,000 feet above the valley floor. The elevated position creates expansive mountain views and a peaceful sense of privacy that define the home.",
      "Kadenwood's private residents-and-guests-only gondola connects the neighbourhood with Creekside Village in approximately five minutes. Creekside offers direct access to Whistler Mountain, ski school, restaurants, cafes, groceries and equipment rentals. Whistler Village is approximately a 10-minute drive away.",
      ...KADENWOOD_LOCATION_PARAGRAPHS,
      "Guests can access Creekside and Whistler Village via the private gondola, taxi, ride app, private driver, or vehicle rentals. Transportation is not necessary to ski since the property is located right on Whistler Mountain.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    floors: [
      {
        label: "Top Level",
        note: "Powder room on this level.",
        bedrooms: [
          {
            name: "Bedroom 7 / Office",
            details: "Flexible office and sleeping space with a queen Murphy bed.",
          },
        ],
      },
      {
        label: "Main Level",
        note: "Washer and dryer on this level.",
        bedrooms: [
          {
            name: "Bedroom 1, Primary Suite",
            details:
              "King bed, private ensuite bathroom with bathtub, separate shower and double vanity.",
          },
          {
            name: "Bedroom 2",
            details:
              "Queen bed with dresser. Uses the detached full bathroom on the main level (shower and single vanity). This room does not have a closet.",
          },
          {
            name: "Bedroom 3",
            details:
              "King bed with private ensuite bathroom (walk-in shower and double vanity).",
          },
          {
            name: "Bedroom 4",
            details:
              "King bed with private ensuite bathroom (walk-in shower and single vanity).",
          },
        ],
      },
      {
        label: "Lower Level",
        note: "Additional full bathroom with steam shower and double vanity.",
        bedrooms: [
          {
            name: "Bedroom 5",
            details:
              "Queen bed. Shares a connected bathroom arrangement with Bedroom 6 (shower and double vanity).",
          },
          {
            name: "Bedroom 6, Bunk Room",
            details:
              "Queen-over-queen bunk bed (two queen beds). Shares the connected bathroom arrangement with Bedroom 5.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire home and all advertised amenities, including the garage, driveway, private hot tub, outdoor sauna, steam room, gym, ski and mudroom, laundry facilities, entertaining spaces and outdoor areas.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "One of the benefits of booking your Whistler stay with AceHost is that we can help arrange Whistler Blackcomb lift tickets, Epic Passes and season passes directly through Vail Resorts. Provided everything is purchased and completed at least seven days before arrival, we can arrange for passes to be delivered directly to the home, so guests can avoid waiting in line to sign a form and pick up their passes. This is a perk only a handful of operators are able to offer, and something Vail does not offer as a service.",
      "Optional third-party services are charged separately unless specifically stated as included with your reservation. Please reach out before arrival so our team can help plan your stay.",
    ],
    registration: [
      "Municipal registration number: 00015634",
      "Provincial registration number: PM846619574",
    ],
  },
};

export default mountaintopWriteup;
