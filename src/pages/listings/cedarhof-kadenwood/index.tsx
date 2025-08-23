import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const CedarHof = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos - in specific order as requested with optimized versions
  const photos = [
    "/optimized/cedarhof/01 - 20250707 A7M3 04 A1_07890.jpg",
    "/optimized/cedarhof/2932 Living Night 1.jpg",
    "/optimized/cedarhof/2932 Bedroom 1A NEW.jpg",
    "/optimized/cedarhof/2932 Living A NEW.jpg",
    "/optimized/cedarhof/2932-Ancient-Cedars-04-MLS.jpg",
    "/optimized/cedarhof/2932-Ancient-Cedars-06-MLS.jpg",
    "/optimized/cedarhof/07 - 20250707 A7M3 04 A1_07786.jpg", // Living Dining
    "/optimized/cedarhof/08 - 20250707 A7M3 04 A1_07794.jpg", // Media Room B
    "/optimized/cedarhof/09 - 20250707 A7M3 04 A1_07812.jpg", // Hot Tub Pool B
    "/optimized/cedarhof/2932 Pool A NEW.jpg",
    "/optimized/cedarhof/2932 Pool B NEW.jpg",
    "/optimized/cedarhof/2932 Pool C NEW.jpg",
    "/optimized/cedarhof/13 - 20250707 A7M3 04 A1_07958.jpg", // Kitchen A
    "/optimized/cedarhof/14 - 20250707 A7M3 04 A1_07977.jpg", // Kitchen B
    "/optimized/cedarhof/15 - 20250707 A7M3 04 A1_08013.jpg", // Dining
    "/optimized/cedarhof/16 - 20250707 A7M3 04 A1_07901.jpg", // Family Room
    "/optimized/cedarhof/17 - 20250707 A7M3 04 A1_07910.jpg", // Wine Room
    "/optimized/cedarhof/18 - 20250707 A7M3 04 A1_07927.jpg", // Wine and Poker Room
    "/optimized/cedarhof/19 - 20250707 A7M3 04 A1_07936.jpg", // Bedroom 1A
    "/optimized/cedarhof/20 - 20250707 A7M3 04 A1_07945.jpg", // Bedroom 2A
    "/optimized/cedarhof/21 - 20250707 A7M3 04 A1_08020.jpg", // Bedroom 3
    "/optimized/cedarhof/22 - 20250707 A7M3 04 A1_08025.jpg", // Bedroom 4
    "/optimized/cedarhof/23 - 20250707 A7M3 04 A1_08032.jpg", // Bedroom 5
    "/optimized/cedarhof/24 - 20250707 A7M3 04 A1_08037.jpg", // Bath 1A
    "/optimized/cedarhof/25 - 20250707 A7M3 04 A1_08048.jpg", // Bath 2A
    "/optimized/cedarhof/26 - 20250707 A7M3 04 A1_08054.jpg", // Gym
    "/optimized/cedarhof/27 - 20250707 A7M3 04 A1_08069.jpg", // Exterior Detail
    "/optimized/cedarhof/2932 Deck 1.jpg",
    "/optimized/cedarhof/2932 Deck 2.jpg",
    "/optimized/cedarhof/2932 Deck Dusk.jpg",
    "/optimized/cedarhof/2932 Exterior 1.jpg",
    "/optimized/cedarhof/2932 Exterior 2.jpg",
    "/optimized/cedarhof/2932 Bedroom 1B NEW.jpg",
    "/optimized/cedarhof/2932 Bedroom 1C NEW.jpg",
    "/optimized/cedarhof/2932 Exterior 3.jpg",
    "/optimized/cedarhof/2932 Exterior 4.jpg",
    "/optimized/cedarhof/2932 Laundry Room.jpg",
    "/optimized/cedarhof/2932 Living Night 2.jpg",
    "/optimized/cedarhof/2932 Mudroom.jpg",
    "/optimized/cedarhof/2932 Rear Exterior Night 1.jpg",
    "/optimized/cedarhof/2932 Rear Exterior Night 2.jpg",
    "/optimized/cedarhof/2932 Upper Hallway Night.jpg",
    "/optimized/cedarhof/2932 View.jpg",
    "/optimized/cedarhof/02 - 20250707 A7M3 04 A1_08227.jpg", // Ancient Cedars 02
    "/optimized/cedarhof/03 - 20250707 A7M3 04 A1_07893.jpg", // Ancient Cedars 03
    "/optimized/cedarhof/04 - 20250707 A7M3 04 A1_07734.jpg", // Ancient Cedars 05
    "/optimized/cedarhof/05 - 20250707 A7M3 04 A1_07755.jpg", // Ancient Cedars 07
    "/optimized/cedarhof/06 - 20250707 A7M3 04 A1_07762.jpg", // Ancient Cedars 08
    "/optimized/cedarhof/2932-Ancient-Cedars-09-MLS.jpg",
    "/optimized/cedarhof/2932-Ancient-Cedars-10-MLS.jpg",
    "/optimized/cedarhof/2932-Ancient-Cedars-11-MLS.jpg",
    "/optimized/cedarhof/28 - 20250707 A7M3 04 A1_08074.jpg", // Bath 1B
    "/optimized/cedarhof/29 - 20250707 A7M3 04 A1_08081.jpg", // Bath 2B
    "/optimized/cedarhof/30 - 20250707 A7M3 04 A1_08117.jpg", // Bath 4
    "/optimized/cedarhof/31 - 20250707 A7M3 04 A1_08127.jpg", // Bath 5
    "/optimized/cedarhof/32 - 20250707 A7M3 04 A1_08142.jpg", // Bedroom 1 Closet
    "/optimized/cedarhof/33 - 20250707 A7M3 04 A1_08152.jpg", // Bedroom 1B
    "/optimized/cedarhof/34 - 20250707 A7M3 04 A1_08182-Edit.jpg", // Bedroom 2B
    "/optimized/cedarhof/35 - 20250707 A7M3 04 A1_08217.jpg", // Deck 1
    "/optimized/cedarhof/36 - 20250707 A7M3 04 A1_07669.jpg", // Entry
    "/optimized/cedarhof/37 - 20250707 A7M3 04 A1_07689-Edit.jpg", // Hallway
    "/optimized/cedarhof/38 - 20250707 A7M3 04 A1_07724.jpg", // Hot Tub Pool A
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
    setSelectedPhotoIndex(index);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        navigatePhoto("next");
      } else {
        navigatePhoto("prev");
      }
    }
    
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
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
        <title>Cedarhof | Kadenwood | Private Butler - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Cedarhof in Kadenwood. This ski-in/ski-out property features 7 bedrooms, private butler service, and stunning views of Whistler Peak."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Cedarhof | Kadenwood | Private Butler"
            guests={14}
            bedrooms={7}
            beds={6}
            bathrooms={7}
            priceRange="$5,000-$6,500 per night Summer"
            winterPrice="$7,000-$9,000 Nightly | Winter"
            holidayPrice="$12,500-$16,500 Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1457520373019699712?guests=1&adults=1&s=67&unique_share_id=112eabb2-8f04-425c-99c0-b02ddb2135e5"
          />

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 32).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Cedarhof Kadenwood interior ${index + 1}`}
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
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="inline-flex items-center px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium"
              >
                View all {photos.length} photos
              </button>
            </div>
          </div>

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Welcome to your dream escape in Kadenwood, Whistler's most exclusive ski-in/ski-out enclave. This luxury mountain retreat features a private gondola, heated pool, hot tub, and stunning views over Whistler Peak. With sleek design, cozy elegance, and all-day sun, it's perfect for après-ski lounging, summer barbecues, or wine nights in the tasting room. Pure Whistler magic.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[6]}
                    alt="Cedarhof Interior"
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
                  Merging contemporary design with world-class craftsmanship, this newly built residence is set against dramatic granite rock and lush old-growth rainforest, with panoramic views of Whistler Peak and the Tantalus Range.
                </p>
                <p className="text-gray-800 mb-6">
                  Designed by Brent Murdoch and built by Gavan Construction Ltd, every detail was carefully considered, from the custom Shinnoki Oak millwork and Caesarstone quartz finishes to the chef's kitchen equipped with premium Gaggenau appliances.
                </p>
                <p className="text-gray-800 mb-6">
                  Inside, enjoy multiple living spaces including a cozy media room, wine cellar, and tasting lounge. An elevator services all levels, and the oversized double garage includes a ski/boot room perfect for mountain adventures.
                </p>
                <p className="text-gray-800 mb-6">
                  Outdoors, unwind on heated patios, soak in the hot tub, or swim in the pool as the sun sets over the peaks. Located in the prestigious Kadenwood neighbourhood, this home offers true ski-in/ski-out convenience with access to a private gondola and close proximity to Creekside and Whistler Village.
                </p>
                <p className="text-gray-800 mb-6">
                  Whether you're here to relax, entertain, or explore this is mountain living at its finest.
                </p>
                <p className="text-gray-800">
                  Enhancing your stay and included in the reservation, a private butler is available to serve meals, fine drinks, and barista-made coffee throughout the day. They'll set the scene, lighting the fireplace, prepping the hot tub, and tuning the music, ensuring your experience is as seamless as it is unforgettable.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="Cedarhof Bedroom"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
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

                <p className="font-bold mb-2">Bed Configuration: Total Bedrooms: 7, 6 Beds</p>
                
                <p className="font-bold mb-2">UPPER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Primary Bedroom 1 - (A)</span>
                  <br />
                  • King bed
                  <br />
                  • Open-concept layout with walk-in closet and en suite bathroom
                  <br />
                  • Bathroom features: double sink, stand-up shower, bathtub, private toilet section
                  <br />
                  • TV
                  <br />
                  • Blackout blinds
                </p>
                <p className="mb-4">
                  <span className="font-medium">Guest Bedroom 2 - (B)</span>
                  <br />
                  • Queen bed
                  <br />
                  • En suite bathroom with stand-up shower and single sink
                  <br />
                  • Desk
                  <br />
                  • TV
                  <br />
                  • Closest to elevator
                  <br />
                  • Blackout blinds
                </p>
                <p className="mb-4">
                  <span className="font-medium">Guest Bedroom 3 - (C)</span>
                  <br />
                  • Two single beds
                  <br />
                  • En suite bathroom with tub, shower, and single sink
                  <br />
                  • Desk
                  <br />
                  • TV
                  <br />
                  • Ideal for young children
                  <br />
                  • Closest to upper-level laundry room
                  <br />
                  • Blackout blinds
                </p>

                <p className="font-bold mb-2">MID LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Gym (No Bed) - Bedroom 4 - (D)</span>
                  <br />
                  • Equipment includes: treadmill, stationary bike, weight bench, fitness balls, dumbbells (5–35 lbs), multiple fitness mats
                  <br />
                  • TV
                  <br />
                  • En suite bathroom with stand-up shower and single sink
                  <br />
                  • Access to wraparound deck
                </p>
                <p className="mb-4">
                  <span className="font-medium">Guest Bedroom 5 - (E)</span>
                  <br />
                  • King bed
                  <br />
                  • En suite bathroom with tub, shower, and double sink
                  <br />
                  • TV
                  <br />
                  • Access to wraparound deck
                  <br />
                  • Blackout blinds
                </p>

                <p className="font-bold mb-2">LOWER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Guest Bedroom 6 - (F)</span>
                  <br />
                  • European-style king bed
                  <br />
                  • En suite bathroom with stand-up shower and single sink
                  <br />
                  • TV
                  <br />
                  • Closest to wine cellar
                  <br />
                  • Blackout blinds
                </p>
                <p className="mb-4">
                  <span className="font-medium">Guest Bedroom 7 - (G)</span>
                  <br />
                  • Queen bed
                  <br />
                  • En suite bathroom with stand-up shower and single sink
                  <br />
                  • Double desk
                  <br />
                  • TV
                  <br />
                  • Closest to media room and elevator
                  <br />
                  • Blackout blinds
                </p>
                <p className="mb-4">
                  <span className="font-medium">Laundry:</span>
                  <br />
                  • Laundry available on both upper and lower levels
                  <br />
                  • Each laundry room includes washer, dryer, and ample folding space
                </p>
              </div>
            </div>

            {/* Additional Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              <div className="relative aspect-[4/3]">
                <Image
                  src={photos[8]}
                  alt="Cedarhof Hot Tub and Pool"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={photos[9]}
                  alt="Cedarhof Pool"
                  fill
                  className="object-cover rounded-lg"
                />
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
                Sitting almost 1,000 feet above the valley floor, Kadenwood is undoubtedly Whistler's
                top SKI IN/SKI OUT neighbourhood. Guests have access to the Kadenwood residents and
                "guests only" private Kadenwood Gondola. The neighbourhood is located a 5-minute drive up a
                private road. Can also be accessed via the private gondola, and a quick ski ride down will bring
                you to all the amenities in Creekside Village, including the ski gondola.
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                On your doorstep, you have some of Whistler's best restaurants. Enjoy quality coffee and delicious breads and pastries
                at Rockit Coffee and Bred coffee shop. Red Door Bistro, Rimrock Cafe, Cure Lounge (my
                favourite), Creekbread, Mekong, and Dusty's are all other great options for dining. Shop at 122
                West for beautiful home decor and Bask & Co for stylish clothing. The Husky gas station has a
                24-hour convenience store. For groceries, the Creekside Market. All can be accessed via the
                private gondola and a short walk, or a short drive from the home.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photos[16]}
                    alt="Cedarhof Wine Room"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photos[7]}
                    alt="Cedarhof Media Room"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <p className="text-gray-800 max-w-4xl mb-6">
                We will cater to ANYTHING you need.
                Included VIP Concierge service is provided for any special requests such as the top private
                chefs in Whistler, restaurant reservations, assistance with vehicles and shuttle service, bookings
                with extra experiences, etc... Ben is happy to join you on the hill to show you the mountain as
                well as show the ski in ski out.
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                <span className="font-bold">*Included in price:*</span>
                <br />
                Host/Butler for the whole stay (10-12 hours per day).
                <br />
                Full complimentary VIP concierge service
                <br />
                Restaurant reservations and recommendations
                <br />
                Ski lift pass pick up and delivery
              </p>
              <p className="text-gray-800 max-w-4xl">
                <span className="font-bold">Additional at-cost services:</span>
                <br />
                Airport Transfers
                <br />
                Private Chef (Highly recommended)
                <br />
                Chalet food & beverage stocking upon arrival
                <br />
                Private Driver
                <br />
                Massages
                <br />
                Ski equipment rental
                <br />
                Childcare
                <br />
                Ski Instructors
                <br />
                Heli/snowmobile Experiences
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Cedarhof - All Photos
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Cedarhof ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
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

        {/* Full Screen Photo View */}
        {selectedPhotoIndex !== null && (
          <div 
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute top-4 right-4 flex space-x-4">
              <button
                onClick={closeFullScreenPhoto}
                className="text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
              onClick={() => navigatePhoto("prev")}
              aria-label="Previous photo"
            >
              &larr;
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <div className="relative w-full h-full">
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Property full view ${selectedPhotoIndex + 1}`}
                  fill
                  priority
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                  sizes="100vw"
                  onLoadingComplete={handleImageLoad}
                  quality={85}
                  loading="eager"
                />
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
              onClick={() => navigatePhoto("next")}
              aria-label="Next photo"
            >
              &rarr;
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center z-20">
              <p className="text-white text-sm bg-black bg-opacity-50 inline-block px-4 py-2 rounded-full">
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

export default CedarHof; 