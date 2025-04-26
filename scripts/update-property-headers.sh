#!/bin/bash

# Find all property listing files
find src/pages/listings src/pages/worldwide-listings src/pages/vancouver-listings -type f -name "index.tsx" | while read -r file; do
  # Add PropertyHeader import if it doesn't exist
  if ! grep -q "import PropertyHeader from \"@/components/PropertyHeader\";" "$file"; then
    sed -i '' '1a\
import PropertyHeader from "@/components/PropertyHeader";' "$file"
  fi

  # Update Navigation component to have transparent={false}
  sed -i '' 's/<Navigation \/>/<Navigation transparent={false} \/>/g' "$file"
  sed -i '' 's/<Navigation>/<Navigation transparent={false}>/g' "$file"
done

echo "Updated property headers in all listing files" 