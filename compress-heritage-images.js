const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, 'public/photos/properties/2919 Heritage');
const targetDir = path.join(__dirname, 'public/optimized/2919-Heritage');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Get all jpg files in the source directory
const files = fs.readdirSync(sourceDir).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

// Process each file
async function processImages() {
  console.log(`Found ${files.length} images to process`);
  
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file.replace(/\s+/g, '-'));
    
    console.log(`Processing: ${file}`);
    
    try {
      // Compress and optimize the image while maintaining quality
      await sharp(sourcePath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(targetPath);
      
      console.log(`Optimized: ${file} -> ${path.basename(targetPath)}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  // Create a cover image with special optimization
  const coverSource = path.join(sourceDir, '2919HeritagePeaks13.jpg');
  const coverTarget = path.join(targetDir, 'cover.jpg');
  
  try {
    await sharp(coverSource)
      .jpeg({ quality: 90, progressive: true })
      .toFile(coverTarget);
    
    console.log('Created cover image');
  } catch (error) {
    console.error('Error creating cover image:', error);
  }

  // Create special images for the description section
  const specialImages = ['2919HeritagePeaks51.jpg', '2919HeritagePeaks33.jpg', '2919HeritagePeaks28.jpg', '2919HeritagePeaks22.jpg'];
  
  for (const [index, file] of specialImages.entries()) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, `description-${index + 1}.jpg`);
    
    try {
      await sharp(sourcePath)
        .jpeg({ quality: 90, progressive: true })
        .toFile(targetPath);
      
      console.log(`Created description image ${index + 1}`);
    } catch (error) {
      console.error(`Error creating description image ${index + 1}:`, error);
    }
  }
}

processImages().then(() => {
  console.log('Image processing complete!');
}).catch(err => {
  console.error('Error in image processing:', err);
});