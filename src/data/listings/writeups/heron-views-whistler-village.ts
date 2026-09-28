import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const heronViewsWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Heron Views, a 7,800 sq. ft. traditional log chalet in prestigious Blueberry Hill, with sweeping views across Whistler Golf Course toward Whistler and Blackcomb mountains. Just a 3-4 minute drive from the Village and ski lifts, or a scenic walk along the Valley Trail, the home combines privacy with convenience.",
      "Enjoy two expansive decks, summer air conditioning, a 14-person hot tub, fire pit, theatre room, wet bar and generous living spaces for families and groups.",
    ],
    highlights: [
      "7,800 sq. ft. log chalet",
      "Blueberry Hill golf course views",
      "14-person hot tub",
      "Theatre room and wet bar",
      "Two renovated decks (~2,400 sq. ft.)",
      "Summer air conditioning",
      "Walk or bus to Whistler Village",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 2,
      alt: "Heron Views interior living space",
    },
    paragraphs: [
      "Outdoor enthusiasts will love the two newly renovated decks, offering approximately 2,400 sq. ft. of outdoor living space with sweeping views across Whistler Golf Course toward Whistler and Blackcomb mountains. The upper deck is designed for entertaining, with stylish outdoor seating, a daybed, BBQ and fire table, perfect for morning coffee, family dinners or drinks overlooking the mountains. The lower deck creates a private apres-ski retreat with a large 14-person hot tub, sunken fire pit, loungers and additional seating, all surrounded by the chalet's beautiful mountain setting.",
      "Inside, the main level features a spacious open-concept kitchen, dining and living area designed for groups to gather comfortably. The well-equipped kitchen includes a Vertuo Nespresso machine, Keurig and drip coffee maker, while the nearby wet bar offers generous counter space, glassware and a bar fridge for entertaining. The living area provides multiple seating areas and a Smart TV, with large windows bringing the surrounding forest and mountain views indoors.",
      "On the lower level, a second generous living area provides another space for the group to relax, complete with a large Samsung Frame TV and direct access to the lower deck, hot tub and fire pit. Guests can also unwind in the steam shower after a day of skiing, biking or exploring Whistler.",
      "The home has 5 bedrooms and 5.5 baths. The driveway accommodates two vehicles, with space for one additional vehicle in the garage. The garage also provides convenient storage for skis, bikes and other outdoor equipment.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 2,
      alt: "Heron Views mountain and golf course setting",
    },
    paragraphs: [
      "Heron Views is located in prestigious Blueberry Hill, offering a peaceful residential setting while remaining exceptionally close to Whistler Village and the mountains. Whistler Golf Course and the Valley Trail are approximately a one-minute walk from the home, providing a scenic route toward the Village as well as easy access for walking and biking.",
      "Whistler Village and the ski lifts are approximately a 3-4 minute drive away. Guests who prefer to walk can follow the Valley Trail into the Village in approximately 15 minutes, while the Route 6 public bus stops just steps from the home and runs regularly into Whistler Village. This makes Heron Views an excellent option for groups wanting the privacy and space of a large chalet without feeling far from the centre of Whistler.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Five bedrooms across the top and lower levels.",
    floors: [
      {
        label: "Top Level",
        bedrooms: [
          {
            name: "Bedroom 1, Primary Suite",
            details:
              "King bed with a generously sized ensuite bathroom featuring a bathtub, large walk-in shower and separate toilet room. The primary suite also includes a large closet and private balcony with outdoor seating, perfect for enjoying a quiet morning coffee.",
          },
          {
            name: "Bedroom 2",
            details:
              "Four-poster queen bed with private ensuite bathroom, bathtub and private balcony.",
          },
          {
            name: "Bedroom 3",
            details:
              "Queen bed with a newly renovated ensuite bathroom and spacious walk-in shower.",
          },
          {
            name: "Bedroom 4",
            details:
              "Queen-over-twin bunk bed, Smart TV, private balcony and ensuite bathroom with bathtub. This room works especially well for children, teens or families travelling together.",
          },
        ],
      },
      {
        label: "Lower Level",
        bedrooms: [
          {
            name: "Bedroom 5",
            details:
              "Queen bed located at the end of the lower-level corridor for added privacy. A large bathroom with walk-in shower is located directly next door, and the bedroom offers convenient access to the lower deck, hot tub and sunken fire pit.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have access to the entire private home to themselves including all amenities such as the hot tub, garage, and more.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "Getting around by bus: The local bus stop is just a stone's throw away from the front door and it costs $2.50 per ride, with buses running every 10-15 minutes. Take bus number 6 to head into Whistler Village. This chalet's exceptional location makes it the ideal home base for your holiday.",
      "The home is 1 minute walk away from Whistler Golf Course and the valley trail, which takes about a 15 minute walk to get to the main Whistler Village. In the winter, walking is possible, but better to drive.",
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00012827",
      "Provincial registration number: PM129914947",
    ],
  },
};

export default heronViewsWriteup;
