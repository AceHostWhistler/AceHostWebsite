// Define the interface for article objects
export interface Article {
  title: string;
  category: string;
  description?: string;
  readTime: string;
  link: string;
  coverImage: string;
  publishedAt?: string;
  modifiedAt?: string;
  headline?: string;
  keywords?: string[];
}

// All blog articles data with proper image paths
export const allArticles: Article[] = [
  {
    title: "Justin Tse in Kadenwood | Luxury Whistler Experience with AceHost | AceHost",
    category: "Luxury Travel, Kadenwood",
    description:
      "Creator Justin Tse stayed with AceHost in Kadenwood, Whistler. See how our ski-in/ski-out chalets, VIP concierge, and curated experiences turn a Whistler trip…",
    readTime: "12 min read",
    link: "/post/justin-tse-chalet-la-forja-whistler",
    coverImage:
      "/photos/properties/Chalet La Forja/2950 Heritage Peaks Trail 4 Large 2.png",
    publishedAt: "2026-07-31T19:00:00.000Z",
    headline: "Justin Tse's Luxury Whistler Experience with AceHost in Kadenwood",
  },
  {
    title: "Whistler Weather Forecast 2026/2027: El Niño & Snow | AceHost",
    category: "Whistler Winter",
    description:
      "Whistler winter 2026/2027 weather and snow forecast. See what a very strong El Niño could mean for Whistler Blackcomb snowfall, temperatures, January powder…",
    readTime: "28 min read",
    link: "/post/whistler-weather-forecast-2026-2027-winter",
    coverImage:
      "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Drone Blueberry shot.png",
    publishedAt: "2026-08-26T17:00:00.000Z",
    headline: "Whistler Weather Forecast 2026/2027 Winter: La Niña/El Niño Outlook & Snow Forecast",
  },
  {
    title: "Whistler Airbnb Zoning & Licence Rules | AceHost",
    category: "Property Management, Whistler",
    description:
      "Thinking about listing a Whistler property on Airbnb? Learn how zoning, covenants, municipal licensing and provincial registration determine whether nightly…",
    readTime: "12 min read",
    link: "/post/can-you-airbnb-your-whistler-home-zoning-licensing-nightly-rental-rules",
    coverImage:
      "/photos/properties/3445-Heron-Place/68-3445 Heron Place 53-Edit.jpg",
    publishedAt: "2026-08-01T17:00:00.000Z",
    headline: "Can You Airbnb Your Whistler Home? Zoning, Licensing and Nightly Rental Rules Explained",
  },
  {
    title: "Whistler's Most Impressive Airbnb Homes: Large Luxury Chalets, Mansions and Ski-In/Ski-Out Estates | AceHost",
    category: "Luxury Properties, Group Travel",
    description:
      "Explore nine of AceHost's best Whistler mansion rentals and luxury chalets, from fully staffed Kadenwood estates to large-group homes near the Village and…",
    readTime: "15 min read",
    link: "/post/whistler-mansion-rentals-largest-luxury-private-chalets",
    coverImage:
      "/photos/properties/Chalet La Forja/New Drone Cover photo Forja.png",
    publishedAt: "2026-08-01T19:00:00.000Z",
    headline: "Whistler's Most Impressive Airbnb Homes: Large Luxury Chalets, Mansions and Ski-In/Ski-Out Estates",
  },
  {
    title: "Where to Stay in Whistler in Winter | AceHost",
    category: "Luxury Travel, Whistler",
    description:
      "Compare Whistler Village, Creekside, Kadenwood, Upper Village, Blueberry and more to find the best area for your Whistler winter ski trip.",
    readTime: "20 min read",
    link: "/post/where-to-stay-in-whistler-winter",
    coverImage:
      "/photos/properties/Falcon/Falcon Master snow.png",
    publishedAt: "2026-07-28T19:00:00.000Z",
    headline: "Where to Stay in Whistler in Winter: The Best Neighbourhood for Every Type of Ski Trip",
  },
  {
    title: "28 Best Places to Stay in Whistler | AceHost",
    category: "Luxury Properties, Whistler",
    description:
      "Explore 28 AceHost Whistler vacation rentals, from luxury Kadenwood ski chalets and large family homes to Village condos, penthouses, and ski-in ski-out stays.",
    readTime: "22 min read",
    link: "/post/28-best-places-to-stay-in-whistler",
    coverImage:
      "/photos/properties/Two Cedars New/Two Cedars Cover photo snow.png",
    publishedAt: "2026-07-26T17:00:00.000Z",
    headline: "From Village Condos to $20 Million Chalets: 28 Incredible Places to Stay in Whistler",
  },
  {
    title: "FIFA Vancouver / Whistler Luxury Experience | AceHost",
    category: "FIFA 2026, Luxury Travel",
    description:
      "Planning World Cup 2026 in Vancouver? Discover why staying in Whistler gives you a private luxury base with easy matchday access, plus featured homes to book.",
    readTime: "13 min read",
    link: "/post/fifa-vancouver-whistler-the-luxury-whistler-fifa-experience",
    coverImage:
      "/photos/properties/2919 Heritage/Mountaintop Snow cover.png",
    publishedAt: "2026-05-01T16:30:00.000Z",
  },
  {
    title: "Is Owning a Vacation Rental in Whistler Worth It in 2026? How Much Can a Luxury Whistler Rental Actually Make? | AceHost",
    category: "Property Investment, Whistler",
    description:
      "Thinking about buying a vacation rental in Whistler? Why the market still looks strong, what separates a good investment home from a weak one, and a simple…",
    readTime: "15 min read",
    link: "/post/is-owning-a-vacation-rental-in-whistler-worth-it-2026",
    coverImage:
      "/photos/properties/303-Tyndall Lodge/01 - 20260107 A7M4 01 A1_03798.jpg",
    publishedAt: "2026-04-23T17:00:00.000Z",
  },
  {
    title: "The Best Time to Visit Whistler for Luxury Travelers, Winter, Summer, Christmas, or Shoulder Season? | AceHost",
    category: "Luxury Travel, Whistler",
    description:
      "Wondering when to visit Whistler? From Christmas magic and peak powder to sunny March ski days, bluebird April laps, summer patios, and shoulder-season dining…",
    readTime: "14 min read",
    link: "/post/best-time-to-visit-whistler-for-luxury-travelers",
    coverImage:
      "/photos/properties/Muirfield Golf Course/Muirfield Snow shot.png",
    publishedAt: "2026-04-24T19:00:00.000Z",
  },
  {
    title: "Self-Managing vs Hiring a Whistler Property Manager, What Owners Need to Know | AceHost",
    category: "Property Management",
    description:
      "Trying to decide between self-managing your Whistler vacation rental or hiring a property manager? Here is what owners need to know about time, revenue, guest…",
    readTime: "12 min read",
    link: "/post/self-managing-vs-hiring-a-whistler-property-manager-what-owners-need-to-know",
    coverImage:
      "/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05891.jpg",
    publishedAt: "2026-04-23T21:00:00.000Z",
  },
  {
    title: "Best Luxury Airbnb Ski in Ski out Vacation Rentals in Whistler for Large Groups | AceHost",
    category: "Luxury Properties, Group Travel",
    description:
      "Looking for the best luxury Airbnb ski in ski out vacation rentals in Whistler for a large group? Explore spacious Whistler homes with hot tubs, big kitchens,…",
    readTime: "16 min read",
    link: "/post/best-luxury-airbnb-ski-in-ski-out-vacation-rentals-in-whistler-for-large-groups",
    coverImage:
      "/photos/properties/Two Cedars New/Two Cedars Cover photo snow.png",
    publishedAt: "2026-04-23T19:00:00.000Z",
  },
  {
    title: "Best Condo Airbnb Rentals in Whistler | AceHost",
    category: "Luxury Properties",
    description:
      "Best condo Airbnb rentals in Whistler. Ski-in/ski-out units, village-center gems, and 1–3 bedroom mountain escapes with stunning views and amenities.",
    readTime: "12 min read",
    link: "/post/best-condo-rentals-in-whistler",
    coverImage:
      "/photos/post/best-condo-rentals-in-whistler/hero.jpg",
    publishedAt: "2025-10-15T07:00:00.000Z",
  },
  {
    title: "Celebrities Spotted in Whistler with AceHost | AceHost",
    category: "Celebrity Spotting",
    description:
      "Celebrities and influencers spotted in Whistler with AceHost. From Riverdale cast to adventure filmmakers, see who chose our luxury mountain properties.",
    readTime: "10 min read",
    link: "/post/celebrities-influencers-spotted-in-whistler-with-acehost",
    coverImage:
      "/photos/post/Blog Celebrities Spotted/65205c6674572904228e48cc_image008.jpg",
    publishedAt: "2024-12-15T08:00:00.000Z",
  },
  {
    title: "Best Airbnb Property Management in Whistler | AceHost",
    category: "Property Management",
    description:
      "Best Airbnb property management company in Whistler. AceHost offers luxury marketing, guest services, revenue optimization, and hands-off ownership.",
    readTime: "12 min read",
    link: "/post/best-airbnb-property-management-company-in-whistler",
    coverImage:
      "/photos/post/luxury-property-management-investment-opportunities-in-whistler/hero.jpg",
    publishedAt: "2024-12-10T08:00:00.000Z",
  },
  {
    title: "Whistler Luxury Rental Chalets & Homes | AceHost",
    category: "Luxury Properties",
    description:
      "Whistler's best luxury rental chalets and vacation homes. Large-group estates, ski-in/ski-out access, and premium amenities that redefine mountain getaways.",
    readTime: "15 min read",
    link: "/post/whistlers-crown-jewels-where-luxury-rental-homes-redefine-the-mountain-getaway",
    coverImage:
      "/photos/post/whistlers-crown-jewels-where-luxury-rental-homes-redefine-the-mountain-getaway/hero.jpg",
    publishedAt: "2024-10-15T07:00:00.000Z",
  },
  {
    title: "Whistler Dream Rental Homes: Top 5 Luxury Properties | AceHost",
    category: "Luxury Properties",
    description:
      "Whistler's dream rental homes: top 5 luxury vacation properties. Ski-in chalets, village penthouses, and exclusive estates curated by AceHost.",
    readTime: "13 min read",
    link: "/post/whistlers-dream-rental-homes",
    coverImage:
      "/photos/post/whistlers-dream-rental-homes/hero.jpg",
    publishedAt: "2024-08-27T07:00:00.000Z",
  },
  {
    title: "Whistler Snow Report 2024/2025 Season | AceHost",
    category: "Whistler Snow/Weather Report",
    description:
      "Whistler snow report for the 2024/2025 ski season opening. Record snowfall, mountain conditions, and what to expect on Whistler Blackcomb this winter.",
    readTime: "11 minute read",
    link: "/post/whistler-snow-report-record-snowfall-marks-the-start-of-the-2024-2025-ski-season",
    coverImage:
      "/photos/post/WinterSnowReport/WinterSnowHero.png",
    publishedAt: "2024-11-24T08:00:00.000Z",
  },
  {
    title: "Luxury Whistler Vacation Redefined | AceHost",
    category: "VIP Concierge | Luxury Vacation",
    description:
      "Luxury Whistler vacations redefined. How AceHost caters to elite travelers with private chalets, VIP concierge, and curated mountain experiences in Canada.",
    readTime: "20 min",
    link: "/post/luxury-whistler-vacation-redefined-how-acehost-whistler-caters-to-the-1-in-canadas-ultimate-playground",
    coverImage:
      "/photos/post/Luxury Whistler Vacation/Hero.jpg",
    publishedAt: "2024-11-24T08:00:00.000Z",
  },
  {
    title: "Long-Term Luxury Rentals in Whistler | AceHost",
    category: "Long-term, Property",
    description:
      "Find your dream long-term luxury rental in Whistler with AceHost. Explore premium homes, flexible leases, and full-service property care in the mountains.",
    readTime: "10 min read",
    link: "/post/find-your-dream-long-term-luxury-rental-in-whistler-with-acehost",
    coverImage:
      "/photos/post/find-your-dream-long-term-luxury-rental-in-whistler-with-acehost/Hero.jpg",
    publishedAt: "2024-10-02T07:00:00.000Z",
  },
  {
    title: "Top 7 Whistler Luxury Rentals for Christmas & New Year's | AceHost",
    category: "Travel Christmas",
    description:
      "Top 7 luxury vacation rental homes in Whistler for Christmas and New Year's. Premium chalets, festive amenities, and ski-in/ski-out holiday stays.",
    readTime: "15 min read",
    link: "/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years",
    coverImage:
      "/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/Hero.png",
    publishedAt: "2024-11-24T08:00:00.000Z",
  },
  {
    title: "Whistler Winter Outlook 2024: El Niño to La Niña | AceHost",
    category: "Weather Report",
    description:
      "Whistler winter outlook 2024: from El Niño challenges to La Niña promises. What the forecast means for snowfall, ski conditions, and planning your trip.",
    readTime: "10 min read",
    link: "/post/whistlers-winter-outlook-2024-from-el-nino-challenges-to-la-nina-promises",
    coverImage:
      "/photos/post/whistlers-winter-outlook-2024-from-el-nino-challenges-to-la-nina-promises/hero.png",
    publishedAt: "2024-11-24T08:00:00.000Z",
  },
  {
    title: "Whistler Property Management for Investment Homes | AceHost",
    category: "Property Management",
    description:
      "Why a Whistler property management company matters for your investment home. Revenue, guest experience, compliance, and peace of mind for owners.",
    readTime: "15 min read",
    link: "/post/highlighting-the-importance-of-a-property-management-company-for-your-whistler-investment-home",
    coverImage:
      "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05424.jpg",
    publishedAt: "2024-11-24T08:00:00.000Z",
  },
  {
    title: "Ski-In Ski-Out Luxury Chalets in Whistler | AceHost",
    category: "Luxury Properties",
    description:
      "Discover ski-in ski-out luxury chalet homes in Whistler, Canada. AceHost's finest mountain properties with direct slope access, hot tubs, and concierge.",
    readTime: "12 min read",
    link: "/post/discover-the-ultimate-ski-in-ski-out-luxury-chalet-homes-in-whistler-canada",
    coverImage:
      "/photos/post/discover-the-ultimate-ski-in-ski-out-luxury-chalet-homes-in-whistler-canada/hero.jpg",
    publishedAt: "2024-05-09T07:00:00.000Z",
  },
  {
    title: "Best Restaurants in Whistler, Canada | AceHost",
    category: "Dining & Lifestyle",
    description:
      "Best restaurants in Whistler, Canada. Fine dining, coffee shops, cocktail bars, and hidden gems for food lovers visiting the mountain village.",
    readTime: "18 min read",
    link: "/post/the-best-restaurants-in-whistler-canada-food-coffee-cocktails-more",
    coverImage:
      "/photos/post/the-best-restaurants-in-whistler-canada-food-coffee-cocktails-more/hero.jpeg",
    publishedAt: "2024-03-04T08:00:00.000Z",
  },
  {
    title: "Whistler VIP Concierge Services | AceHost",
    category: "VIP Services",
    description:
      "Whistler VIP concierge services from AceHost. Private chefs, heli-skiing, restaurant reservations, and bespoke luxury experiences for your mountain stay.",
    readTime: "14 min read",
    link: "/post/acehost-whistler-vip-concierge-services",
    coverImage:
      "/photos/post/acehost-whistler-vip-concierge-services/hero.png",
    publishedAt: "2024-03-04T08:00:00.000Z",
  },
  {
    title: "Luxury Things to Do in Whistler | AceHost",
    category: "Luxury Activities",
    description:
      "Luxury things to do in Whistler, Canada. Heli-skiing, private dining, spa retreats, and exclusive experiences for high-budget vacation travelers.",
    readTime: "14 min read",
    link: "/post/high-budget-things-to-do-on-vacation-in-whistler-canada",
    coverImage:
      "/photos/post/high-budget-things-to-do-on-vacation-in-whistler-canada/hero.png",
    publishedAt: "2024-11-20T08:00:00.000Z",
  },
  {
    title: "Whistler Luxury Rental Escapes | AceHost",
    category: "Luxury Accommodations",
    description:
      "Whistler luxury rental escapes for discerning travelers. Compare premium Airbnb vacation homes, amenities, and neighbourhoods with AceHost.",
    readTime: "20 min read",
    link: "/post/whistlers-luxury-rental-escapes",
    coverImage:
      "/photos/post/whistlers-luxury-rental-escapes/hero.jpg",
    publishedAt: "2024-03-04T08:00:00.000Z",
  },
  {
    title: "10 Reasons to Visit Whistler for Winter Ski | AceHost",
    category: "Tourism",
    description:
      "10 reasons to visit Whistler, Canada for your next winter ski vacation. World-class slopes, village dining, luxury stays, and year-round mountain magic.",
    readTime: "15 min read",
    link: "/post/10-reasons-why-you-must-visit-whistler-canada-for-your-next-winter-ski-vacation",
    coverImage:
      "/photos/post/10-reasons-why-you-must-visit-whistler-canada-for-your-next-winter-ski-vacation/Hero.jpg",
    publishedAt: "2024-03-04T08:00:00.000Z",
  },
  {
    title: "Whistler Luxury Vacation Haven: 20 Reasons to Visit | AceHost",
    category: "Travel and Destination Guides",
    description:
      "Whistler luxury vacation haven: 20 reasons to visit. From ski-in chalets to summer adventures, discover why Whistler is Canada's premier mountain destination.",
    readTime: "10 min read",
    link: "/post/whistler-luxury-vacation-haven",
    coverImage:
      "/photos/post/whistler-luxury-vacation-haven/hero.jpeg",
    publishedAt: "2024-03-04T08:00:00.000Z",
  },
  {
    title: "Whistler Property Management & Investment | AceHost",
    category: "Property Management",
    description:
      "Whistler property management and investment opportunities. How AceHost helps owners maximize returns on luxury vacation rental homes in the mountains.",
    readTime: "13 min read",
    link: "/post/luxury-property-management-investment-opportunities-in-whistler",
    coverImage:
      "/photos/post/luxury-property-management-investment-opportunities-in-whistler/hero.jpg",
    publishedAt: "2024-09-25T07:00:00.000Z",
    headline: "AceHost Whistler Property Management Services",
  },
  {
    title: "Best 4-Bedroom Whistler Golf Course Rental | AceHost",
    category: "Property Highlight",
    description:
      "AceHost luxury Airbnb highlight: a stunning 4-bedroom Whistler home on the golf course with panoramic mountain views, hot tub, and premium amenities.",
    readTime: "8 min read",
    link: "/post/new-acehost-luxury-airbnb-highlight-best-4-bedroom-whistler-golf-course-views",
    coverImage:
      "/photos/properties/Muirfield Golf Course/Muirfield drone snow.png",
    publishedAt: "2025-01-16T08:00:00.000Z",
    headline: "New AceHost Luxury Airbnb Highlight",
  },
  {
    title: "Whistler Summer Luxury Vacation Homes | AceHost",
    category: "Luxury Properties, Summer Travel",
    description:
      "Whistler summer paradise: luxury vacation homes for the perfect mountain getaway. Lakes, golf, hiking, and premium rentals from AceHost.",
    readTime: "15 min read",
    link: "/post/whistlers-summer-paradise-luxury-vacation-homes-for-the-perfect-mountain-getaway",
    coverImage:
      "/photos/post/whistlers-summer-paradise-luxury-vacation-homes-for-the-perfect-mountain-getaway/hero.jpg",
    publishedAt: "2025-05-01T07:00:00.000Z",
  },
];

// Function to get related articles excluding the current one (newest registry entries first)
export const getRelatedArticles = (currentArticleLink: string, count: number = 3): Article[] => {
  return allArticles
    .filter((article) => article.link !== currentArticleLink)
    .slice(0, count);
};
