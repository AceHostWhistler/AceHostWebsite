import React from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";


const SnowPine = () => {
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Snowpine 3-bed Saul/01-2040 Karen Cres-01.jpg",
    "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
    "/photos/properties/Snowpine 3-bed Saul/03-2040 Karen Cres-03.jpg",
    "/photos/properties/Snowpine 3-bed Saul/04-2040 Karen Cres-04.jpg",
    "/photos/properties/Snowpine 3-bed Saul/05-2040 Karen Cres-05.jpg",
    "/photos/properties/Snowpine 3-bed Saul/06-2040 Karen Cres-06.jpg",
    "/photos/properties/Snowpine 3-bed Saul/07-2040 Karen Cres-07.jpg",
    "/photos/properties/Snowpine 3-bed Saul/08-2040 Karen Cres-08.jpg",
    "/photos/properties/Snowpine 3-bed Saul/09-2040 Karen Cres-09.jpg",
    "/photos/properties/Snowpine 3-bed Saul/10-2040 Karen Cres-10.jpg",
    "/photos/properties/Snowpine 3-bed Saul/11-2040 Karen Cres-11.jpg",
    "/photos/properties/Snowpine 3-bed Saul/12-2040 Karen Cres-12.jpg",
    "/photos/properties/Snowpine 3-bed Saul/13-2040 Karen Cres-13.jpg",
    "/photos/properties/Snowpine 3-bed Saul/14-2040 Karen Cres-14.jpg",
    "/photos/properties/Snowpine 3-bed Saul/15-2040 Karen Cres-15.jpg",
    "/photos/properties/Snowpine 3-bed Saul/16-2040 Karen Cres-16.jpg",
    "/photos/properties/Snowpine 3-bed Saul/17-2040 Karen Cres-17.jpg",
    "/photos/properties/Snowpine 3-bed Saul/18-2040 Karen Cres-18.jpg",
    "/photos/properties/Snowpine 3-bed Saul/19-2040 Karen Cres-19.jpg",
    "/photos/properties/Snowpine 3-bed Saul/20-2040 Karen Cres-20.jpg",
    "/photos/properties/Snowpine 3-bed Saul/21-2040 Karen Cres-21.jpg",
    "/photos/properties/Snowpine 3-bed Saul/22-2040 Karen Cres-22.jpg",
    "/photos/properties/Snowpine 3-bed Saul/23-2040 Karen Cres-23.jpg",
  ];

  // Structured data for the property
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Snowpine | Creekside Modern Ski Chalet",
    "image": photos[0],
    "description": "This modern ski chalet in Creekside features a hot tub, BBQ, and fire pit, just 7 min walk to gondola.",
    "sku": "snowpine-creekside",
    "brand": {
      "@type": "Brand",
      "name": "AceHost"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": 3,
      "lowPrice": 10000,
      "highPrice": 12000,
      "priceCurrency": "CAD",
      "availability": "https://schema.org/LimitedAvailability",
      "validFrom": "2024-01-01",
      "offers": [
        {
          "@type": "Offer",
          "name": "Monthly Rate",
          "price": 10000,
          "priceCurrency": "CAD",
          "availability": "https://schema.org/LimitedAvailability"
        },
        {
          "@type": "Offer",
          "name": "3-Month Rate",
          "price": 30000,
          "priceCurrency": "CAD",
          "availability": "https://schema.org/LimitedAvailability"
        },
        {
          "@type": "Offer",
          "name": "4-Month Rate",
          "price": 40000,
          "priceCurrency": "CAD",
          "availability": "https://schema.org/LimitedAvailability"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15"
    }
  };

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
        <title>Snowpine | Creekside Modern Ski Chalet | AceHost</title>
        <meta
          name="description"
          content="Experience the perfect Whistler getaway at Snowpine. This modern ski chalet in Creekside features a hot tub, BBQ, and fire pit, just 7 min walk to gondola."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader 
            title="Snow Pine | Creekside | Ski-in/Ski-out"
            guests={12}
            bedrooms={4}
            bathrooms={4}
            priceRange="$1,400-$2,800 per night"
          />

          {/* Photo Gallery */}
          <PropertyGallery photos={photos} propertyName="snow pine" />

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              This home is a rare find and ideally located in Creekside, just a
              7-minute walk from the Creekside Gondola, making this the perfect
              location for your family ski getaway! The large open-concept
              living area is spacious but homely and it's tastefully
              furnished with a cozy fireplace. Relax on the large covered patio
              deck, while using the BBQ and outdoor fire pit.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="Snowpine Interior"
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
                  This contemporary duplex boasts modern finishes and appliances
                  to match. It is well equipped with everything you need for a
                  comfortable stay. The kitchen, dining, and living areas flow
                  seamlessly together in the open plan living space. In
                  addition, this natural light filled property is beautifully
                  complimented by the bright and spacious 3 bedrooms.
                </p>
                <p className="text-gray-800 mb-6">
                  Sleeping 6 comfortably in 3 bedrooms with 3.5 bathrooms.
                </p>
                <p className="text-gray-800 mb-6 font-bold">
                  BONUS: Ski locker available for your use located at the base
                  of Creekside just off the ski slopes. No need to carry your
                  equipment back and forth from the home!
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[8]}
                    alt="Snowpine Bedroom"
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

                <p className="font-bold mb-2">UPPER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Master bedroom 1:</span> Located
                  off the kitchen, this cozy bedroom has a plush king bed,
                  ensuite bathroom with a large walk-in shower and heated
                  floors. Access to a private balcony.
                </p>
                <p className="mb-4">Powder room located on this floor.</p>

                <p className="font-bold mb-2">LOWER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2:</span> On the ground
                  floor set near the back of the house is a spacious bedroom
                  with a king bed, office desk space and an ensuite bathroom
                  with a shower and bathtub. Access to the hot tub is via this
                  room on the balcony.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 3:</span> Next to
                  bedroom 3 is a comfortable room with a queen sized bed and
                  ensuite bathroom with a shower and bathtub.
                </p>
                <p className="mb-4">
                  Single car garage with a dedicated Tesla Charge and lots of
                  storage for all your equipment.
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
                This home is in a prime location just walking distance from
                Creekside Gondola! Enjoy a 2-minute stroll on the valley trail
                to Nita Lake and another 5-minute walk to Alpha Lake. On your
                doorstep, you have some of Whistler's best restaurants, Red
                Door Bistro, Rimrock Cafe, Cure Lounge (my favorite),
                Creekbread, and Dusty's are also just a short walk away!
                The Co-Op gas station and convenience store is just a block
                away. For groceries, the Creekside Market is also walking
                distance.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Snowpine - All Photos
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
                        alt={`Snowpine ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority={index < 6}
                        loading={index < 6 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="mt-1 text-center">
                      <span className="text-white text-xs">
                        {index + 1} / {photos.length}
                      </span>
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

export default SnowPine;
