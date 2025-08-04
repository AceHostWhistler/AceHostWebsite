const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directories
const sourceDir = path.join(__dirname, 'public/photos/properties/Cedarhof Kadenwood');
const targetDir = path.join(__dirname, 'public/optimized/cedarhof');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Get all source files
const getSourceFiles = () => {
  return fs.readdirSync(sourceDir).filter(file => {
    return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png');
  });
};

// Optimize and save an image
const optimizeImage = async (filename) => {
  const inputPath = path.join(sourceDir, filename);
  const outputPath = path.join(targetDir, filename);

  try {
    console.log(`Optimizing: ${filename}`);
    await sharp(inputPath)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(outputPath);
    console.log(`Done: ${filename}`);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
};

// Main function
const main = async () => {
  const files = getSourceFiles();
  const newFiles = files.filter(file => file.match(/^\d+\s-\s/));
  
  console.log(`Found ${files.length} total files, ${newFiles.length} are new files.`);
  
  // Process all images sequentially to avoid memory issues
  for (const file of newFiles) {
    await optimizeImage(file);
  }
  
  console.log('All new images have been optimized!');
};

// Execute the script
main().catch(err => console.error('Error in main process:', err)); 