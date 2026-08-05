import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  Shield,
  Home,
  Clock,
  Users,
  Settings,
  Sparkles,
} from "lucide-react";

// FAQ section interface
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes AceHost different from other Airbnb property management companies in Whistler?",
    answer:
      "AceHost specializes exclusively in luxury vacation homes and high-end clientele. We don't just manage your listing, we elevate your property into a 5-star guest experience. Our white-glove service includes professional branding, curated guest experiences, luxury concierge services, and hands-on local support. With a strong reputation and global partnerships, we consistently outperform traditional property managers.",
  },
  {
    question: "Can I Rent my Property with AceHost?",
    answer:
      "Yes, if your property is zoned for nightly rentals and meets our quality standards for luxury vacation rentals. We'll help you determine if your property qualifies during our initial consultation.",
  },
  {
    question: "What management fee do you charge?",
    answer:
      "Our management fee structure is tailored to each property based on factors like location, size, and amenities. We typically work on a percentage of rental income. Contact us for a personalized rate quote.",
  },
  {
    question: "What's included in your Airbnb management fees for luxury properties?",
    answer: "Our management fee covers everything from listing optimization and guest communication to scheduling cleanings, managing check-ins, and handling maintenance. We also provide monthly reporting and revenue tracking. For high-end homes, we tailor our services to include concierge planning, mid-stay housekeeping, and luxury amenity stocking upon request.",
  },
  {
    question: "What are the benefits working with AceHost?",
    answer:
      "Working with AceHost provides you with expert property management, premium marketing on multiple platforms, Airbnb SuperHost status, access to high-end travelers through our exclusive network, professional photography, VIP concierge services for guests, detailed reporting, and a completely hands-off rental experience.",
  },
  {
    question: "Do I need to live in Whistler to rent out my home with AceHost?",
    answer: "Not at all. Many of our homeowners live abroad or elsewhere in Canada. We provide a fully hands-off experience, handling everything from guest communication and property maintenance to financial reporting. You'll always have full visibility into your home's performance through regular updates and transparent reporting.",
  },
  {
    question: "I'm not a Canadian resident. Can AceHost still manage my Whistler property and help with NR6 filing?",
    answer: "Yes, we regularly work with non-resident property owners and can assist with everything you need, including NR6 filing and tax compliance for rental income in Canada. We work closely with experienced accountants and can guide you through the process to ensure your withholding taxes are minimized and everything is CRA-compliant. Managing foreign-owned luxury properties is something we handle seamlessly.",
  },
  {
    question: "How do you screen guests to protect my luxury property?",
    answer: "We use a combination of platform-integrated verification tools and personal screening to ensure every guest is a good fit for your home. For high-value properties, we prioritize quality over quantity, often hosting families, executives, or well-known guests who are looking for a premium, respectful experience.",
  },
  {
    question: "Can AceHost manage my home if it's not listed on Airbnb?",
    answer: "Yes. We manage both Airbnb and direct-booked properties. In fact, many of our homes are marketed off-platform to private clients or through our exclusive partnerships. We'll develop a custom marketing and booking strategy that best fits your property and revenue goals.",
  },
  {
    question: "Can AceHost help maximize revenue for my vacation rental property in Whistler?",
    answer: "Absolutely. We specialize in increasing visibility, booking value, and guest satisfaction. Our data-driven pricing tools, strategic marketing (including influencer partnerships and SEO), and access to high-net-worth travelers all contribute to strong returns. Many of our homeowners see their rental income increase significantly after switching to AceHost.",
  },
  {
    question: "What's involved in getting started with AceHost as my property manager?",
    answer: "Getting started is easy. After an initial consultation and property walkthrough, we handle onboarding, photography, listings, and setup. Whether your home is already listed or new to the market, we tailor everything for maximum performance, and handle all guest logistics from day one.",
  },
  {
    question:
      "Are the AceHost luxury vacation rental homes in Whistler professionally cleaned and maintained?",
    answer:
      "Absolutely. We work with professional cleaning teams and property maintenance specialists to ensure every property is impeccably presented before each guest arrival and properly maintained throughout the year.",
  },
];

