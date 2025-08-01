#!/bin/bash

SOURCE_DIR="public/photos/properties/Cotswolds UK - Soho Farm House"
OUTPUT_DIR="public/optimized/cotswolds-all"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Starting optimization of all Cotswolds images..."

# Use find to get all jpg files, handling spaces in filenames correctly
find "$SOURCE_DIR" -type f -name "*.jpg" > /tmp/cotswolds_files.txt
TOTAL=$(wc -l < /tmp/cotswolds_files.txt)
echo "Found $TOTAL images to process"

# Use a counter for naming output files
COUNT=0

# Process each file
while IFS= read -r FILE; do
  FILENAME=$(basename "$FILE")
  OUTPUT_FILE="$OUTPUT_DIR/cotswolds-all-$COUNT.jpg"
  
  echo "Processing image $((COUNT+1)) of $TOTAL: $FILENAME"
  
  # Use sips for optimization - reducing size and quality for faster loading
  sips --resampleWidth 1200 "$FILE" --out "$OUTPUT_FILE" &>/dev/null
  sips -s format jpeg -s formatOptions 75 "$OUTPUT_FILE" --out "$OUTPUT_FILE" &>/dev/null
  
  # Report file size reduction
  ORIG_SIZE=$(stat -f %z "$FILE")
  NEW_SIZE=$(stat -f %z "$OUTPUT_FILE")
  REDUCTION=$((100 - (NEW_SIZE * 100 / ORIG_SIZE)))
  
  echo "  - Optimized: $(du -h "$FILE" | cut -f1) → $(du -h "$OUTPUT_FILE" | cut -f1) ($REDUCTION% reduction)"
  
  # Increment counter
  COUNT=$((COUNT+1))
done < /tmp/cotswolds_files.txt

# Remove temporary file
rm /tmp/cotswolds_files.txt

echo "All $TOTAL Cotswolds images have been optimized and saved to $OUTPUT_DIR" 