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

# Create .nojekyll file to disable Jekyll processing
touch build/.nojekyll

# Move to the build directory
cd build

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
  git init
  git checkout -b main
  git remote add origin https://github.com/stefania11/stefania11.github.io.git
else
  git checkout main
fi

# Add all files to git
git add -A

# Commit the changes
git commit -m "Deploy to GitHub Pages: $(date)"

# Push to GitHub
echo -e "${GREEN}Pushing to GitHub...${NC}"
git push -f origin main

echo -e "${GREEN}Deployment complete! Your site is now live at https://stefania11.github.io${NC}"
