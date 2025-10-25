import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const GlaciersReach = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos - all photos from the directory
  const images = [
    // Cover photo first
    "/photos/properties/Glaciers Reach/01 - 20251021 MM4P 01 0021.jpg",
    "/photos/properties/Glaciers Reach/02 - 20251021 A7M4 01 A1_05399.jpg",
    "/photos/properties/Glaciers Reach/03 - 20251021 A7M4 01 A1_05155.jpg",
    "/photos/properties/Glaciers Reach/04 - 20251021 A7M4 01 A1_05164.jpg",
    "/photos/properties/Glaciers Reach/05 - 20251021 A7M4 01 A1_05179.jpg",
    "/photos/properties/Glaciers Reach/06 - 20251021 A7M4 01 A1_05198.jpg",
    "/photos/properties/Glaciers Reach/07 - 20251021 A7M4 01 A1_05210.jpg",
    "/photos/properties/Glaciers Reach/08 - 20251021 A7M4 01 A1_05308.jpg",
    "/photos/properties/Glaciers Reach/09 - 20251021 A7M4 01 A1_05316.jpg",
    "/photos/properties/Glaciers Reach/10 - 20251021 A7M4 01 A1_05325.jpg",
    "/photos/properties/Glaciers Reach/11 - 20251021 A7M4 01 A1_05334.jpg",
    "/photos/properties/Glaciers Reach/12 - 20251021 A7M4 01 A1_05530.jpg",
    "/photos/properties/Glaciers Reach/13 - 20251021 A7M4 01 A1_05543.jpg",
    "/photos/properties/Glaciers Reach/14 - 20251021 A7M4 01 A1_05343.jpg",
    "/photos/properties/Glaciers Reach/15 - 20251021 A7M4 01 A1_05351.jpg",
    "/photos/properties/Glaciers Reach/16 - 20251021 A7M4 01 A1_05369.jpg",
    "/photos/properties/Glaciers Reach/17 - 20251021 A7M4 01 A1_05384.jpg",
    "/photos/properties/Glaciers Reach/18 - 20251021 A7M4 01 A1_05132-Edit.jpg",
    "/photos/properties/Glaciers Reach/19 - 20251021 A7M4 01 A1_05138.jpg",
    "/photos/properties/Glaciers Reach/20 - 20251021 A7M4 01 A1_05219.jpg",
    "/photos/properties/Glaciers Reach/21 - 20251021 A7M4 01 A1_05241.jpg",
    "/photos/properties/Glaciers Reach/22 - 20251021 A7M4 01 A1_05249.jpg",
    "/photos/properties/Glaciers Reach/23 - 20251021 A7M4 01 A1_05255.jpg",
    "/photos/properties/Glaciers Reach/24 - 20251021 A7M4 01 A1_05261.jpg",
    "/photos/properties/Glaciers Reach/25 - 20251021 A7M4 01 A1_05268.jpg",
    "/photos/properties/Glaciers Reach/26 - 20251021 A7M4 01 A1_05274.jpg",
    "/photos/properties/Glaciers Reach/27 - 20251021 A7M4 01 A1_05287.jpg",
    "/photos/properties/Glaciers Reach/28 - 20251021 A7M4 01 A1_05293.jpg",
    "/photos/properties/Glaciers Reach/29 - 20251021 A7M4 01 A1_05301.jpg",
    "/photos/properties/Glaciers Reach/30 - 20251021 A7M4 01 A1_05500.jpg",
    "/photos/properties/Glaciers Reach/31 - 20251021 A7M4 01 A1_05521-Edit.jpg",
    "/photos/properties/Glaciers Reach/32 - 20251021 A7M4 01 A1_05499-Edit.jpg",
    "/photos/properties/Glaciers Reach/33 - 20251021 A7M4 01 A1_05487.jpg",
    "/photos/properties/Glaciers Reach/34 - 20251021 A7M4 01 A1_05404.jpg",
    "/photos/properties/Glaciers Reach/35 - 20251021 A7M4 01 A1_05414.jpg",
    "/photos/properties/Glaciers Reach/36 - 20251021 A7M4 01 A1_05419.jpg",
    "/photos/properties/Glaciers Reach/37 - 20251021 MM4P 01 0031.jpg",
    "/photos/properties/Glaciers Reach/38 - 20251021 MM4P 01 0041.jpg",
    "/photos/properties/Glaciers Reach/39 - 20251021 A7M4 01 A1_05425-Edit.jpg"
  ];

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

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;

    setIsImageLoading(true);

    if (direction === "prev") {
      setSelectedPhotoIndex(
        selectedPhotoIndex === 0 ? images.length - 1 : selectedPhotoIndex - 1
      );
    } else {
      setSelectedPhotoIndex(
        selectedPhotoIndex === images.length - 1 ? 0 : selectedPhotoIndex + 1
      );
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        navigatePhoto("next");
      } else {
        navigatePhoto("prev");
      }
    }
    
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex !== null) {
        if (e.key === 'ArrowLeft') {
          navigatePhoto('prev');
        } else if (e.key === 'ArrowRight') {
          navigatePhoto('next');
        } else if (e.key === 'Escape') {
          closeFullScreenPhoto();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhotoIndex]);

  return (
    <>
      <Head>
        <title>
          Glaciers Reach | Heart of Whistler Village - AceHost
        </title>
        <meta
          name="description"
          content="Stay in the heart of Whistler Village in this rare three-bedroom townhouse that sleeps 5+ guests. Just steps from restaurants, shops, ski lifts, and the Whistler Racquet & Pickleball Club."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Glaciers Reach | Heart of Whistler Village"
            guests={5}
            bedrooms={3}
            beds={3}
            bathrooms={2}
            priceRange="$250-600 per night Summer"
            winterPrice="$500-1200 Nightly | Winter"
            holidayPrice="$1200-1500 Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1539363076080108525?guests=1&adults=1&s=67&unique_share_id=e234c7cf-b23b-4ce3-9c53-7dde85033c3b"
          />

          <div className="text-center mb-16">
            <p className="text-gray-700">
              Minimum Stay Requirement: 2 Nights weekdays | 3 weekends | 7
              Christmas/NY
            </p>
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">              
              {images.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Glaciers Reach interior ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                    quality={index < 4 ? 85 : 75}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-8 max-w-4xl">
              Stay in the heart of Whistler Village in this rare three-bedroom townhouse that sleeps 5+ guests. Just steps from restaurants, shops, ski lifts, and the Whistler Racquet & Pickleball Club, this two-level retreat offers the perfect mix of comfort and location.
            </p>
            <p className="text-gray-800 mb-16 max-w-4xl">
              After a day on the slopes or trails, unwind in your private hot tub or explore the shared pool and gym. With modern interiors and mountain charm, this home offers the ideal Whistler getaway year-round.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={images[1]}
                    alt="Glaciers Reach Interior"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-black text-white p-4 rounded-full mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">The Space</h2>
                </div>
                <p className="text-gray-800">
                  Welcome to 98 Glacier's Reach, a beautifully updated three-bedroom, two-bath townhouse in one of Whistler's most sought-after locations. The home comfortably sleeps up to six guests, featuring a bright open-plan living area with a cozy fireplace, fully equipped kitchen, and dining space perfect for gathering after a day outdoors. Upstairs, the primary bedroom includes a private balcony, while the other bedrooms provide flexible sleeping arrangements for families or small groups.
                </p>
                <p className="text-gray-800 mt-4">
                  Step outside to your private patio and hot tub, the ideal spot to relax after skiing, biking, or exploring the Village. The complex also offers a heated outdoor pool, fitness center, and secure underground parking. You'll be just minutes from the gondolas, shops, cafes, and restaurants—plus tennis and pickleball courts right next door. This is Whistler living at its finest: peaceful, central, and perfectly designed for mountain adventures.
                </p>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src="/photos/properties/Glaciers Reach/07 - 20251021 A7M4 01 A1_05210.jpg"
                    alt="Glaciers Reach Living Area"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="flex items-center mb-6">
                  <div className="bg-black text-white p-4 rounded-full mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 13C8.66 13 10 11.66 10 10C10 8.34 8.66 7 7 7C5.34 7 4 8.34 4 10C4 11.66 5.34 13 7 13ZM19 13C20.66 13 22 11.66 22 10C22 8.34 20.66 7 19 7C17.34 7 16 8.34 16 10C16 11.66 17.34 13 19 13ZM7 15C4.67 15 0 16.17 0 18.5V20H14V18.5C14 16.17 9.33 15 7 15ZM19 15C18.71 15 18.38 15.02 18.03 15.05C19.19 15.89 20 17.02 20 18.5V20H24V18.5C24 16.17 21.33 15 19 15Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Property Highlights</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Prime Location</p>
                    <p className="text-gray-800">Located in the heart of Whistler Village, just steps from restaurants, shops, ski lifts, and the Whistler Racquet & Pickleball Club.</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Private Hot Tub</p>
                    <p className="text-gray-800">Relax in your own private hot tub after a day of mountain adventures.</p>
                  </div>

                  <div>
                    <p className="font-medium">Complex Amenities</p>
                    <p className="text-gray-800">Access to a heated outdoor pool and fitness center within the complex.</p>
                  </div>

                  <div>
                    <p className="font-medium">Secure Parking</p>
                    <p className="text-gray-800">Convenient underground parking included with your stay.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src="/photos/properties/Glaciers Reach/16 - 20251021 A7M4 01 A1_05369.jpg"
                    alt="Glaciers Reach Bedroom"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-black text-white p-4 rounded-full mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Bedroom Layout</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Primary Bedroom</p>
                    <p className="text-gray-800">Features a comfortable bed and private balcony with mountain views.</p>
                  </div>

                  <div>
                    <p className="font-medium">Second Bedroom</p>
                    <p className="text-gray-800">Cozy room with flexible sleeping arrangements.</p>
                  </div>

                  <div>
                    <p className="font-medium">Third Bedroom</p>
                    <p className="text-gray-800">Additional sleeping space perfect for families or groups.</p>
                  </div>

                  <div>
                    <p className="font-medium">Bathrooms</p>
                    <p className="text-gray-800">Two well-appointed bathrooms with modern fixtures.</p>
                  </div>

                  <div>
                    <p className="font-medium">Living Area</p>
                    <p className="text-gray-800">Open-plan living space with cozy fireplace and comfortable seating.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-black text-white p-4 rounded-full mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Location</h2>
              </div>
              
              <div className="space-y-6 max-w-4xl">
                <p className="text-gray-800">
                  Located in the heart of Whistler Village, this property offers unparalleled access to all that Whistler has to offer. You'll be just minutes from the gondolas, shops, cafes, and restaurants—plus tennis and pickleball courts right next door at the Whistler Racquet & Pickleball Club.
                </p>
                <p className="text-gray-800">
                  The central location makes it easy to enjoy Whistler's year-round activities, from skiing and snowboarding in the winter to mountain biking and hiking in the summer. After a day of adventures, you can easily walk to the village's best restaurants and entertainment options.
                </p>
              </div>
            </div>

            {/* Registration Details */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-black text-white p-4 rounded-full mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Registration Details</h2>
              </div>
              
              <div className="space-y-2 max-w-4xl">
                <p className="text-gray-800">Municipal registration number: 00013506</p>
                <p className="text-gray-800">Provincial registration number: PM203174794</p>
              </div>
            </div>
          </div>
        </main>

        {/* Full-screen Photo View */}
        {selectedPhotoIndex !== null && (
          <div 
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute top-4 right-4 flex space-x-4">
              <button
                onClick={closeFullScreenPhoto}
                className="text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
              onClick={() => navigatePhoto("prev")}
              aria-label="Previous photo"
            >
              &larr;
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <div className="relative w-full h-full">
                <Image
                  src={images[selectedPhotoIndex]}
                  alt={`Property full view ${selectedPhotoIndex + 1}`}
                  fill
                  priority
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                  sizes="100vw"
                  onLoadingComplete={handleImageLoad}
                  quality={85}
                  loading="eager"
                />
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
              onClick={() => navigatePhoto("next")}
              aria-label="Next photo"
            >
              &rarr;
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center z-20">
              <p className="text-white text-sm bg-black bg-opacity-50 inline-block px-4 py-2 rounded-full">
                {selectedPhotoIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};

export default GlaciersReach;
