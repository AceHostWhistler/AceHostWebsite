import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { FaBed, FaBath } from "react-icons/fa";

type PropertyPhoto = {
  url: string;
  alt?: string;
};

const Rare3BedroomWhistlerVillageWalkToHill = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    // Main featured photos (keep these at the top)
    "/photos/properties/John 3-bed Granite Court/03 - 20251125 A7M4 01 A1_01852.jpg",
    "/photos/properties/John 3-bed Granite Court/01 - 20251125 A7M4 01 A1_02152.jpg",
    "/photos/properties/John 3-bed Granite Court/02 - 20251125 A7M4 01 A1_02202.jpg",
    "/photos/properties/John 3-bed Granite Court/04 - 20251125 A7M4 01 A1_02228-Edit.jpg",
    "/photos/properties/John 3-bed Granite Court/05 - 20251125 A7M4 01 A1_01858.jpg",
    "/photos/properties/John 3-bed Granite Court/06 - 20251125 A7M4 01 A1_02214.jpg",
    "/photos/properties/John 3-bed Granite Court/07 - 20251125 A7M4 01 A1_01864.jpg",
    "/photos/properties/John 3-bed Granite Court/08 - 20251125 A7M4 01 A1_01873 2.jpg",
    "/photos/properties/John 3-bed Granite Court/09 - 20251125 A7M4 01 A1_01896.jpg",
    "/photos/properties/John 3-bed Granite Court/10 - 20251125 A7M4 01 A1_01907.jpg",
    "/photos/properties/John 3-bed Granite Court/11 - 20251125 A7M4 01 A1_01914.jpg",
    "/photos/properties/John 3-bed Granite Court/12 - 20251125 A7M4 01 A1_01923.jpg",
    "/photos/properties/John 3-bed Granite Court/13 - 20251125 A7M4 01 A1_01975.jpg",
    "/photos/properties/John 3-bed Granite Court/14 - 20251125 A7M4 01 A1_02238.jpg",
    "/photos/properties/John 3-bed Granite Court/15 - 20251125 A7M4 01 A1_01938.jpg",
    "/photos/properties/John 3-bed Granite Court/16 - 20251125 A7M4 01 A1_02232.jpg",
    "/photos/properties/John 3-bed Granite Court/17 - 20251125 A7M4 01 A1_01941.jpg",
    "/photos/properties/John 3-bed Granite Court/18 - 20251125 A7M4 01 A1_01954.jpg",
    "/photos/properties/John 3-bed Granite Court/19 - 20251125 A7M4 01 A1_01962.jpg",
    "/photos/properties/John 3-bed Granite Court/20 - 20251125 A7M4 01 A1_02014.jpg",
    "/photos/properties/John 3-bed Granite Court/21 - 20251125 A7M4 01 A1_02245.jpg",
    "/photos/properties/John 3-bed Granite Court/22 - 20251125 A7M4 01 A1_02015.jpg",
    "/photos/properties/John 3-bed Granite Court/23 - 20251125 A7M4 01 A1_02029.jpg",
    "/photos/properties/John 3-bed Granite Court/24 - 20251125 A7M4 01 A1_02036.jpg",
    "/photos/properties/John 3-bed Granite Court/25 - 20251125 A7M4 01 A1_01992.jpg",
    "/photos/properties/John 3-bed Granite Court/26 - 20251125 A7M4 01 A1_02000.jpg",
    "/photos/properties/John 3-bed Granite Court/27 - 20251125 A7M4 01 A1_02162.jpg",
    "/photos/properties/John 3-bed Granite Court/28 - 20251125 A7M4 01 A1_02167.jpg",
    "/photos/properties/John 3-bed Granite Court/29 - 20251125 A7M4 01 A1_02172.jpg",
    "/photos/properties/John 3-bed Granite Court/30 - 20251125 A7M4 01 A1_02187.jpg",
    "/photos/properties/John 3-bed Granite Court/31 - 20251125 A7M4 01 A1_02060.jpg",
    "/photos/properties/John 3-bed Granite Court/32 - 20251125 A7M4 01 A1_02066.jpg",
    "/photos/properties/John 3-bed Granite Court/33 - 20251125 A7M4 01 A1_02080.jpg",
    "/photos/properties/John 3-bed Granite Court/34 - 20251125 A7M4 01 A1_02043.jpg",
    "/photos/properties/John 3-bed Granite Court/35 - 20251125 A7M4 01 A1_02052.jpg",
    "/photos/properties/John 3-bed Granite Court/36 - 20251125 A7M4 01 A1_02088.jpg",
    "/photos/properties/John 3-bed Granite Court/37 - 20251125 A7M4 01 A1_02095.jpg",
    "/photos/properties/John 3-bed Granite Court/38 - 20251125 A7M4 01 A1_02142.jpg",
    "/photos/properties/John 3-bed Granite Court/39 - 20251125 A7M4 01 A1_02100.jpg",
    "/photos/properties/John 3-bed Granite Court/40 - 20251125 A7M4 01 A1_02107.jpg",
    "/photos/properties/John 3-bed Granite Court/41 - 20251125 A7M4 01 A1_02129.jpg",
    "/photos/properties/John 3-bed Granite Court/42 - 20251125 A7M4 01 A1_02135.jpg",
    "/photos/properties/John 3-bed Granite Court/43 - 20251125 A7M4 01 A1_02192.jpg",
    "/photos/properties/John 3-bed Granite Court/44 - 20251125 A7M4 01 A1_01985.jpg",
    "/photos/properties/John 3-bed Granite Court/45 - 20251125 A7M4 01 A1_02251.jpg",
  ];

  const handlePhotoClick = (index: number) => {
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

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      
      if (e.key === "ArrowLeft") {
        navigatePhoto("prev");
      } else if (e.key === "ArrowRight") {
        navigatePhoto("next");
      } else if (e.key === "Escape") {
        closeFullScreenPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <>
      <Head>
        <title>Rare 3-bedroom | Whistler Village | Walk to Hill - AceHost</title>
        <meta
          name="description"
          content="A rare gem in the heart of Whistler Village! This 3-bedroom chalet-style retreat offers two oversized wraparound balconies with breathtaking mountain views, your own private hot tub, and 2 guaranteed underground parking spots."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Rare 3-bedroom | Whistler Village | Walk to Hill"
            guests={8}
            bedrooms={3}
            beds={2}
            bathrooms={3}
            priceRange="$400-900 per night Summer"
            winterPrice="$650-1450 Nightly | Winter"
            holidayPrice="$1600-2200 Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1565322561889624431?guests=1&adults=1&s=67&unique_share_id=bcb85131-d1b0-4d39-9975-7580fd94a5d9"
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
                    alt={`Rare 3-bedroom Whistler Village interior ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
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
              A rare gem in the heart of Whistler Village! This 3-bedroom chalet-style retreat offers two oversized wraparound balconies with breathtaking mountain views, your own private hot tub (the only one in the entire complex), and 2 guaranteed underground parking spots.
              <br /><br />
              Spread across two spacious floors, you'll enjoy the cozy charm of a log chalet paired with modern luxury furnishings, a fireplace, and unbeatable convenience, all just steps from restaurants, lifts, and shops.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col mb-20">
              <div className="flex flex-col md:flex-row mb-10">
                <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                  <div className="relative aspect-[4/3] mb-2">
                    <Image
                      src={photos[0]}
                      alt="Rare 3-bedroom Interior"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
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
                    Step into a true Whistler classic reimagined for modern comfort. This spacious two-level home features an inviting open-concept living and dining area, a warm indoor fireplace, and two massive wraparound balconies perfect for morning coffee or après-ski lounging.
                    <br /><br />
                    The highlight? Your own private hot tub with unobstructed Whistler Mountain views, a feature you won't find anywhere else in this complex.
                  </p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center">
                      <FaBed className="text-gray-600 mr-2" size={20} />
                      <span className="text-gray-800">3 Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="text-gray-600 mr-2" size={20} />
                      <span className="text-gray-800">3 Bathrooms</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional photos in description */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photos[8]}
                    alt="Living space"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photos[16]}
                    alt="Hot tub view"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photos[24]}
                    alt="Bedroom"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Bedroom Layout</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                    <li>Primary Bedroom: King bed</li>
                    <li>Second Bedroom: Queen bed</li>
                    <li>Third Bedroom: Full bed</li>
                    <li>Living Room: Queen pullout sofa</li>
                  </ul>
                  <div className="mt-6 relative aspect-[4/3]">
                    <Image
                      src={photos[33]}
                      alt="Primary bedroom"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 mb-6">
                    With luxury touches throughout, this home offers everything you need for an unforgettable Whistler stay, style, comfort, and location all in one.
                  </p>
                  <div className="mt-6 relative aspect-[4/3]">
                    <Image
                      src={photos[37]}
                      alt="Second bedroom"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                    <li>Private hot tub (the only one in the entire complex)</li>
                    <li>Two oversized wraparound balconies</li>
                    <li>Breathtaking mountain views</li>
                    <li>2 guaranteed underground parking spots</li>
                    <li>Two spacious floors</li>
                    <li>Cozy fireplace</li>
                    <li>Modern luxury furnishings</li>
                    <li>Steps from restaurants, lifts, and shops</li>
                  </ul>
                </div>
                <div className="md:col-span-1">
                  <div className="relative aspect-[3/4] h-full">
                    <Image
                      src={photos[12]}
                      alt="Balcony view"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-gray-800">
                    Located in the heart of Whistler Village, this property offers unbeatable convenience. You'll be just steps away from the best restaurants, shops, and most importantly, the ski lifts.
                    <br /><br />
                    Enjoy the perfect balance of village energy and mountain tranquility, with easy access to all that Whistler has to offer while still having your own private retreat to return to.
                  </p>
                </div>
                <div className="md:col-span-1">
                  <div className="relative aspect-[3/4] h-full">
                    <Image
                      src={photos[20]}
                      alt="View from property"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Details Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Registration Details</h2>
              <p className="text-gray-800">
                <strong>Municipal registration number:</strong> 00015503<br />
                <strong>Provincial registration number:</strong> PM526794239
              </p>
            </div>
          </div>

          {/* Photos Modal - Show all photos */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white text-xl font-medium">
                  Rare 3-bedroom Whistler Village - {photos.length} photos
                </h3>
                <button
                  onClick={closeAllPhotos}
                  className="text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] relative cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Rare 3-bedroom Whistler Village photo ${index + 1}`}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Full Screen Photo View */}
          {selectedPhotoIndex !== null && (
            <div 
              className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
              onTouchStart={() => {
                setTouchStartX(null);
                setTouchEndX(null);
              }}
              onTouchMove={(e) => {
                setTouchEndX(e.touches[0].clientX);
              }}
              onTouchEnd={(e) => {
                if (!touchStartX || !touchEndX) return;
                
                const difference = touchStartX - touchEndX;
                
                if (Math.abs(difference) > 50) {
                  if (difference > 0) {
                    navigatePhoto("prev");
                  } else {
                    navigatePhoto("next");
                  }
                }
                
                setTouchStartX(null);
                setTouchEndX(null);
              }}
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
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("prev");
                }}
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
                    width={1920}
                    height={1080}
                    className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                    sizes="100vw"
                    onLoadingComplete={(img) => {
                      setIsImageLoading(false);
                      img.classList.remove("opacity-0");
                    }}
                    quality={85}
                    loading="eager"
                  />
                </div>
              </div>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("next");
                }}
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Rare3BedroomWhistlerVillageWalkToHill;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};
