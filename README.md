# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features both full-stack and static deployment options.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Express + TypeScript (optional)
- **Database**: PostgreSQL with Drizzle ORM (optional)
- **Deployment**: GitHub Pages / Full-stack hosting

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL (for full-stack mode only)

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server on port 5003
PORT=5003 npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (full-stack)
- `npm run build:github` - Build for GitHub Pages deployment
- `npm run start` - Run production server
- `npm run check` - TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run db:push` - Push database schema changes

## Deployment

### GitHub Pages (Static Site)

This site is configured to deploy to GitHub Pages at https://stefania11.github.io

To deploy:

1. **Commit all changes to main branch**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Run the deployment script**:
   ```bash
   ./deploy.sh
   ```

The script will:
- Build the static site with GitHub Pages configuration
- Create a temporary `gh-pages` branch
- Push the build to GitHub Pages
- Clean up and return to main branch

Your changes will be live in 2-5 minutes at https://stefania11.github.io

### Full-Stack Deployment

For full-stack deployment with database support:

1. Set up PostgreSQL database
2. Configure `DATABASE_URL` environment variable
3. Run `npm run build`
4. Deploy the `dist` folder to your hosting provider

## Project Structure

```
/client/src/
├── components/     # React components
├── pages/         # Route pages
├── data/          # Content data (content.ts)
├── hooks/         # Custom React hooks
└── styles/        # CSS files

/server/           # Express backend (optional)
/public/           # Static assets
```

## Content Management

Main content is stored in `/client/src/data/content.ts`. Edit this file to update:
- About section
- Research projects
- Portfolio projects
- Talks
- Publications

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.