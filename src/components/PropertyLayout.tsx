import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Users, Bed, Bath, Home, MapPin } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import { PropertyInfo, PropertyPhoto } from '../types/property';

interface PropertyLayoutProps {
  propertyInfo: PropertyInfo;
}

export const PropertyLayout: React.FC<PropertyLayoutProps> = ({ propertyInfo }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
    setShowAllPhotos(true);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
    setShowAllPhotos(false);
  };

  const navigatePhoto = useCallback((direction: 'prev' | 'next') => {
    if (selectedPhotoIndex === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedPhotoIndex - 1 + propertyInfo.photos.length) % propertyInfo.photos.length
      : (selectedPhotoIndex + 1) % propertyInfo.photos.length;
    
    setSelectedPhotoIndex(newIndex);
    setIsLoading(true);
  }, [selectedPhotoIndex, propertyInfo.photos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      
      if (e.key === "ArrowLeft") {
        navigatePhoto("prev");
      } else if (e.key === "ArrowRight") {
        navigatePhoto("next");
      } else if (e.key === "Escape") {
        closeFullScreenPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, navigatePhoto]);

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
        <title>{propertyInfo.title} | Ace Host</title>
        <meta name="description" content={`${propertyInfo.description} Located in Whistler, this ${propertyInfo.bedrooms} bedroom property accommodates ${propertyInfo.guests} guests. Nightly rates from ${propertyInfo.priceRange}.`} />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {propertyInfo.photos.slice(0, 5).map((photo, index) => (
              <div 
                key={photo.src}
                className={`relative cursor-pointer transition-transform hover:scale-[1.02] ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => handlePhotoClick(index)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="rounded-lg object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowAllPhotos(true)}
            className="mb-8 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Show all photos
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{propertyInfo.title}</h1>
              <p className="text-gray-600 mb-6">{propertyInfo.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <p className="font-semibold">Guests</p>
                  <p>{propertyInfo.guests}</p>
                </div>
                <div>
                  <p className="font-semibold">Bedrooms</p>
                  <p>{propertyInfo.bedrooms}</p>
                </div>
                <div>
                  <p className="font-semibold">Beds</p>
                  <p>{propertyInfo.beds}</p>
                </div>
                <div>
                  <p className="font-semibold">Bathrooms</p>
                  <p>{propertyInfo.bathrooms}</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Space</h2>
                <p className="mb-4">{propertyInfo.spaceDetails.description}</p>
                <ul className="list-disc list-inside">
                  {propertyInfo.spaceDetails.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Bedroom Layout</h2>
                <p className="mb-4">{propertyInfo.bedroomLayout.description}</p>
                {propertyInfo.bedroomLayout.rooms.map((room, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold">{room.name}</h3>
                    <p>{room.description}</p>
                    <ul className="list-disc list-inside">
                      {room.beds.map((bed, bedIndex) => (
                        <li key={bedIndex}>{bed}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Location</h2>
                <p>{propertyInfo.location.description}</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Pricing</h3>
                  <p className="mb-1">Regular: {propertyInfo.priceRange}</p>
                  <p className="mb-1">Winter: {propertyInfo.winterPriceRange}</p>
                  <p className="mb-1">Holiday: {propertyInfo.holidayPriceRange}</p>
                  <p className="text-sm text-gray-600">Minimum stay: {propertyInfo.minimumStay}</p>
                </div>

                <Link
                  href={propertyInfo.airbnbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-[#FF5A5F] text-white rounded hover:bg-[#FF385F] transition-colors"
                >
                  Book on Airbnb
                </Link>
              </div>
            </div>
          </div>
        </main>

        {showAllPhotos && (
          <div className="fixed inset-0 bg-black z-50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {selectedPhotoIndex !== null && (
                <>
                  <button
                    onClick={() => navigatePhoto('prev')}
                    className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
                  >
                    ←
                  </button>
                  <Image
                    src={propertyInfo.photos[selectedPhotoIndex].src}
                    alt={propertyInfo.photos[selectedPhotoIndex].alt}
                    width={propertyInfo.photos[selectedPhotoIndex].width}
                    height={propertyInfo.photos[selectedPhotoIndex].height}
                    className={`max-h-[90vh] w-auto transition-opacity duration-300 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoadingComplete={() => setIsLoading(false)}
                  />
                  <button
                    onClick={() => navigatePhoto('next')}
                    className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
                  >
                    →
                  </button>
                </>
              )}
            </div>
            <button
              onClick={closeFullScreenPhoto}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            >
              ×
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {selectedPhotoIndex !== null && (
                <p>{selectedPhotoIndex + 1} / {propertyInfo.photos.length}</p>
              )}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default PropertyLayout; 