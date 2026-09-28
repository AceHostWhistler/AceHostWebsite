import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const cascadeLodge615Writeup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Find ease, comfort and spectacular mountain beauty at this sixth-floor getaway in Cascade Lodge, wonderfully positioned at the gateway to Whistler Village. Enjoy premium forest and mountain views from your private balcony, a well-equipped full kitchen, a cozy gas fireplace, and the convenience of in-unit washer and dryer.",
      "Whether you plan to spend your days skiing, mountain biking or exploring the Village, you will be within walking distance of shops, restaurants and lifts, with shared on-site amenities that include a heated outdoor pool, hot tubs, saunas and a fitness room.",
    ],
    highlights: [
      "6th-floor premium views",
      "Private balcony",
      "Gas fireplace",
      "Full kitchen",
      "In-unit laundry",
      "Heated pool and hot tubs",
      "Complimentary ski valet",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 4,
      alt: "Cascade Lodge #615 living area",
    },
    paragraphs: [
      "This premium one-bedroom condo on the sixth floor offers an elevated perspective over the forest and mountains surrounding Whistler Village. The living area is designed for relaxing après with a gas fireplace, dining table and comfortable seating, while the full kitchen gives you everything you need for home-cooked meals between mountain adventures.",
      "Step out onto the private balcony to take in the views, or unwind inside after a day on the slopes. In-unit laundry makes longer stays easy, and the updated interior features modern finishes throughout.",
    ],
  },
  location: {
    title: "Location & Village Access",
    imageSide: "left",
    image: {
      photoIndex: 4,
      alt: "Cascade Lodge premium mountain views",
    },
    paragraphs: [
      "Cascade Lodge sits on Northlands Boulevard at the gateway to Whistler Village, putting shops, restaurants, the Whistler Museum and Village strolls within easy reach.",
      "During winter, ski lifts are within a short walk or complimentary Village shuttle ride. Whistler and Blackcomb mountains offer more than 8,100 acres of terrain, with the Peak 2 Peak Gondola nearby for unforgettable alpine views.",
      "Guests enjoy shared access to Cascade Lodge's heated outdoor pool, hot tubs, saunas and fitness room. Complimentary ski valet in the lobby makes storing and retrieving equipment easy during winter stays. The pool and hot tubs are outdoor facilities. Availability may vary during heavy snow, cold temperatures or icy conditions for guest safety.",
      "Paid parking is available for one vehicle. Additional vehicles may require separate arrangements.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "1 bedroom plus living-area sleeping, up to four guests.",
    floors: [
      {
        label: "Condo",
        hideLabel: true,
        bedrooms: [
          {
            name: "Bedroom",
            details: "A comfortable primary sleeping area for two guests.",
          },
          {
            name: "Living area",
            details:
              "Additional sleeping space for up to two more guests, ideal for couples, friends or a small family.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire condo throughout their stay, plus shared building amenities including the pool, hot tubs, saunas, fitness room and ski valet.",
      "Self check-in makes arrival easy, with access instructions provided before your stay.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "No pets allowed.",
      "Check-in after 4:00 PM. Check-out before 10:00 AM. 4 guests maximum.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00010692",
      "Provincial registration number: ST626835225",
    ],
  },
};

export default cascadeLodge615Writeup;
