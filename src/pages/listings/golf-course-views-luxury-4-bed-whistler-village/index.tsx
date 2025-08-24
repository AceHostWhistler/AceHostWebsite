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

const GolfCourseViews = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos - including all 45 photos from the directory
  const images = [
    // Main featured photo - use this as the cover image
    "/photos/properties/Muirfield Golf Course/44 - 20250820 MM4P 01 0016.jpg",
    "/photos/properties/Muirfield Golf Course/01 - 20250820 A7M4 01 A1_00497-Edit.jpg",
    "/photos/properties/Muirfield Golf Course/02 - 20250820 A7M4 01 A1_00179.jpg",
    "/photos/properties/Muirfield Golf Course/03 - 20250820 A7M4 01 A1_00186.jpg",
    "/photos/properties/Muirfield Golf Course/04 - 20250820 A7M4 01 A1_00192.jpg",
    "/photos/properties/Muirfield Golf Course/05 - 20250820 A7M4 01 A1_00202.jpg",
    "/photos/properties/Muirfield Golf Course/06 - 20250820 A7M4 01 A1_00209.jpg",
    "/photos/properties/Muirfield Golf Course/07 - 20250820 A7M4 01 A1_00138.jpg",
    "/photos/properties/Muirfield Golf Course/08 - 20250820 A7M4 01 A1_00171.jpg",
    "/photos/properties/Muirfield Golf Course/09 - 20250820 A7M4 01 A1_00217.jpg",
    "/photos/properties/Muirfield Golf Course/10 - 20250820 A7M4 01 A1_00222.jpg",
    "/photos/properties/Muirfield Golf Course/11 - 20250820 A7M4 01 A1_00232.jpg",
    "/photos/properties/Muirfield Golf Course/12 - 20250820 A7M4 01 A1_00088.jpg",
    "/photos/properties/Muirfield Golf Course/13 - 20250820 A7M4 01 A1_00096.jpg",
    "/photos/properties/Muirfield Golf Course/14 - 20250820 A7M4 01 A1_00103.jpg",
    "/photos/properties/Muirfield Golf Course/15 - 20250820 A7M4 01 A1_00110.jpg",
    "/photos/properties/Muirfield Golf Course/16 - 20250820 A7M4 01 A1_00121.jpg",
    "/photos/properties/Muirfield Golf Course/17 - 20250820 A7M4 01 A1_00131-Edit.jpg",
    "/photos/properties/Muirfield Golf Course/18 - 20250820 A7M4 01 A1_00297.jpg",
    "/photos/properties/Muirfield Golf Course/19 - 20250820 A7M4 01 A1_00309.jpg",
    "/photos/properties/Muirfield Golf Course/20 - 20250820 A7M4 01 A1_00056.jpg",
    "/photos/properties/Muirfield Golf Course/21 - 20250820 A7M4 01 A1_00063.jpg",
    "/photos/properties/Muirfield Golf Course/22 - 20250820 A7M4 01 A1_00071.jpg",
    "/photos/properties/Muirfield Golf Course/23 - 20250820 A7M4 01 A1_00077.jpg",
    "/photos/properties/Muirfield Golf Course/24 - 20250820 A7M4 01 A1_00329.jpg",
    "/photos/properties/Muirfield Golf Course/25 - 20250820 A7M4 01 A1_00336.jpg",
    "/photos/properties/Muirfield Golf Course/26 - 20250820 A7M4 01 A1_00343.jpg",
    "/photos/properties/Muirfield Golf Course/27 - 20250820 A7M4 01 A1_00350.jpg",
    "/photos/properties/Muirfield Golf Course/28 - 20250820 A7M4 01 A1_00359.jpg",
    "/photos/properties/Muirfield Golf Course/29 - 20250820 A7M4 01 A1_00383.jpg",
    "/photos/properties/Muirfield Golf Course/30 - 20250820 A7M4 01 A1_00389.jpg",
    "/photos/properties/Muirfield Golf Course/31 - 20250820 A7M4 01 A1_00395.jpg",
    "/photos/properties/Muirfield Golf Course/32 - 20250820 A7M4 01 A1_00402.jpg",
    "/photos/properties/Muirfield Golf Course/33 - 20250820 A7M4 01 A1_00409.jpg",
    "/photos/properties/Muirfield Golf Course/34 - 20250820 A7M4 01 A1_00415.jpg",
    "/photos/properties/Muirfield Golf Course/35 - 20250820 A7M4 01 A1_00421.jpg",
    "/photos/properties/Muirfield Golf Course/36 - 20250820 A7M4 01 A1_00428.jpg",
    "/photos/properties/Muirfield Golf Course/37 - 20250820 A7M4 01 A1_00434.jpg",
    "/photos/properties/Muirfield Golf Course/38 - 20250820 A7M4 01 A1_00443.jpg",
    "/photos/properties/Muirfield Golf Course/39 - 20250820 A7M4 01 A1_00448.jpg",
    "/photos/properties/Muirfield Golf Course/40 - 20250820 A7M4 01 A1_00454.jpg",
    "/photos/properties/Muirfield Golf Course/41 - 20250820 A7M4 01 A1_00461.jpg",
    "/photos/properties/Muirfield Golf Course/42 - 20250820 A7M4 01 A1_00468.jpg",
    "/photos/properties/Muirfield Golf Course/43 - 20250820 MM4P 01 0011.jpg",
    "/photos/properties/Muirfield Golf Course/44 - 20250820 MM4P 01 0016.jpg",
    "/photos/properties/Muirfield Golf Course/45 - 20250820 A7M4 01 A1_00521.jpg"
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
          Golf Course Views | Luxury 4-bed Whistler Village - AceHost
        </title>
        <meta
          name="description"
          content="Experience Whistler luxury at this cozy, standalone chalet sitting right on Nicklaus North Golf Course with stunning views of Hole 14. Enjoy a private hot tub, media room, wood-burning fireplace, and chef's kitchen."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Golf Course Views | Luxury 4-bed Whistler Village"
            guests={9}
            bedrooms={4}
            beds={5}
            bathrooms={3.5}
            priceRange="$750-1500 per night Summer"
            winterPrice="$1200-2000 Nightly | Winter"
            holidayPrice="$3500-5000 Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1493522257280258231?guests=1&adults=1&s=67&unique_share_id=d98beea7-9f12-4195-8af6-52e4aa1a94cd"
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
                    alt={`Golf Course Views interior ${index + 1}`}
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
            <p className="text-gray-800 mb-16 max-w-4xl">
              This cozy, standalone chalet sits right on Nicklaus North Golf Course with stunning views of Hole 14. 
              Enjoy a private hot tub, media room, wood-burning fireplace, and chef's kitchen. Just a short drive to 
              Whistler Village and the ski lifts, plus being north of the village helps you skip the city traffic after skiing.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={images[1]}
                    alt="Golf Course Views Interior"
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
                  Tucked into one of Whistler's most desirable year-round locations, this warm and welcoming chalet sits directly on the 14th hole of the iconic Nicklaus North Golf Course. In summer, enjoy lush green views from your private backyard, watch golfers play through, sip your morning coffee in the sun, or fire up the grill for an evening BBQ with the mountains as your backdrop. It's the perfect setting for a relaxed, scenic escape.
                </p>
                <p className="text-gray-800 mt-4">
                  Inside, the home blends natural wood and stone textures with modern comforts. The open-concept layout includes a cozy living area with a wood-burning fireplace, a spacious dining table for 10, a breakfast nook, and a fully equipped chef's kitchen. A separate media room makes movie nights easy and fun for the whole group.
                </p>
                <p className="text-gray-800 mt-4">
                  In winter, you're just a quick 7-9-minute drive to the heart of Whistler Village and the ski lifts. Staying north of the village means you can avoid the Vancouver city day trip traffic congestion, making your ski days a lot more convenient.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src="/photos/properties/Muirfield Golf Course/03 - 20250820 A7M4 01 A1_00186.jpg"
                    alt="Golf Course Views Bedroom"
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
                  <h2 className="text-2xl font-bold">Bedroom Layout</h2>
                </div>

                <p className="mb-4">
                  <span className="font-medium">Bedroom 1 (primary):</span> King bed + TV with tub and shower (separate)
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2:</span> King bed + ensuite with tub-shower
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 3:</span> 2 single beds
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 4:</span> 1 single bed + TV
                </p>
                
                <p className="mt-6 font-medium">Registration details</p>
                <p className="mb-1">Municipal registration number: 00015211</p>
                <p className="mb-4">Provincial registration number: PM264215843</p>
              </div>
            </div>

            {/* Exterior Views Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src="/photos/properties/Muirfield Golf Course/44 - 20250820 MM4P 01 0016.jpg"
                    alt="Golf Course Views Exterior"
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
                  <h2 className="text-2xl font-bold">Exterior Views</h2>
                </div>
                <p className="text-gray-800">
                  Enjoy stunning views of the surrounding mountains and golf course from this beautiful property. The chalet's exterior showcases classic mountain architecture with modern touches, perfectly complementing the natural surroundings.
                </p>
                <p className="text-gray-800 mt-4">
                  The property offers ample outdoor space for relaxation and entertainment, with easy access to the golf course and nearby trails. In summer, the lush green surroundings create a peaceful retreat, while winter brings a magical snowy landscape just minutes from Whistler's world-class skiing.
                </p>
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
              <p className="text-gray-800 max-w-4xl">
                This property is ideally located on the Nicklaus North Golf Course, offering stunning views and a peaceful setting. It's just a short 7-9 minute drive to Whistler Village and the ski lifts. Being north of the village means you can avoid the Vancouver day-tripper traffic congestion after skiing. The location is perfect for both summer golf getaways and winter ski holidays, providing easy access to all of Whistler's attractions while enjoying a tranquil setting away from the hustle and bustle.
              </p>
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

export default GolfCourseViews;