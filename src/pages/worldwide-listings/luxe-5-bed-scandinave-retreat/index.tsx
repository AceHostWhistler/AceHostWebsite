import React, { useCallback, useState, useEffect } from "react";
import { blockGalleryTouchPropagation, usePhotoSwipeNavigation } from "@/hooks/usePhotoSwipeNavigation";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
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
import { SCANDINAVE_PHOTOS } from "@/data/scandinavePhotos";
import { airbnbButtonLg } from "@/lib/airbnbButtonStyles";
import { GALLERY_PREVIEW_LIMIT } from "@/lib/galleryPhotoOrder";
import { getFullPhotoSrc, getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U1ZTdlYiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4=";

const AIRBNB_AMENITIES = [
  "Garden view",
  "Bathtub",
  "Hair dryer",
  "Cleaning products",
  "Shampoo",
  "Conditioner",
  "Body soap",
  "Hot water",
  "Shower gel",
  "Washer",
  "Free dryer – In unit",
  "Essentials",
  "Hangers",
  "Bed linens",
  "Extra pillows and blankets",
  "Room-darkening shades",
  "Iron",
  "Drying rack for clothing",
  "Clothing storage: dresser",
  "TV",
  "Sound system",
  "Pack ’n play / Travel crib",
  "AC – split-type ductless system",
  "Indoor fireplace: gas",
  "Ceiling fan",
  "Portable fans",
  "Radiant heating",
  "Heating – split-type ductless system",
  "Smoke alarm",
  "Carbon monoxide alarm",
  "Fire extinguisher",
  "First aid kit",
  "Wifi",
  "Dedicated workspace",
  "Kitchen",
  "Refrigerator",
  "Microwave",
  "Cooking basics",
  "Dishes and silverware",
  "Freezer",
  "Dishwasher",
  "Stove",
  "Oven",
  "Hot water kettle",
  "Coffee maker: drip coffee maker",
  "Wine glasses",
  "Toaster",
  "Blender",
  "Rice cooker",
  "Dining table",
  "Ski-in/Ski-out",
  "Private entrance",
  "Laundromat nearby",
  "Private patio or balcony",
  "Fire pit",
  "Outdoor furniture",
  "BBQ grill",
  "Free parking on premises",
  "Free street parking",
  "Luggage drop-off allowed",
  "Long-term stays allowed",
  "Self check-in",
  "Smart lock",
];

const LuxeScandinaveRetreat = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const photos = SCANDINAVE_PHOTOS;

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
    
    let newIndex;
    if (direction === "prev") {
      newIndex = selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1;
    } else {
      newIndex = selectedPhotoIndex === photos.length - 1 ? 0 : selectedPhotoIndex + 1;
    }
    
    setSelectedPhotoIndex(newIndex);
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!showAllPhotos && selectedPhotoIndex === null) return;
    
    if (e.key === "ArrowRight") {
      navigatePhoto("next");
    } else if (e.key === "ArrowLeft") {
      navigatePhoto("prev");
    } else if (e.key === "Escape") {
      if (selectedPhotoIndex !== null) {
        closeFullScreenPhoto();
      } else if (showAllPhotos) {
        closeAllPhotos();
      }
    }
  };

  // Event listeners for keyboard navigation
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [showAllPhotos, selectedPhotoIndex]);

  return (
    <>
      <Head>
        <title>Luxe 5-BED Scandinave Retreat - Walk to Slopes - AceHost</title>
        <meta
          name="description"
          content="An ideal family ski home just 400m (8 min walk) to Whistler Creekside Gondola. Stunning, unobstructed views of the Tantalus Range, Alpha & Nita Lakes. Perfect for 1 large family, 3 couples, or 2 families. This 1,450 sqft, 3-bedroom, 5-bed, architecturally designed home features; vaulted ceilings, a steam shower, kids’ triple bunk room, heated floors, a cozy living area with fireplace, and a kitchen for family dinners. Enjoy 2 free parking spots, A/C, & ski storage!"
        />
        {/* Preload critical images */}
        <link rel="preload" href={getGalleryPhotoSrc(photos[0])} as="image" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className={editorialMainClass}>
          {/* Header with Property Info */}
          <PropertyHeaderEditorial
            title="Luxe 5-BED Scandinave Retreat - Walk to Slopes"
            guests={8}
            bedrooms={3}
            beds={5}
            bathrooms={3}
            priceRange="$450-$1,200+ per night"
            winterPrice="$750-$1,600+ Nightly | Winter"
            holidayPrice="$2,300-$3,100+ Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1313847204355627326?guests=1&adults=1&s=67&unique_share_id=507dffd6-1f84-49a3-99eb-d10f493a65a6"
            amenities={AIRBNB_AMENITIES}
            onMorePhotosClick={openGallery}
          />

          <div className={editorialGalleryWrapperClass} id="photos">
            <div className={editorialGalleryGridClass}>
              {photos.slice(0, GALLERY_PREVIEW_LIMIT).map((photo, index) => (
                <div
                  key={photo}
                  className={editorialGalleryTileClass}
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={getGalleryPhotoSrc(photo)}
                    alt={`Luxe 5-BED Scandinave Retreat - Walk to Slopes ${index + 1}`}
                    fill
                    sizes={editorialGalleryImageSizes}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 4}
                    quality={index < 6 ? 85 : 75}
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                  />
                </div>
              ))}
            </div>
            {photos.length > GALLERY_PREVIEW_LIMIT && (
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
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8" id="details">
            <p className="text-gray-800 mb-16 max-w-3xl mx-auto leading-relaxed text-lg">
              An ideal family ski home just 400m (8 min walk) to Whistler Creekside Gondola. Stunning, unobstructed views of the Tantalus Range, Alpha & Nita Lakes. Perfect for 1 large family, 3 couples, or 2 families.
              <br /><br />
              This 1,450 sqft, 3-bedroom, 5-bed, architecturally designed home features; vaulted ceilings, a steam shower, kids’ triple bunk room, heated floors, a cozy living area with fireplace, and a kitchen for family dinners.
              <br /><br />
              Enjoy 2 free parking spots, A/C, & ski storage!
            </p>
          </div>
          
          {/* Accommodation Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The space</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                This 1,450 sqft townhouse offers privacy and comfort across 6 unique half-levels. Renovated professionally, it combines luxury with family-friendly design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Location:</h3>
                <p className="text-gray-700 mb-6">
                  One of the biggest advantages of this home is how easily you can enjoy Creekside without needing to stay right in the centre of it. The Creekside Gondola is approximately 400 metres away, making ski days simple, while Alpha Lake and Nita Lake are also close by for walking, biking and summer days by the water. Restaurants, cafés, groceries and the rest of Creekside Village are all within easy reach.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>Entry: Boot/glove dryers & ample space for gear.</li>
                  <li>Kitchen/Dining: Open-concept, seats 10, stocked with essentials (salt, oils, flour, sugar, etc.).</li>
                  <li>Living Area: Large custom couch, gas fireplace, HD TV, and private deck.</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Bedroom layout:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>Bedroom 1 - Master Suite: King bed, antique desk, cozy reading chair, ensuite with steam shower & in-suite laundry. Central Air conditioning available in this bedroom.</li>
                  <li>Bedroom 2 - Kids’ Room: Unique triple bunk (queen + 2 singles), daybed with trundle. Central Air conditioning available in this bedroom.</li>
                  <li>Bedroom 3 - Loft Suite Room: Queen bed, ensuite, HD TV, and lounge couch. Central Air conditioning available in this bedroom.</li>
                </ul>
                <h3 className="text-2xl font-bold mb-6 mt-8">Where you'll sleep</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li><span className="font-semibold">Bedroom 1</span><br />1 king bed</li>
                  <li><span className="font-semibold">Bedroom 2</span><br />1 queen bed<br />1 bunk bed</li>
                  <li><span className="font-semibold">Bedroom 3</span><br />1 queen bed</li>
                </ul>
                <h3 className="text-2xl font-bold mb-6 mt-8">Other Features:</h3>
                <p className="text-gray-700 mb-6">
                  Heated floors, Central Air Conditioning A/C throughout the home and bedrooms, board games, kids' books/crafts, Amazon Prime, Disney+, Netflix, 2 parking spots, and secure ski/bike storage.
                </p>
                <p className="text-gray-700 mb-6">
                  Ski bike storage: Private storage area for skis and bikes. Very rare to have your own private shed with plenty of room for multiple bikes/skis!
                  <br />
                  Room for 2 bikes in storage + room to lock up more outside.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg bg-gray-200">
                  <img
                    src={getGalleryPhotoSrc(photos[2])}
                    alt="Luxe 5-BED Scandinave Retreat - Premium Amenities"
                    className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
                    loading="lazy"
                    width={640} 
                    height={480}
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
                      <path
                        d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Neighbourhood highlights</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Creekside Village is a quiet, family-friendly alternative to Whistler Village, just minutes away. It includes a grocery store, liquor store, ski rentals, Whistler Kids programs, Dusty’s Pub, and Starbucks.
                </p>
                <p className="text-gray-700 mb-6">
                  The Creekside Gondola is only an 8-minute walk (400m) away.
                </p>
                <p className="text-gray-700">
                  Free day parking is available nearby if you prefer to drive. Enjoy mountain views and lakeside access with Alpha and Nita Lakes close by for year-round activities.
                </p>
              </div>
            </div>
          </div>

          {/* Guest Access Section */}
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 mb-24 bg-gray-50 rounded-xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Guest access</h2>
            
            <p className="text-gray-700">
              Guests have access to the entire townhouse, including a private deck, 2 parking spots, secure outdoor storage for skis/bikes, and high-speed WiFi with streaming services. A foldable travel cot for infants is available upon request.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8 text-center mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Other things to note</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
              No pets, no smoking.
              <br /><br />
              The road to Creekside Village/Gondola is downhill. After a long ski day, it may be a challenge for younger kids or tired adults to walk.
            </p>
            <h3 className="text-2xl font-bold mb-6">Registration details</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
              Municipal registration number: 00013716
              <br />
              Provincial registration number: PM853760155
            </p>
            <a
              href="https://www.airbnb.ca/rooms/1313847204355627326?guests=1&adults=1&s=67&unique_share_id=507dffd6-1f84-49a3-99eb-d10f493a65a6"
              target="_blank"
              rel="noopener noreferrer"
              className={airbnbButtonLg}
            >
              Book on Airbnb
            </a>
          </div>

          {/* All Photos Modal - Optimized and Simplified */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white font-medium">
                  Luxe 5-BED Scandinave Retreat - Walk to Slopes | All Photos ({photos.length})
                </h3>
                <button
                  onClick={closeAllPhotos}
                  className="text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>
              <div className={`${editorialGalleryModalWrapperClass} ${editorialGalleryGridClass}`}>
                {photos.map((photo, index) => (
                  <div
                    key={photo}
                    className={editorialGalleryModalTileClass}
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={getGalleryPhotoSrc(photo)}
                      alt={`Luxe 5-BED Scandinave Retreat - Walk to Slopes photo ${index + 1}`}
                      fill
                      sizes={editorialGalleryImageSizes}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Screen Photo Modal */}
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
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={selectedPhotoIndex !== null ? getFullPhotoSrc(photos[selectedPhotoIndex]) : ''}
                  alt={`Luxe 5-BED Scandinave Retreat - Walk to Slopes photo ${selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : ''}`}
                  className={`object-contain w-full h-full transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={handleImageLoad}
                  loading="eager"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedPhotoIndex !== null ? `${selectedPhotoIndex + 1} / ${photos.length}` : ''}
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default LuxeScandinaveRetreat; 