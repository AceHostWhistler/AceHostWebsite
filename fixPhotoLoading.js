const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all property listing files
const files = [
  ...glob.sync('src/pages/listings/*/index.tsx'),
  ...glob.sync('src/pages/worldwide-listings/*/index.tsx')
];

const fixedCount = { total: 0, updated: 0 };

files.forEach(file => {
  try {
    fixedCount.total++;
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix 1: Fix handlePhotoClick to set isImageLoading to true
    if (content.includes('const handlePhotoClick = (index: number)') && 
        !content.includes('handlePhotoClick') && 
        !content.match(/handlePhotoClick[^]*setIsImageLoading\s*\(\s*true\s*\)/s)) {
      
      const replaced = content.replace(
        /(const\s+handlePhotoClick\s*=\s*\(\s*index\s*:\s*number\s*\)\s*=>\s*\{)([^]*?)(\s*setSelectedPhotoIndex)/s,
        '$1\n    setIsImageLoading(true);$2$3'
      );
      
      if (replaced !== content) {
        content = replaced;
        modified = true;
        console.log(`Fixed handlePhotoClick in ${file}`);
      }
    }

    // Fix 2: Add isImageLoading state if it doesn't exist
    if (!content.includes('[isImageLoading, setIsImageLoading]') && 
        (content.includes('selectedPhotoIndex !== null'))) {
      const replaced = content.replace(
        /(const\s+\[\s*selectedPhotoIndex\s*,\s*setSelectedPhotoIndex\s*\]\s*=\s*useState\s*<\s*number\s*\|\s*null\s*>\s*\(\s*null\s*\);)/,
        '$1\n  const [isImageLoading, setIsImageLoading] = useState(false);'
      );
      
      if (replaced !== content) {
        content = replaced;
        modified = true;
        console.log(`Added isImageLoading state in ${file}`);
      }
    }

    // Fix 3: Add handleImageLoad function if it doesn't exist
    if (!content.includes('const handleImageLoad =') && 
        content.includes('selectedPhotoIndex !== null')) {
      const replaced = content.replace(
        /(const\s+closeFullScreenPhoto\s*=\s*\(\s*\)\s*=>\s*\{[^}]*\};)/s,
        '$1\n\n  const handleImageLoad = () => {\n    setIsImageLoading(false);\n  };'
      );
      
      if (replaced !== content) {
        content = replaced;
        modified = true;
        console.log(`Added handleImageLoad function in ${file}`);
      }
    }

    // Fix 4: Fix navigatePhoto to set isImageLoading to true
    if (content.includes('const navigatePhoto = (direction:') && 
        !content.match(/navigatePhoto[^]*setIsImageLoading\s*\(\s*true\s*\)/s)) {
      
      const replaced = content.replace(
        /(const\s+navigatePhoto\s*=\s*\(\s*direction\s*:\s*"prev"\s*\|\s*"next"\s*\)\s*=>\s*\{)(\s*if\s*\(\s*selectedPhotoIndex\s*===\s*null\s*\)\s*return;)/s,
        '$1$2\n\n    setIsImageLoading(true);'
      );
      
      if (replaced !== content) {
        content = replaced;
        modified = true;
        console.log(`Fixed navigatePhoto in ${file}`);
      }
    }

    // Fix 5: Add loading spinner to full-screen photo view if it doesn't exist
    if (content.includes('selectedPhotoIndex !== null') && 
        !content.includes('isImageLoading &&') && 
        content.includes('max-w-6xl max-h-[80vh]')) {
      
      const replaced = content.replace(
        /(<div\s+className="relative\s+w-full\s+h-full\s+max-w-6xl\s+max-h-\[80vh\]\s+mx-auto\s+px-4">)(?!\s*\{isImageLoading)/s,
        '$1\n              {isImageLoading && (\n                <div className="absolute inset-0 flex items-center justify-center z-10">\n                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>\n                </div>\n              )}'
      );
      
      if (replaced !== content) {
        content = replaced;
        modified = true;
        console.log(`Added loading spinner in ${file}`);
      }
    }

    // Fix 6: Add proper className and onLoadingComplete to Image in full-screen view
    if (content.includes('selectedPhotoIndex !== null') && 
        (content.includes('<Image') && content.includes('fill') && 
        !content.includes('onLoadingComplete={handleImageLoad}'))) {
      
      const imgPattern = new RegExp('<Image\\s+[^>]*?src=\\{(?:photos|images)\\[selectedPhotoIndex\\][^>]*?fill[^>]*?>', 's');
      const match = content.match(imgPattern);
      
      if (match) {
        let imgTag = match[0];
        
        // Check if the image already has the proper attributes
        if (!imgTag.includes('onLoadingComplete={handleImageLoad}')) {
          const updatedImgTag = imgTag.replace(
            /(fill)([^>]*?>)/,
            '$1\n                  priority\n                  className={`object-contain transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}\n                  sizes="100vw"\n                  onLoadingComplete={handleImageLoad}\n                  quality={85}\n                  loading="eager"$2'
          );
          
          if (updatedImgTag !== imgTag) {
            content = content.replace(imgTag, updatedImgTag);
            modified = true;
            console.log(`Fixed Image component in ${file}`);
          }
        }
      }
    }

    // If any changes were made, write the file
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      fixedCount.updated++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
});

console.log(`\nFixed ${fixedCount.updated} of ${fixedCount.total} property files.`); 