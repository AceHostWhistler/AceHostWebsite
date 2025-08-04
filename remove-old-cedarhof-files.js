const fs = require('fs');
const path = require('path');

// Define directories
const sourceDir = path.join(__dirname, 'public/photos/properties/Cedarhof Kadenwood');
const optimizedDir = path.join(__dirname, 'public/optimized/cedarhof');

// Get all files that start with AC2932
const getACFiles = (dir) => {
  return fs.readdirSync(dir).filter(file => {
    return file.startsWith('AC2932') && (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'));
  });
};

// Delete files
const deleteFiles = (files, directory) => {
  for (const file of files) {
    const filePath = path.join(directory, file);
    try {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${file} from ${directory}`);
    } catch (error) {
      console.error(`Error deleting ${file}:`, error);
    }
  }
};

// Main function
const main = () => {
  // Get files to delete (files starting with AC2932)
  const sourcesToDelete = getACFiles(sourceDir);
  const optimizedToDelete = getACFiles(optimizedDir);
  
  console.log(`Found ${sourcesToDelete.length} old files in source directory to delete`);
  console.log(`Found ${optimizedToDelete.length} old files in optimized directory to delete`);
  
  // Delete the files
  deleteFiles(sourcesToDelete, sourceDir);
  deleteFiles(optimizedToDelete, optimizedDir);
  
  console.log('Cleanup complete!');
};

// Execute the script
main(); 