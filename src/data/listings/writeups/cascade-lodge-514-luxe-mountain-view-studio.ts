import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const cascadeLodge514Writeup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to this newly renovated luxe mountain-view studio at Cascade Lodge, set at the gateway to Whistler Village with stunning alpine views. The open studio layout combines a queen bed, sofa bed, kitchenette and Smart TV in a comfortable basecamp for couples, friends or a small family.",
      "After a day on the mountain or exploring the Village, unwind with access to Cascade Lodge's heated outdoor pool, hot tubs, saunas and fitness room, plus complimentary ski valet in the lobby during winter stays.",
    ],
    highlights: [
      "Luxe studio layout",
      "Mountain views",
      "Heated outdoor pool",
      "Hot tubs and saunas",
      "Complimentary ski valet",
      "Gateway to Whistler Village",
      "Sleeps up to 4 guests",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 0,
      alt: "Cascade Lodge #514 studio",
    },
    paragraphs: [
      "This luxe studio offers an efficient open layout with mountain views, a queen bed for two guests and a sofa bed for additional sleeping space. The kitchenette is ideal for breakfasts, snacks and light meals, while the Smart TV keeps evenings relaxed after time on the slopes or Village strolls.",
      "The renovated interiors create a bright, modern feel with the comforts you need for a Whistler stay without sacrificing location or building amenities.",
    ],
  },
  location: {
    title: "Location & Village Access",
    imageSide: "left",
    image: {
      photoIndex: 0,
      alt: "Cascade Lodge at the gateway to Whistler Village",
    },
    paragraphs: [
      "Cascade Lodge sits on Northlands Boulevard at the gateway to Whistler Village, putting shops, restaurants and Village strolls within easy reach.",
      "Whistler Mountain is approximately a 9-minute walk away. During winter, ski lifts are also accessible via a short walk or complimentary Village shuttle. Whistler and Blackcomb offer more than 8,100 acres of terrain for skiing and snowboarding.",
      "Guests enjoy shared access to Cascade Lodge's heated outdoor pool, hot tubs, saunas and fitness room. Complimentary ski valet in the lobby makes storing and retrieving equipment easy during winter stays. The pool and hot tubs are outdoor facilities. Availability may vary during heavy snow, cold temperatures or icy conditions for guest safety.",
      "Paid parking is available on site. Additional vehicles may require separate arrangements.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Open studio, comfortably sleeping up to four guests.",
    floors: [
      {
        label: "Studio",
        hideLabel: true,
        bedrooms: [
          {
            name: "Studio",
            details:
              "Queen bed plus sofa bed in an open layout, comfortably sleeping up to four guests.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire studio throughout their stay, plus shared building amenities including the pool, hot tubs, saunas, fitness room and ski valet.",
      "Self check-in makes arrival easy, with access instructions provided before your stay.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "No pets allowed.",
      "Check-in after 4:00 PM. Check-out before 10:00 AM. 4 guests maximum.",
      ACEHOST_REACH_OUT_NOTE,
    ],
  },
};

export default cascadeLodge514Writeup;
