import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Quote, Star, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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

function getVisibleCount(width: number): number {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const isOwner = isOwnerRole(item.role);
  const isGuest = isGuestRole(item.role);

  return (
    <article className="group flex h-full min-h-[280px] flex-col rounded-2xl bg-white/90 p-6 shadow-[0_8px_30px_rgba(28,25,23,0.06)] ring-1 ring-stone-200/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(28,25,23,0.1)] sm:p-7">
      <div className="mb-4 flex items-start justify-between gap-3">
        <Quote className="h-7 w-7 shrink-0 text-stone-300" aria-hidden />
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
            isOwner
              ? "bg-stone-950 text-white"
              : "bg-stone-100 text-stone-600"
          }`}
        >
          {isOwner ? "Owner" : "Guest"}
        </span>
      </div>

      {isGuest && (
        <div className="mb-3 flex gap-0.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
      )}

      <p className="line-clamp-6 flex-grow text-[15px] leading-relaxed text-stone-700">
        {item.text}
      </p>

      <footer className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ring-2 ring-white ${
            isOwner
              ? "bg-stone-950 text-white"
              : "bg-gradient-to-br from-stone-200 to-stone-300 text-stone-700"
          }`}
        >
          {getInitials(item.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-stone-950">
            {isGuest ? formatGuestReviewName(item.name) : item.name}
          </p>
          <p className="truncate text-xs text-stone-500">
            {item.role}
            {item.date ? ` · ${item.date}` : ""}
          </p>
        </div>
      </footer>
    </article>
  );
}

export default function GuestOwnerTestimonialsSection({
  testimonials,
  footerLink,
  showTrustStats = true,
}: GuestOwnerTestimonialsSectionProps) {
  const rating = TRUST_STATS.find((s) => s.label.includes("Rating"));
  const reviews = TRUST_STATS.find((s) => s.label.includes("Reviews"));

  const [visibleCount, setVisibleCount] = useState(3);
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(getVisibleCount(window.innerWidth));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const pages = useMemo(() => {
    const chunks: TestimonialItem[][] = [];
    for (let i = 0; i < testimonials.length; i += visibleCount) {
      chunks.push(testimonials.slice(i, i + visibleCount));
    }
    return chunks;
  }, [testimonials, visibleCount]);

  const totalPages = pages.length;

  useEffect(() => {
    setPage((current) => Math.min(current, Math.max(totalPages - 1, 0)));
  }, [totalPages]);

  const goToPage = useCallback(
    (nextPage: number) => {
      if (isAnimating || nextPage < 0 || nextPage >= totalPages) return;
      setIsAnimating(true);
      setPage(nextPage);
      window.setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, totalPages]
  );

  const goPrev = () => goToPage(page - 1);
  const goNext = () => goToPage(page + 1);

  return (
    <section className="relative overflow-hidden border-t border-stone-200 bg-gradient-to-b from-stone-100 via-stone-50 to-white py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-stone-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-stone-300/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              Real words, real stays
            </p>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-stone-950 sm:text-4xl lg:text-[2.65rem]">
              Trusted by homeowners
              <span className="mt-2 block text-2xl font-medium text-stone-600 sm:text-3xl">
                and the guests who stay with us
              </span>
            </h2>
          </div>

          {showTrustStats && (
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {rating && (
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm ring-1 ring-stone-200 backdrop-blur-sm">
                  <Star className="h-4 w-4 fill-stone-950 text-stone-950" />
                  <span className="text-sm font-semibold text-stone-950">
                    {rating.value}
                  </span>
                  <span className="text-sm text-stone-500">on Airbnb</span>
                </div>
              )}
              {reviews && (
                <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 shadow-sm ring-1 ring-stone-200 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-stone-950">
                    {reviews.value} reviews
                  </span>
                </div>
              )}
              <div className="inline-flex items-center rounded-full bg-stone-950 px-4 py-2 shadow-sm">
                <span className="text-sm font-semibold text-white">
                  Superhost
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-stone-50 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-white to-transparent lg:block" />

          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((pageItems, pageIndex) => (
                <div
                  key={pageIndex}
                  className="grid w-full shrink-0 gap-5"
                  style={{
                    gridTemplateColumns: `repeat(${pageItems.length}, minmax(0, 1fr))`,
                  }}
                >
                  {pageItems.map((item, index) => (
                    <TestimonialCard
                      key={`${item.name}-${pageIndex}-${index}`}
                      item={item}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={page === 0 || isAnimating}
                  aria-label="Previous reviews"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 shadow-sm transition-all hover:border-stone-300 hover:bg-stone-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={page >= totalPages - 1 || isAnimating}
                  aria-label="Next reviews"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 shadow-sm transition-all hover:border-stone-300 hover:bg-stone-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="ml-2 text-sm text-stone-500">
                  {page + 1} of {totalPages}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToPage(index)}
                    aria-label={`Go to review page ${index + 1}`}
                    aria-current={index === page ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === page
                        ? "w-8 bg-stone-950"
                        : "w-2 bg-stone-300 hover:bg-stone-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="text-center text-sm text-stone-600 sm:text-left">
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
