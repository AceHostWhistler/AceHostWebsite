export const SLUG = "whistler-weather-forecast-2026-2027-winter";

export const CANONICAL_URL = `https://acehost.ca/post/${SLUG}`;

export const PUBLISH_DATE = "August 26, 2026";
export const ISO_MOD = "2026-08-26T10:00:00-07:00";
export const READ_TIME = "28 min read";
export const CATEGORY = "Whistler Winter";

export const META = {
  title: "Whistler Weather Forecast 2026/2027: El Niño & Snow Forecast | AceHost",
  description:
    "Whistler winter 2026/2027 weather and snow forecast. See what a very strong El Niño could mean for Whistler Blackcomb snowfall, temperatures, January powder and ski conditions.",
};

export const HERO = {
  src: "/photos/properties/2919 Heritage/Drone Mountaintop.png",
  alt: "Skier in deep powder at Whistler Blackcomb during winter",
};

export const OG_IMAGE =
  "/photos/post/whistler-weather-forecast-2026-2027-winter/og-share.jpg";

export const IMAGES = {
  alpineTerrain: {
    src: "/photos/properties/Muirfield Golf Course/Muirfield drone snow.png",
    alt: "Snow-covered alpine terrain at Whistler Blackcomb",
    caption:
      "With terrain stretching from the valley to more than 2,280 metres, weather can be dramatically different across Whistler Blackcomb's elevation range.",
  },
  powderStorm: {
    src: "/photos/post/justin-tse-chalet-la-forja-whistler/justin-whistler-snow.png",
    alt: "Heavy snowfall and powder skiing in Whistler British Columbia",
  },
  coastMountains: {
    src: "/photos/properties/Muirfield Golf Course/Muirfield Snow shot.png",
    alt: "Pacific storm clouds over the Coast Mountains near Whistler",
  },
  alpineValley: {
    src: "/photos/properties/Falcon/Falcon Master snow.png",
    alt: "Whistler alpine terrain overlooking the valley in winter",
  },
  worldComparison: {
    src: "/photos/properties/Chalet La Forja/New Drone Cover photo Forja.png",
    alt: "Whistler Blackcomb alpine skiing during winter",
  },
  villageSnow: {
    src: "/photos/properties/whistler-village-views-new/whistler-village-views.jpg",
    alt: "Whistler Village covered in fresh snow during winter",
  },
  ctaChalet: {
    src: "/photos/properties/Two Cedars New/Two Cedars Cover photo snow.png",
    alt: "Luxury Whistler vacation home in winter",
  },
} as const;

export const TOC_ITEMS = [
  { id: "quick-forecast", label: "The Quick Whistler Winter 2026/2027 Forecast" },
  { id: "la-nina-vs-el-nino", label: "La Niña vs. El Niño: What Is Actually Happening?" },
  { id: "whistler-el-nino-history", label: "Whistler El Niño Historical Snowfall" },
  { id: "january-february-snowfall", label: "El Niño May Shift Whistler's Best Snow Deeper Into Winter" },
  { id: "warmer-weather-more-snow", label: "How Can a Warmer Winter Sometimes Produce Huge Snowstorms?" },
  { id: "pacific-moisture", label: "Whistler's Pacific Moisture Source" },
  { id: "whistler-elevation", label: "Whistler Is Almost Two Different Climates in One Resort" },
  { id: "whistler-vs-world", label: "Whistler vs U.S. and European Ski Resorts" },
  { id: "month-by-month-forecast", label: "Month-by-Month Whistler Snow Forecast" },
  { id: "risks", label: "The Honest Risks for Whistler in Winter 2026/2027" },
  { id: "final-forecast", label: "Our Final Whistler Winter 2026/2027 Snow Forecast" },
  { id: "faq", label: "FAQ" },
];

export const EL_NINO_SNOWFALL_DATA = [
  { season: "1982/1983", snowfall: 946 },
  { season: "1986/1987", snowfall: 882 },
  { season: "1991/1992", snowfall: 907 },
  { season: "1997/1998", snowfall: 876 },
  { season: "2002/2003", snowfall: 921 },
  { season: "2009/2010", snowfall: 1165 },
  { season: "2015/2016", snowfall: 1018 },
] as const;

