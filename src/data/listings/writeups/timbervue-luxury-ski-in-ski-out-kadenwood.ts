import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  KADENWOOD_LOCATION_PARAGRAPHS,
} from "./shared";

const timberVueWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Wake up to sweeping mountain views at TimberVue, your private 8-bedroom Kadenwood estate. Enjoy ski-in/ski-out access, a private hot tub, access to Kadenwood's private gondola, and beautifully furnished spaces for gathering or unwinding.",
      "Multiple lounges, ping pong, outdoor dining, and a generous three-level layout make it an exceptional Whistler escape for families and friends, with room to come together and space to make the stay your own.",
    ],
    highlights: [
      "8 bedrooms",
      "Ski-in / ski-out",
      "Private hot tub",
      "Kadenwood Gondola access",
      "Dining for 14+, up to 16",
      "Ping pong and rec room",
      "Central air conditioning",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "TimberVue living and dining",
    },
    paragraphs: [
      "Located in Kadenwood, Whistler's favourite luxury ski-in/ski-out neighbourhood, this 8-bedroom mountain estate offers the perfect blend of privacy, comfort, and convenience. Perched high above Creekside and surrounded by old growth forest, the home features one-of-a-kind mountain views, elegant interiors, and plenty of room for groups to relax, gather, and enjoy Whistler in every season.",
      "The main floor is especially convenient, with 2 bedrooms including a primary suite, making it ideal for elderly guests or anyone who prefers to avoid stairs when coming in and out of the home. Across the 3 well-designed levels, guests can enjoy multiple living areas, a TV lounge, home office space, recreation room, ping pong table, and beautifully furnished spaces with tasteful artwork throughout.",
      "The open-concept living and dining area is designed for entertaining, with a warm mountain atmosphere, large windows, and plenty of space for everyone to come together. For larger groups, a spare dining table extension allows up to 16 guests to dine comfortably in the same room, perfect for family dinners, chef-prepared meals, and holiday gatherings.",
      "The dining table comfortably seats 10 guests with the standard chair setup. An extension leaf and 4 additional chairs are available and ready to use, allowing the table to accommodate 14+ guests comfortably.",
      "Outside, enjoy a private hot tub, outdoor dining area, and peaceful alpine surroundings. In the winter, guests can take advantage of Kadenwood's exceptional ski-in/ski-out access via the Peak to Creek run, along with the private residents-only gondola and groomed ski trail access. In the summer, the home is a beautiful base for hiking, biking, golfing, lake days, and relaxing in one of Whistler's most exclusive communities.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 2,
      alt: "TimberVue in Kadenwood",
    },
    paragraphs: [
      "In winter, TimberVue connects to Whistler Mountain via Peak to Creek and Kadenwood's groomed ski trails, with the private residents-only gondola for quick access to Creekside.",
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
            name: "Master Bedroom 1, Primary Suite",
            details:
              "King bed. Spacious Master bedroom with a gorgeous ensuite bathroom featuring two sinks, a bathtub, and a walk-in shower. This main level bedroom can be ideal for guests who prefer to avoid stairs, with the primary suite located on the same floor as the main living spaces.",
          },
        ],
      },
      {
        label: "Mid Floor",
        note: "Mid floor can be accessed via the garage side door or the garage, also providing step-free access to the second floor bedrooms.",
        bedrooms: [
          {
            name: "Bedroom 2",
            details: "King bed. Includes a private ensuite bathroom with one sink and a walk-in shower.",
          },
          {
            name: "Bedroom 3",
            details: "King bed. Includes a private ensuite bathroom with one sink and a bathtub.",
          },
          {
            name: "Bedroom 4",
            details:
              "Queen bed. Shares access to an ensuite/shared bathroom with Bedroom 5. The bathroom includes two sinks and a walk-in shower.",
          },
          {
            name: "Bedroom 5",
            details:
              "King bed. Shares access to an ensuite/shared bathroom with Bedroom 4. The bathroom includes two sinks and a walk-in shower.",
          },
          {
            name: "Bedroom 6",
            details: "Queen bed. This bedroom does not have an ensuite bathroom.",
          },
        ],
      },
      {
        label: "Basement Level",
        bedrooms: [
          {
            name: "Bedroom 7",
            details:
              "Two twin beds and two full beds. Includes a private ensuite bathroom with one sink and a walk-in shower. This is a great room for kids, teens, or larger groups sharing.",
          },
          {
            name: "Bedroom 8",
            details:
              "Queen bed. This bedroom does not have an ensuite, but has access to a bathroom with a steam shower on the basement level.",
          },
        ],
      },
    ],
    footnote:
      "Basement bathroom includes two sinks, a walk-in shower, and a steam shower. This lower level is well-suited for additional guests, families with children, or anyone looking for a bit more separation from the main living areas. A very comfy couch to enjoy the TV.",
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests enjoy private access to the entire home and its advertised amenities, including the living and dining areas, lounges, recreation room, home office space, private hot tub, outdoor dining area, and ski room.",
      "Parking includes a garage for two vehicles, with additional parking on the driveway. Access to Kadenwood's private gondola is included for guests staying at the home. The gondola serves Kadenwood residents and their guests and connects the neighbourhood with Creekside Village.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
      "TimberVue is arranged across three levels, with stairs connecting the floors. The primary suite is on the main living level, and the middle bedroom level can also be reached through the garage or garage-side entrance. If anyone in your group has specific access requirements, please contact us so we can help assess the layout.",
      "Central air conditioning throughout the home.",
      "No pets.",
    ],
    registration: [
      "Municipal registration number: 00015805",
      "Provincial registration number: PM800238143",
    ],
  },
};

export default timberVueWriteup;
