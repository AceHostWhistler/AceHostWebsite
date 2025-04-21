import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";

const LuxuryChristmasRentals = () => {
  const currentArticleLink = "/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years";

  // Structured Data for Article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Top 7 of the Most Luxury Vacation Rental Homes in Whistler for Christmas and New Year's",
    "image": "https://acehost.ca/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/Hero.png",
    "datePublished": "2024-11-24T08:00:00+00:00",
    "dateModified": "2024-11-24T08:00:00+00:00", 
    "author": {
      "@type": "Organization",
      "name": "AceHost Whistler",
      "url": "https://acehost.ca"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AceHost Whistler",
      "logo": {
        "@type": "ImageObject",
        "url": "https://acehost.ca/logo.png"
      }
    },
    "description": "Discover Whistler's most luxurious vacation rental homes for your Christmas and New Year's escape. From ski-in/ski-out chalets to stunning mountain retreats, find the perfect property for an unforgettable holiday."
  };

  // Related articles
  const relatedArticles = [
    {
      title:
        "Whistler Snow Report: Record Snowfall Marks the Start of the 2024/2025 Ski Season",
      category: "Whistler Snow/Weather Report",
      description: "Whistler Snow & Weather Report 2024/2025 Opening Day",
      readTime: "11 minute read",
      link: "/post/whistler-snow-report-record-snowfall-marks-the-start-of-the-2024-2025-ski-season",
    },
    {
      title:
        "Luxury Whistler Vacation Redefined: How AceHost Whistler Caters to the 1% in Canada's Ultimate Playground",
      category: "VIP Concierge | Luxury Vacation",
      description: "",
      readTime: "20 min",
      link: "/post/luxury-whistler-vacation-redefined-how-acehost-whistler-caters-to-the-1-in-canadas-ultimate-playground",
    },
    {
      title: "Find Your Dream Long-Term Luxury Rental in Whistler with AceHost",
      category: "Long-term, Property",
      description: "Luxury long-term home rental options",
      readTime: "10 min read",
      link: "/post/find-your-dream-long-term-luxury-rental-in-whistler-with-acehost",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Top 7 of the Most Luxury Vacation Rental Homes in Whistler | Christmas
          and New Year's | AceHost
        </title>
        <meta
          name="description"
          content="Discover Whistler's most luxurious vacation rental homes for your Christmas and New Year's escape. From ski-in/ski-out chalets to stunning mountain retreats, find the perfect property for an unforgettable holiday."
        />
        <meta property="og:title" content="Top 7 Luxury Vacation Rental Homes in Whistler for Christmas and New Year's | AceHost" />
        <meta property="og:description" content="Discover Whistler's most luxurious vacation rental homes for your Christmas and New Year's escape. From ski-in/ski-out chalets to stunning mountain retreats, find the perfect property." />
        <meta property="og:image" content="https://acehost.ca/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/Hero.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 7 Luxury Vacation Rental Homes in Whistler for Christmas and New Year's | AceHost" />
        <meta name="twitter:description" content="Discover Whistler's most luxurious vacation rental homes for your Christmas and New Year's escape." />
        <meta name="twitter:image" content="https://acehost.ca/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/Hero.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-20">
          {/* Blog Header */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Travel Christmas
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                15 min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Top 7 of the Most Luxury Vacation Rental Homes in Whistler |
              Christmas and New Year's
            </h1>

            <div className="flex items-center text-gray-600 text-sm mb-8">
              <span>Published on</span>
              <span className="ml-1 font-medium">November 24, 2024</span>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-10">
              <h2 className="text-xl font-semibold mb-3">Summary</h2>
              <p className="text-gray-700">
                Whistler is renowned for its world-class skiing, stunning
                landscapes, and vibrant village, making it the perfect
                destination for a luxurious Christmas and New Year's
                getaway for the family.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto mb-16 px-4 sm:px-6">
            <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/Hero.png"
                alt="Luxury vacation rental home in Whistler for Christmas and New Year"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <article className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-10">
                For those seeking the ultimate in comfort and style, AceHost
                offers an exceptional selection of high-end vacation rental
                homes that promise an unforgettable holiday experience. From
                lavish chalets to exclusive villas, these properties provide the
                perfect setting for creating cherished memories with family and
                friends. Below are AceHost's top 7 most luxurious homes to
                consider for your winter escape:
              </p>

              {/* Property 1 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1) Panoramic Estate</h2>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Property Details</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><strong>Ski-in/Ski-out access</strong></li>
                      <li><strong>Sleeps 18</strong></li>
                      <li><strong>8 Bedrooms</strong></li>
                      <li><strong>10 Beds</strong></li>
                      <li><strong>7 Baths</strong></li>
                      <li><strong>XL Hot Tub</strong></li>
                      <li><strong>Infrared Sauna</strong></li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Price Information</p>
                    <p className="mt-2 text-gray-700">
                      <strong>Price per night:</strong> $9,000-$11,000<br/>
                      <strong>Christmas & New Years:</strong> $16,000+<br/>
                      <strong>Minimum Stay:</strong> 4-7 nights
                    </p>
                  </div>
                </div>

                <div className="my-6 relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/1.png"
                    alt="Kadenwood Estate with Hot Tub"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Panoramic Estate is an exceptional property that lives up to its
                    name, offering stunning 360-degree views of Whistler's
                    iconic mountains. This magnificent home features expansive
                    living spaces, high ceilings, and floor-to-ceiling windows that
                    frame the surrounding landscape. Welcome to this ski in ski out
                    architectural delight! With 8 bedrooms, 10 beds, and 7 baths,
                    accommodating up to 18 guests, it offers panoramic mountain
                    views, an open-plan kitchen, multiple indoor fireplaces, a ping
                    pong table, a sleek hot tub, an indoor sauna, basement media
                    room, and built-in sound system.
                  </p>

                  <p>
                    Enjoy private elevator access to all levels. Enjoy spacious
                    outdoor decks and luxurious amenities for the perfect mountain
                    retreat!
                  </p>

                  <p>
                    Nestled high on the mountainside within the prestigious and
                    secluded Kadenwood community, this property offers exclusive
                    access to the private Kadenwood gondola.
                  </p>
                </div>

                <div className="mt-6">
                  <Link 
                    href="/listings/panoramic-estate-kadenwood" 
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Property Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Property 2 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2) Two Cedars | Kadenwood | Private Butler & cleaning every
                  other day included
                </h2>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Property Details</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><strong>10,000+ SQ FT</strong></li>
                      <li><strong>Ski-in/Ski-out access</strong></li>
                      <li><strong>Sleeps 17</strong></li>
                      <li><strong>7 Bedrooms</strong></li>
                      <li><strong>12 Beds</strong></li>
                      <li><strong>8.5 Baths</strong></li>
                      <li><strong>Hot Tub</strong></li>
                      <li><strong>Infrared Sauna</strong></li>
                      <li><strong>Gym</strong></li>
                      <li><strong>Movie Theatre</strong></li>
                      <li><strong>Private butler included</strong></li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Price Information</p>
                    <p className="mt-2 text-gray-700">
                      <strong>Price per night:</strong> $7,000-$10,000<br/>
                      <strong>Christmas & New Years:</strong> $21,000+<br/>
                      <strong>Minimum Stay:</strong> 4-7 nights
                    </p>
                  </div>
                </div>

                <div className="my-6 relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/2.png"
                    alt="Luxury Whistler Estate"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Welcome to Two Cedars. Designed by the architects at OpenSpace,
                    this state-of-the-art property welcomes 17 guests to the
                    prestigious Kadenwood neighborhood in Whistler. For ski
                    enthusiasts, Two Cedars in the exclusive Kadenwood neighborhood
                    is the ultimate ski-in/ski-out chalet. This luxurious home
                    offers direct access to some of Whistler's best slopes,
                    making it perfect for those who want to maximize their time on
                    the mountain. The property features five beautifully appointed
                    bedrooms, a state-of-the-art media room, and a private hot tub
                    with stunning mountain views. After a day of skiing, relax by
                    the grand stone fireplace or enjoy a gourmet meal in the
                    fully-equipped kitchen.
                  </p>

                  <p>
                    This luxury property features ski-in ski-out access and quick
                    access to the private Kadenwood Gondola offering service to the
                    base of Creekside Village.
                  </p>

                  <p>
                    <strong>
                      Private Butler (This home includes a private butler):
                    </strong>{" "}
                    In addition to serving breakfast, lunch, and dinner, the butler
                    is responsible for all food and drink service throughout the
                    day, as well as dining table set up/takedown, and cleanup around
                    the kitchen areas. To create the perfect ambiance, they will set
                    up the hot tub, light the fire, and adjust the music and
                    household functions. Get your daily dose of caffeine from your
                    own personal barista. Overall, the butler is there to make your
                    stay as smooth and comfortable as possible.
                  </p>

                  <p>
                    Two Cedars has 7 bedrooms, each with a private en suite
                    bathroom. With 12 beds in total, this home offers the perfect
                    stay for a large group of family or friends, combining an
                    open-plan living space with bedroom privacy. Amenities at Two
                    Cedars include a large home theatre, a fully-equipped gym, an
                    outdoor & indoor hot tub, an infrared sauna, and foosball table.
                  </p>
                </div>

                <div className="mt-6">
                  <Link 
                    href="/listings/two-cedars-kadenwood" 
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Property Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Property 3 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3) Altitude Retreat | Kadenwood | Private Butler included</h2>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Property Details</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><strong>10,000+ SQ FT</strong></li>
                      <li><strong>Ski-in/Ski-out access</strong></li>
                      <li><strong>Sleeps 18</strong></li>
                      <li><strong>7 Bedrooms</strong></li>
                      <li><strong>9 Beds</strong></li>
                      <li><strong>5.5 Baths</strong></li>
                      <li><strong>Hot Tub</strong></li>
                      <li><strong>Gym</strong></li>
                      <li><strong>Private butler included</strong></li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Price Information</p>
                    <p className="mt-2 text-gray-700">
                      <strong>Price per night:</strong> $6,500-$10,000<br/>
                      <strong>Christmas & New Years:</strong> $21,000+<br/>
                      <strong>Minimum Stay:</strong> 4-7 nights
                    </p>
                  </div>
                </div>

                <div className="my-6 relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/3.png"
                    alt="Pinnacle Ridge Chalet"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Discover the epitome of luxury at Altitude Retreat, nestled in
                    Whistler's most prestigious ski-in, ski-out neighbourhood,
                    Kadenwood. Set in close proximity to the Private Kadenwood
                    gondola, this 8 bedroom property offers an unrivalled location
                    for your Whistler vacation.
                  </p>

                  <p>
                    This well-equipped property features everything you need for an
                    indulgent stay. Enjoy a workout in the full-spec gym then take a
                    dip in the hot tub and/or sauna.
                  </p>

                  <p>
                    Secluded by trees and nature, it doesn't get more private
                    than this! The open-concept living and dining areas are ideal
                    for entertaining, while the master suite offers a spa-like
                    experience with its luxurious en-suite bathtub with a view of
                    the surrounding mountains and forest. Altitude Retreat provides
                    the perfect backdrop for an elegant holiday celebration.
                  </p>
                </div>

                <div className="mt-6">
                  <Link 
                    href="/listings/altitude-retreat-kadenwood" 
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Property Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Properties 4-7 with similar structure */}
              <div className="bg-gray-50 p-6 rounded-lg mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4) Chalet La Forja | Kadenwood | Private Butler & cleaning every other day included</h2>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Property Details</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><strong>10,000+ SQ FT</strong></li>
                      <li><strong>Ski-in/Ski-out access</strong></li>
                      <li><strong>Sleeps 16</strong></li>
                      <li><strong>7.5 Bedrooms</strong></li>
                      <li><strong>14 Beds</strong></li>
                      <li><strong>8 Bathrooms</strong></li>
                      <li><strong>Hot Tub</strong></li>
                      <li><strong>Pool</strong></li>
                      <li><strong>Gym</strong></li>
                      <li><strong>Private butler included + Cleaning every other day</strong></li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Price Information</p>
                    <p className="mt-2 text-gray-700">
                      <strong>Price per night:</strong> $7,000-$11,000<br/>
                      <strong>Christmas & New Years:</strong> $17,000-$22,000+<br/>
                      <strong>Minimum Stay:</strong> 4-7 nights
                    </p>
                  </div>
                </div>

                <div className="my-6 relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/4.png"
                    alt="Luxury Forest Lodge"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Welcome to Chalet La Forja in Kadenwood. This 10,000+ square
                    foot luxurious Ski in Ski out home amongst the locals is
                    considered one of, if not the most prestigious luxury rental in
                    all of Whistler. This ski-in/ski-out property located in the
                    Kadenwood neighbourhood features 7.5 beautifully designed
                    bedrooms, a spacious living area with a grand fireplace, and a
                    fully-equipped gourmet kitchen.
                  </p>

                  <p>
                    This luxurious home includes a gourmet chef kitchen with a
                    butler pantry, two private offices, state-of-the-art electronics
                    with built-in Sonos speaker systems in every room, gym, hot tub,
                    heated pool, sauna, private gondola, and access to and from the
                    ski-hill from your front door.
                  </p>
                </div>

                <div className="mt-6">
                  <Link 
                    href="/listings/chalet-la-forja-kadenwood" 
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Property Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5) Slope Side Chalet | Kadenwood</h2>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Property Details</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><strong>Price per night:</strong> $2,000-$6,000</li>
                      <li><strong>Christmas & New Years:</strong> $8,500+</li>
                      <li><strong>Minimum Stay:</strong> 7 nights</li>
                      <li><strong>5025+ SQ FT</strong></li>
                      <li><strong>Ski-in/Ski-out access</strong></li>
                      <li><strong>Sleeps 16</strong></li>
                      <li><strong>7 Bedrooms</strong></li>
                      <li><strong>12 Beds</strong></li>
                      <li><strong>8 Baths</strong></li>
                      <li><strong>Hot Tub</strong></li>
                      <li><strong>Gym</strong></li>
                      <li><strong>Steam Shower</strong></li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="mt-2 text-gray-700">
                      <strong>Slope Side</strong> |{" "}
                      <strong>Kadenwood</strong>
                    </p>
                  </div>
                </div>

                <div className="my-6 relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/5.png"
                    alt="Whistler Peak View Suite"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    SlopeSide is another luxurious gem located in the exclusive
                    Kadenwood neighborhood. This ski-in/ski-out chalet offers
                    unparalleled convenience for winter sports enthusiasts as the
                    property lies directly on the ski slopes. Ski to and from your
                    front door. With 7.5 bedrooms, a sleek modern design, and large
                    windows that offer breathtaking views, SlopeSide is the epitome
                    of luxury living. The property features a private hot tub, a
                    cozy fireplace, a brand new TV in the living room, and a gourmet
                    kitchen, making it the perfect setting for a festive gathering
                    with family and friends.
                  </p>
                </div>

                <div className="mt-6">
                  <Link 
                    href="/listings/slopeside-villa-kadenwood" 
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Property Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6) Heron Views | Whistler Village</h2>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Property Details</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><strong>4000 + SQ FT</strong></li>
                      <li><strong>Sleeps 11</strong></li>
                      <li><strong>5 bedrooms</strong></li>
                      <li><strong>6 beds</strong></li>
                      <li><strong>5.5baths</strong></li>
                      <li><strong>Hot tub</strong></li>
                      <li><strong>BBQ</strong></li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Price Information</p>
                    <p className="mt-2 text-gray-700">
                      <strong>Christmas/NY price per night:</strong> $7,000+ | 6/7 night
                      minimum, 3 Winter minimum
                    </p>
                  </div>
                </div>

                <div className="my-6 relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05891.jpg"
                    alt="Modern Alpine Residence"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Heron Views is a luxurious retreat perched above Whistler
                    Village, offering stunning views and easy access to both the
                    slopes and the vibrant village atmosphere. This 5-bedroom home
                    features elegant interiors, a private hot tub, and a spacious
                    deck where you can soak in the panoramic views. The open-concept
                    living area with its cozy fireplace is ideal for holiday
                    gatherings, while the fully-equipped kitchen makes entertaining
                    a breeze. With its prime location and luxurious amenities, Heron
                    Views is an excellent choice for a holiday getaway.
                  </p>
                </div>

                <div className="mt-6">
                  <Link 
                    href="/listings/heron-views-whistler-village" 
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Property Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7) Falcon | Blueberry Neighbourhood</h2>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Property Details</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><strong>3000 + SQ FT</strong></li>
                      <li><strong>Sleeps 15</strong></li>
                      <li><strong>7 bedrooms</strong></li>
                      <li><strong>13 beds</strong></li>
                      <li><strong>3.5 baths</strong></li>
                      <li><strong>Hot tub</strong></li>
                      <li><strong>BBQ</strong></li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">Price Information</p>
                    <p className="mt-2 text-gray-700">
                      <strong>Christmas/NY price per night:</strong> $7,000+ | 6/7 night
                      minimum Festive, 2-3 Winter minimum
                    </p>
                  </div>
                </div>

                <div className="my-6 relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/photos/properties/Falcon/15-3595 Falcon Cres-15-.jpg"
                    alt="Luxury Ski Chalet"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Located in Whistler's prestigious Blueberry neighborhood,
                    minutes from the village, Falcon is a masterpiece of modern
                    alpine design. This stunning property offers 7-bedrooms, an
                    open-concept living area, and floor-to-ceiling windows that
                    provide breathtaking views of Whistler and Blackcomb mountains.
                    With a private hot tub, a spacious gourmet kitchen, and elegant
                    interiors, Falcon is the ideal retreat for those seeking luxury
                    and comfort. Whether you're planning a festive family
                    gathering or an elegant New Year's celebration, Falcon has
                    everything you need for a magical holiday.
                  </p>
                </div>

                <div className="mt-6">
                  <Link 
                    href="/listings/falcon-blueberry-drive" 
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Property Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/* Call to Action */}
            <div className="bg-blue-50 p-8 rounded-xl my-16 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Book Your Luxury Holiday Getaway?
              </h2>
              <p className="text-gray-700 mb-6">
                Secure your dream Whistler vacation rental for Christmas and New Year's before these exclusive properties are booked. AceHost offers personalized concierge services to make your holiday stay truly unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/properties" 
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse All Luxury Properties
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles You Might Like</h2>
            
            <BlogRelatedArticles 
              currentArticleLink={currentArticleLink}
              count={3}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LuxuryChristmasRentals;