// Steps in the process
interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Contact Us",
    description:
      "Contact us today. Whether you already own a property or are still looking for the right home in Whistler, we're eager to help. Many owners work with us before they buy, we're happy to advise on properties you're interested in, help you choose the perfect home for your goals, and connect you with trusted local realtors when needed. In the meantime, please send any videos or photos you have of your property (or listings you're considering), along with basic information such as bedroom layout, bathrooms, and your rental preferences. Not sure if a property is zoned for nightly rentals? Send us the address and we can help find out for you.",
    icon: MessageSquare,
  },
  {
    number: 2,
    title: "Property Assessment & Estimate",
    description:
      "We will assess your property and put together a clear estimate and revenue projection for you, along with more information about how AceHost operates. We'll suggest optimal nightly rental rates, outline a personalized marketing strategy, and answer any questions so you know exactly what to expect before we meet in person.",
    icon: Settings,
  },
  {
    number: 3,
    title: "Meet Us | Show Us Your Home",
    description:
      "At AceHost we carefully select properties for our portfolio that will appeal to our network of global guests. We'd love to see your home in person, meet with us, walk us through the property, and we'll confirm the numbers and estimates we sent over prior to your visit. We can also share advice or recommendations on home improvements, staging, furnishing, and anything else that will help your property perform at its best.",
    icon: Home,
  },
  {
    number: 4,
    title: "Join the AceHost Team",
    description:
      "Call, email, or meet in person to discuss the terms of your contract. Welcome to the AceHost team! We'll arrange a professional photographer and handle all subsequent rentals, guests, cleaning teams, payout information, and more. We also help stock your home with toiletries and essentials, offer hands-on advice on setting up your property, and can set it up with you step by step, at no cost to you. It's in our interest to help our owners succeed and give guests the most comfortable stay possible. We take the initiative, send you a range of ideas and recommendations, and you simply approve what works for you. That said, we're flexible, bring years of experience, and are always happy to work with owners however they prefer.",
    icon: Users,
  },
];

// Features section
interface Feature {
  title: string;
  description: string;
  additionalDescription: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "The AceHost Brand",
    description:
      "At AceHost, we strive to build trust and longevity with homeowners. Property management can be a time consuming and stressful feat. AceHost's rental expertise and quality assurance offers a solution to homeowners, yielding hassle-free and profitable property rental income.",
    additionalDescription: "We handle every aspect of your rental management, from marketing and guest preparation to ensuring a flawless guest experience, professional cleaning that leaves your home spotless, and transparent invoicing and payouts to simplify your taxes.",
    icon: Star,
  },
  {
    title: "Luxury Is Our Focus",
    description:
      "We specialize in managing luxury homes in Whistler, from beautifully appointed condos to multi-million-dollar villas. Through full-service guest management, professional cleaning, and VIP Concierge services, we give homeowners confidence that their home and guests receive exceptional care.",
    additionalDescription:
      "Are you worried that your property may not yet be luxurious enough for the AceHost portfolio? Please do not be shy about reaching out. We help homeowners transform promising properties into elevated luxury rentals by recommending and coordinating furnishings, design updates, amenities, and guest-experience improvements. Bringing your home up to the standards luxury travellers expect can strengthen its presentation, rental potential, and long-term value.",
    icon: Sparkles,
  },
  {
    title: "Our Relationships",
    description:
      "Exceptional property management begins with trust. At AceHost, we build lasting relationships with Whistler homeowners through clear communication, complete transparency, and meticulous care for every property. Our experienced local team manages every detail, from pricing and guest services to maintenance and property care, giving homeowners a truly hands-off experience and confidence that their Whistler home is being managed to the highest standard.",
    additionalDescription: "",
    icon: Users,
  },
];

