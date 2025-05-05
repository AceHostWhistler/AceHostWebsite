import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface PropertyGalleryProps {
  photos: string[];
  propertyName: string;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({
  photos,
  propertyName,
}) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const displayedPhotos = photos.slice(0, 28);

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
      } else if (showAllPhotos && e.key === 'Escape') {
        closeAllPhotos();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Lock body scroll when modal is open
    if (showAllPhotos || selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPhotoIndex, showAllPhotos]);

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
      {/* Photo Grid Display - Shows 28 photos in grid */}
      <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-4">
          {displayedPhotos.map((photo, index) => (
            <div
              key={index}
              className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
              onClick={() => handlePhotoClick(index)}
            >
              <Image
                src={photo}
                alt={`${propertyName} photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority={index < 2}
                loading={index < 4 ? "eager" : "lazy"}
                quality={index < 8 ? 85 : 75}
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

      {/* All Photos Modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
          <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
            <h2 className="text-lg sm:text-xl text-white font-medium">
              {propertyName} - All Photos
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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="mb-6">
                  <div
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={photo}
                      alt={`${propertyName} ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      priority={index < 4}
                      loading={index < 8 ? "eager" : "lazy"}
                      quality={index < 12 ? 85 : 75}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzIyMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMzMiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4="
                    />
                  </div>
                  <div className="mt-1 text-center">
                    <span className="text-white text-xs">
                      {index + 1} / {photos.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full-screen Photo View with Loading Circle */}
      {selectedPhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={closeFullScreenPhoto}
        >
          <div className="absolute top-4 right-4 flex space-x-4 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeFullScreenPhoto();
              }}
              className="text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto("prev");
            }}
            aria-label="Previous photo"
          >
            &larr;
          </button>

          <div 
            className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <div className="relative w-full h-full">
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`${propertyName} full view ${selectedPhotoIndex + 1}`}
                fill
                priority
                className={`object-contain transition-opacity duration-300 ${isImageLoading ? 'opacity-30' : 'opacity-100'}`}
                sizes="100vw"
                onLoadingComplete={handleImageLoad}
                quality={90}
                loading="eager"
              />
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto("next");
            }}
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
    </>
  );
};

export default PropertyGallery; 