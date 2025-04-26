import React, { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { FaBed, FaBath } from "react-icons/fa";

const VancouverHouseCornerUnit = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/vancouver-house/645adc4aca79d22167763483_Vancouver_House-03.jpg",
    "/photos/properties/vancouver-house/645adc49fb32ea8384334e2e_Vancouver_House-05.jpg",
    "/photos/properties/vancouver-house/645adc48fb32ea2543334d52_Vancouver_House-13.jpg",
    "/photos/properties/vancouver-house/645adc480342565cb5e2cac6_Vancouver_House-12.jpg",
    "/photos/properties/vancouver-house/645adc4803425681d3e2cab2_Vancouver_House-15.jpg",
    "/photos/properties/vancouver-house/645adc486c42a14dc2279913_Vancouver_House-18.jpg",
    "/photos/properties/vancouver-house/645adc48fb32ea7415334d5f_Vancouver_House-19.jpg",
    "/photos/properties/vancouver-house/645adc4a8fd51115efee7fd0_Vancouver_House-20.jpg",
    "/photos/properties/vancouver-house/645adc48fb32ea9b24334d60_Vancouver_House-21.jpg",
    "/photos/properties/vancouver-house/645adc4a44759e465d596517_Vancouver_House-23.jpg",
    "/photos/properties/vancouver-house/645adc4a8ac76bef6df533ed_Vancouver_House-25.jpg",
    "/photos/properties/vancouver-house/645adc4aca79d28dfd76348b_Vancouver_House-27.jpg",
    "/photos/properties/vancouver-house/645add450dd1f71139a57bb7_Vancouver_House-45.jpg",
  ];

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
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

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;

    if (direction === "prev") {
      setSelectedPhotoIndex(
        selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1
      );
    } else {
      setSelectedPhotoIndex(
        selectedPhotoIndex === photos.length - 1 ? 0 : selectedPhotoIndex + 1
      );
    }
  };

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>The Vancouver House, Corner Unit | 30th Floor - AceHost</title>
        <meta
          name="description"
          content="Experience luxury living in this stunning corner unit on the 30th floor of the iconic Vancouver House. Panoramic views, designer furnishings, and all amenities."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="The Vancouver House, Corner Unit | 30th Floor"
            guests={4}
            bedrooms={2}
            beds={2}
            bathrooms={2}
            priceRange="$400-$700 per night"
            airbnbLink="https://www.airbnb.ca/rooms/561767409786915919?guests=1&adults=1&s=67&unique_share_id=7a6e7b88-1a8b-4352-acca-56db762955cd"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Vancouver House interior ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                    quality={index < 4 ? 85 : 75}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzIyMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMzMiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4="
                  />
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

          {/* Property Details */}
          <div id="details" className="max-w-7xl mx-auto px-4 mb-16 sm:mb-20">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Property Details
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                <div>
                  <p className="text-gray-700 mb-6">
                    Welcome to this spectacular corner unit on the 30th floor of
                    the iconic Vancouver House. This architectural masterpiece
                    offers breathtaking 270-degree views of False Creek, English
                    Bay, and the North Shore mountains through floor-to-ceiling
                    windows.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Featuring 2 bedrooms and 2 bathrooms across 1,200 square
                    feet of thoughtfully designed living space, this luxury
                    apartment combines modern elegance with ultimate comfort.
                    The unit has been professionally decorated with high-end
                    designer furnishings throughout, creating a sophisticated
                    yet comfortable atmosphere.
                  </p>
                  <p className="text-gray-700 mb-6">
                    The open-concept living area flows seamlessly onto a large
                    balcony, perfect for enjoying your morning coffee while
                    taking in the spectacular views. The gourmet kitchen
                    features premium Miele appliances, quartz countertops, and
                    everything you need to prepare delicious meals.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 mb-6">
                    As a guest, you'll have access to the building's
                    exceptional amenities, including a fitness center, indoor
                    pool and hot tub, and the stunning rooftop garden. The
                    building also offers 24-hour concierge service for added
                    convenience and security.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Located in the heart of Vancouver's Beach District,
                    you'll be steps away from the Seawall, Granville
                    Island, and countless restaurants, shops, and entertainment
                    options. This prime location makes it the perfect base for
                    exploring everything Vancouver has to offer.
                  </p>
                  <div className="flex items-center space-x-8 mt-6">
                    <div className="flex items-center">
                      <FaBed className="text-gray-700 mr-2 text-xl" />
                      <span className="text-gray-700">2 Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="text-gray-700 mr-2 text-xl" />
                      <span className="text-gray-700">2 Bathrooms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Details */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Room Layout
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Primary Bedroom
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Spacious primary bedroom with king-sized bed, premium
                    linens, ample closet space, and an ensuite bathroom
                    featuring a walk-in shower. Floor-to-ceiling windows offer
                    stunning city and water views.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Second Bedroom
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Comfortable second bedroom with queen-sized bed, desk
                    workspace, closet, and access to the main bathroom with a
                    soaking tub/shower combination.
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Full Kitchen with High-End Appliances</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>In-Suite Washer & Dryer</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Floor-to-Ceiling Windows</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Large Balcony with Seating</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Smart TVs</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Designer Furnishings</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Fitness Center Access</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Indoor Pool & Hot Tub Access</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Rooftop Garden Access</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>24-Hour Concierge</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Location
              </h2>
              <p className="text-gray-700 mb-6">
                Located in Vancouver's Beach District, you'll be
                perfectly positioned to explore the city. The Vancouver House is
                just:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Steps from the Seawall walking/biking path</li>
                <li>5-minute walk to Granville Island</li>
                <li>10-minute walk to Yaletown restaurants and shops</li>
                <li>15-minute walk to English Bay Beach</li>
                <li>Close to public transit options</li>
                <li>25-minute drive from Vancouver International Airport</li>
              </ul>
            </div>
          </div>
        </main>

        {/* Photo Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="relative min-h-screen flex flex-col justify-center">
              <button
                onClick={closeAllPhotos}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-20 text-3xl"
              >
                <X size={32} />
              </button>
              <div className="p-4 sm:p-8">
                <h2 className="text-white text-2xl font-bold mb-6">
                  All Photos ({photos.length})
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] relative cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Vancouver House interior ${index + 1}`}
                        fill
                        className="object-cover hover:opacity-90 transition-opacity rounded-lg"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Screen Photo */}
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
                  src={photos[selectedPhotoIndex]}
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
                {selectedPhotoIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default VancouverHouseCornerUnit;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};
