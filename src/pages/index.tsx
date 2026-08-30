import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GuestySearchWidget from "@/components/GuestySearchWidget";
import PropertyCoverImage from "@/components/PropertyCoverImage";
import VimeoEmbed from "@/components/VimeoEmbed";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FaUser, FaBed, FaBath } from "react-icons/fa";
import { Users, Bed, Bath } from "lucide-react";
import {
  getPropertyAirbnbLink,
  getPropertyContactLink,
  shouldUseContactForBooking,
} from "@/data/propertyAirbnbLinks";
import { getPropertyType } from "@/data/properties/catalog";
import {
  getHomepageListings,
  type HomepageListing,
} from "@/data/properties/homepageListings";
import {
  buildHomepageOrganizationSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo/schema";
import { SITE_URL } from "@/data/seo/business";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: true,
});

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("whistler"); // Set Whistler as default
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Structured data for rich snippets - Enhanced for better SEO
  const structuredData = buildOrganizationSchema();
  const websiteSchema = buildWebsiteSchema();
  const homepageOrganizationSchema = buildHomepageOrganizationSchema();

  // Render optimized property card directly
  const renderPropertyCard = (property: HomepageListing, index: number) => {
    // Directly use the property's link or contactLink as primary link
    let cardLink = property.link || `/listings/${property.id}`;
    
    // For display or booking links
    const airbnbLink = getPropertyAirbnbLink(property.id, property.airbnbLink);
    const useContact = shouldUseContactForBooking(
      property.id,
      property.contactLink,
      property.airbnbLink
    );
    
    // Special handling for Cotswolds property
    const isCotswolds = property.id === "cotswolds-uk-soho-farm-house";
    const coverSrc = isCotswolds
      ? "/photos/properties/Cotswolds UK - Soho Farm House/224A8292.jpg"
      : property.image;
    const locationLabel =
      property.locationFilter === "whistler"
        ? "Whistler"
        : property.locationFilter.toLowerCase().includes("vancouver")
          ? "Vancouver"
          : "Worldwide";
    const coverAlt = `${property.name} - Luxury ${locationLabel} vacation rental with ${property.bedrooms} bedroom${property.bedrooms !== 1 ? "s" : ""}, accommodating up to ${property.guests} guest${property.guests !== 1 ? "s" : ""}`;

    return (
      <div
        key={property.id}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full"
      >
        <div className="relative h-64">
          <Link href={cardLink} className="block relative h-full w-full">
            <PropertyCoverImage
              src={coverSrc}
              alt={coverAlt}
              priority={index < 2}
              className="cursor-pointer object-cover"
            />
          </Link>
          {property.isPetFriendly && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-md z-10">
              Pet Friendly
            </div>
          )}
          <div className="absolute bottom-4 right-4 z-20">
            {useContact ? (
              <Link
                href={getPropertyContactLink(property.id, property.contactLink)}
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
            ) : airbnbLink ? (
              <a
                href={airbnbLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
              >
                Book Now
              </a>
            ) : (
              <Link
                href={cardLink}
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
              >
                Book Now
              </Link>
            )}
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          {/* Property details */}
          <div className="flex flex-wrap gap-2 mb-4">
            {property.guests && (
              <span className="bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-md">
                {property.guests}{" "}
                {typeof property.guests === "number" && property.guests === 1
                  ? "Guest"
                  : "Guests"}
              </span>
            )}
            {property.bedrooms && (
              <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
                {property.bedrooms}{" "}
                {typeof property.bedrooms === "number" && property.bedrooms === 1
                  ? "Bedroom"
                  : "Bedrooms"}
              </span>
            )}
            {property.beds && (
              <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
                {property.beds}{" "}
                {typeof property.beds === "number" && property.beds === 1
                  ? "Bed"
                  : "Beds"}
              </span>
            )}
            {property.bathrooms && (
              <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
                {property.bathrooms}{" "}
                {typeof property.bathrooms === "number" &&
                property.bathrooms === 1
                  ? "Bathroom"
                  : "Bathrooms"}
              </span>
            )}
          </div>

          {/* Property name */}
          <h3 className={`text-xl font-medium mb-4 text-gray-900 ${property.id === "hotel-booking-assistance" ? "" : "line-clamp-2"} ${property.id === "hotel-booking-assistance" ? "h-auto" : "h-14"}`}>
            {property.name}
          </h3>

          {/* Pricing information */}
          <div className="space-y-2 mb-6 min-h-[80px]">
            {property.priceRange && (
              <p className="text-gray-600">{property.priceRange}</p>
            )}
            {property.winterPrice && (
              <p className="text-gray-600">{property.winterPrice}</p>
            )}
            {property.holidayPrice && (
              <p className="text-gray-600">{property.holidayPrice}</p>
            )}
          </div>

          {/* View property link */}
          <div className="mt-auto">
            <Link
              href={cardLink}
              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
            >
              <span>View Property</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const allListings = getHomepageListings();

  const isWorldwideListing = (listing: HomepageListing): boolean =>
    listing.locationFilter !== "whistler";

  // Update filtering logic to match properties page
  const filteredListings = allListings.filter((listing) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "pets") return listing.isPetFriendly === true;
    if (activeFilter === "skiinout") return listing.isSkiInSkiOut === true;
    if (activeFilter === "homes")
      return !isWorldwideListing(listing) && getPropertyType(listing) === "home";
    if (activeFilter === "townhomes")
      return !isWorldwideListing(listing) && getPropertyType(listing) === "townhome";
    if (activeFilter === "condos")
      return !isWorldwideListing(listing) && getPropertyType(listing) === "condo";
    if (activeFilter === "whistler") return listing.locationFilter === "whistler";
    if (activeFilter === "worldwide") return listing.locationFilter !== "whistler";
    return listing.locationFilter === activeFilter;
  });

  const faqItems = [
    {
      question: "Is there a minimum stay requirement for Acehost properties?",
      answer:
        "To ensure our guests enjoy our luxurious properties, we have a 3-4 night minimum stay requirement. During major holidays such as Christmas and New Year's, a 6-7 night minimum stay may be required.",
    },
    {
      question:
        "Can I find pet-friendly luxury rental vacation homes in Whistler on AceHost.ca?",
      answer:
        "Yes, we offer a selection of pet-friendly luxury rental homes in Whistler. Use our pet-friendly filter when searching for properties to see all available options that welcome pets.",
    },
    {
      question: "Is there a fee for early check-in or late checkout?",
      answer:
        "Early check-in and late checkout options may be available depending on the property and booking schedule, and may include an additional fee. Please contact us in advance to inquire about these options for your stay.",
    },
    {
      question:
        "What amenities can I expect in a luxury vacation rental home in Whistler from AceHost.ca?",
      answer:
        "Our luxury properties feature gourmet kitchens, private hot tubs, heated pools, saunas, steam showers, state-of-the-art entertainment systems, and premium linens for maximum comfort.",
    },
    {
      question:
        "What is the cancellation policy for booking a luxury vacation rental home in Whistler with AceHost.ca?",
      answer:
        "Our cancellation policies vary by property and season. Generally, cancellations made 60+ days before arrival receive a full refund minus service fees. For specific details, please refer to the terms of your booking agreement or contact our team directly.",
    },
  ];

  // Featured sections for services
  const sections = [
    {
      title: "Luxury Vacation Properties",
      description:
        "AceHost offers a variety of luxury Airbnb vacation rental properties to choose from in Whistler, designed to provide guests with high-end, tailored experiences. Our chalets include VIP Concierge Services, premium amenities, stunning views, prime locations, often located in ski in ski out neighbourhoods, or near the slopes.",
      image: "/photos/homepage/ViewOurCollection.jpg",
      linkText: "Find Your Luxury Rental",
    },
    {
      title: "Property Management Services",
      description:
        "AceHost offers vacation rental property management services in Whistler, specializing in, but not limited to, luxury homes. We handle everything from guest management to property maintenance, while leveraging our Airbnb SuperHost & Premier VRBO status, in addition to our unique and modern marketing strategies to increase your bookings.",
      image: "/photos/homepage/WhistlerVacationRental.jpg",
      linkText: "Explore Our Management",
    },
    {
      title: "Concierge Services",
      description:
        "AceHost's VIP Concierge services provide personalized holiday experiences, ensuring guests receive priority access to Whistler's top restaurants, activities, and events. The service covers everything from restaurant bookings to private chefs, in-home spa treatments, and adventure planning like heli-skiing or snowmobile tours. AceHost's local expertise and strong connections in town make each stay seamless and memorable, with round-the-clock availability to cater to any request.",
      image: "/photos/homepage/WhistlerVipConcierge.jpg",
      linkText: "View Concierge Options",
    },
  ];

  return (
    <>
      <Head>
        <title>AceHost | Luxury Vacation Rental Properties in Whistler</title>
        <meta
          name="description"
          content="AceHost offers luxury rental properties in Whistler, VIP concierge services, and property management. Explore our exclusive collection of Whistler chalets and homes."
        />
        <meta
          name="keywords"
          content="Whistler vacation rentals, luxury whistler chalet, whistler accommodations, whistler property management, whistler concierge, luxury rental"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AceHost | Luxury Vacation Rental Properties in Whistler"
        />
        <meta
          property="og:description"
          content="AceHost offers luxury rental properties in Whistler, VIP concierge services, and property management. Explore our exclusive collection of Whistler chalets and homes."
        />
        <meta
          property="og:image"
          content={`${SITE_URL}/logo.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/logo.png`} />
        <meta property="og:url" content={SITE_URL} />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicons/favicon.ico" />

        {/* Structured data for Google search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Website schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Google search structure optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageOrganizationSchema),
          }}
        />

        {/* Logo is optimized via next/image in Navigation when possible */}
      </Head>

      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden max-w-full">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-stone-950 text-white">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_0%,rgba(180,83,9,0.16),transparent_55%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-950"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Text first in DOM for SEO; stacks above video on mobile */}
              <div className="lg:col-span-5 xl:col-span-5">
                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.08] text-white mb-4">
                  Luxury Vacation
                  <br />
                  Rental Properties in
                  <br />
                  Whistler Canada
                </h1>
                <p className="text-base sm:text-lg font-semibold text-white mb-4">
                  Property Management &amp; VIP Concierge Services
                </p>
                <p className="text-base sm:text-lg text-white leading-relaxed max-w-xl mb-8">
                  AceHost is a leading Whistler luxury Airbnb property management
                  company. We proudly offer an array of magnificent vacation
                  rental homes in Whistler, British Columbia. Offering a seamless
                  experience for property owners looking to rent out their homes
                  and earn, while offering guests the perfect vacation in a
                  luxurious property. Explore our exclusive collection of luxury
                  ski chalets, and ask us how we can make your next stay
                  exceptional!
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/properties"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                  >
                    View Luxury Rental Properties
                  </Link>
                  <Link
                    href="/list-property"
                    className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                  >
                    List Your Property
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 xl:col-span-7">
                <div className="relative w-full">
                  <div
                    className="pointer-events-none absolute -inset-4 rounded-3xl bg-amber-500/15 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15">
                    <VimeoEmbed
                      videoId="1122267050"
                      title="The AceHost Whistler Vacation Experience"
                      priority
                      loop
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white pt-20 pb-10">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6 h-48 relative overflow-hidden rounded-lg">
                  <Link href={index === 0 ? "/properties" : index === 1 ? "/list-property" : "/concierge-service"}>
                    <div className="relative w-full h-full">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                        className="object-cover cursor-pointer"
                        loading="lazy"
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEhAI/w5RW4AAAAABJRU5ErkJggg=="
                      />
                    </div>
                  </Link>
                </div>
                <h3 className="text-2xl font-medium mb-4 text-gray-900">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <Link
                  href={index === 0 ? "/properties" : index === 1 ? "/list-property" : "/concierge-service"}
                  className="inline-block text-gray-900 font-medium border-b-2 border-gray-900 hover:border-gray-600 hover:text-gray-600 transition-colors"
                >
                  {section.linkText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Properties */}
        <section className="bg-gray-50 pb-24 pt-10 sm:pt-12">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 flex justify-center px-4 sm:px-0">
              <div className="w-full max-w-lg">
                <GuestySearchWidget airbnbLinksPosition="below" />
              </div>
            </div>

            <div className="mb-16 text-center">
              <h2 className="text-4xl font-light mb-6 text-gray-900">
                View Our Full Collection Of Luxury Vacation Rental Properties
              </h2>
              {/* Property Filters - match properties page style */}
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-12">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "all" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Whistler All Properties
                </button>
                <button
                  onClick={() => setActiveFilter("whistler")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "whistler" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Whistler
                </button>
                <button
                  onClick={() => setActiveFilter("homes")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "homes" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Whistler Homes
                </button>
                <button
                  onClick={() => setActiveFilter("townhomes")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "townhomes" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Whistler Townhomes
                </button>
                <button
                  onClick={() => setActiveFilter("condos")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "condos" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Whistler Condos
                </button>
                <button
                  onClick={() => setActiveFilter("pets")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "pets" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Whistler Pet Friendly
                </button>
                <button
                  onClick={() => setActiveFilter("skiinout")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "skiinout" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Whistler Ski In/Out
                </button>
                <button
                  onClick={() => setActiveFilter("worldwide")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "worldwide" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Worldwide
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredListings.map((property, index) => (
                <div key={property.id} className="col-span-1">
                  {renderPropertyCard(property, index)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light mb-6 text-gray-900">
              What Our Guests Say
            </h2>
            <Testimonials />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {faqItems.map((faq, index) => (
                <div key={index} className="col-span-1">
                  <h3 className="text-2xl font-medium mb-4 text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light mb-6 text-gray-900">
              Contact Us
            </h2>
            <p className="text-base text-gray-700 mb-8">
              Have a question or need assistance? We're here to help.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};