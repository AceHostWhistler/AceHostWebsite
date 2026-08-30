import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import WhistlerWeatherForecastContent from "@/components/blog/WhistlerWeatherForecastContent";
import BookWhistlerWinterButton from "@/components/blog/BookWhistlerWinterButton";
import { BlogGuestyInlineBanner } from "@/components/blog/BlogGuestyBookingCtas";
import BlogSeoHead from "@/components/blog/BlogSeoHead";
import {
  CATEGORY,
  FAQ_ITEMS,
  HERO,
  READ_TIME,
  SLUG,
  TOC_ITEMS,
} from "@/data/blog/whistler-weather-forecast-2026-2027";
const ARTICLE_HEADLINE =
  "Whistler Weather Forecast 2026/2027 Winter: La Niña/El Niño Outlook & Snow Forecast";

function TableOfContents({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <details className="not-prose bg-gray-50 border border-gray-200 rounded-xl mb-10 lg:hidden">
        <summary className="cursor-pointer p-5 font-bold text-gray-900 list-none flex items-center justify-between">
          Table of contents
          <span className="text-gray-500 text-sm font-normal">Tap to expand</span>
        </summary>
        <nav aria-label="Table of contents" className="px-5 pb-5">
          <ol className="space-y-2 text-sm">
            {TOC_ITEMS.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-blue-700 hover:underline leading-snug block py-1"
                >
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </details>
    );
  }

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block sticky top-28 self-start not-prose"
    >
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
          Contents
        </h2>
        <ol className="space-y-2 text-sm">
          {TOC_ITEMS.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-gray-700 hover:text-gray-900 hover:underline leading-snug block py-0.5"
              >
                {index + 1}. {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default function WhistlerWeatherForecast2026Page() {
  const currentArticleLink = `/post/${SLUG}`;

  return (
    <>
      <BlogSeoHead
        keywords="Whistler weather forecast 2026/2027 winter, Whistler snow forecast 2026/2027, Whistler El Niño, Whistler Blackcomb snow forecast, Whistler January snow, best time to ski Whistler 2027, El Niño ski season 2026/2027"
        faqItems={FAQ_ITEMS}
      />

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-0">
          {/* Cinematic hero */}
          <header className="relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[560px] flex items-end">
            <Image
              src={HERO.src}
              alt={HERO.alt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            <div className="relative z-10 w-full max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 pt-28">
              <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                {CATEGORY}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                {ARTICLE_HEADLINE}
              </h1>
              <p className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-2xl mb-6">
                What a potentially historic El Niño could mean for Whistler
                Blackcomb snowfall, temperatures and powder days this winter.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-200 mb-6">
                <span>Updated August 2026</span>
                <span aria-hidden className="hidden sm:inline">
                  |
                </span>
                <span>{READ_TIME}</span>
              </div>
              <BookWhistlerWinterButton variant="hero" />
            </div>
          </header>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="lg:grid lg:grid-cols-[minmax(0,820px)_220px] lg:gap-12 xl:gap-16 lg:justify-center">
              <div className="min-w-0 max-w-[820px] lg:max-w-none mx-auto lg:mx-0 w-full">
                <BlogBreadcrumbs slug="whistler-weather-forecast-2026-2027-winter" />
                <BlogGuestyInlineBanner compact placement="top" />
              <TableOfContents mobile />

                <WhistlerWeatherForecastContent />
              </div>

              <aside className="hidden lg:block w-[220px] shrink-0">
                <TableOfContents />
              </aside>
            </div>

            <BlogGuestyInlineBanner compact placement="bottom" />

            <BlogRelatedArticles
              currentArticleLink={currentArticleLink}
              showBookingCtas={false}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
