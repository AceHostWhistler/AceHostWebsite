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

const HoodRiverLuxuryHome = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/hood-river-luxury-home/View 1.jpg",
    "/photos/properties/hood-river-luxury-home/View 2.jpg",
    "/photos/properties/hood-river-luxury-home/View 3.jpg",
    "/photos/properties/hood-river-luxury-home/View 4.jpg",
    "/photos/properties/hood-river-luxury-home/View 5.jpg",
    "/photos/properties/hood-river-luxury-home/View 6.jpg",
    "/photos/properties/hood-river-luxury-home/View 7.jpg",
    "/photos/properties/hood-river-luxury-home/View 9.jpg",
    "/photos/properties/hood-river-luxury-home/View 10.jpg",
    "/photos/properties/hood-river-luxury-home/Exterior 1.jpg",
    "/photos/properties/hood-river-luxury-home/Exterior 3sv.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 1.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 2.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 3.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 4.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 5.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 6.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 7.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 8.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 9.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 10.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 11.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 12.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 13b.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 14.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 15.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 16.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 17.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 18.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 19.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 20.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 21.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 22.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 23.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 24.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 25.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 26.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 27.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 28.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 29.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 30 - Garage.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 31 - Garage.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 32 - Garage.jpg",
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
        <title>Hood River, US | Water Views - AceHost</title>
        <meta
          name="description"
          content="Beautiful views of Hood River in a Luxurious 4-floor apartment. Perfect location located 1 block away from downtown. Recently renovated with 5 bedrooms for up to 10 guests. Enjoy fresh air with sliding doors and bug screens."
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
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>650+ USD Nightly | Winter</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Hood River, US | Water Views
            </h1>

            {/* Pricing Information */}
            <div className="flex flex-col items-center mb-8 space-y-2">
              <div className="bg-gray-100 rounded-lg px-6 py-4 max-w-2xl w-full">
                <div className="space-y-2">
                  <p className="text-gray-800 text-center font-medium">
                    650+ USD Nightly | Winter
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                Minimum Stay Requirement: 2 nights weekdays | 3 weekends
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
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium hover:bg-gray-800 text-sm sm:text-base"
              >
                Details
              </Link>
              <a
                href="https://www.airbnb.ca/rooms/53497330?guests=1&adults=1&s=67&unique_share_id=b063d83c-aadc-4344-a38c-b009b67bd321&source_impression_id=p3_1744795711_P326VPoSz2IZZ4oG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
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
                    alt={`Hood River Luxury Home interior ${index + 1}`}
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
              Beautiful views of Hood River in a Luxurious 4-floor apartment. Perfect location located 1 block away from downtown. Home is recently renovated and includes 2 bidet toilets. Living room windows are slide doors, which include a bug screen, so you can open them for fresh air. Perfect for a cozy family getaway.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[12]}
                    alt="Hood River Luxury Home Interior"
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
                  Beautiful views of Hood River in a luxurious 4-floor apartment. Perfect location located 1 block away from downtown. Home is recently renovated and includes 2 bidet toilets. Living room windows are slide doors, which include a bug screen, so you can open them for fresh air. Perfect for a cozy family getaway.
                </p>
                <p className="text-gray-800 mb-6">
                  Spanning across 4 floors, this contemporary property boasts 5 bedrooms, sleeping 10 guests with 7 comfortable beds and 2.5 bathrooms. The living room has sliding doors that let you enjoy the fresh air and stunning views of downtown/the Columbia River. amazing patio. This house is ideal for a family or group getaway, looking for a luxurious experience.
                </p>
                <p className="text-gray-800">
                  Enjoy comfort and modernity in this recently renovated home featuring new luxury furniture. The open-concept living and dining area boasts floor-to-ceiling windows, flooding the room with natural light. The living room includes sliding patio doors that not only provide natural light and beautiful views but also feature bug screens, allowing you to enjoy the fresh air while keeping bugs out.
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
                Hood River, Oregon, United States. It's a very prestigious neighborhood. Walls are soundproof so inside is very quiet. For getting around you can walk straight into downtown without a vehicle. "The event site" is just a 2-3 minute drive.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Hood River Luxury Home - All Photos
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
                        alt={`Hood River Luxury Home ${index + 1}`}
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

export default HoodRiverLuxuryHome;
