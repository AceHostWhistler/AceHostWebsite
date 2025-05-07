import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const WhisperingPines = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/The Aspens/4800-Spearhead-Drive-1.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-2.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-3.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-4.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-5.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-6.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-7.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-8.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-9.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-10.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-11.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-12.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-13.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-14.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-15.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-16.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-17.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-18.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-19.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-20.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-21.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-22.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-23.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-24.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-25.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-26.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-27.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-28.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-29.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-30.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-31.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-32.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-33.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-34.JPG",
    "/photos/properties/The Aspens/4800-Spearhead-Drive-35.JPG",
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
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

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>The Aspens | Luxe 2-Bed Ski in/Out | On Slopes - AceHost</title>
        <meta
          name="description"
          content="Ultimate ski-in, ski-out in Aspens. Ground-level unit steps from hot tub/pool, Blackcomb Mountain, and ski lifts. Main & Upper Whistler Village within walking distance. Nearby biking trails, 2 golf courses, and Lost Lake."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="The Aspens | Luxe 2-Bed Ski in/Out | On Slopes"
            guests={4}
            bedrooms={2}
            beds={3}
            bathrooms={2}
            priceRange="$350-$1,300 per night"
            airbnbLink="https://www.airbnb.com/rooms/1072474554447345991?guests=1&adults=1&s=67&unique_share_id=e556b35c-05b5-40b6-91e1-5304ffafc23b"
            contactLink="/contact"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 28).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`The Aspens interior ${index + 1}`}
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
              Ultimate ski-in, ski-out in Aspens. Ground-level unit steps from
              hot tub/pool, Blackcomb Mountain, and ski lifts. Main & Upper
              Whistler Village within walking distance. Nearby biking trails, 2
              golf courses, and Lost Lake make this spot perfect year-round!
              This exclusive unit offers ultimate convenience, making it the
              closest in the building to the hot tub/pool and the ski slopes.
              With three inviting hot tubs right on the ski mountain, creating
              the perfect ambiance for your Whistler retreat.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[0]}
                    alt="The Aspens Interior"
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
                  Accommodating up to 4 guests, this 2-bedroom, 2-bathroom unit
                  is designed for comfort, relaxation, and convenience. The
                  open-plan living and dining area is perfect for entertaining.
                  After a big day on the slopes, cozy up by the indoor
                  fireplace. Or lounge on the patio and make use of the BBQ.
                </p>
                <p className="text-gray-800 mb-6">
                  To enhance your relaxation, unwind in the inviting hot tub and
                  pool facility. The kitchen is equipped with modern
                  conveniences, including a Keurig coffee machine and soda
                  stream. Please remember to bring your favourite Keurig pods to
                  savour your preferred brew during your stay.
                </p>
                <p className="text-gray-800">
                  Immerse yourself in the perfect blend of comfort and
                  convenience in this inviting retreat. The communal laundry
                  facility is located just around the corner of the unit on the
                  same ground floor.{" "}
                  <span className="font-bold">
                    **No pets allowed- a large fine will be incurred if pets are
                    brought into the suite**
                  </span>
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[3]}
                    alt="The Aspens Bedroom"
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
                  <span className="font-medium">Master Bedroom:</span> The
                  master bedroom offers a Queen bed with an ensuite bathroom
                  with a shower and bath.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2:</span> The second
                  bedroom offers 2 singles with an ensuite bathroom with a
                  shower.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2.5:</span> A pullout
                  Queen sofa bed in the main room.
                </p>
                <p className="mb-6">Comfortably sleeping up to 6 guests.</p>
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
              <p className="text-gray-800 max-w-4xl mb-6">
                Located in the &quot;Aspens&quot; complex in the Upper Village.
                This true Ski in Ski out home is located right on the ski
                mountain, so you can ski in and out directly from your front
                door.
              </p>
              <p className="text-gray-800 max-w-4xl">
                Main & Upper Whistler Village are within walking distance,
                giving you easy access to all the restaurants, shops, and
                entertainment options. In the summer, you're close to
                biking trails, 2 golf courses, and Lost Lake, making this spot
                perfect year-round.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                The Aspens - All Photos
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
                        alt={`The Aspens ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                  sizes="100vw"
                  onLoadingComplete={handleImageLoad}
                  quality={85}
                  loading="eager"
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

export default WhisperingPines;
