#!/bin/bash

# First, ensure all files have the necessary imports
./scripts/update-property-headers.sh

# Find all property listing files
find src/pages/listings src/pages/worldwide-listings src/pages/vancouver-listings -type f -name "index.tsx" | while read -r file; do
  echo "Updating $file..."
  
  # Update Navigation component to have transparent={false}
  sed -i '' 's/<Navigation \/>/<Navigation transparent={false} \/>/g' "$file"
  sed -i '' 's/<Navigation>/<Navigation transparent={false}>/g' "$file"
  
  # Add a comment to remind developers to update the PropertyHeader component
  if grep -q "<PropertyHeader" "$file"; then
    echo "PropertyHeader component found in $file - please verify its props"
  else
    echo "WARNING: No PropertyHeader component found in $file - please add it manually"
  fi
done

echo "
Next steps:
1. Review each property listing file
2. Update PropertyHeader component with correct props:
   - title
   - guests
   - bedrooms
   - beds
   - bathrooms
   - priceRange
   - airbnbLink (optional)
3. Update PropertyDetails component with matching props
4. Verify photo grid implementation
" 