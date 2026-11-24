export const SLUG = "whistler-snow-report-november-23-2026";

export const CANONICAL_URL = `https://www.acehost.ca/post/${SLUG}`;

export const REPORT_DATE = "November 23, 2026";
export const PUBLISH_DATE = REPORT_DATE;
export const ISO_PUB = "2026-11-23T17:50:00-07:00";
export const ISO_MOD = ISO_PUB;
export const READ_TIME = "12 min read";
export const CATEGORY = "Whistler Snow/Weather Report";

export const HEADLINE =
  "How Is the Snow in Whistler Right Now? Winter 2026–2027 Snow Report";

export const SUBTITLE = "November 23rd update";

export const META = {
  title: "Whistler Snow Report 2026–2027 | November 23 Update",
  description:
    "Whistler's November 23 snow report, alpine forecast, rare polar vortex news and El Niño outlook. Explore ski-in, ski-out and Village stays with AceHost.",
};

export const SOCIAL = {
  title: META.title,
  description: META.description,
};

export const OG_IMAGE_ALT =
  "AI-generated winter illustration inspired by Whistler's snowy alpine.";

export const EXCERPT =
  "Blackcomb is open and more alpine snow is forecast. Our November 23 update explores the rare polar vortex development, El Niño and Whistler's elevation advantage.";

export const ASSET_BASE = `/photos/post/${SLUG}`;

export const HERO = {
  src: `${ASSET_BASE}/01-whistler-winter-alpine-hero.webp`,
  src768: `${ASSET_BASE}/01-whistler-winter-alpine-hero-768.webp`,
  alt: "AI-generated illustration of snow-covered alpine slopes and Coast Mountain peaks inspired by Whistler.",
  caption:
    "AI-generated winter illustration inspired by Whistler. Not a photograph or a record of current snow conditions.",
};

export const OG_IMAGE = `${ASSET_BASE}/whistler-snow-report-2026-2027-og.jpg`;

export const TOC_ITEMS = [
  { id: "snow-now", label: "Current Whistler snow conditions" },
  { id: "alpine-forecast", label: "The alpine snow forecast" },
  { id: "polar-vortex", label: "The November 10 polar vortex development" },
  { id: "el-nino", label: "What El Niño means for this winter" },
  { id: "elevation", label: "Whistler's elevation advantage" },
  { id: "snow-history", label: "A snowy El Niño winter from Whistler's past" },
  { id: "winter-outlook", label: "Why we are looking forward to winter" },
  { id: "where-to-stay", label: "Whistler homes for your winter stay" },
  { id: "snow-faq", label: "Quick snow questions" },
];

export const ILLUSTRATION_CAPTION =
  "AI-generated winter illustration inspired by Whistler. Not a photograph or a record of current snow conditions.";

export const CHALET_CAPTION =
  "AI-generated illustration of a fictional Whistler-style chalet. Not a photograph of an AceHost property or current snow conditions.";

export const SNOW_ROWS = [
  { measure: "Snow in the last 24 hours", value: "2 cm" },
  { measure: "Snow in the last 7 days", value: "22 cm" },
  { measure: "Reported base depth", value: "37 cm" },
  { measure: "Overall conditions", value: "Early season" },
] as const;

export const FORECAST_ROWS = [
  {
    period: "Tuesday, November 24",
    snow: "15-20 cm",
    freezingLevel: "1,700 m",
  },
  {
    period: "Wednesday, November 25",
    snow: "15-25 cm",
    freezingLevel: "1,900 m",
  },
  {
    period: "Thursday, November 26",
    snow: "20-35 cm",
    freezingLevel: "1,900 m",
  },
] as const;

export const ELEVATION_ROWS = [
  { location: "Whistler Village", elevation: "675 m" },
  { location: "Roundhouse Lodge", elevation: "1,850 m" },
  { location: "Whistler Peak", elevation: "2,182 m" },
  { location: "Top of 7th Heaven Express", elevation: "2,284 m" },
] as const;

