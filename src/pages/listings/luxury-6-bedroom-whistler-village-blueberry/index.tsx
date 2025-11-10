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

const Luxury6BedroomWhistlerVillageBlueberry = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    // Main featured photos (keep these at the top)
    "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/03 - 20251108 A7M4 02 A1_07764.jpg",
    "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/04 - 20251108 A7M4 02 A1_07801.jpg",
    "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/05 - 20251108 A7M4 02 A1_07785.jpg",
    "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/02 - 20251108 MM4P 01 0056.jpg",
    "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/01 - 20251108 MM4P 01 0036.jpg",
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
        <title>Luxury 6-Bedroom | Whistler Village | Blueberry - AceHost</title>
        <meta
          name="description"
          content="Experience Whistler luxury in this newly renovated 6-bedroom, 3-bath Ravencrest condo in prestigious Blueberry Hill. Sleeps 15+ guests across 10 beds with Restoration Hardware and Rove Concepts furnishings, just minutes from Whistler Village."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Luxury 6-Bedroom | Whistler Village | Blueberry"
            guests={15}
            bedrooms={6}
            beds={10}
            bathrooms={3}
            priceRange="$750-1800 per night Summer"
            winterPrice="$1200-2600 Nightly | Winter"
            holidayPrice="$3500-6000 Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1551638001847968788?guests=1&adults=1&s=67&unique_share_id=ff68258e-d89f-4493-8e79-fd85820e6872"
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
                    alt={`Luxury 6-Bedroom Blueberry interior ${index + 1}`}
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
              Experience Whistler luxury in this newly renovated 6-bedroom, 3-bath Ravencrest condo in prestigious Blueberry Hill.
              <br /><br />
              Sleeping 15+ guests across 10 beds, it features Restoration Hardware and Rove Concepts furnishings, Puffy luxury mattresses, and forest views.
              <br /><br />
              Enjoy ski and bike storage, EV charging, and a new BBQ. Just a 3-4 minute drive or quick taxi ride to Whistler Village, ski lifts, lakes, and top restaurants in one of Whistler's quietest and most sought-after areas.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[0]}
                    alt="Luxury 6-Bedroom Interior"
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
                  This newly renovated luxury condo blends alpine charm with modern comfort. Designed for gatherings, it features a large open living area with a fireplace, Restoration Hardware and Rove Concepts furnishings, and floor-to-ceiling forest views.
                  A fully equipped kitchen with brand-new fridge, oven, and BBQ provides ample space for group meals. The dining table comfortably seats large groups.
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <FaBed className="text-gray-600 mr-2" size={20} />
                    <span className="text-gray-800">6 Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="text-gray-600 mr-2" size={20} />
                    <span className="text-gray-800">3 Bathrooms</span>
                  </div>
                </div>
                <p className="text-gray-800">
                  With 6 bedrooms, 3 bathrooms, and 10 beds, the home comfortably sleeps 14+ guests (ideal for 8-10, with room for more). Every bedroom includes a luxury Puffy mattress, firm yet cloud-like for a perfect sleep after skiing or hiking.
                </p>
              </div>
            </div>

            {/* Bed Layout Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Bed Layout</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Lower Level:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Primary Bedroom: King bed, ensuite bathroom with tub and shower, Smart TV</li>
                    <li>Bedroom 2: King bed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Upper Level:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Bedroom 3: Two Queen beds, large office desk, and forest views</li>
                    <li>Bedroom 4: King bed with TV</li>
                    <li>Bedroom 5: King bed</li>
                    <li>Bedroom 6: Two single bunk beds (adult-friendly but ideal for kids)</li>
                  </ul>
                  <p className="mt-4 text-gray-800">All three bathrooms are full bathrooms with showers and tubs.</p>
                </div>
              </div>
            </div>

            {/* Parking & Transportation Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Parking & Transportation</h2>
              <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                <li>1 guaranteed extra-large private parking spot (fits vehicles 6'6" and under)</li>
                <li>EV charger included, one of the few in the building</li>
                <li>1 visitor spot available first-come, first-serve (busier on winter/holiday weekends, usually more available during summer or shoulder seasons). There are 10 visitor spots on a first-come, first-serve basis, with permission to use any of 1 of the 10 at a given time.</li>
                <li>VIP taxi reservation code provided for priority service in Whistler, rare and convenient for evenings out</li>
                <li>Roughly a 4-minute taxi ride to the Village</li>
                <li>Recommended: arrive in one large vehicle, shuttle, or bus. Extra vehicles can park nearby if required.</li>
              </ul>
            </div>

            {/* Additional Features Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Additional Features</h2>
              <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                <li>Ski and bike storage, no need to bring gear inside the condo</li>
                <li>Brand-new BBQ, fridge, and stove/oven</li>
                <li>Washer and dryer in unit</li>
                <li>High-speed Wi-Fi and Smart TVs</li>
                <li>Spacious forest-view balcony</li>
                <li>Access to beautiful Valley Trails and Blueberry golf-course loop right from the property</li>
              </ul>
            </div>

            {/* Guest Access Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Guest Access</h2>
              <p className="text-gray-800 max-w-4xl">
                This home is perfect for families, groups, or corporate getaways seeking refined comfort near the mountains. Guests love the quiet setting, the easy access to the Village, and the attention to every detail, from high-end furniture to the luxurious mattresses and EV parking.
                <br /><br />
                Stay here to experience the best of Whistler: peace, privacy, and proximity, all in one beautifully designed Blueberry Hill retreat.
              </p>
            </div>

            {/* Registration Details Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Registration Details</h2>
              <p className="text-gray-800">
                <strong>Municipal registration number:</strong> 00015309<br />
                <strong>Provincial registration number:</strong> PM743639153
              </p>
            </div>
          </div>

          {/* Photos Modal - Show all photos */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white text-xl font-medium">
                  Luxury 6-Bedroom Blueberry - {photos.length} photos
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
                        alt={`Luxury 6-Bedroom Blueberry photo ${index + 1}`}
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

export default Luxury6BedroomWhistlerVillageBlueberry;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};
