#!/bin/bash

# Create high-quality optimized directory
mkdir -p public/high-quality

# Optimize the first 25 images to smaller file sizes but still high quality
for i in {1..25}; do
  if [ -f "public/optimized/cotswolds_$i.jpg" ]; then
    echo "Optimizing cotswolds_$i.jpg..."
    sharp -i "public/optimized/cotswolds_$i.jpg" -o "public/high-quality/cotswolds_$i.jpg" -q 70 resize 1600
  fi
done

# Optimize the remaining key photos
for img in 224A5292.jpg 224A5307.jpg 224A5305.jpg 224A5277.jpg 224A5290.jpg 224A5302.jpg 224A5359.jpg 224A5372.jpg 224A5399.jpg 8596128-exterior09-800.jpg; do
  if [ -f "public/optimized/$img" ]; then
    echo "Optimizing $img..."
    sharp -i "public/optimized/$img" -o "public/high-quality/$img" -q 70 resize 1600
  fi
done

# Create proper symlinks
ln -sf high-quality/cotswolds_1.jpg public/cotswolds.jpg
ln -sf high-quality/cotswolds_1.jpg public/cotswolds_cover.jpg

echo "Further optimization complete!" 