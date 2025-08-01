#!/bin/bash

# Set variables
SOURCE_DIR="public/photos/properties/Cotswolds UK - Soho Farm House"
OUTPUT_DIR="public/optimized/cotswolds-all"
QUALITY=75
MAX_WIDTH=1600
COVER_QUALITY=85  # Higher quality for cover image

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Starting optimization of Cotswolds images..."

# Process all images
FILES=($(ls "$SOURCE_DIR"/*.jpg))
TOTAL=${#FILES[@]}

for ((i=0; i<$TOTAL; i++)); do
  FILE="${FILES[$i]}"
  FILENAME=$(basename "$FILE")
  OUTPUT_FILE="$OUTPUT_DIR/cotswolds-all-$i.jpg"
  
  echo "Processing image $((i+1)) of $TOTAL: $FILENAME"
  
  # Use higher quality for the cover image
  if [[ "$FILENAME" == "DJI_20250602090720_0527_D.jpg" ]]; then
    echo "  - Processing cover image with higher quality"
    sharp -i "$FILE" -o "$OUTPUT_DIR/cotswolds-cover.jpg" -q $COVER_QUALITY resize $MAX_WIDTH
  fi

  # Process all images with standard quality
  sharp -i "$FILE" -o "$OUTPUT_FILE" -q $QUALITY resize $MAX_WIDTH
  
  echo "  - Created optimized version: $OUTPUT_FILE"
done

echo "Creating cover image symlink for easy reference"
ln -sf "../$OUTPUT_DIR/cotswolds-cover.jpg" "public/cotswolds-cover.jpg"

echo "All Cotswolds images processed successfully!"
echo "Total images processed: $TOTAL" 