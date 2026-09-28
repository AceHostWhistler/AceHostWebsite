import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_CORE,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_REQUEST_GENERAL,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const pembertonMeadowsWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Looking for a remote getaway in a state-of-the-art home? Welcome to Pemberton Meadows Escape. This 5-bed, 5-bath award-winning property was designed with the eye of a leading Japanese architect. At this estate, guests can experience 50 acres of surrounding private land and breathtaking panoramic views of the Pemberton Valley Mountain Range.",
      "This home provides total privacy in a tranquil setting, perfect for families or groups seeking luxury living in a peaceful, natural environment. Included in bookings at Pemberton Meadows, guests enjoy a private chef and butler. Our chefs provide a premium dining experience, using only fresh, locally sourced ingredients from Pemberton Valley farms.",
    ],
    highlights: [
      "50 acres of private land",
      "Private chef included",
      "Private butler included",
      "5 bed, 5 bath estate",
      "Japanese architect design",
      "On-site gym and hot tub",
      "Wedding and event venue",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 0,
      alt: "Pemberton Meadows interior",
    },
    paragraphs: [
      "Pemberton Meadows has modernly furnished rooms, including a grand master bedroom, a bunk room with 4 single beds, and 3 additional bedrooms with King and Queen beds. This elegant property welcomes high-end tasteful furnishings and a sociable open plan living space. The floor to ceiling windows invite ample natural light, creating a welcoming ambience for ultimate relaxation.",
      "Whether you are lounging by the cozy log fireplace, working out in the on-site gym or taking a soak in the hot tub, you will be spoiled by the 360-degree views of the valley and the surrounding mountains. Looking to get active in the great outdoors of British Columbia? Enjoy outdoor activities right on the doorstep of Pemberton Meadows, with an array of scenic hiking trails and natural hot springs. We are more than happy to direct you to our favorite outdoor activities.",
      "Pemberton Meadows Escape is an exceptional wedding venue, offering a stunning backdrop for your special day. The wedding package also includes a 2-night stay at the home, allowing you to fully enjoy the property before and after your celebration. With panoramic mountain views and 50 acres of private land, your wedding will be an unforgettable experience in one of British Columbia's most beautiful settings.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 0,
      alt: "Pemberton Meadows valley views",
    },
    paragraphs: [
      "This luxury escape is located near BC's infamous Lillooet River in the peaceful Pemberton Meadows neighborhood. Within walking distance from the front door, this property has a scenic viewpoint capturing the entirety of the Lillooet River, a perfect spot for taking photos.",
      "If you are looking to host a one-of-a-kind event, such as a wellness or heli-retreat, or even just a simple change of scenery, Pemberton Meadows Escape provides a harmonious blend of both luxury living and outdoor pursuit.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Five bedrooms including a bunk room and grand master suite.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Grand master bedroom",
            details: "Modernly furnished with high-end finishes.",
          },
          {
            name: "Bunk room",
            details: "Four single beds.",
          },
          {
            name: "Three additional bedrooms",
            details: "King and queen beds.",
          },
        ],
      },
    ],
  },
  service: {
    title: "Service at Pemberton Meadows",
    lead: [
      "Private chef included with your booking at Pemberton Meadows.",
      "Private butler included with your booking at Pemberton Meadows.",
    ],
    body: [
      "Our chefs provide a premium dining experience, using only fresh, locally sourced ingredients from Pemberton Valley farms, so your group can enjoy restaurant-quality meals in a completely private setting.",
      "The butler helps your stay run smoothly throughout the estate, supporting dining, household comfort and the relaxed pace of a remote luxury getaway.",
    ],
  },
  stay: acehostStay({
    included: [
      "Private chef",
      "Private butler",
      ...ACEHOST_INCLUDED_CORE,
    ],
    request: ACEHOST_REQUEST_GENERAL,
  }),
  other: {
    title: "Other details",
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "For weddings, the venue fee is between $30,000-35,000 and includes an introduction to our favorite local wedding planner who knows the property intimately, plus a 2-night stay at the home.",
      ACEHOST_REACH_OUT_NOTE,
    ],
  },
};

export default pembertonMeadowsWriteup;
