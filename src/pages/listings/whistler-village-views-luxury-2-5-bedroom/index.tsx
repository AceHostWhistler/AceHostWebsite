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

const WhistlerVillageViews = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-2.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-3.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-4.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-5.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-6.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-7.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-8.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-9.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-10.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-11.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-12.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-13.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-14.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-15.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-16.jpg",
    "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-17.jpg",
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
        <title>Whistler Village Views | Luxury 2.5 Bedroom - AceHost</title>
        <meta
          name="description"
          content="Experience luxury in the heart of Whistler Village. This 2.5 bedroom property offers stunning views of Olympic Plaza and Blackcomb Mountain, with a spacious layout and all comforts of home."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>6 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $400-$1,150+</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Whistler Village Views | Heart of Whistler Village | Luxury 2.5 Bedroom
            </h1>

            {/* Pricing Information */}
            <div className="flex flex-col items-center mb-8 space-y-2">
              <div className="bg-gray-100 rounded-lg px-6 py-4 max-w-2xl w-full">
                <div className="space-y-2">
                  <p className="text-gray-800 text-center font-medium">
                    Nightly Price Range: $400-$1,150+
                  </p>
                </div>
              </div>
            </div>

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
              <a
                href="https://www.airbnb.ca/rooms/50025973?preview_for_ml=true&source_impression_id=p3_1699290307_SHcNx7EoXySmn6j5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
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
                    alt={`Whistler Village Views interior ${index + 1}`}
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
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[3]}
                    alt="Whistler Village Views Interior"
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
                    src={photos[4]}
                    alt="Whistler Village Views Bedroom"
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
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Whistler Village Views - All Photos
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
                        alt={`Whistler Village Views ${index + 1}`}
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
                  alt={`Whistler Village Views full view ${selectedPhotoIndex + 1}`}
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

export default WhistlerVillageViews;
