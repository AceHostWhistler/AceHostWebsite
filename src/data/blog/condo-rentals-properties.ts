export interface CondoRentalProperty {
  name: string;
  priceRange: string;
  stats: string;
  paragraphs: string[];
  airbnbHref?: string;
  listingHref?: string;
  imageSrc: string;
  imageAlt: string;
}

/** All AceHost Whistler condo and condo-style rentals for the best-condo-rentals blog */
export const CONDO_RENTAL_PROPERTIES: CondoRentalProperty[] = [
  {
    name: "Marquise Penthouse | Ski-In/Out | 3-Bed | Views",
    priceRange: "$650-$1,280+ per night (seasonal)",
    stats:
      "1,100 sq ft | Sleeps 6 | 2 Bedrooms | 3 Beds | 2 Bathrooms | Glass-Domed Hot Tub & Pool | Fairmont Views",
    paragraphs: [
      "Welcome to this spacious 1,100 sq. ft. Marquise penthouse-style retreat with some of the best Fairmont and mountain views in Whistler. Enjoy 2 bedrooms, 2 bathrooms, a cozy fireplace, private patio, full kitchen and A/C, with room for up to 6 guests.",
      "The main living area features a cozy gas fireplace, comfortable seating and views toward the Fairmont Chateau Whistler. After skiing, relax in the building's glass-domed hot tub, outdoor pool, sauna or gym.",
      "The primary bedroom offers a king bed, private patio access with views, vanity area and direct access to a full bathroom. Bedroom 2 has a queen bed with private ensuite bathroom and bathtub, while a queen pullout sofa in the living room accommodates additional guests.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1461637483646115205?guests=1&adults=1&s=67&unique_share_id=9b6640b9-138d-4627-bea4-cb2155e32c72",
    listingHref: "/listings/luxury-3-bed-stunning-views",
    imageSrc: "/optimized/luxury-3-bed-views/cover.jpg",
    imageAlt: "Marquise Penthouse Whistler condo with Fairmont views",
  },
  {
    name: "Luxe Cozy 3-Bed Whistler Village",
    priceRange: "$750-$2,200+ per night (seasonal)",
    stats: "Sleeps 6 | 3 Bedrooms | 5 Beds | 3 Bathrooms | Village Location | Walk to Lifts",
    paragraphs: [
      "Nestled in the vibrant heart of Whistler Village, this beautifully updated luxury condo offers both style and unbeatable convenience. Completely renovated with a designer's touch, this spacious three-bedroom haven is perfect for families or groups of friends who want to experience the best of Whistler.",
      "Just steps away from the gondolas, restaurants, and village attractions, this property combines a prime location with all the comforts of home. The thoughtfully designed space features an open-concept living area perfect for socializing, while three well-appointed bedrooms provide privacy and comfort when it's time to rest.",
      "Mornings begin with coffee on your private balcony, afternoons might find you relaxing by the fire after a day of adventure, and evenings can be spent preparing meals in the fully equipped kitchen or exploring Whistler's renowned dining scene just outside your door.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1249285355870765792?guests=1&adults=1&s=67&unique_share_id=0ecd2877-9bf3-4bcc-92f2-5579a0af8e7f",
    listingHref: "/listings/luxe-cozy-3-bed-whistler-village",
    imageSrc:
      "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/02-1 4668 Blackcomb Way 02-Edit.jpg",
    imageAlt: "Luxe Cozy 3-Bed condo in Whistler Village",
  },
  {
    name: "Whistler Village Views | Luxury 2.5 Bedroom",
    priceRange: "$400-$1,150+ per night (seasonal)",
    stats:
      "Sleeps 6 | 2.5 Bedrooms | 4 Beds | 2 Bathrooms | Village Location | Mountain Views",
    paragraphs: [
      "This stylish 2.5-bedroom haven in Tyndall Stone Lodge puts you front-row center to all the Whistler action while offering a peaceful sanctuary when it's time to unwind. The intelligently designed floor plan makes the most of every square inch, with the half-bedroom providing extra flexibility for families or small groups.",
      "Step onto your private balcony and take in sweeping village and mountain views – the perfect backdrop for morning coffee or evening cocktails. Inside, contemporary furnishings and thoughtful touches create a welcoming atmosphere that strikes the perfect balance between luxury and comfort.",
      "Located just moments from Whistler's world-class restaurants, shops, and activities, you'll enjoy the convenience of having everything at your doorstep year-round. During winter, you're just a short walk from both Whistler and Blackcomb gondolas, while summer brings easy access to hiking trails, the bike park, and Alpine adventures.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/50025973?preview_for_ml=true&source_impression_id=p3_1699290307_SHcNx7EoXySmn6j5",
    listingHref: "/listings/whistler-village-views-luxury-2-5-bedroom",
    imageSrc:
      "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-14.jpg",
    imageAlt: "Whistler Village Views | Luxury 2.5 Bedroom condo",
  },
  {
    name: "Raven's Nest | Ski in Ski out | Views",
    priceRange: "$2,000-$4,000 per night (seasonal)",
    stats:
      "Sleeps 6 | 3 Bedrooms | 3 Beds | 3 Bathrooms | Ski-in/Ski-out | Private Hot Tub | Mountain Views",
    paragraphs: [
      "Perched perfectly on Blackcomb Mountain, Raven's Nest offers that rare combination of true ski-in/ski-out access and breathtaking panoramic views that will leave you speechless. This exquisite 3-bedroom townhome brings luxury slope-side living to new heights, with stylish interiors that complement – rather than compete with – the stunning natural beauty outside.",
      "After a day conquering the slopes (which are literally at your doorstep), soothe tired muscles in your private hot tub while gazing at snowcapped peaks and alpenglow sunsets. The spacious, light-filled living areas create a warm gathering place for recounting the day's adventures, while the gourmet kitchen makes meal preparation a joy.",
      "Each of the three bedrooms serves as a private retreat, with comfortable beds and premium linens ensuring restful sleep before another day of mountain adventures. With ski storage, a garage, and proximity to Blackcomb's base amenities, Raven's Nest delivers the quintessential ski property experience for those who refuse to compromise on location or luxury.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1300258964918876012?guests=1&adults=1&s=67&unique_share_id=41b635e9-00a9-441c-a134-056b2b3814ac",
    listingHref: "/listings/ravens-nest-ski-in-ski-out-views",
    imageSrc: "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05349.jpg",
    imageAlt: "Raven's Nest | Ski in Ski out townhome with mountain views",
  },
  {
    name: "The Aspens | On-Hill Ski-In/Out | Hot Tubs | 2 BDR",
    priceRange: "$350-$1,300 per night (seasonal)",
    stats:
      "Sleeps 4 | 2 Bedrooms | 3 Beds | 2 Bathrooms | Ski-in/Ski-out | Pool & Three Hot Tubs | Upper Village Location",
    paragraphs: [
      "Welcome to one of the most convenient ski-in/ski-out locations on Blackcomb Mountain. This ground-floor 2-bedroom home at The Aspens sits just steps from the slopes and is the closest unit in the building to the pool and three hot tubs.",
      "Inside, enjoy a king primary suite, twin bedroom, fireplace, full kitchen, patio and BBQ. Ski rentals are available right in the building, while Upper Village, Whistler Village, Lost Lake and year-round trails are all within easy reach.",
      "The pool and hot tub area is only steps from this particular unit, making it incredibly easy to head out for a soak after skiing and return home without crossing the entire building.",
    ],
    airbnbHref:
      "https://www.airbnb.com/rooms/1072474554447345991?guests=1&adults=1&s=67&unique_share_id=e556b35c-05b5-40b6-91e1-5304ffafc23b",
    listingHref: "/listings/whispering-pines-ski-in-ski-out",
    imageSrc: "/photos/properties/The Aspens/4800-Spearhead-Drive-1.JPG",
    imageAlt: "The Aspens | 2-Bed Ski in/Out condo in Upper Village",
  },
  {
    name: "Le Chamois | 2 Bed | Walk to Lifts",
    priceRange: "$350-$1,200 per night (seasonal)",
    stats: "Sleeps 4 | 2 Bedrooms | 2 Beds | 2 Bathrooms | Walk to Lifts | Upper Village Location",
    paragraphs: [
      "Welcome to this modern apartment in the prestigious Le Chamois hotel, perfectly positioned in the heart of Upper Village and just across the street from the Blackcomb Gondola. This stylish retreat offers the ideal combination of comfort and convenience for your Whistler adventure.",
      "Inside, you'll find a thoughtfully designed space with contemporary touches throughout. The living area features a Murphy double bed that can be easily stowed away when not in use, while the master bedroom boasts a comfortable queen bed, ensuite bathroom with spacious walk-in shower, and high-tech touches including a Japanese Toto toilet and a large smart TV.",
      "The fully equipped kitchen, though compact, includes everything you need with its stove top hob, refrigerator, air fryer, and microwave. After a day exploring Whistler's endless activities, you'll appreciate returning to this welcoming space where every detail has been considered to enhance your mountain getaway.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1015303987589924725?guests=1&adults=1&s=67&unique_share_id=5e912eb5-5445-4797-81ec-df21817dd143",
    listingHref: "/listings/ski-in-ski-out-walk-to-lifts-2-bed",
    imageSrc: "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-4.jpg",
    imageAlt: "Le Chamois | 2 Bed condo walking distance to lifts",
  },
  {
    name: "Marquise 2 Bed | Ski-In/Ski-Out | Whistler Village",
    priceRange: "$160-450 per night (seasonal)",
    stats:
      "Sleeps 4 | 1 Bedroom | 2 Beds | 1 Bathroom | Ski-in/Ski-out | Free Parking | Upper Village",
    paragraphs: [
      "Welcome to this ski-in/ski-out retreat at The Marquise, perfectly positioned on Blackcomb Mountain. This main-floor condo features a brand-new Puffy Royal King bed, Queen pullout sofa, fireplace, private ski storage and free parking.",
      "After skiing, unwind in the heated outdoor pool, hot tub or gym, then walk to Upper Village, the Fairmont and Four Seasons in about 5 minutes. In summer, Whistler Village, Lost Lake, biking trails and mountain adventures are all close by.",
      "Secure ski storage is included, and one complimentary parking space is included with your stay — a rare combination for a ski-in/ski-out Whistler condo.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1370367404602078616?guests=1&adults=1&s=67&unique_share_id=eb381b39-e67d-44ea-9d7c-2de2e1b5fa20",
    listingHref: "/listings/marquise-2-bed-ski-in-ski-out",
    imageSrc: "/photos/properties/Marquise 2-bed/Marquise-15.jpg",
    imageAlt: "Marquise 2 Bed ski-in ski-out condo on Blackcomb",
  },
  {
    name: "Luxury 6-Bedroom | Whistler Village | Blueberry",
    priceRange: "$750-$1,800 per night Summer | $1,200-$2,600 Winter (seasonal)",
    stats:
      "Sleeps 12 | 6 Bedrooms | 10 Beds | 3 Bathrooms | Blueberry Hill | EV Charging | Forest Views",
    paragraphs: [
      "When your group outgrows a typical condo but still wants the convenience of a professionally managed rental, this newly renovated six-bedroom Ravencrest home on Blueberry Hill is the answer. Sleeping 12 guests across 10 beds, it delivers serious space without sacrificing the polished, move-in-ready feel AceHost is known for.",
      "Restoration Hardware and Rove Concepts furnishings set a refined tone throughout, while a brand-new BBQ, ski and bike storage, high-speed WiFi, and smart TVs make everyday Whistler logistics effortless. Forest views and a short drive to the Village give you privacy with quick access to slopes, dining, and nightlife.",
      "For multi-family trips, ski-week reunions, or corporate retreats that need multiple bedrooms under one roof, this Blueberry standout offers one of the largest condo-style layouts in the AceHost collection – all bookable on Airbnb with AceHost support from inquiry to checkout.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1551638001847968788?guests=1&adults=1&s=67&unique_share_id=ff68258e-d89f-4493-8e79-fd85820e6872",
    listingHref: "/listings/luxury-6-bedroom-whistler-village-blueberry",
    imageSrc:
      "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/Blueberry living room.png",
    imageAlt: "Luxury six-bedroom Ravencrest condo rental in Blueberry Hill Whistler",
  },
  {
    name: "Whistler Village - Private Hot Tub - Walk to Hill",
    priceRange: "$500-$2,000 per night (seasonal)",
    stats:
      "Sleeps 8 | 3 Bedrooms | 5 Beds | 3 Bathrooms | Private Hot Tub | Walk to Gondola | Village Location",
    paragraphs: [
      "Valhalla Peaks is a spacious 3-bedroom Whistler Village townhome at the north end of the Village, directly across from Marketplace and Fresh St. Market. A private balcony hot tub, gas fireplace, and three full bathrooms give groups the space and privacy of a home with everything just outside the door.",
      "The Village Stroll begins steps away, with restaurants, shops, après-ski, and the Whistler Village Gondola approximately a 12-minute walk. After skiing, soak in your private hot tub with peak views, then walk to dinner without touching your car.",
      "With underground parking, ski and bike storage, portable AC for summer months, and AceHost support throughout your stay, Valhalla Peaks is ideal for families or friends who want village convenience, hot tub time, and a quieter residential feel.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1693450379764005787?guests=1&adults=1&s=67&unique_share_id=bd20bf84-b138-4958-9dc8-9128130a2028",
    listingHref: "/listings/valhalla-unit-33-village",
    imageSrc: "/photos/properties/Valhalla Unit 33 Village/Living room angle 3.png",
    imageAlt: "Valhalla Peaks luxury 3-bed Whistler Village condo with private hot tub",
  },
  {
    name: "Whistler Village Penthouse 4-Bed - Ski in Ski out",
    priceRange: "$450-$1,700 per night (seasonal)",
    stats:
      "Sleeps 7 | 2 Bedrooms | 4 Beds | 2 Bathrooms | Private Hot Tub | Walk to Gondolas | Village Location",
    paragraphs: [
      "This Hearthstone Lodge penthouse is a 2-level alpine retreat steps from the Whistler and Blackcomb gondolas, with a private balcony hot tub, stone fireplace, exposed log beams, and free parking in the Rainbow Parkade below.",
      "High ceilings, mountain views, and classic Whistler character make it an ideal gathering space after skiing. The grocery store and BC Liquor are directly downstairs, with top Village restaurants and après-ski just outside the door.",
      "Once you arrive and park, you can walk almost everywhere – from morning lift lines to evening dinners – without needing your car again.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1471251206220643818?guests=1&adults=1&s=67&unique_share_id=0ec28644-49fa-4b63-9276-7e5f5c6a1153",
    listingHref: "/listings/whistler-village-penthouse",
    imageSrc:
      "/photos/properties/3-Bed PH Whistler Village/snowy-room-blinds-only Hearthstone.png",
    imageAlt: "Whistler Village penthouse with private hot tub near the gondola",
  },
  {
    name: "Whistler Village Penthouse - 3 BDR - Walk to Ski",
    priceRange: "$500-$1,200 Summer | $750-$1,500 Winter (seasonal)",
    stats:
      "Sleeps 8 | 3 Bedrooms | 5 Beds | 2 Bathrooms | Penthouse | Walk to Gondolas | Free Parking",
    paragraphs: [
      "Welcome to the Penthouse unit in the iconic Tyndall Lodge building, located in the heart of Whistler Village. This bright and spacious home sits right in the centre of the main Whistler Village, steps from the famous Olympic Rings and only a short walk to both Whistler and Blackcomb gondolas.",
      "Hosting up to 8 guests comfortably, the home features 3 sleeping areas, 5 beds, and two full bathrooms. One of the highlights is the unique loft bedroom with bunkbeds, tall ceilings and a cozy chalet feel that kids and extra guests absolutely love.",
      "Enjoy a fully equipped kitchen, spacious living room, complimentary underground parking, and access to the building's shared pool and hot tub — location and layout doesn't get any better than this.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1595039212030139605?guests=1&adults=1&s=67&unique_share_id=dc75c08b-e1ae-46ae-8b17-0587b742fa45",
    listingHref: "/listings/whistler-village-penthouse-3-bdr-walk-to-ski",
    imageSrc: "/optimized/303-Tyndall-Lodge/new-cover.jpg",
    imageAlt: "Whistler Village Tyndall Lodge penthouse walk to ski",
  },
  {
    name: "Symphony - Walk to village & slopes - Luxury 4-bed",
    priceRange: "$500-$1,200 Summer | $750-$1,500 Winter (seasonal)",
    stats:
      "Sleeps 6 | 2 Bedrooms | 4 Beds | 3 Bathrooms | Shared Hot Tub | Village Location | Private Exterior Entrance",
    paragraphs: [
      "This Symphony Building townhome-style retreat offers a private three-level layout with its own exterior entrance – more space and privacy than a typical Village condo. Three full bathrooms, a shared hot tub steps from the door, and complimentary underground parking make it ideal for families and small groups.",
      "Fresh St. Market is directly across the street, with Marketplace, restaurants, and the Racquet & Pickleball Club all nearby. The gondolas and ski lifts are an easy 12–15 minute walk, so a car is rarely needed once you arrive.",
      "Choose Symphony when you want townhome privacy with central Village access – especially if multiple bathrooms and a true front door matter for your group.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1566952897757488737?guests=1&adults=1&s=67&unique_share_id=70d8a9c5-be29-49cb-a1de-03c1e0ec667b",
    listingHref: "/listings/northlands-walk-to-village-slopes-luxury-4-bed",
    imageSrc:
      "/photos/properties/Northlands Symphony 29/01 - 20251128 A7M4 02 A1_02882_.jpg",
    imageAlt: "Northlands Symphony luxury 4-bed village condo walk to slopes",
  },
  {
    name: "Bluffs - Luxury 2 Bed Ski in Ski out in Creekside - Views!",
    priceRange: "$380-$950 Summer | $500-$1,350 Winter (seasonal)",
    stats:
      "Sleeps 6 | 2 Bedrooms | 3 Beds | 2 Bathrooms | Ski-in/Ski-out | Hot Tub | Creekside/Taluswood",
    paragraphs: [
      "Perched in Taluswood's Bluffs, this two-bedroom retreat drops you onto the Dave Murray Downhill for true ski-in/ski-out days and sunset mountain-view evenings. King and queen suites, heated bathroom floors, and a chef-ready kitchen make it feel far larger than a typical Creekside base.",
      "Complex hot tub access, two underground parking stalls, and dedicated ski and bike storage simplify every ski day. Portable AC keeps summer stays comfortable when temperatures climb in the valley.",
      "For skiers who prioritize slope access and Creekside calm over village bustle, Bluffs is one of the most compelling ski-in/ski-out condos on the AceHost roster.",
    ],
    airbnbHref:
      "https://www.airbnb.com/rooms/1693549013411163327?guests=1&adults=1&s=67&unique_share_id=759d2f0b-5f96-4039-b45f-18a842fc59f7",
    listingHref: "/listings/bluffs-unit-4-taluswood",
    imageSrc: "/photos/properties/Bluffs Unit 4/IMG_001112.JPG",
    imageAlt: "Bluffs luxury ski-in ski-out Creekside condo with mountain views",
  },
  {
    name: "Bluffs #8 - Luxury 3 Bed - Ski in Ski out - Views!",
    priceRange: "$450-$1,200+ Summer | $750-$1,600+ Winter (seasonal)",
    stats:
      "Sleeps 10 | 3 Bedrooms | 7 Beds | 3 Bathrooms | Ski-in/Ski-out | Hot Tub | Taluswood",
    paragraphs: [
      "Perched in Taluswood's Bluffs, this three-bedroom retreat puts you right on the Dave Murray Downhill for true ski-in ski-out days and beautiful mountain-view evenings. With a King suite, Queen bedroom, four Twin bunk beds, and a Queen sofa bed, the home sleeps up to 10 guests and is ideal for families and groups who want Creekside slope access with more space than a typical two-bedroom base.",
      "The open-concept main level combines kitchen, dining, and living areas with a gas fireplace, Smart TV, portable AC from May through November, and a covered balcony with BBQ and outdoor dining. A private complex hot tub, two underground parking stalls, outdoor parking for larger vehicles, and secure ski and bike storage make every season comfortable.",
      "For skiers and families who want true Dave Murray access, elevated views over Whistler Village, and a three-bedroom layout in Taluswood, Bluffs #8 is one of the strongest ski-in/ski-out condo options in the AceHost collection.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1747927495845801389?guests=1&adults=1&s=67&unique_share_id=99456c1e-0b4a-4b30-933f-0c8270cc0adb",
    listingHref: "/listings/bluffs-unit-8-taluswood",
    imageSrc: "/photos/properties/Bluffs Unit 8/Bluffs 8 edit 4.png",
    imageAlt: "Bluffs #8 luxury 3-bed ski-in ski-out condo in Taluswood Whistler",
  },
  {
    name: "Cozy Lakefront Whistler Condo | Mountain View",
    priceRange: "$250-$800 Summer | $500-$1,300 Winter (seasonal)",
    stats:
      "Sleeps 7 | 2 Bedrooms | 5 Beds | 2 Bathrooms | Lakefront Views | Nicklaus North | 7 Min to Village",
    paragraphs: [
      "This top-floor Nicklaus North condo pairs vaulted ceilings and lakefront views with a 200 sq ft private patio – a peaceful alternative to staying in the Village core. Recently updated with modern décor, every bedroom frames Green Lake and the surrounding peaks.",
      "Cross-country skiing, biking, and lakeside walks start right outside your door, while Table 19 serves fondue and après just steps away. In summer, golf the Nicklaus North course; in winter, you're only a seven-minute drive from Whistler Village and the lifts.",
      "Perfect for couples, small families, or remote-work trips who want scenery, space, and value without sacrificing access to Whistler's main attractions.",
    ],
    airbnbHref:
      "https://www.airbnb.ca/rooms/1305524887656641858?guests=1&adults=1&s=67&unique_share_id=23663c37-e33a-445b-a53c-6f927f30d084",
    listingHref: "/listings/cozy-lakefront-whistler-condo-mountain-view",
    imageSrc:
      "/photos/properties/Nick North 2-Bed/01 - 20251006 A7M4 03 A1_03279-Edit.jpg",
    imageAlt: "Cozy lakefront Whistler condo at Nicklaus North with mountain views",
  },
  {
    name: "Blackcomb Greens Luxury Townhouse",
    priceRange: "$500-$1,200 per night (seasonal)",
    stats:
      "Sleeps 8 | 3 Bedrooms | 4 Beds | 2.5 Bathrooms | Upper Village | Mountain Views",
    paragraphs: [
      "Blackcomb Greens offers a spacious three-bedroom townhouse layout with modern finishes and easy access to Whistler's Upper Village and Blackcomb base area. With room for up to eight guests, it works well for families who want condo-style amenities with more square footage than a typical village apartment.",
      "Expect a fully equipped kitchen, comfortable living spaces, and a location that keeps you close to skiing, dining, and village strolls without the premium price tag of slope-side penthouses.",
      "Contact AceHost for availability and booking details on this Upper Village favorite.",
    ],
    listingHref: "/listings/marquise-2-bed-ski-in-ski-out",
    imageSrc: "/photos/properties/Marquise 2-bed/Marquise-1.jpg",
    imageAlt: "Blackcomb Greens luxury townhouse in Upper Village Whistler",
  },
];