export const EL_NINO_NORMAL_CM = 914;
export const EL_NINO_AVERAGE_CM = 959;

export const EL_NINO_MONTHLY_DATA = [
  { month: "Nov", percent: 94 },
  { month: "Dec", percent: 84 },
  { month: "Jan", percent: 138 },
  { month: "Feb", percent: 127 },
  { month: "Mar", percent: 96 },
  { month: "Apr", percent: 81 },
] as const;

export const EXTERNAL_LINKS = {
  noaaCpc: "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/",
  environmentCanada:
    "https://www.canada.ca/en/environment-climate-change.html",
  openSnow: "https://opensnow.com/",
  whistlerBlackcombStats:
    "https://www.whistlerblackcomb.com/the-mountain/about-the-mountain/mountain-info.aspx",
  nasaOrographic:
    "https://earthobservatory.nasa.gov/images/77106/orographic-precipitation",
  noaaMoisture: "https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-water-vapor",
  ecmwfEnso:
    "https://www.ecmwf.int/en/about/media-centre/news/2023/el-nino-and-its-possible-impacts-europe",
} as const;

export const FAQ_ITEMS = [
  {
    question: "Will Whistler have an El Niño winter in 2026/2027?",
    answer:
      "Yes. As of August 2026, El Niño conditions are already present. NOAA has issued an El Niño Advisory and says there is a greater than 90% chance of a very strong El Niño during fall and winter 2026/2027.",
  },
  {
    question: "Does El Niño mean less snow in Whistler?",
    answer:
      "Not necessarily. El Niño increases the probability of warmer conditions across British Columbia, but Whistler's historical snowfall has been surprisingly resilient. Four of seven significant El Niño seasons analyzed by OpenSnow exceeded Whistler's 30-year snowfall normal through March 31.",
  },
  {
    question: "Is La Niña better than El Niño for Whistler snow?",
    answer:
      "Generally, yes. La Niña tends to favour a more advantageous storm and temperature pattern for Western Canadian skiing. However, ENSO changes probabilities rather than determining every storm in a season.",
  },
  {
    question: "What is the average snowfall at Whistler Blackcomb?",
    answer:
      "Whistler Blackcomb currently lists average annual snowfall of 1,072 cm, or 422 inches.",
  },
  {
    question: "What month gets the most snow in Whistler during El Niño?",
    answer:
      "Historically, January has performed extremely well. Across seven significant El Niño seasons analyzed by OpenSnow, January snowfall averaged approximately 138% of normal, and five of those seven Januaries were above average.",
  },
  {
    question: "Will it rain in Whistler during El Niño?",
    answer:
      "Rain at lower elevations is more likely during a warm El Niño winter. However, conditions can be entirely different higher on Whistler and Blackcomb. The resort rises from approximately 675 metres at its base to 2,284 metres at its highest lift-accessed elevation.",
  },
  {
    question: "What is the best time to ski Whistler in winter 2026/2027?",
    answer:
      "Based on historical significant El Niño snowfall patterns, January and February 2027 are particularly interesting. January averaged 138% of normal snowfall and February 127% in the seven-season OpenSnow dataset. This is historical guidance rather than a guarantee for winter 2026/2027.",
  },
  {
    question: "Is Whistler a better choice than U.S. ski resorts during El Niño?",
    answer:
      "It depends on the region. California and Utah currently have more favourable above-normal snowfall signals for winter 2026/2027, while many resorts across the northern U.S. have less favourable signals. Whistler's advantage is its exceptionally high 422-inch normal snowfall, enormous vertical range and historically resilient mid-mountain snowfall during El Niño winters.",
  },
  {
    question: "Is Whistler or Europe better for snow in winter 2026/2027?",
    answer:
      "It is far too early to make that call. Current outlooks favour above-normal snowfall across parts of the Alps, but also warmer-than-normal temperatures there. El Niño has a weaker and more complex relationship with European winter weather than it does with North America.",
  },
];
