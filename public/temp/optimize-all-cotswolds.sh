#!/bin/bash

# Create high-quality optimized directory if it doesn't exist
mkdir -p public/high-quality

# First, list all files from the Cotswolds directory
FILES=($(ls "public/photos/properties/Cotswolds UK - Soho Farm House/"*.jpg))

# Process each file
for ((i=0; i<${#FILES[@]}; i++)); do
  FILE="${FILES[$i]}"
  FILENAME=$(basename "$FILE")
  TARGET_FILE="public/high-quality/$FILENAME"

  echo "Processing $((i+1))/${#FILES[@]}: $FILENAME"
  
  # Skip if the file already exists in high-quality folder
  if [ -f "$TARGET_FILE" ]; then
    echo "  - Already exists, skipping"
    continue
  fi
  
  # Optimize the image using sharp
  echo "  - Optimizing..."
  sharp -i "$FILE" -o "$TARGET_FILE" -q 70 resize 1600
  
  echo "  - Done: $TARGET_FILE"
done

echo "All files processed successfully!" 