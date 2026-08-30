import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BlogGuestyInlineBanner } from "@/components/blog/BlogGuestyBookingCtas";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogSeoHead from "@/components/blog/BlogSeoHead";
import {
  allWhistler28Properties,
  kadenwoodProperties,
  largeHomeProperties,
  townhomeProperties,
  type Whistler28Property,
} from "@/data/blog/whistler-28-places-properties";
import { airbnbButtonBlog } from "@/lib/airbnbButtonStyles";

const SLUG = "28-best-places-to-stay-in-whistler";
const CANONICAL_URL = `https://www.acehost.ca/post/${SLUG}`;
const HERO = "/photos/properties/Two Cedars New/Two Cedars Cover photo snow.png";
const HERO_URL = `https://www.acehost.ca${encodeURI(HERO)}`;
const PUBLISH_DATE = "July 26, 2026";
const ISO_MOD = "2026-07-26T10:00:00-07:00";
const CONTACT_URL = "https://www.acehost.ca/contact";

const META = {
  title: "28 Best Places to Stay in Whistler | AceHost",
  description:
    "Explore 28 AceHost Whistler vacation rentals, from luxury Kadenwood ski chalets and large family homes to Village condos, penthouses, and ski-in ski-out stays.",
};

const FAQ_ITEMS = [
  {
    question: "How many Whistler properties does AceHost currently feature?",
    answer:
      "At the time of publishing, this guide includes 29 individual AceHost properties located in Whistler. The collection can change as new homes are added and seasonal or private options become available.",
  },
  {
    question:
      "Is it better to stay in Whistler Village, Creekside, Blackcomb, or Kadenwood?",
    answer:
      "Whistler Village is best for walkability. Creekside offers a relaxed local feel and excellent mountain access. Blackcomb and Upper Village are great for quieter ski convenience. Kadenwood is the top choice for large luxury chalets, private gondola access, and ski-in, ski-out estates.",
  },
  {
    question: "Can I book directly with AceHost?",
    answer:
      "Yes. Guests are welcome to contact AceHost directly to discuss availability, pricing, group needs, and concierge services. Direct inquiries may also reveal additional properties or discounts that are not publicly displayed.",
  },
  {
    question: "Does AceHost help with the rest of the Whistler trip?",
    answer:
      "Yes. The concierge team can assist with private chefs, restaurant reservations, airport transfers, private drivers, ski rentals, ski instructors, childcare, grocery stocking, spa services, snowmobiling, heli experiences, and custom itineraries.",
  },
];

function ContactCallout() {
  return (
    <div className="not-prose bg-gray-900 text-white rounded-xl p-6 md:p-8 my-10">
      <h2 className="text-2xl font-bold mb-3">Contact AceHost</h2>
      <p className="text-gray-200 mb-5">
        Share your dates, group size, and budget with our team. We can help you
        find the right home and may have additional availability or direct-booking
        options not shown online.
      </p>
      <a
        href={CONTACT_URL}
        className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
      >
        Contact AceHost
      </a>
    </div>
  );
}

