import React, { useCallback, useState } from "react";
import {
  blockGalleryTouchPropagation,
  usePhotoSwipeNavigation,
} from "@/hooks/usePhotoSwipeNavigation";
import Head from "next/head";
import Image from "next/image";
import { X } from "lucide-react";
import Navigation from "@/components/Navigation";
import PropertyHeaderEditorial from "@/components/PropertyHeaderEditorial";
import Footer from "@/components/Footer";
import type { ListingData } from "@/data/listings/types";
import {
  editorialGalleryGridClass,
  editorialGalleryImageSizes,
  editorialGalleryModalTileClass,
  editorialGalleryModalWrapperClass,
  editorialGalleryTileClass,
  editorialGalleryWrapperClass,
  editorialMainClass,
} from "@/lib/editorialPropertyLayout";
import { getListingAmenities } from "@/data/listings/amenities";
import {
  getFullPhotoSrc,
  getGalleryPhotoSrc,
} from "@/lib/optimizedPropertyPhotos";
import { getPropertyGeoBySlug } from "@/data/seo/propertyGeo";
import { buildVacationRentalSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/data/seo/business";
import {
  GALLERY_PREVIEW_LIMIT,
  getGalleryPhotoOrder,
} from "@/lib/galleryPhotoOrder";

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
  const galleryPhotos = getGalleryPhotoOrder(photos, listing.slug, {
    preserveOrder: listing.galleryPreserveOrder,
    deferPhotos: listing.galleryDeferPhotos,
  });

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
      return current === galleryPhotos.length - 1 ? 0 : current + 1;
    });
  }, [galleryPhotos.length]);

  const goToPrevPhoto = useCallback(() => {
    setIsImageLoading(true);
    setSelectedPhotoIndex((current) => {
      if (current === null) return null;
      return current === 0 ? galleryPhotos.length - 1 : current - 1;
    });
  }, [galleryPhotos.length]);

  const navigatePhoto = (direction: "prev" | "next") => {
    if (direction === "prev") goToPrevPhoto();
    else goToNextPhoto();
  };

  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchCancel,
  } = usePhotoSwipeNavigation(goToNextPhoto, goToPrevPhoto);

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  const openGallery = () => {
    setShowAllPhotos(true);
    setSelectedPhotoIndex(null);
  };

  const amenities =
    listing.amenities?.length
      ? listing.amenities
      : getListingAmenities(listing.slug);

  const listingGeo = getPropertyGeoBySlug(listing.slug);
  const guestCount =
    typeof header.guests === "number"
      ? header.guests
      : Number(String(header.guests).match(/\d+/)?.[0]);
  const bedroomCount =
    typeof header.bedrooms === "number"
      ? header.bedrooms
      : Number(String(header.bedrooms).match(/\d+/)?.[0]);

  const fallbackVacationRentalSchema =
    !structuredData
      ? buildVacationRentalSchema({
          title: header.title,
          url: `${SITE_URL}/listings/${listing.slug}`,
          geo: listingGeo,
          bedroomCount: Number.isFinite(bedroomCount) ? bedroomCount : undefined,
          guestCount: Number.isFinite(guestCount) ? guestCount : undefined,
          images: photos.slice(0, 3),
        })
      : null;

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
        {fallbackVacationRentalSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(fallbackVacationRentalSchema),
            }}
          />
        )}
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className={editorialMainClass}>
          <PropertyHeaderEditorial
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
            amenities={amenities}
            onMorePhotosClick={openGallery}
            geo={listingGeo}
            schemaImages={photos.slice(0, 3)}
          />

          <div className={editorialGalleryWrapperClass} id="photos">
            <div className={editorialGalleryGridClass}>
              {galleryPhotos
                .slice(0, GALLERY_PREVIEW_LIMIT)
                .map((photo, index) => (
                <div
                  key={`${photo}-${index}`}
                  className={editorialGalleryTileClass}
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={getGalleryPhotoSrc(photo)}
                    alt={`${photoAltPrefix} ${index + 1}`}
                    fill
                    sizes={editorialGalleryImageSizes}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                    quality={index < 4 ? 85 : 75}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
                ))}
            </div>
            {galleryPhotos.length > GALLERY_PREVIEW_LIMIT && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="inline-flex items-center px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium"
                >
                  View all {galleryPhotos.length} photos
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

            <div className={editorialGalleryModalWrapperClass}>
              <div className={editorialGalleryGridClass}>
                {galleryPhotos.map((photo, index) => (
                  <div key={`${photo}-${index}`} className="mb-6">
                    <div
                      className={editorialGalleryModalTileClass}
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={getGalleryPhotoSrc(photo)}
                        alt={`${photoAltPrefix} ${index + 1}`}
                        fill
                        sizes={editorialGalleryImageSizes}
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority={index < 6}
                      />
                    </div>
                    <div className="mt-1 text-center">
                      <span className="text-white text-xs">
                        {index + 1} / {galleryPhotos.length}
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
            onTouchCancel={handleTouchCancel}
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
                {...blockGalleryTouchPropagation}
              >
                <Image
                  src={getFullPhotoSrc(galleryPhotos[selectedPhotoIndex])}
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
                {selectedPhotoIndex + 1} / {galleryPhotos.length}
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
