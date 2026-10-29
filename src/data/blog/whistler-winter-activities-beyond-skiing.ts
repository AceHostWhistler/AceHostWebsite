export const SLUG = "whistler-winter-activities-beyond-skiing";

export const CANONICAL_URL = `https://www.acehost.ca/post/${SLUG}`;

export const PUBLISH_DATE = "October 28, 2026";
export const ISO_PUB = "2026-10-28T21:35:00.000Z";
export const ISO_MOD = ISO_PUB;
export const READ_TIME = "18 min read";
export const CATEGORY = "Travel and Destination Guides";

export const HEADLINE = "The Best Things to Do in Whistler Beyond Skiing";
export const SUBTITLE = "Winter adventures and relaxed days off the slopes";

export const META = {
  title: "Whistler Winter Activities Beyond Skiing | AceHost",
  description:
    "Discover Whistler winter activities beyond skiing, from Scandinave Spa and fondue to snowmobiling, family outings and a scenic Pemberton day trip.",
};

export const EXCERPT =
  "Make more of your Whistler ski holiday with spa days, mountain fondue, forest adventures, art, family activities and a scenic day trip to Pemberton.";

export const HERO = {
  src: "/photos/properties/Pinnacle Ridge 23/Snowy Whistler Balcony Hot Tub-1.png",
  alt: "Covered outdoor hot tub on a snowy Whistler balcony looking toward snow-laden pine trees",
  caption:
    "A rest-day view from Pinnacle Ridge 23: an outdoor hot tub facing snow-covered forest.",
};

const POST_PHOTOS = "/photos/post/whistler-winter-activities-beyond-skiing";

export const IMAGES = {
  sauna: {
    src: "/photos/properties/Two Cedars New/Sauna snow two cedars.jpeg",
    alt: "Cedar outdoor sauna beside a snow-covered patio and forest at Two Cedars in Kadenwood",
    caption:
      "The outdoor sauna at Two Cedars in Kadenwood, a quiet rest-day option when you want to stay home.",
  },
  cafe: {
    src: `${POST_PHOTOS}/cozy-winter-cafe.jpg`,
    alt: "Two coffees and a croissant on a wooden café table looking out to a snowy Whistler Village street",
    caption: "A slow Village morning, coffee in hand and the mountain street just outside the window.",
    credit: "AI illustration.",
  },
  fondue: {
    src: `${POST_PHOTOS}/alpine-fondue.jpg`,
    alt: "Four people sharing cheese fondue at a candlelit mountain chalet table with twilight peaks outside",
    caption:
      "A mountain fondue dinner is one of the easiest ways to make an evening the main event.",
    credit:
      "AI illustration. Inspired by a hut fondue dinner, not a photograph of Crystal Hut.",
  },
  vallea: {
    src: `${POST_PHOTOS}/forest-light-walk.jpg`,
    alt: "Two people walking a snowy forest path at night among tall trees lit with gold and teal light",
    caption: "An after-dark forest walk, with light and sound turning a short trail into an evening out.",
    credit:
      "AI illustration. Inspired by an illuminated forest walk, not a photograph of Vallea Lumina.",
  },
  snowmobile: {
    src: `${POST_PHOTOS}/guided-snowmobile.jpg`,
    alt: "Three snowmobilers riding a groomed winter trail through snow-covered pines toward mountain peaks",
    caption: "A guided snowmobile outing opens up a very different view of the mountains.",
    credit: "AI illustration.",
  },
  dogsled: {
    src: `${POST_PHOTOS}/dogsledding.jpg`,
    alt: "A team of huskies pulling a wooden sled with two guests through a snowy Whistler forest",
    caption: "A dogsled tour through the Callaghan Valley, with the dogs themselves a big part of the day.",
    credit: "AI illustration.",
  },
  helicopter: {
    src: `${POST_PHOTOS}/winter-helicopter.jpg`,
    alt: "A red helicopter on a snowy alpine ridge above a valley of cloud, with two guests looking at the peaks",
    caption:
      "A scenic helicopter flight, and an alpine landing when conditions allow, can be a highlight of the whole trip.",
    credit:
      "AI illustration. Inspired by a winter helicopter outing, not a photograph of a specific operator.",
  },
  zipline: {
    src: `${POST_PHOTOS}/winter-zipline.jpg`,
    alt: "A smiling guest in a helmet and harness ziplining from a snowy forest platform above a winter valley",
    caption: "A winter zipline through the trees, with walking and viewpoints as part of the outing.",
    credit:
      "AI illustration. Inspired by a winter forest zipline, not a photograph of Ziptrek.",
  },
  tubing: {
    src: `${POST_PHOTOS}/family-snow-tubing.jpg`,
    alt: "A man and a young girl smiling as they snow-tube down a groomed run with mountains behind them",
    caption: "Snow tubing keeps a little mountain excitement in a family day away from ski lessons.",
    credit:
      "AI illustration. Inspired by family snow tubing, not a photograph of the bubly Tube Park.",
  },
  stay: {
    src: "/photos/properties/Two Cedars New/Two cedars new edit snow living 14.jpg",
    alt: "Open living room at Two Cedars in Kadenwood with snow visible through tall windows",
    caption:
      "Two Cedars in Kadenwood, one of the AceHost homes that works well when the day is about staying in as much as heading out.",
  },
  mountaintop: {
    src: "/photos/properties/2919 Heritage/Mountaintop living snow18.png",
    alt: "Living room at The Mountaintop in Kadenwood with snowy forest visible through large windows",
    caption:
      "The Mountaintop in Kadenwood, a strong fit for a ski holiday with proper downtime between mountain days.",
  },
} as const;

