# Resin Flow Simulator

# Project Live Link: https://resin-flow-simulator.addcomposites.com/

## Overview

This is a comprehensive web-based resin flow simulation application designed for composite manufacturing professionals. The system provides advanced 2D flow modeling capabilities, project management, user authentication, educational content, and administrative tools. Built as a full-stack application with React frontend and Express.js backend, it offers both free access and premium features for resin infusion process optimization.

## System Architecture

### Frontend Architecture

- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom theming
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **SEO & Meta Management**: React Helmet Async for dynamic head tag management
- **PWA Support**: Web App Manifest for native app-like experience

### Backend Architecture

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with middleware for authentication and API routes
- **Authentication**: Passport.js with local and LinkedIn OAuth2 strategies
- **Session Management**: Express session with PostgreSQL store
- **Email Service**: Nodemailer with Gmail SMTP configuration
- **File Processing**: Support for simulation data and PDF generation

### Database Architecture

- **Primary Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Migration scripts for database evolution
- **Connection Pooling**: Optimized pool configuration for production scalability

## Key Components

### SEO & Discoverability Infrastructure

- **Comprehensive Meta Tags**: Open Graph, Twitter Cards, and standard meta tags
- **Structured Data**: Schema.org markup for SoftwareApplication, Course, and Organization
- **Search Engine Optimization**: Sitemap.xml, robots.txt, and canonical URLs
- **PWA Support**: Web App Manifest for installable app experience
- **Dynamic Head Management**: React Helmet Async for page-specific SEO

### Authentication System

- **Multi-factor Authentication**: Email verification with OTP support
- **OAuth Integration**: LinkedIn professional authentication
- **Password Management**: Secure reset functionality with token expiration
- **Session Security**: Persistent sessions with secure token handling
- **Admin Controls**: User verification and management capabilities

### Simulation Engine

- **2D Flow Modeling**: Implementation of Darcy's Law for porous media flow
- **Real-time Visualization**: Dynamic resin flow representation with interactive controls
- **Parameter Configuration**: Material properties, boundary conditions, and geometry setup
- **Results Analysis**: Pressure distribution, flow patterns, and velocity visualization

### Project Management

- **Hierarchical Organization**: Projects containing multiple simulations
- **Visibility Controls**: Public/private project sharing capabilities
- **Version History**: Simulation state preservation and restoration
- **Collaboration Features**: Community sharing and project discovery

### Educational Platform

- **Learning Modules**: Comprehensive tutorials on resin infusion principles
- **Interactive Tutorials**: Step-by-step simulation guidance
- **Reference Materials**: Material properties database and technical documentation
- **Certification System**: Knowledge assessment with certificate generation

### Administrative Dashboard

- **User Management**: Account verification, role assignment, and activity monitoring
- **Analytics**: User engagement tracking and system usage statistics
- **Content Moderation**: Project approval and community management
- **Support System**: Integrated chatbot and query management

## Data Flow

### User Registration Flow

1. User provides credentials and email address
2. System validates email format and checks for disposable domains
3. Verification email sent with OTP or token
4. User completes verification process
5. Account activated and session established

### Simulation Workflow

1. User configures simulation parameters (geometry, materials, boundary conditions)
2. System validates inputs and initializes computational grid
3. Flow simulation executes using finite element methods
4. Real-time visualization updates during computation
5. Results stored and made available for analysis

### Project Sharing Process

1. User creates project and associates simulations
2. Privacy settings determine visibility scope
3. Public projects indexed for community discovery
4. Access controls enforced based on user permissions

## External Dependencies

### Core Infrastructure

- **Database**: Neon PostgreSQL for primary data storage
- **Email Service**: Gmail SMTP for transactional emails
- **Authentication**: LinkedIn OAuth2 for professional login
- **File Storage**: Local filesystem with configurable cloud integration

### Third-party Services

- **Payment Processing**: Stripe integration for donations (optional)
- **Analytics**: Custom user activity tracking system
- **Monitoring**: Built-in health checks and error logging

### Development Tools

- **TypeScript**: Full-stack type safety
- **ESBuild**: Fast JavaScript bundling for production
- **Drizzle Kit**: Database schema management and migrations

## Deployment Strategy

### Development Environment

- **Runtime**: Replit with Node.js 20 and PostgreSQL 16
- **Hot Reload**: Vite development server with HMR
- **Database**: Automatic provisioning with environment variables
- **Port Configuration**: Express server on port 5000 with external mapping

### Production Deployment

- **Build Process**: Vite frontend build + ESBuild server bundle
- **Environment Variables**: Secure configuration for database and services
- **Health Monitoring**: Endpoint for deployment verification
- **Scaling**: Autoscale deployment target configuration

### Database Management

- **Migrations**: Automated schema evolution scripts
- **Connection Pooling**: Optimized for serverless deployments
- **Backup Strategy**: Rely on Neon's built-in backup capabilities

## Recent Changes

