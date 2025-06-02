# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `PORT=5003 npm run dev` - Start development server (uses port 5003)
- `npm run build` - Build for production (both client and server)
- `npm run build:github` - Build static site for GitHub Pages deployment
- `npm run start` - Run production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes with Drizzle

## Architecture Overview

This is a personal portfolio website with dual deployment capabilities:
1. **Full-stack mode**: React frontend + Express backend with PostgreSQL
2. **Static mode**: Can be built for GitHub Pages deployment

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **UI Components**: shadcn/ui (50+ pre-built components in `/client/src/components/ui/`)
- **Routing**: Wouter (client-side)
- **State/Data**: React Query (TanStack Query)
- **Backend**: Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with custom animations and typography plugin

### Project Structure
```
/client/src/
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # Page sections (Hero, About, Projects, etc.)
│   └── ui/         # shadcn/ui components
├── pages/          # Route pages (HomePage, BlogPage, etc.)
├── data/           # Content data (content.ts)
└── hooks/          # Custom hooks

/server/
├── index.ts        # Express server entry
├── routes.ts       # API routes
└── vite.ts         # Vite dev server integration

/shared/
└── schema.ts       # Drizzle database schema
```

### Key Files
- `/client/src/data/content.ts` - Main content data for portfolio sections
- `/client/src/App.tsx` - Main app component with routing
- `/server/index.ts` - Express server setup
- `/shared/schema.ts` - Database schema definitions

### Deployment Notes
- GitHub Pages build uses `vite.github.config.js` instead of default vite config
- Static assets go in `/client/public/`
- PDF files are stored in `/client/public/pdf/`
- Images for blog/projects in `/client/public/assets/images/`

### Development Tips
- No testing framework is currently set up
- Uses path aliases configured in tsconfig.json
- Tailwind config includes custom colors and animations
- Print styles available for resume/CV (`/client/src/styles/print.css`)
- Mobile detection available via `use-mobile` hook