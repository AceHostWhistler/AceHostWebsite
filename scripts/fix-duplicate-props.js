const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate props in a file
function fixDuplicateProps(filePath) {
  try {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has duplicate image props
    const hasDuplicateProps = fileContent.includes('priority\n') && 
                             fileContent.includes('className=') && 
                             fileContent.includes('sizes=') && 
                             fileContent.includes('onLoadingComplete=') && 
                             fileContent.includes('quality=') && 
                             fileContent.includes('loading=');
    
    if (!hasDuplicateProps) {
      console.log(`No duplicate props found in ${filePath}`);
      return false;
    }
    
    // Regular expression to find the image component with duplicate props
    const imageRegex = /<Image[\s\S]*?src={[^}]+}[\s\S]*?alt={[^}]+}[\s\S]*?fill[\s\S]*?priority[\s\S]*?className={[^}]+}[\s\S]*?sizes="[^"]*"[\s\S]*?onLoadingComplete={[^}]+}[\s\S]*?quality={[^}]+}[\s\S]*?loading="[^"]*"[\s\S]*?(sizes|className|loading|onLoadingComplete)=[\s\S]*?\/>/g;
    
    // Regular expression to remove duplicate props
    const fixedContent = fileContent.replace(imageRegex, (match) => {
      // Keep only the first occurrence of each prop
      let seenProps = new Set();
      const lines = match.split('\n');
      const filteredLines = lines.filter(line => {
        // Extract the prop name
        const propMatch = line.match(/\s+(\w+)=/);
        if (!propMatch) return true;
        
        const propName = propMatch[1];
        if (seenProps.has(propName)) {
          return false; // Skip this line as the prop has been seen before
        }
        
        seenProps.add(propName);
        return true;
      });
      
      return filteredLines.join('\n');
    });
    
    // Write the fixed content back to the file
    if (fileContent !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed duplicate props in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// Find all property listing files
const listingsGlob = [
  'src/pages/listings/**/*.tsx',
  'src/pages/worldwide-listings/**/*.tsx'
];

let fixedFilesCount = 0;

// Process each glob pattern
listingsGlob.forEach(pattern => {
  const files = glob.sync(pattern);
  
  // Fix duplicate props in each file
  files.forEach(filePath => {
    const absolutePath = path.resolve(filePath);
    const wasFixed = fixDuplicateProps(absolutePath);
    if (wasFixed) {
      fixedFilesCount++;
    }
  });
});

console.log(`Fixed duplicate props in ${fixedFilesCount} files.`); 