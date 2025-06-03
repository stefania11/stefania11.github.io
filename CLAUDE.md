# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `PORT=5003 npm run dev` - Start development server (uses port 5003)
- `npm run build` - Build for production (both client and server)
- `npm run build:github` - Build static site for GitHub Pages deployment
- `npm run start` - Run production server
- `npm run check` - Run TypeScript type checking
- `npm run lint` - Run ESLint on all TypeScript/JavaScript files
- `npm run format` - Format code with Prettier
- `npm run db:push` - Push database schema changes with Drizzle

### Deployment

- `./deploy.sh` - Deploy to GitHub Pages (builds and pushes to gh-pages branch)

## Architecture Overview

This is a personal portfolio website with dual deployment capabilities:

1. **Full-stack mode**: React frontend + Express backend with PostgreSQL
2. **Static mode**: Can be built for GitHub Pages deployment (stefania11.github.io)

### Tech Stack

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **UI Components**: shadcn/ui (50+ pre-built components in `/client/src/components/ui/`)
- **Routing**: Wouter (client-side) with support for 404 handling
- **State/Data**: React Query (TanStack Query)
- **Backend**: Express + TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with custom animations, typography plugin, and chart support

### Project Structure

```
/client/src/
├── components/
│   ├── layout/     # Header, Footer with navigation
│   ├── sections/   # Page sections (Hero, About, Projects, Research, Publications, Talks, News, Blog, Contact)
│   └── ui/         # shadcn/ui components (50+ components)
├── pages/          # Route pages (HomePage, BlogPage, BlogPostPage, PublicationsPage, ResumePage, not-found)
├── data/           # Content data (content.ts - main data source)
├── hooks/          # Custom hooks (use-mobile, use-section-visibility, use-toast)
├── lib/            # Utilities (queryClient, scroll-to-section, utils)
└── styles/         # CSS files including print.css for resume

/server/
├── index.ts        # Express server entry with Vite integration
├── routes.ts       # API routes
├── vite.ts         # Vite dev server integration
└── storage.ts      # Storage utilities

/shared/
└── schema.ts       # Drizzle database schema definitions

/public/            # Static assets
├── pdf/            # PDF files for publications
└── assets/images/  # Images for blog posts and projects
```

### Key Files

- `/client/src/data/content.ts` - Main content data for all portfolio sections (about, research, projects, talks, publications)
- `/client/src/App.tsx` - Main app component with routing setup
- `/client/src/pages/HomePage.tsx` - Landing page with all sections
- `/server/index.ts` - Express server with production/dev mode handling
- `/vite.config.ts` - Main Vite configuration
- `/vite.github.config.js` - Special Vite config for GitHub Pages builds

### Content Structure (from content.ts)

- **About**: Personal bio, education, skills, interests, languages
- **Research**: AI literacy projects with links and images
- **Projects**: HacKIDemia, Cognimates, AI Playground with tags and gradients
- **Talks**: Conference presentations with venues, years, and links
- **Publications**: Academic papers with venue, authors, and PDF links

### Deployment Notes

- GitHub Pages build uses `vite.github.config.js` with base URL configuration
- Build output goes to `build/` directory for GitHub deployment
- Uses `.nojekyll` file to prevent Jekyll processing
- Static assets should use absolute paths or be placed in `/client/public/`
- PDF files go in `/client/public/pdf/` or `/public/pdf/`
- Blog images go in `/client/public/assets/images/blog/`

### Path Aliases

- `@/` → `/client/src/`
- `@shared/` → `/shared/`
- `@assets/` → `/client/src/assets/`

### Environment Variables

- `PORT` - Server port (default 5000, commonly set to 5003)
- `DATABASE_URL` - PostgreSQL connection string (required for full-stack mode)
- `NODE_ENV` - development/production

### Development Tips

- No testing framework is currently set up
- ESLint v9 and Prettier are configured for code quality
- Tailwind config includes custom colors (#E0D6FF, #C1F0DB, #FFD6E0) and animations
- Print styles available for resume/CV (`/client/src/styles/print.css`)
- Mobile detection available via `use-mobile` hook
- Section visibility tracking via `use-section-visibility` hook
- Toast notifications via `use-toast` hook and Toaster component
- Replit-specific plugins included for compatibility
