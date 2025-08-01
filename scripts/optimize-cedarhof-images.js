const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, '../public/photos/properties/Cedarhof Kadenwood');
const targetDir = path.join(__dirname, '../public/optimized/cedarhof');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// List of key images to optimize (in priority order)
const keyImages = [
  '2932-Ancient-Cedars-01-MLS.jpg',  // Cover photo
  '2932 Living Night 1.jpg',         // 2nd photo
  '2932 Bedroom 1A NEW.jpg',         // 3rd photo
  '2932 Living A NEW.jpg',           // 4th photo
  '2932-Ancient-Cedars-04-MLS.jpg',  // 5th photo
  '2932-Ancient-Cedars-06-MLS.jpg',  // 6th photo
  'AC2932 Living Dining.jpg',        // 7th photo
  'AC2932 Media Room B.jpg',         // 8th photo
  'AC2932 Hot Tub Pool B.jpg',       // 9th photo
  '2932 Pool A NEW.jpg',
  '2932 Pool B NEW.jpg',
  '2932 Pool C NEW.jpg',
  'AC2932 Kitchen A.jpg',
  'AC2932 Dining.jpg',
  'AC2932 Wine Room A.jpg',
  'AC2932 Bedroom 1A.jpg',
  '2932 Deck 1.jpg',
];

// Process all images in the directory
async function optimizeImages() {
  try {
    const files = fs.readdirSync(sourceDir);
    
    // Process key images first
    console.log('Optimizing key images...');
    for (const keyImage of keyImages) {
      if (files.includes(keyImage)) {
        await optimizeImage(keyImage);
      } else {
        console.warn(`Key image not found: ${keyImage}`);
      }
    }
    
    // Then process remaining images
    console.log('Optimizing remaining images...');
    for (const file of files) {
      if (!keyImages.includes(file) && file.endsWith('.jpg')) {
        await optimizeImage(file);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (err) {
    console.error('Error during image optimization:', err);
  }
}

async function optimizeImage(filename) {
  const sourcePath = path.join(sourceDir, filename);
  const targetPath = path.join(targetDir, filename);
  
  try {
    console.log(`Optimizing: ${filename}`);
    
    // Optimize different images differently based on their priority
    let quality = 80;
    let width = undefined;
    
    // Higher quality for key images
    if (keyImages.indexOf(filename) < 9) {
      quality = 85;
      // Main cover photo gets higher quality
      if (filename === '2932-Ancient-Cedars-01-MLS.jpg') {
        quality = 90;
      }
    } else {
      quality = 75;
    }
    
    // Resize very large images
    const metadata = await sharp(sourcePath).metadata();
    if (metadata.width > 2000) {
      width = 2000;
    }
    
    let pipeline = sharp(sourcePath)
      .jpeg({ quality, mozjpeg: true });
    
    if (width) {
      pipeline = pipeline.resize({ width, withoutEnlargement: true });
    }
    
    await pipeline.toFile(targetPath);
    
    console.log(`Optimized: ${filename}`);
  } catch (err) {
    console.error(`Error optimizing ${filename}:`, err);
  }
}

// Run the optimization
optimizeImages(); 