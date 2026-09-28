import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const falconBlueberryDriveWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Falcon, a spacious 7-bedroom Whistler chalet in prestigious Blueberry Hill, minutes from Whistler Village and the slopes. Designed for families and groups of up to 15, the home features a large indoor dining table seating 14, mountain views, a wood-burning fireplace, central A/C, outdoor sauna, private hot tub and large deck.",
      "Walk the Valley Trail to the Village in about 25 minutes, drive in 3-4 minutes, or take the Route 6 bus from a stop steps away.",
    ],
    highlights: [
      "7 bedrooms, groups up to 15",
      "Dining table seats 14",
      "Outdoor wood-barrel sauna",
      "Private hot tub and large deck",
      "Central air conditioning",
      "Blueberry Hill mountain views",
      "One pet allowed with fee",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Falcon Blueberry Drive interior",
    },
    paragraphs: [
      "Falcon is a spacious Whistler chalet designed for families and groups to enjoy time together while still having plenty of room to spread out across three levels. Enter through the unique hand-carved West Coast front door into a heated slate entrance. The main living area is warm and inviting, with high ceilings, large windows, mountain views and a beautiful wood-burning fireplace at the centre of the room. The home features seven generous bedrooms, multiple gathering spaces and central air conditioning throughout for comfortable summer stays. At the heart of the main level, the oversized dining table seats 14 guests, making Falcon especially well suited to group meals, celebrations and private-chef dinners.",
      "Outside, the large deck offers plenty of room to enjoy Whistler year-round, with a private hot tub, outdoor wood-barrel sauna, dining area and barbecue. After a day skiing, biking or exploring the mountains, relax in the sauna, soak in the hot tub or gather around the fireplace inside.",
      "Falcon is particularly well suited for both small or larger groups with bedrooms spread across the upper, main and lower levels. Recently installed central air conditioning throughout the entire home makes summer stays more comfortable. The outdoor wood-barrel sauna and hot tub are easy to use and a great way to relax after a long day.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Falcon on Blueberry Hill",
    },
    paragraphs: [
      "Falcon is located in peaceful Blueberry Hill, just outside Whistler Village with quick access to both the Village and the mountains. The Valley Trail and Whistler Golf Course are approximately a one-minute walk from the home, and the scenic trail into Whistler Village takes about 25 minutes. For quicker access, the Village and gondolas are approximately a 3-4 minute drive away, and the Route 6 public bus stops just steps from the property.",
      "Very prestigious, quiet, and family-orientated area Blueberry Hill. Very convenient location close to Whistler Village. One of the best features of the location is the ability to reach the Village without needing a car. The Route 6 Blueberry/Tapley's bus also stops just steps from the property and provides convenient service directly into Whistler Village. This makes Falcon an excellent option for groups who want the space, privacy and mountain setting of a large chalet without feeling far removed from the restaurants, skiing, shopping and energy of Whistler Village.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Seven bedrooms across upper, mid and lower levels.",
    floors: [
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Master Bedroom 1",
            details:
              "Spacious master bedroom with a gorgeous King bed on the top floor, ensuite large bath and shower, walk-in wardrobe, and private deck with beautiful mountain views.",
          },
          {
            name: "Bedroom 2",
            details:
              "At the other end of the floor from the master, this beautiful bright and spacious room has a King bed and large windows allowing for ample natural light.",
          },
          {
            name: "Bedroom 3",
            details:
              "Stylish King bed and vast windows with gorgeous views, the same size as bedroom 2. Bedrooms 2 and 3 share a bathroom with a shower and bathtub.",
          },
        ],
      },
      {
        label: "Mid-Level",
        bedrooms: [
          {
            name: "Bedroom 4",
            details:
              "Lovely large bedroom with a gorgeous King bed, sofa for lounging and desk space. Adjacent to the room is a powder bathroom and the outdoor hot tub is accessed through this room on the back deck.",
          },
        ],
      },
      {
        label: "Lower Level",
        bedrooms: [
          {
            name: "Bedroom 5",
            details: "Stylish King bed in this inviting and cozy space.",
          },
          {
            name: "Bedroom 6",
            details: "Twin bunk bed plus twin bed (3 total beds).",
          },
          {
            name: "Bedroom 7",
            details: "King bed. All three lower bedrooms share a spacious bathroom, one sink, and a large shower.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire home, including the hot tub, outdoor sauna, deck and driveway. The driveway comfortably accommodates approximately 4-5 vehicles.",
      "Garage is available for up to 7 bikes or ski gear as storage. Garage is not large enough for a vehicle to fit.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "Falcon is located in Blueberry Hill, one of Whistler's most established and peaceful residential neighbourhoods. The elevated setting offers beautiful mountain views while keeping guests remarkably close to Whistler Village and the slopes.",
      "Parking on the driveway fits 4-5 vehicles.",
      "Pets allowed (1 pet allowed with a fee). Assistance animals are always allowed.",
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00013305",
      "Provincial registration number: PM665790127",
    ],
  },
};

export default falconBlueberryDriveWriteup;
