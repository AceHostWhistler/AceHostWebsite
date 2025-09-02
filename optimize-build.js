#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build optimization...');

// Function to get directory size
function getDirSize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    try {
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        totalSize += getDirSize(filePath);
      } else {
        totalSize += stats.size;
      }
    } catch (error) {
      console.warn(`⚠️  Skipping broken file/symlink: ${filePath}`);
    }
  });
  
  return totalSize;
}

// Function to format bytes
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Analyze public directory
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const publicSize = getDirSize(publicDir);
  console.log(`📁 Public directory size: ${formatBytes(publicSize)}`);
  
  // Check for large files
  console.log('\n🔍 Checking for files larger than 10MB...');
  
  function findLargeFiles(dir, threshold = 10 * 1024 * 1024) {
    const files = fs.readdirSync(dir);
    const largeFiles = [];
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      try {
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          largeFiles.push(...findLargeFiles(filePath, threshold));
        } else if (stats.size > threshold) {
          largeFiles.push({
            path: filePath,
            size: stats.size
          });
        }
      } catch (error) {
        // Skip broken files/symlinks
      }
    });
    
    return largeFiles;
  }
  
  const largeFiles = findLargeFiles(publicDir);
  if (largeFiles.length > 0) {
    console.log(`❌ Found ${largeFiles.length} files larger than 10MB:`);
    largeFiles.forEach(file => {
      console.log(`   ${file.path} (${formatBytes(file.size)})`);
    });
    console.log('\n💡 Consider optimizing these images or moving them to a CDN.');
  } else {
    console.log('✅ No files larger than 10MB found.');
  }
}

console.log('\n✅ Build optimization analysis complete!');
console.log('\n📋 Recommendations:');
console.log('1. Move large images to a CDN (Cloudinary, ImageKit, etc.)');
console.log('2. Use optimized images in /optimized/ directory instead of /high-quality/');
console.log('3. Enable Vercel\'s image optimization');
console.log('4. Consider lazy loading for images');
