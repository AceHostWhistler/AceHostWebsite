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
  "2932 Pool A NEW.jpg"
  "2932 Pool B NEW.jpg"
  "2932 Pool C NEW.jpg" 
  "AC2932 Kitchen A.jpg"
  "AC2932 Dining.jpg"
  "AC2932 Wine Room A.jpg"
  "AC2932 Bedroom 1A.jpg"
  "2932 Deck 1.jpg"
)

# Optimize key images
echo "Optimizing key images..."
for img in "${KEY_IMAGES[@]}"; do
  if [[ -f "$SOURCE_DIR/$img" ]]; then
    echo "Optimizing: $img"
    
    # First copy the file
    cp "$SOURCE_DIR/$img" "$TARGET_DIR/$img"
    
    # Then resize it (quality will be automatically optimized)
    sips --resampleWidth 1800 "$TARGET_DIR/$img" --out "$TARGET_DIR/$img" 2>/dev/null
    echo "Optimized: $img"
  else
    echo "Key image not found: $img"
  fi
done

# Create smaller version of cover photo for thumbnails
echo "Creating thumbnail for cover image..."
cp "$SOURCE_DIR/2932-Ancient-Cedars-01-MLS.jpg" "$TARGET_DIR/cedarhof_thumb.jpg"
sips --resampleWidth 800 "$TARGET_DIR/cedarhof_thumb.jpg" --out "$TARGET_DIR/cedarhof_thumb.jpg" 2>/dev/null
echo "Created thumbnail"

echo "Image optimization complete!" 