function PropertyCard({ property }: { property: Whistler28Property }) {
  return (
    <section
      id={`property-${property.number}`}
      className="not-prose border border-gray-200 rounded-xl p-5 md:p-6"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {property.number}. {property.name}
      </h3>
      <p className="text-gray-700 mb-4">{property.description}</p>
      {property.footnote ? (
        <p className="text-gray-600 mb-4 italic">{property.footnote}</p>
      ) : null}
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-5">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href={property.listingHref}
          className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          View Property Details
        </Link>
        {property.contactOnly ? (
          <a
            href={CONTACT_URL}
            className="inline-block bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Contact AceHost
          </a>
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
    </section>
  );
}

export default function BlogPost() {
  const currentArticleLink = `/post/${SLUG}`;

  const listingStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "28 AceHost Whistler vacation rentals",
    numberOfItems: allWhistler28Properties.length,
    itemListElement: allWhistler28Properties.map((property) => ({
      "@type": "ListItem",
      position: property.number,
      item: {
        "@type": "LodgingBusiness",
        name: property.name,
        image: `https://www.acehost.ca${encodeURI(property.image)}`,
        url: property.contactOnly
          ? CONTACT_URL
          : property.bookUrl ?? `https://www.acehost.ca${property.listingHref}`,
      },
    })),
  };

  return (
    <>
      <BlogSeoHead
        keywords="Whistler vacation rentals, best places to stay in Whistler, Kadenwood chalets, Whistler Village condos, ski-in ski-out Whistler, luxury Whistler Airbnb, AceHost Whistler"
        faqItems={FAQ_ITEMS}
        extraSchemas={[listingStructuredData]}
      />

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <BlogBreadcrumbs slug="28-best-places-to-stay-in-whistler" />
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                From Village Condos to $20 Million Chalets: 28 Incredible Places
                to Stay in Whistler
              </h1>
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 gap-x-4">
                <span>Published: {PUBLISH_DATE}</span>
                <span className="hidden sm:inline" aria-hidden>
                  |
                </span>
                <span>22 min read</span>
              </div>
              <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={HERO}
                  alt="Luxury ski-in ski-out chalet in Whistler Kadenwood"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            <BlogGuestyInlineBanner compact placement="top" />

            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-800 leading-relaxed">
                Not every Whistler trip looks the same. Sometimes you need a full
                ski-in, ski-out estate with a private butler, a pool, a theatre,
                and enough bedrooms for the entire extended family. Other times,
                the perfect trip is a cozy condo where you can walk to the
                gondola, restaurants, and après without touching the car keys.
              </p>
              <p>
                That range is exactly what makes the AceHost collection so much
                fun.
              </p>
              <p>
                At the time of publishing, AceHost features 28 individual
                Whistler properties, ranging from spectacular Kadenwood chalets
                to large family homes, extended-stay ski retreats, Village
                penthouses, and practical one, two, and three-bedroom condos.
              </p>
              <p>
                Please feel free to contact AceHost directly with your dates,
                group size, and budget. We sometimes have additional homes,
                private availability, longer-stay options, flexible
                arrangements, or direct-booking discounts that may not be shown
                publicly online.
              </p>

              <ContactCallout />

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Quick Guide: Which Area Is Best for You?
              </h2>
              <ul>
                <li>
                  <strong>Kadenwood</strong> is best for the biggest homes,
                  private gondola access, true luxury, and ski-in, ski-out
                  convenience.
                </li>
                <li>
                  <strong>Blueberry and Nicklaus North</strong> are great for
                  larger homes, quieter surroundings, parking, hot tubs, and quick
                  access to the Village.
                </li>
                <li>
                  <strong>Whistler Village and Village North</strong> are best
                  when walkability is the priority.
                </li>
                <li>
                  <strong>Upper Village and Blackcomb</strong> offer easy
                  Blackcomb access with a quieter atmosphere than the main
                  Village.
                </li>
                <li>
                  <strong>Creekside and Taluswood</strong> combine mountain
                  access, excellent local restaurants, and a relaxed
                  neighbourhood feel.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                The Kadenwood Collection: Whistler at Its Biggest and Best
              </h2>
              <p>
                Kadenwood is where Whistler goes full dream-chalet mode. These
                are the homes for milestone birthdays, family reunions, corporate
                retreats, holiday trips, and groups who want their accommodation
                to be a major part of the experience.
              </p>
            </div>

            <div className="mt-8 space-y-8">
              {kadenwoodProperties.map((property) => (
                <PropertyCard key={property.number} property={property} />
              ))}
            </div>

            <div className="prose prose-lg max-w-none mt-14">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Large Whistler Homes for Families, Friends, and Group Trips
              </h2>
              <p>
                These homes provide multiple bedrooms, practical layouts, hot
                tubs, views, and easy access to the Village or slopes, without
                necessarily stepping up to one of Whistler&apos;s largest estates.
              </p>
            </div>

            <div className="mt-8 space-y-8">
              {largeHomeProperties.map((property) => (
                <PropertyCard key={property.number} property={property} />
              ))}
            </div>

            <div className="prose prose-lg max-w-none mt-14">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Whistler Townhomes, Penthouses, and Condos
              </h2>
              <p>
                These homes are all about location, comfort, ski access, smart
                layouts, pools, hot tubs, and the ability to walk out the door
                and start enjoying Whistler.
              </p>
            </div>

            <div className="mt-8 space-y-8">
              {townhomeProperties.map((property) => (
                <PropertyCard key={property.number} property={property} />
              ))}
            </div>

            <div className="prose prose-lg max-w-none mt-14">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Still Not Sure Which Whistler Property Is Right for You?
              </h2>
              <p>
                That is completely normal. With everything from cozy Village
                condos to private-butler Kadenwood estates, the best option
                depends on your dates, group size, priorities, budget, and how
                you want to spend your time in Whistler.
              </p>
              <p>
                Contact the AceHost team directly and tell us what you are
                planning. We can help narrow down the best homes, explain the
                neighbourhoods, compare layouts, and assist with the full trip,
                including private chefs, transportation, restaurant
                reservations, ski rentals, instructors, childcare, grocery
                stocking, and custom Whistler experiences.
              </p>
              <p>
                We may also have additional properties, private availability,
                longer-stay options, or direct-booking discounts that are not
                currently displayed online.
              </p>
              <p>
                Whistler has a home for every kind of trip. The fun part is
                finding yours.
              </p>

              <ContactCallout />

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                Frequently Asked Questions
              </h2>
              {FAQ_ITEMS.map((item) => (
                <div key={item.question} className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p>{item.answer}</p>
                </div>
              ))}

              <BlogGuestyInlineBanner compact placement="bottom" />


              <BlogRelatedArticles currentArticleLink={currentArticleLink} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
