#!/bin/bash

# This script will add, commit, and push the new Falcon photos to the main branch
# Run this after Xcode command line tools installation is complete

echo "Adding new Falcon photos to git..."
git add public/photos/properties/Falcon/

echo "Committing changes..."
git commit -m "Add new Falcon photos (47 high-quality images)"

echo "Pushing to main branch..."
git push origin main

echo "Done!"

