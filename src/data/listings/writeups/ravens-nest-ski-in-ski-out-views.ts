import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const ravensNestViewsWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Raven's Nest, a beautifully renovated Whistler chalet with breathtaking mountain views, 3 king bedrooms and an additional king-bed den. Enjoy ski-in/ski-out access via a short walk to the run, then return to your private hot tub on the upper deck off the living room. A sauna, gas fireplace, premium kitchen and Sonos sound complete the mountain retreat, with Whistler Village close by for dining, shopping and apres.",
    ],
    highlights: [
      "Tantalus neighbourhood",
      "4 king beds (incl. den)",
      "Private upper-deck hot tub",
      "Sauna",
      "Ski access ~100 m walk",
      "Sonos sound system",
      "Garage parking",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 0,
      alt: "Raven's Nest living room",
    },
    paragraphs: [
      "Located in the Tantalus neighbourhood on Whistler Mountain, this home combines a peaceful hillside setting with convenient access to the slopes and the main Whistler Village. The nearby ski run is approximately 100 metres from your front door via a short walk, while the Village is approximately a 15-minute walk or 2-minute drive away.",
      "With accommodation for eight guests across three king bedrooms and a private, enclosed king-bed den, Raven's Nest is an inviting base for families and friends looking for a beautifully finished home close to Whistler's skiing, restaurants and apres-ski.",
      "Raven's Nest has undergone a pristine renovation, pairing quality finishes and premium appliances with the warmth of a mountain home. The top-floor living area is the heart of the home. Gather beside the gas fireplace, watch a film on the large Smart TV or enjoy your favourite music through the built-in Sonos sound system. Mountain views provide a spectacular backdrop to morning coffee, relaxed afternoons and evenings after skiing.",
      "The kitchen features premium appliances and everything you need to prepare meals at home. A convenient powder room serves the living level.",
      "Step directly from the top-floor living room onto the outdoor deck, where your private hot tub awaits. After a day exploring Whistler Blackcomb, put away your ski equipment and settle into the warm water while taking in the mountain views. With the living room just inside, you can move easily between a soak outdoors and a cozy evening beside the fireplace.",
      "Alongside the outdoor hot tub, Raven's Nest features a sauna accessed through the primary suite's ensuite bathroom. After skiing, choose a sauna session, a soak on the upper deck or a quiet evening beside the gas fireplace.",
      "Garage parking is available at the home. The mudroom includes ski storage and a boot dryer. An in-home washer and dryer are also available during your stay.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 3,
      alt: "Raven's Nest bedroom",
    },
    paragraphs: [
      "The nearby ski run is approximately 100 metres from the front door. Access involves a short walk that includes stairs, rather than skiing directly from the doorstep. Collect your equipment from the mudroom, make your way to the nearby run and enjoy a day on Whistler Mountain. When the relevant ski access is open, you can return via the nearby run and take the short walk back to the home.",
      "To reach the ski run: walk down the driveway and turn right; continue slightly uphill to the area between units 21 and 22; take the stairs, then continue a short distance to the ski run.",
      "Ski-in/ski-out access depends on snow coverage and the relevant run being open. The route includes walking and stairs, so it is not step-free.",
      "Raven's Nest sits in the Tantalus neighbourhood on Whistler Mountain. The main Village is approximately a 15-minute walk or 2-minute drive away, giving you convenient access to restaurants, cafes, shops, equipment rentals and apres-ski. Once in the Village, the pedestrian Village Stroll makes exploring on foot straightforward.",
      "For ski days, the nearby run provides your slope access when conditions permit. For dining, shopping and evenings out, the Village is close enough to enjoy throughout your stay. The return walk to Raven's Nest involves an uphill climb, so a taxi or drive is a convenient alternative after dinner, when carrying equipment or during snowy weather. Travel times are approximate and vary with conditions and walking pace.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Sleeps eight across four king beds.",
    floors: [
      {
        label: "Bedrooms",
        hideLabel: true,
        bedrooms: [
          {
            name: "Bedroom 1, Primary king suite",
            details:
              "A king bed, Smart TV and walk-in closet. The ensuite bathroom features a double vanity and walk-in shower. The sauna is accessed through this bathroom.",
          },
          {
            name: "Bedroom 2, King suite",
            details:
              "A king bed, storage space and a private ensuite bathroom.",
          },
          {
            name: "Bedroom 3, King suite",
            details:
              "A king bed, beautiful views, storage space and a private ensuite bathroom.",
          },
          {
            name: "Bedroom 4, Private king-bed den",
            details:
              "This enclosed den has its own door and a king bed, providing a private additional sleeping space for two guests. A bathroom is located next door, rather than being an ensuite.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: ["Guests have access to the entire home."],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: ["Municipal registration number: 00013360"],
  },
};

export default ravensNestViewsWriteup;
