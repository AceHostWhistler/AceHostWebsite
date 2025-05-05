const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Paths to search for property listing files
const listingsDirs = [
  path.join(__dirname, '..', 'src', 'pages', 'listings'),
  path.join(__dirname, '..', 'src', 'pages', 'worldwide-listings')
];

// Function to process a file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check for files using videoRef
    const hasVideoRef = content.includes('videoRef = useRef<HTMLVideoElement>') || 
                       content.includes('videoRef = useRef<HTMLIFrameElement>');
    
    // Keep the useRef import only if videoRef is actually used in the component
    if (hasVideoRef && !content.includes('import React, { useRef }')) {
      content = content.replace(
        /import React.*/,
        'import React, { useRef } from "react";'
      );
      modified = true;
    } else if (!hasVideoRef && content.includes('import React, { useRef }')) {
      content = content.replace(
        /import React, { useRef } from "react";/,
        'import React from "react";'
      );
      modified = true;
    }
    
    // Remove references to isImageLoading and other leftovers
    const leftovers = [
      /\$\{isImageLoading \? "opacity-0" : "opacity-100"\}/g,
      /\$\{isImageLoading \? 'opacity-0' : 'opacity-100'\}/g,
      /{isImageLoading && \(/g,
      /className=\{`object-contain transition-opacity duration-300 \$\{isImageLoading \? (?:"|')opacity-0(?:"|') : (?:"|')opacity-100(?:"|')\}`\}/g,
      /\bonLoadingComplete\s*=\s*\{\s*handleImageLoad\s*\}/g,
      /setIsImageLoading\(true\);/g,
      /setIsImageLoading\(false\);/g,
      /onTouchStart\s*=\s*\{\s*handleTouchStart\s*\}/g,
      /onTouchMove\s*=\s*\{\s*handleTouchMove\s*\}/g,
      /onTouchEnd\s*=\s*\{\s*handleTouchEnd\s*\}/g,
      /onClick\s*=\s*\{\s*\(\)\s*=>\s*navigatePhoto\s*\([^)]*\)\s*\}/g,
      /onClick\s*=\s*\{\s*closeFullScreenPhoto\s*\}/g,
      /onClick\s*=\s*\{\s*closeAllPhotos\s*\}/g,
      /onClick\s*=\s*\{\s*\(\)\s*=>\s*setShowAllPhotos\s*\([^)]*\)\s*\}/g,
      /onClick\s*=\s*\{\s*\(\)\s*=>\s*handlePhotoClick\s*\([^)]*\)\s*\}/g,
      /selectedPhotoIndex \+ 1/g
    ];
    
    leftovers.forEach(pattern => {
      if (pattern.test(content)) {
        if (pattern.toString().includes('isImageLoading')) {
          content = content.replace(pattern, 'true ? "opacity-100" : "opacity-0"');
        } else if (pattern.toString().includes('className')) {
          content = content.replace(pattern, 'className="object-contain"');
        } else if (pattern.toString().includes('onClick')) {
          content = content.replace(pattern, '');
        } else if (pattern.toString().includes('onTouch')) {
          content = content.replace(pattern, '');
        } else if (pattern.toString().includes('onLoadingComplete')) {
          content = content.replace(pattern, '');
        } else if (pattern.toString().includes('setIsImageLoading')) {
          content = content.replace(pattern, '');
        } else if (pattern.toString().includes('selectedPhotoIndex')) {
          content = content.replace(pattern, '1');
        } else {
          content = content.replace(pattern, '');
        }
        modified = true;
      }
    });
    
    // Remove any remaining Modal code related to photos
    const galleryModals = [
      /{\/\* Photos Modal [\s\S]*?<\/div>\s*\)\s*}/g,
      /{\/\* Full Screen Photo [\s\S]*?<\/div>\s*\)\s*}/g,
      /{\/\* Full-screen Photo [\s\S]*?<\/div>\s*\)\s*}/g,
      /{showAllPhotos && \([\s\S]*?<\/div>\s*\)\s*}/g,
      /{selectedPhotoIndex !== null && \([\s\S]*?<\/div>\s*\)\s*}/g
    ];
    
    galleryModals.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        modified = true;
      }
    });
    
    // Write the changes back to the file if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  Updated: ${filePath}`);
    } else {
      console.log(`  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Delete any backup files from previous operations
function cleanupBackupFiles() {
  listingsDirs.forEach(dir => {
    const pattern = path.join(dir, '**', '*.tsx.bak');
    const files = glob.sync(pattern);
    files.forEach(file => {
      console.log(`Deleting backup file: ${file}`);
      fs.unlinkSync(file);
    });
  });
}

// Find all property files and process them
listingsDirs.forEach(dir => {
  const pattern = path.join(dir, '**', 'index.tsx');
  const files = glob.sync(pattern);
  
  files.forEach(file => {
    processFile(file);
  });
});

// Clean up backup files
cleanupBackupFiles();

console.log('Property gallery fixes completed!'); 