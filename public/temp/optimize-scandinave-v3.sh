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
  
  # Get original dimensions
  WIDTH=$(sips -g pixelWidth "$file" | grep pixelWidth | awk '{print $2}')
  HEIGHT=$(sips -g pixelHeight "$file" | grep pixelHeight | awk '{print $2}')
  
  # Calculate new dimensions while preserving aspect ratio
  # Target max width or height of 1600px
  if [ "$WIDTH" -gt "$HEIGHT" ]; then
    # Landscape orientation
    NEW_WIDTH=1600
    # Calculate height to maintain aspect ratio
    NEW_HEIGHT=$(echo "$HEIGHT * 1600 / $WIDTH" | bc)
  else
    # Portrait or square orientation
    NEW_HEIGHT=1600
    # Calculate width to maintain aspect ratio
    NEW_WIDTH=$(echo "$WIDTH * 1600 / $HEIGHT" | bc)
  fi
  
  # Use sips for image optimization (macOS native tool) with calculated dimensions
  sips -s format jpeg -s formatOptions 70 "$file" --resampleWidth $NEW_WIDTH --resampleHeight $NEW_HEIGHT --out "../../../high-quality/scandinave-fixed/$TARGET"
  
  i=$((i+1))
done

echo "All files processed successfully!" 