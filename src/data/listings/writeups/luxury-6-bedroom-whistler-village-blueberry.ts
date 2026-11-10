import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const luxury6BedroomBlueberryWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to this beautifully renovated 6-bedroom retreat in Whistler's peaceful Blueberry Hill neighbourhood. Designed with Restoration Hardware and Rove Concepts furnishings, the home sleeps 12 across 10 beds and offers forest views, premium Puffy mattresses, ski and bike storage, summer A/C, and free EV charging.",
      "Whistler Village, the ski lifts and nearby lakes are only a 3 to 4 minute drive away, combining a quiet residential setting with exceptionally convenient access for families and groups.",
    ],
    highlights: [
      "6 bedrooms, 10 beds, sleeps 12",
      "Newly renovated bathrooms",
      "Restoration Hardware furnishings",
      "Free Level 2 EV charging",
      "2 rare garage parking spots",
      "Puffy luxury mattresses",
      "Ski and bike storage",
      "Summer A/C May 1 through November 1",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 0,
      alt: "Luxury 6-bedroom Blueberry Hill interior",
    },
    paragraphs: [
      "Step into a bright and inviting alpine-inspired retreat where every detail has been curated for relaxation and style. The open-concept living room features a cozy fireplace, plush seating, and large windows framing lush forest views. The fully equipped kitchen is ideal for group dining, complete with a brand-new fridge, oven, and BBQ, plus all the cookware you need for family meals or apres-ski dinners.",
      "Across multiple levels, the home offers ample space for gathering and privacy, making it ideal for multi-family getaways or larger groups wanting a true Whistler experience.",
      "This fully renovated luxury condo includes high-end Puffy mattresses throughout, ski and bike storage so you do not need to bring gear inside the unit, a forest-view balcony for morning coffee or evening wine, high-speed Wi-Fi and Smart TVs, Level 2 J1772 EV charging free of charge, and a fully functional brand new washer and dryer in the unit for private guest use. Pack and play is included and always at the condo. Please bring your own sheets.",
      "Newly renovated bathrooms: bathroom renovation completed November 22, 2026, with gorgeous new RH vanities and glass instead of curtains. Photo updates to follow shortly after. Each of the 3 full bathrooms includes both a shower and a bathtub, providing convenience and comfort for large groups.",
      "Yes, there is air conditioning for the summer months, available May 1 through November 1. AC units in the living room, bedroom 3 and bedroom 5 cool the entire house comfortably for hot summer days.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 10,
      alt: "Blueberry Hill balcony view",
    },
    paragraphs: [
      "Set in the prestigious Blueberry Hill neighbourhood, this home combines tranquility and proximity. You are just a few minutes from both Whistler Village and Creekside, while surrounded by nature and scenic trails. The Valley Trail and Whistler Golf Course Loop are right at your doorstep, perfect for morning walks or bike rides in summer.",
      "Blueberry Hill is one of Whistler's most desirable residential neighbourhoods, offering a peaceful setting while remaining extremely close to the Village. Whistler Village and the main gondolas are approximately 3 to 4 minutes away by car, taxi or Uber. The Valley Trail is easily accessible from the neighbourhood, providing a beautiful walking and biking route into Whistler Village and around the surrounding lakes and golf course. Alta Lake, Whistler Golf Club, Creekside and the Village are all nearby. It is a great location for guests who want to be close to everything while enjoying a quieter place to return to at the end of the day.",
      "In winter, the slopes are a quick drive away, and you will appreciate coming home to your peaceful retreat away from the busy village. In summer, Alta Lake is within walking distance for paddle boarding, picnics, or ice skating, depending on the season. Walking to the village is optional and a bit long with skis and boots, but possible: about a 20 minute walk with boots in the winter months, and about a 15 minute walk to the village in summer months.",
      "Parking and transportation: 2 parking spots included in the garage. 1 private parking spot fits vehicles 6'6\" and under, with a free EV charger included (we pay for the charging), one of the few in the building. Plus 1 visitor spot. 2 spots total, a rare find in Whistler. Roughly a 4-minute taxi or Uber ride to the main Whistler Village. Shuttle to main Whistler Village and ski slopes comes every 15 minutes right out front of the building. Recommended: arrive in one or two large vehicles, shuttle, or bus from airport. Extra vehicles can park nearby in the village if required.",
    ],
  },
  bedrooms: {
    title: "Bedroom Layout",
    summary:
      "Six bedrooms on the lower/main and upper levels. Each of the 3 full bathrooms includes both a shower and a bathtub.",
    floors: [
      {
        label: "Lower / Main Level",
        bedrooms: [
          {
            name: "Primary Bedroom",
            details: "King bed, ensuite bathroom with shower/tub combo, Smart TV.",
          },
          {
            name: "Bedroom 2",
            details: "King bed.",
          },
        ],
      },
      {
        label: "Upper Level",
        bedrooms: [
          {
            name: "Bedroom 3",
            details: "King bed.",
          },
          {
            name: "Bedroom 4",
            details:
              "Two Queen beds, large office desk with forest views, perfect for remote work.",
          },
          {
            name: "Bedroom 5",
            details: "King bed with Smart TV.",
          },
          {
            name: "Bedroom 6",
            details:
              "Two single bunk beds (kid-friendly but perfect for adults too).",
          },
        ],
      },
    ],
    footnote:
      "Newly renovated bathrooms: bathroom renovation completed November 22, 2026. Gorgeous new RH vanities and glass instead of curtains. Photo updates to follow shortly after. Each of the 3 full bathrooms includes both a shower and a bathtub.",
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    guestAccess: [
      "Guests have private access to the entire home during their stay. This includes 6 bedrooms and 3 full bathrooms, 2 free underground parking spots, complimentary Level 2 EV charging, ski and bike storage, a private washer and dryer, balcony and BBQ, a fully equipped kitchen, high-speed Wi-Fi, Smart TVs and seasonal AC.",
      "Self check-in is available for an easy arrival.",
    ],
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      "Newly renovated bathrooms: bathroom renovation completed November 22, 2026. Gorgeous new RH vanities and glass instead of curtains. Photo updates to follow shortly after.",
      "Air conditioning is available May 1 through November 1.",
      ACEHOST_REACH_OUT_NOTE,
    ],
    registration: [
      "Municipal registration number: 00015309",
      "Provincial registration number: PM743639153",
    ],
  },
};

export default luxury6BedroomBlueberryWriteup;
