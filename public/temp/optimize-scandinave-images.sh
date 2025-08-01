#!/bin/bash

# Create high-quality directory if it doesn't exist
mkdir -p public/high-quality/scandinave

# Get a list of all JPG files in the directory
cd "public/photos/properties/Luxe 3-bed Scandinave"
FILES=(`ls *.jpg`)

# Process each file
for ((i=0; i<${#FILES[@]}; i++)); do
  FILENAME="${FILES[$i]}"
  TARGET="scandinave-$i.jpg"
  echo "Processing $((i+1))/${#FILES[@]}: $FILENAME -> $TARGET"
  
  # Use sips for image optimization (macOS native tool)
  sips -s format jpeg -s formatOptions 70 "$FILENAME" --resampleHeightWidth 1600 1600 --out "../../../high-quality/scandinave/$TARGET"
done

echo "All files processed successfully!" 