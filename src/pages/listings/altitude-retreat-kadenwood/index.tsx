import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import PropertyDetails from "@/components/PropertyDetails";
import { X } from "lucide-react";
import LazyVimeoPlayer from "../../../components/LazyVimeoPlayer";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const AltitudeRetreat = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const instagramEmbedRef = useRef<HTMLDivElement>(null);

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Process embeds after script loads
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Property photos
  const photos = [
    "/photos/properties/Altitude New Photos Best/1.jpg",
    "/photos/properties/Altitude New Photos Best/2.jpg",
    "/photos/properties/Altitude New Photos Best/3.jpg",
    "/photos/properties/Altitude New Photos Best/4.jpg",
    "/photos/properties/Altitude New Photos Best/5.jpg",
    "/photos/properties/Altitude New Photos Best/6.jpg",
    "/photos/properties/Altitude New Photos Best/7.jpg",
    "/photos/properties/Altitude New Photos Best/8.jpg",
    "/photos/properties/Altitude New Photos Best/10.jpg",
    "/photos/properties/Altitude New Photos Best/12.jpg",
    "/photos/properties/Altitude New Photos Best/13.jpg",
    "/photos/properties/Altitude New Photos Best/14.jpg",
    "/photos/properties/Altitude New Photos Best/15.jpg",
    "/photos/properties/Altitude New Photos Best/16.jpg",
    "/photos/properties/Altitude New Photos Best/18.jpg",
    "/photos/properties/Altitude New Photos Best/19.jpg",
    "/photos/properties/Altitude New Photos Best/21.jpg",
    "/photos/properties/Altitude New Photos Best/22.jpg",
    "/photos/properties/Altitude New Photos Best/23.jpg",
    "/photos/properties/Altitude New Photos Best/24.jpg",
    "/photos/properties/Altitude New Photos Best/25.jpg",
    "/photos/properties/Altitude New Photos Best/27.jpg",
    "/photos/properties/Altitude New Photos Best/29.jpg",
    "/photos/properties/Altitude New Photos Best/30.jpg",
    "/photos/properties/Altitude New Photos Best/31.jpg",
    "/photos/properties/Altitude New Photos Best/32.jpg",
    "/photos/properties/Altitude New Photos Best/33.jpg",
    "/photos/properties/Altitude New Photos Best/34.jpg",
    "/photos/properties/Altitude New Photos Best/35.jpg",
    "/photos/properties/Altitude New Photos Best/36.jpg",
    "/photos/properties/Altitude New Photos Best/37.jpg",
    "/photos/properties/Altitude New Photos Best/38.jpg",
    "/photos/properties/Altitude New Photos Best/39.jpg",
    "/photos/properties/Altitude New Photos Best/40.jpg",
    "/photos/properties/Altitude New Photos Best/41.jpg",
    "/photos/properties/Altitude New Photos Best/42.jpg",
    "/photos/properties/Altitude New Photos Best/43.jpg",
    "/photos/properties/Altitude New Photos Best/45.jpg",
    "/photos/properties/Altitude New Photos Best/47.jpg",
    "/photos/properties/Altitude New Photos Best/48.jpg",
    "/photos/properties/Altitude New Photos Best/49.jpg",
    "/photos/properties/Altitude New Photos Best/50.jpg",
    "/photos/properties/Altitude New Photos Best/51.jpg",
    "/photos/properties/Altitude New Photos Best/52.jpg",
    "/photos/properties/Altitude New Photos Best/53.jpg",
    "/photos/properties/Altitude New Photos Best/54.jpg",
    "/photos/properties/Altitude New Photos Best/christmas1.jpg",
    "/photos/properties/Altitude New Photos Best/christmas2.JPEG",
    "/photos/properties/Altitude New Photos Best/christmas3.jpg",
    "/photos/properties/Altitude New Photos Best/christmas4.jpg",
    "/photos/properties/Altitude New Photos Best/christmas5.jpg"
  ];

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
    setSelectedPhotoIndex(index);
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

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex !== null) {
        if (e.key === 'ArrowLeft') {
          navigatePhoto('prev');
        } else if (e.key === 'ArrowRight') {
          navigatePhoto('next');
        } else if (e.key === 'Escape') {
          closeFullScreenPhoto();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhotoIndex]);

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
        navigatePhoto('next');
      } else {
        navigatePhoto('prev');
      }
    }
    
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>Altitude Retreat | Kadenwood | Private Butler - AceHost</title>
        <meta
          name="description"
          content="Experience the ultimate luxury at Altitude Retreat in Kadenwood. This 10,000 sq.ft ski-in/ski-out mansion features a gym, sauna, hot tub, and private butler service, perfect for your Whistler vacation."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />
        <main>
          <PropertyHeader
            title="Altitude Retreat | Kadenwood | Private Butler"
            guests={18}
            bedrooms={8}
            beds={12}
            bathrooms={8.5}
            priceRange="$7,500-$10,000+ per night | Private Butler Included"
            winterPrice="$8,000-$10,000+ Nightly | Winter"
            holidayPrice="$14,500-$19,000 Nightly | Christmas & NY"
            contactLink="/contact"
            contactText="Contact Us"
          />

          {/* Featured Video */}
          <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
            <LazyVimeoPlayer 
              videoId="906479830"
              title="Altitude Retreat Property Walkthrough"
              aspectRatio="video"
              className="rounded-lg shadow-lg"
              autoplay={false}
            />
          </div>

          {/* Photo Grid - Updated to have 2 columns on mobile */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 28).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <img
                    src={photo}
                    alt={`Altitude Retreat interior ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading={index < 2 ? "eager" : "lazy"}
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
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Altitude Retreat is situated in the most prestigious ski-in
              ski-out neighbourhood in Whistler. Located just a stone's
              throw away from the exclusive Kadenwood residence only gondola
              makes this property the perfect location for your Whistler
              vacation! This well equipped property features everything you need
              for an indulgent stay. Enjoy a workout in the fully spec'd
              gym then take a dip in the hot tub. Secluded by trees, it
              doesn't get more private than this!
            </p>

            {/* Instagram Video Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0" ref={instagramEmbedRef}>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DSoAIEhEkPq/?igsh=dTM1MmZ2dTVnemI4"
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '8px',
                    margin: '1px',
                    maxWidth: '100%',
                    minWidth: '326px',
                    padding: '0',
                    width: '99.375%'
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a
                      href="https://www.instagram.com/reel/DSoAIEhEkPq/?igsh=dTM1MmZ2dTVnemI4"
                      style={{
                        background: '#FFFFFF',
                        lineHeight: 0,
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ padding: '19% 0' }}></div>
                      <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                              <g>
                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ padding: '19% 0' }}></div>
                      <p style={{
                        color: '#c9c8cd',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        lineHeight: '17px',
                        marginBottom: 0,
                        marginTop: 8,
                        overflow: 'hidden',
                        padding: '8px 0 7px',
                        textAlign: 'center',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        <a
                          href="https://www.instagram.com/reel/DSoAIEhEkPq/?igsh=dTM1MmZ2dTVnemI4"
                          style={{
                            color: '#c9c8cd',
                            fontFamily: 'Arial,sans-serif',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '17px',
                            textDecoration: 'none'
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View this post on Instagram
                        </a>
                      </p>
                    </a>
                  </div>
                </blockquote>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-800 mb-6">
                  Experience the luxury and beauty of Altitude Retreat through this immersive video tour. 
                  See the stunning mountain views, spacious interiors, and world-class amenities that make 
                  this property the ultimate Whistler retreat. From the fully equipped gym to the private 
                  hot tub surrounded by nature, discover why Altitude Retreat is the perfect choice for 
                  your next mountain getaway.
                </p>
                <p className="text-gray-800">
                  This exclusive property offers unparalleled privacy and convenience, with direct 
                  ski-in/ski-out access through the private Kadenwood gondola. Whether you're planning 
                  a family vacation, corporate retreat, or special celebration, Altitude Retreat provides 
                  the perfect setting for an unforgettable experience.
                </p>
              </div>
            </div>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[3/4] mb-2">
                  <img
                    src="/photos/properties/Altitude New Photos Best/tall1.jpg"
                    alt="Altitude Retreat Interior"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
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
                  This magnificent 10,000 sq.ft interior has 7 bedrooms and 5.5
                  bathrooms. This one-of-a-kind hideaway has features such as a
                  library, luxurious in-home gym, sauna, and ski/board mud room.
                  560 sq.ft of deck and balcony space and 800 sq ft of outdoor
                  living space with your own private forest and stunning garden
                  setting. This high end residence has a fully equipped gym, a
                  soothing hot tub, and is surrounded by trees for maximum
                  solitude. Altitude Retreat is perfect for an unforgettable
                  Whistler vacation.
                </p>
                <p className="text-gray-800 mb-6">
                  <span className="font-bold">Private Butler included:</span> In
                  addition to serving breakfast, lunch, and dinner, the butler
                  is responsible for all food and drink service throughout the
                  day. To create the perfect ambiance, they will set up the hot
                  tub, light the fire, and adjust the music and household
                  functions. Get your daily dose of caffeine from your own
                  personal barista. Overall, the butler is there to make your
                  stay as smooth and comfortable as possible.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[3/4] mb-2">
                  <img
                    src="/photos/properties/Altitude New Photos Best/tall2.jpg"
                    alt="Altitude Retreat Bedroom"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
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

                <p className="font-bold mb-2">
                  Upper Level: (3 Bedrooms - sleeps 10)
                </p>
                <p className="mb-4">
                  Master bedroom with king bed and ensuite bathroom with large
                  walk in shower and stand alone bath tub, 12' x 15'
                  walk ensuite walk-in closet. Master Bedroom has a large TV and
                  fireplace, with stunning mountain views. Behind the master
                  bedroom, is the bunk house with 3 queen beds with a large
                  smart TV, spacious games table with a balcony. Access to these
                  room is through the master bedroom and shares the spacious
                  bathroom. Additional large bedroom with king bed, and en suite
                  bathroom on upper floor located at the other end of the
                  corridor.
                </p>

                <p className="font-bold mb-2">
                  Main Level: (2 Bedrooms - Sleeps 4)
                </p>
                <p className="mb-4">
                  Large bedroom equipped with King Bed and Private Balcony
                  Office fireplace and large view windows and bookshelves.
                  Additional queen bed with closet on this main floor. Main
                  floor bedrooms can use the powder room bathroom plus the
                  shower next to the gym (gym on lower level) if needed. Main
                  floor has 2 bedrooms, sleeps 4. Main floor has a living area,
                  fully equipped kitchen and dining area. Main floor level
                  garage is currently not in service.
                </p>
                <p className="mb-4">
                  <span className="italic">
                    (Optional): Additional twin bed can be rented and arranged
                    in the office for a private sleeping room for 1 guest.
                  </span>
                </p>

                <p className="font-bold mb-2">
                  Lower Level: (2 Bedrooms - Sleeps 4)
                </p>
                <p className="mb-4">
                  Two large master bedrooms with king beds and ensuite bathrooms
                  Lower Level also contains an equipped gym and sauna.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Total Sleeping Capacity:</span>{" "}
                  18 (10 + 4 + 4) Sleeps 18, 7 bedrooms
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
              <div className="relative aspect-[4/3] mb-6 max-w-3xl">
                <img
                  src="/photos/properties/Altitude New Photos Best/4.jpg"
                  alt="Altitude Retreat Location"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-800 max-w-4xl mb-6">
                Extraordinary retreat located on a private park-like setting
                that offers fantastic ski-in/ski-out access to Whistler Mountain
                via your private residents-only Kadenwood gondola.
              </p>
              <p className="text-gray-800 max-w-4xl">
                Take the 5-minute gondola ride, a 5-minute drive, or a quick ski
                ride down will bring you to all the amenities in Creekside
                Village. Take advantage of some of Whistler's best
                restaurants and shops. Enjoy quality coffee and delicious breads
                and pastries at Rockit Coffee and Bred. Red Door Bistro, Rimrock
                Cafe, Cure Lounge (my favorite), Creekbread, and Dusty's.
                Enjoy Creekside's newest restaurant Mekong, this
                fine-dining Thai restaurant and gorgeous patio is a local
                favorite. Tuck into delicious authentic food and imaginative
                cocktails. Shop at 122 West for beautiful home decor and
                Abigail's for stylish clothing. The Cop-Op gas station in
                Creekside has a convenience store and is open until 10 pm. For
                groceries, the Creekside Market is also within walking distance.
                Included when booking this property, we will help you with all
                your VIP experiences such as coordinating chefs, chalet
                hosts/servers, helicopter experiences, transportation to and
                from the airport, snowmobiling, restaurant reservations and
                recommendations, hiking recommendations, and more.
              </p>
            </div>

            {/* Amenities Section */}
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
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Exclusive Experience</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative aspect-[3/4] mb-4">
                    <img
                      src="/photos/properties/Altitude New Photos Best/tall3.jpg"
                      alt="Altitude Retreat Experience"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-800 mb-6">
                    Experience the ultimate in luxury and privacy at Altitude Retreat. Our dedicated concierge team is available to arrange any service you might need during your stay, from private chefs to in-home spa treatments, ensuring your Whistler experience is truly exceptional.
                  </p>
                  <p className="text-gray-800">
                    The property's exclusive location in Kadenwood offers the perfect balance of seclusion and convenience, with easy access to Whistler's world-class amenities. Whether you're visiting in winter for the legendary skiing or in summer for mountain biking and hiking, Altitude Retreat provides the perfect base for your mountain adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Altitude Retreat - All Photos
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
                aria-label="Close gallery"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <img
                        src={photo}
                        alt={`Altitude Retreat ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading={index < 8 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Full-screen Photo View */}
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
                <img
                  src={photos[selectedPhotoIndex]}
                  alt={`Property full view ${selectedPhotoIndex + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={handleImageLoad}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default AltitudeRetreat;
