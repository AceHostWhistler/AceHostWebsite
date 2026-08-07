import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ListPropertyServiceCard from "@/components/listProperty/ListPropertyServiceCard";
import {
  ArrowRight,
  Mail,
  Phone,
  Star,
  Check,
} from "lucide-react";
import { propertyCategories } from "@/data/properties/catalog";
import type { PropertyFeature } from "@/data/properties/catalog";
import { getPropertyListingPath } from "@/data/properties/listingPath";
import { buildFaqPageSchema } from "@/lib/seo/schema";
import {
  ACEHOST_AIRBNB_PROFILE_URL,
  BOOKING_PLATFORMS,
  HERO_SERVICE_STRIP,
  HOW_IT_WORKS_STEPS,
  LIST_PROPERTY_CANONICAL,
  LIST_PROPERTY_FAQS,
  LIST_PROPERTY_TESTIMONIALS,
  MARKETING_CHANNELS,
  OWNER_BENEFIT_CARDS,
  REVENUE_VALUE_COLUMNS,
  SEO_SUPPLEMENT_SECTIONS,
  SHOWCASE_PROPERTY_IDS,
  SHOWCASE_CONDO_PROPERTY_IDS,
  TRUST_STATS,
} from "@/data/listPropertyContent";

const whistlerProperties =
  propertyCategories.find((c) => c.id === "whistler")?.properties ?? [];

function resolveShowcaseProperties(ids: string[]) {
  return ids
    .map((id) => whistlerProperties.find((p) => p.id === id))
    .filter((p): p is PropertyFeature => Boolean(p));
}

const showcaseProperties = resolveShowcaseProperties(SHOWCASE_PROPERTY_IDS);
const showcaseCondos = resolveShowcaseProperties(SHOWCASE_CONDO_PROPERTY_IDS);

