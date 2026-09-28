import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const snowPineWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Snowpine, a modern 3-bedroom Creekside retreat just a 5-minute walk from the Creekside Gondola. Designed for up to 6 guests, the home features three spacious bedrooms with private ensuite bathrooms, a private hot tub, fireplace, covered patio, BBQ and outdoor fire pit.",
      "A private garage with Tesla charging adds convenience, while Creekside restaurants, cafés and groceries are close by. Nita Lake, Alpha Lake and the Valley Trail make the location just as strong in summer.",
    ],
    highlights: [
      "5-min walk to gondola",
      "3 ensuite bedrooms",
      "Private hot tub",
      "Tesla charger in garage",
      "Ski locker at Creekside base",
      "Pets allowed",
      "Fire pit & covered patio",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 2,
      alt: "Snowpine interior",
    },
    paragraphs: [
      "Welcome to Snowpine, a contemporary Creekside mountain home designed for families and groups who want the space and privacy of a chalet while staying within an easy 5-minute walk of the Creekside Gondola.",
      "The bright open-concept main level brings the kitchen, dining and living areas together, creating a comfortable space for everyone to gather after a day on the mountain. Modern finishes and appliances are complemented by a cozy fireplace, plenty of natural light and a relaxed Whistler atmosphere.",
      "Outside, enjoy your private hot tub, covered patio, BBQ and outdoor fire pit. Whether you are soaking after skiing, having dinner outside or relaxing around the fire, the outdoor spaces make the home especially enjoyable throughout the year.",
      "One of Snowpine's biggest advantages is its Creekside location. The Creekside Gondola is only approximately a 5-minute walk from the home, making it incredibly easy to head to Whistler Mountain without driving or dealing with ski-day parking.",
      "A dedicated ski locker at the base of Creekside is included with your stay, so you can store skis and snowboards beside the mountain rather than carrying equipment back to the home every day.",
      "The home includes a single-car garage with plenty of additional space for storing skis, bikes and other outdoor equipment. A dedicated Tesla charger is available in the garage for guests travelling with an electric vehicle.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary:
      "All three bedrooms have their own private ensuite bathroom. Accommodates up to 6 guests across 3 bedrooms and 3 beds, with 3.5 bathrooms.",
    floors: [
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Primary bedroom",
            details:
              "King bed with private ensuite bathroom featuring a large walk-in shower and heated floors. Access to a private balcony.",
          },
        ],
        note: "A powder room is also located on the upper level.",
      },
      {
        label: "Lower Level",
        bedrooms: [
          {
            name: "Bedroom 2",
            details:
              "King bed with a dedicated desk/work area and private ensuite bathroom featuring both a bathtub and shower. Direct access to the balcony and private hot tub.",
          },
          {
            name: "Bedroom 3",
            details:
              "Queen bed with private ensuite bathroom featuring a bathtub and shower.",
          },
        ],
      },
    ],
  },
  location: {
    title: "Location",
    imageSide: "left",
    image: {
      photoIndex: 8,
      alt: "Snowpine bedroom",
    },
    paragraphs: [
      "Snowpine is located in Whistler Creekside, one of the resort's most convenient and popular year-round neighbourhoods. The Creekside Gondola is approximately a 5-minute walk away, while Creekside Village offers groceries, ski rentals, cafés, restaurants and everyday essentials within easy walking distance.",
      "Some of Whistler's best-known restaurants are nearby, including Red Door Bistro, Rimrock Café, Creekbread and Dusty's, along with the restaurants and spa at Nita Lake Lodge. Creekside Market is also nearby for groceries, while the Co-Op convenience store and gas station are just a short walk from the home.",
      "The Valley Trail is nearby, with Nita Lake approximately a 2-minute walk away and Alpha Lake only a few minutes farther, excellent for walking, biking and summer days on the water.",
    ],
  },
  stay: acehostStay({
    included: [
      ...ACEHOST_INCLUDED_SKI,
      "Dedicated ski locker at Creekside base",
      "Tesla charger in garage",
    ],
  }),
  other: {
    title: "Other details",
    notes: [
      "Pets allowed.",
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
  },
};

export default snowPineWriteup;
