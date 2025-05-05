import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";


const HoodRiverLuxuryHome = () => {
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/hood-river-luxury-home/View 1.jpg",
    "/photos/properties/hood-river-luxury-home/View 2.jpg",
    "/photos/properties/hood-river-luxury-home/View 3.jpg",
    "/photos/properties/hood-river-luxury-home/View 4.jpg",
    "/photos/properties/hood-river-luxury-home/View 5.jpg",
    "/photos/properties/hood-river-luxury-home/View 6.jpg",
    "/photos/properties/hood-river-luxury-home/View 7.jpg",
    "/photos/properties/hood-river-luxury-home/View 9.jpg",
    "/photos/properties/hood-river-luxury-home/View 10.jpg",
    "/photos/properties/hood-river-luxury-home/Exterior 1.jpg",
    "/photos/properties/hood-river-luxury-home/Exterior 3sv.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 1.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 2.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 3.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 4.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 5.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 6.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 7.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 8.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 9.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 10.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 11.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 12.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 13b.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 14.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 15.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 16.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 17.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 18.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 19.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 20.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 21.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 22.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 23.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 24.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 25.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 26.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 27.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 28.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 29.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 30 - Garage.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 31 - Garage.jpg",
    "/photos/properties/hood-river-luxury-home/Interior 32 - Garage.jpg",
  ];

  

  

  

  // Close full screen view when all photos modal is closed
  

  return (
    <>
      <Head>
        <title>Hood River, US | Water Views - AceHost</title>
        <meta
          name="description"
          content="Beautiful views of Hood River in a Luxurious 4-floor apartment. Perfect location located 1 block away from downtown. Recently renovated with 5 bedrooms for up to 10 guests. Enjoy fresh air with sliding doors and bug screens."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader 
            title="Hood River Luxury Home"
            guests={10}
            bedrooms={4}
            bathrooms={3.5}
            priceRange="$800-$1,200 per night"
          />

          {/* Photo Gallery */}
          <PropertyGallery photos={photos} propertyName="hood river luxury home" />

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Beautiful views of Hood River in a Luxurious 4-floor apartment. Perfect location located 1 block away from downtown. Home is recently renovated and includes 2 bidet toilets. Living room windows are slide doors, which include a bug screen, so you can open them for fresh air. Perfect for a cozy family getaway.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[12]}
                    alt="Hood River Luxury Home Interior"
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
                  Beautiful views of Hood River in a luxurious 4-floor apartment. Perfect location located 1 block away from downtown. Home is recently renovated and includes 2 bidet toilets. Living room windows are slide doors, which include a bug screen, so you can open them for fresh air. Perfect for a cozy family getaway.
                </p>
                <p className="text-gray-800 mb-6">
                  Spanning across 4 floors, this contemporary property boasts 5 bedrooms, sleeping 10 guests with 7 comfortable beds and 2.5 bathrooms. The living room has sliding doors that let you enjoy the fresh air and stunning views of downtown/the Columbia River. amazing patio. This house is ideal for a family or group getaway, looking for a luxurious experience.
                </p>
                <p className="text-gray-800">
                  Enjoy comfort and modernity in this recently renovated home featuring new luxury furniture. The open-concept living and dining area boasts floor-to-ceiling windows, flooding the room with natural light. The living room includes sliding patio doors that not only provide natural light and beautiful views but also feature bug screens, allowing you to enjoy the fresh air while keeping bugs out.
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
                Hood River, Oregon, United States. It's a very prestigious neighborhood. Walls are soundproof so inside is very quiet. For getting around you can walk straight into downtown without a vehicle. "The event site" is just a 2-3 minute drive.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        

        
              <div className="relative w-full h-full">
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Property full view ${1}`}
                  fill
                  priority
                  className={`object-contain transition-opacity duration-300 true ? "opacity-100" : "opacity-0"`}
                  sizes="100vw"
                  onLoadingComplete={() => setIsImageLoading(false)}
                  quality={85}
                  loading="eager"
                />
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
              
              aria-label="Next photo"
            >
              &rarr;
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center z-20">
              <p className="text-white text-sm bg-black bg-opacity-50 inline-block px-4 py-2 rounded-full">
                {1} / {photos.length}
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

export default HoodRiverLuxuryHome;
