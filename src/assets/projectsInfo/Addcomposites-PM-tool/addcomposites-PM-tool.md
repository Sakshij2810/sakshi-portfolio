# Overview

This project is an internal project management (PM) tool for Addcomposites, designed to replace their existing Odoo-based system. Its primary purpose is human resource optimization through AI-powered daily task generation, simplified mobile-first interfaces, and deep integration with the Google ecosystem (Drive, Calendar, Meet, Chat). The tool aims to ensure every employee has 1-3 clear daily tasks while providing comprehensive project management capabilities for managers. The business vision is to streamline operations, improve employee productivity, and enhance communication within the organization. A new initiative involves the clean room reimplementation of OpenProject features to provide comprehensive enterprise-grade project management capabilities, built from scratch to maintain NOVE's proprietary license while using OpenProject as a reference.

## Current Status (Nov 25, 2025)

**✅ Phase 3: Gantt Charts & Timeline - Foundation Layer 1 Complete**

- Visual timeline rendering with gantt-task-react v0.3.9
- Dual routing pattern: per-project (tab) + global (sidebar)
- 11 features implemented (25% of Phase 3)
- Profile images integrated using `getEmployeePhoto()` utility (matches TaskList implementation)
- Quarter view column width optimized: 8px → 35px (4.4x wider for better readability)
- Member cards dynamically matched to section heights using ResizeObserver
- Bug fixed: Changed useMemo → useEffect for proper state management
- Overall project: 16.6% complete (58/348 features)

**Recent Improvements (Nov 25, 2025 - Session 2):**

- Integrated employee profile images in Gantt member cards using standardized `getEmployeePhoto()` utility
- Significantly improved spacing in Quarter view (now 3150px total width for exceptional readability)
- Avatar fallback system: loads from employee assets folder → default avatar → member initials
- Responsive column widths maintained: Week (140px), Year (100px), Today (50px), Month (50px), Quarter (35px)

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Core Architecture Pattern

The system utilizes a modular monolith backend, a React-based frontend, and leverages existing Google infrastructure.

### Backend (Modular Monolith)

The backend is a unified Express.js application (`Nove_Backend_Unified`) that combines functionalities for authentication, user management, project lifecycle, task generation and management, company information, leads, analytics, security, conversations, and Google Workspace integration. All database access uses `pg Pool` directly instead of Prisma ORM due to workspace path incompatibilities. The OpenProject module foundation phase is complete, including 45 database tables, backend module structure, and automatic database initialization (with increased connectionTimeoutMillis to 30s for reliable schema initialization). Phase 1 (Projects Module) is fully complete with production-ready filtering, sorting, status counts, and **all 10 project detail tabs implemented** (Overview, Work Packages, Gantt, Board, Team Planner, Meetings, News, Wiki, Members, Settings). Phase 2 (Work Packages) is complete with full CRUD operations, DataTableV2 pattern, 5 filters, search, and pagination. **Phase 3 (Work Package Detail View) is complete** with clickable table rows, comprehensive detail page showing all work package information, edit/delete actions, breadcrumbs navigation, and 5-tab structure (Overview functional, Activity/Relations/Watchers/Files prepared for future implementation). The project details view features a dual navigation system with vertical left sidebar for global navigation and horizontal top tabs for project-specific navigation. Tab routing uses URL-based navigation with useMemo stabilization to prevent tab flashing during data loading. All placeholder tabs include loading guards, project-aware context, and implementation messaging. The Activities API endpoint returns real project lifecycle events from the database.

### Database Design

The primary database is PostgreSQL, accessed via `pg Pool` for raw SQL queries. The schema utilizes fact/dimension tables and includes standardized fields for consistency. Key tables manage user roles, module security, tasks, projects, and company information. The OpenProject module integrates 45 new tables, all prefixed `op_*`, with automatic initialization and seeding. Production-ready performance indexes include: created_by, timestamps (create_ts, update_ts), status, composite indexes (status+create_ts, project_id+user_uuid), and a functional index on COALESCE(identifier, name) for seamless identifier sorting.

### Frontend Architecture

The frontend is built with React 18 and TypeScript, using Material-UI (MUI) v5 for the UI, Redux Toolkit for state management, Vite for building, and React Router v6 for routing. The Google Chat module is a pure Google Chat interface clone that uses the Google Chat API for all operations, with no internal message storage. It integrates with Google Admin SDK for user enrichment and links chat participants to NOVE users.

**Lazy Loading and Code Splitting**: All OpenProject route components use React.lazy() with explicit Suspense boundaries to prevent router context errors. Each lazy-loaded route element is wrapped with `<Suspense fallback={<LoadingScreen />}>` to ensure proper context availability.

**Rich Text Security**: Work package descriptions and other rich text content use DOMPurify for XSS protection. The `sanitizeRichText()` utility (src/utils/sanitizeHtml.ts) provides safe HTML rendering with configurable allowed tags and attributes. Three sanitization levels are available: `sanitizeHtml` (default), `sanitizeRichText` (permissive for work packages), and `sanitizePlainText` (restrictive for comments).

#### DataTableV2 Pattern (CRITICAL)

**ALWAYS use the DataTableV2 component for all table lists** (work packages, tasks, projects, etc.). Never create custom MUI tables. This is a mandatory architectural pattern.

Reference implementation: `TaskList.tsx` (`ADDCOMP PM TOOL/Nove_Frontend/src/views/application/tasks/taskList/TaskList.tsx`)

Key requirements:

