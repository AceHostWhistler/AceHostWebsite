const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixDuplicateProps(filePath) {
  try {
    console.log(`Processing ${filePath}...`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has any of the problem patterns
    const hasDuplicateIssue = content.includes('sizes="100vw"\n') &&
                             content.includes('loading="eager"') && 
                             content.match(/className.*className/s) ||
                             content.match(/onLoadingComplete.*onLoadingComplete/s) ||
                             content.match(/priority.*priority/s) ||
                             content.match(/quality=.*quality=/s);
    
    if (!hasDuplicateIssue) {
      console.log(`  No duplicate props found in ${filePath}`);
      return false;
    }
    
    // Create a backup of the file
    fs.writeFileSync(`${filePath}.backup`, content, 'utf8');
    console.log(`  Created backup at ${filePath}.backup`);
    
    // Find Image component that contains selectedPhotoIndex
    const imageComponentPattern = /<Image[\s\S]*?src=\{[^}]*selectedPhotoIndex[^}]*\}[\s\S]*?\/>/;
    const match = content.match(imageComponentPattern);
    
    if (!match) {
      console.log(`  Could not find the Image component in ${filePath}`);
      return false;
    }
    
    const originalImageComponent = match[0];
    
    // Check for duplicate props
    const hasSizesDuplicate = originalImageComponent.match(/sizes=.*sizes=/s);
    const hasClassNameDuplicate = originalImageComponent.match(/className=.*className=/s);
    const hasLoadingDuplicate = originalImageComponent.match(/loading=.*loading=/s);
    const hasOnLoadingCompleteDuplicate = originalImageComponent.match(/onLoadingComplete=.*onLoadingComplete=/s);
    const hasPriorityDuplicate = originalImageComponent.match(/priority.*priority/s);
    const hasQualityDuplicate = originalImageComponent.match(/quality=.*quality=/s);
    
    if (!hasSizesDuplicate && !hasClassNameDuplicate && !hasLoadingDuplicate && 
        !hasOnLoadingCompleteDuplicate && !hasPriorityDuplicate && !hasQualityDuplicate) {
      console.log(`  No duplicate props found in the Image component in ${filePath}`);
      return false;
    }
    
    // Create a clean version of the component
    let lines = originalImageComponent.split('\n');
    let seenProps = {
      src: false,
      alt: false,
      fill: false,
      priority: false,
      className: false,
      sizes: false,
      onLoadingComplete: false,
      quality: false,
      loading: false
    };
    
    let cleanLines = [];
    
    for (let line of lines) {
      let skipLine = false;
      
      // Check for each prop
      for (let prop in seenProps) {
        const propRegex = new RegExp(`\\s+${prop}=|\\s+${prop}\\b`);
        if (propRegex.test(line)) {
          if (seenProps[prop]) {
            // Skip this line as we've seen this prop before
            skipLine = true;
            break;
          } else {
            seenProps[prop] = true;
          }
        }
      }
      
      if (!skipLine) {
        cleanLines.push(line);
      }
    }
    
    const cleanedImageComponent = cleanLines.join('\n');
    const newContent = content.replace(originalImageComponent, cleanedImageComponent);
    
    // Write the cleaned content back to the file
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`  Successfully fixed ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`  Error processing ${filePath}:`, error);
    return false;
  }
}

// Get all listing files
const listingPatterns = [
  'src/pages/listings/**/index.tsx',
  'src/pages/worldwide-listings/**/index.tsx'
];

let allFiles = [];
for (const pattern of listingPatterns) {
  const files = glob.sync(pattern);
  allFiles = [...allFiles, ...files];
}

console.log(`Found ${allFiles.length} listing files.`);
let fixedCount = 0;

// Process each file
for (const file of allFiles) {
  const wasFixed = fixDuplicateProps(file);
  if (wasFixed) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${allFiles.length} files.`);
console.log('Please check the build to ensure all issues are resolved.'); 