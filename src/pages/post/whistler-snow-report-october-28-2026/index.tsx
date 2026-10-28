import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import WhistlerSnowReportOctober28Content from "@/components/blog/WhistlerSnowReportOctober28Content";
import BookWhistlerWinterButton from "@/components/blog/BookWhistlerWinterButton";
import { BlogGuestyInlineBanner } from "@/components/blog/BlogGuestyBookingCtas";
import BlogSeoHead from "@/components/blog/BlogSeoHead";
import {
  CATEGORY,
  FAQ_ITEMS,
  HEADLINE,
  HERO,
  PUBLISH_DATE,
  READ_TIME,
  SLUG,
  TOC_ITEMS,
} from "@/data/blog/whistler-snow-report-october-28-2026";

function TableOfContents({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <details className="not-prose bg-gray-50 border border-gray-200 rounded-xl mb-10 lg:hidden">
        <summary className="cursor-pointer p-5 font-bold text-gray-900 list-none flex items-center justify-between">
          Table of contents
          <span className="text-gray-500 text-sm font-normal">
            Tap to expand
          </span>
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

export default function WhistlerSnowReportOctober28Page() {
  const currentArticleLink = `/post/${SLUG}`;

  return (
    <>
      <BlogSeoHead
        keywords="Whistler snow report October 28 2026, Whistler alpine snow forecast, Whistler El Niño 2026 2027, Whistler Blackcomb opening day 2026, Whistler snow report"
        faqItems={FAQ_ITEMS}
      />

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[minmax(0,820px)_220px] lg:gap-12 xl:gap-16 lg:justify-center">
              <div className="min-w-0 max-w-[820px] lg:max-w-none mx-auto lg:mx-0 w-full">
                <BlogBreadcrumbs slug={SLUG} />
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-4">
                  {CATEGORY}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  {HEADLINE}
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-6">
                  <span>By AceHost Whistler</span>
                  <span aria-hidden className="hidden sm:inline">
                    |
                  </span>
                  <span>{PUBLISH_DATE}</span>
                  <span aria-hidden className="hidden sm:inline">
                    |
                  </span>
                  <span>{READ_TIME}</span>
                </div>
                <div className="mb-8">
                  <BookWhistlerWinterButton variant="primary" />
                </div>
                <figure className="mb-10">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={HERO.src}
                      alt={HERO.alt}
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 1024px) 100vw, 820px"
                    />
                  </div>
                  <figcaption className="text-sm text-gray-600 mt-3 italic leading-relaxed">
                    {HERO.caption}
                  </figcaption>
                </figure>
                <BlogGuestyInlineBanner compact placement="top" />
                <TableOfContents mobile />

                <WhistlerSnowReportOctober28Content />
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
