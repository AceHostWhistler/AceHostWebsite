import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_VIP_CONCIERGE_NOTE,
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
      "Designed for comfort, privacy and unforgettable mountain holidays, The Mountaintop offers approximately 7,500 sq. ft. of luxury living in Kadenwood, Whistler's most prestigious ski-in/ski-out neighbourhood. The home is thoughtfully arranged across multiple levels, making it ideal for families, groups of couples and multi-generational stays.",
      "True Kadenwood ski-in/ski-out: for a Whistler ski trip, Kadenwood is difficult to beat. The neighbourhood sits directly on Whistler Mountain, allowing guests to begin their ski day from Kadenwood rather than driving down to Creekside or Whistler Village. Spend the day skiing Whistler Blackcomb, then return home to Kadenwood and transition straight into apres-ski. Put your equipment away in the ski and mudroom, use the large boot-drying system, then head outside to the private hot tub or extra-large barrel sauna.",
      "Kadenwood also offers its own private residents-and-guests-only gondola connecting the neighbourhood directly with Creekside Village in approximately five minutes. That means guests have two incredible mountain conveniences: ski-in/ski-out access for ski days and a private gondola for easy access to Creekside.",
      "The open-concept main living level is surrounded by expansive windows showcasing spectacular mountain and valley views. Two 90-inch televisions, comfortable lounge areas and multiple entertaining spaces provide plenty of room for a large group. The gourmet kitchen features Wolf, Sub-Zero and Miele appliances, quartz countertops, generous preparation areas and a separate prep kitchen. Dining options include a main table for 12 or more, an additional bar-height table for approximately 8 guests and separate bar seating.",
      "Additional indoor amenities include a wet bar, ping pong, fitness area, steam room, ski and mudroom and private laundry. After skiing home, step outside to the private hot tub or extra-large outdoor barrel sauna. Outdoor fire pits create an ideal setting for drinks and apres-ski while enjoying Kadenwood's peaceful alpine surroundings.",
      "The home has a powerful air-conditioning system in the main living area. It provides a refreshing escape during the summer and helps maintain a comfortable temperature throughout the home, although individual bedrooms do not have separate air-conditioning units.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 0,
      alt: "The Mountaintop in Kadenwood",
    },
    paragraphs: [
      "The Mountaintop sits high above Creekside in Kadenwood, approximately 1,000 feet above the valley floor. Kadenwood is one of Whistler's most prestigious ski-in/ski-out communities and one of the resort's best locations for guests who want both privacy and exceptional mountain access. Guests can ski from the neighbourhood onto Whistler Mountain and return home from the mountain after their final run.",
      "Kadenwood's private residents-and-guests-only gondola also connects the neighbourhood directly with Creekside Village in approximately five minutes. Creekside offers the Creekside Gondola, ski school, equipment rentals, restaurants, cafes, groceries and apres-ski. Whistler Village is approximately a 10-minute drive away. The result is an unusually private mountain setting where skiing is immediately accessible without sacrificing convenient access to the resort.",
    ],
  },
  bedrooms: {
    title: "Bedroom and Bathroom Layout",
    floors: [
      {
        label: "Top Level",
        note: "A powder room is located on this level.",
        bedrooms: [
          {
            name: "Bedroom 7 / Office",
            details: "Flexible office and sleeping space with a Queen Murphy bed.",
          },
        ],
      },
      {
        label: "Main Level",
        note: "A washer and dryer are also located on this level.",
        bedrooms: [
          {
            name: "Bedroom 1, Primary Suite",
            details:
              "King bed, private ensuite bathroom with a bathtub, separate shower and double vanity. Gorgeous extra-large walk-in closet.",
          },
          {
            name: "Bedroom 2",
            details:
              "King bed with a dresser. This bedroom uses the detached full bathroom on the main level, which includes a shower and single vanity.",
          },
          {
            name: "Bedroom 3",
            details:
              "King bed with a private ensuite bathroom featuring a walk-in shower and double vanity.",
          },
          {
            name: "Bedroom 4",
            details:
              "King bed with a private ensuite bathroom featuring a walk-in shower and single vanity.",
          },
        ],
      },
      {
        label: "Lower Level",
        note: "An additional full bathroom with a steam shower and double vanity is located on the lower level.",
        bedrooms: [
          {
            name: "Bedroom 5",
            details:
              "King bed with access to the connected shared bathroom arrangement serving Bedrooms 5 and 6. The bathroom includes a shower and double vanity.",
          },
          {
            name: "Bedroom 6, Bunk Room",
            details:
              "Queen-over-queen bunk bed, providing two queen beds. This bedroom shares the connected bathroom arrangement with Bedroom 5.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have exclusive access to the entire private estate and all its amenities throughout their stay. This includes all 7 bedrooms, spacious living and dining areas, gourmet kitchen, separate prep kitchen, wet bar, entertainment spaces and outdoor areas.",
      "Guests can enjoy the private hot tub, extra-large outdoor barrel sauna, steam room, fitness area, outdoor fire pits, ping-pong table and multiple lounge areas with spectacular mountain views.",
      "The property also offers a private garage, driveway parking, laundry facilities and a dedicated ski and mudroom with a large boot-drying system, making it especially convenient for ski trips.",
      "The entire home is yours to enjoy, offering complete privacy, exceptional amenities and plenty of space for families and groups to relax together.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "One of the benefits of booking your Whistler stay with AceHost is that we can help arrange Whistler Blackcomb lift tickets, Epic Passes and season passes directly through Vail Resorts. Provided everything is purchased and completed at least seven days before arrival, we can arrange for passes to be delivered directly to the home, so guests can avoid waiting in line to sign a form and pick up their passes, which is a perk only a handful of operators are able to do, and something Vail does not offer as a service.",
      "Optional third-party services are charged separately unless specifically stated as included with your reservation. Please reach out before arrival so our team can help plan your stay.",
    ],
    registration: [
      "Municipal registration number: 00015634",
      "Provincial registration number: PM846619574",
    ],
  },
};

export default mountaintopWriteup;
