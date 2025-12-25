# AddStack - Composite Materials Platform

# Project Live Link: https://addstack.addcomposites.com/

## Overview

AddStack is a comprehensive composite materials design platform enabling engineers and researchers to design, analyze, and visualize composite structures. It aims to be the leading online tool for laminate design, material database management, and failure analysis for advanced materials like carbon fiber, kevlar, and fiberglass. The platform seeks to offer a user-friendly, free online solution for laminate calculation and design, bridging the gap for engineers seeking accessible yet powerful tools in composite engineering.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

AddStack is built with a modern web stack. The frontend utilizes React 18 with TypeScript, Vite for fast builds, Tailwind CSS with shadcn/ui for styling, and Three.js with React Three Fiber for 3D visualization. State management is handled by TanStack Query for server state and React hooks for local state, with Wouter for routing.

The backend is powered by Node.js with Express.js, written in TypeScript using ESM modules. Data persistence is managed with PostgreSQL and Drizzle ORM. Authentication is handled via Passport.js with session management, and Nodemailer (with Gmail SMTP) is used for email services.

Key features include:

- **Authentication System**: Session-based authentication with PostgreSQL storage, email verification, password reset, role-based access control (user, admin), and enhanced security features like rate limiting and CORS protection.
- **Material Management**: A comprehensive database for various composite materials (prepreg, woven fabrics) with properties, supporting user-created materials with workspace-level access and system-wide materials. Full CRUD operations are supported for materials.
- **Laminate Design**: An intuitive interface for layer-by-layer laminate construction, real-time property calculations using Classical Laminate Theory (CLT), support for diverse fiber orientations and stacking sequences, and 3D visualization.
- **Analysis Tools**: Capabilities for structural analysis, implementation of various failure criteria, and optimization algorithms for laminate design with comprehensive results visualization.
- **Workspace System**: Features for team collaboration, project organization, sharing, and role-based permissions.
- **Administrative Features**: An admin panel for user management, system monitoring, analytics, and a question/support system.
- **UI/UX Decisions**: Focus on a professional, responsive design with consistent branding (AddStack logo), gradient themes, dark mode support across components (e.g., material cards, analysis visualizations), and clear call-to-action elements. SEO optimization is integrated through structured data (JSON-LD), sitemaps, and targeted keywords emphasizing "Free Online Laminate Designer."

The application ensures data integrity and user experience by implementing aggressive caching strategies and immediate UI updates for operations like workspace renames and material modifications. Workflow validation prevents users from proceeding to analysis without a complete design, providing real-time feedback.

## External Dependencies

- **Stripe**: For donation and future subscription payment processing.
- **Gmail SMTP / SendGrid**: Primary and secondary email services for notifications and verification.
- **Nodemailer**: Email transport layer.
- **HubSpot**: For CRM integration, specifically contact management and lead tracking for new registrations.
- **PostgreSQL**: The primary database used for all application data.
- **Replit**: The deployment platform, used for hosting and auto-scaling.
- **ImageMagick**: For image processing related to file uploads.

## Changelog

- January 21, 2025: CRITICAL CLT ANALYSIS FIX FOR STACKING SEQUENCE ACCURACY - Fixed major issue where different laminate stacking sequences (e.g., [90/90/0] vs [0/90/0/90]) were showing identical results
  - Replaced oversimplified server-side CLT calculation with proper Classical Laminate Theory implementation
  - Fixed B matrix calculation (coupling stiffness) - was hardcoded to zero, now properly calculated based on layer positions
  - Implemented accurate ABD matrix calculation considering exact z-coordinate positions of each layer
  - Added proper Q-bar matrix transformations for off-axis layers including all coupling terms
  - Changed from weighted averaging to position-dependent stacking sequence analysis
  - Engineering constants (Ex, Ey, Gxy, vxy) now reflect actual laminate behavior differences
  - Strength analysis now uses first ply failure approach instead of averaged properties
  - Different stacking sequences will now show correct mechanical property differences as expected in real composites
  - Created comprehensive technical documentation (CLT_ANALYSIS_IMPROVEMENT.md) explaining the fix and validation approach
