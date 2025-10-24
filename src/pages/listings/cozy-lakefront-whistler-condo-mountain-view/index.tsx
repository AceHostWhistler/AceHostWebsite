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

const CozyLakefrontCondo = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos - all 27 photos from Nick North 2-Bed directory
  const images = [
    // Cover photo first
    "/photos/properties/Nick North 2-Bed/01 - 20251006 A7M4 03 A1_03279-Edit.jpg",
    "/photos/properties/Nick North 2-Bed/02 - 20251006 A7M4 03 A1_03248-Edit-Edit.jpg",
    "/photos/properties/Nick North 2-Bed/03 - 20251006 A7M4 03 A1_03258-Edit.jpg",
    "/photos/properties/Nick North 2-Bed/04 - 20251006 A7M4 03 A1_03260-Edit.jpg",
    "/photos/properties/Nick North 2-Bed/05 - 20251006 A7M4 03 A1_03268.jpg",
    "/photos/properties/Nick North 2-Bed/06 - 20251006 A7M4 03 A1_03292.jpg",
    "/photos/properties/Nick North 2-Bed/07 - 20251006 A7M4 03 A1_03439.jpg",
    "/photos/properties/Nick North 2-Bed/08 - 20251006 A7M4 03 A1_03482.jpg",
    "/photos/properties/Nick North 2-Bed/09 - 20251006 A7M4 03 A1_03306.jpg",
    "/photos/properties/Nick North 2-Bed/10 - 20251006 A7M4 03 A1_03314.jpg",
    "/photos/properties/Nick North 2-Bed/11 - 20251006 A7M4 03 A1_03344.jpg",
    "/photos/properties/Nick North 2-Bed/12 - 20251006 A7M4 03 A1_03349-Edit.jpg",
    "/photos/properties/Nick North 2-Bed/13 - 20251006 A7M4 03 A1_03359.jpg",
    "/photos/properties/Nick North 2-Bed/14 - 20251006 A7M4 03 A1_03375.jpg",
    "/photos/properties/Nick North 2-Bed/15 - 20251006 A7M4 03 A1_03380-Edit.jpg",
    "/photos/properties/Nick North 2-Bed/16 - 20251006 A7M4 03 A1_03120.jpg",
    "/photos/properties/Nick North 2-Bed/17 - 20251006 A7M4 03 A1_03143.jpg",
    "/photos/properties/Nick North 2-Bed/18 - 20251006 A7M4 03 A1_03158.jpg",
    "/photos/properties/Nick North 2-Bed/19 - 20251006 A7M4 03 A1_03164.jpg",
    "/photos/properties/Nick North 2-Bed/20 - 20251006 A7M4 03 A1_03395.jpg",
    "/photos/properties/Nick North 2-Bed/21 - 20251006 A7M4 03 A1_03409.jpg",
    "/photos/properties/Nick North 2-Bed/22 - 20251006 A7M4 03 A1_03197.jpg",
    "/photos/properties/Nick North 2-Bed/23 - 20251006 A7M4 03 A1_03216.jpg",
    "/photos/properties/Nick North 2-Bed/24 - 20251006 A7M4 03 A1_03227.jpg",
    "/photos/properties/Nick North 2-Bed/25 - 20251006 A7M4 03 A1_03416.jpg",
    "/photos/properties/Nick North 2-Bed/26 - 20251006 A7M4 03 A1_03427.jpg",
    "/photos/properties/Nick North 2-Bed/27 - 20251006 A7M4 03 A1_03433.jpg"
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
          Cozy Lakefront Whistler Condo | Mountain View - AceHost
        </title>
        <meta
          name="description"
          content="Stylish Whistler Condo at prestigious Nicklaus North with breathtaking views! Top floor 1000 sqft 2BR/2BA with vaulted ceilings. Just updated with modern décor. Each bedroom with lakefront and mountain views."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Cozy Lakefront Whistler Condo | Mountain View"
            guests={7}
            bedrooms={2}
            beds={5}
            bathrooms={2}
            priceRange="$250-800 per night Summer"
            winterPrice="$500-1300 Nightly | Winter"
            holidayPrice="$1400-1800 Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1305524887656641858?guests=1&adults=1&s=67&unique_share_id=23663c37-e33a-445b-a53c-6f927f30d084"
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
                    alt={`Cozy Lakefront Condo interior ${index + 1}`}
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
              Stylish top-floor 2 BDR/2BA + pull out living room bed, located at the prestigious Nicklaus North Golf Course. Recently updated with modern décor, high ceilings, and stunning lake and mountain views from every room.
            </p>
            <p className="text-gray-800 mb-16 max-w-4xl">
              Step outside to enjoy cross-country skiing, biking, and lakeside walks, or dine at Table 19, known for Whistler's best fondue, happy hour, lunch & dinner. In summer, golf steps from your door, all just a 7-minute drive to Whistler Village!
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={images[1]}
                    alt="Cozy Lakefront Condo Interior"
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
                <div className="space-y-4">
                  <p className="text-gray-800">• 1000 sqft 2BR/2BA</p>
                  <p className="text-gray-800">• Patio (200 sqft)</p>
                  <p className="text-gray-800">• Located at Nicklaus North in Whistler!</p>
                  <p className="text-gray-800">• 7 min drive to Whistler Village</p>
                  <p className="text-gray-800">• Breathtaking view!</p>
                  <p className="text-gray-800">• Amazing outdoor amenities (hike, walk, cross country ski, mountain bike, lakefront, golf, disc golf)</p>
                  <p className="text-gray-800">• Safe and secure neighborhood</p>
                  <p className="text-gray-800">• Free underground parking space. Plenty of free outdoor parking</p>
                </div>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src="/photos/properties/Nick North 2-Bed/03 - 20251006 A7M4 03 A1_03258-Edit.jpg"
                    alt="Cozy Lakefront Condo Kitchen"
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
                  <h2 className="text-2xl font-bold">Highlights</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Kitchen</p>
                    <p className="text-gray-800">All appliances and plenty of counterspace for cooking. Includes stove, oven, microwave, dishwasher, and all the cookware needed to make a gourmet meal.</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Patio</p>
                    <p className="text-gray-800">Enough room to relax and soak up the sun. This is a great place to soak up the view, read a book, or watch golfers drive into the fairway!</p>
                  </div>

                  <div>
                    <p className="font-medium">Master Bedroom</p>
                    <p className="text-gray-800">King size, high-end mattress with new linens and a large walk-in closet</p>
                  </div>

                  <div>
                    <p className="font-medium">Master Bathroom</p>
                    <p className="text-gray-800">Bath tub and shower and plenty of towels.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src="/photos/properties/Nick North 2-Bed/07 - 20251006 A7M4 03 A1_03439.jpg"
                    alt="Cozy Lakefront Condo Bedroom"
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
                  <h2 className="text-2xl font-bold">Additional Amenities</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Second Bedroom</p>
                    <p className="text-gray-800">Two twin beds, mattresses with new linens. Large closet for all your clothing needs.</p>
                  </div>

                  <div>
                    <p className="font-medium">Second Bathroom</p>
                    <p className="text-gray-800">Bathroom featuring walk-in shower.</p>
                  </div>

                  <div>
                    <p className="font-medium">Entertainment</p>
                    <p className="text-gray-800">Ultra High Speed Fibre Optic WIFI (300mbps) and 1 Smart TV (main room), and 1 Bose Bluetooth Speaker.</p>
                  </div>

                  <div>
                    <p className="font-medium">Laundry</p>
                    <p className="text-gray-800">Washer and dryer with all the detergent and fabric softener you'll need.</p>
                  </div>

                  <p className="text-gray-800 italic">*Complimentary coffee, tea, salt, pepper, olive oil, soap, shampoo, conditioner, and body wash is provided.</p>
                </div>
              </div>
            </div>

            {/* Guest Access & Rules Section */}
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
                  <h2 className="text-2xl font-bold">Guest Access & Important Notes</h2>
                </div>
              
              <div className="space-y-6 max-w-4xl">
                <div>
                  <h3 className="font-medium text-lg mb-2">Guest Access</h3>
                  <p className="text-gray-800 mb-2">1. Rotating Buzzer code to enter the building will be provided</p>
                  <p className="text-gray-800 mb-2">2. Rotating Front door of unit code will be provided</p>
                  <p className="text-gray-800">3. Key & Fob will be left in the unit on the counter for remainder of your stay!</p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Rules</h3>
                  <p className="text-gray-800 mb-2">No smoking.</p>
                  <p className="text-gray-800 mb-2">No pets.</p>
                  <p className="text-gray-800">No parties.</p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Registration Details</h3>
                  <p className="text-gray-800 mb-1">Municipal registration number: 00013056</p>
                  <p className="text-gray-800">Provincial registration number: H874382751</p>
                </div>
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

export default CozyLakefrontCondo;
