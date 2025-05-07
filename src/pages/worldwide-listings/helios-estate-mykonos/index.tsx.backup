import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import PropertyHeader from "@/components/PropertyHeader";

const HeliosEstateMykonos = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (1).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (10).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (11).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (12).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (13).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (14).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (15).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (16).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (17).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (18).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (19).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (20).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (21).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (22).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (23).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (24).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (25).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (26).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (27).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (28).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (29).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (30).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (31).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (32).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (39).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (40).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (41).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (42).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (43).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (44).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (45).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (46).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (47).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (48).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (49).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (50).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (51).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (52).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (53).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (54).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (55).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (56).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (57).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (58).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (59).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (60).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (61).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (62).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (63).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (64).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (65).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (66).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (67).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (68).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (69).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (7).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (70).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (71).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (73).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (74).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (75).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (76).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (77).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (78).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (8).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (80).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (81).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (82).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (83).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (84).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (85).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (86).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (87).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (9).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (90).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (91).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (92).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (93).jpg",
    "/photos/properties/Helios Estate - Mykonos/HELIOS ESTATE MYKONOS (94).jpg",
    "/photos/properties/Helios Estate - Mykonos/01.jpg",
    "/photos/properties/Helios Estate - Mykonos/02.jpg",
    "/photos/properties/Helios Estate - Mykonos/03.jpg",
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(false);
    setSelectedPhotoIndex(index);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
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
        <title>Helios Estate | Mykonos, Greece - AceHost</title>
        <meta
          name="description"
          content="Experience unparalleled luxury at Helios Estate in Mykonos, Greece. This exclusive 8-bedroom private estate offers breathtaking sea views, two swimming pools, and world-class amenities for the ultimate Greek island getaway."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <PropertyHeader
            title="Helios Estate | Mykonos, Greece"
            guests={16}
            bedrooms={8}
            bathrooms={9}
            priceRange="€15,000-€26,000 per night"
            contactLink="/contact"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 28).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Helios Estate Mykonos ${index + 1}`}
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
            {photos.length > 28 && (
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
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8" id="details">
            <p className="text-gray-800 mb-16 max-w-3xl mx-auto leading-relaxed text-lg">
              Helios Estate is a magnificent luxury property perched on a hillside in one of Mykonos' most exclusive areas. With 8 luxurious bedrooms, 9 bathrooms, two swimming pools, expansive outdoor living spaces, and breathtaking panoramic views of the Aegean Sea, this exceptional estate offers an unparalleled retreat for the most discerning travelers seeking privacy, luxury, and the ultimate Mykonos experience.
            </p>
          </div>

          {/* Accommodation Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[2]}
                    alt="Helios Estate Mykonos - Luxury Accommodation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
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
                  <h2 className="text-2xl font-bold">Luxury Accommodation</h2>
                </div>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-gray-800">
                    Helios Estate features 8 opulent bedroom suites, each meticulously designed with premium furnishings and luxurious amenities. The master suites boast king-size beds, private terraces with stunning sea views, walk-in closets, and lavish en-suite bathrooms with high-end fixtures and jetted tubs.
                  </p>
                  <p className="text-gray-800">
                    The estate comprises two connected luxury villas, providing ample space for large families or groups of friends seeking both togetherness and privacy. Each bedroom is thoughtfully appointed with fine linens, plush bedding, and individual climate control for personalized comfort.
                  </p>
                  <p className="text-gray-800">
                    All bedrooms feature en-suite bathrooms finished with premium marble, designer fixtures, and luxury bath products. Most suites include private outdoor spaces, allowing guests to wake up to the enchanting Aegean views and gentle Mediterranean breezes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Living Spaces Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24 bg-gray-50 py-12 rounded-xl">
            <div className="flex flex-col md:flex-row gap-12">
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
                      <path d="M3.05 13.05C2.75 12.74 2.75 12.26 3.05 11.95L8.65 6.35C8.95 6.05 9.43 6.05 9.74 6.35L12.34 8.95C12.64 9.26 12.64 9.74 12.34 10.04L6.74 15.64C6.43 15.95 5.95 15.95 5.65 15.64L3.05 13.05ZM3.05 20.05C2.75 19.74 2.75 19.26 3.05 18.95L14.05 7.95C14.36 7.64 14.84 7.64 15.14 7.95L17.74 10.55C18.05 10.85 18.05 11.33 17.74 11.64L6.74 22.64C6.43 22.95 5.95 22.95 5.65 22.64L3.05 20.05ZM10.05 6.05C9.75 5.74 9.75 5.26 10.05 4.95L12.65 2.35C12.96 2.05 13.44 2.05 13.74 2.35L16.34 4.95C16.65 5.26 16.65 5.74 16.34 6.04L13.74 8.64C13.43 8.95 12.95 8.95 12.65 8.64L10.05 6.05ZM14.05 20.05C13.75 19.74 13.75 19.26 14.05 18.95L19.65 13.35C19.96 13.05 20.44 13.05 20.74 13.35L23.34 15.95C23.65 16.26 23.65 16.74 23.34 17.04L17.74 22.64C17.43 22.95 16.95 22.95 16.65 22.64L14.05 20.05ZM14.05 13.05C13.75 12.74 13.75 12.26 14.05 11.95L19.65 6.35C19.96 6.05 20.44 6.05 20.74 6.35L23.34 8.95C23.65 9.26 23.65 9.74 23.34 10.04L17.74 15.64C17.43 15.95 16.95 15.95 16.65 15.64L14.05 13.05Z" fill="white" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Sophisticated Living Spaces</h2>
                </div>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-gray-800">
                    The estate offers multiple elegant living areas designed for both entertainment and relaxation. The main villa features a grand living room with soaring ceilings, panoramic windows, designer furniture, and a state-of-the-art entertainment system. The formal dining room accommodates up to 16 guests and opens to a scenic terrace for alfresco dining.
                  </p>
                  <p className="text-gray-800">
                    The outdoor spaces are truly extraordinary, featuring two spectacular infinity swimming pools that appear to merge with the Aegean Sea. Expansive terraces and lounge areas provide perfect settings for entertaining, with multiple dining areas, BBQ stations, and a pool bar. The meticulously landscaped gardens with Mediterranean flora create a serene atmosphere throughout the property.
                  </p>
                  <p className="text-gray-800">
                    The estate also houses a fully equipped gourmet kitchen with professional-grade appliances, a wine cellar, a fitness center with high-end equipment, a spa area with treatment rooms, and a private cinema room for entertainment. Every detail is designed to deliver an unmatched luxury experience in one of Greece's most coveted destinations.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[4]}
                    alt="Helios Estate Mykonos - Infinity Pool"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[6]}
                    alt="Helios Estate Mykonos - Luxury Amenities"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
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
                        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92 9.53L18.84 9.95L15.11 13.18L16.23 18Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Exceptional Amenities</h2>
                </div>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-gray-800">
                    Helios Estate offers an impressive array of exclusive amenities that create an unrivaled luxury experience. The property features two stunning infinity pools with breathtaking views of the Aegean Sea, spacious sun terraces with premium loungers, and a pool bar for convenient refreshments.
                  </p>
                  <p className="text-gray-800">
                    For active guests, the estate includes a fully equipped fitness center with state-of-the-art equipment, a private tennis court, and a basketball court. The private wellness area features a sauna, steam room, and massage treatment rooms for post-activity relaxation.
                  </p>
                  <p className="text-gray-800">
                    Entertainment options abound with a private cinema room featuring comfortable seating and premium audiovisual equipment, a games room with billiards and table tennis, and an outdoor entertainment area with a professional BBQ station and wood-fired pizza oven. The property also includes a helipad for convenient arrivals and high-speed Wi-Fi throughout the estate.
                  </p>
                  <p className="text-gray-800">
                    To ensure a seamless luxury experience, Helios Estate offers VIP concierge services to arrange yacht charters, helicopter tours, private dining experiences, and exclusive access to Mykonos' premier beach clubs and restaurants. Housekeeping services, personal chef, and security personnel are available upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-black text-white py-16 mt-16">
            <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Experience Helios Estate</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                For inquiries, availability, and to book your stay at this exclusive Mykonos property
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </main>

        <Footer />

        {/* Full screen photo viewer */}
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={closeFullScreenPhoto}
              className="absolute top-4 right-4 text-white z-10"
              aria-label="Close full screen view"
            >
              <X size={32} />
            </button>
            <button
              onClick={() => navigatePhoto("prev")}
              className="absolute left-4 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
              aria-label="Previous photo"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={() => navigatePhoto("next")}
              className="absolute right-4 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
              aria-label="Next photo"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`Helios Estate Mykonos photo ${selectedPhotoIndex + 1}`}
                className="object-contain max-h-screen max-w-full"
                width={1200}
                height={800}
                priority={true}
                onLoadingComplete={() => setIsImageLoading(false)}
              />
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* All photos modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="sticky top-0 bg-white shadow-md z-10 px-4 py-3 flex justify-between items-center">
              <h3 className="text-xl font-semibold">
                Helios Estate | Mykonos, Greece - All Photos
              </h3>
              <button
                onClick={closeAllPhotos}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close all photos"
              >
                <X size={24} />
              </button>
            </div>
            <div className="container mx-auto py-8 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] cursor-pointer rounded-lg overflow-hidden"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={photo}
                      alt={`Helios Estate Mykonos photo ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeliosEstateMykonos;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale || "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}; 