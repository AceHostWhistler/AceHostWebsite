const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate props in a file
function fixFile(filePath) {
  try {
    console.log(`Processing ${filePath}...`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find the line patterns with duplicate props
    const propPattern = /(<Image[^>]*?\n(?:.*?\n)*?.*?fill.*?\n)(?:.*?\n)*?(.*?priority.*?\n)(?:.*?\n)*?(.*?className=.*?\n)(?:.*?\n)*?(.*?sizes=.*?\n)(?:.*?\n)*?(.*?onLoadingComplete=.*?\n)(?:.*?\n)*?(.*?quality=.*?\n)(?:.*?\n)*?(.*?loading=.*?\n)(?:.*?\n)*(.*?(?:priority|className=|sizes=|onLoadingComplete=|quality=|loading=).*?\n)/g;
    
    // If file doesn't match the pattern, skip it
    if (!content.match(propPattern)) {
      console.log(`  No pattern match in ${filePath}`);
      return false;
    }
    
    // Create backup
    fs.writeFileSync(`${filePath}.backup`, content, 'utf8');
    
    // Replace the pattern with a clean version
    const fixedContent = content.replace(propPattern, (match, start, priority, className, sizes, onLoadingComplete, quality, loading, duplicates) => {
      return start + priority + className + sizes + onLoadingComplete + quality + loading;
    });
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log(`  Successfully fixed ${filePath}`);
    return true;
  } catch (error) {
    console.error(`  Error processing ${filePath}:`, error);
    return false;
  }
}

// Get all listing files
const listingPatterns = [
  'src/pages/listings/**/*.tsx',
  'src/pages/worldwide-listings/**/*.tsx'
];

let allFiles = [];
listingPatterns.forEach(pattern => {
  const files = glob.sync(pattern);
  allFiles = [...allFiles, ...files];
});

console.log(`Found ${allFiles.length} files to check.`);

// Simple replacement approach for all files
let fixCount = 0;
allFiles.forEach(file => {
  // Read the file
  const absolutePath = path.resolve(file);
  const content = fs.readFileSync(absolutePath, 'utf8');
  
  // Create a backup
  fs.writeFileSync(`${absolutePath}.backup`, content, 'utf8');
  
  // Replace multiple instances of common props with single instances
  let fixedContent = content;
  
  // Search for patterns where props are duplicated
  const duplicateProps = [
    { prop: 'className=', regex: /(className={[^}]*})([\s\S]*?className=)/g },
    { prop: 'sizes=', regex: /(sizes="[^"]*")([\s\S]*?sizes=)/g },
    { prop: 'onLoadingComplete=', regex: /(onLoadingComplete={[^}]*})([\s\S]*?onLoadingComplete=)/g },
    { prop: 'quality=', regex: /(quality={[^}]*})([\s\S]*?quality=)/g },
    { prop: 'loading=', regex: /(loading="[^"]*")([\s\S]*?loading=)/g },
    { prop: 'priority', regex: /(priority)([\s\S]*?priority)/g }
  ];
  
  let hasChanged = false;
  duplicateProps.forEach(({ prop, regex }) => {
    if (regex.test(fixedContent)) {
      fixedContent = fixedContent.replace(regex, '$1');
      hasChanged = true;
      console.log(`  Fixed duplicate ${prop} in ${file}`);
    }
  });
  
  if (hasChanged) {
    fs.writeFileSync(absolutePath, fixedContent, 'utf8');
    fixCount++;
    console.log(`  Successfully fixed ${file}`);
  } else {
    console.log(`  No duplicates found in ${file}`);
  }
});

console.log(`\nFixed ${fixCount} files.`); 