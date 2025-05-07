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

const VillaOineasGreeceMykonos = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06907.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06900.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06930.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06628.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-07492.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06649.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-07542.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06664.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06674.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06688-2.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06703.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06709.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06723-2.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06784.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06791.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06798.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06805.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06811.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06814.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06818.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06825.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06833.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06854.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06861.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06868.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06874.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06880.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06887.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06893.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06131.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06185.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06191.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06203.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06210.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06218.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06227-2.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06227.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06234.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06248.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06272-2.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06272.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06307.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06319.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06327.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06336.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06342.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06355.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06373.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06417.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06433.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06486.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06497.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06547.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06566.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06577.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06585.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06603.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06614.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06621.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06638.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06657.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06723.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-06798-2.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-07501.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-07507.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-07514.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-07535-2.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS-07549.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 2.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 3.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 4.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 5.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 6.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 12.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 13.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 14.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 15.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 16.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 17.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 18.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 19.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 20.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 24.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 25.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 26.jpg",
    "/photos/properties/Oineas Villa - Greece Mykonos/VILLA OINEAS - 27.jpg",
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
        <title>Villa Oineas | Mykonos, Greece - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Villa Oineas in Mykonos, Greece. This exclusive 5-bedroom private villa offers total privacy, panoramic views, heated infinity pool, tennis court, and five-star services within a vineyard estate."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <PropertyHeader
            title="Villa Oineas | Mykonos, Greece"
            guests={12}
            bedrooms={5}
            bathrooms={5}
            priceRange="€1,450-€2,550 per night"
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
                    alt={`Villa Oineas Mykonos ${index + 1}`}
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
              Villa Oineas is a newly built luxury estate in Santorini, nestled within 32 acres of private vineyards and designed to offer the ultimate blend of elegance, privacy, and premium living. With panoramic views of the island's southern coastline and close proximity to Vlychada Beach, the Tomato Industrial Museum, boutique art galleries, and renowned wineries, this exclusive sanctuary is ideal for luxury holidays, destination weddings, and private VIP events.
            </p>
          </div>

          {/* Accommodation Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[0]}
                    alt="Villa Oineas Mykonos - Luxury Accommodation"
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
                    This private estate features a main villa and a guest house, offering five spacious bedrooms—each with en-suite bathrooms and high-end amenities. Every room is thoughtfully designed for comfort and relaxation, making Villa Oineas perfect for families, friends, or high-profile guests.
                  </p>
                  <p className="text-gray-800">
                    The Master Suite includes a king-size bed, walk-in wardrobe, and an en-suite with Jacuzzi & waterfall shower, plus private verandas. All other bedrooms feature king-size beds, with some offering additional sofa beds and luxury bathroom amenities.
                  </p>
                  <p className="text-gray-800">
                    The Guest House is a separate maisonette with a king-size bed, double sofa bed, full kitchen, living room, and en-suite bathroom—perfect for those seeking additional privacy.
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
                    The main villa includes two stylish living rooms, a designer dining area, and a fully equipped kitchen. At the heart of the estate lies a unique stone-built underground wine cellar—perfect for private tastings or intimate dinners in an unforgettable setting.
                  </p>
                  <p className="text-gray-800">
                    Step outside to a world of open-air luxury, ideal for relaxation or events for up to 200 guests. The estate features a heated seawater infinity pool with waterfall function & reverse swimming current, Jacuzzi, BBQ area, and a detachable glass-roofed patio for day lounging or elegant evenings.
                  </p>
                  <p className="text-gray-800">
                    The property also boasts a private pool bar with panoramic views, comfortable sunbeds and umbrellas, a professional tennis court, and even a private heliport for luxury arrivals.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[1]}
                    alt="Villa Oineas Mykonos - Infinity Pool"
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
                    src={photos[4]}
                    alt="Villa Oineas Mykonos - Premium Amenities"
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
                        d="M13 4.06871V2H11V4.06871C7.38128 4.56343 4.56343 7.38128 4.06871 11H2V13H4.06871C4.56343 16.6187 7.38128 19.4366 11 19.9313V22H13V19.9313C16.6187 19.4366 19.4366 16.6187 19.9313 13H22V11H19.9313C19.4366 7.38128 16.6187 4.56343 13 4.06871ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"
                        fill="white"
                      />
                      <path
                        d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">State-of-the-Art Amenities</h2>
                </div>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-gray-800">
                    Every detail at Villa Oineas is crafted to provide a seamless and indulgent experience. The villa features plasma TVs with local & satellite channels in all bedrooms, an advanced floor cooling & heating system, and a water desalination system providing drinkable water throughout the property.
                  </p>
                  <p className="text-gray-800">
                    The price includes:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-gray-800">
                    <li>Cinema</li>
                    <li>Daily maid service</li>
                    <li>Complimentary WiFi</li>
                    <li>All applicable taxes</li>
                    <li>Luxury bath amenities</li>
                    <li>Pool cleaning & gardening</li>
                    <li>Concierge services</li>
                  </ul>
                  <p className="text-gray-800">
                    Additional amenities include a safe box in every bedroom, Hi-Fi sound system, DVD player, projector, and a mobile phone for direct host contact. The property also provides a washing and drying machine, luxury linens, pool towels, bathrobes, slippers, and premium toiletries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Concierge Services Section */}
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
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Bespoke Concierge Services</h2>
                </div>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-gray-800">
                    From the moment you arrive, Villa Oineas offers five-star hospitality. Signature welcome drinks greet you upon check-in, and a dedicated host is available 24/7 to ensure your stay exceeds expectations.
                  </p>
                  <p className="text-gray-800">
                    Our expert concierge team can arrange a variety of premium services, including:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-gray-800">
                    <li>Private chef services</li>
                    <li>Massage sessions and wellness treatments</li>
                    <li>Breakfast delivery</li>
                    <li>Airport & port transfers</li>
                    <li>Luxury car rentals</li>
                    <li>Private sailing tours, cultural excursions, and wine tastings</li>
                  </ul>
                  <p className="text-gray-800">
                    The villa is ideally positioned, with beaches under 14 minutes away and convenient access to local attractions, including the iconic Tomato Industrial Museum and Museum of Prehistoric Thera.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[8]}
                    alt="Villa Oineas Mykonos - Concierge Services"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pricing and Terms Section */}
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 mb-24 bg-gray-50 rounded-xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Pricing and Terms</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Seasonal Rates (per night)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Season</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Rate (€)</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Minimum Stay</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">April - May & October</td>
                      <td className="px-6 py-4 whitespace-nowrap border-r">1,450 €</td>
                      <td className="px-6 py-4 whitespace-nowrap">2 nights</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">June & September</td>
                      <td className="px-6 py-4 whitespace-nowrap border-r">2,000 €</td>
                      <td className="px-6 py-4 whitespace-nowrap">2 nights</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">July - August</td>
                      <td className="px-6 py-4 whitespace-nowrap border-r">2,550 €</td>
                      <td className="px-6 py-4 whitespace-nowrap">3 nights</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Event Rates</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Event Size</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Rate (€)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">Up to 50 guests</td>
                      <td className="px-6 py-4 whitespace-nowrap">2,000 €</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">Up to 100 guests</td>
                      <td className="px-6 py-4 whitespace-nowrap">3,500 €</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">Up to 200 guests</td>
                      <td className="px-6 py-4 whitespace-nowrap">5,550 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Payment Policy</h3>
              <ul className="list-disc pl-8 space-y-3 text-gray-800 leading-relaxed">
                <li>To secure a reservation, 50% of the rental amount is required at the time of booking.</li>
                <li>For bookings made 60 days or less before check-in, the full rental amount (100%) must be paid, and no refunds will be issued if canceled.</li>
                <li>For bookings made more than 60 days in advance, an advance payment of 50% is required. The remaining 50% must be paid 60 days before check-in.</li>
                <li>Security Deposit: €5,000 (To be paid via bank transfer, credit card with 4% surcharge, or cash upon arrival).</li>
                <li>Additional 13% VAT and €15 per day accommodation tax apply.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Cancellation Policy</h3>
              <ul className="list-disc pl-8 space-y-3 text-gray-800 leading-relaxed">
                <li>50% of the rental amount is non-refundable upon booking.</li>
                <li>Cancellations made 40 days or more before the arrival date will incur a 25% penalty of the rental amount.</li>
                <li>For cancellations or no-shows within 40 days to 0 days before arrival, 100% of the rental amount will be charged.</li>
                <li>Modifications or reductions to the stay past the cancellation deadlines will result in a penalty equal to 100% of the rental amount for each canceled night.</li>
                <li>Date changes within the cancellation policy period are considered cancellations and are subject to penalties.</li>
              </ul>
            </div>
          </div>

          {/* Book Now CTA */}
          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8 text-center mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Experience the ultimate luxury escape in Mykonos</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
              Whether you're planning a luxury vacation in Greece, a destination wedding, or a private island escape, Villa Oineas delivers unmatched privacy, impeccable design, and curated service. With its Cycladic charm, expansive grounds, and modern comforts, this is not just a stay—it's a once-in-a-lifetime experience.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-md font-medium text-lg transition-colors"
            >
              Contact Us to Book
            </Link>
          </div>

          {/* All Photos Modal */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white font-medium">
                  Villa Oineas | All Photos ({photos.length})
                </h3>
                <button
                  onClick={closeAllPhotos}
                  className="text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={photo}
                      alt={`Villa Oineas photo ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Screen Photo Modal */}
          {selectedPhotoIndex !== null && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
              onClick={closeFullScreenPhoto}
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)}
              onTouchEnd={() => {
                if (touchStartX && touchEndX) {
                  const diff = touchStartX - touchEndX;
                  if (diff > 50) {
                    // Swipe left
                    navigatePhoto("next");
                  } else if (diff < -50) {
                    // Swipe right
                    navigatePhoto("prev");
                  }
                }
                setTouchStartX(null);
                setTouchEndX(null);
              }}
            >
              <button
                className="absolute top-4 right-4 text-white z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  closeFullScreenPhoto();
                }}
              >
                <X size={32} />
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("prev");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("next");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <div className="relative w-full h-[calc(100vh-120px)] max-w-6xl mx-auto">
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Villa Oineas photo ${selectedPhotoIndex + 1}`}
                  fill
                  priority
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                  sizes="100vw"
                  onLoadingComplete={handleImageLoad}
                  quality={85}
                  loading="eager"
                  sizes="100vw"
                  className="object-contain"
                  loading="eager"
                  onLoadingComplete={() => setIsImageLoading(false)}
                />
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  </div>
                )}
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                {selectedPhotoIndex + 1} / {photos.length}
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default VillaOineasGreeceMykonos;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
}; 