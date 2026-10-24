export const COMPARISON_ROWS = [
  {
    priority: "Ski-focused couples or friends",
    lookFor:
      "On-hill or slopeside buildings, ski storage, and a layout that is easy to leave and return to between runs.",
    check:
      "Where you actually put skis on, how you get back at the end of the day, and whether connecting terrain depends on snow.",
  },
  {
    priority: "Families with children",
    lookFor:
      "Enclosed bedrooms, enough bathrooms, gear storage, and a realistic route to lessons or the gondola.",
    check:
      "The actual walk in ski boots, whether a sofa bed is part of the sleep count, and where lessons meet.",
  },
  {
    priority: "Groups with skiers and non-skiers",
    lookFor:
      "A Village or Upper Village base, so non-skiers can walk to cafes, shops and lunch without needing a car.",
    check:
      "How far the lifts are for the skiers, and how pleasant the daytime Village walk is for everyone else.",
  },
  {
    priority: "Restaurants and Village evenings",
    lookFor:
      "A condo on the Village Stroll or a short walk from Olympic Plaza, groceries and apres.",
    check:
      "Lift walk time in the morning, and whether you still want a car for Creekside or day trips.",
  },
  {
    priority: "A car-free stay",
    lookFor:
      "Whistler Village, Village North or Upper Village, with groceries and lifts reachable on foot.",
    check:
      "Parking still matters for arrival day. Confirm whether a stall is included, paid through the building, or not needed once you are here.",
  },
] as const;

