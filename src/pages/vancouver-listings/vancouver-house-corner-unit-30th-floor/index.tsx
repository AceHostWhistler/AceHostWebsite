import React, { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";
import PropertyHeaderEditorial from "@/components/PropertyHeaderEditorial";
import {
  editorialGalleryGridClass,
  editorialGalleryImageSizes,
  editorialGalleryModalTileClass,
  editorialGalleryWrapperClass,
  editorialGalleryTileClass,
  editorialMainClass,
} from "@/lib/editorialPropertyLayout";
import { getWorldwideAmenities } from "@/data/worldwideAmenities";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { FaBed, FaBath } from "react-icons/fa";
import { blockGalleryTouchPropagation, usePhotoSwipeNavigation } from "@/hooks/usePhotoSwipeNavigation";
import {
  GALLERY_PREVIEW_LIMIT,
  getGalleryPhotoOrder,
} from "@/lib/galleryPhotoOrder";
import { airbnbButtonLg } from "@/lib/airbnbButtonStyles";

const AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1010373029610726119?guests=1&adults=1&s=67&unique_share_id=b8edd947-8412-4a7b-9875-2a04633c6616";

const VancouverHouseCornerUnit = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/vancouver-house/645adc4aca79d22167763483_Vancouver_House-03.jpg",
    "/photos/properties/vancouver-house/645adc49fb32ea8384334e2e_Vancouver_House-05.jpg",
    "/photos/properties/vancouver-house/645adc48fb32ea2543334d52_Vancouver_House-13.jpg",
    "/photos/properties/vancouver-house/645adc480342565cb5e2cac6_Vancouver_House-12.jpg",
    "/photos/properties/vancouver-house/645adc4803425681d3e2cab2_Vancouver_House-15.jpg",
    "/photos/properties/vancouver-house/645adc486c42a14dc2279913_Vancouver_House-18.jpg",
    "/photos/properties/vancouver-house/645adc48fb32ea7415334d5f_Vancouver_House-19.jpg",
    "/photos/properties/vancouver-house/645adc4a8fd51115efee7fd0_Vancouver_House-20.jpg",
    "/photos/properties/vancouver-house/645adc48fb32ea9b24334d60_Vancouver_House-21.jpg",
    "/photos/properties/vancouver-house/645adc4a44759e465d596517_Vancouver_House-23.jpg",
    "/photos/properties/vancouver-house/645adc4a8ac76bef6df533ed_Vancouver_House-25.jpg",
    "/photos/properties/vancouver-house/645adc4aca79d28dfd76348b_Vancouver_House-27.jpg",
    "/photos/properties/vancouver-house/645add450dd1f71139a57bb7_Vancouver_House-45.jpg",
  ];
  const galleryPhotos = getGalleryPhotoOrder(
    photos,
    "vancouver-house-corner-unit-30th-floor"
  );

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const goToNextPhoto = useCallback(() => {
    setSelectedPhotoIndex((current) => {
      if (current === null) return null;
      return current === galleryPhotos.length - 1 ? 0 : current + 1;
    });
  }, [galleryPhotos.length]);

  const goToPrevPhoto = useCallback(() => {
    setSelectedPhotoIndex((current) => {
      if (current === null) return null;
      return current === 0 ? galleryPhotos.length - 1 : current - 1;
    });
  }, [galleryPhotos.length]);

  const navigatePhoto = (direction: "prev" | "next") => {
    if (direction === "prev") goToPrevPhoto();
    else goToNextPhoto();
  };

  const { handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel } =
    usePhotoSwipeNavigation(goToNextPhoto, goToPrevPhoto);

  // Close full screen view when all photos modal is closed
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
        <title>Yaletown Tower Suite | Views, Pool + Free Parking - AceHost</title>
        <meta
          name="description"
          content="Stylish Yaletown tower suite with city and mountain views. Bright 800 sq ft, 2-bedroom, 2-bathroom home with a 200 sq ft patio, king and queen beds, free parking, and building pool, hot tub, sauna, and gym."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className={editorialMainClass}>
          <PropertyHeaderEditorial
            title="Yaletown Tower Suite | Views, Pool + Free Parking"
            guests={4}
            bedrooms={2}
            beds={2}
            bathrooms={2}
            priceRange="$12,000 per month | 3 month minimum"
            airbnbLink={AIRBNB_LINK}
            amenities={getWorldwideAmenities("vancouver-house-corner-unit-30th-floor")}
            onMorePhotosClick={openGallery}
          />

          {/* Photo Grid */}
          <div className={editorialGalleryWrapperClass} id="photos">
            <div className={editorialGalleryGridClass}>
              {galleryPhotos.slice(0, GALLERY_PREVIEW_LIMIT).map((photo, index) => (
                <div
                  key={index}
                  className={editorialGalleryTileClass}
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Vancouver House interior ${index + 1}`}
                    fill
                    sizes={editorialGalleryImageSizes}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                    quality={index < 4 ? 85 : 75}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzIyMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMzMiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4="
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

          {/* Property Details */}
          <div id="details" className="max-w-7xl mx-auto px-4 mb-16 sm:mb-20">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                The Space
              </h2>
              <div className={editorialGalleryGridClass}>
                <div>
                  <p className="text-gray-700 mb-6">
                    Stylish tower suite with breathtaking city and mountain views. This bright 800 sq ft, 2-bedroom, 2-bathroom home sits in the centre of Yaletown, an easy walk from BC Place, Rogers Arena, the Seawall, restaurants, shopping, and SkyTrain.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Enjoy a huge 200 sq ft patio, king and queen beds, a full kitchen, dedicated workspace, free parking, and access to the building&apos;s pool, hot tub, sauna, and gym.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Yes, we have AC. Two portable air-conditioning units are available from May 1 through September 30, one in the primary bedroom and one in the living room.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 mb-6">
                    Check-in is straightforward: a buzzer code to enter the building, a front-door code for the unit, and two fobs left on the counter for your stay.
                  </p>
                  <p className="text-gray-700 mb-6">
                    The swimming pool, hot tub, sauna, and fitness centre are shared building amenities and follow building hours and rules. This is a fully licensed short-term rental.
                  </p>
                  <div className="flex items-center space-x-8 mt-6">
                    <div className="flex items-center">
                      <FaBed className="text-gray-700 mr-2 text-xl" />
                      <span className="text-gray-700">2 Bedrooms, 2 Beds</span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="text-gray-700 mr-2 text-xl" />
                      <span className="text-gray-700">2 Bathrooms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Details */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Room Layout
              </h2>
              <div className={editorialGalleryGridClass}>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Bedroom 1
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Primary bedroom with a king bed.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Bedroom 2
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Second bedroom with a queen bed.
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Amenities
              </h2>
              <div className={editorialGalleryGridClass}>
                {[
                  "Full kitchen",
                  "Dedicated workspace",
                  "Free parking garage",
                  "200 sq ft patio",
                  "Wifi and TV",
                  "In-suite washer and dryer",
                  "Portable air conditioning",
                  "Shared pool",
                  "Shared hot tub",
                  "Shared sauna",
                  "Shared gym",
                  "Elevator",
                ].map((item) => (
                  <div key={item} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Location
              </h2>
              <p className="text-gray-700 mb-6">
                In the centre of Yaletown, Vancouver. An easy walk to BC Place, Rogers Arena, the Seawall, restaurants, shopping, and SkyTrain.
              </p>
              <p className="text-gray-700 mb-6">
                Check-in after 4:00 p.m. Checkout before 10:00 a.m. Quiet hours from 11:00 p.m. to 6:00 a.m. No pets, no smoking, and no parties or events.
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-8">
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

        {/* Photo Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="relative min-h-screen flex flex-col justify-center">
              <button
                onClick={closeAllPhotos}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-20 text-3xl"
              >
                <X size={32} />
              </button>
              <div className="p-4 sm:p-8">
                <h2 className="text-white text-2xl font-bold mb-6">
                  All Photos ({galleryPhotos.length})
                </h2>
                <div className={editorialGalleryGridClass}>
                  {galleryPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] relative cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Vancouver House interior ${index + 1}`}
                        fill
                        className="object-cover hover:opacity-90 transition-opacity rounded-lg"
                        sizes={editorialGalleryImageSizes}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Screen Photo */}
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
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <div className="relative w-full h-full touch-pinch-zoom" {...blockGalleryTouchPropagation}>
                <Image
                  src={galleryPhotos[selectedPhotoIndex]}
                  alt={`Property full view ${selectedPhotoIndex + 1}`}
                  fill
                  priority
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
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

export default VancouverHouseCornerUnit;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};
