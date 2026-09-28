import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const northlandsWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to this unique 3-level townhome-style retreat in Whistler Village, offering more space and privacy than a typical condo. With 2 bedrooms, 4 beds and 3 full bathrooms, it is ideal for families, couples and small groups. Enjoy a shared hot tub steps from the front door, a private exterior entrance and free underground parking. Fresh St Market is directly across the street, restaurants and shops surround you, and the gondolas and ski lifts are an easy walk away, so a car is rarely needed.",
    ],
    highlights: [
      "3-level townhome layout",
      "2 bedrooms · 4 beds · 3 baths",
      "Shared hot tub steps away",
      "Private exterior entrance",
      "Underground parking included",
      "Symphony, Village North",
      "12-15 min walk to gondolas",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Symphony interior",
    },
    paragraphs: [
      "This unique three-level home gives you the convenience of a central Whistler Village condo with much more separation and privacy than a typical single-level unit. A private exterior entrance adds to the townhome feel, while the layout works especially well for families, couples and small groups travelling together.",
      "The main living level features a comfortable lounge and dining area where the group can gather after a day on the mountain, along with a fully equipped kitchen for breakfast, dinner or an easy night at home.",
      "One of the biggest advantages of the layout is having three full bathrooms for only two bedrooms, a rare convenience in a Whistler Village property and especially useful when everyone is getting ready for the mountain or an evening out.",
      "Guests have access to the Symphony complex hot tub located just steps from the home's front entrance. It is an easy place to unwind after skiing, hiking or biking before heading back inside for the evening.",
      "One complimentary underground parking space is included with your stay. The parkade has approximately 6'8\" of clearance. Additional paid parking is available nearby if your group is travelling with more than one vehicle. Given the central location and walkability, many guests find they rarely need their car once they have arrived.",
      "A powerful air-conditioning system is located in the main living area, providing additional comfort throughout the home during Whistler's warmer summer periods.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "left",
    image: {
      photoIndex: 8,
      alt: "Symphony living area",
    },
    paragraphs: [
      "The Symphony complex is exceptionally well positioned in Whistler Village North, with Marketplace and Fresh St. Market directly across the street. Groceries, restaurants, cafés, shops and everyday essentials are all within easy walking distance.",
      "The pedestrian Village Stroll begins nearby and leads through the heart of Whistler toward restaurants, shopping, après-ski and the mountain. The Whistler and Blackcomb gondolas and ski lifts are approximately a 12-15 minute walk away, making it easy to enjoy the resort without relying on a vehicle.",
      "The Whistler Racquet & Pickleball Club is immediately next door for guests looking for additional recreation, while the surrounding Village paths make it easy to explore Whistler on foot throughout the year.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Accommodates up to 6 guests across 2 bedrooms and 4 beds.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary Bedroom",
            details: "King bed with private ensuite bathroom.",
          },
          {
            name: "Bedroom 2",
            details:
              "Two single Murphy beds with private ensuite bathroom, creating a flexible setup for children, friends or individual sleepers.",
          },
          {
            name: "Living Room",
            details:
              "Pullout sofa bed for additional sleeping space, with access to the home's third full bathroom.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have exclusive access to the entire three-level home during their stay, including the private exterior entrance and all three levels of living space. You will also have access to the Symphony complex hot tub, located just steps from the front door, as well as one complimentary designated underground parking space. The home has its own private entrance rather than a shared interior hotel-style hallway, giving it more of a true townhome feel while still offering the convenience of a central Whistler Village location. The building and home are accessed using the entry instructions provided before check-in, allowing for a simple and flexible arrival.",
    ],
    notes: [
      "Primary bedroom with king bed and ensuite bathroom; private exterior entrance; three-level townhome-style layout; 3 full bathrooms; fully equipped kitchen; shared hot tub steps from the home; complimentary underground parking; Fresh St. Market directly across the street; Whistler Racquet & Pickleball Club next door; easy walking access to restaurants, shops and ski lifts.",
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00015534",
      "Provincial registration number: PM817047827",
    ],
  },
};

export default northlandsWriteup;
