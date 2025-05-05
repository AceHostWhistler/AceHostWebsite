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
    
    // Skip if already using PropertyGallery
    if (content.includes('import PropertyGallery from')) {
      console.log(`  Already updated: ${filePath}`);
      return;
    }
    
    // Extract property name from the file path
    const propertyName = path.basename(path.dirname(filePath));
    
    // Add import for PropertyGallery
    if (!content.includes('import PropertyGallery')) {
      content = content.replace(
        /import Navigation from "@\/components\/Navigation";/,
        'import Navigation from "@/components/Navigation";\nimport PropertyGallery from "@/components/PropertyGallery";'
      );
    }
    
    // Remove unused imports if they exist
    content = content.replace(/import { X } from "lucide-react";/, '');
    
    // Convert React.useState to useState if needed
    content = content.replace(/import React, { useState.*} from "react";/, 'import React from "react";');
    
    // Remove state variables related to photo gallery
    content = content.replace(
      /const \[\s*showAllPhotos\s*,\s*setShowAllPhotos\s*\]\s*=\s*useState\s*\(\s*false\s*\);[\s\S]*?const \[\s*touchEndX\s*,\s*setTouchEndX\s*\]\s*=\s*useState\s*<number \| null>\s*\(\s*null\s*\);/,
      ''
    );
    
    // Remove all the handler functions related to photos
    content = content.replace(
      /const handlePhotoClick[\s\S]*?React\.useEffect\(\s*\(\)\s*=>\s*\{[\s\S]*?\}\s*,\s*\[\s*showAllPhotos\s*,\s*selectedPhotoIndex\s*\]\s*\);/,
      ''
    );
    
    // Replace the photo grid with PropertyGallery component
    content = content.replace(
      /{\/\* Photo Grid \*\/}[\s\S]*?{\/\* Property Description \*\/}/,
      '{/* Photo Gallery */}\n          <PropertyGallery photos={photos} propertyName="' + propertyName.replace(/-/g, ' ').replace(/\/index$/, '') + '" />\n\n          {/* Property Description */}'
    );
    
    // Remove All Photos Modal and Full Screen Photo Modal
    content = content.replace(
      /{\/\* All Photos Modal \*\/}[\s\S]*?{\/\* Full[\s\S]*?Modal \*\/}[\s\S]*?<\/div>\s*\)\s*}\s*/,
      ''
    );
    
    // Write the changes back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Find all property files and process them
listingsDirs.forEach(dir => {
  const pattern = path.join(dir, '**', 'index.tsx');
  const files = glob.sync(pattern);
  
  files.forEach(file => {
    processFile(file);
  });
});

console.log('Property gallery update script completed!'); 