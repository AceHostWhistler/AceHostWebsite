import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const SuperYachtThailand = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-2.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-5.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-8.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-9.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bridge WEB-2.jpg",
    "/photos/properties/Yacht Thailand Sea D/Corridor WEB-2.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-5.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-8.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-11.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-14.jpg",
    "/photos/properties/Yacht Thailand Sea D/Double Bedroom WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Double Bedroom WEB-6.jpg",
    "/photos/properties/Yacht Thailand Sea D/Galry WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Galry WEB-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Gym WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-4.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-8.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-9.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-12.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-4.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-6.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-8.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-10.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-11.jpg",
    "/photos/properties/Yacht Thailand Sea D/Sun Deck WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Sun Deck WEB-12.jpg",
    "/photos/properties/Yacht Thailand Sea D/TV Room WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/TV Room WEB-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Twin Bedroom WEB-4.jpg",
    "/photos/properties/Yacht Thailand Sea D/Twin Bedroom WEB-5.jpg",
    "/photos/properties/Yacht Thailand Sea D/Twin Bedroom WEB-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/VIP Bedroom-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/VIP Bedroom-6.jpg",
    "/photos/properties/Yacht Thailand Sea D/VIP Bedroom-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/VIP Bedroom-9.jpg",
    "/photos/properties/Yacht Thailand Sea D/Yacht_Sead_VIP Bedroom-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Yacht_Sead_VIP Bedroom-5.jpg",
    "/photos/properties/Yacht Thailand Sea D/Yacht_Sead_VIP Bedroom-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/Yacht_Sead_VIP Bedroom-9.jpg",
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(false);
    setSelectedPhotoIndex(index);
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
        <title>Super Yacht | Thailand / SE Asia - AceHost</title>
        <meta
          name="description"
          content="Experience luxury aboard the 130-ft Super Yacht in Thailand. This beautifully appointed motor yacht offers a VIP experience with an 8-member crew, wake boats, water activities, and 5-star service."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>10 guests</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Super Yacht | Thailand / SE Asia
            </h1>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                Request for exact availability and pricing
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                More Photos
              </button>
              <Link
                href="#details"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white border border-gray-700 rounded font-medium hover:bg-gray-800 text-sm sm:text-base"
              >
                Details
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book Now
              </Link>
            </div>
          </div>

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
                    alt={`Super Yacht Thailand interior ${index + 1}`}
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

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              The 130-ft beautifully appointed luxury Motor Yacht Sea D offers a
              VIP experience in the waters of Phuket. Engineered in Italy, Motor
              Yacht Sea D provides all-inclusive hospitality for 10 guests,
              assuring luxurious comfort and entertainment. With an expansive
              interior and exterior space, this superyacht welcomes guests with
              an 8-member crew, professionally trained to deliver a 5-star
              charter experience.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[0]}
                    alt="Super Yacht Thailand - Bow"
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
                <p className="text-gray-800 mb-6">
                  The ultimate luxury experience awaits you aboard this 130-ft
                  Super Yacht, a stunning vessel that includes two wake speed
                  boats. Crafted in Italy, this superyacht for up to 10 guests
                  offers an exclusive VIP experience, while offering numerous
                  options to keep active daily.
                </p>
                <p className="text-gray-800 mb-6">
                  Wake up at your own time to a meal of your choice and coffee
                  made by our best chefs on board. With its expansive interior
                  and exterior space, a professional 8-member crew dedicated to
                  delivering a 5-star service, a luxurious master state room, a
                  VIP state room, and 3 guest state rooms. The yacht also
                  includes a fully equipped gym, tranquil massage room, and two
                  large dining tables indoor and outdoor.
                </p>
                <p className="text-gray-800">
                  Activities onboard: There are plenty activities on board. The
                  boat offers wake-surfing with the choice of 2 wake boats and
                  boat drivers, 3 e-foils, fishing, kayaks, paddle boards,
                  etc... Explore the surroundings with our stand-up paddle
                  boards and double kayaks, or dive into the crystal-clear
                  waters with our snorkeling and scuba diving equipment. With
                  more options such as bottom fishing and spearfishing,
                  exploring nearby islands and discover hidden gems during our
                  island-hopping excursions, your time on board will be full of
                  pursuits if you choose to keep busy.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Super Yacht Thailand - All Photos
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Super Yacht Thailand interior ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority={index < 6}
                        loading={index < 6 ? "eager" : "lazy"}
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
            onTouchStart={() => {
              setTouchStartX(null);
              setTouchEndX(null);
            }}
            onTouchMove={(e) => {
              if (touchStartX === null) {
                setTouchStartX(e.touches[0].clientX);
              }
              setTouchEndX(e.touches[0].clientX);
            }}
            onTouchEnd={() => {
              if (touchStartX === null || touchEndX === null) return;
              
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
            }}
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
                  onLoadingComplete={() => setIsImageLoading(false)}
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};

export default SuperYachtThailand;