export const SOURCE_LINKS = {
  snowReport:
    "https://www.whistlerblackcomb.com/the-mountain/mountain-conditions/snow-and-weather-report",
  opening:
    "https://news.vailresorts.com/WhistlerBlackcomb-Opening-2026",
  operations:
    "https://www.whistlerblackcomb.com/explore-the-resort/about-the-resort/hours-of-operation.aspx",
  forecast: "https://www.whistler.com/weather/",
  vortex:
    "https://www.weather.gov/media/arx/winter/Winter%20Outlook%202026-27%20-%20November%2019,%202026.pdf",
  vortexScience:
    "https://prod-01-asg-www-climate.woc.noaa.gov/news-features/blogs/enso/el-ni%C3%B1o-and-stratospheric-polar-vortex",
  enso:
    "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_disc_nov2026/ensodisc.pdf",
  canada:
    "https://climatedata.ca/news/what-the-developing-exceptional-el-nino-means-for-canada-in-2026-27/",
  elevation:
    "https://www.whistlerblackcomb.com/the-mountain/mountain-conditions/mountain-cams.aspx",
  history: "https://www.whistler.com/weather/history/",
  ensoHistory:
    "https://wmo.int/sites/default/files/2023-06/WMO_ENSO_Feb16_Eng.pdf",
  mountain:
    "https://www.whistlerblackcomb.com/the-mountain/about-the-mountain/mountain-info.aspx",
  aer: "https://published.aer.com/aoblog/aoblog.html",
  liftStatus:
    "https://www.whistlerblackcomb.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
  octoberReport: "/post/whistler-snow-report-october-28-2026",
  winterOutlook: "/post/whistler-weather-forecast-2026-2027-winter",
  winterActivities: "/post/whistler-winter-activities-beyond-skiing",
} as const;

export const SCHEMA_CITATIONS = [
  SOURCE_LINKS.snowReport,
  SOURCE_LINKS.opening,
  SOURCE_LINKS.operations,
  SOURCE_LINKS.forecast,
  SOURCE_LINKS.vortex,
  SOURCE_LINKS.vortexScience,
  SOURCE_LINKS.enso,
  SOURCE_LINKS.canada,
  SOURCE_LINKS.elevation,
  SOURCE_LINKS.history,
  SOURCE_LINKS.ensoHistory,
  SOURCE_LINKS.mountain,
  SOURCE_LINKS.aer,
];

export const SOURCES = [
  {
    id: 1,
    href: SOURCE_LINKS.snowReport,
    title: "Whistler Blackcomb snow report",
    note: "Snow measurements updated November 23, 2026 at 5:12 AM PST. The rolling report will change.",
  },
  {
    id: 2,
    href: SOURCE_LINKS.opening,
    title: "Whistler Blackcomb opening announcement",
    note: "November 20, 2026. Blackcomb opening and planned Whistler opening.",
  },
  {
    id: 3,
    href: SOURCE_LINKS.operations,
    title: "Whistler Blackcomb hours and operations",
    note: "Checked November 23, 2026. Early-season mandatory downloading and planned November 25 openings.",
  },
  {
    id: 4,
    href: SOURCE_LINKS.forecast,
    title: "Tourism Whistler alpine weather forecast, supplied by RWDI",
    note: "Forecast issued November 23, 2026 at 3 PM Pacific. Use this issue consistently, not a sum of different model runs.",
  },
  {
    id: 5,
    href: SOURCE_LINKS.vortex,
    title: "National Weather Service winter outlook",
    note: "Issued November 19, 2026. PDF page 25 dates SSW conditions to November 10 and reports November rarity and vortex recovery. Regional US temperature probabilities are not a Whistler forecast.",
  },
  {
    id: 6,
    href: SOURCE_LINKS.vortexScience,
    title: "NOAA, El Niño and the stratospheric polar vortex",
    note: "Amy Butler, April 28, 2016. Scientific background, not a current forecast.",
  },
  {
    id: 7,
    href: SOURCE_LINKS.enso,
    title: "NOAA ENSO Diagnostic Discussion",
    note: "November 12, 2026. Greater than 79% probability of strong-to-very-strong El Niño through January-March 2027.",
  },
  {
    id: 8,
    href: SOURCE_LINKS.canada,
    title: "Canadian Centre for Climate Services, the 2026-27 El Niño",
    note: "August 21, 2026. Canadian seasonal context and variability in coastal precipitation.",
  },
  {
    id: 9,
    href: SOURCE_LINKS.elevation,
    title: "Whistler Blackcomb webcam elevations",
    note: "Village 675 m, Roundhouse 1,850 m, Whistler Peak 2,182 m, top of 7th Heaven Express 2,284 m.",
  },
  {
    id: 10,
    href: SOURCE_LINKS.history,
    title: "Tourism Whistler historical snowfall",
    note: "2015-16 November-May total 1,257 cm. Monthly values 168, 338, 173, 206, 318, 31, 23 cm.",
  },
  {
    id: 11,
    href: SOURCE_LINKS.ensoHistory,
    title: "World Meteorological Organization El Niño update",
    note: "February 18, 2016. Confirms the very strong 2015-16 El Niño.",
  },
  {
    id: 12,
    href: SOURCE_LINKS.mountain,
    title: "Whistler Blackcomb mountain information",
    note: "Resort-wide capacity and terrain statistics, not terrain currently open. 8,171 acres and more than 200 marked runs.",
  },
  {
    id: 13,
    href: SOURCE_LINKS.aer,
    title: "AER Arctic Oscillation and Polar Vortex Blog",
    note: "Dr. Judah Cohen, November 23, 2026 edition. Experimental broad regional outlook, possible cooler west coast next week. Rolling page will change.",
  },
] as const;

