export const personalInfo = {
  name: "Sakshi Jadhav",
  title: "Full Stack Developer",
  phone: "+91-8767552325",
  email: "sakshi2020jadhav@gmail.com",
  linkedin: "https://linkedin.com/in/sakshjadhav",
  github: "https://github.com/Sakshij2810",
  summary:
    "Dynamic and proactive Full Stack Developer eager to leverage strong technical skills and innovative solutions. Committed to contributing to a collaborative team and delivering impactful results.",
};

export const skills = {
  programming: [
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "Data Structures & Algorithms",
  ],
  webDevelopment: [
    "React.js",
    "Redux",
    "Redux Toolkit",
    "Redux Thunk",
    "React Router v6",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MUI",
    "Formik + Yup",
    "Webflow",
    "WordPress",
  ],
  toolsAndDevOps: [
    "Git & GitHub",
    "Docker",
    "Jira",
    "Agile Methodologies",
    "Yarn",
    "Odoo",
  ],
};

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Addcomposites oy",
    type: "Full Time - Remote",
    period: "Jul 2024 – Current",
    highlights: [
      "Developed 30+ enterprise modules (Leads, CRM, Payments, Bookings, Automation, Campaigns, RBAC) for a full-scale ERP used across multi-tenant businesses.",
      "Integrated real-time WhatsApp communication using Socket.IO & WhatsApp Business API, delivering live message updates, 2-way chat sync, template management, & message-status analytics for 1000+ conversations.",
      "Enhanced Lead Management with advanced search (10+ filters), status workflows, bulk operations, activity history, WhatsApp actions, & conversion pipelines—improving lead handling efficiency across the product.",
      "Engineered 100+ reusable components, 25+ custom hooks, 35+ utilities, helpers & 40+ Redux reducers, ensuring scalable architecture, reduced code duplication, & optimized rendering across the app.",
      "Improved overall application performance using code splitting, memoization, debounced inputs, & optimized state management, resulting in smoother UX & reduced unnecessary re-renders for high-data modules.",
      "Implemented an internal team chat system by integrating Google Chat API with Google OAuth 2.0, enabling secure login and seamless real-time communication workflows.",
    ],
    technologies: [
      "TypeScript",
      "React.JS",
      "Node.JS",
      "Express.JS",
      "SQL",
      "Socket.IO",
      "Google OAuth 2.0",
      "Google Chat API",
    ],
  },
  {
    title: "Web Developer",
    company: "Wisteria",
    type: "Intern - Remote",
    period: "Apr 2024 – Jul 2024",
    highlights: [
      "Boosted user traffic by 80% through optimized website design and improved user engagement.",
      "Reduced 100+ invalid user records, enhancing shipping efficiency by implementing form validation logic.",
      "Automated delivery date calculation by integrating Shiprocket, Increased customer acquisition by automating WhatsApp/email marketing.",
    ],
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Odoo",
      "OAuth",
      "Facebook Developer Tools",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "UpGrad",
    type: "Trainee - Remote",
    period: "Aug 2023 – Mar 2024",
    highlights: [
      "Gained 9+ months of hands-on training in MERN stack, Agile methodology, Jira.",
      "ECOMMERCE: Authentication, Admin Dashboard, Payment Processing & Order Tracking, Product Filtering, Searching, & Pagination.",
      "StackOverflow Clone: Developed a StackOverflow-like project that automated 80% of the workflow.",
    ],
    technologies: [
      "Razorpay",
      "bcryptjs",
      "MERN Stack",
      "jsonwebtoken",
      "Chart.js",
      "Axios",
      "Git & GitHub",
    ],
  },
];

// Project categories
export type ProjectCategory = 
  | "addcomposites" 
  | "client-projects"
  | "personal";

export interface Project {
  id: string;
  title: string;
  company?: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  categoryLabel: string;
  technologies: string[];
  highlights: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: {
    users?: string;
    rating?: number;
  };
  features?: string[];
}

