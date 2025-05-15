import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import PropertyDetails from "@/components/PropertyDetails";
import { X } from "lucide-react";

const BearCreek = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/BearCreek 5-Bed/20250507_105617.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105719.jpg", 
    "/photos/properties/BearCreek 5-Bed/20250507_105641.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105629.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105756.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105810.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105819.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105832.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105840.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105846.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105913.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105919.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105939.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110012.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110028.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110042.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110058.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110142.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110200.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110204.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110409.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110415.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_110534.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103518.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103504.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103438.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103403.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103350.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103339.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103548.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103558.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103615.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103625.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_103643.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_104245.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_104255.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_104309.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_104336.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_104503.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_104512.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_104942.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_104959.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105420.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105429.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105453.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105503.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105522.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105529.jpg",
    "/photos/properties/BearCreek 5-Bed/20250507_105603.jpg",
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
        <title>Bear Creek | 5-Bed | Creekside - AceHost</title>
        <meta
          name="description"
          content="Beautifully Renovated & Fully Furnished 5 Bedroom, 4 Bathroom Home in Creekside, Whistler. Available from June 1 Until November 30, 2025. Perfect for families or groups of up to 10 guests. Pricing: $9,775/month (6-month minimum) or $13,000/month (3-month minimum)."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />
        <main>
          <PropertyHeader
            title="Bear Creek | 5-Bed | Creekside"
            guests={10}
            bedrooms={5}
            beds={5}
            bathrooms={4}
            priceRange="$9,775 per month - 6 month minimum or $13,000 per month - 3 month minimum"
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
                  <Image
                    src={photo}
                    alt={`Bear Creek interior ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
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
              Beautifully Renovated & Fully Furnished 5 Bedroom, 4 Bathroom Home in Creekside, Whistler.
              Available from June 1 Until November 30, 2025. Pricing options: $9,775 per month with 6-month minimum or $13,000 per month with 3-month minimum. 
              Welcome to this stunning, newly renovated luxury home nestled in the quiet neighborhood of 
              Creekside, Whistler.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[3]}
                    alt="Bear Creek Interior"
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
                  This spacious 5-bedroom, 4-bathroom house is perfect for a family or a quiet group of up to 10 people looking for a peaceful retreat. With its prime location, the Creekside gondola is just a short walk away, offering easy access to the mountain and all the outdoor activities Whistler has to offer. You'll also be close to all the amenities that Creekside has to offer, including shops, restaurants, and recreational facilities.
                </p>
                <p className="text-gray-800 mb-6">
                  <span className="font-bold">Key Features:</span><br />
                  • 5 Bedrooms, 4 Bathrooms – plenty of space for the whole family or group<br />
                  • Fully Furnished – Includes high-end furniture, kitchenware, and linens<br />
                  • Modern Kitchen – Equipped with luxury appliances including a speed oven, dishwasher, and more<br />
                  • Washer & Dryer – In-unit laundry for your convenience<br />
                  • Two Parking Spots – Available in the driveway<br />
                  • Prime Location – Easy walking distance to the Creekside gondola and close to all amenities<br />
                  • Quiet, Peaceful Neighborhood – Ideal for families or groups who value tranquility
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
              <p className="text-gray-800 max-w-4xl mb-6">
                This beautifully renovated luxury home is nestled in the quiet neighborhood of Creekside, Whistler. With its prime location, the Creekside gondola is just a short walk away, offering easy access to the mountain and all the outdoor activities Whistler has to offer.
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                You'll also be close to all the amenities that Creekside has to offer, including shops, restaurants, and recreational facilities. Enjoy quality coffee and delicious breads and pastries at Rockit Coffee. Dine at local favorites like Red Door Bistro, Rimrock Cafe, and Creekbread. The Creekside Market is conveniently located for all your grocery needs.
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                This is a true luxury home with everything you need for a comfortable, convenient stay in one of the most sought-after locations in Whistler. Don't miss out on this rare opportunity to live in Whistler's Creekside in a beautifully renovated home!
              </p>
              <p className="text-gray-800 max-w-4xl">
                Available from June 1 Until November 30, 2025. $9,775 per month with 6-month minimum or $13,000 per month with 3-month minimum.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Bear Creek - All Photos
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
                      <Image
                        src={photo}
                        alt={`Bear Creek ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority={index < 4}
                        loading={index < 8 ? "eager" : "lazy"}
                        quality={index < 12 ? 85 : 75}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzIyMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMzMiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4="
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
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default BearCreek; 