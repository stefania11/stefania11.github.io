#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting GitHub Pages deployment...${NC}"

# Build the project with GitHub Pages specific config
echo -e "${GREEN}Building project...${NC}"
npm run build:github

# Create necessary GitHub Pages files
echo -e "${GREEN}Creating GitHub Pages files...${NC}"

# Ensure the build directory exists
mkdir -p build

# Create .nojekyll file to disable Jekyll processing
touch build/.nojekyll

# Make sure we're in the project root
cd "$(dirname "$0")"

# Create a clean gh-pages branch
echo -e "${GREEN}Setting up gh-pages branch...${NC}"
git checkout -b gh-pages

# Copy the build files to the root
cp -r build/* .
cp build/.nojekyll .

# Add all files to git
git add -A

# Commit the changes
git commit -m "Deploy to GitHub Pages: $(date)"

# Push to GitHub
echo -e "${GREEN}Pushing to GitHub...${NC}"
git push -f origin gh-pages

# Switch back to the main branch
git checkout main
git branch -D gh-pages

echo -e "${GREEN}Deployment complete! Your site is now live at https://stefania11.github.io${NC}"
