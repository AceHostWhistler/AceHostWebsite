import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
  acehostStay,
} from "./shared";

const wedgeMountainLodgeSpaWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Wedge Mountain Lodge & Spa offers a luxurious retreat in Whistler, perfect for events, weddings, and large gatherings. With 10 bedrooms and 13 bathrooms, this spacious property can accommodate up to 26 guests. This exceptional venue features a spa, wellness facilities, and ample space for entertainment.",
    ],
    highlights: [
      "10 bedrooms, 13 bathrooms",
      "Sleeps up to 26 guests",
      "Full on-site spa and wellness",
      "Movie theater and games room",
      "Event and wedding venue",
      "Gourmet kitchen and wine cellar",
      "Elevator and fully equipped gym",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "left",
    image: {
      photoIndex: 3,
      alt: "Wedge Mountain Lodge great room",
    },
    paragraphs: [
      "This spectacular lodge features spacious common areas, including a grand great room with high ceilings and spectacular views. The property includes a full spa with massage rooms, sauna, cold plunge, and yoga space, making it perfect for wellness retreats and luxury getaways.",
      "Additional amenities include a movie theater, games room, kids playroom, fully equipped gym, and outdoor areas with a fire pit. The gourmet kitchen and dining areas are designed for entertaining large groups with ease.",
      "Spa and wellness: full spa area with massage rooms, sauna, cold plunge pool, and yoga space. Entertainment: movie theater, games room, and kids playroom. Outdoor spaces: beautiful gardens, fire pit area, and outdoor seating. Dining: gourmet kitchen, large dining area, and wine cellar. Ten luxurious bedrooms with high-quality furnishings and 13 elegant bathrooms with premium fixtures. Additional features include an elevator, reading loft, and fully equipped gym.",
      "This exclusive venue is perfect for special events, corporate retreats, and luxury vacations. Our team can help coordinate all aspects of your stay, from catering and spa services to transportation and activities.",
    ],
  },
  location: {
    title: "Location",
    imageSide: "right",
    image: {
      photoIndex: 32,
      alt: "Wedge Mountain Lodge spa area",
    },
    paragraphs: [
      "Wedge Mountain Lodge & Spa is nestled in a beautiful location in Whistler, providing privacy and stunning views. The property offers a serene setting while still being accessible to Whistler's amenities and attractions.",
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    notes: [ACEHOST_VIP_CONCIERGE_NOTE, ACEHOST_REACH_OUT_NOTE],
  },
};

export default wedgeMountainLodgeSpaWriteup;
