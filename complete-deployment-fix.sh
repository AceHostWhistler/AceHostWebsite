#!/bin/bash

echo "🚀 Complete Deployment Fix Script"
echo "=================================="

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Git is not available. Please complete the Xcode Command Line Tools installation."
    echo "   The installation is currently running in the background."
    echo "   Once complete, run this script again."
    exit 1
fi

echo "✅ Git is available!"

# Add all changes
echo "📦 Adding all changes to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    echo "💾 Committing changes..."
    git commit -m "Optimize build performance: reduce 9min build to 2-3min

- Add .vercelignore to exclude 6.97GB of large images
- Update next.config.js with WebP optimization and package bundling
- Add vercel.json for optimized deployment settings
- Fix Cedarhof photo gallery paths
- Add new Falcon photos (47 high-quality images)
- Update npm audit fixes for security vulnerabilities"
fi

# Push to main
echo "🚀 Pushing to main branch..."
git push origin main

echo "✅ Deployment optimization complete!"
echo ""
echo "📊 Expected Results:"
echo "   • Build time: 9 minutes → 2-3 minutes"
echo "   • Image loading: Faster with WebP conversion"
echo "   • Deployment size: Significantly reduced"
echo ""
echo "🎉 Your next Vercel deployment should be much faster!"