export const FEATURED_PROPERTIES = [
  {
    group: "For slope access",
    groupId: "slope-access",
    name: "Ski-In Ski-Out Penthouse | Pool - Hot Tub - Views",
    building: "Woodrun Lodge, Blackcomb",
    href: "/listings/woodrun-2-bed",
    image: "/photos/properties/Woodrun 2-bed/Woodrun snow 1.jpg",
    imageAlt:
      "Woodrun Lodge penthouse living area with vaulted timber ceilings and mountain views",
    caption: "Top-floor penthouse at Woodrun Lodge on Blackcomb Mountain.",
    summary:
      "A strong match if skiing is the centre of the trip and you want a smaller luxury condo rather than a large chalet. The penthouse sits at Woodrun Lodge on Blackcomb, with ski-in/ski-out access along Merlin's run.",
    features: [
      "Sleeps 7 across 2 enclosed bedrooms and a queen sofa bed",
      "Two guaranteed free parking spots, both underground",
      "Shared year-round pool, hot tub, gym and sauna in the building",
    ],
  },
  {
    group: "For slope access",
    groupId: "slope-access",
    name: "The Aspens | On-Hill Ski-In/Out | Hot Tubs | 2 BDR",
    building: "The Aspens, Blackcomb",
    href: "/listings/whispering-pines-ski-in-ski-out",
    image: "/photos/properties/The Aspens/Aspens drone shot.jpeg",
    imageAlt:
      "Ground-floor ski-in ski-out condo at The Aspens on Blackcomb Mountain",
    caption: "Ground-floor unit at The Aspens, steps from Blackcomb terrain.",
    summary:
      "Choose this when you want a ground-floor, on-hill base. The unit is the closest in the building to both the slope access and the shared pool and three hot tubs. Parking is paid through The Aspens, not included in the stay.",
    features: [
      "Sleeps 6 across 2 bedrooms and a living-room pullout",
      "Shared heated pool and three hot tubs",
      "Building ski rentals and shared ground-floor laundry",
    ],
  },
  {
    group: "For a Village-focused stay",
    groupId: "village-stay",
    name: "Tyndall - Luxe 2 bedroom, Main Whistler Village",
    building: "Tyndall Stone Lodge, Whistler Village",
    href: "/listings/whistler-village-views-luxury-2-5-bedroom",
    image:
      "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Whistler Village Views Cover.jpg",
    imageAlt:
      "Renovated Tyndall Stone Lodge condo overlooking Olympic Plaza in Whistler Village",
    caption: "Tyndall Stone Lodge overlooks Olympic Plaza in the main Village.",
    summary:
      "A Village stay for guests who want restaurants, cafes and shops outside the door. It is listed as 2.5 bedrooms: two enclosed bedrooms plus a queen pullout in the living room, not three enclosed bedrooms. Gondolas are an easy walk or a free shuttle ride.",
    features: [
      "Sleeps 6, with in-suite laundry and A/C",
      "Shared outdoor pool and hot tub",
      "One guaranteed underground parking space",
    ],
  },
  {
    group: "For a Village-focused stay",
    groupId: "village-stay",
    name: "Eagle Lodge | Main Village Condo | Walk to Lifts | Free Parking",
    building: "Eagle Lodge, Town Plaza",
    href: "/listings/eagle-lodge-main-village-condo",
    image: "/photos/properties/Eagle Lodge 238/Eagle edit 1.png",
    imageAlt:
      "Renovated Eagle Lodge 1-bedroom condo in Town Plaza, Whistler Village",
    caption: "Eagle Lodge 238 sits on the Village Stroll in Town Plaza.",
    summary:
      "A compact 1-bedroom Village condo for couples or a small family that wants to walk everywhere. The gondolas are about a 7-minute walk through the Village. Once you park, most days do not need a car.",
    features: [
      "King bedroom plus a sofa bed, sleeps 4",
      "Brand-new shared hot tub and gym",
      "One free underground parking stall and elevator access",
    ],
  },
  {
    group: "For convenient access to the Blackcomb base",
    groupId: "blackcomb-base",
    name: "Le Chamois | Ski-In/Out | 2 Bed | Blackcomb",
    building: "Le Chamois, Upper Village",
    href: "/listings/ski-in-ski-out-walk-to-lifts-2-bed",
    image:
      "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-4.jpg",
    imageAlt:
      "Le Chamois condo at the base of Blackcomb Mountain in Upper Village",
    caption:
      "Le Chamois sits at the Blackcomb base. The gondola is about a 2-minute walk, not ski-into-the-unit access.",
    summary:
      "Use this when you want to be at the Blackcomb Gondola without committing to an on-hill building. The listing title reflects ski convenience. Guests walk about 2 minutes to the gondola and ski-out point rather than skiing into the condo.",
    features: [
      "King suite plus a double Murphy bed in the living area",
      "Personal ski locker and free underground parking",
      "Shared outdoor pool, hot tub and gym",
    ],
  },
  {
    group: "For mountainside Creekside skiing",
    groupId: "creekside-mountainside",
    name: "Bluffs | Luxury 2 Bed Ski in Ski out | Views",
    building: "The Bluffs, Taluswood (above Creekside)",
    href: "/listings/bluffs-unit-4-taluswood",
    image: "/photos/properties/Bluffs Unit 4/6.jpeg",
    imageAlt:
      "Bluffs Unit 4 living area with mountain views in Taluswood, Whistler",
    caption:
      "Bluffs Unit 4 is a Taluswood condo above Creekside. A short walk reaches the ski access bridge onto the Dave Murray Downhill, then ski to the Creekside Gondola.",
    summary:
      "A useful comparison if you want ski-in/ski-out on Whistler Mountain rather than Blackcomb. This is a mountainside condo, not a Creekside Village sidewalk stay. Creekside shops, restaurants and the gondola are a short drive, not a Village-style walk. Ski access is best suited to confident intermediate and advanced skiers.",
    features: [
      "King and queen suites plus a queen sofa bed, sleeps 6",
      "Shared complex hot tub, not a private tub",
      "Ski-boot dryer, two underground stalls plus outdoor parking",
    ],
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is every Whistler condo ski-in/ski-out?",
    answer:
      "No. Some AceHost condos sit on or beside accessible ski terrain. Others are a short walk to a gondola or ski-access point. Village condos are usually a longer walk to the lifts. Always read the individual listing for how you get on and off the mountain.",
  },
  {
    question: "Is a Village condo a good option for a ski trip?",
    answer:
      "Yes, especially if restaurants, groceries and evenings in town matter as much as first chair. You will walk to the gondolas, or use a shuttle where the listing mentions one. Many guests find that tradeoff easy after a few days.",
  },
  {
    question: "Can I stay in Whistler without renting a car?",
    answer:
      "Often, if you book in Whistler Village, Village North or Upper Village. Groceries, lifts and dining can be reached on foot from those areas. Mountainside homes above Creekside are a different setup and usually work better with a car or arranged rides.",
  },
  {
    question: "Are condo hot tubs private or shared?",
    answer:
      "It depends on the property. Many Village and slopeside condos use a shared building pool, hot tub or gym. Some homes have a private hot tub. The listing will say which you are booking. Shared amenities can also have posted hours or brief maintenance closures.",
  },
  {
    question: "How do I check availability and book with AceHost?",
    answer:
      "Use the Book Now button on this page. It opens AceHost's booking site, where you can search dates and see which stays are available. Availability changes, so the booking site is the place to confirm your dates rather than this article.",
  },
];
