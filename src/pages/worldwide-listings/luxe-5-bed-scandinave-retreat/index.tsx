import React, { useState, useEffect } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import PropertyHeader from "@/components/PropertyHeader";

const LuxeScandinaveRetreat = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages] = useState(28); // Total number of images we have

  // Cache version for forcing new image downloads
  const cacheVersion = "v2";

  // Generate all photo paths from the optimized scandinave directory with fixed aspect ratio
  const allPhotos = Array.from({ length: 28 }, (_, i) => `/high-quality/scandinave-fixed/scandinave-${i}.jpg?${cacheVersion}`);
  
  // Reorder photos to make scandinave-7.jpg the first one
  const reorderedPhotos = [
    `/high-quality/scandinave-fixed/scandinave-7.jpg?${cacheVersion}`,
    ...allPhotos.filter(photo => !photo.includes('scandinave-7.jpg'))
  ];
  
  // Use the first 12 optimized images as the main photos
  const optimalPhotos = reorderedPhotos.slice(0, 12);
  
  // All photos include all 28 images
  const photos = reorderedPhotos;

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

  const handlePreloadProgress = () => {
    setImagesLoaded(prev => prev + 1);
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

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
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

  // Preload important images for faster gallery display
  useEffect(() => {
    // Preload first 12 images for initial display
    const preloadImages = photos.slice(0, 12).map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          handlePreloadProgress();
          resolve();
        };
        img.onerror = () => {
          // Still count errors to avoid getting stuck
          handlePreloadProgress();
          resolve();
        };
      });
    });

    Promise.all(preloadImages);
  }, []);

  return (
    <>
      <Head>
        <title>Luxe 5-BED Scandinave Retreat | Walk to Slopes - AceHost</title>
        <meta
          name="description"
          content="An ideal family ski home just 400m (8 min walk) to Whistler Creekside Gondola. Stunning, unobstructed views of the Tantalus Range, Alpha & Nita Lakes. Perfect for families or groups with 3 bedrooms, 5 beds, and 3 baths."
        />
        {/* Preload critical images */}
        {optimalPhotos.slice(0, 4).map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <PropertyHeader
            title="Luxe 5-BED Scandinave Retreat | Walk to Slopes"
            guests={8}
            bedrooms={3}
            beds={5}
            bathrooms={3}
            priceRange="$450-$1200+ per night Summer | $750-$1,600+ Nightly Winter | $2300-$3100+ Nightly Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1313847204355627326?guests=1&adults=1&s=67&unique_share_id=507dffd6-1f84-49a3-99eb-d10f493a65a6"
          />

          {/* Loading Indicator */}
          {imagesLoaded < 8 && (
            <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="w-8 h-8 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-gray-600">Loading gallery ({Math.min(imagesLoaded, 8)}/8 images)...</p>
            </div>
          )}

          {/* Photo Grid - Only show once essential images are loaded */}
          <div className={`max-w-7xl mx-auto px-4 mb-10 sm:mb-16 ${imagesLoaded < 8 ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`} id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              <div
                className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                onClick={() => handlePhotoClick(0)}
              >
                <div className="w-full h-full bg-gray-200">
                  <img
                    src={optimalPhotos[0]}
                    alt="Luxe 5-BED Scandinave Retreat 1"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    width={640}
                    height={480}
                  />
                </div>
              </div>
              {photos.slice(1, 4).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index + 1)}
                >
                  <div className="w-full h-full bg-gray-200">
                    <img
                      src={photo}
                      alt={`Luxe 5-BED Scandinave Retreat ${index + 2}`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      width={640}
                      height={480}
                    />
                  </div>
                </div>
              ))}
              {photos.slice(4, 8).map((photo, index) => (
                <div
                  key={index + 4}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index + 4)}
                >
                  <div className="w-full h-full bg-gray-200">
                    <img
                      src={photo}
                      alt={`Luxe 5-BED Scandinave Retreat ${index + 5}`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      width={640}
                      height={480}
                    />
                  </div>
                </div>
              ))}
            </div>
            {photos.length > 8 && (
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
              An ideal family ski home just 400m (8 min walk) to Whistler Creekside Gondola. Stunning, unobstructed views of the Tantalus Range, Alpha & Nita Lakes. Perfect for 1 large family, 3 couples, or 2 families (up to 4 adults & 6 kids).
            </p>
          </div>
          
          {/* Accommodation Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accommodation Details</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                This 1,450 sqft, 3-bedroom, 5-bed, architecturally designed home features vaulted ceilings, a steam shower, kids' triple bunk room, heated floors, a cozy living area with fireplace, and a kitchen for family dinners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">The Space</h3>
                <p className="text-gray-700 mb-6">
                  This 1,450 sqft townhouse offers privacy and comfort across 6 unique half-levels. Renovated professionally, it combines luxury with family-friendly design:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>Entry: Boot/glove dryers & ample space for gear.</li>
                  <li>Kitchen/Dining: Open-concept, seats 10, stocked with essentials (salt, oils, flour, sugar, etc.).</li>
                  <li>Living Area: Large custom couch, gas fireplace, HD TV, and private deck.</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Bedrooms & Bathrooms</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>Master Suite: King bed, antique desk, cozy reading chair, ensuite with steam shower & in-suite laundry.</li>
                  <li>Kids' Room: Unique triple bunk (queen + 2 singles), daybed with trundle.</li>
                  <li>Loft Suite: Queen bed, ensuite, HD TV, and lounge couch.</li>
                </ul>
                <h3 className="text-2xl font-bold mb-6 mt-8">Other Features</h3>
                <p className="text-gray-700 mb-6">
                  Enjoy these additional amenities during your stay:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>Heated floors</li>
                  <li>Air conditioning</li>
                  <li>Board games, kids' books/crafts</li>
                  <li>Streaming services (Amazon Prime, Disney+, Netflix)</li>
                  <li>2 parking spots</li>
                  <li>Secure ski/bike storage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg bg-gray-200">
                  <img
                    src={optimalPhotos[2]}
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
                  <h2 className="text-2xl font-bold">Location</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Creekside Village is a quiet, family-friendly alternative to Whistler Village, just minutes away. It includes a grocery store, liquor store, ski rentals, Whistler Kids programs, Dusty's Pub, and Starbucks.
                </p>
                <p className="text-gray-700 mb-6">
                  The Creekside Gondola is only an 8-minute walk (400m) away. Free day parking is available nearby if you prefer to drive.
                </p>
                <p className="text-gray-700">
                  Enjoy mountain views and lakeside access with Alpha and Nita Lakes close by for year-round activities.
                </p>
              </div>
            </div>
          </div>

          {/* Guest Access Section */}
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 mb-24 bg-gray-50 rounded-xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Guest Access</h2>
            
            <p className="text-gray-700 mb-6">
              Guests have access to the entire townhouse, including:
            </p>
            
            <ul className="list-disc pl-8 space-y-3 text-gray-800 leading-relaxed mb-6">
              <li>Private deck</li>
              <li>2 parking spots</li>
              <li>Secure outdoor storage for skis/bikes</li>
              <li>High-speed WiFi with streaming services</li>
            </ul>
            
            <p className="text-gray-700">
              A foldable travel cot for infants is available upon request.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8 text-center mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Experience luxury in Whistler Creekside</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
              Please note: No pets, no smoking (allergy-friendly). The road to Creekside Village/Gondola is downhill. After a long ski day, it may be a challenge for younger kids or tired adults to walk.
            </p>
            <a
              href="https://www.airbnb.ca/rooms/1313847204355627326?guests=1&adults=1&s=67&unique_share_id=507dffd6-1f84-49a3-99eb-d10f493a65a6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-md font-medium text-lg transition-colors"
            >
              Book on Airbnb
            </a>
          </div>

          {/* All Photos Modal - Optimized and Simplified */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white font-medium">
                  Luxe 5-BED Scandinave Retreat | All Photos ({photos.length})
                </h3>
                <button
                  onClick={closeAllPhotos}
                  className="text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="container mx-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-gray-800"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <img
                      src={photo}
                      alt={`Luxe 5-BED Scandinave Retreat photo ${index + 1}`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      loading={index < 12 ? "eager" : "lazy"}
                      width={300}
                      height={225}
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
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)}
              onTouchEnd={() => {
                if (touchStartX && touchEndX) {
                  const diff = touchStartX - touchEndX;
                  if (diff > 50) {
                    // Swipe left
                    navigatePhoto("next");
                  } else if (diff < -50) {
                    // Swipe right
                    navigatePhoto("prev");
                  }
                }
                setTouchStartX(null);
                setTouchEndX(null);
              }}
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
              <div className="relative w-full h-[calc(100vh-120px)] max-w-6xl mx-auto">
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : ''}
                  alt={`Luxe 5-BED Scandinave Retreat photo ${selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : ''}`}
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