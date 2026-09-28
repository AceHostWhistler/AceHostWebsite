import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const marquise2BedWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to this ski-in/ski-out retreat at The Marquise, perfectly positioned on Blackcomb Mountain. This main-floor condo features a brand-new Puffy Royal King bed, Queen pullout sofa, fireplace, private ski storage and free parking.",
      "After skiing, unwind in the heated outdoor pool, hot tub or gym, then walk to Upper Village, the Fairmont and Four Seasons in about 5 minutes. In summer, Whistler Village, Lost Lake, biking trails and mountain adventures are all close by and walking distance.",
    ],
    highlights: [
      "True ski-in / ski-out",
      "Main-floor convenience",
      "Puffy Royal King bed",
      "Heated outdoor pool",
      "Hot tub and gym",
      "Free parking included",
      "Private ski storage",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 4,
      alt: "Marquise ski-in ski-out interior",
    },
    paragraphs: [
      "Welcome to your ski retreat at The Marquise, ideally positioned on Blackcomb Mountain for guests who want mountain access to be the centre of their Whistler stay.",
      "Being on the main floor makes coming and going with skis and gear especially convenient. In winter, head out for a day on Blackcomb without getting in the car, then return home and transition straight into après-ski mode with the building's heated pool, hot tub and fitness centre nearby.",
      "Inside, the condo is comfortable and well equipped for couples, small families or friends. The living area provides a relaxing place to unwind after the mountain, while the full kitchen gives you the option of cooking at home when you are not exploring Whistler's restaurants. A full-size washer and dryer are included in the unit, making it easy to handle laundry during your stay.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 4,
      alt: "The Marquise on Blackcomb Mountain",
    },
    paragraphs: [
      "The location is built around skiing. The Marquise sits directly on Blackcomb Mountain with convenient ski access, allowing guests to get onto the mountain without driving or dealing with Village parking. Secure ski storage is included, so equipment can stay safely stored and easily accessible between mountain days.",
      "Guests have access to The Marquise's year-round heated outdoor pool, hot tub and fitness centre. After a cold day on the mountain, the hot tub and heated pool make for an easy après-ski option without having to leave the property.",
      "Although the setting feels like a mountain retreat, Upper Village is only approximately a 5-minute walk away. The Fairmont Chateau Whistler, Four Seasons, restaurants, cafés, ski shops and the Blackcomb Gondola area are all nearby, while the main Whistler Village can be reached on foot in approximately 15 minutes.",
      "One complimentary parking space is included with your stay. Additional paid parking is available in the building for extra vehicles at approximately $26 CAD per vehicle, per day. During summer, free street parking may also be available nearby on a first-come basis.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    floors: [
      {
        label: "Main floor",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary bedroom",
            details:
              "Brand-new Puffy Royal King mattress designed for an exceptionally comfortable night's sleep.",
          },
          {
            name: "Living room",
            details:
              "Queen pullout sofa that converts the living area into an additional sleeping space at night.",
          },
        ],
      },
    ],
    footnote:
      "The bathroom also features a bidet toilet for an added touch of comfort.",
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire condo throughout their stay.",
      "You will also have access to the building's heated outdoor pool, hot tub, fitness centre and ski storage facilities.",
      "One complimentary parking space is included.",
      "Self check-in makes arrival easy, with access instructions provided before your stay.",
    ],
    notes: [ACEHOST_VIP_CONCIERGE_NOTE, ACEHOST_SKI_PASS_NOTE, ACEHOST_REACH_OUT_NOTE],
    registration: [
      "Municipal registration number: 00014807",
      "Provincial registration number: PM129480632",
    ],
  },
};

export default marquise2BedWriteup;
