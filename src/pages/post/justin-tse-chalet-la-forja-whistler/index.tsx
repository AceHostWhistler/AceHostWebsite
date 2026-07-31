import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";
import { SITE_URL } from "@/data/seo/business";
import { kadenwoodProperties } from "@/data/blog/whistler-28-places-properties";
import type { Whistler28Property } from "@/data/blog/whistler-28-places-properties";
import { airbnbButtonBlog } from "@/lib/airbnbButtonStyles";

const SLUG = "justin-tse-chalet-la-forja-whistler";
const CANONICAL_URL = `${SITE_URL}/post/${SLUG}`;
const YOUTUBE_ID = "cNHhE2B8Zeo";

const PHOTOS = {
  hero: "/photos/properties/Chalet La Forja/2950 Heritage Peaks Trail 4 Large 2.png",
  greatRoom: "/photos/properties/Chalet La Forja/New Drone Cover photo Forja.png",
  poolHotTub: "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb22 2.jpg",
  skiExterior: "/photos/properties/Chalet La Forja/Forja-3 copy.jpg",
  mountainExterior: "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb33.jpg",
  kitchenDining: "/photos/properties/Chalet La Forja/05-2950 Heritage Peaks Trail-05 2.jpg",
  ctaExterior: "/photos/properties/Chalet La Forja/hero00002.jpg",
} as const;

const PUBLISH_DATE = "July 31, 2026";
const ISO_MOD = "2026-07-31T12:00:00-07:00";

const META = {
  title:
    "Justin Tse in Kadenwood | Luxury Whistler Experience with AceHost",
  description:
    "Creator Justin Tse stayed with AceHost in Kadenwood, Whistler. See how our ski-in/ski-out chalets, VIP concierge, and curated experiences turn a Whistler trip into something unforgettable.",
};

const LISTING_HREF = "/listings/chalet-la-forja-kadenwood";
const KADENWOOD_HREF = "/post/where-to-stay-in-whistler-winter#kadenwood";
const PROPERTIES_HREF = "/properties";
const CONCIERGE_HREF = "/concierge-service";

const KADENWOOD_BOOKING_PROPERTIES: Whistler28Property[] = kadenwoodProperties.map(
  (property) =>
    property.listingHref === LISTING_HREF
      ? {
          ...property,
          image:
            "/photos/properties/Chalet La Forja/2950 Heritage Peaks Trail 4 Large 2.png",
        }
      : property
);

