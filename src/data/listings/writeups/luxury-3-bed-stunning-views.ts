import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const marquisePenthouseWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to this spacious 1,100 sq. ft. Marquise penthouse-style retreat with some of the best Fairmont and mountain views in Whistler. Enjoy 2 bedrooms, 2 bathrooms, a cozy fireplace, private patio, full kitchen and A/C, with room for up to 6 guests. After skiing, relax in the glass-domed hot tub, outdoor pool, sauna or gym.",
      "The slopes, Upper Village, Lost Lake and Whistler Village are all close by, making this an exceptional year-round base on Blackcomb Mountain.",
    ],
    highlights: [
      "Fairmont and mountain views",
      "1,100 sq. ft. layout",
      "Glass-domed hot tub",
      "Heated outdoor pool",
      "Sauna and gym",
      "Private patio",
      "2 bedrooms, 3 beds",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 7,
      alt: "Marquise Penthouse interior",
    },
    paragraphs: [
      "Welcome to a spacious 1,100 sq. ft. retreat on Blackcomb Mountain, combining beautiful mountain views, resort-style amenities and convenient ski access with considerably more room than a typical Whistler condo.",
      "One of the first things you will notice is the outlook. The home looks toward the Fairmont Chateau Whistler and surrounding mountains, creating a classic Whistler backdrop from both the living spaces and private patio.",
      "The main living area features a cozy gas fireplace, comfortable seating and plenty of room to relax together after a day outdoors. A queen sleeper sofa provides additional sleeping space, while cable TV, Netflix and fast Wi-Fi make evenings at home easy.",
      "The fully equipped kitchen includes a stove, oven, microwave, refrigerator, coffee maker and cooking essentials. The dining area offers generous seating for family meals, takeout nights or entertaining.",
      "A newer air-conditioning unit is located in the main living area and provides cooling throughout the condo during warmer summer days.",
    ],
  },
  location: {
    title: "Location & Village Access",
    imageSide: "left",
    image: {
      photoIndex: 12,
      alt: "Marquise Penthouse bedroom",
    },
    paragraphs: [
      "The Marquise is positioned on Blackcomb Mountain with convenient access to the slopes, making it an excellent base for ski-focused trips. Guests can access Blackcomb without needing to drive, while Upper Village and the Blackcomb Gondola area are only a short distance away. When the ski day ends, return to the quieter Benchlands setting, relax by the fireplace or head downstairs to the hot tub, pool and sauna.",
      "Guests have access to a glass-domed hot tub, heated outdoor pool, sauna, fitness centre and secure ski, snowboard and bike storage. The glass-domed hot tub is particularly enjoyable during winter, offering a warm place to relax after skiing while still feeling connected to the mountain environment outside.",
      "The home enjoys a quieter Blackcomb setting while keeping the resort close. Upper Village, the Blackcomb Gondola, Fairmont Chateau Whistler and surrounding restaurants are nearby, while the main Whistler Village can be reached by walking or using the complimentary local shuttle. Lost Lake, walking trails, biking routes and parks are also close by, making this a strong location throughout summer as well as winter.",
      "Covered parking is available in the building for approximately $26 CAD per night, payable through the building. The underground parkade has a height clearance of approximately 6'6\".",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Up to 6 guests across 2 bedrooms and 3 beds, with two full bathrooms.",
    floors: [
      {
        label: "Penthouse",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary bedroom",
            details:
              "King bed, private patio access with views, vanity area and direct access to a full bathroom.",
          },
          {
            name: "Bedroom 2",
            details: "Queen bed with private ensuite bathroom and bathtub.",
          },
          {
            name: "Living room",
            details: "Queen pullout sofa for additional guests.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire condo, including both bedrooms, bathrooms, living spaces, kitchen and private patio.",
      "You will also have full access to The Marquise's shared outdoor pool, glass-domed hot tub, sauna, fitness centre and secure gear storage.",
      "Self check-in is available via smart lock, making arrival simple and flexible.",
    ],
    notes: [ACEHOST_VIP_CONCIERGE_NOTE, ACEHOST_SKI_PASS_NOTE, ACEHOST_REACH_OUT_NOTE],
    registration: [
      "Municipal registration number: 00011211",
      "Provincial registration number: PM910753876",
    ],
  },
};

export default marquisePenthouseWriteup;
