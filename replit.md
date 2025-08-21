# Overview

This is a full-stack web application built with React and Express, featuring a romantic love-themed interactive experience. The application displays animated balloons with romantic messages, heart particles, and various interactive elements designed to create an engaging user experience for expressing love and affection.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **UI Components**: Comprehensive set of Radix UI primitives for accessibility and functionality
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: Hot reload with tsx and Vite middleware integration

## Database Design
- **ORM**: Drizzle ORM with TypeScript support
- **Schema**: User table with id, username, and password fields
- **Migrations**: Automated schema migrations to `./migrations` directory
- **Connection**: Neon Database serverless PostgreSQL

## Development Environment
- **Build System**: Vite for frontend bundling and esbuild for backend compilation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Code Quality**: TypeScript strict mode with comprehensive type checking

## Storage Layer
- **Implementation**: Dual storage strategy with in-memory storage for development and PostgreSQL for production
- **Interface**: IStorage abstraction allowing easy switching between storage backends
- **Operations**: Basic CRUD operations for user management

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle Kit**: Database migration and schema management tools

## UI and Design
- **shadcn/ui**: Pre-built component library based on Radix UI primitives
- **Radix UI**: Accessible, unstyled UI components for React
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Google Fonts**: External font loading for Dancing Script and Poppins fonts

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Cartographer**: Replit's code mapping and navigation tool
- **Runtime Error Overlay**: Enhanced error handling during development

## Animation and Interaction
- **Framer Motion**: Production-ready motion library for React animations
- **Embla Carousel**: Lightweight carousel component for content display
- **date-fns**: Modern JavaScript date utility library

## Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration bridge between React Hook Form and Zod