import React, { useCallback, useState } from "react";
import { blockGalleryTouchPropagation, usePhotoSwipeNavigation } from "@/hooks/usePhotoSwipeNavigation";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import PropertyHeaderEditorial from "@/components/PropertyHeaderEditorial";
import {
  editorialGalleryGridClass,
  editorialGalleryImageSizes,
  editorialGalleryModalTileClass,
  editorialGalleryModalWrapperClass,
  editorialGalleryWrapperClass,
  editorialGalleryTileClass,
  editorialMainClass,
} from "@/lib/editorialPropertyLayout";
import { getWorldwideAmenities } from "@/data/worldwideAmenities";
import { getFullPhotoSrc, getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import {
  GALLERY_PREVIEW_LIMIT,
  getGalleryPhotoOrder,
} from "@/lib/galleryPhotoOrder";
import { airbnbButtonLg } from "@/lib/airbnbButtonStyles";
import { BEDORA_PLACE_PHOTOS } from "@/data/bedoraPlacePhotos";

const AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1682274339649339817?guests=1&adults=1&s=67&unique_share_id=65cb0895-1c19-4e3d-9a6b-57836a5fbac4";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzIyMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMzMiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4=";

const BedoraPlace = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const photos = BEDORA_PLACE_PHOTOS;
  const galleryPhotos = getGalleryPhotoOrder(photos, "bedora-place", {
    preserveOrder: true,
  });

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
        selectedPhotoIndex === 0
          ? galleryPhotos.length - 1
          : selectedPhotoIndex - 1
      );
    } else {
      setSelectedPhotoIndex(
        selectedPhotoIndex === galleryPhotos.length - 1
          ? 0
          : selectedPhotoIndex + 1
      );
    }
  };

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  const openGallery = () => {
    setShowAllPhotos(true);
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

  const { handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel } =
    usePhotoSwipeNavigation(goToNextPhoto, goToPrevPhoto);

  return (
    <>
      <Head>
        <title>Bedora Place | Ocean View Luxury Retreat | West Vancouver - AceHost</title>
        <meta
          name="description"
          content="Ocean-view luxury home in West Vancouver. 5 bedrooms, 6 beds, 3.5 baths, and space for 10 guests, with a games room, indoor and outdoor fireplaces, and a quiet upscale setting close to downtown Vancouver."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className={editorialMainClass}>
          <PropertyHeaderEditorial
            title="Bedora Place | Ocean View Luxury Retreat | West Vancouver"
            guests={10}
            bedrooms={5}
            beds={6}
            bathrooms={3.5}
            priceRange="$1,000-$2,500 per night | Weekday vs weekend in summer"
            airbnbLink={AIRBNB_LINK}
            amenities={getWorldwideAmenities("bedora-place")}
            onMorePhotosClick={openGallery}
            schemaImages={photos.slice(0, 3)}
          />

          <div className={editorialGalleryWrapperClass} id="photos">
            <div className={editorialGalleryGridClass}>
              {galleryPhotos.slice(0, GALLERY_PREVIEW_LIMIT).map((photo, index) => (
                <div
                  key={photo}
                  className={editorialGalleryTileClass}
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={getGalleryPhotoSrc(photo)}
                    alt={`Bedora Place West Vancouver ${index + 1}`}
                    fill
                    sizes={editorialGalleryImageSizes}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                    quality={index < 4 ? 85 : 75}
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
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

          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8" id="details">
            <p className="text-gray-800 mb-16 max-w-3xl mx-auto leading-relaxed text-lg">
              Enjoy summer from some of the best views in Vancouver. This spacious West Vancouver home has incredible ocean views, multiple living areas, a large kitchen and dining space, indoor and outdoor fireplaces, and a dedicated games room with a pool table, arcade, and table games. A steam shower, Nespresso machine, modern furnishings, ample parking, and a quiet upscale setting round out the stay.
            </p>

            <div className="max-w-6xl mx-auto mb-24">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={getGalleryPhotoSrc(photos[1])}
                      alt="Bedora Place living space"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
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
                  <div className="space-y-6 leading-relaxed">
                    <p className="text-gray-800">
                      Perfect for families or groups who want a private, comfortable stay close to trails, the ocean, and downtown Vancouver. The home sleeps 10 guests across 5 bedrooms and 6 beds, with 3.5 bathrooms.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-800">
                      <li><strong>Bedroom 1:</strong> King bed</li>
                      <li><strong>Bedroom 2:</strong> King bed</li>
                      <li><strong>Bedroom 3:</strong> Double bed and single bed</li>
                      <li><strong>Bedroom 4:</strong> King bed</li>
                      <li><strong>Bedroom 5:</strong> Sofa bed</li>
                    </ul>
                    <p className="text-gray-800">
                      There are three full bathrooms and a half bath. One bathroom includes a steam shower. The kitchen is fully equipped, with a Nespresso machine, dishwasher, and a large dining area for group meals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-0 mb-24 bg-gray-50 py-12 rounded-xl">
              <div className="flex flex-col md:flex-row gap-12 px-6 md:px-10">
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
                        <path d="M3.05 13.05C2.75 12.74 2.75 12.26 3.05 11.95L8.65 6.35C8.95 6.05 9.43 6.05 9.74 6.35L12.34 8.95C12.64 9.26 12.64 9.74 12.34 10.04L6.74 15.64C6.43 15.95 5.95 15.95 5.65 15.64L3.05 13.05Z" fill="white" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold">Games Room &amp; Outdoor Living</h2>
                  </div>
                  <div className="space-y-6 leading-relaxed">
                    <p className="text-gray-800">
                      A dedicated games room includes a pool table, arcade, and table games. Indoor and outdoor fireplaces, a fire pit, BBQ grill, outdoor dining, and private patios and decks make it easy to spend the evening outside with ocean views.
                    </p>
                    <p className="text-gray-800">
                      Guests have private access to the home, living spaces, games room, patios, and decks throughout the stay. Laundry facilities, garage parking, and additional free parking are included. Self check-in uses a smart lock, with arrival and parking details sent before check-in.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={getGalleryPhotoSrc(photos[0])}
                      alt="Bedora Place ocean-view terrace"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-24">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={getGalleryPhotoSrc(photos[4])}
                      alt="Bedora Place kitchen and dining"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
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
                          d="M13 4.06871V2H11V4.06871C7.38128 4.56343 4.56343 7.38128 4.06871 11H2V13H4.06871C4.56343 16.6187 7.38128 19.4366 11 19.9313V22H13V19.9313C16.6187 19.4366 19.4366 16.6187 19.9313 13H22V11H19.9313C19.4366 7.38128 16.6187 4.56343 13 4.06871ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold">Good to Know</h2>
                  </div>
                  <div className="space-y-6 leading-relaxed">
                    <p className="text-gray-800">
                      Portable air-conditioning units are available in the primary bedroom, one additional upstairs bedroom, and the main living room. The two lower-level bedrooms stay cooler in warmer weather.
                    </p>
                    <p className="text-gray-800">
                      A Pack &apos;n Play is available in the upstairs loft. Please bring your own Pack &apos;n Play sheets.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-800">
                      <li>Check-in after 4:00 p.m.</li>
                      <li>Checkout before 10:00 a.m.</li>
                      <li>10 guests maximum</li>
                      <li>No pets, no smoking, and no parties or events</li>
                      <li>Wifi, washer, dryer, TV, and a full kitchen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-0 mb-24 bg-gray-50 py-12 rounded-xl">
              <div className="flex flex-col md:flex-row gap-12 px-6 md:px-10">
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
                          d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold">Location</h2>
                  </div>
                  <div className="space-y-6 leading-relaxed">
                    <p className="text-gray-800">
                      West Vancouver, British Columbia. The home sits in a quiet, upscale neighbourhood with ocean views, close to trails, the water, and downtown Vancouver.
                    </p>
                    <p className="text-gray-800">
                      Summer rates run $1,000 to $2,500 per night, depending on weekday vs weekend.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={getGalleryPhotoSrc(photos[2])}
                      alt="Bedora Place West Vancouver setting"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Book Bedora Place</h2>
              <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
                An ocean-view West Vancouver retreat for families and groups, with room to gather inside and out.
              </p>
              <a
                href={AIRBNB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer-when-downgrade"
                className={airbnbButtonLg}
              >
                Book on Airbnb
              </a>
            </div>
          </div>
        </main>

        {showAllPhotos && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
              <h3 className="text-white font-medium">
                Bedora Place | All Photos ({galleryPhotos.length})
              </h3>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className={`${editorialGalleryModalWrapperClass} ${editorialGalleryGridClass}`}>
              {galleryPhotos.map((photo, index) => (
                <div
                  key={photo}
                  className={editorialGalleryModalTileClass}
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={getGalleryPhotoSrc(photo)}
                    alt={`Bedora Place photo ${index + 1}`}
                    fill
                    sizes={editorialGalleryImageSizes}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedPhotoIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeFullScreenPhoto}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            <button
              className="absolute top-4 right-4 text-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeFullScreenPhoto();
              }}
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto("prev");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto("next");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <div
              className="relative w-full h-[calc(100vh-120px)] max-w-6xl mx-auto touch-pinch-zoom"
              {...blockGalleryTouchPropagation}
            >
              <Image
                src={getFullPhotoSrc(galleryPhotos[selectedPhotoIndex])}
                alt={`Bedora Place photo ${selectedPhotoIndex + 1}`}
                fill
                priority
                className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                sizes="100vw"
                onLoadingComplete={handleImageLoad}
                quality={85}
              />
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {selectedPhotoIndex + 1} / {galleryPhotos.length}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default BedoraPlace;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};
