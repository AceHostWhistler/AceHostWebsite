import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { FaBed, FaBath } from "react-icons/fa";
import { X } from "lucide-react";

const GolfCourseViews = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  // Featured photos - optimized for initial load
  const featuredPhotos = [
    "/photos/properties/Muirfield Golf Course/10 - 20250820 A7M4 01 A1_00222.jpg",
    "/photos/properties/Muirfield Golf Course/03 - 20250820 A7M4 01 A1_00186.jpg",
    "/photos/properties/Muirfield Golf Course/05 - 20250820 A7M4 01 A1_00202.jpg",
    "/photos/properties/Muirfield Golf Course/01 - 20250820 A7M4 01 A1_00497-Edit.jpg",
    "/photos/properties/Muirfield Golf Course/02 - 20250820 A7M4 01 A1_00179.jpg",
    "/photos/properties/Muirfield Golf Course/04 - 20250820 A7M4 01 A1_00192.jpg",
    "/photos/properties/Muirfield Golf Course/06 - 20250820 A7M4 01 A1_00209.jpg",
    "/photos/properties/Muirfield Golf Course/07 - 20250820 A7M4 01 A1_00138.jpg",
    "/photos/properties/Muirfield Golf Course/08 - 20250820 A7M4 01 A1_00171.jpg",
    "/photos/properties/Muirfield Golf Course/09 - 20250820 A7M4 01 A1_00217.jpg",
    "/photos/properties/Muirfield Golf Course/11 - 20250820 A7M4 01 A1_00232.jpg",
    "/photos/properties/Muirfield Golf Course/12 - 20250820 A7M4 01 A1_00088.jpg",
  ];
  
  // All property photos - loaded on demand
  const allPhotos = [
    ...featuredPhotos,
    "/photos/properties/Muirfield Golf Course/13 - 20250820 A7M4 01 A1_00096.jpg",
    "/photos/properties/Muirfield Golf Course/14 - 20250820 A7M4 01 A1_00103.jpg",
    "/photos/properties/Muirfield Golf Course/15 - 20250820 A7M4 01 A1_00110.jpg",
    "/photos/properties/Muirfield Golf Course/16 - 20250820 A7M4 01 A1_00121.jpg",
    "/photos/properties/Muirfield Golf Course/17 - 20250820 A7M4 01 A1_00131-Edit.jpg",
    "/photos/properties/Muirfield Golf Course/18 - 20250820 A7M4 01 A1_00297.jpg",
    "/photos/properties/Muirfield Golf Course/19 - 20250820 A7M4 01 A1_00309.jpg",
    "/photos/properties/Muirfield Golf Course/20 - 20250820 A7M4 01 A1_00056.jpg",
    "/photos/properties/Muirfield Golf Course/21 - 20250820 A7M4 01 A1_00063.jpg",
    "/photos/properties/Muirfield Golf Course/22 - 20250820 A7M4 01 A1_00071.jpg",
    "/photos/properties/Muirfield Golf Course/23 - 20250820 A7M4 01 A1_00077.jpg",
    "/photos/properties/Muirfield Golf Course/24 - 20250820 A7M4 01 A1_00329.jpg",
    "/photos/properties/Muirfield Golf Course/25 - 20250820 A7M4 01 A1_00336.jpg",
    "/photos/properties/Muirfield Golf Course/26 - 20250820 A7M4 01 A1_00343.jpg",
    "/photos/properties/Muirfield Golf Course/27 - 20250820 A7M4 01 A1_00350.jpg",
    "/photos/properties/Muirfield Golf Course/28 - 20250820 A7M4 01 A1_00359.jpg",
    "/photos/properties/Muirfield Golf Course/29 - 20250820 A7M4 01 A1_00383.jpg",
    "/photos/properties/Muirfield Golf Course/30 - 20250820 A7M4 01 A1_00389.jpg",
    "/photos/properties/Muirfield Golf Course/31 - 20250820 A7M4 01 A1_00395.jpg",
    "/photos/properties/Muirfield Golf Course/32 - 20250820 A7M4 01 A1_00402.jpg",
    "/photos/properties/Muirfield Golf Course/33 - 20250820 A7M4 01 A1_00409.jpg",
    "/photos/properties/Muirfield Golf Course/34 - 20250820 A7M4 01 A1_00415.jpg",
    "/photos/properties/Muirfield Golf Course/35 - 20250820 A7M4 01 A1_00421.jpg",
    "/photos/properties/Muirfield Golf Course/36 - 20250820 A7M4 01 A1_00428.jpg",
    "/photos/properties/Muirfield Golf Course/37 - 20250820 A7M4 01 A1_00434.jpg",
    "/photos/properties/Muirfield Golf Course/38 - 20250820 A7M4 01 A1_00443.jpg",
    "/photos/properties/Muirfield Golf Course/39 - 20250820 A7M4 01 A1_00448.jpg",
    "/photos/properties/Muirfield Golf Course/40 - 20250820 A7M4 01 A1_00454.jpg",
    "/photos/properties/Muirfield Golf Course/41 - 20250820 A7M4 01 A1_00461.jpg",
    "/photos/properties/Muirfield Golf Course/42 - 20250820 A7M4 01 A1_00468.jpg",
    "/photos/properties/Muirfield Golf Course/43 - 20250820 MM4P 01 0011.jpg",
    "/photos/properties/Muirfield Golf Course/44 - 20250820 MM4P 01 0016.jpg",
    "/photos/properties/Muirfield Golf Course/45 - 20250820 A7M4 01 A1_00521.jpg",
  ];
  
  // Use featuredPhotos for initial display, allPhotos for the full gallery
  const photos = featuredPhotos;

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;

    setIsImageLoading(true);
    
    // Use the correct photo array based on which view is active
    const currentPhotos = showAllPhotos ? allPhotos : photos;
    const totalPhotos = currentPhotos.length;

    if (direction === "prev") {
      setSelectedPhotoIndex(
        selectedPhotoIndex === 0 ? totalPhotos - 1 : selectedPhotoIndex - 1
      );
    } else {
      setSelectedPhotoIndex(
        selectedPhotoIndex === totalPhotos - 1 ? 0 : selectedPhotoIndex + 1
      );
    }
  };

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>Golf Course Views | Luxury 4-bed Whistler Village - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Golf Course Views in Whistler. This cozy standalone chalet sits right on Nicklaus North Golf Course with stunning views of Hole 14, featuring a private hot tub, media room, wood-burning fireplace, and chef's kitchen."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Golf Course Views | Luxury 4-bed Whistler Village"
            guests={9}
            bedrooms={4}
            bathrooms={3.5}
            priceRange="$750-1500 per night Summer"
            winterPrice="$1200-2000 Nightly | Winter"
            holidayPrice="$3500-5000 Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1493522257280258231?guests=1&adults=1&s=67&unique_share_id=d98beea7-9f12-4195-8af6-52e4aa1a94cd"
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
                    alt={`Golf Course Views interior ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 2}
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="inline-flex items-center px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium"
              >
                View all {allPhotos.length} photos
              </button>
            </div>
          </div>

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              This cozy, standalone chalet sits right on Nicklaus North Golf Course with stunning views of Hole 14. Enjoy a private hot tub, media room, wood-burning fireplace, and chef's kitchen. Just a short drive to Whistler Village and the ski lifts, plus being north of the village helps you skip the city traffic after skiing.
              <br />
              <br />
              Ideal for family getaways, golf retreats, and groups looking to explore the main Whistler village. Lots of parking for 5-6 vehicles.
              <br />
              <br />
              Wi-Fi and new heating/cooling included.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="Golf Course Views Interior"
                    fill
                    className="object-cover rounded-lg"
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
                  Tucked into one of Whistler's most desirable year-round locations, this warm and welcoming chalet sits directly on the 14th hole of the iconic Nicklaus North Golf Course. In summer, enjoy lush green views from your private backyard, watch golfers play through, sip your morning coffee in the sun, or fire up the grill for an evening BBQ with the mountains as your backdrop. It's the perfect setting for a relaxed, scenic escape.
                </p>
                <p className="text-gray-800 mb-6">
                  Inside, the home blends natural wood and stone textures with modern comforts. The open-concept layout includes a cozy living area with a wood-burning fireplace, a spacious dining table for 10, a breakfast nook, and a fully equipped chef's kitchen. A separate media room makes movie nights easy and fun for the whole group.
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <FaBed className="text-gray-600 mr-2" size={20} />
                    <span className="text-gray-800">4 Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="text-gray-600 mr-2" size={20} />
                    <span className="text-gray-800">3.5 Bathrooms</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Bedroom Layout:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bedroom 1 (primary): king bed + TV with tub and shower (separate)</li>
                    <li>Bedroom 2: king bed + ensuite with tub-shower</li>
                    <li>Bedroom 3: 2 single beds</li>
                    <li>Bedroom 4: 1 single bed + TV</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <p className="text-gray-800">
                In winter, you're just a quick 7-9-minute drive to the heart of Whistler Village and the ski lifts. Staying north of the village means you can avoid the Vancouver city day trip traffic congestion, making your ski days a lot more convenient.
              </p>
              <p className="text-gray-800 mt-4">
                There's parking for 5–6 cars in the driveway (garage fits 1, but with limited access). Whether it's a summer golf getaway or a winter ski holiday, this home offers unbeatable comfort, views, and convenience in all seasons.
              </p>
            </div>

            {/* Registration Details */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">Registration Details</h2>
              <p className="text-gray-800">
                Municipal registration number: 00015211<br />
                Provincial registration number: PM264215843
              </p>
            </div>
          </div>

          {/* Photos Modal - Show all photos */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white text-xl font-medium">
                  Golf Course Views - {allPhotos.length} photos
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
                  {allPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] relative cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Golf Course Views photo ${index + 1}`}
                        fill
                        className="object-cover"
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
            <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center">
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
                    src={showAllPhotos ? allPhotos[selectedPhotoIndex] : photos[selectedPhotoIndex]}
                    alt={`Property full view ${selectedPhotoIndex + 1}`}
                    fill
                    className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                    sizes="100vw"
                    onLoadingComplete={() => {
                      setIsImageLoading(false);
                    }}
                    quality={85}
                    priority
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
                  {selectedPhotoIndex + 1} / {showAllPhotos ? allPhotos.length : photos.length}
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

export default GolfCourseViews;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};