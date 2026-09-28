import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const theNestWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to The Nest, a newly renovated 5-bedroom mountain home in Whistler's peaceful Nordic neighbourhood, ideally positioned between Creekside and Whistler Village. Enjoy mountain views, beautiful sunsets, spacious living areas, high-end furnishings and a private hot tub after a day on the slopes. Ski access is only a short walk away, with the option to ski back toward the home, while Creekside Village, restaurants, cafés, groceries and the gondola are just a few minutes away by car.",
    ],
    highlights: [
      "5 bedrooms",
      "Nordic neighbourhood",
      "Private hot tub",
      "Ski access on a run",
      "Pets allowed",
      "Dave Murray trail access",
      "Driveway + garage parking",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 4,
      alt: "The Nest Interior",
    },
    paragraphs: [
      "The Nest is designed for families and groups who want plenty of space while staying close to the mountain. The open-concept main living area features high-end furnishings, a gas fireplace and generous seating, creating a comfortable gathering space after a day of skiing or exploring Whistler.",
      "Step outside to the private hot tub and take in the surrounding mountain setting and evening sunsets. Multiple patios and large windows throughout the home bring in natural light and make the most of the alpine surroundings.",
      "The Nest is located in Nordic, a peaceful residential neighbourhood positioned between Creekside and Whistler Village. Ski access to the Dave Murray trail is approximately a 7-minute walk from the home, with the ability to ski toward Creekside and return close to the property.",
      "Creekside Village is approximately a 3-minute drive away and offers the Creekside Gondola, groceries, cafés, restaurants, ski rentals and après-ski options. Whistler Village is approximately a 7-minute drive away. Local bus connections are also available for guests who prefer not to drive.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Five bedrooms across upper, main, and lower levels.",
    floors: [
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Bedroom 1, Primary Suite",
            details:
              "King bed, floor-to-ceiling windows, private patio and gas fireplace. The spacious ensuite bathroom includes a bathtub, large walk-in shower and double vanity.",
          },
          {
            name: "Bedroom 2",
            details:
              "King bed with private patio access and ensuite bathroom featuring both a bathtub and shower.",
          },
          {
            name: "Bedroom 3",
            details:
              "King bed with private ensuite bathroom featuring a bathtub and shower.",
          },
        ],
      },
      {
        label: "Lower Level",
        bedrooms: [
          {
            name: "Bedroom 4",
            details:
              "Two twin beds. This bedroom shares a full bathroom located just outside the room with Bedroom 5.",
          },
          {
            name: "Bedroom 5",
            details:
              "King bed plus one twin bed, providing a flexible sleeping arrangement for families or groups. This bedroom also features a gas fireplace and shares the nearby full bathroom with Bedroom 4.",
          },
        ],
      },
    ],
    footnote:
      "A powder room is conveniently located beside the main living area. The driveway accommodates two vehicles. Additional vehicles can be parked using the garage, allowing approximately 3-4 vehicles between the driveway and garage depending on vehicle size. One additional visitor parking space may also be available with the supplied parking pass.",
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 66,
      alt: "The Nest Exterior",
    },
    paragraphs: [
      "The best part of this chalet is the location! Nordic is a real gem. It's just a short distance from both Creekside and Whistler Village! Enjoy just a 7 minute stroll to access the Dave Murray Ski trail and ski out to the Creekside Gondola and village. The house is just a 3-minute drive to Creekside Village or a 17 minutes walk. For Whistler Village, the drive is 7 minutes. Easy access to the lakes in the Summer. Stroll into Creekside and enjoy delicious coffee and pastries at Bred Bakery and Rock-It Coffee co, the creekside market for groceries, BC liquor stores, and Dusty's for Après. Great restaurants Rim Rock, Red door, Creekbread and Nita Lake lodge located in Creekside. This is the ideal home for your holiday!",
      "Ride the local bus if you don't want to use your car. For Whistler Village it's an 8-minute walk to the Eva Lake Road bus stop, catch the 20, 21, or 25 and the journey is only 7 minutes. For Creekside village walk 9 minutes to Highlands bus stop and catch the 20 and 21 buses. The buses come every 10 or 15 minutes.",
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have full access to the entire home, including garage parking, private hot tub, and all amenities.",
    ],
    notes: [
      "Utilities fully included: heat, gas, water, hot tub weekly cleaning, wifi, etc.",
      "Pets allowed.",
      "Ski-in/ski-out on a ski run when conditions permit, with access via the nearby Dave Murray trail.",
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: ["Municipal registration number: 00011803"],
  },
};

export default theNestWriteup;
