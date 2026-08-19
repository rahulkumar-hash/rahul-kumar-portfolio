export const personalInfo = {
  name: "Rahul Kumar",
  role: "Full Stack & React.js Developer",
  tagline: "Node.js & MERN Specialist | Scalable Systems & Real-Time Architectures",
  eyebrow: "FULL STACK DEVELOPER",
  location: "Noida, India",
  phone: "+91 98200 35336",
  email: "rahulkumarofficial36@gmail.com",
  status: "Immediate Joiner",
  yearsExperience: "3+ Years",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:rahulkumarofficial36@gmail.com",
    phone: "tel:+919820035336"
  },
  resumeUrl: "/Rahul_Kumar_Resume.pdf",
  summary:
    "Results-driven Full Stack & React Developer with 3+ years of experience engineering scalable, production-grade web applications using React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Node.js, Express.js, and MongoDB. Proven expertise in building secure RESTful APIs, role-based access control (RBAC), real-time architectures (Socket.IO/SSE), and optimizing database performance with aggregation pipelines and indexing. Experienced in end-to-end product delivery from frontend architecture to Dockerized VPS/Cloud deployment."
};

export const codeSnippet = `const developer = {
  name: "Rahul Kumar",
  title: "Full Stack & React.js Developer",
  location: "Noida, India",
  status: "Immediate Joiner",
  experience: "3+ Years Production Engineering",
  coreStack: {
    frontend: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS"],
    state: ["Redux Toolkit", "Zustand", "Context API"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "Microservices"],
    realtime: ["Socket.IO", "Server-Sent Events (SSE)"],
    database: ["MongoDB (Aggregation)", "PostgreSQL", "Redis"],
    devops: ["Linux VPS", "Nginx", "PM2", "Docker basics", "CI/CD basics"]
  },
  buildPhilosophy: "High-performance code, bulletproof security & sub-second response times."
};`;

export const achievements = [
  {
    metric: "+40%",
    label: "Load Performance Boost",
    description: "Improved web app load speeds through React memoization, lazy loading, and compound MongoDB query indexing."
  },
  {
    metric: "10+",
    label: "Live Systems & Production Apps",
    description: "Successfully architected and engineered full-stack web platforms, multi-tenant portals, and SaaS ecosystems from scratch to VPS deployment."
  },
  {
    metric: "-30%",
    label: "API Response Latency",
    description: "Reduced API response handling time through efficient state architecture, smart pagination, and caching strategies."
  },
  {
    metric: "-25%",
    label: "UI Turnaround Time",
    description: "Built modular, typed reusable component libraries in TypeScript, accelerating front-end feature delivery."
  }
];

