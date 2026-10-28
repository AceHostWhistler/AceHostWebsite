export const SLUG = "whistler-snow-report-october-28-2026";

export const CANONICAL_URL = `https://www.acehost.ca/post/${SLUG}`;

export const PUBLISH_DATE = "October 28, 2026";
export const ISO_PUB = "2026-10-28T17:00:00.000Z";
export const ISO_MOD = ISO_PUB;
export const READ_TIME = "7 min read";
export const CATEGORY = "Whistler Snow/Weather Report";

export const HEADLINE =
  "Whistler Snow Report October 28, 2026: Fresh Alpine Snow Defies the Super El Niño Gloom";

export const META = {
  title: "Whistler Snow Report Oct 28 2026 | El Niño Update",
  description:
    "Fresh October snow in Whistler, the dated alpine forecast and what a strong El Niño really means for the 2026/27 ski season. Read the AceHost update.",
};

export const SOCIAL = {
  title: "Fresh Whistler Snow Challenges the Super El Niño Gloom",
  description: META.description,
};

export const EXCERPT =
  "Fresh October snow is giving Whistler skiers reasons for optimism. Our dated update separates reported snowfall from the alpine forecast and explains what a strong El Niño can, and cannot, tell us about the season ahead.";

export const EL_NINO_GUIDE_PATH =
  "/post/whistler-weather-forecast-2026-2027-winter";

export const HERO = {
  src: "/photos/properties/Two Cedars New/Two Cedars Cover photo snow.png",
  alt: "Snow around a luxury Whistler home in winter, an illustrative AceHost photo",
  caption:
    "An AceHost Whistler winter photo. This image is illustrative and was not captured as a verified record of October 28, 2026 alpine conditions.",
};

export const TOC_ITEMS = [
  { id: "how-much-snow", label: "How much snow has Whistler received" },
  {
    id: "alpine-forecast",
    label: "The Whistler alpine snow forecast for late October",
  },
  {
    id: "alpine-vs-village",
    label: "Why alpine conditions matter more than village rain",
  },
  { id: "super-el-nino", label: "What a super El Niño means for Whistler" },
  { id: "el-nino-2015-2016", label: "More than twelve metres in 2015/2016" },
  {
    id: "memorable-snowstorms",
    label: "Can extreme weather still bring memorable snowstorms",
  },
  {
    id: "season-ahead",
    label: "What this means for the Whistler ski season ahead",
  },
  { id: "faq", label: "Quick answers for Whistler skiers" },
  { id: "sources", label: "Sources for this dated report" },
];

export const FORECAST_ISSUE =
  "Tourism Whistler RWDI alpine forecast, issued at 9:15 am Pacific on October 28, 2026";

export const FORECAST_ROWS = [
  {
    period: "Wednesday October 28",
    snow: "5 cm",
    alpineHigh: "-4°C",
    freezingLevel: "1,100 m",
  },
  {
    period: "Thursday October 29",
    snow: "7 cm",
    alpineHigh: "-4°C",
    freezingLevel: "1,200 m",
  },
  {
    period: "Friday October 30",
    snow: "4 cm",
    alpineHigh: "-3°C",
    freezingLevel: "1,400 m",
  },
  {
    period: "Saturday October 31",
    snow: "Trace",
    alpineHigh: "-3°C",
    freezingLevel: "1,500 m",
  },
] as const;

export const SOURCE_LINKS = {
  snowForecast:
    "https://www.snow-forecast.com/resorts/Whistler-Blackcomb/snow-report",
  tourismWhistlerWeather: "https://www.whistler.com/weather/",
  mountainInfo:
    "https://www.whistlerblackcomb.com/the-mountain/about-the-mountain/mountain-info.aspx",
  noaaEnsoDisc:
    "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml",
  usgsElNino:
    "https://www.usgs.gov/programs/climate-adaptation-science-centers/2026-el-nino-what-does-it-mean-resource-managers",
  climateDataCanada:
    "https://climatedata.ca/news/what-the-developing-exceptional-el-nino-means-for-canada-in-2026-27/",
  tourismWhistlerHistory: "https://www.whistler.com/weather/history/",
  usgsNorthwest:
    "https://www.usgs.gov/programs/climate-adaptation-science-centers/regional-super-el-nino-impacts-northwest-us",
  operatingDates:
    "https://www.whistlerblackcomb.com/explore-the-resort/about-the-resort/hours-of-operation.aspx",
  elNinoGuide: EL_NINO_GUIDE_PATH,
} as const;

export const SCHEMA_CITATIONS = [
  SOURCE_LINKS.snowForecast,
  SOURCE_LINKS.tourismWhistlerWeather,
  SOURCE_LINKS.noaaEnsoDisc,
  SOURCE_LINKS.tourismWhistlerHistory,
];

export const SOURCES = [
  {
    id: 1,
    href: SOURCE_LINKS.snowForecast,
    label: "Snow-Forecast report updated October 28, 2026",
    external: true,
  },
  {
    id: 2,
    href: SOURCE_LINKS.tourismWhistlerWeather,
    label:
      "Tourism Whistler alpine forecast issued October 28, 2026 at 9:15 am Pacific",
    external: true,
  },
  {
    id: 3,
    href: SOURCE_LINKS.mountainInfo,
    label: "Whistler Blackcomb weather and elevation reference",
    external: true,
  },
  {
    id: 4,
    href: SOURCE_LINKS.noaaEnsoDisc,
    label: "NOAA ENSO Diagnostic Discussion issued October 8, 2026",
    external: true,
  },
  {
    id: 5,
    href: SOURCE_LINKS.usgsElNino,
    label: "USGS explanation of the 2026 El Niño",
    external: true,
  },
  {
    id: 6,
    href: SOURCE_LINKS.climateDataCanada,
    label:
      "Canadian Centre for Climate Services outlook published August 21, 2026",
    external: true,
  },
  {
    id: 7,
    href: SOURCE_LINKS.tourismWhistlerHistory,
    label: "Tourism Whistler historical snowfall table",
    external: true,
  },
  {
    id: 8,
    href: SOURCE_LINKS.usgsNorthwest,
    label: "USGS regional discussion for Idaho, Oregon and Washington",
    external: true,
  },
  {
    id: 9,
    href: SOURCE_LINKS.operatingDates,
    label: "Whistler Blackcomb official operating dates",
    external: true,
  },
  {
    id: 10,
    href: SOURCE_LINKS.elNinoGuide,
    label: "AceHost Whistler winter 2026/2027 El Niño guide",
    external: false,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Does October snow prove Whistler will have a good winter?",
    answer:
      "No. It is an encouraging early development, but a few snowy days cannot establish the outcome of a full ski season. Good skiing remains possible during El Niño, with elevated risks from warmer weather.",
  },
  {
    question: "Does rain in Whistler Village mean rain on the ski slopes?",
    answer:
      "Not necessarily. The mountain rises well above the Village. Check the alpine forecast and freezing level alongside the Village forecast.",
  },
  {
    question: "When is Whistler Blackcomb scheduled to open?",
    answer:
      "The resort is targeting November 20, 2026, with opening and terrain dependent on weather and conditions. Check official operations updates before travelling.",
  },
];
