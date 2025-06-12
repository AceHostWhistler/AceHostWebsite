#!/bin/bash

# Create high-quality directory if it doesn't exist
mkdir -p public/high-quality/scandinave

# Go to the source directory
cd "public/photos/properties/Luxe 3-bed Scandinave"

# Process each file with proper quoting for spaces in filenames
i=0
for file in *.jpg; do
  TARGET="scandinave-$i.jpg"
  echo "Processing $((i+1)): $file -> $TARGET"
  
  # Use sips for image optimization (macOS native tool)
  sips -s format jpeg -s formatOptions 70 "$file" --resampleHeightWidth 1600 1600 --out "../../../high-quality/scandinave/$TARGET"
  
  i=$((i+1))
done

echo "All files processed successfully!" 