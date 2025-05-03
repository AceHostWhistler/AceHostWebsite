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
import LazyVimeoPlayer from "../../../components/LazyVimeoPlayer";

const ChaletLaForja = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Chalet La Forja/hero00001.jpg",
    "/photos/properties/Chalet La Forja/hero00002.jpg",
    "/photos/properties/Chalet La Forja/02-2950 Heritage Peaks Trail-02.jpg",
    "/photos/properties/Chalet La Forja/03-2950 Heritage Peaks Trail-03.jpg",
    "/photos/properties/Chalet La Forja/04-2950 Heritage Peaks Trail-04.jpg",
    "/photos/properties/Chalet La Forja/05-2950 Heritage Peaks Trail-05.jpg",
    "/photos/properties/Chalet La Forja/07-2950 Heritage Peaks Trail-07.jpg",
    "/photos/properties/Chalet La Forja/08-2950 Heritage Peaks Trail-08.jpg",
    "/photos/properties/Chalet La Forja/09-2950 Heritage Peaks Trail-09.jpg",
    "/photos/properties/Chalet La Forja/10-2950 Heritage Peaks Trail-10.jpg",
    "/photos/properties/Chalet La Forja/11-2950 Heritage Peaks Trail-11.jpg",
    "/photos/properties/Chalet La Forja/12-2950 Heritage Peaks Trail-12.jpg",
    "/photos/properties/Chalet La Forja/13-2950 Heritage Peaks Trail-13.jpg",
    "/photos/properties/Chalet La Forja/14-2950 Heritage Peaks Trail-14.jpg",
    "/photos/properties/Chalet La Forja/15-2950 Heritage Peaks Trail-15.jpg",
    "/photos/properties/Chalet La Forja/16-2950 Heritage Peaks Trail-16.jpg",
    "/photos/properties/Chalet La Forja/17-2950 Heritage Peaks Trail-17.jpg",
    "/photos/properties/Chalet La Forja/19-2950 Heritage Peaks Trail-19.jpg",
    "/photos/properties/Chalet La Forja/20-2950 Heritage Peaks Trail-20.jpg",
    "/photos/properties/Chalet La Forja/22-2950 Heritage Peaks Trail-22.jpg",
    "/photos/properties/Chalet La Forja/24-2950 Heritage Peaks Trail-24.jpg",
    "/photos/properties/Chalet La Forja/25-2950 Heritage Peaks Trail-25.jpg",
    "/photos/properties/Chalet La Forja/26-2950 Heritage Peaks Trail-26.jpg",
    "/photos/properties/Chalet La Forja/27-2950 Heritage Peaks Trail-27.jpg",
    "/photos/properties/Chalet La Forja/28-2950 Heritage Peaks Trail-28.jpg",
    "/photos/properties/Chalet La Forja/29-2950 Heritage Peaks Trail-29.jpg",
    "/photos/properties/Chalet La Forja/30-2950 Heritage Peaks Trail-30.jpg",
    "/photos/properties/Chalet La Forja/31-2950 Heritage Peaks Trail-31.jpg",
    "/photos/properties/Chalet La Forja/32-2950 Heritage Peaks Trail-32.jpg",
    "/photos/properties/Chalet La Forja/33-2950 Heritage Peaks Trail-33.jpg",
    "/photos/properties/Chalet La Forja/34-2950 Heritage Peaks Trail-34.jpg",
    "/photos/properties/Chalet La Forja/2950 Heritage Peaks Trail 4 Large.png",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb01.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb22.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb23.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb29.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb30.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb32.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb33.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb45.jpg",
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

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>Chalet La Forja | Kadenwood | Private Butler - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Chalet La Forja in Kadenwood. This ski-in/ski-out property features 7.5 bedrooms, private butler service, and stunning mountain views."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Chalet La Forja | Kadenwood | Private Butler"
            guests={12}
            bedrooms={7.5}
            beds={15}
            bathrooms={8}
            priceRange="$7,000-11,000+ per night"
            airbnbLink="https://www.airbnb.ca/rooms/52655503?guests=1&adults=1&s=67&unique_share_id=f1bb5c2c-51f9-4a82-9aa4-670fb8caa71d"
          />

          {/* Featured Video */}
          <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
            <LazyVimeoPlayer 
              videoId="922794848"
              title="Chalet La Forja Property Walkthrough"
              aspectRatio="video"
              className="rounded-lg shadow-lg"
              autoplay={false}
            />
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Chalet La Forja interior ${index + 1}`}
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
              Luxury Ski-In/Out | Pool | Hot tub | Gym | Gondola; Welcome to
              Chalet La Forja in Kadenwood. This 10,000+ square foot home
              amongst the locals is considered one of, if not the most
              prestigious luxury rental in all of Whistler. Perfect for 1 or 2
              families seeking their own bedrooms.
              <br />
              <br />
              Ranked one of VRBO's Top 10 vacation rentals in 2023.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[6]}
                    alt="Chalet La Forja Interior"
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
                  This luxurious home includes a gourmet chefs kitchen with a
                  butlers pantry, two private offices, state of the art
                  electronics with built in Sonos speaker systems in every room,
                  gym, hot-tub, heated pool, steam shower, private gondola, and
                  access to and from the ski-hill from your front door. Full 7
                  bedroom home, with an additional single bed in a smaller
                  private room with a window.
                </p>
                <p className="text-gray-800 mb-6">
                  <span className="font-bold">Private Butler:</span> In addition
                  to serving breakfast, lunch, and dinner, the butler is
                  responsible for all food and drink service throughout the day.
                  To create the perfect ambiance, they will set up the hot tub,
                  light the fire, and adjust the music and household functions.
                  Get your daily dose of caffeine from your own personal
                  barista. Overall, the butler is there to make your stay as
                  smooth and comfortable as possible.
                </p>
                <p className="text-gray-800 mb-6">
                  Complimentary housekeeping included every other day.
                </p>
                <p className="text-gray-800">
                  Included when booking this property, we will help you with all
                  your VIP experiences such as coordinating chefs, chalet
                  hosts/servers, helicopter experiences, transportation to and
                  from airport, snowmobiling, restaurant reservations and
                  recommendations, hiking recommendations, and more.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[15]}
                    alt="Chalet La Forja Bedroom"
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
                  <span className="font-medium">Bedroom 1-</span> Master bedroom
                  with a beautiful king bed with an ensuite shower and bathtub
                  as well as a private patio with 2 day lounge beds.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2-</span> Second master
                  bedroom situated next to the master. It has a king bed with an
                  ensuite bathroom that has a shower and bath with private patio
                  access.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 3-</span> Located at the
                  end of the corridor the room has a king bed, an ensuite
                  bathroom that has a shower and bath and private patio access.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 4-</span> Very large
                  room with a king bed, ensuite bathroom with a shower and is
                  located next to bedroom 3.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 7-</span> This hybrid
                  office space has a twin bed, large window and connects to
                  bedroom 2. It has its own private entrance leading from the
                  hallway and shares a bathroom with bedroom 2.
                </p>

                <p className="font-bold mb-2">MID LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 5-</span> Located on its
                  own level this bunk bed room has 6 queen beds with a spacious
                  ensuite bathroom that has a shower and a bath.
                </p>

                <p className="font-bold mb-2">LOWER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 6-</span> Has a king bed
                  and 2 twins and is tucked away down on the lower level for
                  ultimate privacy with an ensuite bathroom and shower. Enjoy
                  private access to the pool, hot tub and backyard.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 8-</span> Has a king bed
                  and is connected with bedroom 6 (walk through bedroom 6 to
                  exit the rooms into the rec room) They share the same
                  bathroom. Option for one of these rooms to use the large
                  shower with a steam function located in the rec room just off
                  these bedrooms.
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
                The Kadenwood neighbourhood is perched on the south side of
                Whistler Mountain, high above Whistler Creekside and is easily
                accessible by road or 5 minutes by private gondola from the base
                of Creekside. Kadenwood provides easy access to ski-in/ski-out
                trails on the edge of an old-growth forest and offers astounding
                Coastal Range views.
              </p>
              <p className="text-gray-800 max-w-4xl">
                Take the 5-minute gondola ride, a 5-minute drive, or a quick ski
                ride down will bring you to all the amenities in Creekside
                Village. Take advantage of some of Whistler's best
                restaurants and shops. Enjoy quality coffee and delicious breads
                and pastries at Rockit Coffee and Bred. Red Door Bistro, Rimrock
                Cafe, Cure Lounge (my favorite), Creekbread, and Dusty's.
                Enjoy Creekside's newest restaurant Mekong, this
                fine-dining Thai restaurant and gorgeous patio is a local
                favorite. Tuck into delicious authentic food and imaginative
                cocktails. Shop at 122 West for beautiful home decor and
                Abigail's for stylish clothing. The Cop-Op gas station in
                Creekside has a convenience store and is open until 10 pm. For
                groceries, the Creekside Market is also within walking distance.
                Included when booking this property, we will help you with all
                your VIP experiences such as coordinating chefs, chalet
                hosts/servers, helicopter experiences, transportation to and
                from the airport, snowmobiling, restaurant reservations and
                recommendations, hiking recommendations, and more.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Chalet La Forja - All Photos
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
                <LazyVimeoPlayer 
                  videoId="922794848"
                  title="Chalet La Forja Property Walkthrough"
                  aspectRatio="video"
                  className="w-full h-full"
                  autoplay={false}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Chalet La Forja ${index + 1}`}
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

        {/* Full Screen Photo View */}
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

export default ChaletLaForja;