export const skillsData = {
  frontend: {
    title: "Frontend Technologies",
    description: "Modern, responsive, and type-safe user interfaces with blazing-fast rendering speeds.",
    skills: [
      { name: "React.js", category: "Core", highlight: true },
      { name: "Next.js (App Router)", category: "Framework", highlight: true },
      { name: "TypeScript", category: "Language", highlight: true },
      { name: "JavaScript (ES6+)", category: "Language", highlight: true },
      { name: "Redux Toolkit", category: "State Management" },
      { name: "Zustand", category: "State Management" },
      { name: "Context API", category: "State Management" },
      { name: "Tailwind CSS", category: "Styling", highlight: true },
      { name: "Material-UI", category: "UI Library" },
      { name: "HTML5", category: "Markup" },
      { name: "CSS3", category: "Styling" }
    ]
  },
  backend: {
    title: "Backend & Architectures",
    description: "Scalable REST APIs, event-driven streaming, microservices, and robust authentication layers.",
    skills: [
      { name: "Node.js", category: "Runtime", highlight: true },
      { name: "Express.js", category: "Framework", highlight: true },
      { name: "RESTful APIs", category: "Architecture", highlight: true },
      { name: "Server-Sent Events (SSE)", category: "Real-Time", highlight: true },
      { name: "Socket.IO", category: "Real-Time", highlight: true },
      { name: "JWT Authentication", category: "Security", highlight: true },
      { name: "Node-Cron", category: "Background Jobs" },
      { name: "Microservices", category: "Architecture" }
    ]
  },
  databases: {
    title: "Databases & Caching",
    description: "High-throughput data storage, complex aggregation pipelines, and low-latency cache layers.",
    skills: [
      { name: "MongoDB", category: "NoSQL", highlight: true },
      { name: "Aggregation Pipelines", category: "Optimization", highlight: true },
      { name: "Compound Indexing", category: "Optimization", highlight: true },
      { name: "PostgreSQL / SQL basics", category: "Relational" },
      { name: "Redis (Caching)", category: "Cache", highlight: true },
      { name: "Session Management", category: "State/Cache" }
    ]
  },
  devops: {
    title: "DevOps & Cloud Tools",
    description: "Production Linux server administration, process management, and reliable deployment workflows.",
    skills: [
      { name: "Git / GitHub", category: "Version Control", highlight: true },
      { name: "Linux / VPS Deployment", category: "Infrastructure", highlight: true },
      { name: "Nginx Reverse Proxy", category: "Web Server", highlight: true },
      { name: "PM2 Process Manager", category: "Process Management" },
      { name: "Docker basics", category: "Containers" },
      { name: "AWS (S3 / EC2 basics)", category: "Cloud" },
      { name: "Postman", category: "API Testing" },
      { name: "VS Code", category: "Tooling" },
      { name: "CI/CD basics", category: "Automation" }
    ]
  },
  integrations: {
    title: "Integrations & Third-Party APIs",
    description: "Seamless integration with payment gateways, AI inference APIs, map geocoding, and cloud services.",
    skills: [
      { name: "Razorpay Gateway", category: "Payments", highlight: true },
      { name: "Stripe", category: "Payments" },
      { name: "Firebase Services", category: "Cloud Services", highlight: true },
      { name: "ChatGPT / OpenAI API", category: "AI Integration", highlight: true },
      { name: "Geocoding & Maps APIs", category: "Geolocation" }
    ]
  }
};

export const experiences = [
  {
    company: "Wish Geeks Tech Serve",
    location: "Noida, India",
    role: "Full Stack Developer",
    period: "Aug 2025 – Present",
    current: true,
    description:
      "Architected and engineered both Frontend and Backend for the enterprise WishPay HRMS platform featuring separate Staff and Admin portals, automated payroll workflows, and granular RBAC.",
    points: [
      "Architected and engineered an enterprise HRMS platform (WishPay) featuring separate Staff and Admin portals for employee onboarding, attendance tracking, leave management, automated payroll workflows, and granular Role-Based Access Control (RBAC).",
      "Implemented secure authentication architecture using JWT access & refresh token rotation, custom permission middleware, and protected API routes.",
      "Designed performant REST APIs with request validation, centralized error handling, pagination, and compound MongoDB indexing, reducing report generation latency by 40%.",
      "Built modular, typed React and TypeScript components with Zustand & Redux for responsive dashboards, dynamic filters, and real-time alerts via Server-Sent Events (SSE).",
      "Automated recurring operations and scheduled report generation using Node-Cron; managed deployment and process monitoring on Linux VPS using PM2 and Nginx reverse proxy."
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Zustand",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SSE",
      "JWT",
      "Git",
      "Linux VPS",
      "Nginx",
      "PM2"
    ]
  },
  {
    company: "Brandbell 369 Graphics Pvt. Ltd.",
    location: "Noida, India",
    role: "React JS Developer",
    period: "Mar 2024 – Aug 2025",
    current: false,
    description:
      "Engineered full-stack features, scalable REST APIs, and high-performance React frontends with automated backend schedulers.",
    points: [
      "Engineered scalable REST APIs and integrated Firebase services to optimize MongoDB data flow, improving data handling efficiency by 25%.",
      "Optimized frontend performance using React memoization, custom hooks, and code-splitting, boosting initial page load speeds by 30%.",
      "Implemented background task schedulers using Node-Cron for automated report syncing; maintained clean codebase via Git version control.",
      "Collaborated directly with UI/UX designers and project stakeholders to deliver responsive full-stack features according to technical specifications."
    ],
    techStack: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "REST APIs",
      "Git"
    ]
  },
  {
    company: "Party Witty",
    location: "Noida, India",
    role: "React JS Developer",
    period: "Jun 2023 – Feb 2024",
    current: false,
    description:
      "Developed high-traffic party venue discovery and event reservation web application serving Delhi-NCR with real-time filters and dynamic package deals.",
    points: [
      "Engineered front-end interfaces for Delhi-NCR's party venue discovery and event booking web application (partywitty.com).",
      "Integrated backend REST APIs for party packages, club reservations, custom food/liquor deals, and real-time venue search filters.",
      "Conducted rigorous cross-browser testing and performance debugging to ensure seamless booking UX across mobile and desktop devices."
    ],
    techStack: [
      "React.js",
      "JavaScript (ES6+)",
      "Redux",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Postman",
      "Git"
    ]
  }
];

