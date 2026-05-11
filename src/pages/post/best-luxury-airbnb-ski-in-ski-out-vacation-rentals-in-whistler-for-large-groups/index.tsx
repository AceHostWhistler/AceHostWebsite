import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";

const SLUG = "best-luxury-airbnb-ski-in-ski-out-vacation-rentals-in-whistler-for-large-groups";
const HERO = "/photos/properties/Two Cedars New/OSA_AncientCW1002 Panorama.jpg";
const HERO_URL = "https://acehost.ca" + HERO;
const PUBLISH_DATE = "April 23, 2026";
const ISO_MOD = "2026-04-23T12:00:00-07:00";

const META = {
  title: "Best Luxury Airbnb Ski-in-Ski-out Vacation Rentals in Whistler for Large Groups | AceHost",
  description:
    "Looking for the best luxury Airbnb ski in ski out vacation rentals in Whistler for a large group? Explore spacious Whistler homes with hot tubs, big kitchens, ski access, and concierge services from AceHost.",
};

// Airbnb links from each property listing (live listing pages) — Altitude: contact (per request)
const AIRBNB = {
  twoCedars:
    "https://www.airbnb.ca/rooms/666613336620375768?guests=1&adults=1&s=67&unique_share_id=0d8a1725-cb02-487a-a033-7cc2940692e4",
  laForja:
    "https://www.airbnb.ca/rooms/52655503?guests=1&adults=1&s=67&unique_share_id=f1bb5c2c-51f9-4a82-9aa4-670fb8caa71d",
  mountaintop:
    "https://www.airbnb.ca/rooms/1599369454342102375?guests=1&adults=1&s=67&unique_share_id=07a4f082-1dec-4a06-bf97-05638b3b71ef",
  panoramic:
    "https://www.airbnb.ca/rooms/1104637821836596397?guests=1&adults=1&s=67&unique_share_id=67164555-993c-40dc-b188-23ffe0755654",
  slopeSide:
    "https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0",
  heron:
    "https://www.airbnb.ca/rooms/1168163637007998550?guests=1&adults=1&s=67&unique_share_id=8227e964-920d-4bc0-8073-13043963151f",
  falcon:
    "https://www.airbnb.ca/rooms/18060329?preview_for_ml=true&source_impression_id=p3_1684112119_tL0LL7QnYLFGOCBI",
  luxury6:
    "https://www.airbnb.ca/rooms/1551638001847968788?guests=1&adults=1&s=67&unique_share_id=ff68258e-d89f-4493-8e79-fd85820e6872",
};

function CtaBlock({
  listingHref,
  airbnbHref,
  airbnbLabel = "View on Airbnb",
}: {
  listingHref: string;
  airbnbHref: string;
  airbnbLabel?: string;
}) {
  const isInternal = airbnbHref.startsWith("/");
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 my-6">
      <Link
        href={listingHref}
        className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow-md font-medium"
      >
        View property
      </Link>
      {isInternal ? (
        <Link
          href={airbnbHref}
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all font-medium"
        >
          {airbnbLabel}
        </Link>
      ) : (
        <a
          href={airbnbHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all font-medium"
        >
          {airbnbLabel}
        </a>
      )}
    </div>
  );
}

