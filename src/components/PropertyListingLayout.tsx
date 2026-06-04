import React, { useCallback, useState } from "react";
import { usePhotoSwipeNavigation } from "@/hooks/usePhotoSwipeNavigation";
import Head from "next/head";
import Image from "next/image";
import { X } from "lucide-react";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import type { ListingData } from "@/data/listings/types";

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzIyMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMzMiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4=";

interface PropertyListingLayoutProps {
  listing: ListingData;
  children: React.ReactNode;
}

const PropertyListingLayout: React.FC<PropertyListingLayoutProps> = ({
  listing,
  children,
}) => {
  const {
    photos,
    seo,
    header,
    structuredData,
    galleryTitle,
    photoAltPrefix,
    videoUrl,
  } = listing;

  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
    setSelectedPhotoIndex(index);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const goToNextPhoto = useCallback(() => {
    setIsImageLoading(true);
    setSelectedPhotoIndex((current) => {
      if (current === null) return null;
      return current === photos.length - 1 ? 0 : current + 1;
    });
  }, [photos.length]);

  const goToPrevPhoto = useCallback(() => {
    setIsImageLoading(true);
    setSelectedPhotoIndex((current) => {
      if (current === null) return null;
      return current === 0 ? photos.length - 1 : current - 1;
    });
  }, [photos.length]);

  const navigatePhoto = (direction: "prev" | "next") => {
    if (direction === "prev") goToPrevPhoto();
    else goToNextPhoto();
  };

  const { handleTouchStart, handleTouchMove, handleTouchEnd } =
    usePhotoSwipeNavigation(goToNextPhoto, goToPrevPhoto);

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  const openGallery = () => {
    setShowAllPhotos(true);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {seo.keywords && <meta name="keywords" content={seo.keywords} />}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        )}
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title={header.title}
            guests={header.guests}
            bedrooms={header.bedrooms}
            bathrooms={header.bathrooms}
            beds={header.beds}
            priceRange={header.priceRange}
            winterPrice={header.winterPrice}
            holidayPrice={header.holidayPrice}
            airbnbLink={header.airbnbLink}
            contactLink={header.contactLink}
            contactText={header.contactText}
            onMorePhotosClick={openGallery}
          />

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
                    alt={`${photoAltPrefix} ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                    quality={index < 4 ? 85 : 75}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
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

          {videoUrl && (
            <div className="max-w-6xl mx-auto px-4 mb-16">
              <video
                className="w-full rounded-lg"
                controls
                playsInline
                preload="metadata"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          )}

          {children}
        </main>

        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                {galleryTitle} - All Photos
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
                        alt={`${photoAltPrefix} ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority={index < 6}
                        loading={index < 6 ? "eager" : "lazy"}
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
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <div
                className="relative h-full w-full touch-pinch-zoom"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`${photoAltPrefix} full view ${selectedPhotoIndex + 1}`}
                  fill
                  priority
                  draggable={false}
                  className={`object-contain transition-opacity duration-300 select-none ${
                    isImageLoading ? "opacity-0" : "opacity-100"
                  }`}
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

export default PropertyListingLayout;
