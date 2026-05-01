import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";

const SLUG = "fifa-vancouver-whistler-the-luxury-whistler-fifa-experience";
const PUBLISH_DATE = "May 1, 2026";
const ISO_MODIFIED = "2026-05-01T09:30:00-07:00";
const HERO_IMAGE = "/photos/properties/Altitude New Photos Best/1.jpg";
const HERO_IMAGE_URL = `https://acehost.ca${encodeURI(HERO_IMAGE)}`;

const META = {
  title:
    "FIFA Vancouver / Whistler: The Luxury Whistler FIFA Experience | AceHost",
  description:
    "Planning FIFA World Cup 2026 in Vancouver? Stay in luxury Whistler rentals, enjoy Sea to Sky views, and book premium homes with convenient shuttle options for match days.",
};

type FeaturedProperty = {
  name: string;
  description: string;
  photos: string[];
  bookUrl: string;
  bookLabel?: string;
};

const featuredProperties: FeaturedProperty[] = [
  {
    name: "Altitude Retreat | Kadenwood",
    description:
      "A stunning luxury retreat ideal for larger groups looking for privacy, mountain views, and a true high-end Whistler stay.",
    photos: [
      "/photos/properties/Altitude New Photos Best/1.jpg",
      "/photos/properties/Altitude New Photos Best/2.jpg",
      "/photos/properties/Altitude New Photos Best/3.jpg",
      "/photos/properties/Altitude New Photos Best/4.jpg",
    ],
    bookUrl: "/contact",
    bookLabel: "Inquire to Book",
  },
  {
    name: "Chalet La Forja | Ski in Ski out",
    description:
      "One of the most impressive homes in Whistler, perfect for guests wanting a statement home with a luxury feel throughout.",
    photos: [
      "/photos/properties/Chalet La Forja/hero00001.jpg",
      "/photos/properties/Chalet La Forja/hero00002.jpg",
      "/photos/properties/Chalet La Forja/Forja-3 copy.jpg",
      "/photos/properties/Chalet La Forja/IMG_1414 2.JPG",
    ],
    bookUrl:
      "https://www.airbnb.ca/rooms/52655503?guests=1&adults=1&s=67&unique_share_id=f1bb5c2c-51f9-4a82-9aa4-670fb8caa71d",
  },
  {
    name: "Slope Side Chalet | Ski-In/Out",
    description:
      "A beautiful Kadenwood option that blends a warm mountain feel with elevated design and privacy.",
    photos: [
      "/photos/properties/Slopeside Kadenwood/01-2945 Kadenwood Dr 01.jpg",
      "/photos/properties/Slopeside Kadenwood/02-2945 Kadenwood Dr 02.jpg",
      "/photos/properties/Slopeside Kadenwood/03-2945 Kadenwood Dr 03.jpg",
      "/photos/properties/Slopeside Kadenwood/04-2945 Kadenwood Dr 04.jpg",
    ],
    bookUrl:
      "https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0",
  },
  {
    name: "Luxury 6-Bedroom | Whistler",
    description:
      "A standout luxury home option for larger groups wanting space, comfort, and a beautiful setting for a Whistler summer stay.",
    photos: [
      "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/02 - 20251108 MM4P 01 0056.jpg",
      "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/03 - 20251108 A7M4 02 A1_07764.jpg",
      "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/11 - 20251108 A7M4 02 A1_07858.jpg",
      "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/12 - 20251108 A7M4 02 A1_07863.jpg",
    ],
    bookUrl:
      "https://www.airbnb.ca/rooms/1551638001847968788?guests=1&adults=1&s=67&unique_share_id=ff68258e-d89f-4493-8e79-fd85820e6872",
  },
  {
    name: "Luxe 5-BED Scandinave Retreat | Walk to Slopes",
    description:
      "A larger townhome-style option that is perfect for groups wanting both value and space, while still enjoying a premium Whistler experience.",
    photos: [
      "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00620.jpg",
      "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00635.jpg",
      "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00615.jpg",
      "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00610.jpg",
    ],
    bookUrl: "/contact",
    bookLabel: "Inquire to Book",
  },
  {
    name: "Falcon | Elegant Chalet",
    description:
      "A gorgeous chalet with strong design appeal, great views, and the type of elevated mountain atmosphere that works beautifully for FIFA travellers.",
    photos: [
      "/photos/properties/Falcon/03 - 20250827 A7M4 01 DSC00224-Edit.jpg",
      "/photos/properties/Falcon/01 - 20250827 A7M4 01 DSC00509-Edit.jpg",
      "/photos/properties/Falcon/02 - 20250827 A7M4 01 DSC00524.jpg",
      "/photos/properties/Falcon/04 - 20250827 A7M4 01 DSC00234.jpg",
    ],
    bookUrl:
      "https://www.airbnb.ca/rooms/18060329?preview_for_ml=true&source_impression_id=p3_1684112119_tL0LL7QnYLFGOCBI",
  },
  {
    name: "Heron Views | Whistler Village",
    description:
      "Beautifully positioned and well designed, this is a great option for guests wanting a high-end Whistler stay close to everything.",
    photos: [
      "/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05891.jpg",
      "/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05831-Edit.jpg",
      "/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05851.jpg",
      "/photos/properties/3445-Heron-Place/68-3445 Heron Place 53-Edit.jpg",
    ],
    bookUrl:
      "https://www.airbnb.ca/rooms/1168163637007998550?guests=1&adults=1&s=67&unique_share_id=8227e964-920d-4bc0-8073-13043963151f",
  },
  {
    name: "Whistler Village Views | Luxury 2.5 Bedroom",
    description:
      "A polished and comfortable option for guests wanting village convenience with a more upscale feel.",
    photos: [
      "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge.jpg",
      "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-2.jpg",
      "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-3.jpg",
      "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-4.jpg",
    ],
    bookUrl:
      "https://www.airbnb.ca/rooms/50025973?preview_for_ml=true&source_impression_id=p3_1699290307_SHcNx7EoXySmn6j5",
  },
  {
    name: "Luxury 3-Bed | Stunning Views",
    description:
      "A strong choice for families or small groups looking for great views, comfort, and a relaxed summer base in Whistler.",
    photos: [
      "/optimized/luxury-3-bed-views/cover.jpg",
      "/optimized/luxury-3-bed-views/image-01.jpg",
      "/optimized/luxury-3-bed-views/image-02.jpg",
      "/optimized/luxury-3-bed-views/image-03.jpg",
    ],
    bookUrl:
      "https://www.airbnb.ca/rooms/1461637483646115205?guests=1&adults=1&s=67&unique_share_id=9b6640b9-138d-4627-bea4-cb2155e32c72",
  },
];

