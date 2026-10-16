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
      "Welcome to Raven's Nest, a beautifully renovated Whistler chalet with breathtaking mountain views, 3 King bedrooms and an additional King-bed den. Enjoy ski-in/ski-out access via a short walk to the run, then return to your private hot tub on the upper deck off the living room. A sauna, gas fireplace, premium kitchen and Sonos sound complete the mountain retreat, with Whistler Village close by for dining, shopping and après.",
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
      "Welcome to Raven's Nest, a beautifully renovated Whistler mountain retreat with breathtaking views, nearby ski-in/ski-out access and a private outdoor hot tub. Located in the Tantalus neighbourhood on Whistler Mountain, this home combines a peaceful hillside setting with convenient access to the slopes and the main Whistler Village. The nearby ski run is approximately 100 metres from your front door via a short walk, while the Village is approximately a 15-minute walk or two-minute drive away.",
      "With accommodation for eight guests across three king bedrooms and a private, enclosed king-bed den, Raven's Nest is an inviting base for families and friends looking for a beautifully finished home close to Whistler's skiing, restaurants and après-ski.",
      "Raven's Nest has undergone a pristine renovation, pairing quality finishes and premium appliances with the warmth of a mountain home. Thoughtful details, generous king beds and beautifully appointed living spaces make it a place to settle in and enjoy your time together. The top-floor living area is the heart of the home. Gather beside the gas fireplace, watch a film on the large Smart TV or enjoy your favourite music through the built-in Sonos sound system. The mountain views are a defining feature of Raven's Nest, providing a spectacular backdrop to morning coffee, relaxed afternoons and evenings spent together after skiing.",
      "The kitchen features premium appliances and everything you need to prepare meals at home. Make breakfast before heading to the nearby ski run, enjoy a leisurely lunch on a rest day or gather in the dining area for dinner. A convenient powder room serves the living level.",
      "Step directly from the top-floor living room onto the outdoor deck, where your private hot tub awaits. After a day exploring Whistler Blackcomb, return to the home, put away your ski equipment and settle into the warm water while taking in the mountain views and fresh alpine air. With the living room just inside, you can move easily between a soak outdoors and a cozy evening beside the fireplace. The deck is one of the home's standout spaces, bringing the mountain setting into your stay.",
      "Alongside the outdoor hot tub, Raven's Nest features a sauna accessed through the primary suite's ensuite bathroom. After skiing, choose a sauna session, a soak on the upper deck or a quiet evening beside the gas fireplace. These thoughtful comforts make returning home part of the holiday.",
      "Garage parking is available at the home. The mudroom includes ski storage and a boot dryer, giving you a practical place to organise your equipment before heading to the nearby run and dry your boots after a day on the mountain. An in-home washer and dryer are also available during your stay.",
      "Four king beds, beautifully renovated interiors, remarkable mountain views and your own deck hot tub, all close to the ski hill and Whistler Village. From the first run of the morning to dinner in the Village and a final soak under the mountain sky, Raven's Nest is a home for enjoying the full Whistler experience.",
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
      "Raven's Nest puts you close to the skiing, with the nearby ski run approximately 100 metres from the front door. Access involves a short walk that includes stairs, rather than skiing directly from the doorstep. Collect your equipment from the mudroom, make your way to the nearby run and enjoy a day on Whistler Mountain. When the relevant ski access is open, you can return via the nearby run and take the short walk back to the home. The combination of nearby slope access, ski storage, a boot dryer and a private hot tub makes Raven's Nest an especially appealing base for a Whistler ski holiday.",
      "To reach the ski run: walk down the driveway and turn right; continue slightly uphill to the area between units 21 and 22; take the stairs, then continue a short distance to the ski run. Ski-in/ski-out access depends on snow coverage and the relevant run being open. The route includes walking and stairs, so it is not step-free.",
      "Enjoy the mountain setting without feeling far from Whistler Village. The main Village is approximately a 15-minute walk or two-minute drive away, giving you convenient access to restaurants, cafes, shops, equipment rentals and après-ski. Head into town for morning coffee, browse the shops between mountain adventures or enjoy dinner after a day on the slopes. Once in the Village, the pedestrian Village Stroll makes exploring on foot straightforward.",
      "For ski days, the nearby run provides your slope access when conditions permit. For dining, shopping and evenings out, the Village is close enough to enjoy throughout your stay. The return walk to Raven's Nest involves an uphill climb, so a taxi or drive is a convenient alternative after dinner, when carrying equipment or during snowy weather. Travel times are approximate and vary with conditions and walking pace.",
      "Raven's Nest is tucked into the peaceful Tantalus neighbourhood on Whistler Mountain, combining beautiful mountain views and a setting surrounded by trees with exceptional proximity to the ski hill and Whistler Village. In summer, Whistler's hiking, mountain biking, golf courses and lakes are all within easy reach. Raven's Nest gives you privacy, views and nature without feeling removed from everything Whistler has to offer.",
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
              "A king bed, Smart TV and walk-in closet provide a comfortable private retreat. The ensuite bathroom features a double vanity and walk-in shower. The sauna is accessed through this bathroom.",
          },
          {
            name: "Bedroom 2, King suite",
            details:
              "A king bed, storage space and a private ensuite bathroom make this a comfortable setup for another couple or family members.",
          },
          {
            name: "Bedroom 3, King suite",
            details:
              "A king bed, beautiful views, storage space and a private ensuite bathroom offer another inviting place to unwind.",
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
      "The private hot tub is outdoors on the upper balcony directly off the living room. It is exclusively available to your group and surrounded by the home's natural mountain setting.",
      "Ski-in/ski-out access requires a short walk of approximately 100 metres and includes stairs. Access depends on snow coverage, weather conditions and the relevant ski run being open.",
      "The private king-bed den is fully enclosed with its own door. Its bathroom is located directly next door rather than being an ensuite.",
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00013360",
      "Provincial registration number: PM825925247",
    ],
  },
};

export default ravensNestViewsWriteup;
