import React, { useState } from "react";
import { ArrowRight, Instagram, Youtube, Mail } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomePageLayout from "@/components/HomePageLayout";
import HeroVideoPlayer from "@/components/HeroVideoPlayer";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { FaUser, FaBed, FaBath } from "react-icons/fa";
import { Users, Bed, Bath } from "lucide-react";

const Home = () => {
  const { t } = useTranslation("common");
  const [activeFilter, setActiveFilter] = useState("whistler"); // Set Whistler as default
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Structured data for rich snippets - Enhanced for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AceHost",
    description:
      "Luxury Vacation Rental Properties in Whistler Canada | Property Management & VIP Concierge Services",
    url: "https://acehost.ca",
    logo: "https://acehost.ca/logonobackrgound.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4308 Main Street",
      addressLocality: "Whistler",
      addressRegion: "BC",
      postalCode: "V8E 1B2",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.instagram.com/acehost_whistler/",
      "https://www.youtube.com/@acehost_Whistler/videos",
    ],
    offers: {
      "@type": "AggregateOffer",
      description: "Luxury Vacation Rental Properties in Whistler Canada",
      areaServed: "Whistler, British Columbia",
      offerCount: "15+",
      priceCurrency: "CAD",
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 09:00-21:00",
  };

  // Website schema for search appearance
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AceHost Whistler Luxury Rentals",
    url: "https://acehost.ca",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://acehost.ca/properties?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Render optimized property card directly
  const renderPropertyCard = (property: any, index: number) => {
    // Directly use the property's link or contactLink as primary link
    let cardLink = property.link || `/listings/${property.id}`;
    
    // For display or booking links
    const bookingLink = property.contactLink || property.airbnbLink || cardLink;
    const isContactLink = !!property.contactLink;
    const isAirbnbLink = !!property.airbnbLink;
    
    // Special handling for Cotswolds property
    const isCotswolds = property.id === "cotswolds-uk-soho-farm-house";
    
    return (
        <div
          key={property.id}
          className="bg-cream-50 rounded-none overflow-hidden border border-cream-300/50 hover:border-charcoal/10 transition-all flex flex-col h-full"
        >
        <div className="relative h-64">
          <Link href={cardLink}>
            {isCotswolds ? (
              <div className="w-full h-full">
                <img
                  src="/optimized/cotswolds-cover.jpg"
                  alt={`${property.title || property.name} - Luxury ${property.location === 'whistler' ? 'Whistler' : property.location === 'vancouver' ? 'Vancouver' : 'Worldwide'} vacation rental with ${property.bedrooms} bedroom${property.bedrooms !== 1 ? 's' : ''}, accommodating up to ${property.guests} guest${property.guests !== 1 ? 's' : ''}`}
                  className="object-cover cursor-pointer w-full h-full"
                  style={{ aspectRatio: '3/2', objectFit: 'cover' }}
                  onError={(e) => {
                    // Fallback to other images if this one fails
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/photos/properties/Cotswolds UK - Soho Farm House/224A5292.jpg";
                  }}
                />
              </div>
            ) : (
              <img
                src={property.image}
                alt={`${property.title || property.name} - Luxury ${property.location === 'whistler' ? 'Whistler' : property.location === 'vancouver' ? 'Vancouver' : 'Worldwide'} vacation rental with ${property.bedrooms} bedroom${property.bedrooms !== 1 ? 's' : ''}, accommodating up to ${property.guests} guest${property.guests !== 1 ? 's' : ''}`}
                className="w-full h-full object-cover cursor-pointer"
                loading={index < 6 ? "eager" : "lazy"}
              />
            )}
          </Link>
          {property.isPetFriendly && (
            <div className="absolute top-4 left-4 bg-charcoal text-cream px-3 py-1 text-xs font-normal tracking-luxury uppercase z-10">
              Pet Friendly
            </div>
          )}
          <div className="absolute bottom-4 right-4">
            {isContactLink ? (
              <Link
                href={bookingLink}
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
            ) : isAirbnbLink ? (
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
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
              <span className="bg-charcoal text-cream px-3 py-1 text-sm font-normal tracking-wide">
                {property.guests}{" "}
                {typeof property.guests === "number" && property.guests === 1
                  ? "Guest"
                  : "Guests"}
              </span>
            )}
            {property.bedrooms && (
              <span className="bg-cream-200/80 text-charcoal px-3 py-1 text-sm font-normal">
                {property.bedrooms}{" "}
                {typeof property.bedrooms === "number" && property.bedrooms === 1
                  ? "Bedroom"
                  : "Bedrooms"}
              </span>
            )}
            {property.beds && (
              <span className="bg-cream-200/80 text-charcoal px-3 py-1 text-sm font-normal">
                {property.beds}{" "}
                {typeof property.beds === "number" && property.beds === 1
                  ? "Bed"
                  : "Beds"}
              </span>
            )}
            {property.bathrooms && (
              <span className="bg-cream-200/80 text-charcoal px-3 py-1 text-sm font-normal">
                {property.bathrooms}{" "}
                {typeof property.bathrooms === "number" &&
                property.bathrooms === 1
                  ? "Bathroom"
                  : "Bathrooms"}
              </span>
            )}
          </div>

          {/* Property name */}
          <h3 className={`text-xl font-display font-extralight mb-4 text-charcoal-dark tracking-wide-luxury ${property.id === "hotel-booking-assistance" ? "" : "line-clamp-2"} ${property.id === "hotel-booking-assistance" ? "h-auto" : "h-14"}`}>
            {property.name}
          </h3>

          {/* Pricing information */}
          <div className="space-y-2 mb-6 min-h-[80px]">
            {property.priceRange && (
              <p className="text-charcoal-muted font-normal">{property.priceRange}</p>
            )}
            {property.winterPrice && (
              <p className="text-charcoal-muted text-sm">{property.winterPrice}</p>
            )}
            {property.holidayPrice && (
              <p className="text-charcoal-muted text-sm">{property.holidayPrice}</p>
            )}
          </div>

          {/* View property link */}
          <div className="mt-auto">
            <Link
              href={cardLink}
              className="inline-flex items-center text-charcoal font-normal tracking-luxury uppercase text-sm hover:text-charcoal-light transition-colors"
            >
              <span>View Property</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // Define all property listings
  const allListings = [
    {
      id: "two-cedars",
      name: "Two Cedars | Kadenwood | Private Butler",
      image: "/photos/properties/Two Cedars New/OSA_AncientCW1248.jpg",
      guests: 17,
      bedrooms: 7,
      beds: 12,
      bathrooms: 8.5,
      priceRange: "$6,500-$9,500+ per night | Private Butler Included",
      winterPrice: "$8,500-$10,000+ Nightly | Winter",
      holidayPrice: "$17,500-$21,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/two-cedars-kadenwood",
      airbnbLink:
        "https://www.airbnb.ca/rooms/666613336620375768?guests=1&adults=1&s=67&unique_share_id=0d8a1725-cb02-487a-a033-7cc2940692e4",
      isPetFriendly: true,
      isSkiInSkiOut: true,
    },
    {
      id: "chalet-la-forja",
      name: "Chalet La Forja | Kadenwood | Private Butler",
      image: "/photos/properties/Chalet La Forja/hero00001.jpg",
      guests: "12+4",
      bedrooms: 7.5,
      beds: 15,
      bathrooms: 8,
      priceRange: "$7,000-11,000+ per night | Private Butler Included",
      winterPrice: "$8500-$11,000+ Nightly | Winter",
      holidayPrice: "$16,000-$21,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/chalet-la-forja-kadenwood",
      airbnbLink:
        "https://www.airbnb.ca/rooms/52655503?guests=1&adults=1&s=67&unique_share_id=f1bb5c2c-51f9-4a82-9aa4-670fb8caa71d",
      isPetFriendly: false,
      isSkiInSkiOut: true,
    },
    {
      id: "altitude-retreat",
      name: "Altitude Retreat | Kadenwood | Private Butler",
      image: "/photos/properties/Altitude New Photos Best/1.jpg",
      guests: 18,
      bedrooms: 7,
      beds: 9,
      bathrooms: 5.5,
      priceRange: "$7,500-$10,000+ per night | Private Butler Included",
      winterPrice: "$8,000-$10,000+ Nightly | Winter",
      holidayPrice: "$14,500-$19,000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/altitude-retreat-kadenwood",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: true,
    },
    {
      id: "luxury-ski-in-ski-out-7-bedroom-kadenwood",
      name: "The Mountaintop at Kadenwood | Ski in Ski out",
      image: "/photos/properties/2919 Heritage/02 - 20260301 MM4P 01 DJI_20260301181105_0776_D-Edit-AI Generative Fill.jpg",
      guests: 16,
      bedrooms: 7,
      beds: 8,
      bathrooms: 7.5,
      priceRange: "$6,500-$9,000+ per night",
      winterPrice: "$8,000-$10,000+ Nightly | Winter",
      holidayPrice: "$14,900-$19,000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/luxury-ski-in-ski-out-7-bedroom-kadenwood",
      airbnbLink: "https://www.airbnb.ca/rooms/1599369454342102375?guests=1&adults=1&s=67&unique_share_id=07a4f082-1dec-4a06-bf97-05638b3b71ef",
      isPetFriendly: false,
      isSkiInSkiOut: true,
    },
    {
      id: "panoramic-estate",
      name: "Panoramic Estate | Kadenwood",
      image: "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
      guests: 17,
      bedrooms: 8,
      beds: 10,
      bathrooms: 7,
      priceRange: "$5,800-$9,000+ per night",
      winterPrice: "$8,500-$10,000+ | Winter",
      holidayPrice: "$16,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/panoramic-estate-kadenwood",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1104637821836596397?guests=1&adults=1&s=67&unique_share_id=67164555-993c-40dc-b188-23ffe0755654",
      isPetFriendly: false,
      isSkiInSkiOut: true,
    },
    {
      id: "slopeside-villa",
      name: "Slope Side Chalet | Kadenwood",
      image: "/photos/properties/Slopeside Kadenwood/01-2945 Slope Side 01.jpg",
      guests: 16,
      bedrooms: 7,
      beds: 12,
      bathrooms: 7.5,
      priceRange: "$2,600-$6,000 per night",
      winterPrice: "$4,500-$6,500+ Nightly | Winter",
      holidayPrice: "$10,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/slopeside-villa-kadenwood",
      airbnbLink:
        "https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0",
      isPetFriendly: true,
      isSkiInSkiOut: true,
    },
    {
      id: "heron-views-whistler",
      name: "Heron Views | Whistler Village",
      image: "/photos/properties/3445-Heron-Place/68-3445 Heron Place 53-Edit.jpg",
      guests: 11,
      bedrooms: 5,
      beds: 6,
      bathrooms: 6,
      priceRange: "$1,200-$3,500 per night",
      winterPrice: "",
      holidayPrice: "$4,000-$6,800+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/heron-views-whistler-village",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1168163637007998550?guests=1&adults=1&s=67&unique_share_id=8227e964-920d-4bc0-8073-13043963151f",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "luxury-6-bedroom-blueberry",
      name: "Luxury 6-Bedroom | Whistler Village | Blueberry",
      image: "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/02 - 20251108 MM4P 01 0056.jpg",
      guests: 15,
      bedrooms: 6,
      beds: 10,
      bathrooms: 3,
      priceRange: "$750-1800 per night Summer",
      winterPrice: "$1200-2600 Nightly | Winter",
      holidayPrice: "$3500-6000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/luxury-6-bedroom-whistler-village-blueberry",
      airbnbLink: "https://www.airbnb.ca/rooms/1551638001847968788?guests=1&adults=1&s=67&unique_share_id=ff68258e-d89f-4493-8e79-fd85820e6872",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "golf-course-views",
      name: "Golf Course Views | Luxury 4-bed Whistler Village",
      image: "/photos/properties/Muirfield Golf Course/44 - 20250820 MM4P 01 0016.jpg",
      guests: 9,
      bedrooms: 4,
      beds: 5,
      bathrooms: 3.5,
      priceRange: "$750-1500 per night Summer",
      winterPrice: "$1200-2000 Nightly | Winter",
      holidayPrice: "$3500-5000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/golf-course-views-luxury-4-bed-whistler-village",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1493522257280258231?guests=1&adults=1&s=67&unique_share_id=d98beea7-9f12-4195-8af6-52e4aa1a94cd",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "scandinavian-mountainside-retreat-pemberton-meadows-50-acres",
      name: "Pemberton Escape | 50 Acres | Wellness & Heli Retreat",
      image: "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14319-Edit-2.jpg",
      guests: 10,
      bedrooms: 5,
      beds: 8,
      bathrooms: 5,
      priceRange: "Pricing: $30,000-35,000 per event",
      winterPrice: "Availability for Heli & Wellness Retreats coming soon",
      holidayPrice: "Includes 2 Night Accommodation",
      location: "whistler",
      link: "/listings/scandinavian-mountainside-retreat-pemberton-meadows-50-acres",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "rare-3-bedroom-whistler-village",
      name: "Rare 3-bedroom | Whistler Village | Walk to Hill",
      image: "/photos/properties/John 3-bed Granite Court/03 - 20251125 A7M4 01 A1_01852.jpg",
      guests: 8,
      bedrooms: 3,
      beds: 4,
      bathrooms: 3,
      priceRange: "$450-1450 per night Summer",
      winterPrice: "$750-1600 Nightly | Winter",
      holidayPrice: "$2000-3400 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/rare-3-bedroom-whistler-village-walk-to-hill",
      airbnbLink: "https://www.airbnb.ca/rooms/1565322561889624431?guests=1&adults=1&s=67&unique_share_id=bcb85131-d1b0-4d39-9975-7580fd94a5d9",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "ravens-nest",
      name: "Raven's Nest | Ski in Ski out | Views",
      image:
        "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05349.jpg",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 3,
      priceRange: "$2,000-$3,500 per night",
      winterPrice: "",
      holidayPrice: "$2,300-$4,000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/ravens-nest-ski-in-ski-out-views",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1300258964918876012?guests=1&adults=1&s=67&unique_share_id=41b635e9-00a9-441c-a134-056b2b3814ac",
      isPetFriendly: false,
      isSkiInSkiOut: true,
    },
    {
      id: "falcon-blueberry-drive",
      name: "Falcon | Blueberry Drive",
      image: "/photos/properties/Falcon/03 - 20250827 A7M4 01 DSC00224-Edit.jpg",
      guests: 15,
      bedrooms: 7,
      beds: 9,
      bathrooms: 3.5,
      priceRange: "Nightly Price Range: $1,300-$3,500+",
      winterPrice: "$2,000-$3,500+ Nightly | Winter",
      holidayPrice: "$4,000-$7,200+ Nightly | Christmas",
      location: "whistler",
      link: "/listings/falcon-blueberry-drive",
      airbnbLink: "",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "the-nest",
      name: "The Nest | Ski in Ski out",
      image: "/photos/properties/Wolverine Crescent/01 - 20251220 A7M4 01 A1_01116-Edit.jpg",
      guests: 10,
      bedrooms: 5,
      beds: 6,
      bathrooms: 5,
      priceRange: "Monthly Price Range: $18,000-$29,000",
      winterPrice: "90+ day minimum",
      holidayPrice: "$29,000 Monthly | Winter",
      location: "whistler",
      link: "/listings/the-nest-ski-in-ski-out",
      airbnbLink:
        "https://www.airbnb.ca/rooms/763259660349118016?guests=1&adults=1&s=67&unique_share_id=b5240c14-ecb8-4f5a-9c3c-f3861874c7e0",
      isPetFriendly: true,
      isSkiInSkiOut: true,
    },
    {
      id: "snow-pine",
      name: "Snowpine | Creekside",
      image: "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 3.5,
      priceRange: "Monthly Price Range: $10,000-$12,000",
      winterPrice: "90 night minimum",
      holidayPrice: "$30,000 - 3 months | $40,000 - 4 months",
      location: "whistler",
      link: "/listings/snow-pine",
      airbnbLink:
        "https://www.airbnb.ca/rooms/744832560480313027?guests=1&adults=1&s=67&unique_share_id=50412c76-d839-4753-bf56-19310f38a4ef",
      isPetFriendly: true,
      isSkiInSkiOut: true,
    },
    {
      id: "wedge-mountain-lodge",
      name: "Wedge Mountain Lodge & Spa",
      image:
        "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 1.jpg",
      guests: "20+6",
      bedrooms: 10,
      beds: 10,
      bathrooms: 13,
      priceRange: "$8,000-$11,500+ per night",
      winterPrice: "Request for Event & Wedding Venue Whistler Pricing",
      holidayPrice: "Request for Nightly rates",
      location: "whistler",
      link: "/listings/wedge-mountain-lodge-spa",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "luxe-cozy-3-bed-whistler-village",
      name: "Luxe Cozy 3-Bed Whistler Village",
      image:
        "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/02-1 4668 Blackcomb Way 02-Edit.jpg",
      guests: 6,
      bedrooms: 3,
      beds: 5,
      bathrooms: 3,
      priceRange: "$750-$2,200+ per night",
      winterPrice: "$750-$1,500+ Nightly | Winter",
      holidayPrice: "$1,800-$2,200+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/luxe-cozy-3-bed-whistler-village",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1249285355870765792?guests=1&adults=1&s=67&unique_share_id=0ecd2877-9bf3-4bcc-92f2-5579a0af8e7f",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },

    {
      id: "whispering-pines",
      name: "The Aspens | 2-Bed Ski in/Out",
      image: "/photos/properties/The Aspens/4800-Spearhead-Drive-1.JPG",
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      priceRange: "Nightly Price Range: $350-$1,300",
      winterPrice: "",
      holidayPrice: "",
      location: "whistler",
      link: "/listings/whispering-pines-ski-in-ski-out",
      airbnbLink:
        "https://www.airbnb.com/rooms/1072474554447345991?guests=1&adults=1&s=67&unique_share_id=e556b35c-05b5-40b6-91e1-5304ffafc23b",
      isPetFriendly: false,
      isSkiInSkiOut: true,
    },
    {
      id: "marquise-2-bed",
      name: "Marquise 2-Bed-Ski in Ski out",
      image: "/photos/properties/Marquise 2-bed/Marquise-15.jpg",
      guests: 4,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      priceRange: "Nightly Price Range: $160-450",
      winterPrice: "",
      holidayPrice: "",
      location: "whistler",
      link: "/listings/marquise-2-bed-ski-in-ski-out",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1370367404602078616?guests=1&adults=1&s=67&unique_share_id=eb381b39-e67d-44ea-9d7c-2de2e1b5fa20",
      isPetFriendly: true,
      isSkiInSkiOut: true,
    },
    {
      id: "ski-in-ski-out-walk-to-lifts-2-bed",
      name: "Le Chamois | 2 Bed | Walk to Lifts",
      image: "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-4.jpg",
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      priceRange: "Nightly Price Range: $350-$1,050",
      winterPrice: "",
      holidayPrice: "",
      location: "whistler",
      link: "/listings/ski-in-ski-out-walk-to-lifts-2-bed",
      airbnbLink: "https://www.airbnb.ca/rooms/1015303987589924725?guests=1&adults=1&s=67&unique_share_id=5e912eb5-5445-4797-81ec-df21817dd143",
      isPetFriendly: false,
      isSkiInSkiOut: true,
    },
    {
      id: "whistler-village-views-luxury-2-5-bedroom",
      name: "Whistler Village Views | Luxury 2.5 Bedroom",
      image: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-14.jpg",
      guests: 6,
      bedrooms: 2.5,
      beds: 4,
      bathrooms: 2,
      priceRange: "Nightly Price Range: $400-$1,150+",
      winterPrice: "$600-$900+ Nightly | Winter",
      holidayPrice: "$900-$1,150+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/whistler-village-views-luxury-2-5-bedroom",
      airbnbLink: "https://www.airbnb.ca/rooms/50025973?preview_for_ml=true&source_impression_id=p3_1699290307_SHcNx7EoXySmn6j5",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "luxury-3-bed-stunning-views",
      name: "Luxury 3-Bed | Stunning Views",
      image: "/optimized/luxury-3-bed-views/cover.jpg",
      guests: 6,
      bedrooms: 2.5,
      beds: 3,
      bathrooms: 2,
      priceRange: "Nightly Price Range: $400-$1,150+",
      winterPrice: "$650-$1000+ Nightly | Winter",
      holidayPrice: "$1000-$1280+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/luxury-3-bed-stunning-views",
      airbnbLink: "https://www.airbnb.ca/rooms/1461637483646115205?guests=1&adults=1&s=67&unique_share_id=9b6640b9-138d-4627-bea4-cb2155e32c72",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
   
  
    // Worldwide Properties
    {
      id: "luxe-5-bed-scandinave-retreat",
      name: "Luxe 5-BED Scandinave Retreat | Walk to Slopes",
      image: "/high-quality/scandinave-fixed/scandinave-26.jpg",
      guests: 8,
      bedrooms: 3,
      beds: 5,
      bathrooms: 3,
      priceRange: "$450-$1200+ per night Summer",
      winterPrice: "$750-$1,600+ Nightly | Winter",
      holidayPrice: "$2300-$3100+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/worldwide-listings/luxe-5-bed-scandinave-retreat",
      airbnbLink: "https://www.airbnb.ca/rooms/1313847204355627326?guests=1&adults=1&s=67&unique_share_id=507dffd6-1f84-49a3-99eb-d10f493a65a6",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "santorini-greece-villa-eclipse",
      name: "Santorini Greece - Villa Eclipse",
      image: "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(7 of 25).jpg",
      guests: 10,
      bedrooms: 5,
      bathrooms: 5,
      priceRange: "$2,500-$5,000 per night",
      winterPrice: "",
      holidayPrice: "",
      location: "Santorini, Greece",
      link: "/worldwide-listings/santorini-greece-villa-eclipse",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "villa-oineas-greece-mykonos",
      name: "Villa Oineas - Greece Mykonos",
      image: "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06907.jpg",
      guests: 12,
      bedrooms: 5,
      bathrooms: 5,
      priceRange: "€1,450-€2,550 per night",
      winterPrice: "",
      holidayPrice: "",
      location: "Mykonos, Greece",
      link: "/worldwide-listings/villa-oineas-greece-mykonos",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "helios-estate-mykonos",
      name: "Helios Estate - Mykonos",
      image: "/photos/properties/Helios Estate - Mykonos/01.jpg",
      guests: 16,
      bedrooms: 8,
      bathrooms: 9,
      priceRange: "€15,000-€26,000 per night",
      winterPrice: "",
      holidayPrice: "",
      location: "Mykonos, Greece",
      link: "/worldwide-listings/helios-estate-mykonos",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "villa-rosabella-mykonos",
      name: "Villa Rosabella | Mykonos",
      image: "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (1).jpg",
      guests: 16,
      bedrooms: 8,
      bathrooms: 8,
      priceRange: "€3,500-€5,800 per night",
      winterPrice: "",
      holidayPrice: "",
      location: "Mykonos, Greece",
      link: "/worldwide-listings/villa-rosabella-mykonos",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "super-yacht-thailand",
      name: "Super Yacht Thailand | Luxury Charter | Full Crew",
      image: "/photos/properties/Yacht Thailand Sea D/Sun Deck WEB-12.jpg",
      guests: 10,
      bedrooms: 5,
      beds: 8,
      bathrooms: 6,
      priceRange: "Weekly Rate | 170,000 - 210,000 USD",
      winterPrice: "",
      holidayPrice: "",
      location: "Phuket, Thailand",
      link: "/worldwide-listings/super-yacht-thailand",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "cotswolds-uk-soho-farm-house",
      name: "Cotswolds UK - Soho Farm House | Designer Stone Estate",
      image: "/photos/properties/Cotswolds UK - Soho Farm House/DJI_20250602090500_0519_D.jpg",
      guests: 15,
      bedrooms: 8,
      bathrooms: 5,
      priceRange: "£1,100-£2,300 per night | 3 night minimum",
      winterPrice: "",
      holidayPrice: "",
      location: "Cotswolds, United Kingdom",
      link: "/worldwide-listings/cotswolds-uk-soho-farm-house",
      airbnbLink: "https://www.airbnb.ca/rooms/1414129878809697902?guests=1&adults=1&s=67&unique_share_id=ba3bff7b-bc57-416c-bcd6-96b0943cfe51",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "mykonos-crystal-villa",
      name: "Mykonos Crystal Villa | Infinity Pool | Sea Views",
      image: "/photos/properties/Villa Aegean Mykonos Greece/Header5-TRG_5803.jpg",
      guests: 10,
      bedrooms: 5,
      bathrooms: 5,
      priceRange: "$2,500-$5,000 per night",
      winterPrice: "",
      holidayPrice: "",
      location: "Agios Lazaros, Mykonos, Greece",
      link: "/worldwide-listings/mykonos-crystal-villa",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "punta-mita---casa-juntos",
      name: "Punta Mita - Casa Juntos | Beachfront | Full Staff",
      image: "/photos/properties/Punta Mita/242608_2093 copy 2.jpg",
      guests: 12,
      bedrooms: 6,
      bathrooms: 6.5,
      priceRange: "$3,000-$7,000 per night",
      winterPrice: "",
      holidayPrice: "",
      location: "Punta Mita, Mexico",
      link: "/worldwide-listings/punta-mita---casa-juntos",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "glaciers-reach",
      name: "Glaciers Reach | Heart of Whistler Village",
      image: "/photos/properties/Glaciers Reach/01 - 20251021 MM4P 01 0021.jpg",
      guests: 5,
      bedrooms: 3,
      beds: 3,
      bathrooms: 2,
      priceRange: "$250-600 per night Summer",
      winterPrice: "$500-1200 Nightly | Winter",
      holidayPrice: "$1200-1500 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/glaciers-reach-whistler-village",
      airbnbLink: "https://www.airbnb.ca/rooms/1539363076080108525?guests=1&adults=1&s=67&unique_share_id=e234c7cf-b23b-4ce3-9c53-7dde85033c3b",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "cozy-lakefront-whistler-condo",
      name: "Cozy Lakefront Whistler Condo | Mountain View",
      image: "/photos/properties/Nick North 2-Bed/01 - 20251006 A7M4 03 A1_03279-Edit.jpg",
      guests: 7,
      bedrooms: 2,
      beds: 5,
      bathrooms: 2,
      priceRange: "$250-800 per night Summer",
      winterPrice: "$500-1300 Nightly | Winter",
      holidayPrice: "$1400-1800 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/cozy-lakefront-whistler-condo-mountain-view",
      airbnbLink: "https://www.airbnb.ca/rooms/1305524887656641858?guests=1&adults=1&s=67&unique_share_id=23663c37-e33a-445b-a53c-6f927f30d084",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "hood-river-luxury-home",
      name: "Hood River Luxury Home",
      image: "/photos/properties/hood-river-luxury-home/Interior 3.jpg",
      guests: 10,
      bedrooms: 4,
      beds: 4,
      bathrooms: 3.5,
      priceRange: "$800-$1,200 per night",
      winterPrice: "",
      holidayPrice: "",
      location: "Hood River, Oregon",
      link: "/worldwide-listings/hood-river-luxury-home",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "whistler-village-penthouse",
      name: "Whistler Village | Penthouse | 4-Bed",
      image: "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-7.jpg",
      guests: 7,
      bedrooms: 2,
      beds: 4,
      bathrooms: 2,
      priceRange: "$450-$1,700 per night",
      winterPrice: "$650-$1,700 Nightly | Winter",
      holidayPrice: "$2,000-$2,700 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/whistler-village-penthouse",
      airbnbLink: "https://www.airbnb.ca/rooms/1471251206220643818?guests=1&adults=1&s=67&unique_share_id=0ec28644-49fa-4b63-9276-7e5f5c6a1153",
      isPetFriendly: false,
      isSkiInSkiOut: true,
    },
    
    // Vancouver Properties
    {
      id: "vancouver-house-corner",
      name: "Vancouver House Corner Unit | 30th Floor",
      image: "/photos/properties/vancouver-house/645adc4aca79d22167763483_Vancouver_House-03.jpg",
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      priceRange: "$12,000 per month",
      winterPrice: "3 month minimum",
      holidayPrice: "",
      location: "Vancouver, BC",
      link: "/vancouver-listings/vancouver-house-corner-unit-30th-floor",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "squamish-retreat",
      name: "Squamish Retreat With The Best View!",
      image: "/photos/properties/Squamish/16 - 20251104 A7M4 01 A1_06655.jpg",
      guests: 8,
      bedrooms: 3,
      beds: 4,
      bathrooms: 3,
      priceRange: "$500-1500 per night Summer",
      winterPrice: "$500-1500 Nightly | Winter",
      holidayPrice: "$2200-2500+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/squamish-retreat-with-the-best-view",
      airbnbLink: "https://www.airbnb.ca/rooms/1047983607752975484?guests=1&adults=1&s=67&unique_share_id=1e623ba5-133a-4c05-b1c9-4ac721a40a6d",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "whistler-village-penthouse-3-bdr",
      name: "Whistler Village PentHouse | 3 BDR | Walk to Ski",
      image: "/optimized/303-Tyndall-Lodge/new-cover.jpg",
      guests: 8,
      bedrooms: 3,
      beds: 5,
      bathrooms: 2,
      priceRange: "$500-1200 in summer",
      winterPrice: "$750-1500 in winter",
      holidayPrice: "$2500-3500+ for Christmas/NYE",
      location: "whistler",
      link: "/listings/whistler-village-penthouse-3-bdr-walk-to-ski",
      airbnbLink: "https://www.airbnb.ca/rooms/1595039212030139605?guests=1&adults=1&s=67&unique_share_id=dc75c08b-e1ae-46ae-8b17-0587b742fa45",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "northlands-walk-to-village-slopes-luxury-4-bed",
      name: "Northlands Walk to village/slopes | Luxury 4-bed",
      image: "/photos/properties/Northlands Symphony 29/01 - 20251128 A7M4 02 A1_02882_.jpg",
      guests: 6,
      bedrooms: 2,
      beds: 4,
      bathrooms: 3,
      priceRange: "$500-1200 in summer",
      winterPrice: "$750-1500 in winter",
      holidayPrice: "$2500-3500+ for Christmas/NYE",
      location: "whistler",
      link: "/listings/northlands-walk-to-village-slopes-luxury-4-bed",
      airbnbLink: "https://www.airbnb.ca/rooms/1566952897757488737?guests=1&adults=1&s=67&unique_share_id=70d8a9c5-be29-49cb-a1de-03c1e0ec667b",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "hotel-booking-assistance",
      name: "Hotel Booking Assistance & Concierge Services | Four Seasons, Fairmont, The Westin",
      image: "/thumbnails/Four Seasons Resort and Residences Whistler_885.webp",
      guests: "2-25+",
      bedrooms: null,
      beds: null,
      bathrooms: null,
      priceRange: "Subject to request, 5-night minimum stays, 2+ bedrooms",
      winterPrice: "$200 USD per hour concierge services",
      holidayPrice: "No charge for booking, only for optional concierge services",
      location: "whistler",
      link: "/listings/hotel-booking-assistance",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    }
  ];

  // Update filtering logic to match properties page
  const filteredListings = allListings.filter((listing) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "pets") return listing.isPetFriendly === true;
    if (activeFilter === "skiinout") return listing.isSkiInSkiOut === true;
    if (activeFilter === "whistler") return listing.location === "whistler";
    if (activeFilter === "worldwide") return listing.location !== "whistler";
    return listing.location === activeFilter;
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
          content="https://acehost.ca/photos/homepage/WhistlerVacationRental.jpg"
        />
        <meta property="og:url" content="https://acehost.ca" />
        <link rel="canonical" href="https://acehost.ca" />
        <link rel="icon" href="/favicon.ico" />

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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AceHost Whistler",
              "url": "https://acehost.ca",
              "logo": "https://acehost.ca/logonobackrgound.png",
              "sameAs": [
                "https://www.instagram.com/acehost_whistler/",
                "https://www.youtube.com/@acehost_Whistler/videos"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://acehost.ca/properties?search={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Luxury Vacation Rental Properties",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Chalet La Forja | Kadenwood | Private Butler",
                      "url": "https://acehost.ca/listings/chalet-la-forja-kadenwood"
                    }
                  }
                ]
              },
              "department": [
                {
                  "@type": "Organization",
                  "name": "View Luxury Rental Properties",
                  "url": "https://acehost.ca/properties"
                },
                {
                  "@type": "Organization",
                  "name": "Our Story",
                  "url": "https://acehost.ca/our-story"
                },
                {
                  "@type": "Organization",
                  "name": "Contact Us",
                  "url": "https://acehost.ca/contact"
                },
                {
                  "@type": "Organization",
                  "name": "Property Management",
                  "url": "https://acehost.ca/list-property"
                },
                {
                  "@type": "Organization",
                  "name": "AceHost Whistler Luxury Rentals",
                  "url": "https://acehost.ca/properties"
                },
                {
                  "@type": "Organization",
                  "name": "Blog",
                  "url": "https://acehost.ca/blogs"
                },
                {
                  "@type": "Organization",
                  "name": "WorldWide Listings",
                  "url": "https://acehost.ca/worldwide-listings"
                }
              ]
            })
          }}
        />

        {/* Google Fonts preconnect for performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Optimize core web vitals */}
        <link rel="preload" href="/logonobackrgound.png" as="image" />
        <link 
          rel="preload" 
          href="/photos/homepage/WhistlerVacationRental.jpg" 
          as="image" 
          media="(min-width: 768px)" 
          fetchPriority="high" 
        />
        <link 
          rel="preload" 
          href="/photos/homepage/ViewOurCollection.jpg" 
          as="image" 
          media="(min-width: 768px)" 
          fetchPriority="high"
        />
      </Head>

      <HomePageLayout>
        <div className="overflow-x-hidden max-w-full">
          {/* Hero Video - Full width, custom controls */}
          <HeroVideoPlayer />

          {/* Content Section Below Hero - Ivory Homes style */}
          <section className="relative bg-cream py-20 md:py-28">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-extralight text-charcoal-dark mb-6 leading-tight tracking-magazine uppercase text-center max-w-3xl mx-auto">
                Temporary rental of luxury chalets and homes
              </h1>
              <p className="text-base md:text-lg text-charcoal-muted mb-8 max-w-2xl mx-auto font-light leading-relaxed text-center">
                We specialize in the short-term rental of luxury properties in Whistler.
                A curated selection of secluded retreats in the most exclusive mountain
                enclaves—where alpine elegance meets intimate luxury. Each sanctuary
                is meticulously maintained for discerning guests who seek an
                extraordinary escape beyond the ordinary.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/properties"
                  className="inline-block bg-charcoal text-cream px-10 py-4 hover:bg-charcoal-light transition-colors text-sm font-normal tracking-luxury uppercase"
                >
                  Explore Our Collection
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-charcoal font-normal tracking-luxury uppercase text-sm border-b border-charcoal hover:border-charcoal-light hover:text-charcoal-light transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  Contact
                </Link>
              </div>
            </div>
          </section>

          {/* Intro Section - Discover our portfolio */}
          <section className="py-16 md:py-24 bg-cream-50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-extralight text-charcoal-dark mb-4 tracking-wide-luxury uppercase">
                Where the mountains hold their secrets
              </h2>
              <p className="text-xl md:text-2xl font-display font-light text-charcoal-muted mb-2 tracking-luxury uppercase">
                Discover
              </p>
              <p className="text-lg text-charcoal-muted font-light max-w-2xl mx-auto">
                our portfolio of refined retreats in Whistler&apos;s most coveted
                enclaves—Kadenwood, Blueberry, the Village—each chosen for those
                who appreciate the extraordinary.
              </p>
            </div>
          </section>

          {/* Services Section - Luxury magazine editorial style */}
          <section className="py-28 md:py-36 bg-cream">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-display font-extralight text-charcoal-dark tracking-magazine uppercase text-center mb-20">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                {sections.map((section, index) => (
                  <article key={index} className="group">
                    <Link href={index === 0 ? "/properties" : index === 1 ? "/list-property" : "/concierge-service"} className="block">
                      <div className="aspect-[3/4] relative overflow-hidden mb-8">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={index === 0}
                          quality={90}
                          loading={index === 0 ? "eager" : "lazy"}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEhAI/w5RW4AAAAABJRU5ErkJggg=="
                        />
                      </div>
                    </Link>
                    <h3 className="text-xl md:text-2xl font-display font-extralight mb-5 text-charcoal-dark tracking-magazine uppercase">
                      {section.title}
                    </h3>
                    <p className="text-charcoal-muted text-[15px] md:text-base font-light leading-[1.8] mb-8">
                      {section.description}
                    </p>
                    <Link
                      href={index === 0 ? "/properties" : index === 1 ? "/list-property" : "/concierge-service"}
                      className="inline-flex items-center gap-2 font-display font-extralight text-charcoal-dark tracking-magazine uppercase text-sm border-b border-charcoal/40 pb-0.5 hover:border-charcoal transition-colors"
                    >
                      {section.linkText}
                      <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Properties - Our highlights style */}
          <section className="py-24 md:py-32 bg-cream-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-20 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-extralight mb-8 text-charcoal-dark tracking-wide-luxury uppercase">
                  Our Highlights
                </h2>
                {/* Property Filters */}
                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-16">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-8 py-3 text-sm font-normal tracking-luxury uppercase transition-all duration-300 ${activeFilter === "all" ? "bg-charcoal text-cream" : "bg-cream-50 text-charcoal border border-cream-300 hover:border-charcoal/20"}`}
                >
                  All Properties
                </button>
                <button
                  onClick={() => setActiveFilter("whistler")}
                  className={`px-8 py-3 text-sm font-normal tracking-luxury uppercase transition-all duration-300 ${activeFilter === "whistler" ? "bg-charcoal text-cream" : "bg-cream-50 text-charcoal border border-cream-300 hover:border-charcoal/20"}`}
                >
                  Whistler
                </button>
                <button
                  onClick={() => setActiveFilter("worldwide")}
                  className={`px-8 py-3 text-sm font-normal tracking-luxury uppercase transition-all duration-300 ${activeFilter === "worldwide" ? "bg-charcoal text-cream" : "bg-cream-50 text-charcoal border border-cream-300 hover:border-charcoal/20"}`}
                >
                  Worldwide
                </button>
                <button
                  onClick={() => setActiveFilter("pets")}
                  className={`px-8 py-3 text-sm font-normal tracking-luxury uppercase transition-all duration-300 ${activeFilter === "pets" ? "bg-charcoal text-cream" : "bg-cream-50 text-charcoal border border-cream-300 hover:border-charcoal/20"}`}
                >
                  Pet Friendly
                </button>
                <button
                  onClick={() => setActiveFilter("skiinout")}
                  className={`px-8 py-3 text-sm font-normal tracking-luxury uppercase transition-all duration-300 ${activeFilter === "skiinout" ? "bg-charcoal text-cream" : "bg-cream-50 text-charcoal border border-cream-300 hover:border-charcoal/20"}`}
                >
                  Ski In/Out
                </button>
              </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                {filteredListings.map((property, index) => (
                  <div key={property.id} className="col-span-1">
                    {renderPropertyCard(property, index)}
                  </div>
                ))}
              </div>
              <div className="mt-16 text-center">
                <Link
                  href="/properties"
                  className="inline-block bg-charcoal text-cream px-12 py-4 hover:bg-charcoal-light transition-colors text-sm font-normal tracking-luxury uppercase"
                >
                  See More
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 md:py-32 bg-cream-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-display font-extralight mb-12 text-charcoal-dark tracking-wide-luxury uppercase">
                What Our Guests Say
              </h2>
              <Testimonials />
            </div>
          </section>

          {/* FAQ Section - Accordion style */}
          <section className="py-24 md:py-32 bg-cream">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-display font-extralight mb-16 text-charcoal-dark tracking-wide-luxury uppercase text-center">
                Frequently Asked Questions
              </h2>
              <FAQAccordion
                items={faqItems}
                expandedIndex={expandedFaq}
                onToggle={(i) => setExpandedFaq(i === -1 ? null : i)}
              />
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-24 md:py-32 bg-cream-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-display font-extralight mb-6 text-charcoal-dark tracking-wide-luxury uppercase">
                Contact Us
              </h2>
              <p className="text-base text-charcoal-muted mb-10 font-light max-w-xl">
                Have a question or need assistance? We're here to help.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-cream px-10 py-4 hover:bg-charcoal-light transition-colors text-sm font-normal tracking-luxury uppercase"
              >
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
      </HomePageLayout>
    </>
  );
};

export default Home;