export const projects = [
  {
    id: "wishpay-hrms",
    title: "WishPay HRMS Platform",
    tagline: "Enterprise Multi-Portal HRMS, Attendance & Payroll Automation",
    liveUrl: "https://wishpay.wishgeekstechserve.com/",
    domain: "wishpay.wishgeekstechserve.com",
    featured: true,
    category: "Enterprise Portals",
    badge: "Full Stack (Frontend + Backend)",
    overview:
      "An enterprise-grade Human Resource Management System (HRMS) featuring dual Staff & Admin portals, automated payroll workflows, attendance tracking, leave management, and granular Role-Based Access Control (RBAC). Architected and developed end-to-end (Frontend and Backend) by Rahul Kumar.",
    problem:
      "Manual employee recordkeeping, complicated multi-tier leave approval hierarchies, and delayed monthly payroll calculations across departments.",
    solution:
      "Engineered complete full-stack architecture with dual Staff & Admin portals, JWT token rotation, compound MongoDB indexing reducing report generation latency by 40%, and real-time Server-Sent Events (SSE) for instant alerts.",
    highlights: [
      "Architected and engineered both Frontend and Backend for dual Staff and Admin portals with role-based access control (RBAC).",
      "Implemented secure authentication architecture using JWT access & refresh token rotation, custom permission middleware, and protected API routes.",
      "Designed performant REST APIs with request validation, centralized error handling, pagination, and compound MongoDB indexing, reducing report latency by 40%.",
      "Built dynamic dashboard components in React and TypeScript with Zustand & Redux, real-time alerts via SSE, and cron scheduled payroll generation."
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Zustand",
      "Redux",
      "Tailwind CSS",
      "SSE",
      "JWT",
      "Linux VPS",
      "Nginx",
      "PM2"
    ],
    architecture: {
      frontend: "React.js + TypeScript Dual Portals (Staff & Admin) with Zustand/Redux",
      backend: "Node.js & Express.js REST Microservices with RBAC & Token Rotation",
      database: "MongoDB with Compound Indexing & Aggregation Pipelines",
      devops: "Linux VPS Deployment with PM2 Process Monitoring and Nginx Reverse Proxy"
    }
  },
  {
    id: "the-zodify",
    title: "The Zodify",
    tagline: "Astrologer Consultation & Horoscope SaaS",
    liveUrl: "https://thezodify.com",
    domain: "thezodify.com",
    featured: true,
    category: "SaaS & Full Stack",
    badge: "Live SaaS System",
    overview:
      "An on-demand astrology consultation platform enabling real-time chat/call sessions with verified astrologers, personalized horoscopes, and Kundli matchmaking with integrated wallet billing.",
    problem:
      "Traditional consultation websites suffered from high transaction drop-offs, erratic booking scheduling, and lack of real-time astrologer availability tracking.",
    solution:
      "Architected a responsive SPA with instant Razorpay checkout integration, automated microservices for booking notifications, wallet recharge management, and live astrologer availability schedules.",
    highlights: [
      "Architected an on-demand astrology consultation platform enabling real-time chat/call sessions with verified astrologers, personalized horoscopes, and Kundli matchmaking.",
      "Engineered responsive SPA in React & Vite with secure checkout integration using Razorpay Payment Gateway for consultation packages and spiritual products.",
      "Built backend microservices for astrologer availability scheduling, wallet recharge management, and automated consultation booking notifications."
    ],
    techStack: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay Gateway",
      "REST APIs",
      "Tailwind CSS"
    ],
    architecture: {
      frontend: "React + Vite SPA with Tailwind CSS",
      backend: "Node.js & Express.js REST Microservices",
      database: "MongoDB for consultation records & user wallets",
      integrations: "Razorpay Payment Gateway & real-time notification engine"
    }
  },
  {
    id: "astro-sushil",
    title: "Astro Sushil",
    tagline: "AI-Powered Astrology & Celestial Calculation Engine",
    liveUrl: "https://astrosushil.com/",
    domain: "astrosushil.com",
    featured: true,
    category: "AI & Full Stack",
    badge: "AI Engine & SEO Platform",
    overview:
      "An end-to-end astrology platform featuring automated Kundli generation, compatibility matching algorithms, daily Panchang, and downloadable PDF reports powered by AI.",
    problem:
      "Automating complex astrological planetary equations and translating planetary charts into readable personalized text reports for high volumes of users.",
    solution:
      "Integrated ChatGPT / OpenAI API alongside astronomical planetary calculation algorithms and geocoding APIs, backed by high-converting SEO architecture and secure payments.",
    highlights: [
      "Built an end-to-end astrology platform featuring automated Kundli generation, compatibility matching algorithms, daily Panchang, and downloadable PDF reports.",
      "Integrated ChatGPT / OpenAI API for natural language astrological readings alongside planetary calculation and geocoding APIs.",
      "Implemented robust user authentication, payment processing, and SEO architecture driving organic consultation leads."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ChatGPT API",
      "OpenAI API",
      "Payment Gateway",
      "SEO",
      "Geocoding APIs"
    ],
    architecture: {
      frontend: "React.js with Dynamic Chart Visualizers & PDF Exporter",
      backend: "Node.js Calculation Engine with OpenAI API Integration",
      database: "MongoDB User Profile & Matchmaking Store",
      integrations: "OpenAI GPT API, Geocoding APIs, Payment Gateway"
    }
  },
  {
    id: "astro-converse",
    title: "AstroConverse",
    tagline: "Real-Time Astrologer Consultation & Interactive Chat Platform",
    liveUrl: "https://www.astroconverse.com/",
    domain: "astroconverse.com",
    category: "Real-Time & WebSockets",
    badge: "Live Consultation Platform",
    overview:
      "A modern real-time astrologer conversation and consultation web platform offering instant live chat sessions, Kundli matching, and secure digital wallet payments.",
    problem:
      "High drop-off rates during real-time consultation matching and lack of instant chat synchronization across mobile and desktop devices.",
    solution:
      "Engineered responsive full-stack architecture with WebSockets/Socket.IO and REST APIs for instant astrologer booking, chat messaging, and wallet payments.",
    highlights: [
      "Built interactive consultation booking flows with instant astrologer availability indicators.",
      "Implemented real-time chat infrastructure with instant message delivery and session timers.",
      "Integrated secure payment gateways and responsive React/Tailwind UI for mobile and desktop."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "Payment Gateway",
      "REST APIs"
    ],
    architecture: {
      frontend: "React.js with responsive chat UI and live session state",
      realtime: "Socket.IO for instant two-way chat messaging",
      backend: "Express.js REST APIs with session management",
      database: "MongoDB for chat histories, wallets, and user profiles"
    }
  },
  {
    id: "define-astro",
    title: "Define Astro",
    tagline: "Astrology Insights & Vedic Horoscope Calculation Platform",
    liveUrl: "https://www.defineastro.com/",
    domain: "defineastro.com",
    category: "SaaS & Full Stack",
    badge: "Live Vedic SaaS",
    overview:
      "Comprehensive astrology and horoscope analysis web application providing personalized birth chart calculations, daily horoscopes, and astrological remedies.",
    problem:
      "Rendering complex astrological planetary positions and charts quickly across varying device resolutions.",
    solution:
      "Engineered modular React components with optimized calculation algorithms and responsive Tailwind CSS layout.",
    highlights: [
      "Developed automated Kundli generation and planetary position visualization algorithms.",
      "Created responsive user dashboard with daily horoscope feeds and consultation booking.",
      "Optimized frontend rendering performance and SEO structure for rapid page indexing."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "SEO"
    ],
    architecture: {
      frontend: "React.js with dynamic SVG astrological chart components",
      backend: "Node.js computation server for celestial calculations",
      database: "MongoDB for horoscope databases and user birth charts"
    }
  },
  {
    id: "the-veda-talks",
    title: "The Veda Talks",
    tagline: "Vedic Astrology & Spiritual Consultation Portal",
    liveUrl: "https://www.thevedatalks.com/",
    domain: "thevedatalks.com",
    category: "SaaS & Full Stack",
    badge: "Live Vedic Portal",
    overview:
      "Online Vedic guidance and consultation portal connecting seekers with experienced Vedic astrologers, featuring personalized horoscope readings and spiritual webinars.",
    problem:
      "Facilitating multi-format spiritual consultations with integrated scheduling and automated notifications.",
    solution:
      "Built full-stack consultation booking engine with scheduling calendar, automated SMS/Email notifications, and secure checkout.",
    highlights: [
      "Engineered seamless appointment scheduling and astrologer calendar integration.",
      "Developed responsive, SEO-optimized frontend with custom Vedic typography and smooth animations.",
      "Implemented payment processing and automated consultation confirmation workflows."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Payment Gateway",
      "REST APIs"
    ],
    architecture: {
      frontend: "React.js with dynamic booking calendars and service catalog",
      backend: "Express.js REST APIs with appointment scheduler",
      database: "MongoDB user database and consultation booking store"
    }
  },
  {
    id: "bhagwat-prapti-sandesh",
    title: "Bhagwat Prapti Sandesh",
    tagline: "Spiritual Literature, Audio Discourses & Publication Portal",
    liveUrl: "https://www.bhagwatpraptisandesh.com/",
    domain: "bhagwatpraptisandesh.com",
    category: "SaaS & Full Stack",
    badge: "Live Publication System",
    overview:
      "A dedicated spiritual literature, discourse broadcasting, and publication management platform delivering daily spiritual teachings, audio discourses, and downloadable books.",
    problem:
      "Delivering heavy audio discourses and PDF spiritual publications reliably to thousands of daily readers with instant search and low latency.",
    solution:
      "Constructed a high-performance content delivery web app with fast search filters, audio streaming integration, and CDN-backed PDF downloads.",
    highlights: [
      "Engineered digital library for spiritual publications, audio discourses, and daily inspirational messages.",
      "Implemented optimized search and categorization for thousands of discourse archives.",
      "Built lightweight responsive UI with high accessibility and instant page load speeds."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "Cloud CDN"
    ],
    architecture: {
      frontend: "React.js with audio player interface and search filters",
      backend: "Node.js content API with caching and fast search indices",
      database: "MongoDB for discourse archives, books, and user bookmarks"
    }
  },
  {
    id: "fretbox-chat",
    title: "Fretbox",
    tagline: "Real-Time Multi-Tenant Socket Messaging Architecture",
    liveUrl: "https://www.fretbox.in/",
    domain: "fretbox.in",
    category: "Real-Time & WebSockets",
    badge: "Live Multi-Tenant SaaS",
    overview:
      "A real-time socket messaging service and facility management operations portal facilitating instant communication between students, wardens, and administrative staff.",
    problem:
      "Delayed resolution of hostel grievances, lack of instant notification broadcasts, and uncoordinated facility operations across multiple buildings.",
    solution:
      "Engineered low-latency WebSockets architecture via Socket.IO featuring direct peer-to-peer chats, hierarchical complaint escalation threads, announcement broadcasts, and unread badge counters.",
    highlights: [
      "Engineered a real-time socket messaging service for hostel & facility operations, facilitating instant communication between students, wardens, and staff.",
      "Implemented Socket.IO for low-latency peer-to-peer chats, complaint escalation threads, announcement broadcasts, and unread badge counters.",
      "Constructed multi-tenant room routing ensuring strict data isolation between hostel blocks and student groups."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Tailwind CSS"
    ],
    architecture: {
      frontend: "React.js with optimistic UI updates and audio/visual alerts",
      realtime: "Socket.IO clustered server with event rooms",
      backend: "Node.js / Express.js event handlers",
      database: "MongoDB for chat transcripts, threads, and read receipts"
    }
  },
  {
    id: "proven-ro",
    title: "Proven RO",
    tagline: "Water Purifier Sales, AMC & Service Management Portal",
    category: "Enterprise Portals",
    badge: "Enterprise AMC & ERP",
    overview:
      "An enterprise management portal for RO purifier product sales, Annual Maintenance Contract (AMC) subscriptions, and doorstep technician dispatch.",
    problem:
      "Manual technician allocation, untracked warranty lapses, and lost recurring AMC revenue due to lack of automated renewal tracking.",
    solution:
      "Built a self-service customer portal with automated filter replacement and AMC renewal reminder alerts, paired with real-time admin dispatch dashboards for technician ticket assignment and digital invoicing.",
    highlights: [
      "Developed an enterprise management portal for RO purifier product sales, Annual Maintenance Contract (AMC) subscriptions, and doorstep service dispatch.",
      "Built customer self-service portal for tracking warranty periods, filter replacement cycles, and automated AMC renewal reminder alerts.",
      "Engineered admin dispatch dashboards for real-time technician ticket assignment, inventory stock control, and digital invoice generation."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST APIs"
    ],
    architecture: {
      frontend: "React.js Customer Portal + Admin ERP Dashboard",
      backend: "Express.js REST APIs with JWT role authorization",
      database: "MongoDB with compound indices for inventory & tickets",
      features: "Automated cron reminders, digital PDF invoices, technician routing"
    }
  },
  {
    id: "party-witty",
    title: "Party Witty",
    tagline: "Nightlife Venue, Event & Package Booking Platform",
    liveUrl: "https://partywitty.com",
    domain: "partywitty.com",
    category: "SaaS & Full Stack",
    badge: "Delhi-NCR Live Platform",
    overview:
      "Web platform for discovering party venues, lounges, pubs, and live music events with custom food & liquor package reservation workflows in Delhi-NCR.",
    problem:
      "Users struggled to compare complex per-head liquor and buffet packages across venues while venue managers lacked dynamic reservation management.",
    solution:
      "Implemented geolocation-based venue filtering, dynamic group package pricing calculators, and a dedicated partner portal for instant table and package reservation management.",
    highlights: [
      "Built web platform for discovering party venues, lounges, pubs, and live music events with custom food & liquor package reservation workflows in Delhi-NCR.",
      "Implemented geolocation venue filtering, dynamic group package pricing calculators, and partner portal for reservation management.",
      "Optimized front-end rendering and mobile responsive booking flows for rapid on-the-go reservations."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Payment Gateway",
      "Geolocation APIs",
      "Tailwind CSS"
    ],
    architecture: {
      frontend: "React.js with responsive card grids & filter facets",
      backend: "Express.js REST APIs with geocoding boundary checks",
      database: "MongoDB geo-spatial indexing for venue queries",
      integrations: "Payment Gateway, Google Maps / Geolocation APIs"
    }
  },
  {
    id: "fusionnet",
    title: "FusionNet",
    tagline: "High-Speed Fiber ISP Portal & Self-Care System",
    liveUrl: "https://fusionnet.in",
    domain: "fusionnet.in",
    category: "Enterprise Portals",
    badge: "ISP Self-Care Portal",
    overview:
      "Broadband customer self-care portal for high-speed FTTH operations: plan selection, online recharge, invoice downloads, and CRM service ticketing.",
    problem:
      "Heavy load on ISP call centers for routine recharge renewals, slow ticket resolution, and offline payment reconciliation.",
    solution:
      "Engineered automated self-care web portal with instant BillDesk/Razorpay payment gateway integration, auto-generated tax invoices, and CRM ticketing pipeline.",
    highlights: [
      "Engineered broadband customer self-care portal for FTTH operations: plan selection, online recharge, invoice downloads, and CRM service ticketing.",
      "Integrated payment gateways (BillDesk / Razorpay) for zero-downtime plan recharge and automated billing receipts.",
      "Streamlined customer support turnaround through integrated CRM ticketing workflows."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Payment Gateway (BillDesk/Razorpay)",
      "REST APIs",
      "Tailwind CSS"
    ],
    architecture: {
      frontend: "React.js self-service customer dashboard",
      backend: "Node.js REST APIs with secure gateway webhooks",
      database: "MongoDB for subscriber plans, recharge logs, and CRM tickets",
      integrations: "BillDesk / Razorpay Payment Gateways, PDF Invoice Generator"
    }
  }
];

