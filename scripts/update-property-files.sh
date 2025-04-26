#!/bin/bash

# First, ensure all files have the necessary imports
./scripts/update-property-headers.sh

# Function to update a property file
update_property_file() {
  local file=$1
  local filename=$(basename "$(dirname "$file")")
  local title=$(echo "$filename" | tr '-' ' ' | sed -e 's/\b\(.\)/\u\1/g')
  
  # Add image loading states
  if ! grep -q "isImageLoading" "$file"; then
    sed -i '' '/const \[selectedPhotoIndex/a\
  const [isImageLoading, setIsImageLoading] = useState(false);\
  const [touchStartX, setTouchStartX] = useState<number | null>(null);\
  const [touchEndX, setTouchEndX] = useState<number | null>(null);' "$file"
  fi
  
  # Update handlePhotoClick function
  sed -i '' '/const handlePhotoClick/c\
  const handlePhotoClick = (index: number) => {\
    setIsImageLoading(true);\
    setSelectedPhotoIndex(index);\
  };' "$file"
  
  # Add image loading handler
  if ! grep -q "handleImageLoad" "$file"; then
    sed -i '' '/const handlePhotoClick/a\
  const handleImageLoad = () => {\
    setIsImageLoading(false);\
  };' "$file"
  fi
  
  # Add touch handlers
  if ! grep -q "handleTouchStart" "$file"; then
    sed -i '' '/const handleImageLoad/a\
  const handleTouchStart = (e: React.TouchEvent) => {\
    setTouchStartX(e.touches[0].clientX);\
    setTouchEndX(null);\
  };\
\
  const handleTouchMove = (e: React.TouchEvent) => {\
    setTouchEndX(e.touches[0].clientX);\
  };\
\
  const handleTouchEnd = () => {\
    if (!touchStartX || !touchEndX) return;\
    \
    const difference = touchStartX - touchEndX;\
    \
    if (Math.abs(difference) > 50) {\
      if (difference > 0) {\
        navigatePhoto("next");\
      } else {\
        navigatePhoto("prev");\
      }\
    }\
    \
    setTouchStartX(null);\
    setTouchEndX(null);\
  };' "$file"
  fi
  
  # Update photo grid section
  sed -i '' '/<div className="grid/c\
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">' "$file"
  
  # Update Image component props
  sed -i '' 's/className="object-cover"/className="object-cover hover:scale-105 transition-transform duration-300"/g' "$file"
  sed -i '' '/priority={index < 4}/c\
                    priority={index < 2}\
                    loading={index < 2 ? "eager" : "lazy"}\
                    quality={index < 4 ? 85 : 75}\
                    placeholder="blur"\
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzIyMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMzMiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4="' "$file"
  
  # Update full-screen photo view
  sed -i '' '/{selectedPhotoIndex !== null/,/}/c\
        {selectedPhotoIndex !== null && (\
          <div \
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center"\
            onTouchStart={handleTouchStart}\
            onTouchMove={handleTouchMove}\
            onTouchEnd={handleTouchEnd}\
          >\
            <div className="absolute top-4 right-4 flex space-x-4">\
              <button\
                onClick={closeFullScreenPhoto}\
                className="text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"\
                aria-label="Close"\
              >\
                <X className="h-6 w-6" />\
              </button>\
            </div>\
\
            <button\
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"\
              onClick={() => navigatePhoto("prev")}\
              aria-label="Previous photo"\
            >\
              &larr;\
            </button>\
\
            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">\
              {isImageLoading && (\
                <div className="absolute inset-0 flex items-center justify-center z-10">\
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>\
                </div>\
              )}\
              <div className="relative w-full h-full">\
                <Image\
                  src={photos[selectedPhotoIndex]}\
                  alt={`Property full view ${selectedPhotoIndex + 1}`}\
                  fill\
                  priority\
                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}\
                  sizes="100vw"\
                  onLoadingComplete={handleImageLoad}\
                  quality={85}\
                  loading="eager"\
                />\
              </div>\
            </div>\
\
            <button\
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-20"\
              onClick={() => navigatePhoto("next")}\
              aria-label="Next photo"\
            >\
              &rarr;\
            </button>\
\
            <div className="absolute bottom-4 left-0 right-0 text-center z-20">\
              <p className="text-white text-sm bg-black bg-opacity-50 inline-block px-4 py-2 rounded-full">\
                {selectedPhotoIndex + 1} / {photos.length}\
              </p>\
            </div>\
          </div>\
        )}' "$file"
  
  echo "Updated $file"
}

# Find all property listing files and update them
find src/pages/listings src/pages/worldwide-listings src/pages/vancouver-listings -type f -name "index.tsx" | while read -r file; do
  update_property_file "$file"
done

echo "
Next steps:
1. Review each property listing file
2. Update PropertyHeader component with correct props:
   - title
   - guests
   - bedrooms
   - beds
   - bathrooms
   - priceRange
   - airbnbLink (optional)
3. Verify photo grid implementation
4. Test image loading and navigation
" 