const reasonsSections = [
  {
    title: "The AceHost Team",
    description:
      "Our boutique and professional team has over 15 years of experience in luxury hospitality. AceHost's refined industry knowledge and high guest & homeowner retention rates set us apart from our competitors. After just under 4 years of business, we can confidently say that we are the fastest growing luxury vacation rental management company in Whistler.",
  },
  {
    title: "Listing & Marketing Strategies",
    description:
      "We are not your average Airbnb management company. Our elevated marketing strategies give homeowners access to additional exposure:",
    bulletPoints: [
      "Airbnb Super Host Status",
      "VRBO Premier Status",
      "Strong relationships with thousands of High-End Travel Agents & Partners",
      "High Google Search Ranking - AceHost ranks high on google search for travels and their agents. Benefit in additional bookings by having your home listed on our site.",
      "Access to a vast network of Returning Guests - Because of the level of service we provide, we have many returning guests looking to book the same or other properties through us. Increase your bookings by offering your home to our loyal returning travellers.",
      "Ad Spending on numerous platforms (no cost to owner)",
      "Social Media Presence",
      "Referrals and Introductions from locals and local businesses",
    ],
  },
  {
    title: "Returning Guest Satisfaction",
    description:
      "Homeowners can benefit from AceHost's portfolio of returning guests. Our services go above and beyond at no cost to travellers, ensuring that trusted customer base has consistently had their expectations exceeded. We believe in building long term relationships with guests and using their feedback to understand how we can improve their next visit to Whistler. Referrals from past guests who have experienced AceHost hospitality contribute to our growing network of new customers.",
  },
  {
    title: "Hands-Off Homeowner Experience",
    description:
      "We reduce homeowner responsibilities by creating a hands-off rental experience where we take care of all aspects of guest accommodation. AceHost takes an individual approach with property check-ins, check-outs, sweeps for damage, familiarizing guests with each home to ensure that their stay is comfortable.",
  },
  {
    title: "Rental Flexibility",
    description:
      "We understand that rental flexibility is important to homeowners. Depending on homeowner preference, AceHost can adapt to homeowner calendars on year-round basis, seasonally, or for select dates. We are happy to create a personally-curated property rental schedule that works for you and your family.",
  },
  {
    title: "Property Care",
    description:
      "Property care is of upmost priority at AceHost. We carefully inspect all properties before guest arrival and after their departure. Under our supervision, our teams of professional housekeepers are committed to providing a high-quality standard of cleanliness. We regularly visit our homes to ensure that everything is in working order and ready for guest arrival.",
  },
  {
    title: "VIP Concierge Services",
    description:
      "Our luxury hospitality services offer a well curated stay for all guests, ensuring that their Whistler experience is comfortable and entertaining. Our high-end homes are typically staffed with hosts and chefs, giving homeowners a peace of mind that their home is looked after. Included Concierge Services help increase bookings and increase the likelihood of recurring bookings from past guests.",
  },
  {
    title: "Investment Property Consultations",
    description:
      "Are you looking to buy an investment rental property in Whistler? It can be difficult to choose a location for your short term rental property in Whistler, as there are a wide range of neighbourhoods all offering different benefits. At AceHost, we provide one-on-one property consultations to ensure that you are choosing the best luxury property for your needs and investment goals. Whether you want a ski-in ski-out feature, closer proximity to the village, questions about bedrooms, or specific home amenities such as a hot tub or spa facilities, AceHost's knowledge of luxury investment homes can offer a wide selection of homes.\n\nWe are more than happy to introduce you to our favourite, honest, and hard working local realtors. We will also give you estimates on rental income based on the property, location, bedroom layout etc... We will also give you ideas on what you can do to improve your home to appeal to a larger audience of guests, allowing you to increase your rates, earn more income, and provide more value to your guests.\n\nWe are in the business and we know it well. We can help!",
  },
];

