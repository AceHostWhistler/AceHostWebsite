import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const LuxuryKadenwoodProperty = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos - updated with all current photos
  const photos = [
    // Cover photo first
    "/photos/properties/2919 Heritage/02 - 20260301 MM4P 01 DJI_20260301181105_0776_D-Edit-AI Generative Fill.jpg",
    "/photos/properties/2919 Heritage/01 - 20260301 MM4P 01 DJI_20260301111158_0401_D-Edit-Edit-AI Generative Fill.jpg",
    "/photos/properties/2919 Heritage/03 - 20260301 MM4P 01 DJI_20260301181209_0786_D.jpg",
    "/photos/properties/2919 Heritage/04 - 20260301 MM4P 01 DJI_20260301181237_0791_D-Edit-AI Generative Fill.jpg",
    "/photos/properties/2919 Heritage/05 - 20260301 A7M4 01 A1_01862-Edit.jpg",
    "/photos/properties/2919 Heritage/07 - 20260301 A7M4 01 A1_01879.jpg",
    "/photos/properties/2919 Heritage/08 - 20260301 A7M4 01 A1_01630.jpg",
    "/photos/properties/2919 Heritage/09 - 20260301 A7M4 01 A1_01777-Edit.jpg",
    "/photos/properties/2919 Heritage/10 - 20260301 A7M4 01 A1_01834-Edit.jpg",
    "/photos/properties/2919 Heritage/11 - 20260301 A7M4 01 A1_02026-Edit.jpg",
    "/photos/properties/2919 Heritage/13 - 20260301 A7M4 01 A1_02004-Edit.jpg",
    "/photos/properties/2919 Heritage/14 - 20260301 A7M4 01 A1_01957.jpg",
    "/photos/properties/2919 Heritage/16 - 20260301 A7M4 01 A1_02045-Edit-Edit.jpg",
    "/photos/properties/2919 Heritage/17 - 20260301 A7M4 01 A1_01471.jpg",
    "/photos/properties/2919 Heritage/18 - 20260301 A7M4 01 A1_01946.jpg",
    "/photos/properties/2919 Heritage/19 - 20260301 A7M4 01 A1_01596.jpg",
    "/photos/properties/2919 Heritage/24 - 20260301 A7M4 01 A1_01497.jpg",
    "/photos/properties/2919 Heritage/25 - 20260301 A7M4 01 A1_01685-Edit.jpg",
    "/photos/properties/2919 Heritage/27 - 20260301 A7M4 01 A1_01700-Edit.jpg",
    "/photos/properties/2919 Heritage/28 - 20260301 A7M4 01 A1_01743-Edit.jpg",
    "/photos/properties/2919 Heritage/31 - 20260301 A7M4 01 A1_01788-Edit.jpg",
    "/photos/properties/2919 Heritage/32 - 20260301 A7M4 01 A1_01800.jpg",
    "/photos/properties/2919 Heritage/33 - 20260301 A7M4 01 A1_01848.jpg",
    "/photos/properties/2919 Heritage/34 - 20260301 A7M4 01 A1_01823-Edit.jpg",
    "/photos/properties/2919 Heritage/38 - 20260301 A7M4 01 A1_02799-Edit.jpg",
    "/photos/properties/2919 Heritage/39 - 20260301 A7M4 01 A1_02804.jpg",
    "/photos/properties/2919 Heritage/40 - 20260301 A7M4 01 A1_02063-Edit-Edit.jpg",
    "/photos/properties/2919 Heritage/44 - 20260301 A7M4 01 A1_02278.jpg",
    "/photos/properties/2919 Heritage/45 - 20260301 A7M4 01 A1_02301.jpg",
    "/photos/properties/2919 Heritage/47 - 20260301 A7M4 01 A1_02319.jpg",
    "/photos/properties/2919 Heritage/48 - 20260301 A7M4 01 A1_02332.jpg",
    "/photos/properties/2919 Heritage/50 - 20260301 A7M4 01 A1_02253.jpg",
    "/photos/properties/2919 Heritage/51 - 20260301 A7M4 01 A1_01705.jpg",
    "/photos/properties/2919 Heritage/52 - 20260301 A7M4 01 A1_01719.jpg",
    "/photos/properties/2919 Heritage/54 - 20260301 A7M4 01 A1_02071.jpg",
    "/photos/properties/2919 Heritage/55 - 20260301 A7M4 01 A1_02153.jpg",
    "/photos/properties/2919 Heritage/57 - 20260301 A7M4 01 A1_02167.jpg",
    "/photos/properties/2919 Heritage/58 - 20260301 A7M4 01 A1_02173.jpg",
    "/photos/properties/2919 Heritage/59 - 20260301 A7M4 01 A1_02179.jpg",
    "/photos/properties/2919 Heritage/62 - 20260301 A7M4 01 A1_02582.jpg",
    "/photos/properties/2919 Heritage/63 - 20260301 A7M4 01 A1_02206.jpg",
    "/photos/properties/2919 Heritage/64 - 20260301 A7M4 01 A1_02213.jpg",
    "/photos/properties/2919 Heritage/66 - 20260301 A7M4 01 A1_02242.jpg",
    "/photos/properties/2919 Heritage/67 - 20260301 A7M4 01 A1_02382.jpg",
    "/photos/properties/2919 Heritage/68 - 20260301 A7M4 01 A1_02406.jpg",
    "/photos/properties/2919 Heritage/69 - 20260301 A7M4 01 A1_02400.jpg",
    "/photos/properties/2919 Heritage/70 - 20260301 A7M4 01 A1_02423.jpg",
    "/photos/properties/2919 Heritage/71 - 20260301 A7M4 01 A1_02442.jpg",
    "/photos/properties/2919 Heritage/72 - 20260301 A7M4 01 A1_02412.jpg",
    "/photos/properties/2919 Heritage/73 - 20260301 A7M4 01 A1_02711.jpg",
    "/photos/properties/2919 Heritage/74 - 20260301 A7M4 01 A1_02719.jpg",
    "/photos/properties/2919 Heritage/75 - 20260301 A7M4 01 A1_02625.jpg",
    "/photos/properties/2919 Heritage/76 - 20260301 A7M4 01 A1_02650.jpg",
    "/photos/properties/2919 Heritage/77 - 20260301 A7M4 01 A1_02640.jpg",
    "/photos/properties/2919 Heritage/78 - 20260301 A7M4 01 A1_02814.jpg",
    "/photos/properties/2919 Heritage/79 - 20260301 A7M4 01 A1_02459.jpg",
    "/photos/properties/2919 Heritage/80 - 20260301 A7M4 01 A1_02466.jpg",
    "/photos/properties/2919 Heritage/81 - 20260301 A7M4 01 A1_02486.jpg",
    "/photos/properties/2919 Heritage/82 - 20260301 A7M4 01 A1_02505.jpg",
    "/photos/properties/2919 Heritage/83 - 20260301 A7M4 01 A1_02750.jpg",
    "/photos/properties/2919 Heritage/84 - 20260301 A7M4 01 A1_02757.jpg",
    "/photos/properties/2919 Heritage/85 - 20260301 A7M4 01 A1_02523-Edit.jpg",
    "/photos/properties/2919 Heritage/86 - 20260301 A7M4 01 A1_02556.jpg",
    "/photos/properties/2919 Heritage/87 - 20260301 A7M4 01 A1_02594.jpg",
    "/photos/properties/2919 Heritage/88 - 20260301 A7M4 01 A1_02606.jpg",
    "/photos/properties/2919 Heritage/89 - 20260301 A7M4 01 A1_02680-Edit.jpg",
    "/photos/properties/2919 Heritage/90 - 20260301 A7M4 01 A1_02665.jpg",
    "/photos/properties/2919 Heritage/91 - 20260301 A7M4 01 A1_02686.jpg",
    "/photos/properties/2919 Heritage/92 - 20260301 A7M4 01 A1_02656.jpg",
    "/photos/properties/2919 Heritage/93 - 20260301 A7M4 01 A1_02615.jpg",
    "/photos/properties/2919 Heritage/95 - 20260301 A7M4 01 A1_02132-Edit.jpg",
    "/photos/properties/2919 Heritage/96 - 20260301 A7M4 01 A1_02141.jpg",
    "/photos/properties/2919 Heritage/97 - 20260301 A7M4 01 A1_02102-Edit.jpg",
    "/photos/properties/2919 Heritage/98 - 20260301 A7M4 01 A1_02127.jpg",
    "/photos/properties/2919 Heritage/99 - 20260301 MM4P 01 DJI_20260301110846_0368_D-Edit.jpg",
    "/photos/properties/2919 Heritage/104 - 20260301 MM4P 01 DJI_20260301104740_0208_D.jpg",
    "/photos/properties/2919 Heritage/106 - 20260301 MM4P 01 DJI_20260301110628_0353_D.jpg",
    "/photos/properties/2919 Heritage/20200414_132416jpg.jpg",
    "/photos/properties/2919 Heritage/20230104_204342jpg.jpg",
    "/photos/properties/2919 Heritage/20230104_204343jpg.jpg",
  ];

  // Photo navigation functions
  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
    setSelectedPhotoIndex(index);
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

  // Handle image load completion
  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex !== null) {
        if (e.key === 'ArrowLeft') {
          navigatePhoto('prev');
        } else if (e.key === 'ArrowRight') {
          navigatePhoto('next');
        } else if (e.key === 'Escape') {
          closeFullScreenPhoto();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhotoIndex]);

  // Handle touch navigation
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
        navigatePhoto('next');
      } else {
        navigatePhoto('prev');
      }
    }
    
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>The Mountaintop at Kadenwood | Ski in Ski out - AceHost</title>
        <meta
          name="description"
          content="Located in Whistler's most prestigious true ski-in ski-out neighbourhood, Kadenwood, this 7-bedroom, 7.5-bath retreat offers 6200 square feet of refined mountain living with chef's kitchen, hot tub, fire pits, and more."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="The Mountaintop at Kadenwood | Ski in Ski out"
            guests={16}
            bedrooms={7}
            beds={8}
            bathrooms={7.5}
            priceRange="$6,500-$9,000+ per night. $8,000-$10,000+ in winter. $14,900-$19,000 for Christmas/NYE."
            airbnbLink="https://www.airbnb.ca/rooms/1599369454342102375?guests=1&adults=1&s=67&unique_share_id=07a4f082-1dec-4a06-bf97-05638b3b71ef"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <img
                    src={photo}
                    alt={`Luxury Kadenwood property interior ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
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
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Located in the most prestigious true ski-in ski-out neighbourhood, Kadenwood, this home offers 6200 square feet of refined mountain living, with the best views in all of Whistler!
              <br /><br />
              The open-concept main level features a chef's kitchen with Wolf, Subzero & Miele appliances, quartz countertops, generous prep space & a separate prep kitchen, perfect for entertaining. Enjoy a hot tub, fire pits, ping pong table, wet bar, steam room, and two 90-inch TVs for the ultimate year-round Whistler escape.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <img
                    src="/optimized/2919-Heritage/description-1.jpg"
                    alt="Luxury Kadenwood Property Interior"
                    className="w-full h-full object-cover rounded-lg"
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
                  Sleeping Arrangements & Layout:
                  <br /><br />
                  Designed for comfort, privacy and flexibility, the home is thoughtfully laid out across multiple levels, making it ideal for families, groups and multi-generational stays. Each bedroom offers beautiful mountain views, and several feature private ensuite bathrooms or deck access. The mix of primary suites, queen rooms and bunk accommodations ensures everyone has their own space while still feeling connected.
                  <br /><br />
                  <strong>Top Floor-</strong>
                  <br />
                  -1 murphy queen size bed in office space
                  <br />
                  -1 powder bathroom
                  <br /><br />
                  <strong>Main Floor-</strong>
                  <br />
                  -1 detached bathroom, 1 shower, 1 sink
                  <br />
                  -Master Bedroom 1: 1 King bed, ensuite, 1 bath, 1 shower, 2 sinks
                  <br />
                  -Bedroom 2: Queen size bed, no ensuite, no closet, 1 dresser
                  <br />
                  -Bedroom 3: 1 King bed, ensuite, 1 shower, 2 sink
                  <br />
                  -Bedroom 4: 1 King bed, ensuite, 1 shower, 1 sink
                  <br />
                  -Laundry, 1 washer, 1 dryer
                  <br /><br />
                  <strong>Lower Floor-</strong>
                  <br />
                  -Steam shower, 2 sink bathroom
                  <br />
                  -Bedroom 5: 1 queen bed, ensuite, 2 sink, 1 shower
                  <br />
                  -Bedroom 6: 2 queen bunk beds, shared ensuite
                  <br />
                  *Bedroom 5 & Bedroom 6 share/connected bathrooms
                  <br /><br />
                  <strong>Outdoor Amenities</strong>
                  <br />
                  After a day on the slopes or trails, relax in the outdoor hot tub or unwind in the brand new wood barrel sauna, perfectly positioned for alpine après moments.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-gray-800">
                    Kadenwood is Whistler's most prestigious ski-in ski-out neighbourhood, perched nearly 1,000 feet above the valley floor. Surrounded by old-growth forest and snow-covered ridgelines, it offers private ski trails, breathtaking views and exclusive gondola access connecting directly to Whistler and Blackcomb mountains, as well as Creekside Village. Home to some of Whistler's most luxurious estates, Kadenwood delivers unmatched privacy, scenery and convenience.
                  </p>
                </div>
                <div className="relative aspect-[4/3]">
                  <img
                    src="/optimized/2919-Heritage/description-2.jpg"
                    alt="Kadenwood Location"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Concierge Services Section */}
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
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">***Concierge Services***</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="relative aspect-[4/3]">
                  <img
                    src="/optimized/2919-Heritage/description-3.jpg"
                    alt="Concierge Services"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-800">
                    VIP concierge services are included with every booking at no cost. Here at AceHost we have the best recommendations and contacts to make your trip seamless and special. From ski rental delivery, ski pass & instructor bookings/delivery, airport transportation, daily cleaning, priority restaurant reservations, and absolutely anything else you might need. We have you covered and would love to help you.
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Private Chalet Host/Butler Section */}
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
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Optional Addition | Private Chalet Host/Butler</h2>
              </div>
              <p className="text-gray-800 max-w-4xl">
                Optional but highly recommended, a daily butler/chalet host to help make your stay more comfortable. They do not live in the home, rather come in the morning and evening for an average of 10 hours daily. Helping clean up around the kitchen/dining tables, your own personal barista in the mornings, and if a chef is arranged, they can act as a fine dining server for a plated meal experience. Familiar with the home for any quick questions so you can focus on enjoying yourself!
                <br /><br />
                <strong>-Cost 330 USD daily.</strong>
              </p>
            </div>

            {/* Additional Features Section */}
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
                      d="M19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5ZM19 17H5V7H19V17Z"
                      fill="white"
                    />
                    <path
                      d="M8.5 12C9.33 12 10 11.33 10 10.5C10 9.67 9.33 9 8.5 9C7.67 9 7 9.67 7 10.5C7 11.33 7.67 12 8.5 12Z"
                      fill="white"
                    />
                    <path
                      d="M17 14.5L13.5 9.5L11 12.51L9.5 10.5L6 15H18L17 14.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Additional Features</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-800 mb-4">
                    This stunning 6200 square foot mountain retreat offers a wealth of premium amenities:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-800">
                    <li>Renovated chef's kitchen with Wolf, Subzero & Miele appliances</li>
                    <li>Quartz countertops and separate prep kitchen</li>
                    <li>Outdoor hot tub</li>
                    <li>Brand new wood barrel sauna</li>
                    <li>Fire pits</li>
                    <li>Ping pong table</li>
                    <li>Wet bar</li>
                    <li>Steam room</li>
                    <li>Two 90-inch TVs</li>
                    <li>Private ski trails</li>
                    <li>Exclusive gondola access</li>
                  </ul>
                </div>
                <div className="relative aspect-[4/3]">
                  <img
                    src="/optimized/2919-Heritage/description-4.jpg"
                    alt="Additional Features"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Registration Details */}
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
                      d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Registration Details</h2>
              </div>
              <p className="text-gray-800 max-w-4xl">
                <strong>Municipal registration number:</strong> 00013412
                <br />
                <strong>Provincial registration number:</strong> PM939298865
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                The Mountaintop at Kadenwood | Ski in Ski out - All Photos
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
                aria-label="Close gallery"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <img
                        src={photo}
                        alt={`Luxury Kadenwood Property ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading={index < 8 ? "eager" : "lazy"}
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
                <img
                  src={photos[selectedPhotoIndex]}
                  alt={`Luxury Kadenwood Property full view ${selectedPhotoIndex + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={handleImageLoad}
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

export default LuxuryKadenwoodProperty;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};