import type { ListingWriteupContent } from "@/components/listingWriteup";

const chaletLaForjaWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Chalet La Forja in Kadenwood, one of Whistler's most prestigious luxury rentals. This 10,000+ sq. ft. ski-in/ski-out estate is designed for unforgettable family stays, with 9 bedrooms, expansive living spaces, a heated outdoor pool, hot tub, sauna, gym and private gondola access to Creekside.",
      "Perfect for one or two families wanting exceptional space, privacy and service.",
    ],
    highlights: [
      "10,000+ sq. ft.",
      "True ski-in / ski-out",
      "Heated outdoor pool",
      "Private hot tub",
      "Private Kadenwood Gondola",
      "Daily winter butler",
      "Housekeeping every other day",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 10,
      alt: "Chalet La Forja living space and kitchen",
    },
    paragraphs: [
      "Chalet La Forja delivers the scale and service of a private alpine resort, exclusively for your group. More than 10,000 sq. ft. of living space provides room to gather, entertain and retreat in privacy. The home features nine bedrooms, generous living areas, a gourmet chef's kitchen with butler's pantry, two private offices, Sonos audio throughout and exceptional indoor-outdoor entertaining spaces.",
      "Outside, a private heated swimming pool and hot tub create one of Kadenwood's most impressive apres-ski settings. Inside, guests can enjoy a private gym, sauna, multiple lounge spaces and extensive amenities throughout the residence. True ski-in/ski-out access connects the home to Whistler Mountain, while Kadenwood's private gondola provides convenient access to Creekside.",
      "Ranked among Top 10 Vacation Rentals in 2023 in all of Canada.",
    ],
  },
  location: {
    title: "Location & Ski Access",
    imageSide: "left",
    image: {
      photoIndex: 1,
      alt: "Chalet La Forja exterior in Kadenwood",
    },
    paragraphs: [
      "Chalet La Forja is perched high on Whistler Mountain in Kadenwood, a private mountainside community above Creekside. In winter, guests can access Whistler Mountain directly from the neighbourhood or take the private Kadenwood Gondola down to Creekside in approximately five minutes. It is a rare combination of estate-level privacy and convenient access to skiing, dining, groceries and the rest of Whistler.",
      "Sitting almost 1,000 feet above the valley floor, Kadenwood is one of Whistler's most exclusive ski-in/ski-out neighbourhoods. Set high above Creekside on Whistler Mountain, it offers incredible privacy, old-growth forest, beautiful mountain views and access to the private Kadenwood Gondola for residents and guests.",
      "The private gondola connects Kadenwood directly with Creekside Village in approximately five minutes. Creekside can also be reached by a short drive or, during ski season, directly from the mountain.",
      "For skiers, Creekside is an excellent place to start the day. While many visitors naturally begin from the main Whistler Village base, Creekside provides direct access to Whistler Mountain without needing to travel into the Village each morning. The upgraded 10-person Creekside Gondola increased out-of-base capacity by approximately 35%, while the upgraded Big Red Express increased uphill capacity by approximately 30%, helping improve mountain access and wait times.",
      "Creekside Village has everything needed close to home, including Creekside Market for groceries and some of Whistler's favourite restaurants and cafes, including Red Door Bistro, Rimrock Café, Creekbread, Dusty's, BReD and Rockit Coffee.",
      "Whistler Village is approximately a 10-minute drive away, giving guests easy access to the main Village while enjoying the privacy and peaceful mountain setting of Kadenwood.",
      "Guests can reach Creekside and Whistler Village via the private gondola, taxi, ride app, private driver, or vehicle rentals. Transportation is not necessary to ski, since the property is located right on Whistler Mountain.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary: "Full 8+1 bedroom home, arranged across four levels.",
    floors: [
      {
        label: "Upper Level",
        note: "Level located below the main floor.",
        bedrooms: [
          {
            name: "Bedroom 1",
            details:
              "Master suite with a King bed, ensuite shower and bathtub, and a private patio with two day lounges.",
          },
          {
            name: "Bedroom 2",
            details:
              "Second master next to Bedroom 1. King bed, ensuite bathroom with shower and bath, and private patio access.",
          },
          {
            name: "Bedroom 3",
            details:
              "At the end of the corridor. King bed, ensuite bathroom with shower and bath, and private patio access.",
          },
          {
            name: "Bedroom 4",
            details:
              "Very large room with a King bed and ensuite shower, located next to Bedroom 3.",
          },
          {
            name: "Bedroom 7 / Office",
            details:
              "Hybrid office with a Twin bed and large window. Connects to Bedroom 2, with its own hallway entrance and a shared bathroom.",
          },
        ],
      },
      {
        label: "Middle Level",
        bedrooms: [
          {
            name: "Bedroom 5",
            details:
              "On its own level. Bunk room with 6 Queen beds and a spacious ensuite bathroom with shower and bath.",
          },
        ],
      },
      {
        label: "Lower Level",
        bedrooms: [
          {
            name: "Bedroom 6",
            details:
              "King bed and 2 twins, tucked away for privacy, with an ensuite bathroom and shower. Private access to the pool, hot tub and backyard.",
          },
          {
            name: "Bedroom 8",
            details:
              "King bed, connected through Bedroom 6 to the rec room. Shared bathroom, with the option to use the large steam shower in the rec room just off these bedrooms.",
          },
        ],
      },
      {
        label: "Main Floor",
        note: "Includes kitchen, living room, TV lounge and garage.",
        bedrooms: [
          {
            name: "Bedroom 9",
            details:
              "Queen bed on the main floor. Adjacent bathroom and shower, shared with the kitchen and living level. Only five steps to enter the house, well suited for guests who prefer fewer stairs.",
          },
        ],
      },
    ],
    footnote:
      "For a small daily fee, the pool can be set to hot tub temperatures.",
  },
  service: {
    title: "Service at La Forja",
    lead: [
      "Daily private butler included December 1 through April 30.",
      "Complimentary housekeeping every other day throughout the year.",
    ],
    body: [
      "The butler assists with breakfast, lunch and dinner, along with food and beverage service throughout the day, dining setup and cleanup, and kitchen service. They will prepare the hot tub, light the fire, and adjust the music and household functions. Coffee and barista service is part of the stay. Butler service is typically 10 to 12 hours per day.",
      "Overall, the butler is there to make the house run smoothly so your group can settle in and enjoy the mountain.",
    ],
  },
  stay: {
    title: "Included with your stay",
    includedTitle: "Included",
    included: [
      "Winter private butler",
      "Housekeeping every other day",
      "AceHost VIP concierge",
      "Restaurant reservations and recommendations",
      "Ski lift pass ordering and delivery",
      "Pre-arrival food and beverage stocking coordination",
    ],
    requestTitle: "Available on request",
    request: [
      "Airport transfers",
      "Private chef",
      "Private driver",
      "In-home massage",
      "Ski and snowboard rental delivery",
      "Childcare",
      "Ski instructors",
      "Helicopter and snowmobile experiences",
    ],
    closing:
      "If you need something else, let us know and we will arrange it. Optional third-party services are charged separately unless specifically stated as included with your reservation.",
  },
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have access to the entire private home, including the heated pool, hot tub, sauna, garage, gym and all other amenities.",
    ],
    notes: [
      "Complimentary AceHost VIP concierge planning is included with every stay. Our local Whistler team is available to help make your trip seamless, from restaurant reservations and local recommendations to coordinating private chefs, airport transfers, private drivers, grocery pre-stocking, ski and snowboard rentals, instructors, childcare, in-home massage, snowmobiling, helicopter experiences and more.",
      "Ben is happy to join you on the first day to show you the ski-in ski-out trail, as well as show you the mountain, if time permits.",
      "Ski lift pass booking and delivery: one of the perks of booking with AceHost is complimentary ski pass delivery directly to your door. We can arrange day passes, multi-day passes, season passes and more, helping you skip the ticket office, paperwork and extra stop upon arrival. Please reach out to us before purchasing your passes, as the booking will need to be made through our team in order for us to arrange delivery. We are happy to guide you through the process and make it as easy as possible.",
      "Please don't hesitate to reach out if you need anything.",
    ],
    registration: [
      "Municipal registration number: 00013213",
      "Provincial registration number: PM244679712",
    ],
  },
};

export default chaletLaForjaWriteup;
