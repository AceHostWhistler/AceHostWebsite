import React from "react";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import type { TestimonialItem } from "@/data/homepageTestimonials";
import { TRUST_STATS } from "@/data/listPropertyContent";

export interface TestimonialsFooterLink {
  helperText: string;
  href: string;
  label: string;
}

interface GuestOwnerTestimonialsSectionProps {
  testimonials: TestimonialItem[];
  footerLink: TestimonialsFooterLink;
  showTrustStats?: boolean;
}

function formatGuestReviewName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length < 2) return fullName;
  return `${parts[0]} ${parts[parts.length - 1].charAt(0)}.`;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function isGuestRole(role: string): boolean {
  return role.toLowerCase().includes("guest");
}

function isOwnerRole(role: string): boolean {
  return role.toLowerCase().includes("owner");
}

export default function GuestOwnerTestimonialsSection({
  testimonials,
  footerLink,
  showTrustStats = true,
}: GuestOwnerTestimonialsSectionProps) {
  const rating = TRUST_STATS.find((s) => s.label.includes("Rating"));
  const reviews = TRUST_STATS.find((s) => s.label.includes("Reviews"));

  return (
    <section className="relative overflow-hidden bg-stone-100 py-20 sm:py-28 border-t border-stone-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500 mb-3">
              Real words, real stays
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-stone-950 leading-[1.1]">
              Trusted by homeowners
              <span className="block text-stone-600 font-medium text-2xl sm:text-3xl mt-2">
                and the guests who stay with us
              </span>
            </h2>
          </div>

          {showTrustStats && (
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {rating && (
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-stone-300">
                  <Star className="h-4 w-4 fill-stone-950 text-stone-950" />
                  <span className="text-sm font-semibold text-stone-950">
                    {rating.value}
                  </span>
                  <span className="text-sm text-stone-500">on Airbnb</span>
                </div>
              )}
              {reviews && (
                <div className="inline-flex items-center rounded-full bg-white px-4 py-2 ring-1 ring-stone-300">
                  <span className="text-sm font-semibold text-stone-950">
                    {reviews.value} reviews
                  </span>
                </div>
              )}
              <div className="inline-flex items-center rounded-full bg-stone-950 px-4 py-2">
                <span className="text-sm font-semibold text-white">
                  Superhost
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {testimonials.map((item, index) => {
            const isOwner = isOwnerRole(item.role);

            return (
              <article
                key={`${item.name}-${index}`}
                className="snap-start shrink-0 w-[min(88vw,340px)] lg:w-auto flex flex-col rounded-2xl border-l-4 border-stone-950 bg-white p-6 sm:p-7 shadow-sm ring-1 ring-stone-200 transition-transform hover:-translate-y-0.5"
              >
                <Quote className="h-8 w-8 text-stone-300 mb-4" aria-hidden />
                <p className="text-[15px] leading-relaxed text-stone-700 line-clamp-6 flex-grow">
                  {item.text}
                </p>
                <footer className="mt-6 flex items-center gap-3 pt-5 border-t border-stone-200">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isOwner
                        ? "bg-stone-950 text-white"
                        : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    {getInitials(item.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-stone-950 truncate">
                      {isGuestRole(item.role)
                        ? formatGuestReviewName(item.name)
                        : item.name}
                    </p>
                    <p className="text-xs text-stone-500 truncate">
                      {item.role}
                      {item.date ? ` · ${item.date}` : ""}
                    </p>
                  </div>
                </footer>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-stone-600 text-center sm:text-left">
            {footerLink.helperText}
          </p>
          <a
            href={footerLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
          >
            {footerLink.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
