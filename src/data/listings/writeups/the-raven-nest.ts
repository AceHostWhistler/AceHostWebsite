import type { ListingWriteupContent } from "@/components/listingWriteup";
import {
  acehostStay,
  ACEHOST_INCLUDED_SKI,
  ACEHOST_REACH_OUT_NOTE,
  ACEHOST_SKI_PASS_NOTE,
  ACEHOST_VIP_CONCIERGE_NOTE,
} from "./shared";

const theRavenNestWriteup: ListingWriteupContent = {
  intro: {
    paragraphs: [
      "Welcome to Raven's Nest, a luxurious ski-in/ski-out property offering breathtaking mountain views. This stunning home features spacious living areas, modern amenities, and direct access to Whistler's world-class ski slopes.",
      "Perfect for families or groups, Raven's Nest provides the ideal setting for your Whistler getaway with its convenient location and comfortable accommodations.",
    ],
    highlights: [
      "Ski-in / ski-out access",
      "Mountain views",
      "Hot tub",
      "Fireplace",
      "Fully equipped kitchen",
      "Free Wi-Fi",
      "Ideal for families & groups",
    ],
  },
  residence: {
    title: "The Residence",
    imageSide: "right",
    image: {
      photoIndex: 0,
      alt: "Raven's Nest",
    },
    paragraphs: [
      "Experience luxury at Raven's Nest in Whistler with ski-in/ski-out convenience and stunning mountain views.",
      "Spacious living areas and comfortable accommodations make this home well suited to families and groups looking for slope-side access and a relaxed mountain setting.",
    ],
  },
  stay: acehostStay({ included: [...ACEHOST_INCLUDED_SKI] }),
  other: {
    title: "Other details",
    notes: [
      ACEHOST_VIP_CONCIERGE_NOTE,
      ACEHOST_SKI_PASS_NOTE,
      ACEHOST_REACH_OUT_NOTE,
    ],
  },
};

export default theRavenNestWriteup;