function KadenwoodPropertyCard({ property }: { property: Whistler28Property }) {
  return (
    <article className="not-prose border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
          <Link href={property.listingHref} className="hover:text-gray-700">
            {property.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {property.description}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={property.listingHref}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            View property
          </Link>
          {property.contactOnly || !property.bookUrl ? (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Contact AceHost
            </Link>
          ) : (
            <a
              href={property.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={airbnbButtonBlog}
            >
              Book on Airbnb
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ArticleImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full aspect-[16/9] my-10 rounded-xl overflow-hidden not-prose">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 896px) 100vw, 896px"
        priority={priority}
      />
    </div>
  );
}

function YouTubeEmbed() {
  return (
    <div className="relative w-full aspect-video my-10 rounded-xl overflow-hidden not-prose shadow-sm">
      <iframe
        src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
        title="The Ultimate Luxury Whistler Chalet Winter Road Trip Experience | Justin Tse"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

export default function BlogPost() {
  const currentArticleLink = `/post/${SLUG}`;
  const heroUrl = `${SITE_URL}${encodeURI(PHOTOS.hero)}`;

  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={heroUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={ISO_MOD} />
        <meta property="article:modified_time" content={ISO_MOD} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={heroUrl} />
        <meta
          name="keywords"
          content="Justin Tse Whistler, Kadenwood Whistler, luxury Whistler chalet, AceHost concierge, luxury Whistler experiences, ski-in ski-out Whistler, Whistler Blackcomb, Chalet La Forja"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Luxury Travel
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Kadenwood
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  12 min read
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Justin Tse&apos;s Luxury Whistler Experience with AceHost in
                Kadenwood
              </h1>

              <div className="flex items-center text-sm text-gray-600 mb-8">
                <span>Published: {PUBLISH_DATE}</span>
              </div>

              <ArticleImage
                src={PHOTOS.hero}
                alt="Luxury Kadenwood chalet interior in Whistler"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-800 leading-relaxed">
                It was an absolute pleasure hosting Justin Tse in Whistler and
                giving him a taste of what an AceHost winter experience can look
                like in{" "}
                <Link href={KADENWOOD_HREF}>Kadenwood</Link>.
              </p>

              <p>
                Justin stayed at{" "}
                <Link href={LISTING_HREF}>Chalet La Forja</Link> during the trip
                and documented the experience for his YouTube channel in{" "}
                <em>
                  The Ultimate Luxury Whistler Chalet Winter Road Trip
                  Experience
                </em>
                . But the video captures something bigger than any single home:
                what it feels like to base a Whistler vacation in one of the
                mountain&apos;s most exclusive neighbourhoods, with a team
                handling the details from arrival to departure.
              </p>

              <p>
                From skiing Whistler Blackcomb and ice fishing to dining in
                Whistler and heading into the mountains by helicopter,
                Justin&apos;s itinerary shows why we believe a great Whistler
                trip should be about the entire experience — not just where you
                sleep.
              </p>

              <YouTubeEmbed />

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Why Stay in Kadenwood
              </h2>

              <p>
                <Link href={KADENWOOD_HREF}>Kadenwood</Link> sits above Whistler
                Creekside on Whistler Mountain and is one of the most sought-after
                addresses in the resort. The neighbourhood combines true
                ski-in/ski-out access, dramatic mountain views, and a level of
                privacy that is hard to find elsewhere in Whistler.
              </p>

              <p>
                Many of our guests choose Kadenwood because they want a large
                luxury chalet where several families or a big group can stay
                together — without spending the week driving back and forth from
                the Village. Access to Kadenwood&apos;s private gondola connects
                the neighbourhood with Creekside below, making it easy to reach
                restaurants, groceries and the base area while still feeling
                completely removed from the crowds.
              </p>

              <ArticleImage
                src={PHOTOS.greatRoom}
                alt="Luxury Kadenwood chalet living space in Whistler"
              />

              <p>
                AceHost manages a collection of exceptional{" "}
                <Link href={PROPERTIES_HREF}>
                  luxury Whistler vacation rentals
                </Link>{" "}
                in Kadenwood, from seven-bedroom ski chalets with private butler
                service to larger estates built for multi-generational trips.
                Homes in the neighbourhood typically feature hot tubs, expansive
                great rooms, gourmet kitchens, and direct mountain access — the
                kind of setup that makes a Whistler vacation feel effortless from
                the moment you arrive.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                The AceHost Concierge Experience
              </h2>

              <p>
                Beautiful homes are at the centre of what we do, but AceHost has
                never been only about handing guests the keys to a house. For
                many of our guests, a trip to Whistler is a major family
                vacation, celebration, or once-a-year ski trip. Some are
                travelling internationally. Others are bringing several
                generations together under one roof.
              </p>

              <p>
                Our job is to make the rest of the trip as seamless as the
                accommodation. That is where our{" "}
                <Link href={CONCIERGE_HREF}>VIP concierge team</Link> comes in.
              </p>

              <p>
                Before arrival, we can help organize airport transportation,
                stock the fridge with groceries, arrange ski equipment and
                private instructors, and build a rough itinerary around what the
                group wants from the week. During the stay, our concierge team
                handles restaurant reservations, private chefs, spa treatments,
                snowmobiling, helicopter experiences, childcare, and the kind of
                last-minute requests that come up when you are travelling with a
                large group.
              </p>

              <ArticleImage
                src={PHOTOS.poolHotTub}
                alt="Heated outdoor pool and hot tub at a Kadenwood luxury chalet"
              />

              <p>
                Several of our Kadenwood homes also include a private butler and
                complimentary housekeeping every other day, so guests can focus on
                skiing, relaxing, and enjoying time together rather than
                managing logistics. Whether you are staying for a long weekend or
                a full holiday week, the goal is the same: a Whistler trip that
                feels curated, not complicated.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                A Different Way to Experience Whistler
              </h2>

              <p>
                One of the things we loved about Justin&apos;s video is that it
                doesn&apos;t simply tour the home. It shows what happens once
                you step outside of it.
              </p>

              <p>His itinerary included:</p>

              <ul>
                <li>
                  <strong>Whistler Blackcomb skiing</strong>, getting out onto
                  one of the world&apos;s most famous ski mountains.
                </li>
                <li>
                  <strong>Ice fishing</strong>, offering a completely different
                  winter experience away from the ski hill.
                </li>
                <li>
                  <strong>Dinner at Bearfoot Bistro</strong>, one of
                  Whistler&apos;s best-known dining experiences.
                </li>
                <li>
                  <strong>A helicopter lunch</strong>, taking the trip from the
                  Village into Whistler&apos;s incredible surrounding mountain
                  landscape.
                </li>
              </ul>

              <p>
                The video also features a stop at North Arm Farm during the
                journey to Whistler. Justin&apos;s full itinerary moves quickly
                from the chalet into the road trip, mountain, and dining
                experiences that made up the stay.
              </p>

              <p>For us, this is what makes Whistler special.</p>

              <p>
                You can ski all morning, return to an incredible private chalet
                in the afternoon, head out for an entirely different adventure,
                and finish the evening around a beautiful dinner with friends or
                family. No two trips need to look the same — and that is exactly
                the kind of itinerary our concierge team loves building.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Skiing Whistler Blackcomb from Kadenwood
              </h2>

              <p>
                Of course, no winter visit to Whistler feels complete without
                time on the mountain. Staying in Kadenwood means guests can
                access Whistler Mountain directly from the neighbourhood and
                return home after skiing without basing their day around driving
                into the Village.
              </p>

              <ArticleImage
                src={PHOTOS.skiExterior}
                alt="Ski-in ski-out luxury chalet exterior in Kadenwood snow"
              />

              <p>
                For guests unfamiliar with Whistler Blackcomb, our team can help
                arrange private ski instructors, equipment rentals, and other
                mountain logistics before arrival. We want guests to spend their
                vacation skiing, not figuring out where to pick up equipment or
                making calls trying to organize the next day.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Taking Whistler Beyond the Ski Hill
              </h2>

              <p>
                Whistler is obviously known around the world for skiing and
                snowboarding, but some of our favourite guest experiences have
                very little to do with the lifts.
              </p>

              <p>
                Justin&apos;s trip included ice fishing, followed later by a
                helicopter experience in the mountains — both arranged as part of
                a broader AceHost itinerary.
              </p>

              <p>
                For guests looking to build a special trip, our concierge team
                can arrange a range of experiences depending on the season,
                weather, and interests of the group. That might include
                snowmobiling, a private chef at the chalet, restaurant
                reservations, private transportation, massages, or other
                customized activities.
              </p>

              <ArticleImage
                src={PHOTOS.mountainExterior}
                alt="Kadenwood luxury chalet in the Whistler mountains"
              />

              <p>
                For larger family trips especially, we find that the best
                itineraries usually have a balance:
              </p>

              <ul>
                <li>A few big adventure days.</li>
                <li>A few great ski days.</li>
                <li>
                  And enough time left over to actually enjoy the chalet you came
                  all the way to Whistler to stay in.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Dining in Whistler
              </h2>

              <p>Justin also stopped at Bearfoot Bistro during the trip.</p>

              <p>
                Dining is a huge part of the Whistler experience, and it is
                something we help guests with every day. Depending on what the
                group is looking for, we can help arrange restaurant reservations
                around Whistler and Creekside or organize private dining at the
                chalet.
              </p>

              <ArticleImage
                src={PHOTOS.kitchenDining}
                alt="Gourmet kitchen and dining space in a Kadenwood chalet"
              />

              <p>
                Many of our Kadenwood homes are built for entertaining — large
                kitchens, long dining tables, and great rooms designed for
                groups. For some trips, having dinner prepared at the property
                is every bit as memorable as going into town. For others, a mix
                of both works best. Our concierge team can help plan either way.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Thank You, Justin
              </h2>

              <p>
                A huge thank you to Justin Tse and his team for joining us in
                Whistler and producing such a beautiful video.
              </p>

              <p>
                Justin has built his audience around highly polished content
                spanning technology, lifestyle, automotive, and travel, and his
                cinematic style made him a perfect fit for showcasing what an
                AceHost stay in Kadenwood can feel like — from the home itself to
                the adventures beyond it.
              </p>

              <p>
                It was a pleasure hosting the group at Chalet La Forja, getting
                them into the mountains, and showing them a few of the
                experiences we love sharing with our guests. We hope to have them
                back in Whistler again soon.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Book a Kadenwood Stay with AceHost
              </h2>

              <p>
                If Justin&apos;s trip has you thinking about a Whistler vacation
                with the same level of comfort and support, our Kadenwood
                collection is a great place to start. These are some of the
                largest and most impressive{" "}
                <Link href={PROPERTIES_HREF}>
                  luxury Whistler vacation rentals
                </Link>{" "}
                we manage — all available to book directly on Airbnb or through
                our team.
              </p>

              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {KADENWOOD_BOOKING_PROPERTIES.map((property) => (
                  <KadenwoodPropertyCard
                    key={property.listingHref}
                    property={property}
                  />
                ))}
              </div>

              <ArticleImage
                src={PHOTOS.ctaExterior}
                alt="Luxury Kadenwood chalet exterior in Whistler"
              />

              <p>
                Whether you are planning a family ski vacation, Christmas in
                Whistler, a special celebration, or a once-in-a-lifetime group
                trip, our team would be happy to help put together the stay.
                Browse our full collection, explore our{" "}
                <Link href={CONCIERGE_HREF}>concierge services</Link>, or{" "}
                <Link href="/contact">contact us directly</Link> to start
                planning your Whistler experience.
              </p>

              <div className="not-prose flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
                <Link
                  href={PROPERTIES_HREF}
                  className="inline-block text-center bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  View Kadenwood Properties
                </Link>
                <Link
                  href={CONCIERGE_HREF}
                  className="inline-block text-center bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Concierge Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-block text-center bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Contact AceHost
                </Link>
              </div>
            </div>

            <BlogRelatedArticles currentArticleLink={currentArticleLink} />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
