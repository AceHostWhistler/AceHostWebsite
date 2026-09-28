import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const golfCourseViewsWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "This cozy, standalone chalet sits right on Nicklaus North Golf Course with stunning views of Hole 14. Enjoy a private hot tub, media room, wood-burning fireplace, and chef's kitchen. Just a short drive to Whistler Village and the ski lifts, plus being north of the village helps you skip the city traffic after skiing.",
    ],
    highlights: [
      "On Nicklaus North Hole 14",
      "Private hot tub",
      "Media room",
      "Chef's kitchen, seats 10",
      "Wood-burning fireplace",
      "7-9 minute drive to Village",
      "North of Village for easier drives",
    ],
  },
  walkthrough: {
    reelId: "DQCt3vQAR-3",
    title: "Muirfield Golf Course Views Walkthrough Video",
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Golf course views chalet interior",
    },
    paragraphs: [
      "Tucked into one of Whistler's most desirable year-round locations, this warm and welcoming chalet sits directly on the 14th hole of the iconic Nicklaus North Golf Course. In summer, enjoy lush green views from your private backyard, watch golfers play through, sip your morning coffee in the sun, or fire up the grill for an evening BBQ with the mountains as your backdrop. It's the perfect setting for a relaxed, scenic escape.",
      "Inside, the home blends natural wood and stone textures with modern comforts. The open-concept layout includes a cozy living area with a wood-burning fireplace, a spacious dining table for 10, a breakfast nook, and a fully equipped chef's kitchen. A separate media room makes movie nights easy and fun for the whole group.",
      "Enjoy stunning views of the surrounding mountains and golf course from this beautiful property. The chalet's exterior showcases classic mountain architecture with modern touches, perfectly complementing the natural surroundings. The property offers ample outdoor space for relaxation and entertainment, with easy access to the golf course and nearby trails.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Nicklaus North golf course setting",
    },
    paragraphs: [
      "This property is ideally located on the Nicklaus North Golf Course, offering stunning views and a peaceful setting. It's just a short 7-9 minute drive to Whistler Village and the ski lifts. Being north of the village means you can avoid the Vancouver day-tripper traffic congestion after skiing.",
      "In winter, you are just a quick 7-9 minute drive to the heart of Whistler Village and the ski lifts. The location is perfect for both summer golf getaways and winter ski holidays, providing easy access to all of Whistler's attractions while enjoying a tranquil setting away from the hustle and bustle. In summer, the lush green surroundings create a peaceful retreat, while winter brings a magical snowy landscape just minutes from Whistler's world-class skiing.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Four bedrooms throughout the home.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Bedroom 1 (primary)",
            details: "King bed and TV with tub and shower (separate).",
          },
          {
            name: "Bedroom 2",
            details: "King bed and ensuite with tub-shower.",
          },
          {
            name: "Bedroom 3",
            details: "2 single beds.",
          },
          {
            name: "Bedroom 4",
            details: "1 single bed and TV.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    notes: [ACEHOST_VIP_CONCIERGE_NOTE, ACEHOST_REACH_OUT_NOTE],
    registration: [
      "Municipal registration number: 00015211",
      "Provincial registration number: PM264215843",
    ],
  },
};

export default golfCourseViewsWriteup;
