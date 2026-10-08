import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  KADENWOOD_LOCATION_PARAGRAPHS,
} from "./shared";

const panoramicEstateWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Panoramic Estate in Kadenwood, a true Whistler-style luxury log chalet with soaring timber ceilings, warm wood finishes, stone fireplaces and incredible mountain views. This expansive 8-bedroom ski-in/ski-out home is perfect for families and groups, with multiple living spaces, large outdoor decks, a private elevator, hot tub, sauna and media room, all surrounded by the peaceful mountain setting of exclusive Kadenwood.",
    ],
    highlights: [
      "8 bedrooms",
      "Private elevator",
      "Extra-large hot tub",
      "Indoor sauna",
      "Ski-in / ski-out",
      "Private driveway parking for 6 to 10 vehicles",
      "Dining for 14 guests",
      "Ping pong and fitness equipment",
    ],
  },
  walkthrough: {
    reelId: "DOoXPbrj_UV",
    title: "Panoramic Estate walkthrough",
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 4,
      alt: "Panoramic Estate interior",
    },
    paragraphs: [
      "Panoramic Estate is designed for families and groups who value both time together and room to spread out. Eight bedrooms and multiple living areas are arranged across several levels, all conveniently connected by a private elevator. The layout works particularly well for multi-generational families and groups travelling together, providing generous communal spaces alongside quieter private areas.",
      "Large outdoor decks showcase the surrounding mountain scenery, while multiple fireplaces create a warm alpine atmosphere indoors. A private extra-large hot tub, indoor sauna, media room, ping pong, built-in sound system and fitness equipment provide entertainment and relaxation throughout the home.",
      "Ski-in/ski-out access and Kadenwood's private gondola complete the experience, combining the privacy of a large mountain estate with convenient access to Creekside and Whistler Mountain. Nestled high on the mountainside within prestigious Kadenwood, the home offers exclusive access to the residents and guests only private Kadenwood gondola.",
      "The upper living level includes a large open-plan kitchen with a big island and pantry (Miele coffee machine, KitchenAid mixer, and two-drawer freezer), an 8-seater dining table plus 6-seater extension for 14 guests comfortably, main living room with wood-burning fireplace (fire starter and logs provided), media room off the living room, spacious outdoor deck, and a 10-top picnic table for summer meals.",
      "The home has brand-new central AC throughout every floor, available for guest comfort as of May 1, 2027 onwards. Both Master Bedroom 1 and Master Bedroom 2 have their own central AC, while the rest of the home is cooled through AC in the common areas. Not every bedroom has its own dedicated AC unit. Even on hot summer days the entire home stays very comfortable, including the bedrooms. Log-style construction also helps regulate temperature year-round.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Panoramic Estate in Kadenwood",
    },
    paragraphs: [
      "Set high above Creekside in Kadenwood, Panoramic Estate combines a private alpine setting with exceptional access to Whistler Mountain. Guests can use Kadenwood's private residents-and-guests-only gondola to reach Creekside Village in approximately five minutes, or enjoy ski-in/ski-out access during the winter when conditions permit. Creekside offers lifts, restaurants, cafes and groceries, while Whistler Village is approximately a 10-minute drive away.",
      ...KADENWOOD_LOCATION_PARAGRAPHS,
      "Parking and private driveway: Panoramic Estate offers ample private parking for approximately 6 to 10 vehicles, making it ideal for groups and families travelling with multiple cars. A long, private driveway leads directly to the home, providing convenient access, privacy, and plenty of space for parking throughout your stay.",
      "Guests can reach Creekside and Whistler Village via the private gondola, taxi, ride app, private driver, or vehicle rentals. Transportation is not necessary to ski since the property is located right on Whistler Mountain.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    floors: [
      {
        label: "Top Level",
        note: "Washer and dryer on this floor.",
        bedrooms: [
          {
            name: "Master Bedroom 1",
            details:
              "King bed with walk-in closet, chaise lounge, telescope, and outdoor patio at the end of the corridor. Spacious ensuite walk-in shower and stand-alone bathtub. Central AC in this bedroom.",
          },
          {
            name: "Master Bedroom 2",
            details:
              "Plush king bed with ensuite walk-in shower and outdoor patio. Central AC in this bedroom.",
          },
          {
            name: "Bedroom 3",
            details: "Bunk room with two queen beds and ensuite bathroom with walk-in shower.",
          },
        ],
      },
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Bedroom 4",
            details:
              "Full bed with bathroom next door (walk-in shower and office desk).",
          },
          {
            name: "Bedroom 8",
            details:
              "One-bedroom suite with queen bed, separate bedroom and closet, and fully functional kitchen with full-sized appliances, just off the kitchen.",
          },
        ],
      },
      {
        label: "Main Level",
        bedrooms: [
          {
            name: "Bedroom 5",
            details: "Well-appointed room with queen bed.",
          },
          {
            name: "Bedroom 6",
            details:
              "Beautiful queen bed with patio access to the hot tub. Shares a walk-in shower bathroom between Bedrooms 5 and 6.",
          },
        ],
      },
      {
        label: "Lower Level",
        note: "Garage fits one car with gym area (Peloton, bench press, weights, running machine). Additional laundry, large mudroom and ski storage with exit to garage. Sauna by the mudroom. Large bathroom next to media/bedroom area with walk-in shower.",
        bedrooms: [
          {
            name: "Bedroom 7",
            details:
              "Bunk bed with two queen beds plus an additional queen Murphy bed.",
          },
        ],
      },
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have access to the entire private home, garage, hot tub, driveway, and all advertised amenities.",
      "Important elevator note: The home includes a private elevator connecting all levels. As with any residential elevator, occasional servicing may be required and availability cannot always be guaranteed. If elevator access is essential for your group, please confirm with us before booking.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
      "Pets allowed with approval.",
      "Exterior and access highlights include ski-in/ski-out access, private Kadenwood gondola, mountain views, spacious outdoor decks, hot tub, and garage gym equipment. Interior highlights include private elevator, multiple fireplaces, indoor sauna, media room, built-in sound system, and ping pong.",
    ],
    registration: [
      "Municipal registration number: 00013273",
      "Provincial registration number: PM310072844",
    ],
  },
};

export default panoramicEstateWriteup;
