import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import WhistlerSnowReportNovember23Content from "@/components/blog/WhistlerSnowReportNovember23Content";
import BookWhistlerWinterButton from "@/components/blog/BookWhistlerWinterButton";
import { BlogGuestyInlineBanner } from "@/components/blog/BlogGuestyBookingCtas";
import BlogSeoHead from "@/components/blog/BlogSeoHead";
import {
  CATEGORY,
  HEADLINE,
  HERO,
  OG_IMAGE_ALT,
  PUBLISH_DATE,
  READ_TIME,
  SLUG,
  SUBTITLE,
  TOC_ITEMS,
} from "@/data/blog/whistler-snow-report-november-23-2026";

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

export default function WhistlerSnowReportNovember23Page() {
  const currentArticleLink = `/post/${SLUG}`;

  return (
    <>
      <Head>
        <meta key="og:image:alt" property="og:image:alt" content={OG_IMAGE_ALT} />
        <meta
          key="twitter:image:alt"
          name="twitter:image:alt"
          content={OG_IMAGE_ALT}
        />
        <meta key="og:image:width" property="og:image:width" content="1200" />
        <meta key="og:image:height" property="og:image:height" content="675" />
      </Head>
      <BlogSeoHead />

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
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
                  {HEADLINE}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-4">
                  {SUBTITLE}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-6">
                  <span>By AceHost Whistler</span>
                  <span aria-hidden className="hidden sm:inline">
                    |
                  </span>
                  <span>Report date {PUBLISH_DATE}</span>
                  <span aria-hidden className="hidden sm:inline">
                    |
                  </span>
                  <span>{READ_TIME}</span>
                </div>
                <div className="mb-8">
                  <BookWhistlerWinterButton
                    variant="primary"
                    label="Check Whistler availability and book direct"
                  />
                </div>
                <figure className="mb-10">
                  <img
                    src={HERO.src}
                    srcSet={`${HERO.src768} 768w, ${HERO.src} 1672w`}
                    sizes="(max-width: 1024px) 100vw, 820px"
                    width={1672}
                    height={941}
                    alt={HERO.alt}
                    loading="eager"
                    decoding="async"
                    className="w-full h-auto rounded-xl bg-gray-100"
                  />
                  <figcaption className="text-sm text-gray-600 mt-3 italic leading-relaxed">
                    {HERO.caption}
                  </figcaption>
                </figure>
                <BlogGuestyInlineBanner compact placement="top" />
                <TableOfContents mobile />

                <WhistlerSnowReportNovember23Content />
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
