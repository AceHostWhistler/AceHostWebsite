import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  KADENWOOD_LOCATION_PARAGRAPHS,
} from "./shared";

const slopesideVillaWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Slope Side Chalet in Kadenwood, a true Whistler luxury log chalet with exceptional ski-in/ski-out access directly beside the patio and ski room. Inside, soaring timber ceilings, warm wood finishes, heated stone floors, a grand fireplace and expansive windows create the classic alpine atmosphere. After a day on the mountain, unwind in the private outdoor hot tub, steam shower or home gym.",
    ],
    highlights: [
      "Ski trail beside patio",
      "7 bedrooms, 12 beds",
      "Outdoor hot tub",
      "Home gym and steam shower",
      "Heated stone floors",
      "Media room and Sonos",
      "Private Kadenwood Gondola",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 5,
      alt: "Slope Side Chalet interior",
    },
    paragraphs: [
      "Boasting 7 bedrooms, 12 beds, and 7.5 bathrooms, this property offers an ideal accommodation option for groups and families seeking comfort and space. Indulge and relax in the large steam shower or soak in the outdoor hot tub, with direct views overlooking the scenic valley and lake. If you still have energy after skiing, keep up with your fitness routine in the home gym equipped with yoga mats, weights, and cardio machines.",
      "This home is the perfect mountain retreat, tucked away high on the mountainside in the exclusive and private Kadenwood neighbourhood, providing access to the private Kadenwood gondola.",
      "The property features easy ski-in ski-out access, a hot tub, a home gym, a media room, a steam shower, built-in Sonos across the main living areas, and private access to the Kadenwood gondola. The living room has a very large HD screen TV (not shown in all photos), with access to Netflix, Amazon Prime, and a TSN subscription for live sports.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Slope Side Chalet in Kadenwood",
    },
    paragraphs: [
      "Slope Side is exceptionally well positioned within Kadenwood, with the ski trail running directly beside the home for convenient access to and from Whistler Mountain. The private Kadenwood Gondola connects the neighbourhood with Creekside Village in approximately five minutes. Guests can enjoy the quiet and privacy of a mountainside chalet while keeping the lifts, restaurants, cafes and groceries of Creekside within easy reach.",
      ...KADENWOOD_LOCATION_PARAGRAPHS,
      "Located in the exclusive Kadenwood neighbourhood, high on the south side of Whistler Mountain. A five-minute gondola ride, five-minute drive, or quick ski ride down brings you to amenities in Creekside Village, including access to Whistler Mountain via the Creekside Gondola.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    floors: [
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Master Bedroom 1",
            details:
              "Beautiful king bed with walk-in closet at the end of the corridor for ultimate privacy. Spacious ensuite walk-in shower and bathtub.",
          },
        ],
      },
      {
        label: "Mid Level",
        note: "One level below the upper level.",
        bedrooms: [
          {
            name: "Bedroom 2",
            details:
              "One queen and one twin bed with ensuite shower. Accessed through the den room, next to Bedroom 3.",
          },
          {
            name: "Bedroom 3",
            details:
              "Single bed and bunk bed (twin on top, queen below). Ensuite bathroom with shower and bathtub.",
          },
          {
            name: "Bedroom 8 (half bedroom)",
            details:
              "Cozy queen bed on the mezzanine loft above the den room.",
          },
        ],
      },
      {
        label: "Main Level",
        bedrooms: [
          {
            name: "Bedroom 4",
            details:
              "Plush king bed beside the living room. Powder bathroom on this floor; ground floor bathroom with walk-in shower can also be used.",
          },
        ],
      },
      {
        label: "Lower Level",
        note: "Additional large bathroom on this floor with a large steam shower.",
        bedrooms: [
          {
            name: "Bedroom 5",
            details:
              "Bunk bed with bottom double and top twin. Ensuite bathroom with shower. Next to Bedroom 6.",
          },
          {
            name: "Bedroom 6",
            details:
              "Queen bed with ensuite shower. Spacious room with patio door access to the backyard.",
          },
          {
            name: "Bedroom 7",
            details:
              "Queen bed with ensuite bathroom and shower. Direct access to the hot tub.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire home, including the garage, driveway, private hot tub, ski room, gym and all advertised living spaces and amenities.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
      "Pets allowed with approval. Assistance animals are always allowed. No pets unless requested and approved.",
      "Air conditioning is not included at this property.",
      "Outdoor amenities include private hot tub, ski-in/ski-out access, mountain views, and private deck or patio. Interior highlights include heated stone floors, large steam shower, fully equipped gym, indoor fireplace, large HD TV, and media room with built-in Sonos. Essentials include WiFi, washer and dryer, fully equipped kitchen, dining table, outdoor dining area, dedicated ski room, heating, and private Kadenwood gondola access.",
    ],
    registration: [
      "Municipal registration number: 00013203",
      "Provincial registration number: PM667513563",
    ],
  },
};

export default slopesideVillaWriteup;
