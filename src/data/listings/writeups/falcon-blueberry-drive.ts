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
      "Walk the Valley Trail to the Village in about 25 minutes, drive in 3 to 4 minutes, or take the Route 6 bus from a stop, steps away.",
    ],
    highlights: [
      "7 bedrooms, groups up to 15",
      "Dining table seats 14",
      "Outdoor wood-barrel sauna",
      "Private hot tub and large deck",
      "Central air conditioning",
      "Blueberry Hill mountain views",
      "3.5 bathrooms across three levels",
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
      "Falcon is particularly well suited for both small or larger groups with bedrooms spread across the upper, main and lower levels.",
      "NEW air conditioning: recently installed central air conditioning throughout the entire home, for a more comfortable summer vacation.",
      "New outdoor wood-barrel sauna and hot tub for ultimate relaxation. Easy to use, and a great way to relax after a long day.",
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
      "Falcon is located in peaceful Blueberry Hill, just outside Whistler Village with quick access to both the Village and the mountains. The Valley Trail and Whistler Golf Course are approximately a one-minute walk from the home, and the scenic trail into Whistler Village takes about 25 minutes. For quicker access, the Village and gondolas are approximately a 3 to 4 minute drive away, and the Route 6 public bus stops just steps from the property.",
      "Its elevated setting offers beautiful mountain views and a relaxed atmosphere, making it a lovely base for families and groups.",
      "With the Village close by on foot, by car or by bus, it's easy to head out for skiing, dinner or shopping before returning to your own spacious chalet, private hot tub and outdoor sauna.",
      "Getting around: Falcon offers several convenient ways to explore Whistler. Walking: Whistler Village is approximately a 25-minute walk along the scenic Valley Trail, which you can access about one minute from the home. Driving: the Village and gondolas are approximately a 3 to 4 minute drive away. The private driveway accommodates approximately four to five vehicles. Public transport: the Route 6 Blueberry/Tapley's bus stops just steps from the property and provides service into Whistler Village. Taxis: taxis are a great option for getting to the slopes or heading out for dinner. Ask us for our VIP taxi code for priority pickups from the home. Uber is also available in Whistler.",
      "Whether your group prefers walking, driving or taking the bus, you have convenient options for reaching the slopes and enjoying evenings in the Village.",
    ],
  },
  bedrooms: {
    title: "Bedroom & Bathroom Layout",
    summary:
      "Seven bedrooms across upper, mid and lower levels, with 3.5 bathrooms.",
    floors: [
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Master Bedroom 1",
            details:
              "The spacious master bedroom has a gorgeous King bed and is located on the top floor, with an ensuite bathroom that has a large bath and separate shower, walk-in wardrobe, and private deck with beautiful mountain views. Brand new smart TV now available in the master bedroom.",
          },
          {
            name: "Bedroom 2",
            details:
              "At the other end of the floor to the master, this beautiful bright, and spacious room has a King bed and large windows allowing for ample natural light.",
          },
          {
            name: "Bedroom 3",
            details:
              "A stylish King bed and vast windows with gorgeous views, the room is the same size as bedroom 2. Both bedrooms 2 and 3 share a bathroom with a shower and bathtub.",
          },
        ],
      },
      {
        label: "Mid-Level",
        bedrooms: [
          {
            name: "Bedroom 4",
            details:
              "A lovely large bedroom equipped with a gorgeous King bed, with a sofa for lounging and desk space. Adjacent to the room is a powder half bathroom and the outdoor hot tub is accessed through this room on the back deck.",
          },
        ],
      },
      {
        label: "Lower Level",
        bedrooms: [
          {
            name: "Bedroom 5",
            details:
              "A stylish King bed in this inviting and cozy space. This bedroom also has an optional private entrance directly from outside, accessible through a coded door. Most guests use the main interior entrance, but the separate exterior entrance is available if preferred.",
          },
          {
            name: "Bedroom 6",
            details: "Twin bunk bed + separate Twin bed (3 beds total).",
          },
          {
            name: "Bedroom 7",
            details: "A comfortable bedroom with a King bed.",
          },
          {
            name: "Lower Level Bathroom & Privacy",
            details:
              "All 3 lower-level bedrooms have their own separate entrances from the hallway, allowing guests to access each bedroom independently. The bedrooms share a spacious bathroom with a large shower and sink, conveniently accessible directly from the hallway. Guests do not need to walk through any other bedroom to access the bathroom, ensuring privacy for everyone.",
          },
        ],
      },
      {
        label: "Bathroom Layout",
        bedrooms: [
          {
            name: "Upper ensuite",
            details:
              "Master Bedroom 1 has a private ensuite with a large bath and separate shower.",
          },
          {
            name: "Upper shared bath",
            details:
              "Bedrooms 2 and 3 share a bathroom with a shower and bathtub.",
          },
          {
            name: "Mid-level powder room",
            details:
              "A powder half bathroom sits adjacent to Bedroom 4 on the main level.",
          },
          {
            name: "Lower shared bath",
            details:
              "Bedrooms 5, 6 and 7 share a spacious bathroom with a large shower and sink, accessed from the hallway. Guests do not walk through another bedroom to reach it.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Your group will enjoy exclusive use of the chalet, including all seven bedrooms, the kitchen, dining area and shared living spaces across three levels. Outside, enjoy the private hot tub, outdoor wood-barrel sauna and spacious deck with a barbecue and outdoor dining area. There's plenty of space to gather for meals or relax together after exploring Whistler.",
      "The driveway provides parking for approximately four to five vehicles. The garage is available for equipment storage, including ski gear or up to seven bikes. Vehicle parking is on the driveway, as the garage is too small to accommodate a car.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "Falcon is located in Blueberry Hill, one of Whistler's most established and peaceful residential neighbourhoods. The elevated setting offers beautiful mountain views while keeping guests remarkably close to Whistler Village and the slopes.",
      "One of the best features of the location is the ability to reach the Village without needing a car. The Valley Trail and Whistler Golf Course are approximately a one-minute walk from the home, and a beautiful scenic walk of about 25 minutes brings you directly into Whistler Village. For a quicker trip, Whistler Village and the gondolas are approximately a 3 to 4 minute drive away. The Route 6 Blueberry/Tapley's bus also stops just steps from the property and provides convenient service directly into Whistler Village.",
      "This makes Falcon an excellent option for groups who want the space, privacy and mountain setting of a large chalet without feeling far removed from the restaurants, skiing, shopping and energy of Whistler Village.",
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
