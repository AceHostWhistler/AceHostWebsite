#!/bin/bash

# Set variables
SOURCE_DIR="public/photos/properties/Cotswolds UK - Soho Farm House"
OUTPUT_DIR="public/optimized/cotswolds-all"
QUALITY=75
MAX_WIDTH=1600
COVER_QUALITY=85  # Higher quality for cover image

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Create a directory for the cover photo
mkdir -p "public/optimized"

echo "Starting optimization of Cotswolds images..."

# Process cover image first with higher quality
echo "Processing cover image with higher quality..."
sips -s format jpeg -s formatOptions $COVER_QUALITY -Z $MAX_WIDTH "$SOURCE_DIR/DJI_20250602090720_0527_D.jpg" --out "public/optimized/cotswolds-cover.jpg"
echo "Cover image created: public/optimized/cotswolds-cover.jpg"

# Process all images
FILES=($(ls "$SOURCE_DIR"/*.jpg))
TOTAL=${#FILES[@]}
COUNTER=0

for file in "${FILES[@]}"; do
  FILENAME=$(basename "$file")
  OUTPUT_FILE="$OUTPUT_DIR/cotswolds-all-$COUNTER.jpg"
  
  echo "Processing image $((COUNTER+1)) of $TOTAL: $FILENAME"
  
  # Optimize with sips
  sips -s format jpeg -s formatOptions $QUALITY -Z $MAX_WIDTH "$file" --out "$OUTPUT_FILE"
  
  echo "  - Created optimized version: $OUTPUT_FILE"
  
  COUNTER=$((COUNTER+1))
done

echo "All Cotswolds images processed successfully!"
echo "Total images processed: $TOTAL" 