export type StayProperty = {
  name: string;
  listingHref: string;
  airbnbHref: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  body: string;
  listingLabel: string;
  airbnbLabel: string;
};

export const SKI_ACCESS_PROPERTIES: StayProperty[] = [
  {
    name: "Woodrun Penthouse",
    listingHref: "/listings/woodrun-2-bed",
    airbnbHref: "https://www.airbnb.ca/rooms/1793052831212188813",
    image: `${ASSET_BASE}/woodrun-penthouse.webp`,
    width: 1200,
    height: 799,
    alt: "Woodrun penthouse living room with vaulted ceilings, log beams and mountain-facing windows.",
    body: "A two-bedroom Blackcomb penthouse with mountain views, a shared heated pool and hot tub, ski lockers and two parking spaces. A lovely fit for guests who want to stay beside the slopes.",
    listingLabel: "Explore Woodrun Penthouse",
    airbnbLabel: "Book Woodrun Penthouse on Airbnb",
  },
  {
    name: "The Mountaintop",
    listingHref: "/listings/luxury-ski-in-ski-out-7-bedroom-kadenwood",
    airbnbHref: "https://www.airbnb.ca/rooms/1599369454342102375",
    image: `${ASSET_BASE}/the-mountaintop.webp`,
    width: 1200,
    height: 800,
    alt: "The Mountaintop estate exterior with illuminated windows, outdoor hot tub and barrel sauna.",
    body: "A seven-bedroom Kadenwood estate with a private hot tub, outdoor sauna, steam room and generous gathering spaces. The neighbourhood's private gondola connects to Creekside.",
    listingLabel: "Explore The Mountaintop",
    airbnbLabel: "Book The Mountaintop on Airbnb",
  },
  {
    name: "Chalet La Forja",
    listingHref: "/listings/chalet-la-forja-kadenwood",
    airbnbHref: "https://www.airbnb.ca/rooms/52655503",
    image: `${ASSET_BASE}/chalet-la-forja.webp`,
    width: 1200,
    height: 902,
    alt: "Chalet La Forja exterior at dusk with a heated outdoor pool and illuminated living spaces.",
    body: "A spacious Kadenwood estate with a heated outdoor pool, hot tub, sauna, gym and winter butler service. An inviting option for a special family ski holiday.",
    listingLabel: "Explore Chalet La Forja",
    airbnbLabel: "Book Chalet La Forja on Airbnb",
  },
  {
    name: "Bluffs Two-Bedroom",
    listingHref: "/listings/bluffs-unit-4-taluswood",
    airbnbHref: "https://www.airbnb.com/rooms/1693549013411163327",
    image: `${ASSET_BASE}/bluffs-two-bedroom.webp`,
    width: 1200,
    height: 799,
    alt: "Bluffs two-bedroom living and dining area with windows facing the mountains.",
    body: "A two-bedroom Taluswood retreat with mountain views, a shared hot tub and a boot dryer. A short walk reaches the ski access bridge onto Dave Murray Downhill.",
    listingLabel: "Explore Bluffs Two-Bedroom",
    airbnbLabel: "Book Bluffs Two-Bedroom on Airbnb",
  },
  {
    name: "Bluffs 8 Penthouse",
    listingHref: "/listings/bluffs-unit-8-taluswood",
    airbnbHref: "https://www.airbnb.ca/rooms/1747927495845801389",
    image: `${ASSET_BASE}/bluffs-8-penthouse.webp`,
    width: 1200,
    height: 800,
    alt: "Bluffs 8 penthouse dining room with vaulted ceilings and an open kitchen.",
    body: "A three-bedroom penthouse with mountain views and a shared hot tub. Allow a two-to-three-minute walk to the access bridge before skiing toward Creekside when the connection is open.",
    listingLabel: "Explore Bluffs 8 Penthouse",
    airbnbLabel: "Book Bluffs 8 Penthouse on Airbnb",
  },
];

