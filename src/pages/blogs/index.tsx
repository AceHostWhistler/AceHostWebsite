import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  discoverBlogPosts,
  type BlogPostListing,
} from "@/utils/discoverBlogPosts";
import { allArticles } from "@/utils/blogArticles";
import { SITE_URL } from "@/data/seo/business";
import { toAbsoluteImageUrl } from "@/lib/seo/socialShare";

interface BlogIndexProps {
  blogPosts: BlogPostListing[];
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  return {
    props: {
      blogPosts: discoverBlogPosts(),
    },
  };
};

const BLOGS_URL = `${SITE_URL}/blogs`;
const BLOGS_DESC =
  "Explore the AceHost blog for insights on luxury accommodations in Whistler, property management tips, seasonal ski reports, and exclusive travel experiences.";
const BLOGS_OG_IMAGE = toAbsoluteImageUrl(allArticles[0].coverImage);

const BlogIndex = ({ blogPosts }: BlogIndexProps) => {
  const featuredArticle = allArticles[0];
  const featuredSlug = featuredArticle.link.replace(/^\/post\//, "");
  const gridPosts = blogPosts.filter((post) => post.slug !== featuredSlug);
  const listStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BLOGS_URL}#blog-itemlist`,
    name: "AceHost Whistler blog",
    numberOfItems: blogPosts.length,
    itemListElement: blogPosts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: post.title,
      url: `${SITE_URL}/post/${post.slug}`,
    })),
  };
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The AceHost Blog | Luxury Whistler Vacation Rentals & Tips",
    url: BLOGS_URL,
    description: BLOGS_DESC,
    isPartOf: {
      "@type": "WebSite",
      name: "AceHost Whistler",
      url: SITE_URL,
    },
    mainEntity: { "@id": `${BLOGS_URL}#blog-itemlist` },
  };

  return (
    <>
      <Head>
        <title>
          The AceHost Blog | Luxury Whistler Vacation Rentals & Tips
        </title>
        <meta name="description" content={BLOGS_DESC} />
        <link rel="canonical" href={BLOGS_URL} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The AceHost Blog | Luxury Whistler Vacation Rentals & Tips"
        />
        <meta property="og:description" content={BLOGS_DESC} />
        <meta property="og:url" content={BLOGS_URL} />
        <meta property="og:image" content={BLOGS_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={BLOGS_OG_IMAGE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [pageStructuredData, listStructuredData],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
              The AceHost Blog
            </h1>

            <Link
              href={featuredArticle.link}
              className="block mb-16 group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
                <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full">
                  <Image
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover object-center opacity-90 sm:opacity-80 group-hover:opacity-90 sm:group-hover:scale-[1.02] transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                    priority
                  />
                  <div
                    className="absolute inset-0 hidden sm:block bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="relative p-5 sm:absolute sm:inset-x-0 sm:bottom-0 sm:p-10 sm:bg-gradient-to-t sm:from-black/90 sm:via-black/50 sm:to-transparent">
                  <span className="inline-block bg-red-600 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-3 sm:mb-4">
                    Featured
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-snug sm:leading-tight group-hover:text-gray-100 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  {featuredArticle.description ? (
                    <p className="text-gray-200 text-sm sm:text-base max-w-3xl leading-relaxed line-clamp-4 sm:line-clamp-none">
                      {featuredArticle.description}
                    </p>
                  ) : null}
                  <span className="inline-block mt-4 sm:mt-5 text-white font-medium text-sm group-hover:underline">
                    Read the featured article →
                  </span>
                </div>
              </div>
            </Link>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              id="blog-itemlist"
            >
              {gridPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/post/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={
                          post.heroImage || `/photos/post/${post.slug}/Hero.jpg`
                        }
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Try different extensions and casing if the image fails to load
                          const target = e.target as HTMLImageElement;
                          const originalSrc = target.src;

                          if (originalSrc.toLowerCase().endsWith(".jpg")) {
                            // Try png
                            target.src = originalSrc.replace(/\.jpg$/i, ".png");
                          } else if (
                            originalSrc.toLowerCase().endsWith(".png")
                          ) {
                            // Try jpeg
                            target.src = originalSrc.replace(
                              /\.png$/i,
                              ".jpeg"
                            );
                          } else if (
                            originalSrc.toLowerCase().endsWith(".jpeg")
                          ) {
                            // Try with different casing
                            if (originalSrc.includes("/Hero.")) {
                              target.src = originalSrc.replace(
                                "/Hero.",
                                "/hero."
                              );
                            } else if (originalSrc.includes("/hero.")) {
                              target.src = originalSrc.replace(
                                "/hero.",
                                "/Hero."
                              );
                            }
                          }
                        }}
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                      {post.title}
                    </h2>
                    <Link
                      href={`/post/${post.slug}`}
                      className="inline-flex items-center text-black font-medium hover:underline"
                    >
                      Read post
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogIndex;
