# Recycle Backoffice - Admin Dashboard

A comprehensive back-office administration system built with modern web technologies for managing recycling operations, leads, customers, inventory, and business workflows.

---

## 🛠️ Tech Stack

### Core Framework

| Technology           | Version | Purpose              |
| -------------------- | ------- | -------------------- |
| **React**            | 18.1.0  | Core UI library      |
| **TypeScript**       | 5.6.3   | Type-safe JavaScript |
| **React Router DOM** | 6.3.0   | Client-side routing  |

### State Management

| Technology        | Version | Purpose                  |
| ----------------- | ------- | ------------------------ |
| **Redux Toolkit** | 2.8.2   | Global state management  |
| **React Redux**   | 8.0.1   | React bindings for Redux |
| **Redux Thunk**   | 2.3.0   | Async action handling    |
| **Immer**         | 9.0.15  | Immutable state updates  |

### UI Framework & Components

| Technology             | Version | Purpose             |
| ---------------------- | ------- | ------------------- |
| **Material UI (MUI)**  | 5.11.5  | Component library   |
| **MUI Icons**          | 6.3.0   | Icon library        |
| **MUI X Date Pickers** | 6.16.3  | Date/time selection |
| **Emotion**            | 11.x    | CSS-in-JS styling   |
| **Lucide React**       | 0.541.0 | Modern icon set     |
| **Feather Icons**      | 4.29.0  | Feather icon set    |

### Data Visualization

| Technology       | Version | Purpose                |
| ---------------- | ------- | ---------------------- |
| **ApexCharts**   | 3.42.0  | Interactive charts     |
| **Recharts**     | 2.15.1  | React charts           |
| **React Flow**   | 11.11.4 | Workflow visualization |
| **D3 Hierarchy** | 3.1.2   | Hierarchical data      |

### Forms & Validation

| Technology | Version | Purpose           |
| ---------- | ------- | ----------------- |
| **Formik** | 2.2.9   | Form management   |
| **Yup**    | 0.32.11 | Schema validation |

### Rich Text Editors

| Technology        | Version | Purpose              |
| ----------------- | ------- | -------------------- |
| **TinyMCE React** | 5.1.1   | Full-featured editor |
| **React Quill**   | 2.0.0   | Lightweight editor   |

### Real-Time Communication

| Technology           | Version | Purpose                 |
| -------------------- | ------- | ----------------------- |
| **Socket.io Client** | 4.8.1   | WebSocket communication |
| **Yjs**              | 13.6.27 | Real-time collaboration |

### File Handling & Export

| Technology         | Version | Purpose             |
| ------------------ | ------- | ------------------- |
| **ExcelJS**        | 4.3.0   | Excel generation    |
| **XLSX**           | 0.18.5  | Spreadsheet parsing |
| **File Saver**     | 2.0.5   | File downloads      |
| **React Dropzone** | 14.3.5  | File upload UI      |
| **HTML2Canvas**    | 1.4.1   | Screenshot capture  |
| **PDF.js**         | 4.9.155 | PDF rendering       |

### Calendar & Date Management

| Technology             | Version | Purpose            |
| ---------------------- | ------- | ------------------ |
| **React Big Calendar** | 0.40.1  | Calendar component |
| **Moment.js**          | 2.29.4  | Date manipulation  |
| **Date-fns**           | 2.21.3  | Date utilities     |

### Drag & Drop

| Technology              | Version | Purpose             |
| ----------------------- | ------- | ------------------- |
| **Hello Pangea DnD**    | 18.0.1  | Drag and drop       |
| **React Beautiful DnD** | 13.1.1  | Beautiful drag/drop |
| **Muuri React**         | 3.1.7   | Grid layouts        |

### HTTP & API

| Technology | Version | Purpose     |
| ---------- | ------- | ----------- |
| **Axios**  | 0.27.2  | HTTP client |

### Utilities

| Technology  | Version | Purpose              |
| ----------- | ------- | -------------------- |
| **Lodash**  | 4.17.21 | Utility functions    |
| **UUID**    | 9.0.0   | Unique ID generation |
| **Fuse.js** | 6.6.2   | Fuzzy search         |
| **Juice**   | 11.0.0  | CSS inlining         |

### Location Services

| Technology                    | Version | Purpose                |
| ----------------------------- | ------- | ---------------------- |
| **React Google Autocomplete** | 2.6.1   | Address autocomplete   |
| **React Google Places**       | 3.3.4   | Places API integration |

---

## 🚀 Main Features

### 📊 Dashboard & Analytics

- **Interactive Dashboard** with real-time data visualization
- **Charts & Graphs** using ApexCharts and Recharts
- **Follow-up Charts** for lead tracking
- **Theme Customization** with RTL support

### 👥 Customer Relationship Management (CRM)

- **Lead Management**
  - Lead creation and tracking
  - Lead status workflow
  - Activity logging and history
  - WhatsApp group integration
  - Checklist management
  - Lead conversion to opportunities
- **Customer Management**

  - Customer profiles and information
  - Delivery address management
  - Customer documents and attachments
  - Customer activity history

- **Opportunity Management**
  - Opportunity pipeline tracking
  - Status progression
  - Conversion tracking

### 🔄 Workflow Automation

- **Visual Workflow Builder** using React Flow
- **Action Nodes** for automated tasks
- **Condition Nodes** for decision branching
- \*\*Email/WhatsApp automation triggers
- \*\*Parent-child workflow relationships

