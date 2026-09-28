import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  KADENWOOD_LOCATION_PARAGRAPHS,
} from "./shared";

const timberHavenWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to your private Kadenwood mountain estate, an 8-bedroom luxury home with stunning views, ski-in/ski-out access, a private hot tub, beautiful furnishings, curated artwork, and access to Kadenwood's private residents-only gondola.",
      "With spacious living areas, outdoor dining, a ping pong table, multiple lounge spaces, and a main floor with two bedrooms including the primary suite, this home is perfect for families, large groups, and guests who prefer minimal stairs during their stay.",
    ],
    highlights: [
      "8 bedrooms",
      "Ski-in / ski-out",
      "Private hot tub",
      "Kadenwood Gondola access",
      "Dining for 14+ guests",
      "Ping pong and rec room",
      "Central air conditioning",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 2,
      alt: "Timber Haven living and dining",
    },
    paragraphs: [
      "Located in Kadenwood, Whistler's favourite luxury ski-in/ski-out neighbourhood, this 8-bedroom mountain estate offers the perfect blend of privacy, comfort, and convenience. Perched high above Creekside and surrounded by old growth forest, the home features one-of-a-kind mountain views, elegant interiors, and plenty of room for groups to relax, gather, and enjoy Whistler in every season.",
      "The main floor is especially convenient, with two bedrooms including a primary suite, making it ideal for elderly guests or anyone who prefers to avoid stairs when coming in and out of the home. Across three well-designed levels, guests can enjoy multiple living areas, a TV lounge, home office space, a recreation room, ping pong table, and beautifully furnished spaces with tasteful artwork throughout.",
      "The open-concept living and dining area is designed for entertaining, with a warm mountain atmosphere, large windows, and plenty of space for everyone to come together. The dining table comfortably seats 10 guests with the standard chair setup. An extension leaf and four additional chairs are available, allowing 14+ guests to dine comfortably in the same room, perfect for family dinners, chef-prepared meals, and holiday gatherings.",
      "Outside, enjoy a private hot tub, outdoor dining area, and peaceful alpine surroundings. In winter, guests can take advantage of Kadenwood's exceptional ski-in/ski-out access via the Peak to Creek run, along with the private residents-only gondola and groomed ski trail access. In summer, the home is a beautiful base for hiking, biking, golfing, lake days, and relaxing in one of Whistler's most exclusive communities.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Timber Haven in Kadenwood",
    },
    paragraphs: [
      "In winter, Timber Haven connects to Whistler Mountain via Peak to Creek and Kadenwood's groomed ski trails, with the private residents-only gondola for quick access to Creekside.",
      ...KADENWOOD_LOCATION_PARAGRAPHS,
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "8 bedrooms | multiple ensuite bathrooms | sleeps large groups comfortably",
    floors: [
      {
        label: "Main Floor",
        note: "Primary living level.",
        bedrooms: [
          {
            name: "Bedroom 1, Primary Suite",
            details:
              "King bed. Spacious primary bedroom with an ensuite bathroom featuring two sinks, a bathtub, and a walk-in shower. Ideal for guests who prefer to avoid stairs, on the same floor as the main living spaces.",
          },
        ],
      },
      {
        label: "Mid Floor",
        note: "Accessible via the garage side door or the garage, with step-free access to these bedrooms.",
        bedrooms: [
          {
            name: "Bedroom 2",
            details: "King bed. Private ensuite bathroom with one sink and a walk-in shower.",
          },
          {
            name: "Bedroom 3",
            details: "King bed. Private ensuite bathroom with one sink and a bathtub.",
          },
          {
            name: "Bedroom 4",
            details:
              "Queen bed. Shares an ensuite bathroom with Bedroom 5 (two sinks and a walk-in shower).",
          },
          {
            name: "Bedroom 5",
            details:
              "King bed. Shares an ensuite bathroom with Bedroom 4 (two sinks and a walk-in shower).",
          },
          {
            name: "Bedroom 6",
            details: "Queen bed. Does not have an ensuite bathroom.",
          },
        ],
      },
      {
        label: "Basement Level",
        bedrooms: [
          {
            name: "Bedroom 7",
            details:
              "Two twin beds and two full beds. Private ensuite bathroom with one sink and a walk-in shower. Great for kids, teens, or larger groups sharing.",
          },
          {
            name: "Bedroom 8",
            details:
              "Queen bed. No ensuite, but access to a basement bathroom with a steam shower.",
          },
        ],
      },
    ],
    footnote:
      "Basement bathroom includes two sinks, a walk-in shower, and a steam shower. The lower level is well-suited for additional guests, families with children, or anyone looking for more separation from the main living areas, with a very comfy couch to enjoy the TV.",
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire home, including the garage for two vehicles, large driveway, private hot tub, ski room, and all advertised living spaces and amenities.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
      "Central air conditioning throughout the home.",
      "No pets.",
    ],
    registration: [
      "Municipal registration number: 00015805",
      "Provincial registration number: PM800238143",
    ],
  },
};

export default timberHavenWriteup;