const ListProperty = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "Property Management",
    propertyAddress: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

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

    try {
      console.log("Submitting form data:", formData);
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      
      // Get the response data
      let data;
      try {
        data = await response.json();
        console.log("Response data:", data);
      } catch (e) {
        console.error("Failed to parse response:", e);
      }

      if (!response.ok) {
        const errorMessage = data?.error || "Network response was not ok";
        console.error("Form submission error:", errorMessage, data?.details);
        setSubmitError(true);
        setStatusMessage(data?.error || "There was an error sending your message.");
        return;
      }

      // Success! Show message from API if available
      setSubmitSuccess(true);
      setStatusMessage(data?.message || "Thank you for your message! We'll get back to you soon.");
      
      // Clear form data on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        inquiryType: "Property Management",
        propertyAddress: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
      setStatusMessage("There was an error connecting to our server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>List Your Luxury Vacation Rental Property | AceHost Whistler Property Management</title>
        <meta
          name="description"
          content="List your luxury property with AceHost, Whistler's best luxury Airbnb property management company. Maximize your rental income with our expertise."
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[72vh] md:min-h-[78vh] flex items-end overflow-hidden">
        <Image
          src="/photos/homepage/WhistlerVacationRental.jpg"
          alt="Luxury Whistler Property"
          fill
          className="object-cover"
          priority
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[55%] w-full max-w-3xl bg-gradient-to-tr from-stone-950/65 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14 pt-28 md:pt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.08] max-w-4xl mb-5 drop-shadow-sm">
            List Your Luxury Vacation Rental Property With AceHost
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed mb-8 drop-shadow-sm">
            Partner with Whistler&apos;s best luxury Airbnb property management company to maximize your rental income and provide exceptional guest experiences.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section
        className="bg-white border-b border-gray-100 py-12 sm:py-14"
        aria-label="Whistler property investment guide"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-5">
              For a more detailed breakdown on investing in a property in
              Whistler, or renting your own home out, have a look at the math
              behind renting &amp; investing in Whistler. We are happy to help
              find you the perfect Whistler rental property investment!
            </p>
            <Link
              href="/post/is-owning-a-vacation-rental-in-whistler-worth-it-2026"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Whistler property investment &amp; listing
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values/Features - Clean cards with icons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose AceHost?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide unparalleled property management services for luxury
              homes in Whistler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                    <feature.icon size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
                {feature.additionalDescription && (
                  <p className="text-gray-600 text-lg leading-relaxed mt-4">
                    {feature.additionalDescription}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airbnb Profile Section - Apple-style Design */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="mb-2 text-sm font-semibold text-red-500 tracking-widest uppercase">Airbnb Superhost</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
                Exceptional <span className="text-red-500">Reviews</span>
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Join our portfolio and benefit from our established Superhost status on Airbnb. 
                Our properties consistently receive 5-star ratings and glowing reviews.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white shadow-sm p-4 rounded-xl">
                  <div className="text-3xl font-bold text-black">4.92</div>
                  <div className="flex mt-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Overall Rating</div>
                </div>
                <div className="bg-white shadow-sm p-4 rounded-xl">
                  <div className="text-3xl font-bold text-black">900+</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
              </div>
              
              <a 
                href="https://www.airbnb.ca/users/show/425922828" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                <span className="text-sm font-medium">View on Airbnb</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="lg:w-1/2">
              {/* Airbnb Profile Screenshot */}
              {/* Removed problematic image */}

              <div className="space-y-3">
                {/* Real Reviews */}
                <div className="bg-white shadow-sm p-4 rounded-xl">
                  <p className="text-gray-700 text-sm mb-3">
                    "...Probably our 10th trip to Whistler and hands down the best place we've stayed. 
                    The garage was perfect for the gear, kitchen was beautifully appointed, everything super clean, hot tub perfect fo..."
                  </p>
                  <div className="flex items-center">
                    <div className="font-medium text-sm">Krystle</div>
                    <div className="text-xs text-gray-500 ml-2">April 2025</div>
                  </div>
                </div>
                
                <div className="bg-white shadow-sm p-4 rounded-xl">
                  <p className="text-gray-700 text-sm mb-3">
                    "...Great place, wonderful host and amazing location. My son and I stayed at Ben's place for 5 days of Spring riding. It's exactly as described..."
                  </p>
                  <div className="flex items-center">
                    <div className="font-medium text-sm">Anthony</div>
                    <div className="text-xs text-gray-500 ml-2">April 2025</div>
                  </div>
                </div>
                
                <div className="bg-white shadow-sm p-4 rounded-xl">
                  <p className="text-gray-700 text-sm mb-3">
                    "...The place is exactly as the pictures show. The location is perfect with ski in/out and valet for skis. Ben responded right away and the check in and check out was super easy. We look forward to coming back to..."
                  </p>
                  <div className="flex items-center">
                    <div className="font-medium text-sm">Jerry</div>
                    <div className="text-xs text-gray-500 ml-2">April 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Timeline style with large numbers */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple process to get your property listed and earning income, whether you already own your home or are still searching for the perfect investment property in Whistler.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col md:flex-row items-start md:items-center"
              >
                <div className="md:w-1/4 flex flex-col items-center mb-8 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold mb-4">
                    {step.number}
                  </div>
                  <step.icon size={28} className="text-gray-400" />
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The AceHost Difference - Two column grid with clean cards */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The AceHost Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why property owners choose AceHost for their luxury
              rental management needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {reasonsSections.slice(0, 4).map((section, index) => (
              <div
                key={index}
                className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {section.description}
                </p>

                {section.bulletPoints && (
                  <ul className="space-y-3 mt-6">
                    {section.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {reasonsSections.slice(4).map((section, index) => (
              <div
                key={index}
                className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean accordion style */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="w-full px-8 py-6 text-left font-medium text-xl flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    {activeAccordion === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                {activeAccordion === index && (
                  <div className="px-8 py-6 border-t border-gray-100">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Modern, clean design */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to List Your Property?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today to start maximizing your property's rental
              potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <h3 className="text-3xl font-bold mb-10">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mr-6">
                      <Mail className="h-6 w-6" />
                    </div>
                    <a
                      href="mailto:ben@acehost.ca"
                      className="text-xl hover:text-black transition-colors"
                    >
                      ben@acehost.ca
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mr-6">
                      <Phone className="h-6 w-6" />
                    </div>
                    <a
                      href="tel:+16047648919"
                      className="text-xl hover:text-black transition-colors"
                    >
                      +1 604 764 8919
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mr-6">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <span className="text-xl">AceHost Whistler</span>
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-3xl font-bold mb-10">
                    What We Need From You
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">
                        Photos or videos of your property
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">
                        Bedroom and bathroom layout
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">
                        Your rental preferences (year-round, seasonal, etc.)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">
                        Property address to verify zoning for nightly rentals
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-gray-50 p-12 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold mb-10">Send Us a Message</h3>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="propertyAddress"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="propertyAddress"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                    placeholder="Tell us about your property..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-8 py-5 rounded-xl text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                  <span>Submit</span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md mt-4">
                    <p className="font-medium">{statusMessage}</p>
                  </div>
                )}

                {submitError && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-md mt-4">
                    <p className="font-medium">{statusMessage || "There was an error sending your message."}</p>
                    <p>Please try again later or contact us directly at ben@acehost.ca or +1 604 764 8919.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ListProperty;
