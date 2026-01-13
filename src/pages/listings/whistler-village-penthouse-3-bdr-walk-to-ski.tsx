import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const WhistlerVillagePenthouse = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/optimized/303-Tyndall-Lodge/cover.jpg",
    "/optimized/303-Tyndall-Lodge/01---20260107-A7M4-01-A1_03798.jpg",
    "/optimized/303-Tyndall-Lodge/03---20260107-A7M4-01-A1_03441.jpg",
    "/optimized/303-Tyndall-Lodge/04---20260107-A7M4-01-A1_03447.jpg",
    "/optimized/303-Tyndall-Lodge/05---20260107-A7M4-01-A1_03570.jpg",
    "/optimized/303-Tyndall-Lodge/06---20260107-A7M4-01-A1_03580.jpg",
    "/optimized/303-Tyndall-Lodge/07---20260107-A7M4-01-A1_03598.jpg",
    "/optimized/303-Tyndall-Lodge/08---20260107-A7M4-01-A1_03560-Edit.jpg",
    "/optimized/303-Tyndall-Lodge/09---20260107-A7M4-01-A1_03565.jpg",
    "/optimized/303-Tyndall-Lodge/10---20260107-A7M4-01-A1_03609.jpg",
    "/optimized/303-Tyndall-Lodge/11---20260107-A7M4-01-A1_03462.jpg",
    "/optimized/303-Tyndall-Lodge/12---20260107-A7M4-01-A1_03470.jpg",
    "/optimized/303-Tyndall-Lodge/13---20260107-A7M4-01-A1_03477.jpg",
    "/optimized/303-Tyndall-Lodge/14---20260107-A7M4-01-A1_03486.jpg",
    "/optimized/303-Tyndall-Lodge/15---20260107-A7M4-01-A1_03835.jpg",
    "/optimized/303-Tyndall-Lodge/17---20260107-A7M4-01-A1_03623.jpg",
    "/optimized/303-Tyndall-Lodge/18---20260107-A7M4-01-A1_03456.jpg",
    "/optimized/303-Tyndall-Lodge/19---20260107-A7M4-01-A1_03523.jpg",
    "/optimized/303-Tyndall-Lodge/20---20260107-A7M4-01-A1_03503.jpg",
    "/optimized/303-Tyndall-Lodge/21---20260107-A7M4-01-A1_03705.jpg"
  ];

  // Photo navigation functions
  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
    setSelectedPhotoIndex(index);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;
    
    setIsImageLoading(true);
    
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

  // Handle image load completion
  const handleImageLoad = () => {
    setIsImageLoading(false);
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

  // Handle touch navigation
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
        navigatePhoto('next');
      } else {
        navigatePhoto('prev');
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

  return (
    <>
      <Head>
        <title>Whistler Village PentHouse | 3 BDR | Walk to Ski - AceHost</title>
        <meta
          name="description"
          content="Penthouse unit in the iconic Tyndall Lodge building in the heart of Whistler Village. This bright and spacious unit features 3 sleeping areas, 4 beds, and 2 full bathrooms, just steps from the Olympic Rings and a short walk to both Whistler and Blackcomb gondolas."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Whistler Village PentHouse | 3 BDR | Walk to Ski"
            guests={7}
            bedrooms={3}
            beds={4}
            bathrooms={2}
            priceRange="$500-1200 per night in summer. $750-1500 in winter. $2500-3500+ for Christmas/NYE."
            airbnbLink="https://www.airbnb.ca/rooms/1595039212030139605?guests=1&adults=1&s=67&unique_share_id=dc75c08b-e1ae-46ae-8b17-0587b742fa45"
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
                  <img
                    src={photo}
                    alt={`Whistler Village Penthouse interior ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading={index < 2 ? "eager" : "lazy"}
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

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Welcome to Penthouse unit, in the iconic Tyndall Lodge building in the heart of Whistler Village.
              <br /><br />
              This bright and spacious unit sits right in the centre of Whistler Village, steps from the famous Olympic Rings and only a short walk to both Whistler and Blackcomb gondolas.
              <br /><br />
              Hosting up to 7 guests comfortably, the home features three sleeping areas, 4 beds, and two full bathrooms.
              <br /><br />
              Location and layout doesn't get any better than this!
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <img
                    src={photos[1]}
                    alt="Whistler Village Penthouse Interior"
                    className="w-full h-full object-cover rounded-lg"
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
                <p className="text-gray-800 mb-6">
                  Hosting up to 7 guests comfortably, the home features 4 sleeping areas, 4 beds, and 2 full bathrooms. One of the highlights is the unique loft bedroom with bunkbeds, tall ceilings and a cozy chalet feel that kids and extra guests absolutely love. The main bedrooms are warm and inviting with plenty of natural light, making it the perfect place to unwind after a full day outdoors.
                  <br /><br />
                  Enjoy a fully equipped kitchen for home-cooked dinners, a spacious living room for evening hangouts and movie nights, and complimentary parking included with your stay. This is the ideal base for families, friends or small groups looking to enjoy Whistler with comfort, style and convenience.
                  <br /><br />
                  Ski in Ski out Access: No need to enter a vehicle to access the slopes, though the condo is about an 8-10 minute walk to and from the slopes.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6">
                  <li>Sleeps up to 7 guests</li>
                  <li>Three sleeping areas: two full bedrooms and a loft bedroom with bunkbeds</li>
                  <li>4 beds</li>
                  <li>Two full bathrooms</li>
                  <li>Penthouse unit with high ceilings and great natural light</li>
                  <li>Unique loft layout that adds a fun and memorable touch</li>
                  <li>Fully equipped kitchen for cooking and dining at home</li>
                  <li>Spacious living area perfect for relaxing or entertaining</li>
                  <li>Free underground parking included</li>
                  <li>Located in the well-known Tyndall Lodge building</li>
                </ul>
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
                You could not be more central. Tyndall Lodge is positioned in the middle of Whistler Village, directly beside the Olympic Plaza, skating rink, playground and the legendary Olympic Rings. Walk out your door into the village shops, cafes and restaurants, or stroll straight to the gondolas for skiing and snowboarding in winter and biking in summer.
                <br /><br />
                Everything Whistler is famous for is only minutes away on foot. Enjoy après-ski, live music, boutique stores, spas, parks, lakes and walking trails without ever needing a car. This location is ideal for guests looking for the perfect blend of fun, convenience and mountain charm.
              </p>
            </div>

            {/* Guest Access Section */}
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
                      d="M12.65 10C11.83 7.67 9.61 6 7 6C3.69 6 1 8.69 1 12C1 15.31 3.69 18 7 18C9.61 18 11.83 16.33 12.65 14H17V18H21V14H23V10H12.65ZM7 14C5.9 14 5 13.1 5 12C5 10.9 5.9 10 7 10C8.1 10 9 10.9 9 12C9 13.1 8.1 14 7 14Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Guest Access</h2>
              </div>
              <p className="text-gray-800 max-w-4xl">
                Access via code sent out 1 day prior to arrival.
              </p>
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
                      d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Registration Details</h2>
              </div>
              <p className="text-gray-800 max-w-4xl">
                <strong>Municipal registration number:</strong> 00015445
                <br />
                <strong>Provincial registration number:</strong> PM280640349
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Whistler Village Penthouse - All Photos
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
                aria-label="Close gallery"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <img
                        src={photo}
                        alt={`Whistler Village Penthouse ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading={index < 8 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="mt-1 text-center">
                      <span className="text-white text-xs">
                        {index + 1} / {photos.length}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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
                <img
                  src={photos[selectedPhotoIndex]}
                  alt={`Whistler Village Penthouse full view ${selectedPhotoIndex + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={handleImageLoad}
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

export default WhistlerVillagePenthouse;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};