function PropertyShowcaseCard({ property }: { property: PropertyFeature }) {
  const href = getPropertyListingPath(property);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="relative h-64">
        <Link href={href}>
          <Image
            src={property.images[0]}
            alt={`${property.name} — Whistler property managed by AceHost`}
            fill
            className="object-cover"
          />
        </Link>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {property.guests != null && (
            <span className="bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-md">
              {property.guests} Guests
            </span>
          )}
          {property.bedrooms != null && (
            <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
              {property.bedrooms} Bedrooms
            </span>
          )}
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-4 line-clamp-2">
          {property.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{property.location}</p>
        <Link
          href={href}
          className="mt-auto inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
        >
          View Property
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

const faqSchema = buildFaqPageSchema(LIST_PROPERTY_FAQS);

const ListProperty = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "Property Management",
    propertyAddress: "",
    propertyListingUrl: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    setStatusMessage("");

    const composedMessage = [
      formData.message.trim(),
      formData.propertyAddress.trim()
        ? `\n\nProperty address: ${formData.propertyAddress.trim()}`
        : "",
      formData.propertyListingUrl.trim()
        ? `\nProperty or listing URL: ${formData.propertyListingUrl.trim()}`
        : "",
    ]
      .join("")
      .trim();

    const payload = {
      ...formData,
      message: composedMessage,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: { message?: string; error?: string } | undefined;
      try {
        data = await response.json();
      } catch {
        /* ignore parse errors */
      }

      if (!response.ok) {
        setSubmitError(true);
        setStatusMessage(data?.error || "There was an error sending your message.");
        return;
      }

      setSubmitSuccess(true);
      setStatusMessage(
        data?.message || "Thank you for your message! We'll get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        inquiryType: "Property Management",
        propertyAddress: "",
        propertyListingUrl: "",
      });
    } catch {
      setSubmitError(true);
      setStatusMessage("There was an error connecting to our server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          Luxury Property Management in Whistler | AceHost Airbnb & Vacation Rental Management
        </title>
        <meta
          name="description"
          content="AceHost provides full-service Airbnb and vacation rental property management in Whistler. Maximize rental income with luxury marketing, guest services, property care, and VIP concierge."
        />
        <meta
          name="keywords"
          content="Airbnb property management Whistler, Whistler property management, vacation rental management Whistler, luxury property management Whistler, short-term rental property management"
        />
        <link rel="canonical" href={LIST_PROPERTY_CANONICAL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Luxury Property Management in Whistler | AceHost"
        />
        <meta
          property="og:description"
          content="Full-service Airbnb and vacation rental property management in Whistler. Revenue management, luxury marketing, guest services, and VIP concierge."
        />
        <meta
          property="og:image"
          content="https://www.acehost.ca/photos/homepage/WhistlerVacationRental.jpg"
        />
        <meta property="og:url" content={LIST_PROPERTY_CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script src="https://player.vimeo.com/api/player.js" async />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation transparent={false} />

        {/* 1. Hero */}
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
              <div className="lg:col-span-5 xl:col-span-5 order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.08] text-white mb-4">
                  Luxury Property Management in Whistler
                </h1>
                <p className="text-base sm:text-lg font-semibold text-white mb-4">
                  Maximize your rental income while we take care of every detail.
                </p>
                <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-xl mb-8">
                  AceHost provides full-service Airbnb and vacation rental
                  property management in Whistler, combining daily revenue
                  management, luxury marketing, guest services, housekeeping,
                  maintenance, and VIP concierge into one completely hands-off
                  experience for homeowners.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                  >
                    Get a Rental Revenue Estimate
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Explore Our Management
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-stone-400 tracking-wide">
                  {HERO_SERVICE_STRIP.join(" • ")}
                </p>
              </div>

              <div className="lg:col-span-7 xl:col-span-7 order-1 lg:order-2">
                <div className="relative w-full">
                  <div
                    className="pointer-events-none absolute -inset-4 rounded-3xl bg-amber-500/15 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15 aspect-[4/3] lg:aspect-video">
                    <Image
                      src="/photos/homepage/WhistlerVacationRental.jpg"
                      alt="Luxury Whistler vacation rental managed by AceHost"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trust strip */}
        <section className="border-b border-gray-100 bg-white py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {TRUST_STATS.map((stat) => (
                <li key={stat.label} className="text-center">
                  <p
                    className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                      stat.airbnbAccent ? "text-[#FF5A5F]" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Why owners choose AceHost */}
        <section className="py-20 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Why Whistler Homeowners Choose AceHost
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Local expertise, premium presentation, and full-service vacation
                rental management built for luxury homes across Whistler.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OWNER_BENEFIT_CARDS.map((card) => (
                <ListPropertyServiceCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Airbnb property management SEO */}
        <section
          id="airbnb-management"
          className="py-20 sm:py-24 bg-white border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                  Airbnb Property Management in Whistler
                </h2>
                <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                  <p>
                    AceHost offers full-service Airbnb property management for
                    Whistler homeowners, but our marketing strategy extends far
                    beyond a single platform. Properties can be distributed across
                    Airbnb, Vrbo, Booking.com, Expedia, AceHost.ca, direct booking
                    channels, returning guests, and luxury travel partners.
                  </p>
                  <p>
                    Our team manages pricing, listings, guest communication,
                    housekeeping, maintenance coordination, inspections, owner
                    reporting, and the complete guest experience for short-term
                    rental property management in Whistler.
                  </p>
                  <p>
                    The goal is not simply to generate Airbnb bookings. It is to
                    position each property for the strongest possible revenue
                    across the Whistler vacation rental market.
                  </p>
                </div>
              </div>
              <div>
                <a
                  href={ACEHOST_AIRBNB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200 bg-gray-50">
                    <Image
                      src="/photos/homepage/list-property/airbnb-superhost-profile.png"
                      alt="Ben's Airbnb Superhost profile — 4.92 rating and 929 reviews"
                      width={640}
                      height={480}
                      className="w-full h-auto object-contain transition-opacity group-hover:opacity-95"
                    />
                  </div>
                </a>
                <a
                  href={ACEHOST_AIRBNB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#FF5A5F] hover:bg-[#E0484D] px-6 py-3 text-sm font-semibold text-white transition-colors"
                >
                  View Ben&apos;s Airbnb Superhost Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Video / brand */}
        <section className="py-20 sm:py-24 bg-stone-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Your Home. Our Responsibility.
                </h2>
                <p className="text-lg text-stone-300 leading-relaxed">
                  See what full-service property management with AceHost looks
                  like behind the scenes.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://player.vimeo.com/video/1122267050?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=0&loop=1&background=0"
                      className="absolute inset-0 h-full w-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="AceHost Whistler property management"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. How it works */}
        <section id="how-it-works" className="py-20 sm:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Getting Started Is Simple
              </h2>
              <p className="text-lg text-gray-600">
                Whether you already own a Whistler home or are evaluating an
                investment property, AceHost makes the process straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <p className="text-sm font-semibold text-gray-400 mb-2">
                    {step.number}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Get My Revenue Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* 7. Revenue / value */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Maximizing the Value of Your Whistler Property
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVENUE_VALUE_COLUMNS.map((column) => (
                <div
                  key={column.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {column.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {column.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Managed property showcase */}
        <section className="py-20 sm:py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Properties Managed by AceHost
              </h2>
              <p className="text-lg text-gray-600">
                A selection of premium Whistler homes and condos already entrusted
                to our local property management team.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcaseProperties.map((property) => (
                <PropertyShowcaseCard key={property.id} property={property} />
              ))}
            </div>

            <div className="mt-16 mb-10 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
                Condos &amp; Apartments
              </h3>
              <p className="text-lg text-gray-600">
                From Creekside and Blueberry to Whistler Village penthouses —
                AceHost manages a wide range of condo rentals across Whistler.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcaseCondos.map((property) => (
                <PropertyShowcaseCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        {/* 9. Marketing reach */}
        <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                More Than Just Airbnb
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don&apos;t rely on a single booking platform. AceHost combines
                the world&apos;s leading vacation-rental marketplaces with our own
                direct-booking website, repeat guests, travel-agent relationships,
                digital marketing, and luxury concierge network.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {BOOKING_PLATFORMS.map((platform) => (
                <span
                  key={platform}
                  className="px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-800"
                >
                  {platform}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {MARKETING_CHANNELS.map((channel) => (
                <span
                  key={channel}
                  className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium"
                >
                  {channel}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Testimonials */}
        <section className="py-20 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Trusted homeowners and guests
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LIST_PROPERTY_TESTIMONIALS.map((item) => (
                <blockquote
                  key={item.name}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    &ldquo;{item.text}&rdquo;
                  </p>
                  <footer>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Investment consultation */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src="/photos/homepage/ViewOurCollection.jpg"
                  alt="Whistler luxury vacation rental investment consultation with AceHost"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                  Looking for the Right Whistler Investment?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  You don&apos;t need to own a property yet. AceHost regularly
                  helps buyers evaluate potential Whistler investments before
                  they purchase.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Rental revenue estimates",
                    "Nightly rental zoning considerations",
                    "Neighbourhood comparisons",
                    "Amenity recommendations",
                    "Renovation and furnishing opportunities",
                    "Introductions to trusted local real-estate professionals",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-700">
                      <Check className="h-5 w-5 text-gray-900 mt-0.5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mb-6">
                  AceHost does not provide legal, tax, or regulated investment
                  advice.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Send Us a Property You&apos;re Considering
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Investment blog link — preserved internal link */}
        <section className="py-10 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              For a detailed breakdown on investing in Whistler or renting your
              own home, explore our guide to vacation rental ownership in
              Whistler.
            </p>
            <Link
              href="/post/is-owning-a-vacation-rental-in-whistler-worth-it-2026"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              Whistler property investment guide
            </Link>
          </div>
        </section>

        {/* Supplemental SEO content — always in DOM */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="sr-only">
              Whistler vacation rental management services
            </h2>
            <div className="space-y-10">
              {SEO_SUPPLEMENT_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Final conversion / form */}
        <section id="contact" className="py-20 sm:py-28 bg-stone-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Curious What Your Whistler Property Could Earn?
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed">
                Send us your property address or listing link and we&apos;ll
                provide an initial assessment of its vacation-rental potential.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a
                    href="mailto:ben@acehost.ca"
                    className="text-lg hover:text-stone-300 transition-colors"
                  >
                    ben@acehost.ca
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a
                    href="tel:+16047648919"
                    className="text-lg hover:text-stone-300 transition-colors"
                  >
                    +1 604 764 8919
                  </a>
                </div>
              </div>

              <div className="lg:col-span-3 bg-white text-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="propertyAddress"
                      className="block text-sm font-medium mb-2"
                    >
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="propertyListingUrl"
                      className="block text-sm font-medium mb-2"
                    >
                      Property or Listing URL
                    </label>
                    <input
                      type="url"
                      id="propertyListingUrl"
                      name="propertyListingUrl"
                      value={formData.propertyListingUrl}
                      onChange={handleChange}
                      placeholder="https://"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your property or the home you're considering..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Request My Revenue Estimate
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                  {submitSuccess && (
                    <div className="p-4 bg-green-50 text-green-800 rounded-xl">
                      <p className="font-medium">{statusMessage}</p>
                    </div>
                  )}
                  {submitError && (
                    <div className="p-4 bg-red-50 text-red-800 rounded-xl">
                      <p className="font-medium">
                        {statusMessage ||
                          "There was an error sending your message."}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — after contact form */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about Whistler property management, Airbnb
                management, and working with AceHost.
              </p>
            </div>
            <div className="space-y-4">
              {LIST_PROPERTY_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-gray-900 flex justify-between items-center gap-4 [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ListProperty;
