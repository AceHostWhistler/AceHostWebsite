import GuestOwnerTestimonialsSection from "@/components/GuestOwnerTestimonialsSection";
import {
  GOOGLE_REVIEWS_URL,
  HOMEPAGE_TESTIMONIALS,
} from "@/data/homepageTestimonials";

export default function Testimonials() {
  return (
    <GuestOwnerTestimonialsSection
      testimonials={HOMEPAGE_TESTIMONIALS}
      footerLink={{
        helperText: "Swipe to read more — or see every review on Google.",
        href: GOOGLE_REVIEWS_URL,
        label: "View all reviews",
      }}
    />
  );
}
