import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const bearCreek5BedWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Beautifully Renovated and Fully Furnished 5 Bedroom, 4 Bathroom Home in Creekside, Whistler. Welcome to this stunning, newly renovated luxury home nestled in the quiet neighborhood of Creekside, Whistler.",
      "Available from June 1 until November 30, 2025. Pricing options: $9,775 per month with 6-month minimum or $13,000 per month with 3-month minimum.",
    ],
    highlights: [
      "5 bedrooms, 4 bathrooms",
      "Fully furnished long-term rental",
      "Walk to Creekside Gondola",
      "Modern luxury kitchen",
      "Two driveway parking spots",
      "In-unit washer and dryer",
      "Quiet Creekside neighborhood",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 3,
      alt: "Bear Creek Creekside interior",
    },
    paragraphs: [
      "This spacious 5-bedroom, 4-bathroom house is perfect for a family or a quiet group of up to 10 people looking for a peaceful retreat. With its prime location, the Creekside gondola is just a short walk away, offering easy access to the mountain and all the outdoor activities Whistler has to offer. You will also be close to all the amenities that Creekside has to offer, including shops, restaurants, and recreational facilities.",
      "Key features: 5 bedrooms and 4 bathrooms with plenty of space for the whole family or group. Fully furnished, including high-end furniture, kitchenware, and linens. Modern kitchen equipped with luxury appliances including a speed oven, dishwasher, and more. In-unit washer and dryer. Two parking spots available in the driveway. Prime location with easy walking distance to the Creekside gondola. Quiet, peaceful neighborhood ideal for families or groups who value tranquility.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 3,
      alt: "Bear Creek home in Creekside Whistler",
    },
    paragraphs: [
      "This beautifully renovated luxury home is nestled in the quiet neighborhood of Creekside, Whistler. With its prime location, the Creekside gondola is just a short walk away, offering easy access to the mountain and all the outdoor activities Whistler has to offer.",
      "You will also be close to all the amenities that Creekside has to offer, including shops, restaurants, and recreational facilities. Enjoy quality coffee and delicious breads and pastries at Rockit Coffee. Dine at local favorites like Red Door Bistro, Rimrock Cafe, and Creekbread. The Creekside Market is conveniently located for all your grocery needs.",
      "This is a true luxury home with everything you need for a comfortable, convenient stay in one of the most sought-after locations in Whistler.",
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      "Available from June 1 until November 30, 2025. $9,775 per month with 6-month minimum or $13,000 per month with 3-month minimum.",
      ACEHOST_REACH_OUT_NOTE,
    ],
  },
};

export default bearCreek5BedWriteup;
