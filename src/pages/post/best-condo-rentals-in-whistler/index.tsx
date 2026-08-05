import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { airbnbButtonSm } from "@/lib/airbnbButtonStyles";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";
import {
  CONDO_RENTAL_PROPERTIES,
  type CondoRentalProperty,
} from "@/data/blog/condo-rentals-properties";

function CondoPropertySection({
  property,
  index,
}: {
  property: CondoRentalProperty;
  index: number;
}) {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        {index + 1}) {property.name}
      </h2>

      <div className="bg-gray-50 p-5 rounded-lg mb-6">
        <p className="font-semibold">Price Range: {property.priceRange}</p>
        <p className="mt-4">{property.stats}</p>
      </div>

      {property.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className={paragraph === property.paragraphs[0] ? undefined : "mt-4"}>
          {paragraph}
        </p>
      ))}

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 mb-6">
        {property.listingHref ? (
          <Link
            href={property.listingHref}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow-md font-medium"
          >
            View property
          </Link>
        ) : null}
        {property.airbnbHref ? (
          <a
            href={property.airbnbHref}
            className={airbnbButtonSm}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            Book on Airbnb
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        ) : null}
      </div>

      <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
        <Image
          src={property.imageSrc}
          alt={property.imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
          <p className="text-sm font-medium">{property.name}</p>
        </div>
      </div>
    </>
  );
}

