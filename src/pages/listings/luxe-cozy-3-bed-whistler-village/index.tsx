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

const LuxeCozyWhistlerVillage = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/02-1 4668 Blackcomb Way 02-Edit.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/03-1 4668 Blackcomb Way 03.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/04-1 4668 Blackcomb Way 04-Edit.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/05-1 4668 Blackcomb Way 05.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/06-1 4668 Blackcomb Way 06.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/07-1 4668 Blackcomb Way 07.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/08-1 4668 Blackcomb Way 08.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/09-1 4668 Blackcomb Way 09.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/10-1 4668 Blackcomb Way 10.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/11-1 4668 Blackcomb Way 11.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/12-1 4668 Blackcomb Way 12.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/13-1 4668 Blackcomb Way 13.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/14-1 4668 Blackcomb Way 14.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/15-1 4668 Blackcomb Way 15.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/17-1 4668 Blackcomb Way 16.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/18-1 4668 Blackcomb Way 17.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/19-1 4668 Blackcomb Way 18.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/20-1 4668 Blackcomb Way 19.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/21-1 4668 Blackcomb Way 20.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/22-1 4668 Blackcomb Way 21.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/23-1 4668 Blackcomb Way 22-Edit.jpg",
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
        selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1
      );
    } else {
      setSelectedPhotoIndex(
        selectedPhotoIndex === photos.length - 1 ? 0 : selectedPhotoIndex + 1
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
        <title>Luxe-Cozy 3-Bed Whistler Village - AceHost</title>
        <meta
          name="description"
          content="Experience Whistler luxury in this stunning 3-bedroom, 3-bathroom townhome located in the heart of Blackcomb. This end unit offers an ideal mountain retreat with easy access to trails and a ski-in location for the perfect getaway."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Luxe-Cozy 3-Bed Whistler Village"
            guests={6}
            bedrooms={3}
            beds={4}
            bathrooms={3}
            priceRange="$400-$1,700+ per night"
            airbnbLink="https://www.airbnb.ca/rooms/1249285355870765792?guests=1&adults=1&s=67&unique_share_id=dcc074b1-0fe5-477a-bc67-701bc6736b13"
            contactLink="/contact"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Luxe-Cozy Whistler Village interior ${index + 1}`}
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
          </div>

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Welcome to our luxurious 3-bedroom, 3-bathroom townhome located in
              the heart of Blackcomb, Whistler! This end unit offers an ideal
              mountain retreat for those looking for a unique & cozy log chalet
              feel. A peaceful location with easy access to the biking/hiking
              trails at Lost Lake and snowshoe/cross-country trails during the
              winter. SKI In SKI Out home. Walking distance to the main Whistler
              Village and ski lifts.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[4]}
                    alt="Luxe-Cozy Whistler Village Interior"
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
                  Escape to mountain bliss in our stunning 3-bedroom, 3-bathroom
                  townhome nestled in Blackcomb, Whistler. This end unit
                  promises the ultimate retreat with serene surroundings and
                  direct access to the Lost Lake biking and hiking trails. In
                  winter, enjoy the convenience of ski-in access (snow
                  conditions permitting) or hop on the free shuttle to the
                  slopes.
                </p>
                <p className="text-gray-800 mb-6">
                  Step inside to find a spacious, inviting living area featuring
                  a cozy wood-burning fireplace and upscale furnishings. The
                  fully equipped kitchen and dining area are perfect for family
                  meals, and the private patio with BBQ grill offers delightful
                  al fresco dining. After a day of adventure, relax in your
                  private hot tub or explore the nearby trails.
                </p>
                <p className="text-gray-800">
                  Our townhome comfortably accommodates up to 8 guests, with a
                  king bed in the master suite, a queen bed in the second
                  bedroom, and two singles in the third. Additional amenities
                  include EV charging in the garage (note: adaptor not
                  included). For your comfort and convenience, please note that
                  we do not allow pets, smoking, or parties.
                </p>
              </div>
            </div>

            {/* Guest Access Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[9]}
                    alt="Luxe-Cozy Whistler Village Living Area"
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
                        d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Guest Access</h2>
                </div>

                <p className="text-gray-800 mb-6">
                  Escape to mountain bliss in our stunning 3-bedroom, 3-bathroom
                  townhome nestled in Blackcomb, Whistler. This end unit
                  promises the ultimate retreat with serene surroundings and
                  direct access to the Lost Lake biking and hiking trails. In
                  winter, enjoy the convenience of ski-in access (snow
                  conditions permitting) or hop on the free shuttle to the
                  slopes.
                </p>
                <p className="text-gray-800 mb-6">
                  Step inside to find a spacious, inviting living area featuring
                  a cozy wood-burning fireplace and upscale furnishings. The
                  fully equipped kitchen and dining area are perfect for family
                  meals, and the private patio with BBQ grill offers delightful
                  al fresco dining. After a day of adventure, relax in your
                  private hot tub or explore the nearby trails.
                </p>
                <p className="text-gray-800">
                  Our townhome comfortably accommodates up to 8 guests, with a
                  king bed in the master suite, a queen bed in the second
                  bedroom, and two singles in the third. Additional amenities
                  include EV charging in the garage (note: adaptor not
                  included). For your comfort and convenience, please note that
                  we do not allow pets, smoking, or parties.
                </p>
              </div>
            </div>

            {/* Other Things to Note Section */}
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
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Other Things to Note</h2>
              </div>
              <ul className="list-disc pl-5 mb-6 text-gray-800">
                <li className="mb-2">No pets allowed</li>
                <li className="mb-2">No smoking</li>
                <li className="mb-2">No party crowds</li>
              </ul>
              <p className="text-gray-800 font-medium mb-2">
                Registration number
              </p>
              <p className="text-gray-800">00011803</p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Luxe-Cozy 3-Bed Whistler Village - All Photos ({photos.length})
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
                        alt={`Luxe-Cozy Whistler Village photo ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority={index < 4}
                        loading={index < 4 ? "eager" : "lazy"}
                        quality={75}
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};

export default LuxeCozyWhistlerVillage;
