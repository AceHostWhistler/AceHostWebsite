#!/bin/bash

# Create high-quality directory if it doesn't exist
mkdir -p public/high-quality/scandinave-fixed

# Go to the source directory
cd "public/photos/properties/Luxe 3-bed Scandinave"

# Process each file with proper quoting for spaces in filenames
i=0
for file in *.jpg; do
  TARGET="scandinave-$i.jpg"
  echo "Processing $((i+1)): $file -> $TARGET"
  
  # Use sips for image optimization (macOS native tool) with max width of 1600px
  # This will automatically preserve the aspect ratio
  sips -s format jpeg -s formatOptions 80 "$file" --resampleWidth 1600 --out "../../../high-quality/scandinave-fixed/$TARGET"
  
  i=$((i+1))
done

echo "All files processed successfully!" 