# Architecture Overview

## Overview

This application is a full-stack web application built with React on the frontend and Express.js on the backend. It follows a modern architecture pattern with a clear separation between client and server code. The application is primarily a portfolio website with several content sections including a home page, resume, and publications.

## System Architecture

The application follows a client-server architecture with the following components:

1. **Frontend**: React-based single-page application using TypeScript
2. **Backend**: Express.js server using TypeScript
3. **Database**: PostgreSQL database with Drizzle ORM
4. **Build/Development**: Vite for frontend development and bundling

### Directory Structure

```
/
├── client/                 # Frontend React application
│   ├── src/                # Source code
│   ├── index.html          # HTML entry point
│   └── ...
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Data storage interface
│   └── ...
├── shared/                 # Shared code between client and server
│   └── schema.ts           # Database schema definitions
├── public/                 # Static assets
└── ...
```

## Key Components

### Frontend (Client)

The frontend is built with React and uses several modern libraries:

1. **Component Structure**:
   - Uses a component-based architecture with UI components (in `client/src/components/ui`)
   - Content sections in `client/src/components/sections`
   - Page components in `client/src/pages`

2. **State Management**:
   - Uses React Query for server state management (`@tanstack/react-query`)
   - Component-local state with React hooks

3. **Routing**:
   - Uses `wouter` for client-side routing
   - Routes defined in `client/src/App.tsx`

4. **UI Framework**:
   - Uses Tailwind CSS for styling
   - Shadcn UI component library (based on Radix UI primitives)
   - Custom styling with CSS variables for theming

5. **Data Fetching**:
   - Custom query client (`client/src/lib/queryClient.ts`) for API calls
   - API request utilities for consistent error handling

### Backend (Server)

The backend is an Express.js application with the following components:

1. **Server Setup**:
   - Express application setup in `server/index.ts`
   - Middleware for request logging, JSON parsing, etc.

2. **API Routes**:
   - Routes registration in `server/routes.ts`
   - API endpoints prefixed with `/api`

3. **Data Access Layer**:
   - Storage interface in `server/storage.ts`
   - In-memory implementation for development/testing
   - Can be extended to use database storage

4. **Development Tools**:
   - Vite integration for development server
   - Runtime error overlay

### Database

The application uses PostgreSQL with Drizzle ORM:

1. **Schema Definition**:
   - Schema defined in `shared/schema.ts`
   - Uses Drizzle ORM's schema definition syntax
   - Schema includes a `users` table with authentication fields

2. **ORM Integration**:
   - Uses `drizzle-orm` for database operations
   - Uses `drizzle-zod` for schema validation
   - Schema migrations with `drizzle-kit`

3. **Connection**:
   - Uses `@neondatabase/serverless` for PostgreSQL connection
   - Connection configured in `drizzle.config.ts`

## Data Flow

1. **Client-to-Server Communication**:
   - Frontend makes API requests to backend endpoints using the query client
   - Backend processes requests, interacts with the database, and returns responses

2. **Authentication Flow**:
   - User registration and login through API endpoints
   - Session management with `connect-pg-simple` for session storage

3. **Data Retrieval**:
   - Frontend components fetch data using React Query hooks
   - Server retrieves data from the database using Drizzle ORM
   - Responses formatted as JSON and returned to the client

## External Dependencies

### Frontend Dependencies

- **UI Libraries**: React, Radix UI components, Framer Motion for animations
- **State Management**: React Query (@tanstack/react-query)
- **Routing**: wouter
- **Styling**: Tailwind CSS, shadcn/ui components

### Backend Dependencies

- **Server**: Express.js
- **Database**: Drizzle ORM, PostgreSQL (via Neon Serverless)
- **Security**: Session management with connect-pg-simple

### Development Dependencies

- **Build Tools**: Vite, esbuild, TypeScript
- **Development Server**: Vite dev server
- **Error Handling**: Runtime error overlay

## Deployment Strategy

The application is configured for deployment on Replit with the following strategy:

1. **Build Process**:
   - Frontend built with Vite (`npm run build`)
   - Backend bundled with esbuild into a single file
   - Output placed in the `dist` directory

2. **Runtime Environment**:
   - Node.js 20.x runtime
   - PostgreSQL 16 for database
   - Environment variables for configuration

3. **Deployment Configuration**:
   - Replit configuration in `.replit` file
   - Deployment target: autoscale
   - Port mapping: 5000 (internal) to 80 (external)

4. **Development Workflow**:
   - Development server: `npm run dev`
   - Database migrations: `npm run db:push`
   - Type checking: `npm run check`

## Security Considerations

1. **Authentication**:
   - Password storage: Passwords stored in the database (should be hashed in production)
   - Session management: Database-backed sessions

2. **API Security**:
   - Error handling middleware to prevent leaking error details
   - Request logging for monitoring and debugging

3. **Database Security**:
   - Environment variables for database credentials
   - Schema validation with Zod to prevent invalid data

## Future Considerations

1. **Scalability**:
   - The current storage implementation uses in-memory storage, which should be replaced with the database implementation for production
   - Connection pooling for database connections should be considered for higher traffic

2. **Feature Expansion**:
   - The route registration in `server/routes.ts` is set up for expansion with additional API endpoints
   - The database schema can be extended to support additional features

3. **Authentication Improvements**:
   - Password hashing and additional security measures should be implemented
   - Role-based access control could be added for admin functionality