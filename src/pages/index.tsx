import React, { useState } from "react";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
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
    logo: "https://acehost.ca/logo.png",
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
    
    return (
      <div
        key={property.id}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
      >
        <div className="relative h-64">
          <Link href={cardLink}>
            <Image
              src={property.image}
              alt={`${property.title || property.name} - Luxury ${property.location === 'whistler' ? 'Whistler' : property.location === 'vancouver' ? 'Vancouver' : 'Worldwide'} vacation rental with ${property.bedrooms} bedroom${property.bedrooms !== 1 ? 's' : ''}, accommodating up to ${property.guests} guest${property.guests !== 1 ? 's' : ''}`}
              fill
              className="object-cover cursor-pointer"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading={index < 6 ? "eager" : "lazy"}
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEhAI/w5RW4AAAAABJRU5ErkJggg=="
              priority={index < 3}
            />
          </Link>
          {property.isPetFriendly && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-md z-10">
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
        <div className="p-6">
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
          <h3 className="text-xl font-medium mb-4 text-gray-900">
            {property.name}
          </h3>

          {/* Pricing information */}
          <div className="space-y-2 mb-6">
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
          <Link
            href={cardLink}
            className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
          >
            <span>View Property</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    );
  };

  // Define all property listings
  const allListings = [
    {
      id: "altitude-retreat",
      name: "Altitude Retreat | Kadenwood | Private Butler",
      image: "/photos/properties/Altitude New Photos Best/hero2.jpeg",
      guests: 18,
      bedrooms: 7,
      beds: 9,
      bathrooms: 5.5,
      priceRange: "$7,500-$10,000+ per night",
      winterPrice: "$8,000-$10,000+ Nightly | Winter",
      holidayPrice: "$14,500-$19,000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/altitude-retreat-kadenwood",
      airbnbLink:
        "https://www.airbnb.ca/rooms/771060491470943213?guests=1&adults=1&s=67&unique_share_id=a8ff5a7a-4bda-4cc7-aaad-e99b178f3a5d",
      isPetFriendly: false,
      isSkiInSkiOut: true,
    },
    {
      id: "two-cedars",
      name: "Two Cedars | Kadenwood | Private Butler",
      image: "/photos/properties/Two Cedars New/OSA_AncientCW1248.jpg",
      guests: 17,
      bedrooms: 7,
      beds: 12,
      bathrooms: 8.5,
      priceRange: "$6,500-$9,500+ per night",
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
      id: "slopeside-villa",
      name: "Slope Slide Chalet | Kadenwood",
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
      image: "/photos/properties/Falcon/15-3595 Falcon Cres-15-.jpg",
      guests: 15,
      bedrooms: 7,
      beds: 9,
      bathrooms: 3.5,
      priceRange: "Nightly Price Range: $1,300-$3,500+",
      winterPrice: "$2,000-$3,500+ Nightly | Winter",
      holidayPrice: "$4,000-$7,200+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/falcon-blueberry-drive",
      airbnbLink: "",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "the-nest",
      name: "The Nest | Ski in Ski out",
      image: "/photos/properties/Wolverine Crescent/06-2627 Wolverine-06.jpg",
      guests: 8,
      bedrooms: 5,
      beds: 6,
      bathrooms: 5,
      priceRange: "Monthly Price Range: $18,000-$29,000",
      winterPrice: "90+ day minimum",
      holidayPrice: "$29,000 Monthly | Winter (Booked until June 15, 2025)",
      location: "whistler",
      link: "/listings/the-nest-ski-in-ski-out",
      airbnbLink:
        "https://www.airbnb.ca/rooms/763259660349118016?guests=1&adults=1&s=67&unique_share_id=d18218f6-da74-4763-a199-d5a1dc8c85ff&source_impression_id=p3_1744822209_P3U3_5CgXenHmYC6",
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
      guests: 8,
      bedrooms: 3,
      beds: 5,
      bathrooms: 3,
      priceRange: "$750-$2,200+ per night",
      winterPrice: "$750-$1,500+ Nightly | Winter",
      holidayPrice: "$1,800-$2,200+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/luxe-cozy-3-bed-whistler-village",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1249285355870765792?guests=1&adults=1&s=67&unique_share_id=5fc53f3d-300c-4b8b-aee5-d9f5b263ae3c",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "dream-log-chalet",
      name: "Dream Log Chalet | 5-Bed | 4-Bath | Creekside",
      image:
        "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00333.jpg",
      guests: 11,
      bedrooms: 5,
      beds: 5,
      bathrooms: 4,
      priceRange: "6-12 Month Minimum (booked 2025)",
      winterPrice: "90 Nights: $20,000 per month",
      holidayPrice: "6-months Winter: $17,000 monthly | 12+ months: $14,000 monthly",
      location: "whistler",
      link: "/listings/dream-log-chalet-5-bedroom-4-bath-creekside",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "whispering-pines",
      name: "The Aspens | 1 Bed | Ski-in/Ski-out",
      image: "/photos/properties/The Aspens/4800-Spearhead-Drive-3.JPG",
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
   
  
    // Worldwide Properties
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
      image: "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (1).jpg",
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
      id: "villa-aegean-greece",
      name: "Villa Aegean Mykonos Greece",
      image:
        "/photos/properties/Villa Aegean Mykonos Greece/Header5-TRG_5803.jpg",
      guests: 14,
      bedrooms: 7,
      beds: 10,
      bathrooms: 7,
      priceRange: "$2,500-$5,000 per night",
      winterPrice: "",
      holidayPrice: "",
      location: "worldwide",
      link: "/worldwide-listings/mykonos-crystal-villa",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "punta-mita",
      name: "Punta Mita Luxury Villa",
      image: "/photos/properties/Punta Mita/242608_2093 copy 2.jpg",
      guests: 16,
      bedrooms: 8,
      beds: 10,
      bathrooms: 8,
      priceRange: "$3,500-$5,000 USD per night",
      winterPrice: "",
      holidayPrice: "",
      location: "worldwide",
      link: "/worldwide-listings/punta-mita---casa-juntos",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    {
      id: "hood-river-luxury-home",
      name: "Hood River Luxury Home",
      image: "/photos/properties/hood-river-luxury-home/Interior 3.jpg",
      guests: 10,
      bedrooms: 4,
      beds: 7,
      bathrooms: 2.5,
      priceRange: "Nightly Price Range: $800-$1,200 USD",
      winterPrice: "",
      holidayPrice: "",
      location: "worldwide",
      link: "/worldwide-listings/hood-river-luxury-home",
      contactLink: "/contact",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    
    // Vancouver Properties
    {
      id: "vancouver-house",
      name: "The Vancouver House, Corner Unit | 30th Floor",
      image:
        "/photos/properties/vancouver-house/645adc4a44759e465d596517_Vancouver_House-23.jpg",
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      priceRange: "Nightly Price Range: $400-$700",
      winterPrice: "",
      holidayPrice: "",
      location: "vancouver",
      link: "/vancouver-listings/vancouver-house-corner-unit-30th-floor",
      isPetFriendly: false,
      isSkiInSkiOut: false,
    },
    
  ];

  // Update filtering logic to match properties page
  const filteredListings = allListings.filter((listing) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "pets") return listing.isPetFriendly === true;
    if (activeFilter === "skiinout") return listing.isSkiInSkiOut === true;
    if (activeFilter === "whistler") return listing.location === "whistler";
    if (activeFilter === "worldwide") return listing.location === "worldwide" || listing.location === "vancouver";
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
              "logo": "https://acehost.ca/logo.png",
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
        <link rel="preload" href="/logo.png" as="image" />
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

      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden max-w-full">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="relative bg-white pt-6 pb-0 md:py-6">
          <div className="flex flex-col md:flex-row w-full max-w-full mx-auto">
            <div className="md:w-[40%] lg:w-[40%] px-4 sm:px-6 lg:px-8 md:py-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Luxury Vacation
                <br />
                Rental Properties in
                <br />
                Whistler Canada |<br />
                Property
                <br />
                Management & VIP
                <br />
                Concierge Services
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl">
                AceHost is a leading Whistler luxury property management
                company. We proudly offer an array of magnificent vacation
                rental homes in Whistler, British Columbia. Offering a seamless
                experience for property owners looking to rent out their homes
                and earn, while offering guests the perfect vacation in a
                luxurious property. Explore our exclusive collection of luxury
                ski chalets, and ask us how we can make your next stay
                exceptional!
              </p>
              <Link
                href="/properties"
                className="inline-block bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
              >
                View Luxury Rental Properties
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:w-[58%] lg:w-[58%] flex justify-center md:justify-normal md:items-center px-1 md:px-0 md:pr-4">
              <div className="w-[98%] md:w-[95%] overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1053582724?title=0&byline=0&portrait=0&autoplay=0&loop=1&background=0"
                  className="w-full aspect-video"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="AceHost Whistler Concierge Experience"
                  loading="lazy"
                  style={{ display: 'block' }}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
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
                        priority={index === 0}
                        quality={85}
                        loading={index === 0 ? "eager" : "lazy"}
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
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
                  All Properties
                </button>
                <button
                  onClick={() => setActiveFilter("whistler")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "whistler" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Whistler
                </button>
                <button
                  onClick={() => setActiveFilter("worldwide")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "worldwide" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Worldwide
                </button>
                <button
                  onClick={() => setActiveFilter("pets")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "pets" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Pet Friendly
                </button>
                <button
                  onClick={() => setActiveFilter("skiinout")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "skiinout" ? "bg-black text-white shadow-md" : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"}`}
                >
                  Ski in Ski out
                </button>
              </div>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredListings.map((property, index) => renderPropertyCard(property, index))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-light mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our luxury vacation
                rentals in Whistler, British Columbia.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-base font-medium text-gray-900 text-left">
                      {item.question}
                    </h3>
                    <span className="text-2xl text-gray-400">
                      {expandedFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white">
                      <p className="text-sm text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
              >
                <span>Have more questions? Contact us</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Call to Action Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-light mb-6">
              Ready to Experience Whistler in Luxury?
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-8">
              Discover our collection of premium vacation rentals and elevate
              your Whistler experience. Our team is ready to assist you in
              finding the perfect accommodation for your next mountain getaway.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/properties"
                className="inline-block bg-white text-black px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
              >
                Browse Properties
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-base font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default Home;
