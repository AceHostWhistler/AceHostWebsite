import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const tyndallPenthouseWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Penthouse unit, in the iconic Tyndall Lodge building in the heart of Whistler Village.",
      "This bright and spacious unit sits right in the centre of Whistler Village, steps from the famous Olympic Rings and only a short walk to both Whistler and Blackcomb gondolas.",
      "Hosting up to 8 guests comfortably, the home features three sleeping areas, 5 beds, and two full bathrooms.",
      "Location and layout doesn't get any better than this!",
    ],
    highlights: [
      "Tyndall Lodge penthouse",
      "Loft bunk bedroom",
      "Olympic Plaza steps away",
      "Shared pool and hot tub",
      "Free underground parking",
      "Fully equipped kitchen",
      "Sleeps up to 8 guests",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Whistler Village Penthouse interior",
    },
    paragraphs: [
      "Hosting up to 8 guests comfortably, the home features 4 sleeping areas, 5 beds (plus 1 futon sofa bed with extra linens/sheets), and 2 full bathrooms. One of the highlights is the unique loft bedroom with bunkbeds, tall ceilings and a cozy chalet feel that kids and extra guests absolutely love. The main bedrooms are warm and inviting with plenty of natural light, making it the perfect place to unwind after a full day outdoors.",
      "Enjoy a fully equipped kitchen for home-cooked dinners, a spacious living room for evening hangouts and movie nights, and complimentary parking included with your stay. This is the ideal base for families, friends or small groups looking to enjoy Whistler with comfort, style and convenience.",
      "Ski in Ski out Access: No need to enter a vehicle to access the slopes, though the condo is about an 8-10 minute walk to and from the slopes.",
      "Air Coolant Units: Not Central AC, rather we have 1 coolant unit in the living room and Master. Keeping the house nice and cool on the hottest summer days. Fill units with water and ice like a humidifier, and refill every 24-48 hours. They work very well and brand new!",
      "Penthouse unit with high ceilings and great natural light. Unique loft layout that adds a fun and memorable touch. Spacious living area perfect for relaxing or entertaining. Located in the well-known Tyndall Lodge building.",
    ],
  },
  location: {
    title: "Location & Village Access",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Tyndall Lodge in Whistler Village",
    },
    paragraphs: [
      "You could not be more central. Tyndall Lodge is positioned in the middle of Whistler Village, directly beside the Olympic Plaza, skating rink, playground and the legendary Olympic Rings. Walk out your door into the village shops, cafes and restaurants, or stroll straight to the gondolas for skiing and snowboarding in winter and biking in summer.",
      "Everything Whistler is famous for is only minutes away on foot. Enjoy après-ski, live music, boutique stores, spas, parks, lakes and walking trails without ever needing a car. This location is ideal for guests looking for the perfect blend of fun, convenience and mountain charm.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Sleeps up to 8 guests across three sleeping areas plus a living-room futon.",
    floors: [
      {
        label: "Penthouse",
        bedrooms: [
          {
            name: "Bedrooms",
            details: "Two full bedrooms with warm, inviting layouts and plenty of natural light.",
          },
          {
            name: "Loft bedroom",
            details:
              "Unique loft with bunk beds, tall ceilings and a cozy chalet feel that kids and extra guests love.",
          },
          {
            name: "Living room",
            details:
              "Pullout futon sofa bed with extra linens and sheets for additional sleeping space.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire penthouse for the duration of their stay, including all bedrooms, living spaces and the fully equipped kitchen.",
      "You will also have access to the building's shared pool and hot tub, one complimentary underground parking space and the common ski and gear storage areas.",
      "The home uses keyless entry, with access instructions provided prior to arrival. Access via code which will be sent out 1 day prior to arrival.",
    ],
    notes: [ACEHOST_VIP_CONCIERGE_NOTE, ACEHOST_SKI_PASS_NOTE, ACEHOST_REACH_OUT_NOTE],
    registration: [
      "Municipal registration number: 00015445",
      "Provincial registration number: PM280640349",
    ],
  },
};

export default tyndallPenthouseWriteup;
