import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const rare3BedVillageWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "A rare Whistler Village chalet with the space and privacy of a home, just steps from restaurants, shops and the mountain. Spread across two levels, this 3-bedroom retreat features oversized wraparound balconies, mountain views, a private hot tub and cozy fireplace. One of its standout features is two guaranteed designated underground parking spaces, exceptionally rare for a central Village property, so groups arriving in multiple vehicles can park with ease and walk almost everywhere.",
    ],
    highlights: [
      "3 bedrooms · 3 baths",
      "Private hot tub (only in complex)",
      "2 guaranteed parking stalls",
      "Wraparound balconies",
      "7-10 min walk to lifts",
      "Granite Court, Village",
      "Summer portable AC",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 0,
      alt: "3-BDRM Whistler Village walk to hill",
    },
    paragraphs: [
      "Step into a true Whistler classic reimagined for modern comfort. Spread across two spacious levels, the home combines the privacy and space of a chalet with one of the most convenient locations in Whistler Village.",
      "The main living level features an open-concept living and dining area, cozy indoor fireplace and large windows that bring in plenty of natural light. Comfortable furnishings create an easy gathering space for families and groups after a day on the mountain.",
      "Two oversized wraparound balconies provide exceptional outdoor living space with views over Whistler Village and the surrounding mountains. The highlight is your own private hot tub (with the best views), the only private hot tub in the complex, creating the perfect place to unwind after skiing, biking or exploring Whistler.",
      "Portable air-conditioning units are available from May 15 through October 15, with one located in the main living area and one in the primary bedroom. Whistler evenings are generally cooler, and the units provide additional comfort during warmer summer periods.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "left",
    image: {
      photoIndex: 20,
      alt: "Whistler, British Columbia, Canada",
    },
    paragraphs: [
      "One of the biggest advantages of this home is its location directly in Whistler Village. Restaurants, cafés, shops and groceries are all within easy walking distance, while the ski lifts are approximately 7-10 minutes away on foot. Once you arrive, most guests rarely need to use a vehicle during their stay.",
      "An especially rare feature for a 3-bedroom home in central Whistler Village is that two designated underground parking spaces are guaranteed with every stay. Many Village properties offer only one stall, visitor parking subject to availability or paid public parking, making two guaranteed stalls particularly valuable for families and groups arriving in multiple vehicles. Both vehicles can remain securely parked underground while you walk to the lifts, restaurants, shops and other Village amenities. The underground parkade has approximately 7 feet of clearance. Private locked ski and bike storage is also available for guest use.",
      "Granite Court is ideally located in the heart of Whistler Village, offering the convenience of a central location with a quieter residential feel. Restaurants, cafés, shops and Village amenities are all within easy walking distance, while the Whistler and Blackcomb gondolas are approximately a 7-10 minute walk from the home.",
      "Fresh St. Market, Whistler's largest and best full-service grocery store, is directly across the street, making it incredibly convenient to stock up on groceries, drinks, snacks and anything else needed during your stay without having to drive.",
      "The location makes it especially easy to enjoy Whistler without relying on a vehicle. Guests can walk to breakfast, après-ski, dinner, shopping and the lifts, then return to a more peaceful setting away from the busiest parts of the Village.",
      "The Valley Trail and nearby pedestrian paths also make it easy to explore Whistler on foot or by bike, with quick connections toward Lost Lake, the golf course and surrounding neighbourhoods. For guests arriving by car, the home's two guaranteed underground parking spaces are an especially valuable bonus in such a central Village location.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "3 bedrooms plus living room sofa bed.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary Bedroom",
            details: "Queen bed with private ensuite bathroom.",
          },
          {
            name: "Bedroom 2",
            details: "King bed.",
          },
          {
            name: "Bedroom 3",
            details: "Double bed.",
          },
          {
            name: "Living Room",
            details: "Queen pullout sofa.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Staircase: Please note there is one flight of stairs to enter the unit. It is manageable and convenient for nearly all guests, including most elderly guests, but we like to be upfront so there are no surprises for anyone with mobility limitations or personal preferences. The benefit here is that the home sits slightly elevated, allowing for beautiful scenic views over Whistler Village and the surrounding mountains.",
      "The entire home and hot tub is private to your group/booking.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00015503",
      "Provincial registration number: PM526794239",
    ],
  },
};

export default rare3BedVillageWriteup;
