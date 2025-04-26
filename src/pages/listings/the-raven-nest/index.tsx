import React, { useState, useRef } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const RavensNest = () => {
  const photosRef = useRef<HTMLDivElement>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const photos = [
    "/photos/properties/ravens-nest/1.jpg",
    "/photos/properties/ravens-nest/2.jpg",
    "/photos/properties/ravens-nest/3.jpg",
    "/photos/properties/ravens-nest/4.jpg",
    "/photos/properties/ravens-nest/5.jpg",
    "/photos/properties/ravens-nest/6.jpg",
    "/photos/properties/ravens-nest/7.jpg",
    "/photos/properties/ravens-nest/8.jpg",
    "/photos/properties/ravens-nest/9.jpg",
  ];

  const scrollToPhotos = () => {
    photosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Raven's Nest | Ski-in/Ski-out with Views | AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Raven's Nest in Whistler. Ski-in/ski-out convenience with stunning mountain views. Perfect for your Whistler getaway. Book now!"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Raven's Nest | Ski-in/Ski-out with Views
              </h1>
              <p className="text-gray-600 mb-6">
                Prime Whistler location with breathtaking mountain views
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="https://www.airbnb.com/luxury/listing/12345"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800"
                >
                  Book on Airbnb
                </Link>
                <button
                  onClick={scrollToPhotos}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                >
                  View Photos
                </button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={photos[0]}
                alt="Raven's Nest Main View"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About this property
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome to Raven's Nest, a luxurious ski-in/ski-out property
              offering breathtaking mountain views. This stunning home features
              spacious living areas, modern amenities, and direct access to
              Whistler's world-class ski slopes.
            </p>
            <p className="text-gray-600 mb-4">
              Perfect for families or groups, Raven's Nest provides the
              ideal setting for your Whistler getaway with its convenient
              location and comfortable accommodations.
            </p>
          </div>

          <div ref={photosRef}>
            <PropertyGallery 
              photos={photos}
              propertyName="Raven's Nest"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              <li className="flex items-center py-2">
                <span className="text-gray-700">Ski-in/Ski-out Access</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Mountain Views</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Hot Tub</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Fully Equipped Kitchen</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Fireplace</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Free Wi-Fi</span>
              </li>
            </ul>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RavensNest;
