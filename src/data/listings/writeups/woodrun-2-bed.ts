import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const woodrun2BedWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Stay in a luxury ski-in/ski-out penthouse on Blackcomb Mountain, where exposed log beams, vaulted ceilings and rustic chalet charm meet modern renovations and top-of-the-line furnishings. Enjoy mountain views through floor-to-ceiling windows and from your private balcony, plus a gas fireplace, year-round heated pool and hot tub.",
      "Sleeps 7 with a King suite, Queen/Twin bunk and Queen sofa bed. Includes 2 guaranteed free parking spots, 2 ski lockers, boot dryer, AC, Pack 'n Play and high chair.",
    ],
    highlights: [
      "True ski-in/ski-out on Blackcomb",
      "Year-round pool and hot tub",
      "Sleeps 7",
      "2 free underground parking spots",
      "2 ski lockers and boot dryer",
      "Air conditioning",
      "King suite with ensuite",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 1,
      alt: "Woodrun Lodge penthouse interior",
    },
    paragraphs: [
      "This top-floor penthouse at Woodrun Lodge sits directly on Blackcomb Mountain. Exposed timber beams, soaring vaulted ceilings and natural wood detailing give it the feel of a luxury log chalet, with modern renovations, high-end appliances and top-of-the-line furnishings throughout.",
      "Floor-to-ceiling windows fill the open living space with mountain views. Spend evenings by the gas fireplace, play music through the in-unit speaker system, or step onto the private balcony for fresh air and alpine scenery.",
      "The updated kitchen has high-end appliances and everything needed for meals at home. The dining table seats 6, with 2 additional high-top seats for a total of 8.",
      "Air conditioning, heating, a private washer and dryer, and elevator access are included. A complimentary Pack 'n Play travel crib and high chair are in the unit. Please bring your own crib sheets.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 2,
      alt: "Woodrun Lodge on Blackcomb Mountain",
    },
    paragraphs: [
      "Woodrun Lodge sits alongside Merlin's ski run on Blackcomb Mountain, with genuine ski-in/ski-out access when the connecting terrain is open. Collect your gear from one of the 2 dedicated ski lockers, step outside and ski toward the Blackcomb Gondola, then ski back to the building at the end of the day.",
      "Lower-mountain snowmaking can help keep coverage through winter and into spring when conditions permit. Ski-to-door access still depends on snowfall, weather and mountain operations, especially early and late season.",
      "The Fairmont Chateau Whistler is about a 2-minute downhill walk. Upper Village restaurants, cafes, shops and apres are a few minutes away. Whistler Village is about a 10 to 15 minute walk for dining, shopping and nightlife.",
      "In summer, hiking and biking trails, Lost Lake, golf and Village patios are all close. Come back to the heated outdoor pool, private balcony and mountain views.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Maximum occupancy is 7 guests across 2 bedrooms and a Queen sofa bed.",
    floors: [
      {
        label: "Penthouse",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary Bedroom",
            details:
              "King bed with a private ensuite bathroom. Sleeps 2.",
          },
          {
            name: "Bedroom 2",
            details:
              "Queen bed on the bottom bunk and Twin bed on the upper bunk, with brand-new Puffy mattresses. A proper enclosed bedroom. The second full bathroom is directly across the hallway. Sleeps 3.",
          },
          {
            name: "Living room",
            details:
              "Queen pull-out sofa bed for 2 additional guests. Both bedrooms have blackout curtains. The living room does not have blinds or curtains and faces away from the morning sunrise, so some natural light may enter if you sleep here. A sleep mask is recommended if you want it fully dark.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have exclusive private access to the entire top-floor penthouse at Woodrun Lodge, including the kitchen, 2 bedrooms, 2 bathrooms and private balcony.",
      "Your reservation includes 2 guaranteed free underground parking spots, 2 dedicated ski storage lockers, a built-in boot dryer for 8 boots (4 pairs), elevator access, and Woodrun Lodge's year-round heated outdoor pool, outdoor hot tub and fitness facilities. The pool, hot tub and gym are shared with residents and registered guests. Temporary maintenance closures may occasionally occur.",
      "Check-in, parking and ski locker details are provided before arrival.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "No pets.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00016025",
      "Provincial registration number: PM795250567",
    ],
  },
};

export default woodrun2BedWriteup;
