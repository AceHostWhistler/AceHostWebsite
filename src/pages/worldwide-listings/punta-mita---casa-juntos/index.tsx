import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X, MapPin, Users, Bed, Bath, Check } from "lucide-react";

const PuntaMitaCasaJuntos = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Property photos - updated to match actual files in the directory
  const photos = [
    "/photos/properties/Punta Mita/242608_2093 copy 2.jpg",
    "/photos/properties/Punta Mita/242608_2089 copy 2.jpg",
    "/photos/properties/Punta Mita/242608_2083 copy.jpg",
    "/photos/properties/Punta Mita/242608_2031 copy.jpg",
    "/photos/properties/Punta Mita/242608_2005 copy.jpg",
    "/photos/properties/Punta Mita/242708_1946 copy.jpg",
    "/photos/properties/Punta Mita/242708_1943 copy.jpg",
    "/photos/properties/Punta Mita/242708_1941 copy.jpg",
    "/photos/properties/Punta Mita/242708_1915 copy.jpg",
    "/photos/properties/Punta Mita/242708_1913 copy.jpg",
    "/photos/properties/Punta Mita/242708_1910 copy.jpg",
    "/photos/properties/Punta Mita/242708_1997 copy.jpg",
    "/photos/properties/Punta Mita/242708_1992 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1061 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1079 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1098 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1103 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1106 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1125 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1145 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1164 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1197 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1234 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1254 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1287 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1377 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1400 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1423 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1443 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1445 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1466 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1473 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1487 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1500 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1535 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1615 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1679 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1695 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1723 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1761 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1846 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1848 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1855 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1921 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1942 copy.jpg",
    "/photos/properties/Punta Mita/DSC_1988 copy.jpg",
    "/photos/properties/Punta Mita/DSC_2042 copy.jpg",
    "/photos/properties/Punta Mita/DSC_2056 copy.jpg",
    "/photos/properties/Punta Mita/DSC_2122 copy.jpg",
    "/photos/properties/Punta Mita/DSC_2275 copy.jpg",
  ];

  const amenities = [
    "Beachfront",
    "Private Pool",
    "Ocean Views",
    "Gourmet Kitchen",
    "Full Staff",
    "Daily Housekeeping",
    "Concierge Service",
    "Private Chef",
    "Air Conditioning",
    "WiFi",
    "Outdoor Dining",
    "BBQ Area",
    "Jacuzzi",
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(false);
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

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>Punta Mita - Casa Juntos | AceHost Luxury Rentals</title>
        <meta
          name="description"
          content="Experience luxury in Punta Mita at Casa Juntos, a beautiful Mexican beachfront property with full staff including private chef, ocean views, and premium amenities."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader 
            title="Punta Mita - Casa Juntos"
            guests={16}
            bedrooms={8}
            bathrooms={8}
            priceRange="$3,500-$5,000 per night"
            airbnbLink="https://www.airbnb.ca/rooms/561767409786915919?guests=1&adults=1&s=67&unique_share_id=7a6e7b88-1a8b-4352-acca-56db762955cd"
          />

          {/* Video Section */}
          <div className="max-w-7xl mx-auto px-4 mb-10">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                ref={videoRef}
                src="https://player.vimeo.com/video/1072749932?h=a4f9e2ffdd"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Punta Mita - Casa Juntos"
              ></iframe>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 28).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Punta Mita - Casa Juntos ${index + 1}`}
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
          <div className="max-w-6xl mx-auto px-4 mb-16" id="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Property</h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    Punta Mita Casa Juntos is a stunning beachfront luxury villa located within the exclusive Punta Mita resort community. This magnificent property offers panoramic views of the Pacific Ocean and direct beach access, creating the ultimate Mexican Riviera experience.
                  </p>
                  <p className="mt-4">
                    With 8 bedrooms accommodating up to 16 guests, Casa Juntos features a gorgeous infinity pool overlooking the ocean, spacious indoor and outdoor living areas, and comes with full staff including a private chef to elevate your stay to the highest level of luxury and comfort.
                  </p>
                  <p className="mt-4">
                    The villa's prime location within the gated Punta Mita community gives guests access to world-class golf courses, beach clubs, and restaurants, while offering complete privacy and security.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Pricing</h2>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-medium mb-2">$3,500-$5,000 USD per night</p>
                    <p className="text-sm text-gray-600">
                      Rates vary by season and length of stay. Please contact us for specific dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Punta Mita - Casa Juntos - All Photos ({photos.length})
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Punta Mita - Casa Juntos ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
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
                  onLoadingComplete={handleImageLoad}
                  quality={85}
                  loading="eager"
                  priority
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                  sizes="100vw"
                  onLoadingComplete={() => setIsImageLoading(false)}
                  quality={85}
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

export default PuntaMitaCasaJuntos;
