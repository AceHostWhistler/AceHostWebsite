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

const SantoriniGreeceVillaEclipse = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(7 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(1 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(2 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(3 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(4 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(5 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(6 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(8 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(9 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(10 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(11 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(12 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(13 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(14 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(15 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(16 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(17 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(18 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(19 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(20 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(21 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(22 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(23 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(24 of 25).jpg",
    "/photos/properties/Santorini-Greece-Villa-Eclipse/VILLA ECLIPSE(25 of 25).jpg",
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(false);
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
        <title>Villa Eclipse | Santorini, Greece - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Villa Eclipse in Santorini, Greece. This exclusive 5-bedroom private villa offers breathtaking sea views, infinity pool, multiple terraces, and five-star services including private chef and concierge."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <PropertyHeader
            title="Villa Eclipse | Santorini, Greece"
            guests={10}
            bedrooms={5}
            bathrooms={5}
            priceRange="€1,300-€1,920 per night"
            contactLink="/contact"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Villa Eclipse Santorini ${index + 1}`}
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
              Villa Eclipse is a luxury private villa in Santorini offering total privacy and breathtaking sea views. Located on a peaceful cliffside on the southwest coast of the island, it promises a tranquil retreat while remaining close to the island's best spots. The famous Santorini lighthouse is just five minutes away. Popular volcanic beaches can be reached within 10 minutes, while the vibrant town of Fira is only a 20-minute drive.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="Villa Eclipse Santorini - Exterior View"
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
                  This luxury villa in Greece blends modern design with traditional Cycladic architecture. Spread over three spacious levels, it offers bright living spaces, elegant interiors, and stunning Aegean views from every room. Guests can unwind in multiple indoor lounges, relax in stylish reception areas, and enjoy meals in a beautifully designed open-plan kitchen and dining room.
                </p>
                <p className="text-gray-800 mb-6">
                  For extra entertainment, a large lower-ground salon and a dedicated playroom are available. The main living room includes air conditioning, a flat-screen satellite TV, and a Hi-Fi sound system, perfect for cozy evenings indoors.
                </p>
                <p className="text-gray-800">
                  Villa Eclipse offers five luxurious bedrooms, each with its own en-suite bathroom, Smart TV, air conditioning, and sound system. The two master suites on the lower-ground floor provide extra space and direct access to the terrace. Three more bedrooms are located on the upper levels, each filled with natural light and offering beautiful views of the sea or gardens.
                </p>
              </div>
            </div>

            {/* Outdoor Living Section */}
            <div className="flex flex-col md:flex-row mb-20">
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
                  <h2 className="text-2xl font-bold">Outdoor Living</h2>
                </div>
                <p className="text-gray-800 mb-6">
                  The villa's outdoor areas are simply outstanding. Four large terraces surround the property, offering endless space for sunbathing, alfresco dining, and sunset drinks. A private infinity pool overlooks the Aegean Sea, while a relaxing outdoor Jacuzzi invites guests to unwind in style.
                </p>
                <p className="text-gray-800 mb-6">
                  The barbecue area is ideal for evening gatherings under the stars, making every moment here unforgettable. With multiple outdoor seating and dining areas, you'll find the perfect spot to enjoy Santorini's famous sunsets.
                </p>
              </div>
              <div className="md:w-1/2 pl-0 md:pl-12 mt-8 md:mt-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[4]}
                    alt="Villa Eclipse Santorini - Infinity Pool"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Services & Amenities Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[6]}
                    alt="Villa Eclipse Santorini - Interior View"
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
                        d="M13 4.06871V2H11V4.06871C7.38128 4.56343 4.56343 7.38128 4.06871 11H2V13H4.06871C4.56343 16.6187 7.38128 19.4366 11 19.9313V22H13V19.9313C16.6187 19.4366 19.4366 16.6187 19.9313 13H22V11H19.9313C19.4366 7.38128 16.6187 4.56343 13 4.06871ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"
                        fill="white"
                      />
                      <path
                        d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Services & Amenities</h2>
                </div>
                <p className="text-gray-800 mb-6">
                  Guests at Villa Eclipse enjoy daily breakfast, housekeeping, and personal concierge services. Private chef services, professional massage sessions, and personal waiter arrangements are available on request.
                </p>
                <p className="text-gray-800 mb-6">
                  The price includes:
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-800">
                  <li>Daily breakfast</li>
                  <li>Daily maid service</li>
                  <li>Complimentary WiFi</li>
                  <li>All applicable taxes</li>
                  <li>Luxury bath amenities</li>
                  <li>Pool cleaning & gardening</li>
                  <li>Concierge services</li>
                </ul>
                <p className="text-gray-800">
                  VIP experiences such as private yacht rentals, helicopter tours, limousine services, and custom island tours can be organized to elevate your stay.
                </p>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex flex-col md:flex-row mb-20">
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
                  <h2 className="text-2xl font-bold">Location</h2>
                </div>
                <p className="text-gray-800 mb-6">
                  Villa Eclipse is ideally located to offer both privacy and convenience. The villa is perched on a peaceful cliffside on the southwest coast of Santorini, just five minutes from the iconic lighthouse. Popular volcanic beaches can be reached within 10 minutes, while the bustling capital of Fira is just 20 minutes away.
                </p>
                <p className="text-gray-800">
                  This location offers the perfect balance - secluded enough for complete privacy but close enough to enjoy all that Santorini has to offer. The famous caldera sunset viewpoints are within easy reach, as are some of the island's best restaurants and attractions.
                </p>
              </div>
              <div className="md:w-1/2 pl-0 md:pl-12 mt-8 md:mt-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[8]}
                    alt="Villa Eclipse Santorini - Location View"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Pricing and Terms Section */}
            <div className="bg-gray-50 rounded-lg p-8 mb-20">
              <h2 className="text-2xl font-bold mb-6">Pricing and Terms</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Seasonal Rates (per night)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Season</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Rate (€)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Minimum Stay</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-300">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-r">January 1 - May 31 & October 1 - December 31</td>
                        <td className="px-6 py-4 whitespace-nowrap border-r">1,300 €</td>
                        <td className="px-6 py-4 whitespace-nowrap">3 nights</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-r">June 1 - 30 & September 1 - 30</td>
                        <td className="px-6 py-4 whitespace-nowrap border-r">1,600 €</td>
                        <td className="px-6 py-4 whitespace-nowrap">3 nights</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-r">July 1 - August 31</td>
                        <td className="px-6 py-4 whitespace-nowrap border-r">1,920 €</td>
                        <td className="px-6 py-4 whitespace-nowrap">3 nights</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Payment Policy</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>To secure a reservation, 50% of the rental amount is required at the time of booking.</li>
                  <li>For bookings made 60 days or less before check-in, the full rental amount (100%) must be paid, and no refunds will be issued if canceled.</li>
                  <li>For bookings made more than 60 days in advance, an advance payment of 50% is required. The remaining 50% must be paid 60 days before check-in.</li>
                  <li>Security Deposit: €3,000 (To be paid via bank transfer, credit card with 4% surcharge, or cash upon arrival).</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Cancellation Policy</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>50% of the rental amount is non-refundable upon booking.</li>
                  <li>Cancellations made 40 days or more before the arrival date will incur a 25% penalty of the rental amount.</li>
                  <li>For cancellations or no-shows within 40 days to 0 days before arrival, 100% of the rental amount will be charged.</li>
                  <li>Modifications or reductions to the stay past the cancellation deadlines will result in a penalty equal to 100% of the rental amount for each canceled night.</li>
                </ul>
              </div>
            </div>

            {/* Book Now CTA */}
            <div className="text-center mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Experience the ultimate luxury escape in Santorini</h2>
              <p className="text-gray-700 max-w-3xl mx-auto mb-8">
                Villa Eclipse is perfect for family holidays, romantic escapes, destination weddings, and exclusive events. Combining panoramic views, modern comforts, and discreet five-star service, it offers an unforgettable stay on one of the world's most enchanting islands.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-md font-medium text-lg transition-colors"
              >
                Contact Us to Book
              </Link>
            </div>
          </div>

          {/* All Photos Modal */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white font-medium">
                  Villa Eclipse | All Photos ({photos.length})
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
                      alt={`Villa Eclipse photo ${index + 1}`}
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
                  alt={`Villa Eclipse photo ${selectedPhotoIndex + 1}`}
                  fill
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

export default SantoriniGreeceVillaEclipse;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
}; 