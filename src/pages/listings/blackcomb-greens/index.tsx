import React from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import PropertyDetails from "@/components/PropertyDetails";

import LazyVimeoPlayer from "../../../components/LazyVimeoPlayer";

const BlackcombGreens = () => {
  

  // Property photos
  const photos = [
    "/photos/properties/blackcomb-greens/exterior1.jpg",
    "/photos/properties/blackcomb-greens/living1.jpg",
    "/photos/properties/blackcomb-greens/kitchen1.jpg",
    "/photos/properties/blackcomb-greens/bedroom1.jpg",
    // Add all your photos here
  ];

  

  

  

  

  

  

  

  

  return (
    <>
      <Head>
        <title>Blackcomb Greens Luxury Townhouse - AceHost</title>
        <meta
          name="description"
          content="Experience luxury living in this stunning Blackcomb Greens townhouse. Featuring modern amenities, spectacular mountain views, and easy access to Whistler's attractions."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Blackcomb Greens Luxury Townhouse"
            guests={8}
            bedrooms={3}
            beds={4}
            bathrooms={2.5}
            priceRange="$500-$1,200 per night"
            airbnbLink="https://www.airbnb.com/your-listing-url"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  
                >
                  <Image
                    src={photo}
                    alt={`Blackcomb Greens interior ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
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
                  
                  className="inline-flex items-center px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium"
                >
                  View all {photos.length} photos
                </button>
              </div>
            )}
          </div>

          {/* Property Details */}
          <div id="details" className="max-w-7xl mx-auto px-4 mb-16">
            <PropertyDetails
              guests={8}
              bedrooms={3}
              beds={4}
              bathrooms={2.5}
              priceRange="$500-$1,200 per night"
            />
          </div>
        </main>

        {/* Photo Modal */}
        

        
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

        <Footer />
      </div>
    </>
  );
};

export default BlackcombGreens;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}; 