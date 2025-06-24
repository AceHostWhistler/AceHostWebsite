#!/bin/bash

SOURCE_DIR="../public/photos/properties/Cedarhof Kadenwood"
TARGET_DIR="../public/optimized/cedarhof"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Process all images in the source directory
echo "Optimizing all images..."
for img in "$SOURCE_DIR"/*.jpg; do
  filename=$(basename "$img")
  target="$TARGET_DIR/$filename"
  
  # Skip if file already exists in target directory
  if [[ -f "$target" ]]; then
    echo "Skipping (already exists): $filename"
    continue
  fi
  
  echo "Optimizing: $filename"
  # Copy and optimize the image
  cp "$img" "$target"
  sips --resampleWidth 1800 "$target" >/dev/null 2>&1
  echo "Optimized: $filename"
done

echo "All images optimization complete!" 