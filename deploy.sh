#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting GitHub Pages deployment...${NC}"

# Make sure we're in the project root
cd "$(dirname "$0")"

# Ensure we're on main branch first
echo -e "${GREEN}Checking current branch...${NC}"
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${YELLOW}Switching to main branch...${NC}"
    git checkout main
fi

# Build the project with GitHub Pages specific config
echo -e "${GREEN}Building project...${NC}"
npm run build:github

# Wait a moment for files to be written
sleep 1

# Create necessary GitHub Pages files
echo -e "${GREEN}Creating GitHub Pages files...${NC}"

# Create .nojekyll file to disable Jekyll processing
touch client/build/.nojekyll

# Check if build was successful
if [ ! -f "client/build/index.html" ]; then
    echo -e "${RED}Build failed! No index.html found in build directory.${NC}"
    exit 1
fi

# Save the build directory to a temporary location
echo -e "${GREEN}Saving build files...${NC}"
rm -rf /tmp/gh-pages-build
cp -r client/build /tmp/gh-pages-build

# Create a clean gh-pages branch
echo -e "${GREEN}Setting up gh-pages branch...${NC}"

# Delete local gh-pages branch if it exists
git branch -D gh-pages 2>/dev/null || true

# Create a new gh-pages branch
git checkout -b gh-pages

# Copy the build files to the root
echo -e "${GREEN}Copying build files...${NC}"
cp -r /tmp/gh-pages-build/* .
cp /tmp/gh-pages-build/.nojekyll .

# Add all files to git
git add -A

# Commit the changes
git commit -m "Deploy to GitHub Pages: $(date)"

# Push to GitHub
echo -e "${GREEN}Pushing to GitHub...${NC}"
git push -f origin gh-pages

# Switch back to the main branch
echo -e "${GREEN}Switching back to main branch...${NC}"
git checkout main

# Clean up the local gh-pages branch
git branch -D gh-pages

echo -e "${GREEN}Deployment complete! Your site will be live at https://stefania11.github.io in a few minutes.${NC}"
