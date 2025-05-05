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

import { FaBed, FaBath } from "react-icons/fa";

const MarquiseSkiInSkiOut = () => {
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos - adjust paths when photos are available
  const photos = [
    "/photos/properties/Marquise 2-bed/Marquise-1.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-2.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-3.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-4.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-5.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-6.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-7.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-8.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-9.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-10.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-11.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-12.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-13.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-14.jpg",
    "/photos/properties/Marquise 2-bed/Marquise-15.jpg",
  ];

  

  

  

  

  

  

  

  // Close full screen view when all photos modal is closed
  

  return (
    <>
      <Head>
        <title>Marquise 2-Bed Ski-in Ski-out - AceHost</title>
        <meta
          name="description"
          content="Experience luxury & prime location at this ski-in/ski-out condo in the Marquise. Located on the main floor with brand-new Puffy Royal King bed, Queen pull-out couch, and access to gym, hot tub, and heated pool."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Marquise 2-Bed Ski-in Ski-out"
            guests={4}
            bedrooms={1}
            beds={2}
            bathrooms={1}
            priceRange="Nightly Price Range: $160-$450"
            airbnbLink="https://www.airbnb.ca/rooms/1370367404602078616?guests=1&adults=1&s=67&unique_share_id=eb381b39-e67d-44ea-9d7c-2de2e1b5fa20"
          />

          {/* Photo Gallery */}
          <PropertyGallery photos={photos} propertyName="marquise 2 bed ski in ski out" />

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Experience luxury & prime location at this ski-in/ski-out condo in
              the Marquise. Located on the main floor, this retreat features a
              brand-new Puffy Royal King bed, a Queen pull-out couch, a bidet
              toilet, and ski storage for easy gear access. Enjoy the gym, hot
              tub, and heated pool after a day on the slopes. In winter, ski
              right to Blackcomb gondola and back from your front door, and in
              summer, walk to the village in under 15 minutes to explore
              Whistler's best restaurants in the main Village.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[0]}
                    alt="Marquise Ski-in Ski-out Interior"
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
                  Welcome to your luxury ski-in/ski-out retreat at the Marquise,
                  offering unbeatable access to Whistler's world-class
                  slopes and vibrant village life. Whether you're here to
                  ski fresh powder in winter or hike and bike through scenic
                  trails in summer, this condo provides the perfect blend of
                  comfort and convenience.
                </p>
                <p className="text-gray-800 mb-6">
                  <span className="font-medium">Bedroom Layout</span>
                  <br />
                  ✔ Master Suite: Sleep in absolute comfort on a brand-new Puffy
                  Royal King mattress, designed for an exceptional night's
                  rest.
                  <br />
                  <br />
                  ✔ Living Room (Second Bedroom by Night): A Queen pull-out
                  couch easily converts the living space into a second bedroom
                  for extra guests.
                  <br />
                  <br />
                  ✔ Luxury Comfort: A bidet toilet in the bathroom adds a touch
                  of spa-like relaxation.
                  <br />
                  <br />✔ Ski Storage: Secure in-unit ski storage lets you keep
                  gear out of your living space.
                </p>
                <p className="text-gray-800">
                  ✔ Year-Round Amenities: Unwind in the heated outdoor pool, hot
                  tub, and gym after a day of adventure.
                  <br />
                  <br />
                  ✔ Perfect Location: Ski directly to Blackcomb in winter, or
                  enjoy a scenic 15-minute walk to Whistler Village in summer,
                  with easy access to top dining, shopping, and outdoor
                  activities.
                  <br />
                  <br />
                  ✔ Convenient Parking: Plenty of paid parking is available in
                  the building for easy access.
                  <br />
                  <br />
                  With top-tier amenities and an unbeatable location, this condo
                  is ideal for couples, families, and friends looking for a
                  high-end Whistler experience in any season.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery Modal */}
          

          
                <div className="relative w-full h-full">
                  <Image
                    src={photos[selectedPhotoIndex]}
                    alt={`Property full view ${1}`}
                    fill
                    priority
                    className={`object-contain transition-opacity duration-300 true ? "opacity-100" : "opacity-0"`}
                    sizes="100vw"
                    
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
        </main>

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

export default MarquiseSkiInSkiOut;
