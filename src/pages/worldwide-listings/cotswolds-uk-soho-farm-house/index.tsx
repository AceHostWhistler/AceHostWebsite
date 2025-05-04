import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import PropertyHeader from "@/components/PropertyHeader";

const CotswoldsUKSohoFarmHouse = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/Cotswolds UK - Soho Farm House/8596128-exterior09-800.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5292.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5307.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5305.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5277.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5290.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5302.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5359.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5372.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5399.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5410.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5417.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5423.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5450.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5472.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5478.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5506.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5516.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5528.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/DJI_20250502143514_0652_D.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/DJI_20250502143734_0662_D.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/012A0878.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/012A0881.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5279.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5289.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5317.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5336.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5352.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5368.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5435.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5463.jpg"
  ];

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const openPhotoGallery = (index: number) => {
    setSelectedPhotoIndex(index);
    setShowAllPhotos(true);
    document.body.style.overflow = "hidden";
  };

  const closePhotoGallery = () => {
    setShowAllPhotos(false);
    document.body.style.overflow = "auto";
  };

  const navigatePhotos = (direction: "next" | "prev") => {
    if (selectedPhotoIndex === null) return;
    
    setIsImageLoading(true);
    
    if (direction === "next") {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    } else {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const difference = touchStartX - touchEndX;
    if (difference > 50) {
      // Swipe left, go to next
      navigatePhotos("next");
    } else if (difference < -50) {
      // Swipe right, go to previous
      navigatePhotos("prev");
    }
    
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!showAllPhotos) return;
    
    if (e.key === "ArrowRight") {
      navigatePhotos("next");
    } else if (e.key === "ArrowLeft") {
      navigatePhotos("prev");
    } else if (e.key === "Escape") {
      closePhotoGallery();
    }
  };

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
        <title>Designer Stone Estate Near Soho Farmhouse | Cotswolds UK - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at this designer stone estate near Soho Farmhouse in the Cotswolds, UK. This exclusive 8-bedroom property offers spa facilities, a tennis court, and an annex house, all set on a stunning 2-acre property just minutes from Soho Farmhouse."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <PropertyHeader
            title="Designer Stone Estate Near Soho Farmhouse | 8 Bedroom, Spa, Tennis Court, & Annex"
            guests={14}
            bedrooms={8}
            bathrooms={5}
            priceRange="Contact for pricing"
            contactLink="/contact"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Main Large Image */}
              <div 
                className="col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer h-[500px] md:h-auto"
                onClick={() => openPhotoGallery(0)}
              >
                <Image
                  src={photos[0]}
                  alt="Cotswolds UK - Soho Farm House - Main Property View"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Smaller Grid Images */}
              {photos.slice(1, 5).map((photo, index) => (
                <div 
                  key={index + 1} 
                  className="relative rounded-xl overflow-hidden cursor-pointer h-64 md:h-auto"
                  onClick={() => openPhotoGallery(index + 1)}
                >
                  <Image
                    src={photo}
                    alt={`Cotswolds UK - Soho Farm House - Interior or Exterior View ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => openPhotoGallery(0)}
              className="mt-4 text-gray-800 hover:text-black flex items-center text-sm font-medium"
            >
              <span className="mr-2">View all photos</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Property Description */}
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8" id="details">
            <p className="text-gray-800 mb-16 max-w-3xl mx-auto leading-relaxed text-lg">
              Welcome to your countryside dream retreat—just 4 minutes by car (or a scenic 30-minute walk through a private trail) from the world-famous Soho Farmhouse. This beautifully renovated 8-bedroom, 5-bathroom stone estate offers over 320m² of luxurious living space across two dwellings, all set on a stunning and serene 2-acre property.
            </p>
          </div>

          {/* Accommodation Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accommodation Details</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Designed for the most discerning guests, this property combines rustic charm with modern luxury to create an unforgettable Cotswolds experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Main House (6 bedrooms) (280m²)</h3>
                <p className="text-gray-700 mb-6">
                  The heart of the estate features six thoughtfully designed bedrooms and four elegant bathrooms, perfect for families, groups, or special gatherings. Bedroom configurations include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>1 Emperor King</li>
                  <li>2 Super Kings</li>
                  <li>1 King</li>
                  <li>1 Double</li>
                  <li>1 Single</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Two of the bedrooms have spa-like ensuite bathrooms, while the other bedrooms share a large bathroom with a separate tub and walk-in shower. There's also a charming powder room on the main floor.
                </p>
                <p className="text-gray-700">
                  Enjoy two cozy living rooms (ideal for lounging or movie nights), two dedicated office spaces for remote work, and a gorgeous Devol designer kitchen complete with an iconic AGA oven, two fridges, and a brand-new washer/dryer.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Annex House (2 bedrooms) (40m²)</h3>
                <p className="text-gray-700 mb-6">
                  Tucked away behind the newly surfaced private tennis court, the annex is a peaceful escape of its own. It features:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>1 King bedroom</li>
                  <li>1 bedroom with either two singles or a king configuration</li>
                  <li>1 full bathroom</li>
                  <li>A compact kitchenette—perfect for early risers or night owls who want their own space</li>
                </ul>
                <h3 className="text-2xl font-bold mb-6 mt-8">Wellness & Outdoor Living</h3>
                <p className="text-gray-700 mb-6">
                  The grounds are where the magic truly unfolds. Indulge in your own private outdoor spa, featuring:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>An infrared sauna</li>
                  <li>A bubbling hot tub</li>
                  <li>A refreshing cold plunge pool</li>
                </ul>
                <p className="text-gray-700">
                  Stroll past the little barn and you'll find a charming private pond—perfect for morning coffee or sunset wine. Challenge your group to a round of bocce ball or horseshoes, or simply unwind by the outdoor firepit under the stars.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[4]}
                    alt="Cotswolds UK - Soho Farm House - Premium Amenities"
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
                      <path
                        d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Additional Amenities</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Electric car charger</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Parking for up to 6 cars</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Extendable indoor dining table (seats 8, extends to 14)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>2 fireplaces (1 gas, 1 wood-burning)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Outdoor dining area and BBQ</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Private tennis court</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Outdoor wellness area with sauna, hot tub and cold plunge</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Private 2-acre grounds with pond</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8 text-center mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Experience countryside luxury at its finest</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
              This is not just a house—it's an experience. A rare blend of country charm and modern luxury, all within striking distance of Soho Farmhouse and the Cotswolds' best attractions. Perfect for family gatherings, corporate retreats, or special celebrations.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-md font-medium text-lg transition-colors"
            >
              Contact Us to Book
            </Link>
          </div>

          {/* All Photos Modal */}
          {showAllPhotos && selectedPhotoIndex !== null && (
            <div 
              className="fixed inset-0 bg-black z-50 flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={closePhotoGallery}
              >
                <X size={32} />
              </button>
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                onClick={() => navigatePhotos("prev")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                onClick={() => navigatePhotos("next")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto flex items-center justify-center">
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
                  </div>
                )}
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Photo ${selectedPhotoIndex + 1} of Cotswolds UK - Soho Farm House`}
                  fill
                  className="object-contain"
                  onLoad={handleImageLoad}
                />
              </div>
              
              <div className="absolute bottom-4 text-white text-center w-full">
                <p>{selectedPhotoIndex + 1} of {photos.length}</p>
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

export default CotswoldsUKSohoFarmHouse; 