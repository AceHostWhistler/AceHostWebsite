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
  title: "Justin Tse at Chalet La Forja | Luxury Whistler Experience | AceHost",
  description:
    "Join Justin Tse at Chalet La Forja in Kadenwood for the ultimate luxury Whistler experience, from ski-in/ski-out living to skiing, dining, ice fishing and a helicopter adventure with AceHost.",
};

const LISTING_HREF = "/listings/chalet-la-forja-kadenwood";
const KADENWOOD_HREF = "/post/where-to-stay-in-whistler-winter#kadenwood";
const PROPERTIES_HREF = "/properties";

const OTHER_KADENWOOD_PROPERTIES: Whistler28Property[] = [
  ...kadenwoodProperties.filter((p) => p.listingHref !== LISTING_HREF),
  {
    number: 7,
    name: "Cedarhof | Kadenwood",
    description:
      "A luxury ski-in/ski-out Kadenwood retreat with a heated pool, hot tub, tasting room, and stunning views over Whistler Peak.",
    image: "/optimized/cedarhof/2932 Pool A NEW.jpg",
    listingHref: "/listings/cedarhof-kadenwood",
    contactOnly: true,
  },
];

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
          content="Justin Tse Whistler, Chalet La Forja, Kadenwood Whistler, luxury Whistler chalet, luxury Whistler experiences, AceHost, ski-in ski-out Whistler, Whistler Blackcomb"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Property Feature
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Kadenwood
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  12 min read
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Inside the Ultimate Luxury Whistler Experience with Justin Tse
                at Chalet La Forja
              </h1>

              <div className="flex items-center text-sm text-gray-600 mb-8">
                <span>Published: {PUBLISH_DATE}</span>
              </div>

              <ArticleImage
                src={PHOTOS.hero}
                alt="Chalet La Forja snowy exterior in Kadenwood, Whistler"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-800 leading-relaxed">
                It was an absolute pleasure hosting Justin Tse in Whistler and
                giving him a taste of what an AceHost winter experience can look
                like.
              </p>

              <p>
                Justin joined us at{" "}
                <Link href={LISTING_HREF}>Chalet La Forja</Link>, one of the
                most spectacular luxury homes in{" "}
                <Link href={KADENWOOD_HREF}>Kadenwood</Link>, and documented the
                trip for his YouTube channel in{" "}
                <em>
                  The Ultimate Luxury Whistler Chalet Winter Road Trip
                  Experience
                </em>
                .
              </p>

              <p>
                The result is an incredible look at Whistler beyond simply
                booking a beautiful place to stay.
              </p>

              <p>
                From exploring Chalet La Forja and skiing Whistler Blackcomb to
                ice fishing, dining in Whistler and heading into the mountains
                by helicopter, Justin&apos;s trip showcases exactly why we
                believe a great Whistler vacation should be about the entire
                experience.
              </p>

              <YouTubeEmbed />

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Welcome to Chalet La Forja
              </h2>

              <p>
                Justin&apos;s Whistler experience begins at{" "}
                <Link href={LISTING_HREF}>Chalet La Forja</Link>, located high
                above Creekside in Kadenwood.
              </p>

              <p>
                At more than 10,000 square feet, Chalet La Forja is one of the
                standout homes in the AceHost collection. The property
                accommodates up to 16 guests and features nine bedrooms, a heated
                outdoor pool, private hot tub, fitness gym, gourmet chef&apos;s
                kitchen, Sonos sound throughout the home and direct ski-in/ski-out
                access.
              </p>

              <ArticleImage
                src={PHOTOS.greatRoom}
                alt="Chalet La Forja great room and interior living space"
              />

              <p>
                The home also provides access to Kadenwood&apos;s private
                gondola, connecting the neighbourhood with Creekside below.
                Kadenwood itself sits above Whistler Creekside on Whistler
                Mountain, offering a combination of privacy, mountain access and
                proximity to the restaurants and amenities of Creekside Village.
              </p>

              <p>For guests staying at Chalet La Forja, the house is only the beginning.</p>

              <ArticleImage
                src={PHOTOS.poolHotTub}
                alt="Chalet La Forja heated outdoor pool and hot tub in winter"
              />

              <p>
                A private butler is included with each stay, along with
                complimentary housekeeping every other day. Our{" "}
                <Link href="/concierge-service">concierge team</Link> can also
                coordinate everything from private chefs and transportation to
                ski instructors, restaurant reservations, helicopter experiences
                and additional Whistler adventures.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                A Different Way to Experience Whistler
              </h2>

              <p>
                One of the things we loved about Justin&apos;s video is that it
                doesn&apos;t simply tour the home.
              </p>

              <p>It shows what happens once you step outside of it.</p>

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
                from the chalet tour into the road trip, mountain and dining
                experiences that made up the stay.
              </p>

              <p>For us, this is what makes Whistler special.</p>

              <p>
                You can ski all morning, return to an incredible private chalet
                in the afternoon, head out for an entirely different adventure
                and finish the evening around a beautiful dinner with friends or
                family.
              </p>

              <p>No two trips need to look the same.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Skiing Whistler Blackcomb
              </h2>

              <p>
                Of course, no winter visit to Whistler feels complete without
                time on the mountain.
              </p>

              <p>
                Chalet La Forja sits within Kadenwood, one of Whistler&apos;s
                premier ski-in/ski-out neighbourhoods. Guests can access
                Whistler Mountain directly from the neighbourhood and return home
                after skiing without needing to base their day around driving
                into the Village.
              </p>

              <ArticleImage
                src={PHOTOS.skiExterior}
                alt="Chalet La Forja ski-in ski-out exterior in Kadenwood snow"
              />

              <p>
                For guests unfamiliar with Whistler Blackcomb, our team can
                also help arrange private ski instructors, equipment rentals and
                other mountain logistics before arrival.
              </p>

              <p>
                We want guests to spend their vacation skiing, not figuring out
                where to pick up equipment or making calls trying to organize
                the next day.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Taking Whistler Beyond the Ski Hill
              </h2>

              <p>
                Whistler is obviously known around the world for skiing and
                snowboarding, but some of our favourite experiences have very
                little to do with the lifts.
              </p>

              <p>
                Justin&apos;s trip included ice fishing, followed later by a
                helicopter experience in the mountains.
              </p>

              <p>
                For guests looking to build a special itinerary, AceHost can help
                arrange a range of experiences depending on the season, weather
                and interests of the group.
              </p>

              <ArticleImage
                src={PHOTOS.mountainExterior}
                alt="Chalet La Forja mountain setting in Kadenwood, Whistler"
              />

              <p>
                That might include a helicopter experience, snowmobiling, a
                private chef at the chalet, restaurant reservations, private
                transportation, massages or other customized activities. Chalet
                La Forja bookings include AceHost&apos;s VIP concierge assistance
                to help coordinate experiences throughout the stay.
              </p>

              <p>
                For larger family trips especially, we find that the best
                itineraries usually have a balance.
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
                something we help guests with every day.
              </p>

              <p>
                Depending on what guests are looking for, we can help arrange
                restaurant reservations around Whistler and Creekside or
                organize private dining at the chalet.
              </p>

              <ArticleImage
                src={PHOTOS.kitchenDining}
                alt="Chalet La Forja gourmet kitchen and dining space"
              />

              <p>
                For a home like La Forja, having dinner prepared at the property
                can be every bit as memorable as going into town. The
                chalet&apos;s gourmet kitchen, large entertaining spaces and
                included butler service make staying home for the evening feel
                like an experience of its own.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                What an AceHost Stay Is Really About
              </h2>

              <p>
                Beautiful properties are at the centre of what we do, but AceHost
                has never been only about handing guests the keys to a house.
              </p>

              <p>
                For many of our guests, a trip to Whistler is a major family
                vacation, celebration or once-a-year ski trip. Some are
                travelling internationally. Others are bringing several
                generations of their family together under one roof.
              </p>

              <p>
                Our job is to make the rest of the trip as seamless as the
                accommodation.
              </p>

              <p>
                That can mean helping organize airport transportation before the
                group lands, having groceries waiting at the chalet, arranging
                ski equipment and instructors, securing difficult restaurant
                reservations or building several days of private experiences
                around the group.
              </p>

              <p>
                Justin&apos;s video gave us a chance to show that side of
                AceHost, and we couldn&apos;t have enjoyed putting the
                experience together more.
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
                spanning technology, lifestyle, automotive and travel, and his
                cinematic style made him a perfect fit for showcasing both
                Chalet La Forja and Whistler itself.
              </p>

              <p>
                It was a pleasure hosting the group, getting them into the
                mountains and showing them a few of the experiences we love
                sharing with our guests.
              </p>

              <p>We hope to have them back in Whistler again soon.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                More Kadenwood Properties to Book
              </h2>

              <p>
                Chalet La Forja is one of several exceptional ski-in/ski-out homes
                in{" "}
                <Link href={KADENWOOD_HREF}>Kadenwood</Link>. If you are planning
                a Whistler trip and exploring other large luxury chalets in the
                neighbourhood, these AceHost{" "}
                <Link href={PROPERTIES_HREF}>
                  luxury Whistler vacation rentals
                </Link>{" "}
                are also available to book directly on Airbnb or through our team.
              </p>

              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {OTHER_KADENWOOD_PROPERTIES.map((property) => (
                  <KadenwoodPropertyCard
                    key={property.listingHref}
                    property={property}
                  />
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Stay at Chalet La Forja
              </h2>

              <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <Link
                    href={LISTING_HREF}
                    className="hover:text-gray-700 transition-colors"
                  >
                    Chalet La Forja | Kadenwood, Whistler
                  </Link>
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                  <li>10,000+ SQ FT</li>
                  <li>16 Guests</li>
                  <li>9 Bedrooms</li>
                  <li>15 Beds</li>
                  <li>8 Bathrooms</li>
                  <li>Ski-in/Ski-out</li>
                  <li>Heated Outdoor Pool</li>
                  <li>Private Hot Tub</li>
                  <li>Fitness Gym</li>
                  <li>Private Kadenwood Gondola</li>
                  <li>Private Butler Included</li>
                  <li>Housekeeping Every Other Day</li>
                  <li>AceHost VIP Concierge</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Chalet La Forja was also recognized among Vrbo&apos;s Top 10
                  Vacation Rentals in 2023.
                </p>
              </div>

              <ArticleImage
                src={PHOTOS.ctaExterior}
                alt="Chalet La Forja dramatic exterior in Kadenwood, Whistler"
              />

              <p>
                Whether you&apos;re planning a family ski vacation, Christmas in
                Whistler, a special celebration or simply want to experience one
                of Whistler&apos;s most remarkable homes, our team would be
                happy to help put together the stay.
              </p>

              <p>
                Explore{" "}
                <Link href={LISTING_HREF}>Chalet La Forja</Link> and current
                availability through AceHost, browse our full collection of{" "}
                <Link href={PROPERTIES_HREF}>
                  luxury Whistler vacation rentals
                </Link>
                , or{" "}
                <Link href="/contact">contact our team directly</Link> to start
                planning your Whistler experience.
              </p>

              <div className="not-prose flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href={LISTING_HREF}
                  className="inline-block text-center bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  View Chalet La Forja
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
