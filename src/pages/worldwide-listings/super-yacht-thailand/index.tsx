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


const SuperYachtThailand = () => {
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-2.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-5.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-8.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bow WEB-9.jpg",
    "/photos/properties/Yacht Thailand Sea D/Bridge WEB-2.jpg",
    "/photos/properties/Yacht Thailand Sea D/Corridor WEB-2.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-5.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-8.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-11.jpg",
    "/photos/properties/Yacht Thailand Sea D/Dining Area WEB-14.jpg",
    "/photos/properties/Yacht Thailand Sea D/Double Bedroom WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Double Bedroom WEB-6.jpg",
    "/photos/properties/Yacht Thailand Sea D/Galry WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Galry WEB-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Gym WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-4.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-8.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-9.jpg",
    "/photos/properties/Yacht Thailand Sea D/Main Salon WEB-12.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-4.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-6.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-8.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-10.jpg",
    "/photos/properties/Yacht Thailand Sea D/Master Bedroom WEB-11.jpg",
    "/photos/properties/Yacht Thailand Sea D/Sun Deck WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/Sun Deck WEB-12.jpg",
    "/photos/properties/Yacht Thailand Sea D/TV Room WEB-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/TV Room WEB-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Twin  Bedroom WEB-4.jpg",
    "/photos/properties/Yacht Thailand Sea D/Twin  Bedroom WEB-5.jpg",
    "/photos/properties/Yacht Thailand Sea D/Twin  Bedroom WEB-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/VIP  Bedroom-1.jpg",
    "/photos/properties/Yacht Thailand Sea D/VIP  Bedroom-6.jpg",
    "/photos/properties/Yacht Thailand Sea D/VIP  Bedroom-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/VIP  Bedroom-9.jpg",
    "/photos/properties/Yacht Thailand Sea D/Yacht_Sead_VIP Bedroom-3.jpg",
    "/photos/properties/Yacht Thailand Sea D/Yacht_Sead_VIP Bedroom-5.jpg",
    "/photos/properties/Yacht Thailand Sea D/Yacht_Sead_VIP Bedroom-7.jpg",
    "/photos/properties/Yacht Thailand Sea D/Yacht_Sead_VIP Bedroom-9.jpg",
  ];

  

  

  

  // Close full screen view when all photos modal is closed
  

  return (
    <>
      <Head>
        <title>Super Yacht | Thailand / SE Asia - AceHost</title>
        <meta
          name="description"
          content="Experience luxury aboard the 130-ft Super Yacht in Thailand. This beautifully appointed motor yacht offers a VIP experience with an 8-member crew, wake boats, water activities, and 5-star service."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader 
            title="Super Yacht | Thailand / SE Asia"
            guests={10}
            bedrooms={5}
            bathrooms={5}
            priceRange="$11,000-$13,000 per night"
          />

          {/* Photo Gallery */}
          <PropertyGallery photos={photos} propertyName="super yacht thailand" />

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              The 130-ft beautifully appointed luxury Motor Yacht Sea D offers a
              VIP experience in the waters of Phuket. Engineered in Italy, Motor
              Yacht Sea D provides all-inclusive hospitality for 10 guests,
              assuring luxurious comfort and entertainment. With an expansive
              interior and exterior space, this superyacht welcomes guests with
              an 8-member crew, professionally trained to deliver a 5-star
              charter experience.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[0]}
                    alt="Super Yacht Thailand - Bow"
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
                  The ultimate luxury experience awaits you aboard this 130-ft
                  Super Yacht, a stunning vessel that includes two wake speed
                  boats. Crafted in Italy, this superyacht for up to 10 guests
                  offers an exclusive VIP experience, while offering numerous
                  options to keep active daily.
                </p>
                <p className="text-gray-800 mb-6">
                  Wake up at your own time to a meal of your choice and coffee
                  made by our best chefs on board. With its expansive interior
                  and exterior space, a professional 8-member crew dedicated to
                  delivering a 5-star service, a luxurious master state room, a
                  VIP state room, and 3 guest state rooms. The yacht also
                  includes a fully equipped gym, tranquil massage room, and two
                  large dining tables indoor and outdoor.
                </p>
                <p className="text-gray-800">
                  Activities onboard: There are plenty activities on board. The
                  boat offers wake-surfing with the choice of 2 wake boats and
                  boat drivers, 3 e-foils, fishing, kayaks, paddle boards,
                  etc... Explore the surroundings with our stand-up paddle
                  boards and double kayaks, or dive into the crystal-clear
                  waters with our snorkeling and scuba diving equipment. With
                  more options such as bottom fishing and spearfishing,
                  exploring nearby islands and discover hidden gems during our
                  island-hopping excursions, your time on board will be full of
                  pursuits if you choose to keep busy.
                </p>
              </div>
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

export default SuperYachtThailand;