export const projectCategories = [
  { id: "addcomposites", label: "Addcomposites oy", icon: "building" },
  { id: "client-projects", label: "Client Projects", icon: "globe" },
  { id: "personal", label: "Personal Projects", icon: "code" },
];

// Import paths for project images
const projectImages = {
  addcomposites: new URL('../assets/projectsInfo/addcomposites/Screenshot 2025-12-25 at 12.19.33.png', import.meta.url).href,
  pmTool: new URL('../assets/projectsInfo/Addcomposites-PM-tool/Screenshot 2025-12-25 at 11.37.53.png', import.meta.url).href,
  addstack: new URL('../assets/projectsInfo/Addstack/Screenshot 2025-12-25 at 11.58.10.png', import.meta.url).href,
  banquetFirst: new URL('../assets/projectsInfo/Banquet-first/Screenshot 2025-12-25 at 11.24.47.png', import.meta.url).href,
  crds: new URL('../assets/projectsInfo/Composite Rotor Design Suite/Screenshot 2025-12-25 at 12.24.34.png', import.meta.url).href,
  crossroads: new URL('../assets/projectsInfo/CrossRoads/Screenshot 2025-12-25 at 12.01.28.png', import.meta.url).href,
  customizeOutfit: new URL('../assets/projectsInfo/customize-outfit/Screenshot 2024-06-06 at 15.00.26.png', import.meta.url).href,
  ecommerce: new URL('../assets/projectsInfo/ECOMMERCE/Screenshot 2024-06-06 at 15.05.41.png', import.meta.url).href,
  hotelBnb: new URL('../assets/projectsInfo/Hotel-bnbme/Screenshot 2025-12-25 at 12.18.46.png', import.meta.url).href,
  hotelIrada: new URL('../assets/projectsInfo/Hotel-irada/Screenshot 2025-12-25 at 12.06.30.png', import.meta.url).href,
  linkentie: new URL('../assets/projectsInfo/linkenite/Screenshot 2025-12-25 at 12.21.34.png', import.meta.url).href,
  razorpay: new URL('../assets/projectsInfo/razorpay/Screenshot 2024-06-06 at 14.52.57.png', import.meta.url).href,
  recycleCity: new URL('../assets/projectsInfo/recycle-city/Screenshot 2025-12-25 at 12.15.30.png', import.meta.url).href,
  rejouice: new URL('../assets/projectsInfo/REJOUICE/Screenshot 2024-06-06 at 15.03.10.png', import.meta.url).href,
  resinFlow: new URL('../assets/projectsInfo/Resin-flow-simulator/Screenshot 2025-12-25 at 11.59.29.png', import.meta.url).href,
  rockworth: new URL('../assets/projectsInfo/Rockworth/Screenshot 2025-12-25 at 12.03.13.png', import.meta.url).href,
  stackoverflow: new URL('../assets/projectsInfo/stackoverflow/Screenshot 2024-06-06 at 15.02.02.png', import.meta.url).href,
  swarajrise: new URL('../assets/projectsInfo/SwarajRise/Screenshot 2025-12-25 at 11.55.16.png', import.meta.url).href,
  swarajverse: new URL('../assets/projectsInfo/swarajverse/Screenshot 2025-12-25 at 12.44.00.png', import.meta.url).href,
  taskManagement: new URL('../assets/projectsInfo/task-management-edgenroots/Screenshot 2025-12-25 at 12.04.24.png', import.meta.url).href,
  wisteria: new URL('../assets/projectsInfo/wisteria/Screenshot 2025-12-25 at 12.23.07.png', import.meta.url).href,
  aaxel: new URL('../assets/projectsInfo/Aaxel/Screenshot 2025-12-25 at 12.04.04.png', import.meta.url).href,
};

