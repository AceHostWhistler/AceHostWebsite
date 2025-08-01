#!/bin/bash

SOURCE_DIR="../public/photos/properties/Cedarhof Kadenwood"
TARGET_DIR="../public/optimized/cedarhof"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Key images to optimize (in priority order)
KEY_IMAGES=(
  "2932-Ancient-Cedars-01-MLS.jpg"   # Cover photo
  "2932 Living Night 1.jpg"          # 2nd photo
  "2932 Bedroom 1A NEW.jpg"          # 3rd photo
  "2932 Living A NEW.jpg"            # 4th photo
  "2932-Ancient-Cedars-04-MLS.jpg"   # 5th photo
  "2932-Ancient-Cedars-06-MLS.jpg"   # 6th photo
  "AC2932 Living Dining.jpg"         # 7th photo
  "AC2932 Media Room B.jpg"          # 8th photo
  "AC2932 Hot Tub Pool B.jpg"        # 9th photo
)

# Optimize key images with higher quality
echo "Optimizing key images..."
for img in "${KEY_IMAGES[@]}"; do
  if [[ -f "$SOURCE_DIR/$img" ]]; then
    echo "Optimizing: $img"
    
    # Set quality based on importance
    QUALITY=85
    if [[ "$img" == "2932-Ancient-Cedars-01-MLS.jpg" ]]; then
      QUALITY=90  # Higher quality for cover photo
    fi
    
    convert "$SOURCE_DIR/$img" -strip -resize "1920x>" -quality $QUALITY "$TARGET_DIR/$img"
    echo "Optimized: $img"
  else
    echo "Key image not found: $img"
  fi
done

# Optional: Create smaller versions for thumbnails
echo "Creating thumbnail for cover image..."
convert "$SOURCE_DIR/2932-Ancient-Cedars-01-MLS.jpg" -strip -resize "800x>" -quality 80 "$TARGET_DIR/cedarhof_thumb.jpg"
echo "Created thumbnail"

echo "Image optimization complete!" 