export const TOC_ITEMS = [
  { id: "choose-the-day", label: "Choose the kind of day you want" },
  { id: "slow-down", label: "Slow down and enjoy Whistler" },
  { id: "evenings", label: "Make an evening part of the adventure" },
  { id: "outdoors", label: "Get outdoors without downhill skis" },
  { id: "new-perspective", label: "See the mountains from a new perspective" },
  { id: "family-indoor", label: "Plan a family day or an indoor afternoon" },
  { id: "pemberton", label: "Take the scenic drive to Pemberton" },
  { id: "itineraries", label: "Four ways to put it together" },
  { id: "where-to-stay", label: "Stay somewhere you will enjoy between ski days" },
  { id: "faq", label: "Questions about Whistler beyond skiing" },
];

export const MOOD_ROWS = [
  {
    mood: "A proper rest day",
    start: "Scandinave Spa, an in-home massage, coffee and a Village stroll",
  },
  {
    mood: "A memorable evening",
    start: "Crystal Hut fondue, Vallea Lumina, dinner out or a private chef",
  },
  {
    mood: "A family day",
    start: "Tubing, skating, an escape room, swimming or a forest adventure",
  },
  {
    mood: "A bigger adventure",
    start:
      "Snowmobiling, a helicopter flight, ziplining or the Olympic sliding track",
  },
  {
    mood: "An indoor afternoon",
    start:
      "Audain Art Museum, the Squamish Lil'wat Cultural Centre or Whistler Museum",
  },
  {
    mood: "A change of scenery",
    start: "Pemberton, North Arm Farm, The Beer Farmers and a local lunch",
  },
] as const;