export const projects: Project[] = [
  // =====================
  // ADDCOMPOSITES PROJECTS (13 projects)
  // =====================
  {
    id: "banquet-first",
    title: "Banquet First ERP",
    company: "Addcomposites oy",
    description: "Enterprise Resource Planning system with 30+ modules for leads, CRM, payments, bookings, and WhatsApp integration.",
    fullDescription: `Enterprise Resource Planning (ERP) System - A comprehensive React-based web application for managing leads, customers, bookings, payments, and business operations with real-time communication capabilities.

Key Features:
• Complete Lead Lifecycle Management with advanced filtering and status tracking
• Real-time WhatsApp Business API integration with 2-way chat sync
• Visual Workflow Automation Builder using ReactFlow
• Payment & Accounting Module with financial reporting
• Role-Based Access Control (RBAC) with granular permissions
• Custom DataTableV2 with advanced filtering, sorting, and mobile optimization

Technical Achievements:
• 30+ Major Modules • 100+ Reusable Components • 15+ Custom Hooks
• 35+ Helper Functions • 30+ Redux Reducers • Real-time WebSocket updates`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Redux", "MUI", "Socket.IO", "Node.js", "PostgreSQL"],
    highlights: ["30+ Modules", "WhatsApp API", "Real-time"],
    image: projectImages.banquetFirst,
    liveUrl: "https://www.banquetfirst.com/",
    githubUrl: "https://github.com/Sakshij2810/addcomposites-work-overview",
    metrics: { users: "500+", rating: 4.9 },
    features: [
      "Lead Management with 10+ filters",
      "WhatsApp Business Integration",
      "Visual Workflow Automation",
      "Payment & Booking Management",
      "Role-Based Access Control",
      "Real-time Socket.IO updates",
    ],
  },
  {
    id: "addcomposites-pm",
    title: "Addcomposites PM Tool",
    company: "Addcomposites oy",
    description: "Internal project management tool with AI-powered task generation, Gantt charts, and Google Workspace integration.",
    fullDescription: `Internal project management tool for Addcomposites designed to replace their existing Odoo-based system. Features AI-powered daily task generation, mobile-first interfaces, and deep Google ecosystem integration.

Key Features:
• AI-powered daily task generation for 1-3 clear daily tasks
• Gantt Charts & Timeline visualization with gantt-task-react
• Google Workspace Integration (Drive, Calendar, Meet, Chat)
• OpenProject module with 45 database tables
• DataTableV2 pattern for all list views
• Work Package management with CRUD operations`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Redux", "MUI", "PostgreSQL", "Google APIs", "Socket.IO"],
    highlights: ["AI Tasks", "Gantt Charts", "Google Integration"],
    image: projectImages.pmTool,
    githubUrl: "https://github.com/Sakshij2810/addcomposites-work-overview",
    metrics: { users: "50+", rating: 4.8 },
    features: [
      "AI-powered task generation",
      "Gantt Chart visualization",
      "Google Workspace integration",
      "OpenProject module (45 tables)",
      "Work Package management",
      "Real-time collaboration",
    ],
  },
  {
    id: "addstack",
    title: "AddStack",
    company: "Addcomposites oy",
    description: "Composite materials design platform with laminate calculation, 3D visualization, and failure analysis tools.",
    fullDescription: `AddStack is a comprehensive composite materials design platform enabling engineers and researchers to design, analyze, and visualize composite structures. It's the leading online tool for laminate design, material database management, and failure analysis.

Key Features:
• Laminate Design with Classical Laminate Theory (CLT) calculations
• 3D Visualization using Three.js and React Three Fiber
• Material Database for prepreg, woven fabrics with full CRUD
• Failure Criteria implementation and optimization algorithms
• Workspace System for team collaboration
• Admin Panel with analytics and user management`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Three.js", "Tailwind", "PostgreSQL", "Drizzle ORM"],
    highlights: ["3D Visualization", "CLT Analysis", "Material DB"],
    image: projectImages.addstack,
    liveUrl: "https://addstack.addcomposites.com/",
    metrics: { users: "200+", rating: 4.9 },
    features: [
      "Classical Laminate Theory calculations",
      "3D composite visualization",
      "Material properties database",
      "Failure analysis tools",
      "Team collaboration workspaces",
    ],
  },
  {
    id: "resin-flow",
    title: "Resin Flow Simulator",
    company: "Addcomposites oy",
    description: "Web-based resin flow simulation for composite manufacturing with 2D flow modeling and real-time visualization.",
    fullDescription: `Comprehensive web-based resin flow simulation application designed for composite manufacturing professionals. Provides advanced 2D flow modeling using Darcy's Law, real-time visualization, and educational content.

Key Features:
• 2D Flow Modeling with Darcy's Law implementation
• Real-time Visualization with interactive controls
• Project Management with hierarchical organization
• Educational Platform with tutorials and certification
• Multi-factor Authentication with LinkedIn OAuth
• PWA Support for native app-like experience`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Vite", "PostgreSQL", "Express.js", "Passport.js"],
    highlights: ["2D Simulation", "Real-time", "Educational"],
    image: projectImages.resinFlow,
    liveUrl: "https://resin-flow-simulator.addcomposites.com/",
    metrics: { users: "100+", rating: 4.8 },
    features: [
      "Darcy's Law flow modeling",
      "Real-time visualization",
      "Project management system",
      "Educational tutorials",
      "Certification system",
    ],
  },
  {
    id: "crds",
    title: "Composite Rotor Design Suite",
    company: "Addcomposites oy",
    description: "Advanced design suite for composite rotor engineering with structural analysis and optimization tools.",
    fullDescription: `The Composite Rotor Design Suite is an advanced engineering tool for designing and analyzing composite rotors used in various applications including aerospace and industrial machinery.

Features comprehensive structural analysis capabilities, material selection guidance, and optimization algorithms for rotor design.`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Three.js", "Node.js", "PostgreSQL"],
    highlights: ["Rotor Design", "3D Analysis", "Optimization"],
    image: projectImages.crds,
    metrics: { users: "50+", rating: 4.7 },
    features: [
      "Rotor structural analysis",
      "Material optimization",
      "3D visualization",
      "Performance simulation",
    ],
  },
  {
    id: "crossroads",
    title: "CrossRoads Helpline",
    company: "Addcomposites oy",
    description: "Crisis intervention and support management system with secure anonymous chat and counselor assignment.",
    fullDescription: `A sensitive and secure crisis intervention platform designed for mental health support organizations. Features anonymous chat support, counselor assignment, case management, and comprehensive reporting.

Built with a focus on privacy, security, and accessibility to ensure those in crisis can receive immediate support.`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.IO"],
    highlights: ["Crisis Support", "Secure", "Anonymous"],
    image: projectImages.crossroads,
    metrics: { users: "75+", rating: 4.9 },
    features: [
      "Anonymous chat support",
      "Counselor assignment system",
      "Case management",
      "Crisis escalation protocols",
      "Secure communication",
    ],
  },
  {
    id: "hotel-irada",
    title: "Hotel Irada",
    company: "Addcomposites oy",
    description: "Luxury hotel management platform with premium booking experience and guest services integration.",
    fullDescription: `Hotel Irada is a premium hotel management platform designed for luxury properties. Features elegant booking interface, VIP guest services, and comprehensive property management tools.`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    highlights: ["Luxury Hotel", "Premium UX", "Guest Services"],
    image: projectImages.hotelIrada,
    metrics: { users: "50+", rating: 4.8 },
    features: [
      "Premium booking interface",
      "VIP guest management",
      "Property management",
      "Service integration",
    ],
  },
  {
    id: "hotel-bnb",
    title: "Hotel BNB Management",
    company: "Addcomposites oy",
    description: "Comprehensive hotel and property management system with booking engine, guest CRM, and analytics dashboard.",
    fullDescription: `A full-featured hotel management system designed for boutique hotels and BnB properties. Features room inventory management, booking engine, guest management, housekeeping schedules, and comprehensive analytics dashboard.`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "MUI"],
    highlights: ["Hotel Mgmt", "Bookings", "Analytics"],
    image: projectImages.hotelBnb,
    metrics: { users: "100+", rating: 4.9 },
    features: [
      "Room inventory management",
      "Dynamic pricing engine",
      "Guest CRM system",
      "Housekeeping management",
      "Revenue analytics",
    ],
  },
  {
    id: "rockworth",
    title: "Rockworth Financial",
    company: "Addcomposites oy",
    description: "Financial services and investment management platform with portfolio analytics and risk assessment.",
    fullDescription: `A comprehensive financial services platform for investment management and portfolio tracking. Features real-time market data, portfolio analysis, risk assessment, and automated reporting.`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Python", "PostgreSQL", "Chart.js"],
    highlights: ["Finance", "Portfolio", "Analytics"],
    image: projectImages.rockworth,
    metrics: { users: "120+", rating: 4.7 },
    features: [
      "Portfolio management",
      "Real-time market data",
      "Risk assessment",
      "Automated reporting",
    ],
  },
  {
    id: "recycle-city",
    title: "Recycle City Backoffice",
    company: "Addcomposites oy",
    description: "Admin dashboard for recycling operations with lead management, inventory tracking, and workflow automation.",
    fullDescription: `Comprehensive back-office administration system for managing recycling operations, leads, customers, inventory, and business workflows.

Key Features:
• CRM with Lead & Customer Management
• Visual Workflow Builder using ReactFlow
• Inventory & Gate Entry Management
• WhatsApp & Marketing Campaigns
• Real-time Socket.IO communication`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Redux", "MUI", "Socket.IO", "ReactFlow"],
    highlights: ["CRM", "Workflow", "Inventory"],
    image: projectImages.recycleCity,
    metrics: { users: "80+", rating: 4.8 },
    features: [
      "Lead & Customer CRM",
      "Visual workflow automation",
      "Inventory management",
      "WhatsApp integration",
      "Advanced reporting",
    ],
  },
  {
    id: "linkentie",
    title: "Linkentie",
    company: "Addcomposites oy",
    description: "Professional networking and business connection platform for enterprise clients with real-time messaging.",
    fullDescription: `A professional networking platform designed to help businesses and professionals connect, collaborate, and grow. Features advanced matching algorithms, real-time messaging, and comprehensive profile management.`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
    highlights: ["Networking", "Real-time", "Business"],
    image: projectImages.linkentie,
    metrics: { users: "150+", rating: 4.7 },
    features: [
      "Professional profiles",
      "Real-time messaging",
      "Connection matching",
      "Meeting scheduler",
    ],
  },
  {
    id: "aaxel",
    title: "Aaxel Platform",
    company: "Addcomposites oy",
    description: "Business management platform with project tracking, team collaboration, and reporting features.",
    fullDescription: `Aaxel is a comprehensive business management platform providing project tracking, team collaboration tools, and detailed reporting features for modern businesses.`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    highlights: ["Business", "Projects", "Collaboration"],
    image: projectImages.aaxel,
    metrics: { users: "60+", rating: 4.6 },
    features: [
      "Project tracking",
      "Team collaboration",
      "Reporting dashboard",
      "Task management",
    ],
  },
  {
    id: "task-management",
    title: "Task Management - Edgenroots",
    company: "Addcomposites oy",
    description: "Task and project management system with team assignments, progress tracking, and deadline management.",
    fullDescription: `Task Management system for Edgenroots featuring comprehensive task assignment, progress tracking, deadline management, and team collaboration tools.`,
    category: "addcomposites",
    categoryLabel: "Addcomposites",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    highlights: ["Tasks", "Teams", "Deadlines"],
    image: projectImages.taskManagement,
    metrics: { users: "40+", rating: 4.5 },
    features: [
      "Task assignment",
      "Progress tracking",
      "Deadline management",
      "Team collaboration",
    ],
  },
  // =====================
  // CLIENT PROJECTS (3 projects)
  // =====================
  {
    id: "wisteria",
    title: "Wisteria Jewels",
    company: "Wisteria",
    description: "E-commerce jewelry store with Odoo ERP, Shiprocket integration, and automated WhatsApp marketing.",
    fullDescription: `Complete Odoo ERP and e-commerce implementation for Wisteria Jewels, a premium fashion jewelry brand. Built a fully functional online store with product catalog, shopping cart, secure checkout, and inventory management.

Key Achievements:
• Boosted user traffic by 80% through optimized website design
• Reduced 100+ invalid user records with form validation
• Automated delivery calculation with Shiprocket integration
• Implemented WhatsApp/email marketing automation`,
    category: "client-projects",
    categoryLabel: "Client Project",
    technologies: ["Odoo", "Python", "PostgreSQL", "JavaScript", "CSS"],
    highlights: ["E-commerce", "80% Traffic ↑", "Automation"],
    image: projectImages.wisteria,
    liveUrl: "https://www.wisteriajewels.com/",
    metrics: { users: "500+", rating: 4.9 },
    features: [
      "E-commerce product catalog",
      "Shopping cart & checkout",
      "Inventory management",
      "Shiprocket integration",
      "WhatsApp marketing automation",
    ],
  },
  {
    id: "swarajrise",
    title: "SwarajRise",
    description: "Platform for managing and showcasing company projects with portfolio management features.",
    fullDescription: `SwarajRise is a platform designed to manage and showcase company projects, providing portfolio management capabilities and project tracking features.

Built with modern web technologies for optimal performance and user experience.`,
    category: "client-projects",
    categoryLabel: "Client Project",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    highlights: ["Portfolio", "Projects", "Showcase"],
    image: projectImages.swarajrise,
    liveUrl: "https://swaraj-verse-frontend.vercel.app/",
    metrics: { users: "100+", rating: 4.6 },
    features: [
      "Project portfolio management",
      "Team showcase",
      "Project tracking",
      "Modern UI/UX",
    ],
  },
  {
    id: "swarajverse",
    title: "SwarajVerse",
    description: "Comprehensive project showcase platform with interactive UI and project categorization.",
    fullDescription: `SwarajVerse is a comprehensive project showcase platform featuring interactive UI, project categorization, and detailed project information pages.

Built to demonstrate a variety of web applications and internal tools with modern design aesthetics.`,
    category: "client-projects",
    categoryLabel: "Client Project",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: ["Showcase", "Interactive", "Modern UI"],
    image: projectImages.swarajverse,
    liveUrl: "https://swaraj-verse-frontend.vercel.app/projects",
    metrics: { users: "200+", rating: 4.8 },
    features: [
      "Project categorization",
      "Interactive project cards",
      "Detailed project pages",
      "Modern animations",
    ],
  },
  // =====================
  // PERSONAL PROJECTS (5 projects)
  // =====================
  {
    id: "rejouice",
    title: "Rejouice",
    description: "Creative agency website with stunning animations, smooth scrolling, and modern design aesthetics.",
    fullDescription: `Rejouice is a creative agency website showcasing stunning animations, smooth scrolling effects, and modern design aesthetics. Built to demonstrate advanced frontend skills and animation techniques.`,
    category: "personal",
    categoryLabel: "Personal",
    technologies: ["React", "GSAP", "Locomotive Scroll", "CSS"],
    highlights: ["Animations", "Creative", "Modern UI"],
    image: projectImages.rejouice,
    githubUrl: "https://github.com/Sakshij2810",
    metrics: { users: "40+", rating: 4.7 },
    features: [
      "GSAP animations",
      "Smooth scroll effects",
      "Modern design",
      "Responsive layout",
    ],
  },
  {
    id: "3d-tshirt",
    title: "3D T-Shirt Customizer",
    description: "Interactive 3D t-shirt customization with real-time preview, image upload, and WebGL rendering.",
    fullDescription: `An innovative 3D t-shirt customization tool that allows users to design custom apparel with real-time 3D preview. Built with Three.js and React for smooth WebGL rendering.

Users can upload images, add text, change colors, and see their designs rendered on a 3D t-shirt model from any angle.`,
    category: "personal",
    categoryLabel: "Personal",
    technologies: ["React", "Three.js", "WebGL", "Node.js"],
    highlights: ["3D Rendering", "Customization", "Interactive"],
    image: projectImages.customizeOutfit,
    githubUrl: "https://github.com/Sakshij2810",
    metrics: { users: "35+", rating: 4.9 },
    features: [
      "3D model rendering",
      "Real-time customization",
      "Image upload",
      "Color picker",
      "360° view rotation",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce with Razorpay payments, admin dashboard, order tracking, and product filtering.",
    fullDescription: `A comprehensive e-commerce platform built during the UpGrad bootcamp. Features user authentication, product catalog with filtering and search, shopping cart, Razorpay payment integration, order tracking, and full admin dashboard.`,
    category: "personal",
    categoryLabel: "Personal",
    technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Express"],
    highlights: ["Payments", "Admin Panel", "Orders"],
    image: projectImages.ecommerce,
    githubUrl: "https://github.com/Sakshij2810",
    metrics: { users: "30+", rating: 4.6 },
    features: [
      "User authentication (JWT)",
      "Product catalog & search",
      "Shopping cart",
      "Razorpay payments",
      "Order tracking",
      "Admin dashboard",
    ],
  },
  {
    id: "stackoverflow",
    title: "StackOverflow Clone",
    description: "Q&A platform clone with user authentication, voting system, and question/answer functionality.",
    fullDescription: `A StackOverflow-like Q&A platform that automated 80% of the typical Q&A workflow. Features include user authentication, question posting, answer submission, voting system, and user reputation tracking.`,
    category: "personal",
    categoryLabel: "Personal",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    highlights: ["Q&A Platform", "Voting", "Authentication"],
    image: projectImages.stackoverflow,
    githubUrl: "https://github.com/Sakshij2810",
    metrics: { users: "25+", rating: 4.5 },
    features: [
      "Question & answer system",
      "Voting mechanism",
      "User authentication",
      "Reputation tracking",
    ],
  },
  {
    id: "razorpay-clone",
    title: "Razorpay Landing Clone",
    description: "Pixel-perfect clone of Razorpay landing page with responsive design and modern UI components.",
    fullDescription: `A pixel-perfect clone of the Razorpay payment gateway landing page. Built to demonstrate attention to detail, responsive design skills, and proficiency with modern CSS techniques.`,
    category: "personal",
    categoryLabel: "Personal",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    highlights: ["UI Clone", "Responsive", "Pixel-Perfect"],
    image: projectImages.razorpay,
    githubUrl: "https://github.com/Sakshij2810",
    metrics: { rating: 4.4 },
    features: [
      "Pixel-perfect design",
      "Responsive layout",
      "Modern UI components",
      "Tailwind CSS styling",
    ],
  },
];

export const certifications = [
  {
    title: "Sigma 8.0 (Dev + DSA)",
    issuer: "Apna College",
    year: "2025",
  },
  {
    title: "C Programming: Become A Pro! Think Like a Programmer!",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Full Stack Development Bootcamp",
    issuer: "UpGrad",
    year: "2023",
  },
];

export const education = {
  degree: "BTech in Computer Science",
  institution: "Dr. Babasaheb Ambedkar Technological University",
  location: "Beed, Maharashtra",
  period: "2021 - 2025",
  cgpa: "7 / 10",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
