import React, { useState, useEffect, useMemo } from "react";
import {
  getPropertyAirbnbLink,
  shouldUseContactForBooking,
} from "@/data/propertyAirbnbLinks";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronRight,
  Users,
  Bed,
  Bath,
  MapPin,
  Search,
  ArrowRight,
  X,
  Filter,
  Coffee,
  Wifi,
  Car,
  ChevronLeft,
  Check,
} from "lucide-react";
import Footer from "@/components/Footer";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import {
  propertyCategories,
  getPropertyType,
  type PropertyFeature,
  type PropertyCategory,
} from "@/data/properties/catalog";

export default function Properties() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { category: queryCategoryId } = router.query;
  const [activeCategory, setActiveCategory] = useState<string>("whistler");
  const [filters, setFilters] = useState({
    minBedrooms: 0,
    maxBedrooms: 20,
    minGuests: 0,
    maxGuests: 50,
    amenities: [] as string[],
    petFriendly: false,
    skiInSkiOut: false
  });
  const [showFilters, setShowFilters] = useState(false);

  // Structured data for SEO
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [] as Array<{
        "@type": string;
        position: number;
        item: {
          "@type": string;
          name: string;
          image: string;
          description: string;
          accommodationCategory: string;
          numberOfRooms: number | null;
          amenityFeature: Array<{
            "@type": string;
            name: string;
          }>;
          address: {
            "@type": string;
            addressLocality: string;
          };
          offers?: {
            "@type": string;
            priceCurrency: string;
            priceValidUntil: string;
            url: string;
            availability: string;
          };
          aggregateRating?: {
            "@type": string;
            ratingValue: number;
            reviewCount: number;
          };
        };
      }>,
      numberOfItems: 0,
    }),
    []
  );


  // Update active category based on URL query parameter
  useEffect(() => {
    // Set category from query parameter if available, otherwise default to "whistler"
    if (queryCategoryId && typeof queryCategoryId === "string") {
      setActiveCategory(queryCategoryId);
    } else {
      setActiveCategory("whistler");
    }
  }, [queryCategoryId]);

  // Filter the properties for display
  const displayProperties = useMemo(() => {
    const broadCategory = ["townhomes", "condos", "homes", "pets", "skiinout"].includes(activeCategory);
    const baseCategories = broadCategory
      ? propertyCategories
      : propertyCategories.filter(
          (category) => activeCategory === "all" || category.id === activeCategory
        );

    return baseCategories.map((category) => {
    const filteredProperties = category.properties.filter((property) => {
          // Apply all filters
          const bedroomsMatch = property.bedrooms === null || (typeof property.bedrooms === 'number' && property.bedrooms >= filters.minBedrooms && property.bedrooms <= filters.maxBedrooms);
          const guestsMatch = typeof property.guests === 'string' || (typeof property.guests === 'number' && property.guests >= filters.minGuests && property.guests <= filters.maxGuests);
          const petFriendlyMatch = !filters.petFriendly || property.isPetFriendly;
          const skiInSkiOutMatch = !filters.skiInSkiOut || property.isSkiInSkiOut;
          const propertyLocation = property.location.toLowerCase();
          const isWorldwideProperty =
            !!property.country ||
            (!propertyLocation.includes("whistler") &&
              !propertyLocation.includes("pemberton") &&
              !propertyLocation.includes("squamish") &&
              property.location !== "whistler");
          const propertyType = getPropertyType(property);
          const quickCategoryMatch =
            activeCategory === "pets"
              ? property.isPetFriendly
              : activeCategory === "skiinout"
              ? property.isSkiInSkiOut
              : true;
          const typeMatch =
            activeCategory === "townhomes"
              ? !isWorldwideProperty && propertyType === "townhome"
              : activeCategory === "condos"
              ? !isWorldwideProperty && propertyType === "condo"
              : activeCategory === "homes"
              ? !isWorldwideProperty && propertyType === "home"
              : true;
          
          // Location filtering - ensure properties with non-Whistler locations only appear in worldwide section
          const locationMatch = 
            broadCategory ||
            (category.id === "whistler" && (
              !property.country && 
              (property.location.includes("Whistler") || 
               property.location.includes("Pemberton") || 
               property.location.includes("Squamish") || 
               property.location === "whistler")
            )) ||
            (category.id === "worldwide" && (
              property.country || 
              (!property.location.includes("Whistler") && 
               !property.location.includes("Pemberton") && 
               !property.location.includes("Squamish") && 
               property.location !== "whistler")
            ));
          
          const amenitiesMatch =
            filters.amenities.length === 0 ||
                filters.amenities.every(amenity => 
                  property.features.some(feature => 
                feature.toLowerCase().includes(amenity.toLowerCase())
              )
            );

          return bedroomsMatch && guestsMatch && petFriendlyMatch && skiInSkiOutMatch && amenitiesMatch && locationMatch && typeMatch && quickCategoryMatch;
    });

    return { ...category, properties: filteredProperties };
  });
  }, [propertyCategories, activeCategory, filters]);

  // Populate structured data with filtered properties for SEO
  useEffect(() => {
    const allProperties = displayProperties.flatMap(
      (category) => category.properties
    );

    structuredData.numberOfItems = allProperties.length;
    structuredData.itemListElement = allProperties.map((property, index) => {
      const propertyUrl = property.link
        ? `https://acehost.ca${property.link}`
        : `https://acehost.ca/listings/${property.id}`;

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Accommodation",
          name: property.name,
          image: property.images[0],
          description: property.description,
          accommodationCategory: "Vacation Rental",
          numberOfRooms: property.bedrooms,
          amenityFeature: property.features.map((feature) => ({
            "@type": "LocationFeatureSpecification",
            name: feature,
          })),
          address: {
            "@type": "PostalAddress",
            addressLocality: property.location,
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "CAD",
            priceValidUntil: new Date(
              new Date().setFullYear(new Date().getFullYear() + 1)
            )
              .toISOString()
              .split("T")[0],
            url: propertyUrl,
            availability: "https://schema.org/InStock",
          },
        },
      };
    });
  }, [displayProperties, structuredData, propertyCategories]);

  // Add/remove amenity filter
  const toggleAmenityFilter = (amenity: string) => {
    setFilters((prev) => {
      if (prev.amenities.includes(amenity)) {
        return {
          ...prev,
          amenities: prev.amenities.filter((a) => a !== amenity),
        };
      } else {
        return { ...prev, amenities: [...prev.amenities, amenity] };
      }
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      minBedrooms: 0,
      maxBedrooms: 20,
      minGuests: 0,
      maxGuests: 50,
      amenities: [],
      petFriendly: false,
      skiInSkiOut: false
    });
  };

  // Common amenities for filter options
  const commonAmenities = [
    "Hot Tub",
    "Pool",
    "Sauna",
    "Ski-In/Ski-Out",
    "Mountain Views",
    "Private Butler",
    "Pet Friendly",
  ];

  // Hero section update
  const Hero = () => {
    return (
      <div className="relative h-80 lg:h-96 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url(/photos/homepage/mountainview.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl mb-4">
            Luxury Vacation Rental Properties in Whistler, Canada
          </h1>
          <p className="text-white/90 max-w-xl text-lg md:text-xl">
            Ski-in/Ski-out Chalets, 7+ Bedroom Villas, and Exclusive <Link href="/concierge-service" className="text-white underline">Concierge Services</Link>
          </p>
        </div>
      </div>
    );
  };

  // PropertyCard with regular img tag - updated to match home page style
  const PropertyCard = ({ property }: { property: PropertyFeature }) => {
    const getPropertyUrl = (property: PropertyFeature): string => {
      return property.link
        ? property.link
        : property.id === "altitude-retreat"
        ? "/listings/altitude-retreat-kadenwood"
        : property.id === "two-cedars"
        ? "/listings/two-cedars-kadenwood"
        : property.id === "chalet-la-forja"
        ? "/listings/chalet-la-forja-kadenwood"
        : property.id === "slopeside-villa"
        ? "/listings/slopeside-villa-kadenwood"
        : property.id === "panoramic-estate"
        ? "/listings/panoramic-estate-kadenwood"
        : property.id === "heron-views-whistler"
        ? "/listings/heron-views-whistler-village"
        : property.id === "ravens-nest"
        ? "/listings/ravens-nest-ski-in-ski-out-views"
        : property.id === "falcon-blueberry-drive"
        ? "/listings/falcon-blueberry-drive"
        : property.id === "snow-pine"
        ? "/listings/snow-pine"
        : property.id === "wedge-mountain-lodge-spa"
        ? "/listings/wedge-mountain-lodge-spa"
        : property.id === "luxe-cozy-3-bed-whistler-village"
        ? "/listings/luxe-cozy-3-bed-whistler-village"
        : property.id === "dream-log-chalet-5-bedroom-4-bath-creekside"
        ? "/listings/dream-log-chalet-5-bedroom-4-bath-creekside"
        : property.id === "the-nest"
        ? "/listings/the-nest-ski-in-ski-out"
        : property.id === "whispering-pines"
        ? "/listings/whispering-pines-ski-in-ski-out"
        : property.id === "whistler-village-views"
        ? "/listings/whistler-village-views-luxury-2-5-bedroom"
        : property.id === "whistler-village-views-luxury-2-5-bedroom"
        ? "/listings/whistler-village-views-luxury-2-5-bedroom"
        : property.id === "marquise-2-bed"
        ? "/listings/marquise-2-bed-ski-in-ski-out"
        : property.id === "ski-in-ski-out-walk-to-lifts-2-bed"
        ? "/listings/ski-in-ski-out-walk-to-lifts-2-bed"
        : property.id === "scandinavian-mountainside-retreat-pemberton-meadows-50-acres"
        ? "/listings/scandinavian-mountainside-retreat-pemberton-meadows-50-acres"
        : property.id === "vancouver-house-corner"
        ? "/vancouver-listings/vancouver-house-corner-unit-30th-floor"
        : property.id === "santorini-greece-villa-eclipse"
        ? "/worldwide-listings/santorini-greece-villa-eclipse"
        : property.id === "villa-oineas-greece-mykonos"
        ? "/worldwide-listings/villa-oineas-greece-mykonos"
        : property.id === "yacht-thailand" 
        ? "/worldwide-listings/super-yacht-thailand"
        : property.id === "villa-aegean-greece" 
        ? "/worldwide-listings/mykonos-crystal-villa"
        : property.id === "punta-mita"
        ? "/worldwide-listings/punta-mita---casa-juntos"
        : property.id === "hood-river-luxury-home"
        ? "/worldwide-listings/hood-river-luxury-home"
        : `/listings/${property.id}`;
    };

    const propertyUrl = getPropertyUrl(property);

    const airbnbLink = getPropertyAirbnbLink(
      property.id,
      property.airbnbLink
    );
    const useContact = shouldUseContactForBooking(
      property.id,
      property.contactLink,
      property.airbnbLink
    );

    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full">
        <div className="relative h-64 sm:h-72 overflow-hidden">
          {/* Pet Friendly Badge */}
          {property.isPetFriendly && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-md z-10">
              Pet Friendly
            </div>
          )}
          
          <Link href={propertyUrl}>
            <div className="relative w-full h-full">
              <Image
                src={property.images[0]}
                alt={`${property.name} - Luxury ${property.location === 'whistler' ? 'Whistler' : property.location === 'vancouver' ? 'Vancouver' : 'Worldwide'} vacation rental with ${property.bedrooms} bedrooms, accommodating up to ${property.guests} guests`}
                fill
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
            </div>
          </Link>

          {/* Book Now Button in bottom-right corner */}
          <div className="absolute bottom-4 right-4 z-10">
            {airbnbLink && !useContact ? (
              <a
                href={airbnbLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
              >
                Book Now
              </a>
            ) : useContact ? (
              <Link
                href={property.contactLink || "/contact"}
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Contact Us
              </Link>
            ) : (
              <Link
                href={propertyUrl}
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Book Now
              </Link>
            )}
          </div>
        </div>

        <div className="p-6">
          {/* Property details */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center text-xs bg-gray-900 text-white px-3 py-1 rounded-md">
              <Users className="w-3 h-3 mr-1" /> {property.guests} {property.guests === 1 ? "Guest" : "Guests"}
            </div>
            <div className="flex items-center text-xs bg-gray-200 text-gray-900 px-3 py-1 rounded-md">
              <Bed className="w-3 h-3 mr-1" /> {property.bedrooms} {property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
            </div>
            <div className="flex items-center text-xs bg-gray-200 text-gray-900 px-3 py-1 rounded-md">
              <Bath className="w-3 h-3 mr-1" /> {property.bathrooms} {property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
            </div>
          </div>

          {/* Property name */}
          <h3 className={`text-xl font-medium mb-2 text-gray-900 ${property.id === "hotel-booking-assistance" ? "" : "line-clamp-2"}`}>
            {property.name}
          </h3>

          {/* Location */}
          <p className="flex items-center text-sm text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </p>

          {/* Price range */}
          <div className="space-y-2 mb-4">
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
            href={propertyUrl}
            className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
          >
            <span>View Property</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    );
  };

  // Update the category tabs section
  const CategoryTabs = () => (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4 justify-center text-lg">
        <button
          onClick={() => setActiveCategory("whistler")}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeCategory === "whistler"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Whistler Properties
        </button>
        <button
          onClick={() => setActiveCategory("worldwide")}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeCategory === "worldwide"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Worldwide
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Luxury Vacation Rentals in Whistler | ACE HOST</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Browse our exclusive collection of luxury vacation rentals in Whistler, BC. Ski-in/ski-out chalets, premium condos, and spectacular mountain homes available."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://acehost.ca/properties" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="bg-[#f5f5f7] overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Text Content Section - Refined layout with better spacing */}
              <div className="md:col-span-5 p-6 md:p-10 lg:p-16 xl:p-16 flex items-center">
                <div className="w-full">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight leading-[1.1]">
                    Luxury Vacation Rental Properties in Whistler, Canada
              </h1>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-8 text-gray-700 tracking-tight">
                    Ski-in/Ski-out Chalets, 7+ Bedroom Villas, and Exclusive Concierge Services
                  </h2>
                  <div className="text-base text-gray-600 space-y-6 mb-10">
                    <p className="leading-relaxed">
                      AceHost Whistler invites you to experience our curated collection of luxury vacation rentals including everything from ski-in/ski-out chalets to large 7- and 8-bedroom homes, ideal for group getaways, family holidays, or unforgettable corporate retreats. Whether you're visiting during Christmas, New Year's, peak winter ski season, or summer, we have stunning homes suited for you.
                    </p>
                    <p className="leading-relaxed">
                      All bookings at our top villas include our VIP <Link href="/concierge-service" className="text-blue-600 hover:text-blue-800 transition-colors">Concierge Services</Link>, where you can expect a fully personalized trip, think private chefs, heli-skiing, snowmobile fondue tours, airport transfers, and hard-to-get restaurant reservations, local contacts and expertise, all arranged seamlessly by our local experts.
                    </p>
                    <p className="leading-relaxed">
                      Travellers can book directly on Airbnb links below, or speak with us directly to find exact pricing, more information, & more chalet options.
                    </p>
                    <p className="text-sm text-gray-500 pt-2">
                      All prices are in Canadian Dollars (CAD) & not in (USD).
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Section with specified photo */}
              <div className="md:col-span-7 p-6 md:p-10 lg:p-16 xl:p-16 flex items-center justify-center">
                <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image 
                    src="/photos/properties/Panoramic Estate/20241127 MM4P 01 0225-Edit.jpg" 
                    alt="Luxury Whistler Chalet" 
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEhAI/w5RW4AAAAABJRU5ErkJggg=="
                    onError={(e) => {
                      // @ts-ignore - Next Image doesn't officially support onError but it works
                      e.currentTarget.src = "/photos/properties/Altitude New Photos Best/altitude retreat-12.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Filter Buttons in a separate row with subtle gradient bg */}
            <div className="bg-gradient-to-b from-[#f5f5f7] to-[#eaeaec] py-10 px-8 lg:px-16">
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "all"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Whistler All Properties
                </button>
                <button
                  onClick={() => setActiveCategory("whistler")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "whistler"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Whistler
                </button>
                <button
                  onClick={() => setActiveCategory("homes")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "homes"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Whistler Homes
                </button>
                <button
                  onClick={() => setActiveCategory("townhomes")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "townhomes"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Whistler Townhomes
                </button>
                <button
                  onClick={() => setActiveCategory("condos")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "condos"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Whistler Condos
                </button>
                <button
                  onClick={() => setActiveCategory("pets")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "pets"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Whistler Pet Friendly
                </button>
                <button
                  onClick={() => setActiveCategory("skiinout")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "skiinout"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Whistler Ski in Ski out
                </button>
                <button
                  onClick={() => setActiveCategory("worldwide")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "worldwide"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Worldwide
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Properties Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Property Listings */}
            <div className="w-full">
              {displayProperties.map((category) => (
                <div key={category.id} className="mb-16 sm:mb-20">
                  <div className="mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-light mb-3 sm:mb-4 text-gray-900">
                      {category.title}
                    </h2>
                    {category.description && (
                      <div className="text-base sm:text-lg text-gray-600 max-w-4xl space-y-4">
                        {category.description.split('\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {category.properties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pricing Information */}
            <div className="max-w-4xl mx-auto mt-16 mb-12 px-4 py-8 bg-gray-50 rounded-xl">
              <div className="text-lg space-y-6">
                <p className="font-semibold text-xl">Pricing: When booking through AceHost, we guarantee the lowest or equal pricing you can find for all properties listed above.</p>
                <p>All prices are listed in Canadian Dollar (CAD). 6 or 7 Night Minimum stay required for all Christmas & New Years bookings. Pricing above is an accurate estimate, but please contact us for exact quotes.</p>
                <p className="italic">We warmly invite travel agents to join us in offering their valued clients an unparalleled chalet villa rental experience in the breathtaking locale of Whistler. Please do not hesitate to <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> to discuss this opportunity further.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Looking for Something Special?
                </h2>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                  Not sure which property is right for you? Let us help find the perfect
                  property for your needs. Let us know what you're looking
                  for, and we'll create a personalized recommendation.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  Contact Our Team
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-6">
                  <Coffee className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">
                    <Link href="/concierge-service" className="hover:underline">Concierge Services</Link>
                  </h3>
                  <p className="text-gray-300">
                    Private chefs, butler services, and personalized
                    experiences.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <Wifi className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Smart Homes</h3>
                  <p className="text-gray-300">
                    Modern amenities and tech-enabled luxury experiences.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <Car className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Transportation</h3>
                  <p className="text-gray-300">
                    Airport transfers and luxury vehicle rentals.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <MapPin className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Local Expertise</h3>
                  <p className="text-gray-300">
                    Insider knowledge of the best experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
    // Revalidate the page every 1 hour
    revalidate: 3600,
  };
};