export default function BlogPost() {
  const currentArticleLink = `/post/${SLUG}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: META.title,
    image: HERO_IMAGE_URL,
    datePublished: ISO_MODIFIED,
    dateModified: ISO_MODIFIED,
    author: {
      "@type": "Organization",
      name: "AceHost Whistler",
      url: "https://acehost.ca",
    },
    publisher: {
      "@type": "Organization",
      name: "AceHost Whistler",
      logo: {
        "@type": "ImageObject",
        url: "https://acehost.ca/logo.png",
      },
    },
    description: META.description,
  };

  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <link rel="canonical" href={`https://acehost.ca/post/${SLUG}`} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={HERO_IMAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={HERO_IMAGE_URL} />
        <meta
          name="keywords"
          content="FIFA Vancouver 2026, Whistler luxury rentals, BC Place matches, Sea to Sky Highway, Whistler FIFA shuttle, Airbnb Whistler luxury homes"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                FIFA Vancouver / Whistler, The Luxury Whistler FIFA Experience
              </h1>
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 gap-x-4">
                <span>Published: {PUBLISH_DATE}</span>
                <span className="hidden sm:inline" aria-hidden>
                  |
                </span>
                <span>13 min read</span>
              </div>
              <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={HERO_IMAGE}
                  alt="Luxury Whistler FIFA experience"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-800 leading-relaxed">
                The FIFA World Cup 2026 is coming to Vancouver, and for travellers
                looking to do it properly, Whistler offers a far more private,
                scenic, and elevated way to enjoy it.
              </p>
              <p>
                Vancouver is scheduled to host seven matches at BC Place on June
                13, June 18, June 21, June 24, June 26, July 2, and July 7, 2026.
                The overall tournament runs from June 11 to July 19, 2026.
              </p>
              <p>
                For many guests, the real luxury move will be to enjoy the energy
                of FIFA in Vancouver, then retreat to Whistler at the end of the
                day. The drive from Vancouver to Whistler along the famous Sea to
                Sky Highway takes about two hours and is one of the most
                beautiful drives in British Columbia.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Why stay in Whistler for FIFA Vancouver?
              </h2>
              <p>
                If you are worried about back-to-back traffic, hotel congestion,
                and the general intensity of Vancouver during FIFA, Whistler
                offers a very different experience. You can still take in the
                matches, events, and city energy, but come home to privacy,
                mountain air, beautiful design, and peaceful views.
              </p>
              <p>
                Instead of waking up to downtown noise and packed streets, you
                can wake up to birds, forest, and a balcony view that actually
                feels like a vacation.
              </p>
              <p>
                This is especially attractive for families, executives, groups of
                friends, and luxury travellers who want the best of both worlds:
                world-class football in Vancouver, and a high-end mountain stay
                in Whistler.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                AceHost&apos;s FIFA shuttle options
              </h2>
              <p>
                To make the experience even easier, AceHost is offering shuttle
                service for FIFA. With advanced notice, shuttle service can be
                arranged at a reasonable price. Both private and public shuttles
                are available, depending on the size of your group and the style
                of trip you want.
              </p>
              <p>
                This makes it easy to enjoy the matches in Vancouver, while
                staying in the peace and comfort of Whistler.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                The luxury Whistler FIFA experience
              </h2>
              <p>
                At AceHost, we believe FIFA should feel like more than just a
                ticket and a hotel. It should feel like a full luxury experience.
              </p>
              <p>
                Imagine spending the day in Vancouver for a match at BC Place,
                then returning to Whistler for a private chef dinner, sunset
                drinks overlooking the mountains, a soak in the hot tub, and
                complete privacy.
              </p>
              <p>
                For travellers who want something memorable, this is a much
                stronger option than staying in the downtown core through the
                busiest stretch of the tournament.
              </p>
              <p>
                Enjoy your FIFA experience in luxury, with no sounds from your
                balcony other than birds whistling. For those wanting to enjoy
                both Vancouver and Whistler in one trip, this is one of the best
                ways to do it.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Best AceHost luxury homes for FIFA Vancouver guests
              </h2>
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3 not-prose">
                Kadenwood luxury homes
              </h3>
              <p>
                For guests wanting the highest-end Whistler experience, Kadenwood
                is still one of the strongest options. It is private, prestigious,
                and perfect for travellers who want space, views, and a real
                sense of retreat.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-3 not-prose">
                Luxury homes beyond Kadenwood
              </h3>
              <p>
                These homes are excellent for guests who want larger layouts,
                elevated design, and easy access to Whistler village amenities in
                summer.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-3 not-prose">
                Condo and townhome options
              </h3>
              <p>
                Not every FIFA trip needs a large private chalet. AceHost also
                offers stylish condo and townhome options for smaller groups,
                couples, and families who still want a premium Whistler base.
              </p>
            </div>

            <div className="mt-10 space-y-12">
              {featuredProperties.map((property) => (
                <section key={property.name} className="border border-gray-200 rounded-xl p-5 md:p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {property.name}
                  </h3>
                  <p className="text-gray-700 mb-5">{property.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {property.photos.slice(0, 4).map((photo, index) => (
                      <div
                        key={`${property.name}-${index}`}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden"
                      >
                        <Image
                          src={photo}
                          alt={`${property.name} photo ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>

                  <a
                    href={property.bookUrl}
                    target={property.bookUrl.startsWith("http") ? "_blank" : undefined}
                    rel={property.bookUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    {property.bookLabel || "Book on Airbnb"}
                  </a>
                </section>
              ))}
            </div>

            <div className="prose prose-lg max-w-none mt-14">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Why this is one of the best ways to experience FIFA Vancouver
              </h2>
              <p>
                Vancouver will be exciting, but it will also be busy. Hotels will
                fill up, roads will be crowded, and the city will be running at
                full volume around match days. By staying in Whistler, guests can
                enjoy the event while protecting the calm, privacy, and comfort
                that make a luxury trip feel worthwhile.
              </p>
              <p>For many travellers, that is the sweet spot:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 not-prose">
                <li>Matchday energy in Vancouver</li>
                <li>A scenic Sea to Sky drive</li>
                <li>Peace, privacy, and luxury in Whistler</li>
                <li>More space, better views, and a more memorable overall stay</li>
              </ul>
              <p>
                If your ideal FIFA trip includes great football, a beautiful
                mountain setting, and a much more refined place to come home to,
                Whistler is the answer.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Book your FIFA Vancouver / Whistler stay
              </h2>
              <p>
                AceHost offers a curated portfolio of luxury Whistler rentals,
                from private mountain estates to well-located townhomes and
                premium condo options. With shuttle coordination available with
                advanced notice, it is easy to combine FIFA Vancouver with a true
                luxury Whistler stay.
              </p>
              <p>
                Explore the full collection at{" "}
                <Link href="/properties">AceHost.ca</Link> and plan your FIFA
                Vancouver / Whistler experience in a way that feels far more
                private, relaxed, and elevated.
              </p>
            </div>

            <div className="not-prose mt-12">
              <BlogRelatedArticles currentArticleLink={currentArticleLink} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