### 📦 Operations Management

- **Inventory Management**

  - Stock tracking
  - Inventory adjustments
  - Stock movement logs

- **Gate Entry System**

  - Vehicle entry/exit tracking
  - Gate logs management

- **Job Cards**

  - Work order creation
  - Task assignment
  - Progress tracking

- **Pickup Management**

  - Pickup scheduling
  - Pickup tracking
  - Driver assignment

- **Breakdown Logs**
  - Issue reporting
  - Resolution tracking

### 📅 Booking System

- **Booking Management**
  - Booking creation and scheduling
  - Calendar integration
  - Status tracking

### 📱 Communication & Marketing

- **WhatsApp Integration**

  - QR code connection
  - Message templates
  - Group messaging
  - WhatsApp campaign management

- **Marketing Campaigns**

  - Campaign creation and management
  - Template management
  - Audience targeting

- **Meta Template Management**
  - WhatsApp Business templates
  - Template approval workflow

### 🏢 Business Configuration

- **Company Information Management**
- **Company Outlet Management**

  - Multi-location support
  - Outlet-specific settings

- **Category Management**

  - Product/service categories
  - Category types

- **Maker/Model Management**

  - Vehicle/product makers
  - Model hierarchies

- **Food Menu Management**
  - Menu items
  - Pricing

### 💳 Financial Management

- **Payment Details Tracking**
- **Subscription Management**

  - Plan selection
  - Subscription status

- **Beneficiary Management**

  - Payment beneficiaries
  - Bank details

- **COD Certificates**
  - Certificate generation
  - Certificate tracking

### 🔐 Security & Access Control

- **Role-Based Access Control (RBAC)**

  - Module-level permissions
  - Role groups
  - User-role assignment

- **Security Approvals**

  - Approval workflows
  - Multi-level approvals

- **User Management**
  - User profiles
  - User zones/branches
  - User documents

### 📝 Templates & Content

- **Email Templates**
- **WhatsApp Templates**
- **Document Templates**
- **Rich Text Editor** (TinyMCE & Quill)

### 💬 Communication Features

- **Real-time Chat** (Socket.io)
- **Comment System**
- **Activity Logging**
  - Email logs
  - SMS logs
  - WhatsApp logs
  - Approval history

### 📊 Reporting & Export

- **Excel Export** (ExcelJS, XLSX)
- **PDF Generation**
- **Data Tables** with filtering, sorting, pagination
- **Custom Reports**

### 🎨 UI/UX Features

- **Responsive Design**
- **RTL Support**
- **Theme Customization**
- **Drag-and-Drop Interfaces**
- **File Upload with Preview**
- **Image Gallery**
- **Lightbox Viewer**
- **Progress Timelines**
- **Custom Accordions**
- **Context Menus**

### 🔍 Search & Filtering

- **Fuzzy Search** (Fuse.js)
- **Advanced Table Filtering**
- **Auto-complete Searches**
- **Location Autocomplete** (Google Places)

### 🔔 Notifications

- **Real-time Notifications**
- **Notification Panel**
- **Socket-based Updates**

### 🌐 Review & Feedback

- **Review Management**
- **Reply System**
- **VScrape Integration**

### ⚙️ Configuration Management

- **Environment Configuration**
- **Organization-level Settings**
- **Custom Cancellation Reasons**
- **ENR Cancellation Reasons**
- **Status Management**

---

## 📁 Project Structure

```
src/
├── api/              # API configuration and services
├── assets/           # Static assets (images, icons, fonts)
├── components/       # Reusable UI components
│   ├── Table/        # Data table components
│   ├── TableV2/      # Enhanced table with caching
│   ├── FileUpload/   # File upload components
│   ├── Charts/       # Chart components
│   ├── Dialogs/      # Modal dialogs
│   ├── Activity/     # Activity logging components
│   └── ...
├── constants/        # Application constants & enums
├── contexts/         # React context providers
│   ├── AuthProvider/ # Authentication context
│   ├── SocketProvider/ # WebSocket context
│   └── BreadcrumbProvider/
├── helpers/          # Utility functions
├── hooks/            # Custom React hooks
├── layout/           # Layout components
├── providers/        # Additional providers
├── redux/            # Redux store & slices
├── router/           # Application routing
├── security/         # Security utilities
├── services/         # External service integrations
└── views/            # Page components
    ├── authentication/
    ├── dashboard/
    ├── leads/
    ├── customers/
    ├── Automation/
    ├── Inventory/
    └── ...
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

### Environment Variables

Create a `.env` file with the following variables:

```env
REACT_APP_SERVER_URL=<API_BASE_URL>
REACT_APP_CROSSROADS_SERVER_URL=<CROSSROADS_API_URL>
REACT_APP_IMAGE_BASE_URL=<IMAGE_SERVER_URL>
REACT_APP_OTHER_USER_ACCESS_DOMAIN=<MULTI_USER_DOMAIN>
```

---

## 📜 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `yarn start`    | Start development server |
| `yarn build`    | Build for production     |
| `yarn test`     | Run test suite           |
| `yarn lint`     | Run ESLint               |
| `yarn lint:fix` | Fix linting issues       |

---

## 🔧 Key Integrations

- **Google Places API** - Location autocomplete
- **Socket.io** - Real-time communication
- **WhatsApp Business API** - Messaging integration
- **PDF.js** - PDF viewing
- **TinyMCE** - Rich text editing

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

_Built with ❤️ using React, TypeScript, and Material UI_
