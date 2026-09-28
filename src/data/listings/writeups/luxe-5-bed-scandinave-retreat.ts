import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const luxeScandinaveRetreatWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "An ideal family ski home just 400m (8 min walk) to Whistler Creekside Gondola. Stunning, unobstructed views of the Tantalus Range, Alpha and Nita Lakes. Perfect for 1 large family, 3 couples, or 2 families.",
      "This 1,450 sqft, 3-bedroom, 5-bed, architecturally designed home features vaulted ceilings, a steam shower, kids' triple bunk room, heated floors, a cozy living area with fireplace, and a kitchen for family dinners. Enjoy 2 free parking spots, A/C, and ski storage.",
    ],
    highlights: [
      "3 bedrooms, 5 beds",
      "400m to Creekside Gondola",
      "Tantalus Range views",
      "Steam shower in master",
      "Triple bunk kids' room",
      "Private ski/bike storage shed",
      "Central air conditioning",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 2,
      alt: "Scandinave retreat living space",
    },
    paragraphs: [
      "This 1,450 sqft townhouse offers privacy and comfort across 6 unique half-levels. Renovated professionally, it combines luxury with family-friendly design.",
      "Entry level includes boot and glove dryers and ample space for gear. The open-concept kitchen and dining area seats 10 and is stocked with essentials including salt, oils, flour and sugar. The living area has a large custom couch, gas fireplace, HD TV and private deck.",
      "Heated floors, central air conditioning throughout the home and bedrooms, board games, kids' books and crafts, Amazon Prime, Disney+, Netflix, 2 parking spots, and secure ski and bike storage. Ski and bike storage: private storage area for skis and bikes, very rare to have your own private shed with plenty of room for multiple bikes and skis. Room for 2 bikes in storage plus room to lock up more outside.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 2,
      alt: "Creekside neighbourhood near Scandinave retreat",
    },
    paragraphs: [
      "One of the biggest advantages of this home is how easily you can enjoy Creekside without needing to stay right in the centre of it. The Creekside Gondola is approximately 400 metres away, making ski days simple, while Alpha Lake and Nita Lake are also close by for walking, biking and summer days by the water. Restaurants, cafes, groceries and the rest of Creekside Village are all within easy reach.",
      "Creekside Village is a quiet, family-friendly alternative to Whistler Village, just minutes away. It includes a grocery store, liquor store, ski rentals, Whistler Kids programs, Dusty's Pub, and Starbucks. The Creekside Gondola is only an 8-minute walk (400m) away. Free day parking is available nearby if you prefer to drive. Enjoy mountain views and lakeside access with Alpha and Nita Lakes close by for year-round activities.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Three bedrooms across the townhouse half-levels.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Bedroom 1, Master Suite",
            details:
              "King bed, antique desk, cozy reading chair, ensuite with steam shower and in-suite laundry. Central air conditioning available in this bedroom.",
          },
          {
            name: "Bedroom 2, Kids' Room",
            details:
              "Unique triple bunk (queen plus 2 singles), daybed with trundle. Central air conditioning available in this bedroom.",
          },
          {
            name: "Bedroom 3, Loft Suite",
            details:
              "Queen bed, ensuite, HD TV, and lounge couch. Central air conditioning available in this bedroom.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have access to the entire townhouse, including a private deck, 2 parking spots, secure outdoor storage for skis and bikes, and high-speed WiFi with streaming services. A foldable travel cot for infants is available upon request.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "No pets, no smoking.",
      "The road to Creekside Village/Gondola is downhill. After a long ski day, it may be a challenge for younger kids or tired adults to walk.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00013716",
      "Provincial registration number: PM853760155",
    ],
  },
};

export default luxeScandinaveRetreatWriteup;
