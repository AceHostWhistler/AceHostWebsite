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

const TheNest = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/Wolverine Crescent/01 - 20251220 A7M4 01 A1_01116-Edit.jpg",
    "/photos/properties/Wolverine Crescent/02 - 20251220 A7M4 01 A1_00533.jpg",
    "/photos/properties/Wolverine Crescent/03 - 20251220 A7M4 01 A1_00543-Edit.jpg",
    "/photos/properties/Wolverine Crescent/04 - 20251220 A7M4 01 A1_00561-Edit.jpg",
    "/photos/properties/Wolverine Crescent/05 - 20251220 A7M4 01 A1_00581.jpg",
    "/photos/properties/Wolverine Crescent/06 - 20251220 A7M4 01 A1_00590-Edit.jpg",
    "/photos/properties/Wolverine Crescent/07 - 20251220 A7M4 01 A1_00605-Edit.jpg",
    "/photos/properties/Wolverine Crescent/08 - 20251220 A7M4 01 A1_00630-Edit.jpg",
    "/photos/properties/Wolverine Crescent/09 - 20251220 A7M4 01 A1_00640-Edit.jpg",
    "/photos/properties/Wolverine Crescent/10 - 20251220 A7M4 01 A1_00656-Edit.jpg",
    "/photos/properties/Wolverine Crescent/11 - 20251220 A7M4 01 A1_01200.jpg",
    "/photos/properties/Wolverine Crescent/12 - 20251220 A7M4 01 A1_00671-Edit.jpg",
    "/photos/properties/Wolverine Crescent/13 - 20251220 A7M4 01 A1_00679-Edit.jpg",
    "/photos/properties/Wolverine Crescent/14 - 20251220 A7M4 01 A1_00686-Edit.jpg",
    "/photos/properties/Wolverine Crescent/15 - 20251220 A7M4 01 A1_00698-Edit.jpg",
    "/photos/properties/Wolverine Crescent/16 - 20251220 A7M4 01 A1_01218.jpg",
    "/photos/properties/Wolverine Crescent/17 - 20251220 A7M4 01 A1_00712-Edit.jpg",
    "/photos/properties/Wolverine Crescent/18 - 20251220 A7M4 01 A1_00721-Edit.jpg",
    "/photos/properties/Wolverine Crescent/19 - 20251220 A7M4 01 A1_00726-Edit.jpg",
    "/photos/properties/Wolverine Crescent/20 - 20251220 A7M4 01 A1_00751.jpg",
    "/photos/properties/Wolverine Crescent/21 - 20251220 A7M4 01 A1_00731-Edit.jpg",
    "/photos/properties/Wolverine Crescent/22 - 20251220 A7M4 01 A1_00786.jpg",
    "/photos/properties/Wolverine Crescent/23 - 20251220 A7M4 01 A1_00798.jpg",
    "/photos/properties/Wolverine Crescent/24 - 20251220 A7M4 01 A1_00811.jpg",
    "/photos/properties/Wolverine Crescent/25 - 20251220 A7M4 01 A1_00817.jpg",
    "/photos/properties/Wolverine Crescent/26 - 20251220 A7M4 01 A1_00874.jpg",
    "/photos/properties/Wolverine Crescent/27 - 20251220 A7M4 01 A1_00881.jpg",
    "/photos/properties/Wolverine Crescent/28 - 20251220 A7M4 01 A1_00892.jpg",
    "/photos/properties/Wolverine Crescent/29 - 20251220 A7M4 01 A1_00899.jpg",
    "/photos/properties/Wolverine Crescent/30 - 20251220 A7M4 01 A1_00913.jpg",
    "/photos/properties/Wolverine Crescent/31 - 20251220 A7M4 01 A1_00918.jpg",
    "/photos/properties/Wolverine Crescent/32 - 20251220 A7M4 01 A1_00929.jpg",
    "/photos/properties/Wolverine Crescent/33 - 20251220 A7M4 01 A1_00937.jpg",
    "/photos/properties/Wolverine Crescent/34 - 20251220 A7M4 01 A1_00954.jpg",
    "/photos/properties/Wolverine Crescent/35 - 20251220 A7M4 01 A1_00943.jpg",
    "/photos/properties/Wolverine Crescent/36 - 20251220 A7M4 01 A1_00962.jpg",
    "/photos/properties/Wolverine Crescent/37 - 20251220 A7M4 01 A1_00968.jpg",
    "/photos/properties/Wolverine Crescent/38 - 20251220 A7M4 01 A1_00832.jpg",
    "/photos/properties/Wolverine Crescent/39 - 20251220 A7M4 01 A1_00838.jpg",
    "/photos/properties/Wolverine Crescent/40 - 20251220 A7M4 01 A1_00844.jpg",
    "/photos/properties/Wolverine Crescent/41 - 20251220 A7M4 01 A1_00862.jpg",
    "/photos/properties/Wolverine Crescent/42 - 20251220 A7M4 01 A1_00868.jpg",
    "/photos/properties/Wolverine Crescent/43 - 20251220 A7M4 01 A1_00980.jpg",
    "/photos/properties/Wolverine Crescent/44 - 20251220 A7M4 01 A1_00986.jpg",
    "/photos/properties/Wolverine Crescent/45 - 20251220 A7M4 01 A1_00992.jpg",
    "/photos/properties/Wolverine Crescent/46 - 20251220 A7M4 01 A1_00999.jpg",
    "/photos/properties/Wolverine Crescent/47 - 20251220 A7M4 01 A1_01011.jpg",
    "/photos/properties/Wolverine Crescent/48 - 20251220 A7M4 01 A1_01017.jpg",
    "/photos/properties/Wolverine Crescent/49 - 20251220 A7M4 01 A1_01194.jpg",
    "/photos/properties/Wolverine Crescent/50 - 20251220 A7M4 01 A1_01188.jpg",
    "/photos/properties/Wolverine Crescent/51 - 20251220 A7M4 01 A1_01158.jpg",
    "/photos/properties/Wolverine Crescent/52 - 20251220 A7M4 01 A1_01045.jpg",
    "/photos/properties/Wolverine Crescent/53 - 20251220 A7M4 01 A1_01064.jpg",
    "/photos/properties/Wolverine Crescent/54 - 20251220 A7M4 01 A1_01076.jpg",
    "/photos/properties/Wolverine Crescent/55 - 20251220 A7M4 01 A1_01090.jpg",
    "/photos/properties/Wolverine Crescent/56 - 20251220 A7M4 01 A1_01083.jpg",
    "/photos/properties/Wolverine Crescent/57 - 20251220 A7M4 01 A1_01152.jpg",
    "/photos/properties/Wolverine Crescent/58 - 20251220 A7M4 01 A1_01146.jpg",
    "/photos/properties/Wolverine Crescent/59 - 20251220 A7M4 01 A1_01140.jpg",
    "/photos/properties/Wolverine Crescent/60 - 20251220 A7M4 01 A1_01134.jpg",
    "/photos/properties/Wolverine Crescent/61 - 20251220 A7M4 01 A1_01167.jpg",
    "/photos/properties/Wolverine Crescent/62 - 20251220 A7M4 01 A1_01182.jpg",
    "/photos/properties/Wolverine Crescent/63 - 20251220 A7M4 01 A1_01210.jpg",
    "/photos/properties/Wolverine Crescent/64 - 20251220 A7M4 01 A1_01128-Edit.jpg",
    "/photos/properties/Wolverine Crescent/65 - 20251220 A7M4 01 A1_01129.jpg",
    "/photos/properties/Wolverine Crescent/66 - 20251220 A7M4 01 A1_00781.jpg",
    "/photos/properties/Wolverine Crescent/67 - 20251220 MM4P 01 0096.jpg",
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
        <title>The Nest | Ski in-Ski out - AceHost</title>
        <meta
          name="description"
          content="Welcome to The Nest, this newly renovated 5-bedroom home is located right next to the ski hill. It's only a short walk to the mountain, and you can ski back to your front door."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader 
            title="The Nest | Ski-in/Ski-out"
            guests={10}
            bedrooms={5}
            bathrooms={6}
            priceRange="Monthly Price Range: $18,000-$29,000"
            airbnbLink="https://www.airbnb.ca/rooms/763259660349118016?guests=1&adults=1&s=67&unique_share_id=b5240c14-ecb8-4f5a-9c3c-f3861874c7e0"
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
                    alt={`The Nest interior ${index + 1}`}
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
              Welcome to The Nest, this newly renovated 5-bedroom home is
              located right next to the ski hill. It's only a short walk to
              the mountain, and you can ski back to your front door. This rare
              find is situated in the prestigious and quiet neighborhood of
              Nordic. Experience majestic mountain views and a gorgeous sunset,
              while soaking in the hot tub after skiing.
              <br />
              <br />
              <span className="font-bold">Long-term rentals 90+ days only</span>
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[4]}
                    alt="The Nest Interior"
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
                  Lounge on brand-new high-end furniture, ideal for entertaining
                  a large group or big family. Enjoy ample space in the
                  open-plan living room with a fireplace that adds a touch of
                  coziness for an evening well spent. Finish your day on the
                  mountain with a soak in the private hot tub!
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src="/photos/properties/Wolverine Crescent/31 - 20251220 A7M4 01 A1_00918.jpg"
                    alt="The Nest Bedroom"
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
                  <span className="font-medium">Bedroom 1:</span> Master
                  bedroom, located at the end of the top floor corridor. It
                  features a beautiful king-sized bed, large floor-to-ceiling
                  windows that provide ample natural light, and a quaint outdoor
                  private patio. The room also includes a cozy gas fireplace for
                  added warmth and ambiance. The ensuite bathroom in this
                  bedroom is modern and spacious, featuring a light-filled
                  bathtub and a large shower.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2:</span> Situated next
                  to the master bedroom, this tastefully furnished room also
                  offers a stylish king-sized bed. It has private patio access
                  so you can soak up the mountain views. The ensuite bathroom in
                  this room features both a shower and a bath.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 3:</span> Adjacent to
                  bedroom 2, this room boasts a comfortable king-sized bed. It
                  also has an ensuite bathroom with a shower and a bathtub,
                  providing convenience and privacy.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 4:</span> Is located on
                  the lower floor, this bedroom features two twin beds. It is
                  decorated with welcoming and bright furnishings, creating a
                  cheery atmosphere. This room shares a spacious bathroom with
                  bedroom 5, which includes both a shower and a bathtub.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 5:</span> Is situated
                  next to bedroom 4, this room offers a king-sized bed and a
                  twin bed, providing flexible sleeping arrangements. It has a
                  beautiful gas fireplace that adds a homely touch to the space.
                </p>
                <p className="mb-4">
                  Additionally, there is a powder bathroom on the ground floor.
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
              <p className="text-gray-800 max-w-4xl mb-6">
                Prime ski-in/ski-out location in the prestigious and quiet
                Nordic neighborhood, providing easy access to the mountain and
                stunning views. Ride the local bus if you don't want to use
                your car. For Whistler Village it's an 8-minute walk to the
                Eva Lake Road bus stop, catch the 20, 21, or 25 and the journey
                is only 7 minutes. For Creekside Village walk 9 minutes to
                Highlands bus stop and catch the 20 and 21 buses. The buses come
                every 10 or 15 minutes.
              </p>
              <p className="text-gray-800 max-w-4xl">
                The best part of this chalet is the location! Nordic is a real
                gem. It's just a short distance from both Creekside and
                Whistler Village! Enjoy just a 7 minute stroll to access the
                Dave Murray Ski trail and ski out to the Creekside Gondola and
                village. The house is just a 3-minute drive to Creekside Village
                or a 17 minutes walk. Easy access to the lakes in the Summer.
                Stroll into Creekside and enjoy delicious coffee and pastries at
                Bred Bakery and Rock-It Coffee co, the creekside market for
                groceries, BC liquor stores, and Dusty's for Après. Great
                restaurants Rim Rock, Red door, Creekbread and Nita Lake lodge
                located in Creekside. This is the ideal home for your holiday!
              </p>
            </div>
            
            {/* Exterior View Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src="/photos/properties/Wolverine Crescent/66 - 20251220 A7M4 01 A1_00781.jpg"
                    alt="The Nest Exterior"
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
                        d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Exterior Features</h2>
                </div>
                <p className="text-gray-800 mb-6">
                  The Nest offers beautiful outdoor spaces for you to enjoy. Relax on the spacious deck with mountain views, perfect for morning coffee or evening drinks. The private hot tub is ideally positioned for soaking while enjoying the alpine scenery. During winter, experience true ski-in/ski-out convenience, while summer offers easy access to hiking and biking trails.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                The Nest - All Photos
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
                        alt={`The Nest ${index + 1}`}
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

export default TheNest;
