import GuestOwnerTestimonialsSection from "@/components/GuestOwnerTestimonialsSection";
import {
  ACEHOST_AIRBNB_PROFILE_URL,
  LIST_PROPERTY_TESTIMONIALS,
} from "@/data/listPropertyContent";

export default function ListPropertyTestimonialsSection() {
  return (
    <GuestOwnerTestimonialsSection
      testimonials={LIST_PROPERTY_TESTIMONIALS}
      footerLink={{
        helperText: "Swipe to read more — or see every review on Airbnb.",
        href: ACEHOST_AIRBNB_PROFILE_URL,
        label: "Read all reviews",
      }}
    />
  );
}
