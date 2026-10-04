import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const whisperingPinesWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to one of the most convenient ski-in/ski-out locations on Blackcomb Mountain. This ground-floor 2-bedroom home at The Aspens sits just steps from the slopes and is the closest unit in the building to the pool and three hot tubs.",
      "Inside, enjoy a king primary suite, twin bedroom, fireplace, full kitchen, patio and BBQ. The living room includes a pullout sofa bed that can accommodate 2 additional guests, bringing the home's maximum occupancy to 6. Ski rentals are available right in the building, while Upper Village, Whistler Village, Lost Lake and year-round trails are all within easy reach.",
    ],
    highlights: [
      "True ski-in / ski-out",
      "Ground-floor unit",
      "Closest to pool and hot tubs",
      "Heated pool",
      "Three hot tubs",
      "Patio and BBQ",
      "Ski rentals in building",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 0,
      alt: "The Aspens interior",
    },
    paragraphs: [
      "If skiing is the priority, The Aspens is difficult to beat. This ground-floor home sits directly on Blackcomb Mountain, with true ski-in/ski-out access just steps from the unit and some of the best on-hill convenience in Whistler.",
      "What makes this particular condo even more convenient is its position within the building. It is the closest unit in The Aspens to both the ski slope access and the pool and hot tub area, meaning less time walking through hallways in ski boots and more time enjoying the mountain.",
      "The open living and dining area provides a comfortable place to relax after skiing, centred around a cozy indoor fireplace. The living room includes a pullout sofa bed that can accommodate 2 additional guests, bringing the home's maximum occupancy to 6. Step outside onto the patio for fresh mountain air or use the private BBQ for an easy meal at home. The kitchen is fully equipped and includes a Keurig coffee machine and SodaStream.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 0,
      alt: "The Aspens ski-in ski-out on Blackcomb",
    },
    paragraphs: [
      "The Aspens is located directly on Blackcomb Mountain and offers genuine on-hill ski-in/ski-out convenience. Step outside, grab your equipment and access the mountain within moments. At the end of the day, ski back to the complex and head straight inside without dealing with a vehicle, Village parking or transporting equipment back and forth.",
      "Ski and snowboard rentals are also available directly within The Aspens building, an unusually convenient feature that makes ski days even easier.",
      "Guests have access to a heated outdoor pool and three hot tubs situated directly at the base of Blackcomb Mountain. The pool and hot tub area is only steps from this particular unit, making it incredibly easy to head out for a soak after skiing and return home without crossing the entire building.",
      "The Aspens offers the rare combination of being directly on the mountain while still keeping Whistler's restaurants, shops and Village atmosphere within walking distance. Upper Village and the Blackcomb Gondola area are nearby, while the main Whistler Village can also be reached comfortably on foot.",
      "In summer, Lost Lake, biking and hiking trails, nearby golf courses and the Valley Trail make The Aspens equally convenient for warm-weather stays.",
      "Parking is managed by The Aspens building and is available for approximately $26 CAD per vehicle, per day, with ample underground spaces available. During summer, limited free street parking may also be available nearby on a first-come basis.",
      "A newer, high-performing portable air-conditioning unit is located in the primary bedroom and helps circulate cooler air through the condo during summer, available seasonally from approximately May 1 through November 1. A shared laundry facility is conveniently located just around the corner from the condo on the same ground floor.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Up to 6 guests across 2 bedrooms and 4 beds.",
    floors: [
      {
        label: "Ground floor",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary bedroom",
            details:
              "King bed, Smart TV with cable and private ensuite bathroom featuring both a bathtub and shower.",
          },
          {
            name: "Bedroom 2",
            details:
              "Two single beds and Smart TV with cable. The second full bathroom, featuring a large walk-in shower, is located nearby.",
          },
          {
            name: "Living room",
            details: "Pullout sofa bed for 2 additional guests, plus a Smart TV with cable.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: ACEHOST_INCLUDED_SKI }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire 2-bedroom condo, including the patio, BBQ and living-room pullout sofa bed.",
      "You will also have access to The Aspens' heated outdoor pool, three hot tubs, fitness facilities, ski-in/ski-out access and building ski-rental/ski concierge services.",
      "Self check-in is available, with access instructions provided before arrival.",
    ],
    notes: [ACEHOST_VIP_CONCIERGE_NOTE, ACEHOST_SKI_PASS_NOTE, ACEHOST_REACH_OUT_NOTE],
    registration: [
      "Municipal registration number: 00013235",
      "Provincial registration number: PM632041838",
    ],
  },
};

export default whisperingPinesWriteup;
