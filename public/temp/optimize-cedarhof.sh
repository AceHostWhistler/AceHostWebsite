#!/bin/bash

# Directory containing the original photos
SOURCE_DIR="public/photos/properties/Cedarhof Kadenwood"

# Directory where optimized photos will be saved
TARGET_DIR="public/high-quality/cedarhof"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Array of files to optimize
FILES=(
    "2932-Ancient-Cedars-01-MLS.jpg"
    "2932 Living Night 1.jpg"
    "2932 Bedroom 1A NEW.jpg"
    "2932 Living A NEW.jpg"
    "2932-Ancient-Cedars-04-MLS.jpg"
    "2932-Ancient-Cedars-06-MLS.jpg"
    "AC2932 Living Dining.jpg"
    "AC2932 Media Room B.jpg"
    "AC2932 Hot Tub Pool B.jpg"
    "2932-Ancient-Cedars-02-MLS.jpg"
    "2932-Ancient-Cedars-03-MLS.jpg"
    "2932-Ancient-Cedars-05-MLS.jpg"
    "2932-Ancient-Cedars-07-MLS.jpg"
    "2932-Ancient-Cedars-08-MLS.jpg"
    "2932-Ancient-Cedars-09-MLS.jpg"
    "2932-Ancient-Cedars-10-MLS.jpg"
    "2932-Ancient-Cedars-11-MLS.jpg"
    "2932 Bedroom 1B NEW.jpg"
    "2932 Bedroom 1C NEW.jpg"
    "2932 Deck 1.jpg"
    "2932 Deck 2.jpg"
    "2932 Deck Dusk.jpg"
    "2932 Exterior 1.jpg"
    "2932 Exterior 2.jpg"
    "2932 Exterior 3.jpg"
    "2932 Exterior 4.jpg"
    "2932 Laundry Room.jpg"
    "2932 Living Night 2.jpg"
    "2932 Mudroom.jpg"
    "2932 Pool A NEW.jpg"
    "2932 Pool B NEW.jpg"
    "2932 Pool C NEW.jpg"
    "2932 Rear Exterior Night 1.jpg"
    "2932 Rear Exterior Night 2.jpg"
    "2932 Upper Hallway Night.jpg"
    "2932 View.jpg"
    "AC2932 Bath 1A.jpg"
    "AC2932 Bath 1B.jpg"
    "AC2932 Bath 2A.jpg"
    "AC2932 Bath 2B.jpg"
    "AC2932 Bath 4.jpg"
    "AC2932 Bath 5.jpg"
    "AC2932 Bedroom 1 Closet.jpg"
    "AC2932 Bedroom 1A.jpg"
    "AC2932 Bedroom 1B.jpg"
    "AC2932 Bedroom 2A.jpg"
    "AC2932 Bedroom 2B.jpg"
    "AC2932 Bedroom 3.jpg"
    "AC2932 Bedroom 4.jpg"
    "AC2932 Bedroom 5.jpg"
    "AC2932 Deck 1.jpg"
    "AC2932 Dining.jpg"
    "AC2932 Entry.jpg"
    "AC2932 Exterior Detail 1.jpg"
    "AC2932 Family Room.jpg"
    "AC2932 Gym.jpg"
    "AC2932 Hallway.jpg"
    "AC2932 Hot Tub Pool A.jpg"
    "AC2932 Kitchen A.jpg"
    "AC2932 Kitchen B.jpg"
    "AC2932 Kitchen Family.jpg"
    "AC2932 Living A.jpg"
    "AC2932 Living B.jpg"
    "AC2932 Media Room A.jpg"
    "AC2932 Media Room Detail.jpg"
    "AC2932 Wine Room A.jpg"
    "AC2932 Wine and Poker Room.jpg"
)

# Process each file
for i in "${!FILES[@]}"; do
    SOURCE_FILE="$SOURCE_DIR/${FILES[$i]}"
    TARGET_FILE="$TARGET_DIR/cedarhof-$i.jpg"
    
    echo "Processing $SOURCE_FILE -> $TARGET_FILE"
    
    # Use ImageMagick to resize and optimize the image
    # This preserves the aspect ratio while setting a max width of 1500px
    convert "$SOURCE_FILE" -resize '1500x>' -quality 85 -strip "$TARGET_FILE"
    
    echo "Optimized: $TARGET_FILE"
done

echo "All images have been optimized and saved to $TARGET_DIR" 