export const LINKS = {
  scandinave: "https://www.scandinave.com/whistler",
  scandinaveMinors: "https://www.scandinave.com/minor-guests",
  concierge: "/concierge-service",
  bred: "https://edsbred.com/in-store/",
  valleyTrail:
    "https://www.whistler.ca/parks-recreation-culture/trails/valley-trail/",
  fondue: "https://www.canadianwilderness.com/whistler/fondue-dinner/",
  vallea: "https://vallealumina.com/",
  snowmobile: "https://www.canadianwilderness.com/whistler/snowmobile-tours/",
  snowshoe: "https://www.canadianwilderness.com/whistler/snowshoe-tours/",
  restaurants:
    "/post/the-best-restaurants-in-whistler-canada-food-coffee-cocktails-more",
  olympicParkSnowshoe:
    "https://www.whistlerolympicpark.com/things-to-do/snowshoeing",
  olympicPark: "https://www.whistlerolympicpark.com/",
  biathlon: "https://www.whistlerolympicpark.com/things-to-do/biathlon",
  dogsled: "https://www.blackcombsnowmobile.com/dogsled-tour/",
  sleigh: "https://www.blackcombsnowmobile.com/sleigh-ride-tour/",
  fishing: "https://www.whistler.com/activities/fishing/",
  peak2peak: "https://www.whistler.com/activities/peak-to-peak-gondola/",
  heliScenic: "https://www.blackcombhelicopters.com/coast-mountain-adventure",
  iceCave: "https://www.nolimits-helicopters.com/en/whistler-ice-cave-helicopter-tour",
  fortBerens: "https://www.blackcombhelicopters.com/fort-berens-winery-experience",
  ziptrek: "https://whistler.ziptrek.com/tours/winter-apres-tour/",
  bobsleigh:
    "https://www.whistlerslidingcentre.com/public-sliding/passenger-bobsleigh",
  skeleton: "https://www.whistlerslidingcentre.com/public-sliding/public-skeleton",
  bungee: "https://www.whistlerbungee.com/faq",
  tubePark: "https://www.whistler.com/activities/tube-park/",
  skating:
    "https://www.whistler.ca/parks-recreation-culture/activities-and-schedules/winter-in-whistler/",
  audain: "https://audainartmuseum.com/tickets/",
  slcc: "https://slcc.ca/visit/",
  museum: "https://whistlermuseum.org/visit/",
  escape: "https://escapewhistler.com/before-you-play",
  axe: "https://forgedaxe.ca/axe-throwing-whistler/faq/",
  climbing: "https://whistlercore.com/pages/climbing",
  meadowPark:
    "https://www.whistler.ca/parks-recreation-culture/meadow-park-sports-centre/",
  indoor: "https://www.whistler.com/activities/indoor/",
  coastMountain: "https://www.coastmountainbrewing.com/",
  pembertonDrive: "https://www.tourismpembertonbc.com/getting-to-pemberton",
  northArm: "https://www.northarmfarm.com/about",
  farmStand: "https://www.tourismpembertonbc.com/pemberton-farm-stand-tour",
  beerFarmers: "https://www.thebeerfarmers.com/visitus",
  townSquare: "https://www.townsquarepemberton.com/",
  mileOne: "https://www.mileoneeatinghouse.com/about-us",
  pony: "https://theponyrestaurant.com/",
  blackbird: "https://www.tourismpembertonbc.com/blackbird-bakery",
  twoCedars: "/listings/two-cedars-kadenwood",
  mountaintop: "/listings/luxury-ski-in-ski-out-7-bedroom-kadenwood",
  panoramic: "/listings/panoramic-estate-kadenwood",
  woodrun: "/listings/woodrun-2-bed",
  tyndall: "/listings/whistler-village-views-luxury-2-5-bedroom",
  guesty: "https://acehost.guestybookings.com/",
} as const;

export const SCHEMA_ABOUT = [
  "Whistler winter activities",
  "Things to do in Whistler besides skiing",
  "Pemberton day trips",
];

export const FAQ_ITEMS = [
  {
    question: "Is Whistler worth visiting if you do not ski?",
    answer:
      "Yes. A winter stay can include spa time, mountain sightseeing, museums, guided adventures, dining and a day trip to Pemberton. Choose your accommodation with transport in mind so non-skiers can enjoy their own plans while the rest of the group is on the mountain.",
  },
  {
    question: "What is a good rest day during a Whistler ski trip?",
    answer:
      "Scandinave Spa, a massage, a gentle Village walk or a long lunch are all good starting points. Snowmobiling, ziplining and the sliding track are better thought of as different adventures than complete physical rest.",
  },
  {
    question: "Can you do the Crystal Hut fondue experience without skiing?",
    answer:
      "Yes. The guided dinner experience offers snowmobile or heated snowcat transport. Book the option that suits your group and confirm the operator's participation requirements.",
  },
  {
    question: "What can families do in Whistler besides skiing?",
    answer:
      "Depending on the children's ages and the seasonal schedule, consider tubing, skating, swimming, an escape room, Vallea Lumina or a guided snowshoe outing. Museums and indoor games give you useful alternatives when the weather changes.",
  },
  {
    question: "Is Pemberton close enough for a day trip?",
    answer:
      "Yes. Pemberton village is roughly a 30-minute drive north in normal conditions. North Arm Farm and The Beer Farmers need additional time, and winter roads can make the journey longer. Plan around the stops' opening days and allow a relaxed return.",
  },
];