- Use `useTableV2State` hook for state management (pagination, filters, search, column visibility)
- Define `masterColumns` array with proper `IDataTableV2MasterColumn` interface
- Build `tableProps: IDataTableV2Props` object
- Use `customCommandBar` for filters (search, dropdowns, autocompletes, etc.)
- Include proper breadcrumbs via `CustomBreadcrumbs` component
- Add status tabs with counts when applicable (using MUI Tabs)
- Render `<DataTableV2 {...tableProps} />` instead of custom tables

This pattern ensures:

- Consistent UI/UX across all list views
- Reusable filtering, sorting, and pagination logic
- Proper column visibility management
- Standardized export/refresh/search functionality

#### StandardTableActions Pattern (CRITICAL)

**ALWAYS use the StandardTableActions component for table row actions** instead of custom IconButtons or Menus. This is a mandatory pattern for consistent action handling across all tables.

Reference implementation: `WorkPackagesTab.tsx` and `ProjectsListView.tsx`

Component location: `src/mui-components/StandardTableActions/StandardTableActions.tsx`

Key props:

- **Common actions**: `onEditClick`, `onDeleteClick`, `onViewDetails`, `onDuplicateClick`, `onDownLoadClick`, etc.
- **otherActions**: Array of simple icon-based actions:
  ```typescript
  otherActions={[
    {
      icon: IconComponent,  // React component type (e.g., ArchiveIcon)
      onClick: () => void,  // No event parameter
      tooltip: string
    }
  ]}
  ```
- **more**: For complex dropdown menus using ContextMenu:
  ```typescript
  more={{
    menuItems: [
      {
        icon: 'mdi:icon-name',  // Iconify string
        label: 'Action label',
        onClick: () => void,
        disabled?: boolean
      }
    ]
  }}
  ```

Important notes:

- ContextMenu (via `more` prop) **automatically handles `evt.stopPropagation()`** - perfect for table row actions
- Use `more.menuItems` for dropdown menus with multiple options
- Use `otherActions` for simple single-icon actions
- Never create custom Menu/IconButton combinations for table actions
- Maintains consistent styling and behavior across all tables

### Security Implementation

Authentication is handled via JWT tokens with Google OAuth 2.0. Authorization uses Role-Based Access Control (RBAC) with granular module permissions. Security features include CORS protection, rate limiting, and request validation.

### API Features

A general record counts endpoint provides universal status counts. Deep Google integration supports OAuth2, Service Account Authentication, and interactions with Google Chat, Calendar, and Drive APIs.

#### Unified API Response Schema

All paginated endpoints in the OpenProject module use a standardized response format powered by the `formatPaginatedResponse` utility (`utils/apiResponse.js`):

**Success Response Structure:**

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "total": 100,
    "limit": 25,
    "offset": 0,
    "page": 1,
    "totalPages": 4
  },
  "meta": {
    "sortBy": "created_desc",
    "sortOrder": "desc",
    "filters": {
      "status": "active",
      "search": "keyword",
      ...
    }
  },
  "timestamp": "2025-11-23T09:00:00.000Z"
}
```

**Error Response Structure:**

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "FETCH_ERROR",
    "message": "Error description"
  },
  "timestamp": "2025-11-23T09:00:00.000Z"
}
```

**Key Features:**

- Input validation with safe defaults (limit ≥ 1, offset ≥ 0) to prevent NaN/Infinity
- Consistent pagination metadata across all endpoints
- Metadata tracking for filters and sorting
- ISO 8601 timestamps
- Backwards-compatible with frontend code

**Endpoints using this pattern:**

- `GET /api/v1/openproject/work-packages` (global work packages)
- `GET /api/v1/openproject/projects/:project_uuid/work-packages` (project work packages)
- `GET /api/v1/openproject/projects` (projects list)

All new paginated endpoints should use `formatPaginatedResponse` to maintain consistency.

### Design Decisions

Key design decisions include deep integration with the Google ecosystem, a simplified mobile-first daily interface focusing on 1-3 tasks, and an "everything-as-project" model.

## Production Deployment Strategy

The system deploys on Replit Autoscale with an Express server (`production-server.js`) serving the static frontend and proxying API requests to the unified backend. The build process uses `build-for-production.sh` to compile the frontend. The production server manages environment variables and automatically restarts the backend if it crashes.

# External Dependencies

## Google Cloud Platform

- **Google Drive API**: Document storage and management.
- **Google Calendar API**: Employee availability and scheduling.
- **Google Meet API**: Meeting integration.
- **Google Chat API**: Communication workflows.
- **Google OAuth 2.0**: Authentication provider.

## Database and Infrastructure

- **PostgreSQL**: Primary database.
- **pg (node-postgres)**: Direct PostgreSQL client.
- **Redis**: Session management and caching (planned).

## Frontend Dependencies

- **Material-UI (MUI)**: Component library.
- **Redux Toolkit**: State management.
- **React Router**: Client-side routing.
- **Axios**: HTTP client.
- **Chart.js**: Analytics and reporting visualizations.
- **DOMPurify**: HTML sanitization for XSS protection in rich text content.

## Development and Deployment

- **Node.js 18+**: Runtime environment.
- **Express.js**: Web framework.
- **Socket.IO**: Real-time communication.
- **Vite**: Frontend build tool.

## Third-party Integrations

- **Addcomposites oy API**: Integration with existing company systems.
- **bcryptjs**: Password hashing.
- **jsonwebtoken**: JWT token handling.
- **helmet**: Security headers.
- **morgan**: HTTP request logging.
