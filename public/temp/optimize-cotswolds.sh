#!/bin/bash

# Create optimized directory if it doesn't exist
mkdir -p public/optimized

# Optimize and rename all the cotswolds images
for i in {1..25}; do
  if [ -f "public/cotswolds_$i.jpg" ]; then
    echo "Optimizing cotswolds_$i.jpg..."
    # Use sips to resize and optimize the image while maintaining aspect ratio
    # Adjust quality and size to balance quality and file size
    sips -s format jpeg -s formatOptions 80 "public/cotswolds_$i.jpg" --out "public/optimized/cotswolds_$i.jpg"
  fi
done

# Now let's process the images from the source directory
cd public/photos/properties/Cotswolds\ UK\ -\ Soho\ Farm\ House/
for img in *.jpg; do
  echo "Optimizing $img..."
  # Use sips to resize and optimize the image while maintaining aspect ratio
  sips -s format jpeg -s formatOptions 80 "$img" --out "../../../optimized/$(echo $img | tr ' ' '_')"
done

echo "Optimization complete!" 