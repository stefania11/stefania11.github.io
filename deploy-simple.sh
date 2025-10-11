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

# Create .nojekyll file to disable Jekyll processing
touch client/build/.nojekyll

# Make sure we're in the project root
cd "$(dirname "$0")"

# Create a temporary directory for deployment
TEMP_DIR=$(mktemp -d)
echo -e "${GREEN}Using temporary directory: $TEMP_DIR${NC}"

# Copy the build files to temp directory
cp -r client/build/* "$TEMP_DIR/"

# Initialize git in temp directory
cd "$TEMP_DIR"
git init
git branch -m main
git add -A
git commit -m "Deploy to GitHub Pages: $(date)"

# Add remote and push
git remote add origin https://github.com/stefania11/stefania11.github.io.git
git push -f origin main:gh-pages

# Clean up
cd "$(dirname "$0")"
rm -rf "$TEMP_DIR"

echo -e "${GREEN}Deployment complete! Your site is now live at https://stefania11.github.io${NC}"