export const VILLAGE_PROPERTIES: StayProperty[] = [
  {
    name: "Granite Court",
    listingHref: "/listings/rare-3-bedroom-whistler-village-walk-to-hill",
    airbnbHref: "https://www.airbnb.ca/rooms/1565322561889624431",
    image: `${ASSET_BASE}/granite-court.webp`,
    width: 1200,
    height: 815,
    alt: "Granite Court living room with a fireplace and wraparound windows.",
    body: "A three-bedroom Village home with its own hot tub and wraparound balconies. The property listing describes a seven-to-ten-minute walk to the lifts, with dining and shops close by.",
    listingLabel: "Explore Granite Court",
    airbnbLabel: "Book Granite Court on Airbnb",
  },
  {
    name: "Valhalla",
    listingHref: "/listings/valhalla-unit-33-village",
    airbnbHref: "https://www.airbnb.ca/rooms/1693450379764005787",
    image: `${ASSET_BASE}/valhalla.webp`,
    width: 1200,
    height: 800,
    alt: "Valhalla townhouse kitchen with a peninsula and stainless-steel appliances.",
    body: "A three-bedroom Village North townhouse with a private balcony hot tub and fireplace. Enjoy easy access to the Village Stroll, with an approximately twelve-minute walk to Whistler Village Gondola.",
    listingLabel: "Explore Valhalla",
    airbnbLabel: "Book Valhalla on Airbnb",
  },
];

export const DRIVE_PROPERTIES: StayProperty[] = [
  {
    name: "Falcon",
    listingHref: "/listings/falcon-blueberry-drive",
    airbnbHref: "https://www.airbnb.ca/rooms/18060329",
    image: `${ASSET_BASE}/falcon.webp`,
    width: 1200,
    height: 746,
    alt: "Falcon chalet living room with a stone fireplace, timber beams and tall windows.",
    body: "A seven-bedroom Blueberry Hill chalet with a private hot tub, barrel sauna and space for up to fifteen guests. Whistler Village is approximately a three-to-four-minute drive away.",
    listingLabel: "Explore Falcon",
    airbnbLabel: "Book Falcon on Airbnb",
  },
  {
    name: "Blueberry Six-Bedroom",
    listingHref: "/listings/luxury-6-bedroom-whistler-village-blueberry",
    airbnbHref: "https://www.airbnb.ca/rooms/1551638001847968788",
    image: `${ASSET_BASE}/blueberry-six-bedroom.webp`,
    width: 1200,
    height: 799,
    alt: "Blueberry six-bedroom home with an open kitchen, dining table and living area.",
    body: "A comfortable six-bedroom retreat sleeping twelve, with forest views, ski storage and two garage spaces. A peaceful setting approximately three to four minutes by car from the Village and gondolas.",
    listingLabel: "Explore Blueberry Six-Bedroom",
    airbnbLabel: "Book Blueberry Six-Bedroom on Airbnb",
  },
];