export default function BlogPost() {
  const currentArticleLink = "/post/" + SLUG;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: META.title,
    image: HERO_URL,
    datePublished: ISO_MOD,
    dateModified: ISO_MOD,
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
        <link rel="canonical" href={"https://acehost.ca/" + "post/" + SLUG} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={HERO_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={HERO_URL} />
        <meta
          name="keywords"
          content="Whistler large group rental, luxury Airbnb Whistler, ski in ski out Whistler, Kadenwood chalet, Whistler family vacation, AceHost, Whistler hot tub, Whistler Blueberry, Whistler Village chalet, group trip Whistler"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Best Luxury Airbnb Ski in Ski out Vacation Rentals in Whistler for
                Large Groups | AceHost
              </h1>
              <div className="flex items-center text-sm text-gray-600 mb-8 flex-wrap gap-2">
                <span>Published: {PUBLISH_DATE}</span>
                <span className="hidden sm:inline">|</span>
                <span>16 min read</span>
              </div>
              <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={HERO}
                  alt="Luxury ski-in ski-out vacation home in Whistler, Kadenwood"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-800 leading-relaxed">
                Planning a Whistler trip with a big family, multiple couples, grandparents, kids, or
                family friends? Then booking the right home matters a lot.
              </p>
              <p>
                The best luxury Airbnb ski in ski out vacation rentals in Whistler for large groups
                give you what hotels cannot: more space, more privacy, better kitchens, proper
                living rooms, hot tubs, and room for everyone to actually enjoy being together.
                Instead of splitting up across hotel rooms, everyone gets to stay under one roof
                while still having enough space to spread out.
              </p>
              <p>
                For families searching Airbnb for Whistler homes, the goal is usually the same: find
                a beautiful home that feels special, sleeps everyone comfortably, and makes the
                trip easy. That is exactly where AceHost comes in. We offer some of
                Whistler&rsquo;s best large luxury vacation rentals, from ski in ski out estates in
                Kadenwood to spacious family chalets near Whistler Village and Blueberry.
              </p>
              <p>
                Below are some of the best luxury Airbnb ski in ski out vacation rentals in Whistler
                for large groups, especially if you want big kitchens, hot tubs, multiple bedrooms,
                and concierge help to make the trip smooth from start to finish.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Why large groups love booking a luxury Airbnb in Whistler
              </h2>
              <p>
                When you are travelling with a bigger group, Airbnb-style vacation rentals just
                make more sense. Everyone can eat breakfast together, come home for lunch, relax in
                the hot tub after skiing, and hang out by the fire at night without needing to meet
                up across multiple hotel rooms.
              </p>
              <p>
                For families, it is also way easier. Parents get kitchens and laundry, grandparents
                get more comfort and privacy, kids get more room, and the whole trip feels more
                relaxed. Add in concierge help for groceries, ski rentals, private chefs,
                transport, and activity planning, and it becomes a much better experience than trying
                to organize everything on your own.
              </p>

              {/* 1 Two Cedars */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                1. Two Cedars | Kadenwood | Private Butler
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Two Cedars New/OSA_AncientCW1002 Panorama.jpg"
                    alt="Two Cedars Kadenwood exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Two Cedars New/24-2934 Ancient Cedars-24.jpg"
                    alt="Two Cedars living area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Two Cedars New/14-2934 Ancient Cedars-14.jpg"
                    alt="Two Cedars hot tub and deck"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Two Cedars New/05-2934 Ancient Cedars-05.jpg"
                    alt="Two Cedars dining and gathering space"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p>
                If you want a true wow-factor Whistler family Airbnb, Two Cedars is one of the best.
                It sleeps up to 17 guests with 7 bedrooms, 12 beds, and 8.5 bathrooms, so there is
                loads of room for big families or multi-family trips.
              </p>
              <p>
                The best part is that it is not just big&mdash;it is fun. Hot tub, sauna, gym, theatre, ski
                in ski out access, and private butler service: this one feels like the kind of home
                that turns a family vacation into a big event.
              </p>
              <p>
                <strong>Why families love it:</strong> tons of space, luxury service, and plenty to
                do even when you are not skiing.
              </p>
              <CtaBlock
                listingHref="/listings/two-cedars-kadenwood"
                airbnbHref={AIRBNB.twoCedars}
              />

              {/* 2 Chalet La Forja */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                2. Chalet La Forja | Kadenwood | Private Butler
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Chalet La Forja/hero00001.jpg"
                    alt="Chalet La Forja exterior Kadenwood"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Chalet La Forja/Forja-3 copy.jpg"
                    alt="Chalet La Forja pool and hot tub"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Chalet La Forja/02-2950 Heritage Peaks Trail-02.jpg"
                    alt="Chalet La Forja kitchen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Chalet La Forja/04-2950 Heritage Peaks Trail-04.jpg"
                    alt="Chalet La Forja living space"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p>
                Chalet La Forja is for families who want to go big. It sleeps 16+ guests, with
                9 bedrooms, 15 beds, and 8 bathrooms, which makes it a great fit for larger family
                groups with lots of kids, cousins, or multiple couples.
              </p>
              <p>
                With over-the-top luxury touches like a heated pool, hot tub, sauna, gym, gourmet
                kitchen, and butler service, this is the kind of Airbnb in Whistler that makes
                staying in almost as fun as going out.
              </p>
              <p>
                <strong>Why families love it:</strong> huge sleeping capacity, fun amenities, and a
                very impressive setup for group trips.
              </p>
              <CtaBlock
                listingHref="/listings/chalet-la-forja-kadenwood"
                airbnbHref={AIRBNB.laForja}
              />

              {/* 3 Altitude — Airbnb → Contact */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                3. Altitude Retreat | Kadenwood | Private Butler
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Altitude New Photos Best/1.jpg"
                    alt="Altitude Retreat Kadenwood exterior and setting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Altitude New Photos Best/12.jpg"
                    alt="Altitude Retreat great room"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Altitude New Photos Best/2.jpg"
                    alt="Altitude Retreat hot tub and deck"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Altitude New Photos Best/3.jpg"
                    alt="Altitude Retreat kitchen and dining"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p>
                Altitude Retreat is a great pick for families who want a big luxury home that still
                feels warm and comfortable. It sleeps up to 18 guests with 7 bedrooms, 9 beds, and
                5.5 bathrooms.
              </p>
              <p>
                This home has that classic luxury Whistler feel: lots of room, a premium setting, and
                a layout that works well for longer stays. Add the gym, hot tub, and private
                butler, and it is easy to see why larger groups would love it.
              </p>
              <p>
                <strong>Why families love it:</strong> big guest capacity, lots of privacy, and a
                polished mountain-home feel.
              </p>
              <CtaBlock
                listingHref="/listings/altitude-retreat-kadenwood"
                airbnbHref="/contact"
                airbnbLabel="Contact us"
              />

              {/* 4 Mountaintop */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                4. The Mountaintop at Kadenwood | Ski in Ski out
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/2919 Heritage/01 - 20260301 MM4P 01 DJI_20260301111158_0401_D-Edit-Edit-AI Generative Fill.jpg"
                    alt="The Mountaintop at Kadenwood exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/2919 Heritage/05 - 20260301 A7M4 01 A1_01862-Edit.jpg"
                    alt="Ski access at Mountaintop Kadenwood"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/2919 Heritage/04 - 20260301 MM4P 01 DJI_20260301181237_0791_D-Edit-AI Generative Fill.jpg"
                    alt="Mountaintop living and mountain views"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/2919 Heritage/03 - 20260301 MM4P 01 DJI_20260301181209_0786_D.jpg"
                    alt="Mountaintop outdoor deck and hot tub area"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p>
                If your group&rsquo;s dream Whistler trip is all about skiing, this one is a strong
                contender. The Mountaintop at Kadenwood sleeps up to 16 guests with 7 bedrooms and
                7.5 bathrooms.
              </p>
              <p>
                For bigger families, ski in ski out access makes a huge difference. No messy morning
                logistics, no separating the group, no trying to coordinate everyone from hotel
                rooms. Just wake up, get ready, and get out on the mountain.
              </p>
              <p>
                <strong>Why families love it:</strong> amazing ski access, lots of room, and a very
                easy setup for group ski trips.
              </p>
              <CtaBlock
                listingHref="/listings/luxury-ski-in-ski-out-7-bedroom-kadenwood"
                airbnbHref={AIRBNB.mountaintop}
              />

              {/* 5 Panoramic */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                5. Panoramic Estate | Kadenwood
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Panoramic Estate/Panoramic Estate.jpg"
                    alt="Panoramic Estate Kadenwood"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Panoramic Estate/01-2923 Ancient Cedars-01.jpg"
                    alt="Whistler valley view from Panoramic Estate"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Panoramic Estate/02-2923 Ancient Cedars-02.jpg"
                    alt="Panoramic Estate dining area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Panoramic Estate/12-2923 Ancient Cedars-12.jpg"
                    alt="Panoramic Estate family room"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p>
                Panoramic Estate is a fantastic option for families who want a large Whistler
                Airbnb with lots of flexibility. It sleeps up to 17 guests with 8 bedrooms, 10 beds,
                and 7 bathrooms.
              </p>
              <p>
                That extra bedroom count is a big win for large groups. It gives you more options
                for grandparents, kids, couples, and anyone who just wants their own space. It is
                luxurious, spacious, and ideal for a big family getaway.
              </p>
              <p>
                <strong>Why families love it:</strong> 8 bedrooms, lots of breathing room, and a
                beautiful setting in Kadenwood.
              </p>
              <CtaBlock
                listingHref="/listings/panoramic-estate-kadenwood"
                airbnbHref={AIRBNB.panoramic}
              />

              {/* 6 Slope Side */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                6. Slope Side Chalet | Kadenwood
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Slopeside Kadenwood/01-2945 Kadenwood Dr 01.jpg"
                    alt="Slope Side Chalet Kadenwood"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Slopeside Kadenwood/13-2945 Kadenwood Dr 13.jpg"
                    alt="Slope Side Chalet hot tub"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Slopeside Kadenwood/10-2945 Kadenwood Dr 10.jpg"
                    alt="Slope Side Chalet fitness area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Slopeside Kadenwood/08-2945 Kadenwood Dr 08.jpg"
                    alt="Slope Side Chalet main living room"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p>
                Slope Side Chalet is a really fun family option, especially for ski trips. It sleeps
                up to 16 guests with 7 bedrooms, 12 beds, and 7.5 bathrooms.
              </p>
              <p>
                It is ski in ski out, pet-friendly, and has the kind of setup that works well for
                active groups: hot tub, gym, steam shower, and lots of room to gather after a day on
                the mountain.
              </p>
              <p>
                <strong>Why families love it:</strong> ski convenience, lots of beds, pet-friendly,
                and very group-friendly overall.
              </p>
              <CtaBlock
                listingHref="/listings/slopeside-villa-kadenwood"
                airbnbHref={AIRBNB.slopeSide}
              />

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Better-priced large-group alternatives near the village
              </h2>
              <p>
                Though not ski in ski out, we have some better priced alternatives that are very
                popular among larger groups in Whistler. They are in the Blueberry area and Whistler
                Village corridor, which keeps you close to the main Whistler Village experience.
              </p>

              {/* 7 Heron */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                7. Heron Views | Whistler Village
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05831-Edit.jpg"
                    alt="Heron Views chalet exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05891.jpg"
                    alt="Mountain view from Heron Views"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/3445-Heron-Place/68-3445 Heron Place 53-Edit.jpg"
                    alt="Heron Views living room"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/3445-Heron-Place/66-3445 Heron Place 51-Edit.jpg"
                    alt="Heron Views outdoor deck"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p>
                Heron Views is a great choice for families who want to stay close to Whistler
                Village while still having the feel of a private chalet. It sleeps up to 11 guests
                with 5 bedrooms and 6 bathrooms.
              </p>
              <p>
                This one is a bit smaller than some of the giant Kadenwood homes, but that can
                actually be perfect for one large family or a slightly smaller multi-generational
                group. It has a cozy luxury feel, great views, and easy access to the village.
              </p>
              <p>
                <strong>Why families love it:</strong> close to the village, classic chalet charm,
                and ideal for medium-to-large family groups.
              </p>
              <CtaBlock
                listingHref="/listings/heron-views-whistler-village"
                airbnbHref={AIRBNB.heron}
              />

              {/* 8 Falcon */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                8. Falcon | Blueberry Drive
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Falcon/03 - 20250827 A7M4 01 DSC00224-Edit.jpg"
                    alt="Falcon Blueberry Drive exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Falcon/17 - 20250827 A7M4 01 DSC00355.jpg"
                    alt="Falcon living room with fireplace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Falcon/27 - 20250827 A7M4 01 DSC00378.jpg"
                    alt="Falcon deck and BBQ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Falcon/Falcon Cres-2.jpg"
                    alt="Falcon hot tub"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p>
                Falcon is one of those homes that feels made for family trips. It sleeps up to 15
                guests with 7 bedrooms, 9 beds, and 3.5 bathrooms, giving you lots of room without
                feeling over-the-top.
              </p>
              <p>
                It has a wood-burning fireplace, spacious deck, BBQ, hot tub, and that classic
                Whistler chalet atmosphere people love when booking a vacation rental on Airbnb.
                Blueberry is also a great location if you want something peaceful but still close to
                the village.
              </p>
              <p>
                <strong>Why families love it:</strong> strong value for larger groups, cozy
                chalet feel, and lots of room to gather.
              </p>
              <CtaBlock
                listingHref="/listings/falcon-blueberry-drive"
                airbnbHref={AIRBNB.falcon}
              />

              {/* 9 Luxury 6 bed */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                9. Luxury 6-Bedroom | Whistler Village | Blueberry
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/02 - 20251108 MM4P 01 0056.jpg"
                    alt="Luxury 6-bedroom Blueberry home exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/03 - 20251108 A7M4 02 A1_07764.jpg"
                    alt="Luxury 6-bedroom kitchen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/11 - 20251108 A7M4 02 A1_07858.jpg"
                    alt="Luxury 6-bedroom suite"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/15 - 20251108 MM4P 01 0011.jpg"
                    alt="Luxury 6-bedroom common and outdoor area"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p>
                This is another really solid choice for large groups who want a spacious Whistler
                Airbnb without jumping into the very biggest estate category. It sleeps up to 15
                guests with 6 bedrooms, 10 beds, and 3 bathrooms.
              </p>
              <p>
                It is practical, comfortable, and easy for family trips. Six bedrooms give everyone
                more privacy, and the larger bed count makes it flexible for kids, teens, and mixed
                family groups.
              </p>
              <p>
                <strong>Why families love it:</strong> 6-bedroom layout, good sleeping flexibility,
                and a great fit for larger family vacations.
              </p>
              <CtaBlock
                listingHref="/listings/luxury-6-bedroom-whistler-village-blueberry"
                airbnbHref={AIRBNB.luxury6}
              />

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                What to look for in a large group Airbnb in Whistler
              </h2>
              <p>Not all big homes are created equal. If you are booking a luxury family vacation rental in Whistler, here are a few things that really matter:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>
                  <strong>Enough bedrooms and bathrooms.</strong> A high guest count is great, but
                  bedroom and bathroom count matter just as much. Large families need space to
                  spread out.
                </li>
                <li>
                  <strong>Big kitchen and dining area.</strong> This is one of the biggest
                  advantages of booking an Airbnb over a hotel. Shared breakfasts, snacks, and
                  family dinners are a huge part of the trip.
                </li>
                <li>
                  <strong>Hot tub and hangout space.</strong> After skiing or exploring Whistler,
                  everyone wants somewhere to relax. Hot tubs, fireplaces, media rooms, and big
                  living rooms make the trip more fun.
                </li>
                <li>
                  <strong>Great location.</strong> Some groups want ski in ski out. Others want to
                  be near Whistler Village. Picking the right area can shape the whole trip.
                </li>
                <li>
                  <strong>Concierge help.</strong> This is where a luxury vacation rental really
                  shines. Grocery stocking, private chefs, transport, ski rentals, and restaurant
                  bookings can make the trip way easier.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why book with AceHost</h2>
              <p>
                AceHost offers more than just great homes. We help families book the right
                Airbnb-style vacation rental in Whistler based on group size, trip style, and what
                kind of experience you want.
              </p>
              <p>
                Some groups want the full Kadenwood luxury experience. Some want to stay near the
                village. Some want private chefs, grocery stocking, and transportation arranged
                before they arrive. Some just want an amazing family home with a hot tub and lots of
                room. We can help with all of it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Final thoughts</h2>
              <p>
                If you are planning a Whistler trip with a big family or large group, booking the
                right home can make the whole vacation better. The best luxury Airbnb ski in ski
                out vacation rentals in Whistler are the ones that give you enough space, a fun
                setup, and the comfort of being together in one beautiful home.
              </p>
              <p>
                From Kadenwood estates to spacious Blueberry chalets, AceHost has some of
                Whistler&rsquo;s best large-group vacation rentals for families who want more than a
                standard hotel stay.
              </p>
              <p>
                Planning a Whistler family getaway?{" "}
                <Link href="/contact" className="text-gray-900 font-semibold underline">
                  Contact AceHost
                </Link>{" "}
                to find the best home for your group.
              </p>

              <div className="not-prose flex flex-col sm:flex-row flex-wrap gap-3 my-10">
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium"
                >
                  View luxury rentals
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 font-medium"
                >
                  Inquire about your dates
                </Link>
              </div>
            </div>
          </div>
        </main>

        <BlogRelatedArticles currentArticleLink={currentArticleLink} count={3} />
        <Footer />
      </div>
    </>
  );
}
