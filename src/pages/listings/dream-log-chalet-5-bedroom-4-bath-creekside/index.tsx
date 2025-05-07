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
import { PropertyLayout } from '../../../components/PropertyLayout';
import { PropertyInfo } from '../../../types/property';

const propertyInfo: PropertyInfo = {
  title: "Dream Log Chalet | 5 Bedroom | 4 Bath | Creekside",
  description: "Experience Whistler luxury at its finest. This beautiful 5-bedroom log chalet in Bayshores offers spacious accommodations for up to 12 guests.",
  guests: 12,
  bedrooms: 5,
  beds: 7,
  bathrooms: 4,
  priceRange: "Monthly Price Range: $15,000-$19,000",
  winterPriceRange: "3-12 Month Minimum",
  holidayPriceRange: "Monthly Rental Only",
  minimumStay: "3-12 Month Rental Only",
  airbnbLink: "https://www.airbnb.com/rooms/your-listing-id",
  photos: [
    {
      src: "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00620.jpg",
      alt: "Dream Log Chalet exterior view",
      width: 1920,
      height: 1080
    }
  ],
  spaceDetails: {
    description: "This beautiful 5-bedroom log chalet in Bayshores offers spacious accommodations perfect for families or groups.",
    highlights: ["Spacious open-concept living area", "Fully equipped modern kitchen"]
  },
  bedroomLayout: {
    description: "5 well-appointed bedrooms spread across multiple levels",
    rooms: [
      {
        name: "Master Bedroom",
        description: "Large master suite with ensuite bathroom",
        beds: ["King bed"]
      }
    ]
  },
  location: {
    description: "Located in the desirable Bayshores neighborhood, just minutes from Creekside Village."
  }
};

const DreamLogChalet = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00620.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00635.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00615.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00610.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00605.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00595.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00590.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00575-Edit.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00570-Edit.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00565-Edit.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00560-Edit.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00555-Edit.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00546.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00540.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00531.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00524.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00517.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00512.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00501.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00493.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00485.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00474.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00467.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00461.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00455.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00448.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00442.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00431.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00423.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00418.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00407-Edit.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00398-Edit.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00391-Edit.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00377.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00365.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00357.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00348.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00342.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00333.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00322.jpg",
    "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00316.jpg",
  ];

  const handlePhotoClick = (index: number) => {
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
        <title>
          Dream Log Chalet | 5 Bedroom | 4 Bath | Creekside - AceHost
        </title>
        <meta
          name="description"
          content="Experience Whistler luxury at its finest. This beautiful 5-bedroom log chalet in Bayshores offers spacious accommodations for up to 12 guests, and is only minutes from Creekside Village and the newly upgraded gondola."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader 
            title="Dream Log Chalet | 5 Bedroom | Creekside"
            guests={10}
            bedrooms={5}
            bathrooms={4}
            priceRange="Monthly Price Range: $15,000-$19,000"
            airbnbLink="https://www.airbnb.ca/rooms/20190966?guests=1&adults=1&s=67&unique_share_id=e84d8ef3-67d7-4a87-8fd4-9a7e0c82ebb9"
          />

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
                    alt={`Dream Log Chalet interior ${index + 1}`}
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
          <div id="details" className="max-w-4xl mx-auto px-4 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
              About this property
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The Dream Log Chalet is a breathtaking 5 bedroom, 4 bath luxury
                log home located at Whistler Creekside. This beautiful chalet
                offers over 5000 sq/ft of luxury living, open-concept wood-beam
                interior spaces, and incredible forest views.
              </p>
              <p>
                Welcome to this charming traditional log chalet, located in a
                quiet residential family-friendly neighborhood in Bayshores,
                Whistler. This home features 5 bedrooms, 4 baths, and a large
                backyard with a professionally built treehouse, perfect for
                children and socializing with guests. It's just a quick
                4-minute drive to Creekside Village and the newly upgraded
                Creekside Gondola, which takes you up to the top of Whistler
                Mountain in record speed!
              </p>

              {/* The Space Section */}
              <div className="flex flex-col md:flex-row mb-20">
                <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                  <div className="relative aspect-[4/3] mb-2">
                    <Image
                      src={photos[0]}
                      alt="Dream Log Chalet Interior"
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
                    Discounted Pricing for Long Stays:
                  </p>
                  <ul className="list-disc pl-5 mb-6 text-gray-800">
                    <li className="mb-2">6-month winter: 17,000 per month</li>
                    <li className="mb-2">6-month summer: 11,500 per month</li>
                    <li className="mb-2">12-month rental: 13,000 per month</li>
                  </ul>
                  <p className="text-gray-800 mb-4">
                    Free parking in driveway for up to a maximum of 5 vehicles.
                  </p>
                  <p className="text-gray-800">
                    Tesla Charger available for your use.
                  </p>
                </div>
              </div>

              {/* Bedroom Layout Section */}
              <div className="flex flex-col md:flex-row mb-20">
                <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                  <div className="relative aspect-[4/3] mb-2">
                    <Image
                      src={photos[7]}
                      alt="Dream Log Chalet Bedroom"
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

                  <p className="font-bold mb-2">Top floor:</p>
                  <p className="mb-4">
                    • Master bedroom 1 - King bed and ensuite bathroom with a
                    bathtub.
                  </p>

                  <p className="font-bold mb-2">Main floor:</p>
                  <p className="mb-1">• Bedroom 2- Queen Murphy Bed</p>
                  <p className="mb-1">• Bedroom 3- Queen Murphy Bed</p>
                  <p className="mb-1">
                    • Bathroom 2 with a shower and bath opposite the kitchen and
                    located next to bedrooms 2 + 3.
                  </p>
                  <p className="mb-1">• Kitchen</p>
                  <p className="mb-1">
                    • Living room with a pull out queen sofa bed, indoor
                    wood-burning fireplace
                  </p>
                  <p className="mb-1">• Dining room</p>
                  <p className="mb-4">
                    • Front deck with outdoor dining table, BBQ, fire pit and
                    outdoor lounge seating area.
                  </p>

                  <p className="font-bold mb-2">Lower Floor:</p>
                  <p className="mb-1">
                    • Bedroom 4 - Queen bed. The bathroom is located on this
                    floor.
                  </p>
                  <p className="mb-1">• Laundry area with a washer and dryer</p>
                  <p className="mb-1">• Garage</p>
                  <p className="mb-4">
                    • Bedroom 5 (private suite with ensuite bathroom)—Located on
                    the ground floor, this bedroom features a queen bed and has
                    a completely separate entrance to the home. It is perfect
                    for privacy for a family member wanting space from the main
                    home, and it has easy access through the front door to the
                    main house kitchen area.
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
                  Located in a quiet residential family-friendly neighborhood in
                  Bayshores, Whistler. It's just a quick 4-minute drive to
                  Creekside Village and the newly upgraded Creekside Gondola,
                  which takes you up to the top of Whistler Mountain in record
                  speed!
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal - Updated to support 2 columns on mobile and full-screen view */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Dream Log Chalet - All Photos
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
                        alt={`Dream Log Chalet ${index + 1}`}
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

export default DreamLogChalet;
