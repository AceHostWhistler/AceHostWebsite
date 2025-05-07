const fs = require('fs');
const path = require('path');

// Files to fix
const filesToFix = [
  'src/pages/worldwide-listings/santorini-greece-villa-eclipse/index.tsx',
  'src/pages/worldwide-listings/super-yacht-thailand/index.tsx',
  'src/pages/worldwide-listings/villa-oineas-greece-mykonos/index.tsx'
];

// Function to fix a file
function fixFile(filePath) {
  try {
    console.log(`Processing ${filePath}...`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Create a backup of the original file
    fs.writeFileSync(`${filePath}.backup`, content, 'utf8');
    console.log(`  Created backup at ${filePath}.backup`);
    
    // Fix "size property duplicated" issue
    content = content.replace(/sizes="100vw"[\s\n]+sizes="100vw"/g, 'sizes="100vw"');
    
    // Fix "className property duplicated" issue
    content = content.replace(/className={[^}]+}[\s\n]+className="[^"]+"/g, match => {
      const firstPart = match.substring(0, match.indexOf('}') + 1);
      return firstPart;
    });
    
    // Fix "loading property duplicated" issue
    content = content.replace(/loading="eager"[\s\n]+loading="eager"/g, 'loading="eager"');
    
    // Fix "onLoadingComplete property duplicated" issue
    content = content.replace(/onLoadingComplete={[^}]+}[\s\n]+onLoadingComplete={\(\) =>\s*setIsImageLoading\(false\)}/g, match => {
      const firstPart = match.substring(0, match.indexOf('}') + 1);
      return firstPart;
    });
    
    // Fix "priority property duplicated" issue
    content = content.replace(/priority[\s\n]+priority/g, 'priority');
    
    // Fix "quality property duplicated" issue
    content = content.replace(/quality={85}[\s\n]+quality={85}/g, 'quality={85}');
    
    // Write the content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  Successfully fixed ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`  Error fixing ${filePath}:`, error);
    return false;
  }
}

// Process each file
let fixedCount = 0;
for (const file of filesToFix) {
  const absolutePath = path.resolve(file);
  
  if (fixFile(absolutePath)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${filesToFix.length} files.`);
console.log('Please manually check these files to ensure they work correctly.'); 