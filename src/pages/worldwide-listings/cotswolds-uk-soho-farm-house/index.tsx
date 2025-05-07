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

const CotswoldsUKSohoFarmHouse = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Property photos
  const photos = [
    "/photos/properties/Cotswolds UK - Soho Farm House/8596128-exterior09-800.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5292.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5307.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5305.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5277.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5290.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5302.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5359.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5372.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5399.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5410.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5417.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5423.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5450.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5472.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5478.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5506.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5516.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5528.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/DJI_20250502143514_0652_D.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/DJI_20250502143734_0662_D.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/012A0878.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/012A0881.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5279.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5289.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5317.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5336.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5352.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5368.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5435.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5463.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/012A0872.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/012A0876.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5297.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5313.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5314.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5324.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5331.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5339.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5345.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5351.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5361.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5362.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5398.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5405.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5413.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5430.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5433.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5437.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5441.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5468.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5470.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5492.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5502.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5508.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5518.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5532.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/224A5535.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/8596128-exterior08-800.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/8596128-exterior10-800.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/8596128-exterior18-800.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/8596128-exterior21-800.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/DJI_20250502143633_0658_D.jpg",
    "/photos/properties/Cotswolds UK - Soho Farm House/DJI_20250502143723_0661_D.jpg"
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!showAllPhotos && selectedPhotoIndex === null) return;
    
    if (e.key === "ArrowRight") {
      navigatePhoto("next");
    } else if (e.key === "ArrowLeft") {
      navigatePhoto("prev");
    } else if (e.key === "Escape") {
      if (selectedPhotoIndex !== null) {
        closeFullScreenPhoto();
      } else if (showAllPhotos) {
        closeAllPhotos();
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [showAllPhotos, selectedPhotoIndex]);

  return (
    <>
      <Head>
        <title>Designer Stone Estate Near Soho Farmhouse | Cotswolds UK - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at this designer stone estate near Soho Farmhouse in the Cotswolds, UK. This exclusive 8-bedroom property offers spa facilities, a tennis court, and an annex house, all set on a stunning 2-acre property just minutes from Soho Farmhouse."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <PropertyHeader
            title="Designer Stone Estate Near Soho Farmhouse | 8 Bedroom, Spa, Tennis Court, & Annex"
            guests={14}
            bedrooms={8}
            bathrooms={5}
            priceRange="£1,100-£1,500 per night"
            contactLink="/contact"
            airbnbLink="https://www.airbnb.ca/rooms/1414129878809697902?guests=1&adults=1&s=67&unique_share_id=ba3bff7b-bc57-416c-bcd6-96b0943cfe51"
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
                    alt={`Cotswolds UK - Soho Farm House ${index + 1}`}
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
              Welcome to your countryside dream retreat—just 4 minutes by car (or a scenic 30-minute walk through a private trail) from the world-famous Soho Farmhouse. This beautifully renovated 8-bedroom, 5-bathroom stone estate offers over 320m² of luxurious living space across two dwellings, all set on a stunning and serene 2-acre property.
            </p>
          </div>
          
          {/* Accommodation Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accommodation Details</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Designed for the most discerning guests, this property combines rustic charm with modern luxury to create an unforgettable Cotswolds experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Main House (6 bedrooms) (280m²)</h3>
                <p className="text-gray-700 mb-6">
                  The heart of the estate features six thoughtfully designed bedrooms and four elegant bathrooms, perfect for families, groups, or special gatherings. Bedroom configurations include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>1 Emperor King</li>
                  <li>2 Super Kings</li>
                  <li>1 King</li>
                  <li>1 Double</li>
                  <li>1 Single</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Two of the bedrooms have spa-like ensuite bathrooms, while the other bedrooms share a large bathroom with a separate tub and walk-in shower. There's also a charming powder room on the main floor.
                </p>
                <p className="text-gray-700">
                  Enjoy two cozy living rooms (ideal for lounging or movie nights), two dedicated office spaces for remote work, and a gorgeous Devol designer kitchen complete with an iconic AGA oven, two fridges, and a brand-new washer/dryer.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Annex House (2 bedrooms) (40m²)</h3>
                <p className="text-gray-700 mb-6">
                  Tucked away behind the newly surfaced private tennis court, the annex is a peaceful escape of its own. It features:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>1 King bedroom</li>
                  <li>1 bedroom with either two singles or a king configuration</li>
                  <li>1 full bathroom</li>
                  <li>A compact kitchenette—perfect for early risers or night owls who want their own space</li>
                </ul>
                <h3 className="text-2xl font-bold mb-6 mt-8">Wellness & Outdoor Living</h3>
                <p className="text-gray-700 mb-6">
                  The grounds are where the magic truly unfolds. Indulge in your own private outdoor spa, featuring:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  <li>An infrared sauna</li>
                  <li>A bubbling hot tub</li>
                  <li>A refreshing cold plunge pool</li>
                </ul>
                <p className="text-gray-700">
                  Stroll past the little barn and you'll find a charming private pond—perfect for morning coffee or sunset wine. Challenge your group to a round of bocce ball or horseshoes, or simply unwind by the outdoor firepit under the stars.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[4]}
                    alt="Cotswolds UK - Soho Farm House - Premium Amenities"
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
                  <h2 className="text-2xl font-bold">Additional Amenities</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Electric car charger</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Parking for up to 6 cars</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Extendable indoor dining table (seats 8, extends to 14)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>2 fireplaces (1 gas, 1 wood-burning)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Outdoor dining area and BBQ</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Private tennis court (New photos coming soon as court has recently been completely renovated and redone to pro standards)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Outdoor wellness area with sauna, hot tub and cold plunge</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Private 2-acre grounds with pond</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing and Terms Section */}
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 mb-24 bg-gray-50 rounded-xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Pricing and Terms</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Rates</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Rate</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Details</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">Price Range</td>
                      <td className="px-6 py-4 whitespace-nowrap">£1,100-£1,500 per night</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap border-r">Minimum Stay</td>
                      <td className="px-6 py-4 whitespace-nowrap">3 nights</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Payment Policy</h3>
              <ul className="list-disc pl-8 space-y-3 text-gray-800 leading-relaxed">
                <li>To secure a reservation, 50% of the rental amount is required at the time of booking.</li>
                <li>The remaining 50% must be paid 60 days before check-in.</li>
                <li>For bookings made 60 days or less before check-in, the full rental amount (100%) must be paid.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Cancellation Policy</h3>
              <ul className="list-disc pl-8 space-y-3 text-gray-800 leading-relaxed">
                <li>Cancellations more than 60 days before arrival: 50% refund of the total reservation price</li>
                <li>Cancellations within 60 days of arrival: No refund</li>
                <li>Early departures or no-shows: No refund</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8 text-center mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Experience countryside luxury at its finest</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
              This is not just a house—it's an experience. A rare blend of country charm and modern luxury, all within striking distance of Soho Farmhouse and the Cotswolds' best attractions. Perfect for family gatherings, corporate retreats, or special celebrations.
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
                  Cotswolds UK - Soho Farm House | All Photos ({photos.length})
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
                      alt={`Cotswolds UK - Soho Farm House photo ${index + 1}`}
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
                  alt={`Cotswolds UK - Soho Farm House photo ${selectedPhotoIndex + 1}`}
                  fill
                  priority
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                  sizes="100vw"
                  onLoadingComplete={handleImageLoad}
                  quality={85}
                  loading="eager"
                />
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

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default CotswoldsUKSohoFarmHouse; 