# Table4 Restaurant Booking System

## Overview

This is a full-stack restaurant booking application built with React, Express.js, and PostgreSQL. The application features a modern UI built with shadcn/ui components and Tailwind CSS, with a focus on providing a seamless restaurant reservation experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database serverless PostgreSQL
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple

### Build and Development
- **Monorepo Structure**: Client and server code in the same repository
- **Hot Module Replacement**: Vite dev server with Express backend proxy
- **TypeScript**: Shared type definitions between client and server
- **Build Process**: Vite for frontend, esbuild for backend bundling

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless PostgreSQL connection

### Storage Interface
- **Abstraction**: IStorage interface for database operations
- **Implementation**: MemStorage for development, with extensibility for production PostgreSQL
- **User Management**: Basic user CRUD operations with username/password authentication

### Frontend Components
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Theming**: CSS custom properties for consistent theming
- **Form Handling**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### API Layer
- **REST API**: Express.js routes prefixed with `/api`
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom middleware for API request logging
- **Type Safety**: Shared TypeScript types between client and server

## Data Flow

### Client-Server Communication
1. **Frontend**: React components make API calls using TanStack Query
2. **API Client**: Centralized API client with error handling and authentication
3. **Backend**: Express routes handle requests and interact with storage layer
4. **Database**: Drizzle ORM executes type-safe database queries
5. **Response**: JSON responses with proper error handling

### State Management
- **Server State**: TanStack Query for caching and synchronization
- **Client State**: React hooks for local component state
- **Form State**: React Hook Form for form management and validation

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **wouter**: Lightweight routing library
- **framer-motion**: Animation library for enhanced UX

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **drizzle-kit**: Database migration tool
- **@replit/vite-plugin-***: Replit-specific development plugins

### UI and Styling
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **lucide-react**: Icon library

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite dev server with Express backend integration
- **Hot Reload**: Both frontend and backend support hot reloading
- **TypeScript**: Real-time type checking and compilation
- **Database**: Development database setup with Drizzle migrations

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript to `dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Database**: PostgreSQL connection via environment variables

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Session Storage**: PostgreSQL-based session management
- **Static Assets**: Served directly by Express in production

### Key Features
- **Restaurant Branding**: Custom "Table4" branding with purple theme
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Type Safety**: End-to-end TypeScript coverage
- **Modern UI**: shadcn/ui components with consistent design system
- **Performance**: Optimized build process and efficient state management