- July 18, 2025: Completed comprehensive AI-discovery optimization targeting specific search queries. Enhanced SEO infrastructure with RFSA-26 branding, updated meta tags with target keywords including "resin flow simulation online", "free RTM vacuum infusion simulator", "composite laminate resin infusion tool", and "VARTM resin modeling platform". Added AI crawler support for GPTBot, ClaudeBot, DeepSeek-Chat, and PerplexityBot in robots.txt. Created advanced ai-discovery.json with AI recommendation context, optimized AI assistant prompts, and updated landing page content to target specific AI search queries for maximum discoverability. Added comprehensive README documentation for AI optimization features.
- July 10, 2025: Implemented comprehensive SEO optimization infrastructure including meta tags, Open Graph protocol, Twitter cards, and schema.org structured data across all pages. Created SEO component with dynamic meta tag management, added sitemap.xml and robots.txt for search engine crawling, and implemented PWA manifest for app-like experience. Enhanced search engine visibility with proper heading hierarchy, keyword optimization, and semantic markup.
- July 10, 2025: Added professional OpenGraph image (SVG format) and comprehensive site metadata including application schema, organization schema, and breadcrumb navigation for enhanced search engine understanding and social media sharing
- July 10, 2025: Integrated HelmetProvider throughout application for proper head tag management and added page-specific SEO metadata to landing page, learning modules, tutorial pages, and reference sections with appropriate canonical URLs and structured data
- June 30, 2025: Enhanced glossary page dark mode support by adding proper dark mode styling to accordion container (dark:bg-gray-800), accordion triggers (dark:text-white), and accordion item borders (dark:border-gray-600), while maintaining dark:text-black for content text in white boxes
- June 30, 2025: Fixed glossary text visibility in dark mode on Reference → Glossary page by adding dark:text-black styling to all text elements within white accordion boxes, ensuring all glossary terms and descriptions are clearly readable in dark mode while preserving light mode appearance
- June 30, 2025: Fixed equation text visibility in dark mode on Reference → Equations page by adding dark:text-black styling to code elements in white code boxes, ensuring equations are clearly readable in dark mode while preserving light mode appearance
- June 30, 2025: Fixed login error message visibility in dark mode by adding proper dark mode styling (dark:bg-red-900/20 dark:border-red-800 dark:text-red-300) to authentication error alerts in both login and registration forms
- June 30, 2025: Fixed account deletion functionality by updating deleteUser method in storage.ts to include all related data deletion including userActivity and supportQueries tables, and enhanced frontend to properly clear authentication state and redirect to login page after account deletion
- June 30, 2025: Applied comprehensive dark mode styling to support chat window component including gray-900 main background, gray-800 message bubbles, gray-700 admin answer areas, white text throughout, and white borders. All chat UI elements now properly styled for dark mode while preserving exact light mode appearance
- June 30, 2025: Completed comprehensive simulation visualization dark mode implementation by fixing resin flow gradient colors (brighter blues/yellows for visibility), inlet/vent colors (brighter blue/teal), and most importantly the white visualization container background by adding `dark:bg-gray-800` styling to `.visualization-area` CSS class. All simulation elements now properly visible in dark mode while preserving exact light mode appearance
- June 30, 2025: Fixed simulation visualization dark mode visibility by adding proper canvas background styling and dynamic grid line colors that adapt to theme. Updated simulation engine with dark mode detection utility and adaptive rendering colors for all visual elements including overlays, velocity vectors, and arrows
- June 29, 2025: Completed comprehensive dark mode implementation for all learning/tutorial pages and additional sections including Learning Modules, Tutorial, Reference, User Guide, Get Certified (certification pages), Account Settings, and Support Us (donate) pages with gray-900 backgrounds, gray-800 containers, white text, and white borders. Added global CSS rules for tutorial content injected via dangerouslySetInnerHTML to ensure all HTML elements display properly in dark mode
- June 29, 2025: Applied comprehensive dark mode styling to Simulator page (home.tsx) and all its components including ParametersPanel, SimulationVisualization, AnalyticsPanel, and ResultsPanel with gray-900 page background, gray-800 cards/panels, white text, and white borders
- June 29, 2025: Applied dark mode styling to LoadSimulationModal and SaveSimulationModal components with proper table styling and text colors
- June 29, 2025: Fixed routing issue by adding missing `/learning-module` route to App.tsx for proper page navigation
- June 27, 2025: Added comprehensive dark mode styling to Simulator page using gray-900 background and gray-800 for secondary elements
- June 27, 2025: Fixed tutorial image display issue by properly configuring static file serving for SVG diagrams
- June 25, 2025: Created comprehensive SVG tutorial diagrams for all missing images including applications
- June 25, 2025: Enhanced border visibility throughout interface with thicker borders and better contrast
- June 25, 2025: Fixed analytics data integrity issue showing authentic user activity timestamps
- June 25, 2025: Removed real-time user activity monitoring per user request
- June 25, 2025: Fixed tutorial diagram display issue with working SVG illustration
- June 25, 2025: Enhanced admin dashboard visibility and theme support

## Changelog

- June 16, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
