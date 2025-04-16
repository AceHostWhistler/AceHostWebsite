import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaBed, FaBath } from "react-icons/fa";
import { X } from "lucide-react";

const PembertonMeadowsRetreat = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/DJI_0202-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/DJI_0195-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/DJI_0096-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_R001526-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ2221-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ2209-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ2206-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ2172-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ2140-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ2119-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ2049-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ2043-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ2027-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1933-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1899-Edit-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1896-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1871-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1855-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1853-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1771-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1759-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1741-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1722-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1651-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1640-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1609-Pano-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1604-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1597-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1577-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1565-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1546-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KRJ1518-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ20678-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ20478-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ20285-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14319-Edit-2.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14205-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14105-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14090-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14032-Edit-2.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14026-Editcopy.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ13990-Edit.jpg",
    "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ13981-Edit.jpg"
  ];

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
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
        <title>Pemberton Escape | 50 Acres | Wellness & Heli Retreat - AceHost</title>
        <meta
          name="description"
          content="Experience luxury in this award-winning 5-bedroom Scandinavian retreat set on 50 private acres with panoramic mountain views. Perfect for wellness retreats, heli-skiing, and private getaways with included chef and butler service."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>10 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>Availability for Heli & Wellness Retreats coming soon</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Pemberton Escape | 50 Acres | Wellness & Heli Retreat
            </h1>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                More Photos
              </button>
              <Link
                href="#details"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium hover:bg-gray-800 text-sm sm:text-base"
              >
                Details
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Pemberton Meadows interior ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 4}
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
              Looking for a remote getaway in a state-of-the-art home?
              <br />
              <br />
              Welcome to Pemberton Meadows Escape. This 5-bed, 5-bath award-winning property was designed with the eye of a leading Japanese architect. At this estate, guests can experience 50 acres of surrounding private land and breathtaking panoramic views of the Pemberton Valley Mountain Range. This home provides total privacy in a tranquil setting – perfect for families or groups seeking luxury living in a peaceful, natural environment. Included in the bookings at Pemberton Meadows, guests can enjoy an enhanced experience with a private chef and butler. Our chefs provide a premium dining experience, using only fresh, locally sourced ingredients from Pemberton Valley farms.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[6]}
                    alt="Pemberton Meadows Interior"
                    fill
                    className="object-cover"
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
                  Pemberton Meadows has modernly furnished rooms, including a grand master bedroom, a bunk room with 4 single beds, and 3 additional bedrooms with King and Queen beds. This elegant property welcomes high-end tasteful furnishings and a sociable open plan living space. The floor to ceiling windows invite ample natural light, creating a welcoming ambience for ultimate relaxation.
                </p>
                <p className="text-gray-800 mb-6">
                  Whether you're lounging by the cozy log fireplace, working out in the on-site gym or taking a soak in the hot tub, you will be spoiled by the 360-degree views of the valley and the surrounding mountains. Looking to get active in the great outdoors of British Columbia? Enjoy outdoor activities right on the doorstep of Pemberton Meadows, with an array of scenic hiking trails and natural hot springs. We are more than happy to direct you to our favorite outdoor activities!
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[15]}
                    alt="Pemberton Meadows Bedroom"
                    fill
                    className="object-cover"
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

                <p className="mb-6">
                  Pemberton Meadows has modernly furnished rooms, including a grand master bedroom, a bunk room with 4 single beds, and 3 additional bedrooms with king and queen beds.
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
                This luxury escape is located near BC's infamous Lillooet River in the peaceful Pemberton Meadows neighborhood. Within walking distance from the front door, this property has a scenic viewpoint capturing the entirety of the Lillooet River – a perfect spot for taking photos.
              </p>
              <p className="text-gray-800 max-w-4xl">
                If you're looking to host a one-of-a-kind event, such as a wellness or heli-retreat, even just a simple change of scenery, Pemberton Meadows Escape provides a harmonious blend of both luxury living and outdoor pursuit.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Pemberton Meadows - All Photos
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
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
                      <Image
                        src={photo}
                        alt={`Pemberton Meadows ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
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
          <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center">
            <div className="absolute top-4 right-4 flex space-x-4">
              <button
                onClick={closeFullScreenPhoto}
                className="text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => navigatePhoto("prev")}
            >
              &larr;
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">
              <div className="relative w-full h-full">
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Pemberton Meadows full view ${selectedPhotoIndex + 1}`}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => navigatePhoto("next")}
            >
              &rarr;
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm">
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

export default PembertonMeadowsRetreat;
