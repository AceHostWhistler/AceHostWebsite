const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, 'public/photos/properties/303-Tyndall Lodge');
const targetDir = path.join(__dirname, 'public/optimized/303-Tyndall-Lodge');

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
  const coverSource = path.join(sourceDir, '02 - 20260107 A7M4 01 A1_03433.jpg');
  const coverTarget = path.join(targetDir, 'cover.jpg');
  
  try {
    await sharp(coverSource)
      .jpeg({ quality: 90, progressive: true })
      .toFile(coverTarget);
    
    console.log('Created cover image');
  } catch (error) {
    console.error('Error creating cover image:', error);
  }
}

processImages().then(() => {
  console.log('Image processing complete!');
}).catch(err => {
  console.error('Error in image processing:', err);
});