export default function BlogPost() {
  const publishDate = "October 15, 2025";
  const currentArticleLink = "/post/best-condo-rentals-in-whistler";
  const metaDescription =
    "Discover Whistler's best condo and apartment rentals from AceHost — ski-in/ski-out units, village penthouses, Creekside retreats, and the six-bedroom Blueberry Ravencrest home for large groups.";

  return (
    <>
      <Head>
        <title>
          Ultimate Guide to the Best Condo Airbnb Rentals in Whistler | Ski in Ski out + Best Locations!
        </title>
        <meta name="description" content={metaDescription} />
        <meta
          property="og:title"
          content="Ultimate Guide to the Best Condo Airbnb Rentals in Whistler | Ski in Ski out + Best Locations!"
        />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://acehost.ca/photos/post/best-condo-rentals-in-whistler/hero.jpg"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ultimate Guide to the Best Condo Airbnb Rentals in Whistler | Ski in Ski out + Best Locations!"
        />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://acehost.ca/photos/post/best-condo-rentals-in-whistler/hero.jpg"
        />
        <meta
          name="keywords"
          content="Whistler condo rentals, Whistler Airbnb, ski in ski out Whistler, best Whistler condos, Whistler accommodation, Whistler vacation rental, luxury condo Whistler, Blueberry 6 bedroom Whistler"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ultimate Guide to the Best Condo Airbnb Rentals in Whistler | Ski in Ski out + Best Locations!
              </h1>
              <div className="flex items-center text-sm text-gray-600 mb-8">
                <span className="mr-4">Published: {publishDate}</span>
                <span className="mr-4">|</span>
                <span>18 min read</span>
              </div>
              <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/photos/post/best-condo-rentals-in-whistler/hero.jpg"
                  alt="Luxury condo rentals in Whistler with mountain views"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-2">Summary</h2>
                <p className="text-gray-700">
                  Thinking about a Whistler getaway but not sure where to stay? This guide showcases every AceHost condo rental in Whistler – from luxurious 3-bedroom stunners with panoramic views and village penthouses to ski-in/ski-out Creekside retreats and the six-bedroom Blueberry Ravencrest home for larger groups. We have hand-selected properties that offer the perfect blend of comfort, location, and that special Whistler magic to make your mountain vacation unforgettable!
                </p>
              </div>

              <p className="text-xl leading-relaxed">
                Whistler isn&apos;t just a world-class ski destination – it&apos;s a vibrant mountain town where memories are made year-round. While luxury chalets grab headlines with their butler service and private theaters, Whistler&apos;s condo scene offers something equally magical: stylish, convenient, and surprisingly affordable mountain living that puts you right where the action is. Whether you&apos;re planning a romantic getaway, a family adventure, or a friends&apos; trip to remember, we&apos;ve rounded up the absolute cream of Whistler&apos;s condo crop to help you find your perfect mountain home-away-from-home!
              </p>

              <p className="font-medium text-xl mt-6 mb-8">
                From slopeside gems to village-center sanctuaries – including large-group options like the six-bedroom Blueberry rental – here are all of AceHost&apos;s Whistler condo and apartment rentals:
              </p>

              {CONDO_RENTAL_PROPERTIES.map((property, index) => (
                <CondoPropertySection
                  key={property.name}
                  property={property}
                  index={index}
                />
              ))}

              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                Finding Your Perfect Whistler Condo: Location Guide
              </h2>

              <p>
                When choosing a Whistler condo, location can make or break your vacation experience. Here&apos;s a quick guide to Whistler&apos;s most sought-after neighborhoods:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Whistler Village:</strong> The bustling heart of Whistler, offering walking access to gondolas, restaurants, shopping, and nightlife. Perfect for those who want to be in the center of the action.
                </li>
                <li>
                  <strong>Upper Village:</strong> At the base of Blackcomb Mountain, this quieter area offers excellent ski access while being just a short walk from the main village. Many properties here offer true ski-in/ski-out convenience.
                </li>
                <li>
                  <strong>Blueberry Hill:</strong> A prestigious residential area minutes from the Village, ideal for larger groups who want a spacious condo-style home with forest views and quick drive access to lifts.
                </li>
                <li>
                  <strong>Village North:</strong> A slightly quieter extension of the main village with excellent amenities and typically more affordable options, still within easy walking distance to lifts and attractions.
                </li>
                <li>
                  <strong>Creekside:</strong> The original base of Whistler Mountain, this charming area offers a more laid-back vibe, its own gondola, and amenities like grocery stores and restaurants – all with typically better value than village properties.
                </li>
                <li>
                  <strong>Nicklaus North:</strong> Lakefront and golf-course views with a quieter pace, perfect when you want scenery and value with a short drive to the Village.
                </li>
              </ul>

              <p className="mt-6">
                For most first-time visitors, staying in or near the Village provides the quintessential Whistler experience, putting everything from gondolas to grocery stores within walking distance. If ski access is your top priority, look for properties in Upper Village or with &quot;ski-in/ski-out&quot; in their descriptions. Larger groups should consider the six-bedroom Blueberry Ravencrest home or Northlands for extra beds and bathrooms without booking multiple units.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                Why Choose a Condo for Your Whistler Stay?
              </h2>

              <p>
                Condos offer some distinct advantages over hotel rooms when visiting Whistler:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Space to Spread Out:</strong> With separate bedrooms and living areas, condos give everyone room to relax after active days on the mountain.
                </li>
                <li>
                  <strong>Kitchen Facilities:</strong> Save money and enjoy flexibility by preparing some meals in your fully equipped kitchen – especially helpful for families and longer stays.
                </li>
                <li>
                  <strong>Value for Groups:</strong> When traveling with family or friends, condos often provide better value per person than booking multiple hotel rooms – and large layouts like the six-bedroom Blueberry rental can host entire reunions under one roof.
                </li>
                <li>
                  <strong>Local Experience:</strong> Stay like a local with residential amenities and neighborhoods that hotels can&apos;t offer.
                </li>
                <li>
                  <strong>Building Amenities:</strong> Many condo buildings feature hot tubs, pools, fitness centers, and other perks included in your stay.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                Seasonal Considerations for Your Whistler Condo
              </h2>

              <p>
                Whistler truly shines as a year-round destination, with each season offering its own unique magic. Here&apos;s what to consider when booking:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Winter (December-April)</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Premium pricing, especially during holidays</li>
                    <li>Book 6+ months ahead for best selection</li>
                    <li>Prioritize ski access if you&apos;re hitting the slopes</li>
                    <li>Village location minimizes need for a vehicle</li>
                    <li>Look for ski/board storage features</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Summer (June-September)</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Better availability and pricing</li>
                    <li>Consider proximity to bike trails/lakes</li>
                    <li>Look for units with AC during July/August</li>
                    <li>Outdoor space (balcony/patio) more valuable</li>
                    <li>Village still convenient but not mandatory</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-xl my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Experience Whistler&apos;s Best Condo Rentals?
                </h2>
                <p className="mb-6">
                  At AceHost, we specialize in connecting discerning travelers with Whistler&apos;s finest properties. From ski-in/ski-out couples&apos; retreats to village penthouses and the six-bedroom Blueberry home for large groups, our collection includes every exceptional condo and apartment rental we manage in Whistler.
                </p>
                <Link
                  href="https://acehost.ca/properties"
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore All Properties
                </Link>
              </div>

              <BlogRelatedArticles currentArticleLink={currentArticleLink} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
