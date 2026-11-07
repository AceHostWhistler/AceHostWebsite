import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_CORE,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_REQUEST_GENERAL,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const cozyLakefrontWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Wake up to Green Lake and mountain views from this stylish top-floor 2BR/2BA retreat at prestigious Nicklaus North. Sleeping 7, the home features high ceilings, a fireplace, full kitchen and 200 sq. ft. patio overlooking the golf course.",
      "Table Nineteen is just downstairs, with golf and the Valley Trail outside your door. Whistler Village and the gondolas are a quick drive away from the quieter north side. Includes free underground parking plus ample free outdoor parking.",
    ],
    highlights: [
      "Top-floor 2-bedroom, 2-bathroom condo",
      "Sleeps up to 7 guests",
      "Green Lake, mountain and golf course views",
      "Private 200 sq. ft. patio",
      "Table Nineteen downstairs",
      "Free underground parking",
      "5 to 7 min drive to Village",
      "Portable A/C May 15 to Oct 15",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Cozy Lakefront Condo interior",
    },
    paragraphs: [
      "Welcome to one of Whistler's most peaceful and convenient year-round locations. This bright, updated top-floor condo is located directly at Nicklaus North Golf Course, overlooking Green Lake, the surrounding mountains and the fairways below.",
      "The home offers approximately 1,000 sq. ft. of interior space, 2 bedrooms, 2 full bathrooms and flexible sleeping for up to 7 guests. High ceilings and large windows make the main living area feel bright and open, while the fireplace, comfortable seating and beautiful views create a cozy place to return to after skiing, golfing or exploring Whistler.",
      "The living room is designed around the views, with high ceilings, comfortable seating, a fireplace and access to the private patio. Enjoy a quiet morning overlooking Green Lake, relax after a day on the mountain, or sign in to your preferred streaming services on the Smart TV.",
      "The full kitchen includes a stove, oven, microwave, refrigerator, dishwasher, cookware, dishes and generous counter space. Coffee, tea, salt, pepper, olive oil and basic cleaning supplies are also provided.",
      "The approximately 200 sq. ft. patio is one of the best features of the home. Enjoy your morning coffee, relax in the sun, watch golfers play the course below, or take in the peaceful Green Lake and mountain setting.",
      "Ultra-high-speed 300 Mbps fibre internet, a Smart TV, a Bose Bluetooth speaker, a dedicated workspace, and an in-suite washer and dryer are included. A portable A/C unit is located in the Primary Bedroom and is available seasonally from May 15 to October 15. The home does not have central air conditioning.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "left",
    image: {
      photoIndex: 2,
      alt: "Cozy Lakefront Condo kitchen and living area",
    },
    paragraphs: [
      "Nicklaus North offers a rare combination of natural surroundings and easy access to Whistler Village. Table Nineteen is located just downstairs, while the golf course, Green Lake and Valley Trail are immediately outside. Whistler Village, the gondolas, shops and restaurants are only a short drive away. In winter, you approach the Village and ski lifts from the quieter north side of Whistler, avoiding the heavier Creekside-to-Village traffic that often builds from the south.",
      "Nicklaus North is one of Whistler's most beautiful, quiet and family-friendly neighbourhoods. The home is surrounded by Green Lake, mountain scenery, forest and the renowned Nicklaus North Golf Course, yet it remains only a short drive from Whistler Village and the gondolas. It is an excellent choice for guests who want convenient access to everything Whistler offers without staying in the middle of the Village crowds and nightlife.",
      "Table Nineteen restaurant and bar is located just downstairs at the Nicklaus North clubhouse. It is known for its lakeside setting, mountain views, relaxed atmosphere and beautiful summer patio. Restaurant hours and services vary seasonally.",
      "During the summer, the location is exceptional for golf trips. Nicklaus North Golf Course, its practice facilities and clubhouse are directly outside the building. The Valley Trail is also immediately accessible for walking, running and biking. Green Lake provides a beautiful backdrop, with floatplanes arriving and departing nearby throughout the summer.",
      "In winter, the home offers convenient access to Whistler Village and the ski lifts without the noise and crowds of staying directly in the Village. Because Nicklaus North is located just north of the Village, guests approach the gondolas from the quieter side of town rather than travelling through the busier Creekside corridor. Nearby sections of the Valley Trail and Green Lake trails can also be used for winter walking and, when conditions permit, cross-country skiing.",
      "The neighbourhood is peaceful, secure and away from late-night Village activity. It is an excellent setting for families, couples, golf groups or anyone looking for a quieter Whistler stay while remaining close to the main resort.",
      "This property is not ski-in/ski-out. Whistler Village and the main gondolas are approximately 5 to 7 minutes away by car.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Maximum occupancy is 7 guests across 2 bedrooms and a living-room sofa bed.",
    floors: [
      {
        label: "Top floor",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary Bedroom",
            details:
              "King bed with a high-quality mattress, a large walk-in closet, and a beautiful lake and mountain outlook.",
          },
          {
            name: "Bedroom 2",
            details:
              "Twin-over-Full bunk bed plus a separate Twin bed, with a large closet.",
          },
          {
            name: "Living Room",
            details:
              "Pull-out sofa bed for 1 or 2 additional guests, located in the shared living room.",
          },
        ],
      },
    ],
    footnote:
      "Primary bathroom: bathtub and shower combination, with towels and essential toiletries provided. Second bathroom: walk-in shower, with towels and essential toiletries provided. Parking is a major advantage of this property. One guaranteed free underground parking spot is included with your reservation. Additional free outdoor guest and golf course parking is normally available directly outside the building. We have previously hosted groups arriving with 4 or 5 vehicles without any issues. However, only the underground spot is specifically guaranteed, and the additional outdoor spaces are subject to availability. This makes the property especially convenient for families, golf groups and guests travelling to Whistler in multiple vehicles.",
  },
  stay: acehostStay({
    included: ACEHOST_INCLUDED_CORE,
    request: ACEHOST_REQUEST_GENERAL,
  }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire condo and private patio. The building is secure. A rotating building entry code and front-door code will be provided before arrival. A key and building fob will also be left inside the condo for use during your stay.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "Maximum occupancy is 7 guests.",
      "One underground parking spot is guaranteed. Additional outdoor guest and golf course parking is normally available, but these spaces are not individually reserved.",
      "The portable A/C unit is located in the Primary Bedroom and is available seasonally from May 15 to October 15. The home does not have central air conditioning.",
      "The pull-out sofa bed is located in the shared living room.",
      "This property is not ski-in/ski-out. Whistler Village and the main gondolas are approximately 5 to 7 minutes away by car.",
      "Table Nineteen's operating days and hours change seasonally.",
      "No smoking.",
      "No pets.",
      "No parties or events.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00013056",
      "Provincial registration number: PM641948628",
    ],
  },
};

export default cozyLakefrontWriteup;
