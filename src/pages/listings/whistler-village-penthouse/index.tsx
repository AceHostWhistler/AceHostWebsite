import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const WhistlerVillagePenthouse = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-1.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-2.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-3.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-4.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-5.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-6.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-7.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-8.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-9.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-10.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-11.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-12.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-13.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-14.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-15.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-16.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-17.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-18.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-19.jpg",
    "/photos/properties/3-Bed PH Whistler Village/19 - 4211 sunshine pl-20.jpg"
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(false);
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
        <title>Whistler Village | Penthouse | 4-Bed - AceHost</title>
        <meta
          name="description"
          content="Penthouse with private hot tub steps from Whistler Blackcomb gondola. Step out your door into Whistler's finest amenities. Located at the base of Whistler mountain, you are in the heart of iconic Whistler Village."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader 
            title="Whistler Village | Penthouse | 4-Bed"
            guests={7}
            bedrooms={2}
            bathrooms={2}
            priceRange="Nightly Price Range: $450-$1,700"
            winterPrice="$700-$1,100+ Nightly | Winter"
            holidayPrice="$1,300-$1,700+ Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1471251206220643818?guests=1&adults=1&s=67&unique_share_id=0ec28644-49fa-4b63-9276-7e5f5c6a1153"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 20).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Whistler Village Penthouse interior ${index + 1}`}
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
          </div>

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Penthouse with private hot tub steps from Whistler Blackcomb gondola. Step out your door into Whistler's finest amenities. Located at the base of Whistler mountain, you are in the heart of iconic Whistler Village.
              <br />
              <br />
              This space was designed to gather family and friends. Pop champagne in the hot tub, roast marshmallows on the fire, and enjoy the mountain view. Everything you need for a memorable Whistler experience.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="Whistler Village Penthouse Interior"
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
                <p className="mb-6">
                  The true Whistler cabin vibe you are looking for. High ceilings, log beams, fireplace, mountain views, and a private hot tub. Great place to unwind after skiing while being located right in the heart of iconic Whistler village. Grocery & liquor store right downstairs - leave your coat at home! Steps away from Whistler's finest restaurants, including Araxi & Il Caminetto. Ski-in/ski-out. You won't need your car this weekend.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-gray-800">
                    <span className="font-semibold">Bedrooms:</span> Master with king bed plus a single bed pull out, Guest room with queen bed, Living room with pull-out double bed
                  </li>
                  <li className="text-gray-800">
                    <span className="font-semibold">Bathrooms:</span> Two bathrooms, each with a shower
                  </li>
                  <li className="text-gray-800">
                    <span className="font-semibold">Kitchen:</span> Fully equipped kitchen with dining table for 6
                  </li>
                  <li className="text-gray-800">
                    <span className="font-semibold">Hot tub:</span> Private hot tub, professionally maintained
                  </li>
                  <li className="text-gray-800">
                    <span className="font-semibold">Entry:</span> Keypad access
                  </li>
                  <li className="text-gray-800">
                    <span className="font-semibold">Accessibility:</span> No elevator in building. Guests must walk up three flights of stairs to suite. One flight of stairs inside the suite.
                  </li>
                  <li className="text-gray-800">
                    <span className="font-semibold">Equipment:</span> Secure ski room and bike room in the parkade
                  </li>
                  <li className="text-gray-800">
                    <span className="font-semibold">Parking:</span> Free parking for guests in the Rainbow Parkade downstairs (height clearance 6'10")
                  </li>
                </ul>
              </div>
            </div>

            {/* Features Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">Property Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center mb-4">
                  <div className="bg-black rounded-full p-2 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Heart of Whistler Village</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-black rounded-full p-2 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Private Hot Tub</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-black rounded-full p-2 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Sleeps 7 Guests</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-black rounded-full p-2 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Ski-in/Ski-out Access</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-black rounded-full p-2 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22V12h6v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-black rounded-full p-2 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>FREE Parking</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-black rounded-full p-2 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>High Ceilings</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-black rounded-full p-2 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Log Beams</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-black rounded-full p-2 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Fireplace</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-100 rounded-xl p-8 mb-20 text-center">
              <h3 className="text-2xl font-bold mb-4">Book Your Stay at Whistler Village Penthouse</h3>
              <p className="text-lg mb-6">
                Ready to experience the perfect Whistler getaway? Book now to secure your dates.
              </p>
              <a
                href="https://www.airbnb.ca/rooms/1471251206220643818?guests=1&adults=1&s=67&unique_share_id=0ec28644-49fa-4b63-9276-7e5f5c6a1153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-lg font-medium transition-colors"
              >
                Book on Airbnb
              </a>
            </div>
          </div>
        </main>

        {/* Full screen photo overlay */}
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={closeFullScreenPhoto}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={() => navigatePhoto("prev")}
              className="absolute left-4 text-white bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition-colors"
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
              onClick={() => navigatePhoto("next")}
              className="absolute right-4 text-white bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition-colors"
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
              className="w-full h-full flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-[90%] h-[80%]">
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Whistler Village Penthouse photo ${selectedPhotoIndex + 1}`}
                  fill
                  className="object-contain"
                  onLoad={handleImageLoad}
                />
              </div>
            </div>

            {/* Photo counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              {selectedPhotoIndex + 1} / {photos.length}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default WhistlerVillagePenthouse; 