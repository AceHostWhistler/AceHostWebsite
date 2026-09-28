import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_CORE,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_REQUEST_GENERAL,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const squamishRetreatWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Stylish Squamish house with breathtaking views. Your house is a 3000 sqft 3BR/3BA located in the heart of Squamish, BC. Squamish is home to legendary hikes, mountain biking, and skiing with Whistler only a quick 45-min drive away.",
      "New-ish house with a ski/mountain bike mud room, sauna, games room, free parking, dedicated workspace and multiple patios looking towards the mountains make the house unique and perfect for a work trip or vacation with family or friends.",
    ],
    highlights: [
      "3000 sq. ft., 3 bed / 3 bath",
      "Sauna and games room",
      "Two patios (500-1000 sq. ft.)",
      "300 Mbps fibre Wi-Fi",
      "Dedicated remote workspace",
      "45-min drive to Whistler",
      "Ski and bike mud room storage",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 0,
      alt: "Squamish retreat interior",
    },
    paragraphs: [
      "Located in Squamish with breathtaking mountain views, a safe and secure neighborhood, free parking, and amazing amenities including sauna, games room, and ski/mountain bike storage. Two patios (500-1000 sq. ft.) offer room to relax, soak up the sun, tan, read a book, or enjoy a sunset meal.",
      "Kitchen: newly finished with stainless steel appliances and modern counters, including gas stove, oven, microwave, dishwasher, and all the cookware needed to make a gourmet meal. Entertainment: ultra high speed fibre optic WiFi (300mbps), Smart TV in the games room, master bedroom, second bedroom, and third bedroom. Remote workspace: ergonomic chair and monitor for connecting to a laptop, the perfect set-up for a remote worker.",
      "Complimentary coffee, tea, salt, pepper, olive oil, soap, shampoo, conditioner, and body wash is provided. Laundry: washer and dryer with detergent and fabric softener.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 8,
      alt: "Squamish mountain view from the retreat",
    },
    paragraphs: [
      "Squamish is home to legendary hikes, mountain biking, and access to coastal mountain adventure, with Whistler only a quick 45-minute drive away. The house is located in the heart of Squamish, BC, about a 5 minute drive to downtown Squamish amenities.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Three bedrooms, each with its own bathroom.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Master Bedroom",
            details:
              "King size, high-end mattress with new linens. Master bathroom with newly finished bath tub and shower.",
          },
          {
            name: "Second Bedroom",
            details:
              "Queen size, high-end mattress with new linens. Large closet. Second bathroom with newly finished walk-in shower.",
          },
          {
            name: "Third Bedroom",
            details:
              "Queen size, high-end mattress with new linens. Large closet. Third bathroom, newly finished.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({
    included: [...ACEHOST_INCLUDED_CORE],
    request: ACEHOST_REQUEST_GENERAL,
  }),
  other: {
    title: "Other details",
    guestAccess: [
      "Remote access through your phone. After check-in we will ask for your phone number to provide your unique check-in code. Your phone will unlock the key box. Use the keys for your stay and enjoy.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "Please ensure that you carefully read and understand the House Rules. Smoking and drugs in the unit or in the common areas of the building are NOT allowed. Pets are NOT allowed. All-out parties and binge-drinking types of events are NOT allowed. We live in a nice building with quiet neighbors and would like to keep it that way.",
      "NOTE: This is a LEGAL Airbnb with a LEGAL license. There is NO concern with you booking here as per the provincial changes. Thank you :)",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00010283",
      "Provincial registration number: H328839808",
    ],
  },
};

export default squamishRetreatWriteup;
