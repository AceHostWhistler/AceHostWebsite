import React, { useState, useRef } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const NorthlandsProperty = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Northlands Symphony 29/01 - 20251128 A7M4 02 A1_02882_.jpg",
    "/photos/properties/Northlands Symphony 29/02 - 20251128 A7M4 02 A1_02752.jpg",
    "/photos/properties/Northlands Symphony 29/03 - 20251128 A7M4 02 A1_02760.jpg",
    "/photos/properties/Northlands Symphony 29/04 - 20251128 A7M4 02 A1_02831.jpg",
    "/photos/properties/Northlands Symphony 29/05 - 20251128 A7M4 02 A1_02824.jpg",
    "/photos/properties/Northlands Symphony 29/06 - 20251128 A7M4 02 A1_03034.jpg",
    "/photos/properties/Northlands Symphony 29/07 - 20251128 A7M4 02 A1_02793.jpg",
    "/photos/properties/Northlands Symphony 29/08 - 20251128 A7M4 02 A1_02783.jpg",
    "/photos/properties/Northlands Symphony 29/09 - 20251128 A7M4 02 A1_02844.jpg",
    "/photos/properties/Northlands Symphony 29/10 - 20251128 A7M4 02 A1_02805.jpg",
    "/photos/properties/Northlands Symphony 29/11 - 20251128 A7M4 02 A1_02766.jpg",
    "/photos/properties/Northlands Symphony 29/12 - 20251128 A7M4 02 A1_03041.jpg",
    "/photos/properties/Northlands Symphony 29/13 - 20251128 A7M4 02 A1_02894.jpg",
    "/photos/properties/Northlands Symphony 29/14 - 20251128 A7M4 02 A1_02774.jpg",
    "/photos/properties/Northlands Symphony 29/15 - 20251128 A7M4 02 A1_02901.jpg",
    "/photos/properties/Northlands Symphony 29/16 - 20251128 A7M4 02 A1_02909.jpg",
    "/photos/properties/Northlands Symphony 29/17 - 20251128 A7M4 02 A1_02926.jpg",
    "/photos/properties/Northlands Symphony 29/18 - 20251128 A7M4 02 A1_02954.jpg",
    "/photos/properties/Northlands Symphony 29/19 - 20251128 A7M4 02 A1_03009.jpg",
    "/photos/properties/Northlands Symphony 29/20 - 20251128 A7M4 02 A1_03021.jpg",
    "/photos/properties/Northlands Symphony 29/21 - 20251128 A7M4 02 A1_03027.jpg",
    "/photos/properties/Northlands Symphony 29/22 - 20251128 A7M4 02 A1_02933.jpg",
    "/photos/properties/Northlands Symphony 29/23 - 20251128 A7M4 02 A1_02945.jpg",
    "/photos/properties/Northlands Symphony 29/24 - 20251128 A7M4 02 A1_02972.jpg",
    "/photos/properties/Northlands Symphony 29/25 - 20251128 A7M4 02 A1_02978.jpg",
    "/photos/properties/Northlands Symphony 29/26 - 20251128 A7M4 02 A1_02989.jpg",
    "/photos/properties/Northlands Symphony 29/28 - 20251128 A7M4 02 A1_02957.jpg",
    "/photos/properties/Northlands Symphony 29/29 - 20251128 A7M4 02 A1_02962.jpg",
    "/photos/properties/Northlands Symphony 29/30 - 20251128 A7M4 02 A1_02861.jpg",
    "/photos/properties/Northlands Symphony 29/31 - 20251128 A7M4 02 A1_02855.jpg",
  ];

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
        navigatePhoto('next');
      } else {
        navigatePhoto('prev');
      }
    }
    
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>Northlands Walk to village/slopes | Luxury 4-bed - AceHost</title>
        <meta
          name="description"
          content="Beautifully located townhome-style condo in the Symphony Building, right in the heart of Whistler Village. This unique 3-level home offers a private entrance and easy access to slopes, restaurants, and shops."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />
        <main>
          <PropertyHeader
            title="Northlands Walk to village/slopes | Luxury 4-bed"
            guests={6}
            bedrooms={2}
            beds={4}
            bathrooms={3}
            priceRange="$500-1200 in summer"
            winterPrice="$750-1500 in winter"
            holidayPrice="$2500-3500+ for Christmas/NYE"
            airbnbLink="https://www.airbnb.ca/rooms/1566952897757488737?guests=1&adults=1&s=67&unique_share_id=70d8a9c5-be29-49cb-a1de-03c1e0ec667b"
          />

          {/* Photo Grid - Updated to have 2 columns on mobile */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 28).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <img
                    src={photo}
                    alt={`Northlands Symphony interior ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
            {photos.length > 28 && (
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
              Welcome to this beautifully located townhome-style condo in the Symphony Building, right in the heart of Whistler Village.
              <br /><br />
              This unique 3-level home offers a private entrance from the outside and sits next to the Whistler Racquet & Pickleball Club, with restaurants, shops, and village amenities all around you.
              <br /><br />
              The slopes are an easy 12-15 minute walk away, and the main village grocery store, Fresh St. Market, is directly across the street.
              <br /><br />
              Perfect location, comfort, and layout for vacation!
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <img
                    src={photos[1]}
                    alt="Northlands Symphony Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                  Hosting up to 6 guests in 2 full bedrooms with ensuite private bathrooms, the home is thoughtfully designed across three levels, creating a comfortable and functional layout for families, couples, and small groups.
                  The primary bedroom features a king bed and a private ensuite bathroom. The second bedroom includes two single Murphy beds, also with its own full ensuite bathroom, making it perfect for kids or friends. The living room offers a pullout sofa bed for additional sleeping space if needed, with a full bathroom as well.
                </p>
                <p className="text-gray-800 mb-6">
                  Enjoy a fully equipped kitchen for home-cooked meals, a cozy living area for relaxing after a day on the mountain, and three full bathrooms for added convenience. The private exterior entrance gives the home a true townhome feel, while the multi-level layout creates natural separation between sleeping and living spaces.
                </p>
                <p className="text-gray-800 mb-6">
                  Free underground parking for one vehicle is included, with additional paid parking available nearby for extra cars.
                </p>
              </div>
            </div>

            {/* Property Features Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <img
                    src={photos[4]}
                    alt="Northlands Symphony Features"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                        d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Property Features</h2>
                </div>
                <p className="text-gray-800 mb-6">
                  <strong>Ski Access:</strong><br />
                  This is a walk-to-the-slopes location. The gondolas and lifts are approximately a 12 to 15 minute walk, making it easy to access the mountain without needing a vehicle.
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-800 space-y-2">
                  <li>Sleeps up to 6 guests</li>
                  <li>2 bedrooms + 1 pullout sofa bed in living room. 4 beds total, in 2 full bedrooms.</li>
                  <li>Primary bedroom with king bed and ensuite bathroom</li>
                  <li>Second bedroom with two single Murphy beds</li>
                  <li>3 full bathrooms total. Rare find in a 2 bedroom!</li>
                  <li>Unique three-level townhome layout</li>
                  <li>Private exterior entrance</li>
                  <li>Fully equipped kitchen</li>
                  <li>Cozy living and dining area</li>
                  <li>Free underground parking for 1 vehicle</li>
                  <li>Paid parking nearby for additional vehicles</li>
                  <li>Located in the Symphony Building in Whistler Village</li>
                  <li>Steps from restaurants, shops, and village amenities</li>
                  <li>Fresh St. Market grocery store directly across the street</li>
                  <li>Next to the Whistler Racquet & Pickleball Club</li>
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
              <div className="relative aspect-[4/3] mb-6 max-w-3xl">
                <img
                  src={photos[0]}
                  alt="Northlands Symphony Location"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-800 max-w-4xl mb-6">
                You are right in the centre of Whistler Village. The Symphony Building offers one of the most convenient village locations, with dining, shopping, cafés, and entertainment all within walking distance. Fresh St. Market is across the street for groceries and essentials, and the Racquet & Pickleball Club is next door for fitness and recreation.
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                Walk to the slopes in 12 to 15 minutes, explore the village on foot, enjoy après-ski, boutique shopping, spas, lakes, and trails without ever needing a car. This location is ideal for guests looking for central access, walkability, and a true village experience.
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                <strong>Guest access</strong><br />
                Private exterior entrance with secure code access. Entry instructions and access code will be sent one day prior to arrival.
              </p>
              <p className="text-gray-800 max-w-4xl">
                <strong>Registration details</strong><br />
                Municipal registration number: 00015534<br />
                Provincial registration number: PM817047827
              </p>
              <p className="text-gray-800 max-w-4xl mt-6">
                <strong>Guest access:</strong><br />
                Private exterior entrance with secure code access. Entry instructions and access code will be sent one day prior to arrival.
              </p>
              <p className="text-gray-800 max-w-4xl mt-6">
                <strong>Registration details:</strong><br />
                Municipal registration number: 00015534<br />
                Provincial registration number: PM817047827
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Northlands Symphony - All Photos
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <img
                        src={photo}
                        alt={`Northlands Symphony ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading={index < 8 ? "eager" : "lazy"}
                      />
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
                  alt={`Property full view ${selectedPhotoIndex + 1}`}
                  className="w-full h-full object-contain transition-opacity duration-300"
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default NorthlandsProperty;