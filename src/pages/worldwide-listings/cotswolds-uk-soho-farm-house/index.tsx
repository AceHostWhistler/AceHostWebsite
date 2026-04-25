import React, { useState, useEffect } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import PropertyHeader from "@/components/PropertyHeader";

const CotswoldsUKSohoFarmHouse = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages] = useState(82); // Total number of images we have

  // Cache version for forcing new image downloads
  const cacheVersion = "v10";

  // Define photo paths using the optimized gallery images
  const photoOrder = [
    "/optimized/cotswolds-cover.jpg", // Optimized cover photo
    "/optimized/cotswolds-all/cotswolds-all-11.jpg", // DJI_20250602090532_0522_D
    "/optimized/cotswolds-all/cotswolds-all-23.jpg", // 224A5292
    "/optimized/cotswolds-all/cotswolds-all-35.jpg", // 224A5518
    "/optimized/cotswolds-all/cotswolds-all-4.jpg",  // 224A7828
    "/optimized/cotswolds-all/cotswolds-all-21.jpg", // 224A5535
    "/optimized/cotswolds-all/cotswolds-all-49.jpg", // 224A5314
    "/optimized/cotswolds-all/cotswolds-all-74.jpg", // 224A5405
    "/optimized/cotswolds-all/cotswolds-all-5.jpg"   // 224A5352
  ];
  
  // Read the directory to get all Cotswolds photos
  const allPhotos = [
    ...photoOrder,
    // All other optimized photos (0 to 80)
    ...Array.from({length: 81}, (_, i) => `/optimized/cotswolds-all/cotswolds-all-${i}.jpg`).filter(
      // Filter out the photos that are already in photoOrder to avoid duplicates
      (path) => !photoOrder.includes(path)
    )
  ];
  
  // Use the first 25 photos as the optimal ones to display first
  const optimalPhotos = photoOrder.length >= 25 ? photoOrder : [...photoOrder, ...allPhotos.slice(photoOrder.length, 25 - photoOrder.length)];
  
  // All photos for the gallery
  const photos = allPhotos; // Use all optimized photos

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
    setSelectedPhotoIndex(index);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handlePreloadProgress = () => {
    setImagesLoaded(prev => prev + 1);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;

    setIsImageLoading(true);
    
    let newIndex;
    if (direction === "prev") {
      newIndex = selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1;
    } else {
      newIndex = selectedPhotoIndex === photos.length - 1 ? 0 : selectedPhotoIndex + 1;
    }
    
    setSelectedPhotoIndex(newIndex);
  };

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!showAllPhotos && selectedPhotoIndex === null) return;
    
    if (e.key === "ArrowRight") {
      navigatePhoto("next");
    } else if (e.key === "ArrowLeft") {
      navigatePhoto("prev");
    } else if (e.key === "Escape") {
      if (selectedPhotoIndex !== null) {
        closeFullScreenPhoto();
      } else if (showAllPhotos) {
        closeAllPhotos();
      }
    }
  };

  // Event listeners for keyboard navigation
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [showAllPhotos, selectedPhotoIndex]);

  // Improved preloading for faster gallery display with error handling
  useEffect(() => {
    // Preload first 20 optimized images for initial display
    const preloadImages = photos.slice(0, 20).map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        
        // Set image loading priority
        img.loading = 'eager';
        img.fetchPriority = 'high';
        
        // Add cache-busting parameter
        img.src = `${src}?v=${cacheVersion}`;
        
        img.onload = () => {
          handlePreloadProgress();
          resolve();
        };
        
        img.onerror = () => {
          console.error(`Failed to load image: ${src}`);
          // If image fails to load, try a fallback
          if (src.includes('/optimized/')) {
            // Try loading from the original source as fallback
            const fallbackSrc = src.replace('/optimized/cotswolds-gallery/', '/photos/properties/Cotswolds UK - Soho Farm House/');
            console.log(`Trying fallback: ${fallbackSrc}`);
            const fallbackImg = new Image();
            fallbackImg.src = fallbackSrc;
          }
          // Still count errors to avoid getting stuck
          handlePreloadProgress();
          resolve();
        };
      });
    });

    // Process in batches for better performance
    Promise.all(preloadImages);
  }, []);

  return (
    <>
      <Head>
        <title>Luxury Cotswolds Rental Estate Near Soho Farmhouse | 8 Bedrooms, Spa, Tennis Court, Cold Plunge, & Sauna - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at this designer stone estate near Soho Farmhouse in the Cotswolds, UK. This exclusive 8-bedroom property offers spa facilities, a tennis court, and an annex house, all set on a stunning 2-acre property just minutes from Soho Farmhouse."
        />
        {/* Preload critical images */}
        {photoOrder.slice(0, 3).map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <PropertyHeader
            title="Luxury Cotswolds Rental Estate Near Soho Farmhouse | 8 Bedrooms, Spa, Tennis Court, Cold Plunge, & Sauna"
            guests={15}
            bedrooms={8}
            bathrooms={5}
            priceRange="£1,100-£2,300 per night | 3 night minimum"
            contactLink="/contact"
            airbnbLink="https://www.airbnb.ca/rooms/1414129878809697902?guests=1&adults=1&s=67&unique_share_id=ba3bff7b-bc57-416c-bcd6-96b0943cfe51"
          />

          {/* Loading Indicator */}
          {imagesLoaded < 12 && (
            <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="w-8 h-8 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-gray-600">Loading gallery ({Math.min(imagesLoaded, 12)}/12 images)...</p>
            </div>
          )}

          {/* Photo Grid - Only show once essential images are loaded */}
          <div className={`max-w-7xl mx-auto px-4 mb-10 sm:mb-16 ${imagesLoaded < 12 ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`} id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              <div
                className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                onClick={() => handlePhotoClick(0)}
              >
                <div className="w-full h-full bg-gray-200">
                                      <img
                    src={`${optimalPhotos[0]}?v=${cacheVersion}`}
                    alt="Cotswolds UK - Soho Farm House 1"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    fetchPriority="high"
                    width={640}
                    height={480}
                    style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                    onError={(e) => {
                      // Fallback to the original image if optimized one fails
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite error loops
                      target.src = "/optimized/cotswolds-cover.jpg"; // Use already optimized cover as fallback
                      console.log("Using fallback for image 1");
                    }}
                  />
                </div>
              </div>
              {photos.slice(1, 4).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index + 1)}
                >
                  <div className="w-full h-full bg-gray-200">
                    <img
                      src={`${photo}?v=${cacheVersion}`}
                      alt={`Cotswolds UK - Soho Farm House ${index + 2}`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      width={640}
                      height={480}
                      style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                      onError={(e) => {
                        // Fallback if optimized image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        // Use a generic fallback image that's known to work
                        target.src = "/optimized/cotswolds-cover.jpg";
                        console.log(`Using fallback for image ${index + 2}`);
                      }}
                    />
                  </div>
                </div>
              ))}
              {photos.slice(4, 8).map((photo, index) => (
                <div
                  key={index + 4}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index + 4)}
                >
                  <div className="w-full h-full bg-gray-200">
                    <img
                      src={`${photo}?v=${cacheVersion}`}
                      alt={`Cotswolds UK - Soho Farm House ${index + 5}`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      width={640}
                      height={480}
                      style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                      onError={(e) => {
                        // Fallback if optimized image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        // Use a generic fallback image that's known to work
                        target.src = "/optimized/cotswolds-cover.jpg";
                        console.log(`Using fallback for image ${index + 5}`);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {photos.length > 8 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="inline-flex items-center px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium"
                >
                  View all {photos.length} photos
                </button>
              </div>
            )}
          </div>

          {/* Property Description */}
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8" id="details">
            <p className="text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed text-lg">
              Welcome to your countryside dream retreat—just 4 minutes by car (or a scenic 30-minute walk through a private trail) from the world-famous Soho Farmhouse. This beautifully renovated 8-bedroom, 5-bathroom stone estate offers over 320m² of luxurious living space across two dwellings, all set on a stunning and serene 2-acre property.
            </p>

            {/* Added Photo Gallery in Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src="/optimized/cotswolds-description/aerial-1.jpg"
                  alt="Aerial view of the Cotswolds estate"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={600}
                  height={450}
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src="/optimized/cotswolds-description/aerial-2.jpg"
                  alt="Aerial view of the property grounds"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={600}
                  height={450}
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src="/optimized/cotswolds-description/interior-1.jpg"
                  alt="Interior view of the Cotswolds estate"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={600}
                  height={450}
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src="/optimized/cotswolds-description/interior-2.jpg"
                  alt="Interior living space of the Cotswolds estate"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={600}
                  height={450}
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          
          {/* Amenities & Bedroom Layout */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Amenities & Features</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Premium interior comfort, countryside outdoor living, and a dedicated wellness setup designed for extended luxury stays.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Interior",
                  image: "/optimized/cotswolds-all/cotswolds-all-23.jpg",
                  items: [
                    "Devol designer kitchen with iconic AGA oven",
                    "Spacious living and dining areas",
                    "Luxury linens and towels",
                    "En-suite bathrooms with premium fixtures",
                    "Two dedicated office spaces",
                  ],
                },
                {
                  title: "Outdoor",
                  image: "/optimized/cotswolds-all/cotswolds-all-11.jpg",
                  items: [
                    "Private tennis court with new surface",
                    "Outdoor seating and dining areas",
                    "Charming private pond",
                    "Bocce ball and horseshoes",
                    "Outdoor firepit",
                  ],
                },
                {
                  title: "Wellness",
                  image: "/optimized/cotswolds-all/cotswolds-all-74.jpg",
                  items: [
                    "Infrared sauna",
                    "Private hot tub",
                    "Refreshing cold plunge pool",
                    "Welcome package upon arrival",
                    "Concierge services",
                  ],
                },
              ].map((amenity) => (
                <div key={amenity.title} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-44 bg-gray-200">
                    <img
                      src={amenity.image}
                      alt={`${amenity.title} - Cotswolds Estate`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      width={420}
                      height={280}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#3F5F2A] mb-4">{amenity.title}</h3>
                    <ul className="space-y-2 text-gray-700">
                      {amenity.items.map((item) => (
                        <li key={item}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Bedrooms</h2>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-3">Main House (280m²)</h3>
              <p className="text-gray-700 mb-6">
                The heart of the estate features six thoughtfully designed bedrooms and four elegant bathrooms, perfect for families, groups, or special gatherings. Two of the bedrooms have spa-like ensuite bathrooms, while the other bedrooms share a large bathroom with a separate tub and walk-in shower. There is also a charming powder room on the main floor.
              </p>
              <p className="text-gray-700 mb-8">
                Enjoy two cozy living rooms (ideal for lounging or movie nights), two dedicated office spaces for remote work, and a gorgeous Devol designer kitchen complete with an iconic AGA oven, two fridges, and a brand-new washer/dryer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    title: "Bedroom 1",
                    type: "Emperor King",
                    features: "Ensuite bathroom with spa amenities, luxurious linens",
                    location: "Main House - Master Suite",
                    image: "/photos/properties/Cotswolds UK - Soho Farm House/224A5405.jpg",
                  },
                  {
                    title: "Bedroom 2",
                    type: "Super King",
                    features: "Ensuite bathroom, premium bedding",
                    location: "Main House",
                    image: "/photos/properties/Cotswolds UK - Soho Farm House/224A5410.jpg",
                  },
                  {
                    title: "Bedroom 3",
                    type: "Super King",
                    features: "Shared bathroom access, countryside views",
                    location: "Main House",
                    image: "/photos/properties/Cotswolds UK - Soho Farm House/224A5417.jpg",
                  },
                  {
                    title: "Bedroom 4",
                    type: "King",
                    features: "Shared bathroom access, cozy retreat",
                    location: "Main House",
                    image: "/photos/properties/Cotswolds UK - Soho Farm House/224A5423.jpg",
                  },
                  {
                    title: "Bedroom 5",
                    type: "Double",
                    features: "Shared bathroom access, charming space",
                    location: "Main House",
                    image: "/photos/properties/Cotswolds UK - Soho Farm House/224A5430.jpg",
                  },
                  {
                    title: "Bedroom 6",
                    type: "Single",
                    features: "Shared bathroom access, perfect for one person",
                    location: "Main House (main floor no stairs)",
                    image: "/photos/properties/Cotswolds UK - Soho Farm House/224A5359.jpg",
                  },
                ].map((bedroom) => (
                  <div key={bedroom.title} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-44 bg-gray-200">
                      <img
                        src={bedroom.image}
                        alt={`${bedroom.title} - Cotswolds Estate`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                        width={420}
                        height={280}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-3xl font-medium text-[#3F5F2A] mb-2">{bedroom.title}</h4>
                      <p className="text-gray-800 mb-1"><span className="font-semibold">Type:</span> {bedroom.type}</p>
                      <p className="text-gray-800 mb-2"><span className="font-semibold">Features:</span> {bedroom.features}</p>
                      <p className="text-gray-500 italic text-sm">{bedroom.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-3">Annex House (40m²)</h3>
              <p className="text-gray-700 mb-8">
                Tucked away behind the newly surfaced private tennis court, the annex is a peaceful escape of its own. It features a full bathroom and a compact kitchenette, perfect for early risers or night owls who want their own space.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Bedroom 7",
                    type: "King",
                    features: "Private bathroom access, secluded retreat",
                    location: "Annex House",
                    image: "/photos/properties/Cotswolds UK - Soho Farm House/224A7863.jpg",
                  },
                  {
                    title: "Bedroom 8",
                    type: "Flexible (Two Singles or King)",
                    features: "Shared bathroom in annex, adaptable configuration",
                    location: "Annex House",
                    image: "/photos/properties/Cotswolds UK - Soho Farm House/224A7847.jpg",
                  },
                ].map((bedroom) => (
                  <div key={bedroom.title} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-44 bg-gray-200">
                      <img
                        src={bedroom.image}
                        alt={`${bedroom.title} - Cotswolds Estate`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                        width={420}
                        height={280}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-3xl font-medium text-[#3F5F2A] mb-2">{bedroom.title}</h4>
                      <p className="text-gray-800 mb-1"><span className="font-semibold">Type:</span> {bedroom.type}</p>
                      <p className="text-gray-800 mb-2"><span className="font-semibold">Features:</span> {bedroom.features}</p>
                      <p className="text-gray-500 italic text-sm">{bedroom.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing and Terms Section */}
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 mb-24 bg-gray-50 rounded-xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Pricing and Terms</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Rates</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Rate</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Details</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">Price Range</td>
                      <td className="px-6 py-4 whitespace-nowrap">£1,100-£2,300 per night</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">Minimum Stay</td>
                      <td className="px-6 py-4 whitespace-nowrap">3 nights</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Payment Policy</h3>
              <ul className="list-disc pl-8 space-y-3 text-gray-800 leading-relaxed">
                <li>To secure a reservation, 50% of the rental amount is required at the time of booking.</li>
                <li>The remaining 50% must be paid 60 days before check-in.</li>
                <li>For bookings made 60 days or less before check-in, the full rental amount (100%) must be paid.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Cancellation Policy</h3>
              <ul className="list-disc pl-8 space-y-3 text-gray-800 leading-relaxed">
                <li>Cancellations more than 60 days before arrival: 50% refund of the total reservation price</li>
                <li>Cancellations within 60 days of arrival: No refund</li>
                <li>Early departures or no-shows: No refund</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8 text-center mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Experience countryside luxury at its finest</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
              This is not just a house—it's an experience. A rare blend of country charm and modern luxury, all within striking distance of Soho Farmhouse and the Cotswolds' best attractions. Perfect for family gatherings, corporate retreats, or special celebrations.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-md font-medium text-lg transition-colors"
            >
              Contact Us to Book
            </Link>
          </div>

          {/* All Photos Modal - Optimized and Simplified */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white font-medium">
                  Cotswolds UK - Soho Farm House | All Photos ({photos.length})
                </h3>
                <button
                  onClick={closeAllPhotos}
                  className="text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="container mx-auto px-2 sm:px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-gray-800"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <div className="w-full h-full">
                      <img
                        src={index < 20 ? `${photo}?v=${cacheVersion}` : photo} 
                        alt={`Cotswolds UK - Soho Farm House photo ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        loading={index < 20 ? "eager" : "lazy"}
                        width={300}
                        height={225}
                        style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          // Use a working fallback image
                          if (index < 20) {
                            // For important images, use our optimized cover
                            target.src = "/optimized/cotswolds-cover.jpg";
                          } else {
                            // For less important images, use whatever is available
                            target.src = "/optimized/cotswolds-gallery/photo-1.jpg";
                          }
                          console.log(`Using fallback for modal image ${index + 1}`);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Screen Photo Modal */}
          {selectedPhotoIndex !== null && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
              onClick={closeFullScreenPhoto}
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)}
              onTouchEnd={() => {
                if (touchStartX && touchEndX) {
                  const diff = touchStartX - touchEndX;
                  if (diff > 50) {
                    // Swipe left
                    navigatePhoto("next");
                  } else if (diff < -50) {
                    // Swipe right
                    navigatePhoto("prev");
                  }
                }
                setTouchStartX(null);
                setTouchEndX(null);
              }}
            >
              <button
                className="absolute top-4 right-4 text-white z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  closeFullScreenPhoto();
                }}
              >
                <X size={32} />
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("prev");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("next");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <div className="relative w-full h-[calc(100vh-120px)] max-w-6xl mx-auto px-4">
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <div className="flex items-center justify-center h-full">
                  <img
                    src={selectedPhotoIndex !== null ? 
                      (selectedPhotoIndex < 20 ? 
                        `${photos[selectedPhotoIndex]}?v=${cacheVersion}` : 
                        photos[selectedPhotoIndex]) 
                      : ''}
                    alt={`Cotswolds UK - Soho Farm House photo ${selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : ''}`}
                    className={`transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={handleImageLoad}
                    loading="eager"
                    fetchPriority="high"
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '100%', 
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      // Fallback for full-screen view if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      
                      // Try using the optimized version if available
                      if (selectedPhotoIndex !== null && selectedPhotoIndex < 20) {
                        target.src = `/optimized/cotswolds-gallery/photo-${selectedPhotoIndex + 1}.jpg`;
                      } else {
                        // Otherwise use a generic fallback
                        target.src = "/optimized/cotswolds-cover.jpg";
                      }
                      console.log(`Using fallback for fullscreen image ${selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : ''}`);
                      handleImageLoad(); // Make sure we still remove the loading state
                    }}
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedPhotoIndex !== null ? `${selectedPhotoIndex + 1} / ${photos.length}` : ''}
              </div>
            </div>
          )}
        </main>

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

export default CotswoldsUKSohoFarmHouse; 