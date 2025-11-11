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

const SquamishRetreatWithTheBestView = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos - limited to 20 for now
  const photos = [
    // Main featured photos (keep these at the top)
    "/photos/properties/Squamish/16 - 20251104 A7M4 01 A1_06655.jpg",
    "/photos/properties/Squamish/01 - 20251104 A7M4 01 A1_06919-Edit.jpg",
    "/photos/properties/Squamish/02 - 20251104 MM4P 01 0036-Edit.jpg",
    "/photos/properties/Squamish/03 - 20251104 A7M4 01 A1_06486.jpg",
    "/photos/properties/Squamish/04 - 20251104 A7M4 01 A1_06524.jpg",
    "/photos/properties/Squamish/05 - 20251104 A7M4 01 A1_06512.jpg",
    "/photos/properties/Squamish/06 - 20251104 A7M4 01 A1_06858.jpg",
    "/photos/properties/Squamish/07 - 20251104 A7M4 01 A1_06891.jpg",
    "/photos/properties/Squamish/08 - 20251104 A7M4 01 A1_06898.jpg",
    "/photos/properties/Squamish/09 - 20251104 A7M4 01 A1_06905.jpg",
    "/photos/properties/Squamish/10 - 20251104 A7M4 01 A1_06503.jpg",
    "/photos/properties/Squamish/11 - 20251104 A7M4 01 A1_06615.jpg",
    "/photos/properties/Squamish/12 - 20251104 A7M4 01 A1_06665.jpg",
    "/photos/properties/Squamish/13 - 20251104 A7M4 01 A1_06620.jpg",
    "/photos/properties/Squamish/15 - 20251104 A7M4 01 A1_06630.jpg",
    "/photos/properties/Squamish/17 - 20251104 A7M4 01 A1_06654.jpg",
    "/photos/properties/Squamish/18 - 20251104 A7M4 01 A1_06637.jpg",
    "/photos/properties/Squamish/19 - 20251104 A7M4 01 A1_06530.jpg",
    "/photos/properties/Squamish/20 - 20251104 A7M4 01 A1_06840.jpg",
    "/photos/properties/Squamish/21 - 20251104 A7M4 01 A1_06848.jpg",
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
        <title>Squamish Retreat With The Best View! - AceHost</title>
        <meta
          name="description"
          content="Stylish Squamish house with breathtaking views! 3000 sqft 3BR/3BA located in the heart of Squamish, BC. Features sauna, games room, ski/mountain bike mud room, and multiple patios with mountain views."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Squamish Retreat With The Best View!"
            guests={8}
            bedrooms={3}
            beds={4}
            bathrooms={3}
            priceRange="$500-1500 per night Summer"
            winterPrice="$500-1500 Nightly | Winter"
            holidayPrice="$2200-2500+ Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1047983607752975484?guests=1&adults=1&s=67&unique_share_id=1e623ba5-133a-4c05-b1c9-4ac721a40a6d"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Squamish Retreat interior ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 4}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Stylish Squamish house with breathtaking views! Your house is a 3000 sqft 3BR/3BA located in the heart of Squamish, BC. Squamish is home to legendary hikes, mountain biking, and skiing with Whistler only a quick 45-min drive away. New-ish house with a ski/mountain bike mud room, sauna, games room, free parking, dedicated workspace and multiple patios looking towards the mountains make the house unique and perfect for a work trip or vacation with family or friends.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col mb-20">
              <div className="flex flex-col md:flex-row mb-10">
                <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                  <div className="relative aspect-[4/3] mb-2">
                    <Image
                      src={photos[0]}
                      alt="Squamish Retreat Interior"
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
                  <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6">
                    <li>3000 sqft 3BR/3BA</li>
                    <li>2 Patios (500-1000 sqft)</li>
                    <li>Located in Suqmish!</li>
                    <li>5 min drive to Squamish</li>
                    <li>Breathtaking view!</li>
                    <li>Amazing amenities (sauna, games room, ski/mountain bike storage)</li>
                    <li>Safe and secure neighborhood</li>
                    <li>Free parking</li>
                  </ul>
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
                    src={photos[4]}
                    alt="Living space"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photos[5]}
                    alt="Kitchen area"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photos[8]}
                    alt="Mountain view"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Kitchen & Living Areas</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Kitchen - Newly finished w/ stainless steel appliances and modern counters. Includes gas stove, oven, microwave, dishwasher, and all the cookware needed to make a gourmet meal.</li>
                    <li>Patios - Enough room to relax and soak up the sun. This is a great place to tan, read a book, or eat your sunset meal!</li>
                    <li>Entertainment - Ultra High Speed Fibre Optic WIFI (300mbps) and 1 Smart TV (games room), 1 Smart TV in the Master Bedroom, 1 Smart TV in Second Bedroom, 1 Smart TV in Third Bedroom.</li>
                    <li>Remote Workspace - Ergonomic chair, and monitor for connecting to a laptop. The perfect set-up for a remote worker.</li>
                  </ul>
                  <div className="mt-6 relative aspect-[4/3]">
                    <Image
                      src={photos[10]}
                      alt="Kitchen area"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Bedrooms & Bathrooms</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Master Bedroom - King size, high-end mattress with new linens.</li>
                    <li>Master Bathroom - Newly finished bath tub and shower.</li>
                    <li>Second Bed - Queen size, high-end mattress with new linens. Large closet for all your clothing needs.</li>
                    <li>Second Bathroom - Newly finished bathroom featuring walk-in shower.</li>
                    <li>Third Bed - Queen size, high-end mattress with new linens. Large closet for all your clothing needs.</li>
                    <li>Third Bathroom - Newly finished bathroom.</li>
                    <li>Laundry: Washer and dryer with all the detergent and fabric softener you'll need.</li>
                  </ul>
                  <p className="mt-4 text-gray-800">*Complimentary coffee, tea, salt, pepper, olive oil, soap, shampoo, conditioner, and body wash is provided.</p>
                  <div className="mt-6 relative aspect-[4/3]">
                    <Image
                      src={photos[12]}
                      alt="Master bedroom"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Access Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Guest Access</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-gray-800">
                    Remote access through your phone.
                    <br /><br />
                    1. After check-in I will ask for you phone # to provide you with your unique check in code
                    <br />
                    2. Your phone will unlock the key box
                    <br />
                    3. Use the keys for your stay and enjoy!
                  </p>
                </div>
                <div className="md:col-span-1">
                  <div className="relative aspect-[3/4] h-full">
                    <Image
                      src={photos[15]}
                      alt="House exterior"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Other Things to Note Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Other Things to Note</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-gray-800">
                    Please ensure that you carefully read and understand the House Rules.
                    <br /><br />
                    Smoking/drugs in unit or in the common areas of the building are NOT allowed.
                    <br /><br />
                    Pets are NOT allowed.
                    <br /><br />
                    All-out parties and binge-drinking types of events are NOT allowed. I live in a nice building with quiet neighbors and would like to keep it that way.
                  </p>
                </div>
                <div className="md:col-span-1">
                  <div className="relative aspect-[3/4] h-full">
                    <Image
                      src={photos[18]}
                      alt="Mountain view"
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
                <strong>Municipal registration number:</strong> 00010283<br />
                <strong>Provincial registration number:</strong> H328839808
              </p>
              <p className="mt-4 text-gray-800">
                NOTE: This is a LEGAL Airbnb with a LEGAL license. There is NO concern with you booking here as per the provincial changes. Thank you :)
              </p>
            </div>
          </div>

          {/* Photos Modal - Show all photos */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white text-xl font-medium">
                  Squamish Retreat - {photos.length} photos
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
                        alt={`Squamish Retreat photo ${index + 1}`}
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

export default SquamishRetreatWithTheBestView;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};
