import React from "react";

export const BOOK_WHISTLER_WINTER_URL =
  "https://acehost.guestybookings.com/en";

type BookWhistlerWinterButtonProps = {
  variant?: "primary" | "secondary" | "hero" | "outline-light";
  className?: string;
  label?: string;
};

export default function BookWhistlerWinterButton({
  variant = "primary",
  className = "",
  label = "Book Whistler Winter Stays",
}: BookWhistlerWinterButtonProps) {
  const styles: Record<NonNullable<BookWhistlerWinterButtonProps["variant"]>, string> = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800",
    secondary:
      "border border-gray-300 text-gray-900 hover:bg-gray-50 bg-white",
    hero: "bg-white text-gray-900 hover:bg-gray-100 shadow-sm",
    "outline-light":
      "border border-white text-white hover:bg-white/10",
  };

  return (
    <a
      href={BOOK_WHISTLER_WINTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block text-center px-6 py-3 rounded-lg font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
