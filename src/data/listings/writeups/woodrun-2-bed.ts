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
      "Stay in This Woodrun Penthouse, a luxury ski-in/ski-out retreat on Blackcomb Mountain where exposed log beams and vaulted ceilings meet modern renovations and premium furnishings. Enjoy mountain views, a private balcony and gas fireplace, plus a shared year-round heated pool, hot tub, gym and sauna.",
      "Sleeps 7 with a King suite, Queen/Twin bunk and Queen sofa bed, plus two guaranteed free underground parking spots, two ski lockers, boot dryer, AC, Pack 'n Play and high chair.",
    ],
    highlights: [
      "True ski-in/ski-out on Blackcomb",
      "Year-round pool, hot tub, gym and sauna",
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
      "This Woodrun Penthouse is a renovated top-floor, two-bedroom, two-bathroom home at Woodrun Lodge on Blackcomb Mountain. Extensive exposed log beams, vaulted ceilings and natural wood detailing create classic alpine chalet character, while modern renovations, premium furnishings and high-end appliances provide an elevated and comfortable stay.",
      "The bright, open-concept living area features floor-to-ceiling windows with beautiful mountain views, a gas fireplace, an in-unit speaker system and access to a private balcony. The full kitchen is well equipped for preparing meals at home, with premium appliances, generous counter space and all the essentials for your stay. The dining table seats six, with two additional high-top seats nearby.",
      "This Woodrun Penthouse also includes air conditioning, heating and a private in-suite washer and dryer. A complimentary Pack 'n Play and high chair are provided for families. Please bring your own crib sheets for the Pack 'n Play.",
      "Guests have shared access to Woodrun Lodge's year-round heated outdoor swimming pool, outdoor hot tub, gym, sauna, secure bike storage and elevator. The pool, hot tub, gym and sauna are shared with Woodrun Lodge residents and registered guests.",
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
      "Woodrun Lodge is situated directly alongside Merlin's ski run on Blackcomb Mountain, offering genuine ski-in/ski-out access. Collect your equipment from one of the two dedicated ski lockers, step outside and ski down toward the Blackcomb Gondola in approximately 30 seconds. At the end of the day, you can ski directly back to the building. Your stay also includes a built-in boot dryer capable of drying up to four pairs of boots.",
      "This Woodrun Penthouse combines a quiet mountainside setting with convenient access to Whistler's main restaurants, shops and attractions. The Fairmont Chateau Whistler is approximately a one to two-minute downhill walk away. The restaurants, cafes, shops and apres-ski options of Upper Village are just beyond the Fairmont, while Whistler Village is approximately a 10 to 15-minute walk away.",
      "This Woodrun Penthouse is located in Whistler's Benchlands neighbourhood, directly on Blackcomb Mountain. During summer, nearby hiking and biking trails, Lost Lake, golf courses and Village patios make this an excellent year-round location.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary:
      "This Woodrun Penthouse accommodates up to seven guests across two enclosed bedrooms and a Queen sofa bed in the living room.",
    floors: [
      {
        label: "Penthouse",
        hideLabel: true,
        bedrooms: [
          {
            name: "Primary Bedroom",
            details:
              "One King bed, private ensuite bathroom and blackout curtains. Sleeps two guests.",
          },
          {
            name: "Bedroom 2",
            details:
              "One Queen-over-Twin bunk bed with premium Puffy mattresses and blackout curtains. The second full bathroom is located directly across the hallway. Sleeps three guests.",
          },
          {
            name: "Living room",
            details:
              "One Queen sofa bed provides additional sleeping space for up to two guests. Both enclosed bedrooms have blackout curtains. The living room Queen sofa bed area does not have blinds or curtains, although the living room faces away from the morning sunrise. Guests sleeping in this area who are sensitive to light may wish to bring a sleep mask.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to This Woodrun Penthouse, including both bedrooms, two bathrooms, the full kitchen, living and dining areas, private balcony and in-suite laundry.",
      "Your stay also includes two guaranteed free underground parking spots, two dedicated ski lockers, a built-in boot dryer, secure bike storage and elevator access. Guests also have shared access to Woodrun Lodge's year-round heated outdoor pool, hot tub, gym and sauna.",
      "Detailed check-in, parking and ski locker instructions will be provided before arrival.",
    ],
    notes: [
      "Your reservation includes two guaranteed free underground parking spots at Woodrun Lodge. Both parking spots are included at no additional cost, providing convenient parking directly at the building for families and groups travelling in separate vehicles.",
      "Both enclosed bedrooms have blackout curtains. The living room Queen sofa bed area does not have blinds or curtains, although the living room faces away from the morning sunrise. Guests sleeping in this area who are sensitive to light may wish to bring a sleep mask.",
      "A Pack 'n Play and high chair are provided at no additional cost. Guests should bring their own crib sheets.",
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
