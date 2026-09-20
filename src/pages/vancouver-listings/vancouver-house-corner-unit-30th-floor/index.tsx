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
    "/photos/properties/vancouver-house/airbnb-9bbc1546-5ea2-4880-ab8d-295245e7c4da.jpg",
    "/photos/properties/vancouver-house/airbnb-5a2c5ddb-753b-4c15-ab5d-7edb7241408a.jpg",
    "/photos/properties/vancouver-house/airbnb-d17235a1-5874-4654-bcba-88b8347b46ac.jpg",
    "/photos/properties/vancouver-house/airbnb-523b44dc-5963-48b1-982d-d411d369a8bf.jpg",
    "/photos/properties/vancouver-house/airbnb-16d382da-b01c-443f-b4e0-836dac52ad70.jpg",
    "/photos/properties/vancouver-house/airbnb-f0d21fe5-fae8-4591-9492-5b5f708453af.jpg",
    "/photos/properties/vancouver-house/airbnb-f9bf7762-adb6-415e-88aa-6c91abb463f3.jpg",
    "/photos/properties/vancouver-house/airbnb-aba92dd8-443f-4051-a440-9d186757c931.jpg",
    "/photos/properties/vancouver-house/airbnb-66f614ea-7790-40e9-b2a1-554e8fd5441a.jpg",
    "/photos/properties/vancouver-house/airbnb-138e27a6-2247-420e-96e2-06c30e38f1fb.jpg",
    "/photos/properties/vancouver-house/airbnb-db4e4a97-bf27-4240-8be9-30de5bd58631.jpg",
    "/photos/properties/vancouver-house/airbnb-cfdb2efd-8a0b-4f8b-9025-94a045425773.jpg",
    "/photos/properties/vancouver-house/airbnb-d20daf09-b5ba-4918-95de-c1bc9be3c37a.jpg",
    "/photos/properties/vancouver-house/airbnb-2ab88830-0421-4647-8481-ccdef4d9cc49.jpg",
    "/photos/properties/vancouver-house/airbnb-85275994-cc4f-4a5f-9a7e-1faaf99f44e8.jpg",
    "/photos/properties/vancouver-house/airbnb-8a29068b-872a-429e-960d-114a4a608942.jpg",
    "/photos/properties/vancouver-house/airbnb-86e2c06a-abac-4179-ab31-db0c72758653.jpg",
    "/photos/properties/vancouver-house/airbnb-6cd64372-1ee4-4979-901e-ce24f9db36d0.jpg",
    "/photos/properties/vancouver-house/airbnb-854dbabe-a151-4b61-9532-a9f0505561d5.jpg",
    "/photos/properties/vancouver-house/airbnb-a648a8a4-adb8-43a5-97f5-a9a86a52334b.jpg",
    "/photos/properties/vancouver-house/airbnb-5ca67bd5-f2b2-4a0d-bce8-ec8f0bd54276.jpg",
    "/photos/properties/vancouver-house/airbnb-8a5bf9d3-8e80-4a11-bef4-0a78672e746a.jpg",
    "/photos/properties/vancouver-house/airbnb-624f2530-d3f6-4153-83c7-5e1fbecba4ce.jpg",
    "/photos/properties/vancouver-house/airbnb-074bfcec-67b1-42b1-a9fd-ce4d0f4d4f75.jpg",
    "/photos/properties/vancouver-house/airbnb-d19376d2-e4b9-48d5-874b-c8793094c4d4.jpg",
    "/photos/properties/vancouver-house/airbnb-228812cb-b0e9-4659-8d9f-d519bc160722.jpg",
    "/photos/properties/vancouver-house/airbnb-aa425f93-4fcb-4b7b-84c8-f4d671d009d2.jpg",
    "/photos/properties/vancouver-house/airbnb-729aa698-9983-4c1e-9dec-93346ae14ba8.jpg",
    "/photos/properties/vancouver-house/airbnb-149b55ef-f418-41b2-8474-eb8bf1666177.jpg",
    "/photos/properties/vancouver-house/airbnb-9e887122-0f3b-46cb-b01f-a81c73b17429.jpg",
    "/photos/properties/vancouver-house/airbnb-dd475b06-6738-4bb2-82a1-328465dd956c.jpg",
    "/photos/properties/vancouver-house/airbnb-3a56a4d5-3023-4a55-953c-92e38e6d1b6d.jpg",
    "/photos/properties/vancouver-house/airbnb-4922e582-7a84-4a5a-85a7-4054ea69a7b8.jpg",
    "/photos/properties/vancouver-house/airbnb-2fef7306-53a7-43c7-b3ec-d70b05b1b3ab.jpg",
    "/photos/properties/vancouver-house/airbnb-6aa3f7a8-bd6a-4e70-aa6f-39701362ea91.jpg",
    "/photos/properties/vancouver-house/airbnb-f23dc66f-00e3-4c57-a544-7ae7fb2e72b0.jpg",
    "/photos/properties/vancouver-house/airbnb-61dcc59b-80d5-4fcf-a2ee-7d13109393f3.jpg",
    "/photos/properties/vancouver-house/airbnb-ac20b3d1-d182-4f81-b6a8-376d576655ec.jpg",
    "/photos/properties/vancouver-house/airbnb-bcd4a4e9-8682-440d-bb1f-251ddfd8ba29.jpg",
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
