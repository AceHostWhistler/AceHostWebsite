import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X, Users, MapPin, ChevronLeft, ChevronRight, Home } from "lucide-react";

type PropertyPhoto = {
  src: string;
  alt: string;
};

const WhistlerVillageViews = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos: PropertyPhoto[] = [
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge.jpg",
      alt: "Whistler Village Views interior 1"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-2.jpg",
      alt: "Whistler Village Views interior 2"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-3.jpg",
      alt: "Whistler Village Views interior 3"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-4.jpg",
      alt: "Whistler Village Views interior 4"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-5.jpg",
      alt: "Whistler Village Views interior 5"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-6.jpg",
      alt: "Whistler Village Views interior 6"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-7.jpg",
      alt: "Whistler Village Views interior 7"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-8.jpg",
      alt: "Whistler Village Views interior 8"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-9.jpg",
      alt: "Whistler Village Views interior 9"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-10.jpg",
      alt: "Whistler Village Views interior 10"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-11.jpg",
      alt: "Whistler Village Views interior 11"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-12.jpg",
      alt: "Whistler Village Views interior 12"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-13.jpg",
      alt: "Whistler Village Views interior 13"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-14.jpg",
      alt: "Whistler Village Views interior 14"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-15.jpg",
      alt: "Whistler Village Views interior 15"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-16.jpg",
      alt: "Whistler Village Views interior 16"
    },
    {
      src: "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-17.jpg",
      alt: "Whistler Village Views interior 17"
    }
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
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

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

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
        <title>Whistler Village Views | Luxury 2.5 Bedroom - AceHost</title>
        <meta
          name="description"
          content="Experience luxury living in this stunning 2.5 bedroom property in the heart of Whistler Village. Features breathtaking views of Olympic Plaza and Blackcomb Mountain, modern amenities, and sleeps up to 6 guests. Perfect for families and groups seeking a premium Whistler experience. Nightly rates from $400-$1,150+."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader 
            title="Whistler Village Views | Luxury 2.5 Bedroom"
            guests={6}
            bedrooms={2.5}
            bathrooms={2}
            priceRange="$1,000-$2,100 per night"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 17).map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] cursor-pointer group rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    onLoad={handleImageLoad}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              This property is conveniently located for skiing, just a short walk from your front door! It's perfect for families visiting Whistler, with 2 bedrooms and 2 bathrooms.
              <br />
              <br />
              The layout is spacious and offers views of Olympic Plaza and Blackcomb Mountain. The master bedroom has a queen bed, the second bedroom has 2 single beds and a queen sofa bed. The kitchen is fully equipped and there is a washing machine and dryer in the suite. The complex also has a dip pool and hot tub.
              <br />
              <br />
              The property has recently been renovated and has all the comforts of home. Guests have access to the pool, hot tub, bike storage, ski/board storage, and one reserved parking spot. There are multiple entrances/exits and the stairs lead directly to the village. Our bedside table alarm clocks have USB ports, as do the backs of the sofa tables and under the island/bar.
              <br />
              <br />
              Please sign our guest book and if you have a bottle of wine with a cork, write your country on it and place it in the wine rack.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2 rounded-lg overflow-hidden">
                  <Image
                    src={photos[3].src}
                    alt={photos[3].alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-black text-white p-4 rounded-full mr-4">
                    <Home className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">The Space</h2>
                </div>
                <p className="text-gray-800 mb-6">
                  Ski in/Ski out is just a short walk from your front door! This family friendly property offers every thing that you need while visiting Whistler. 2 bed/2 bath, a spacious layout with views over Olympic Plaza and Blackcomb Mountain. The master bedroom offers a queen bed, the second bedroom offers 2 singles and a pullout queen sofa bed. The kitchen is fully equipped and ready to enjoy. There is a W/D in the suite & the complex offers a dip pool and hot tub. Located steps from everything!
                </p>
                <p className="text-gray-800 mb-6">
                  This property has just been renovated and offers all of the luxuries of home to enjoy your days and evening in Whistler.
                </p>
                <p className="text-gray-800 mb-6">
                  Scenic views, Courtyard view, Mountain view, Park view. Bathroom, Bathtub, Hair dryer, Cleaning products, Shampoo, Conditioner, Body soap, Hot water, Shower gel, Bedroom, laundry, Washer, Free dryer – In unit, Towels, bed sheets, soap, and toilet paper, Hangers, Clothing storage: closet, Entertainment 55" HDTV with Netflix, Family, Babysitter recommendations, Heating and cooling AC – split-type ductless system, Indoor fireplace: gas, Central heating, Home safety Smoke alarm Carbon monoxide alarm, Fire extinguisher, Internet and office Wifi. Dedicated workspace, Kitchen and dining, Kitchen Space where guests can cook their own meals, Refrigerator, Microwave, Cooking, basics, Pots, and pans, oil, salt and pepper, Dishes and silverware Bowls, chopsticks, plates, cups, etc. Freezer, Dishwasher, Stove, Oven, kettle, Coffee maker, Wine glasses, Toaster, Blender.
                </p>
                <p className="text-gray-800">
                  Pool, hot tub, bike storage, ski/ board storage, 1 parking spot reserved, some visitor parking.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[4].src}
                    alt={photos[4].alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="flex items-center mb-6">
                  <div className="bg-black text-white p-4 rounded-full mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Bedroom Layout</h2>
                </div>

                <p className="mb-4">
                  <span className="font-medium">Master Bedroom:</span> The master bedroom offers a Queen bed with an ensuite bathroom with a shower and bath.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2:</span> The second bedroom offers 2 singles with an ensuite bathroom with a shower.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2.5:</span> A pullout Queen sofa bed in the main room.
                </p>
                <p className="mb-6">
                  Comfortably sleeping up to 6 guests.
                </p>
              </div>
            </div>

            {/* Location Section */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-black text-white p-4 rounded-full mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Location</h2>
              </div>
              <p className="text-gray-800 max-w-4xl mb-6">
                Tyndall Stone Lodge is located in the heart of Village North, just steps from everything, including the free shuttle bus that will bring you to the base of both Whistler or Blackcomb Gondolas. Once organized concerts and events are allowed at Olympic Plaza are allowed again, you can enjoy all aspects from the privacy and comfort of your balcony. Tyndall Stone Lodge offers a shared dip pool and hot tub for the complex along with free underground secured parking.
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                Easy to walk everywhere and there is a free Village shuttle just steps from your property. You can walk to the chair lifts easily in 5 mins.
              </p>
              <p className="text-gray-800 max-w-4xl">
                <span className="font-bold">Location features:</span> Ski-in/ski-out – Near ski lifts Guests can access ski lifts without driving or taking paid transportation. Resort access Guests can use nearby resort facilities. Outdoor Private patio or balcony. Backyard - An open space on the property usually covered in grass. Outdoor furniture. Parking and facilities - Free parking on premises. Free street parking. Shared outdoor pool – Shared hot tub – available all year. Single level home, No stairs in home.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-sm p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Whistler Village Views - All Photos
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900/80 px-4 py-2 rounded-full flex items-center gap-2"
              >
                <X className="h-5 w-5" />
                <span>Close</span>
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                      priority={index < 8}
                      loading={index < 8 ? "eager" : "lazy"}
                      onLoad={handleImageLoad}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Full-screen Photo View */}
        {selectedPhotoIndex !== null && (
          <div 
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute top-4 right-4 flex space-x-4">
              <button
                onClick={closeFullScreenPhoto}
                className="text-white bg-gray-900/80 p-2 rounded-full hover:bg-gray-800 transition-colors z-20 flex items-center gap-2"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900/80 p-3 rounded-full hover:bg-gray-800 transition-colors z-20"
              onClick={() => navigatePhoto("prev")}
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="relative w-full h-full max-w-7xl max-h-[85vh] mx-auto px-4">
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <div className="relative w-full h-full">
                <Image
                  src={photos[selectedPhotoIndex].src}
                  alt={photos[selectedPhotoIndex].alt}
                  fill
                  priority
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                  sizes="100vw"
                  onLoadingComplete={handleImageLoad}
                  quality={90}
                  loading="eager"
                />
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900/80 p-3 rounded-full hover:bg-gray-800 transition-colors z-20"
              onClick={() => navigatePhoto("next")}
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
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

export default WhistlerVillageViews;