export const whatIBuild = [
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web apps using React, Next.js App Router, Node.js, and MongoDB with clean component hierarchy and state management (Redux Toolkit, Zustand).",
    icon: "Layers",
    tags: ["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript"]
  },
  {
    title: "Real-Time Systems & WebSockets",
    description:
      "Low-latency bidirectional communication architectures using Socket.IO and Server-Sent Events (SSE) for chat, alerts, and live dashboard metrics.",
    icon: "Zap",
    tags: ["Socket.IO", "SSE", "Event Streaming", "Live Dashboards"]
  },
  {
    title: "Secure RESTful APIs & Microservices",
    description:
      "Enterprise-grade backend APIs with JWT access & refresh token rotation, custom RBAC authorization middleware, request validation, and rate limiting.",
    icon: "ShieldCheck",
    tags: ["Express.js", "JWT Rotation", "RBAC", "Microservices"]
  },
  {
    title: "Database Optimization & Aggregations",
    description:
      "Complex MongoDB aggregation pipelines, compound indexing, query execution plan tuning, and Redis caching for ultra-fast query execution.",
    icon: "Database",
    tags: ["Aggregation Pipelines", "Compound Indexing", "Redis Caching"]
  },
  {
    title: "Enterprise Portals & Management Systems",
    description:
      "Multi-portal systems (HRMS, AMC portals, Customer Self-Care, Admin dispatch) with automated scheduled background jobs via Node-Cron.",
    icon: "LayoutDashboard",
    tags: ["Staff & Admin Portals", "Node-Cron", "Automated Workflows"]
  },
  {
    title: "Cloud Deployment & Linux Administration",
    description:
      "Production-ready VPS deployments with Nginx reverse proxy configuration, PM2 clustering/process monitoring, SSL management, and Docker basics.",
    icon: "Server",
    tags: ["Linux VPS", "Nginx", "PM2", "Docker basics", "CI/CD basics"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    institution: "SR Group of Institutions, AKTU",
    location: "Uttar Pradesh, India",
    period: "2015 – 2019",
    highlights: [
      "Strong foundation in Data Structures, Algorithms, Database Management Systems (DBMS), and Computer Networks.",
      "Hands-on project work in web application design, object-oriented programming, and software engineering principles."
    ]
  }
];
