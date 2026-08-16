export const personalData = {
  // Personal Information
  name: "Saurabh Shukla",
  title: "Backend Developer",
  location: "Gurugram, Haryana",
  email: "saurabhshukla8983@gmail.com",
  linkedin: "https://www.linkedin.com/in/saurabh-kumar-shukla/",
  github: "https://github.com/Saurabhshukla999",
  leetcode: "https://leetcode.com/u/saurabhkumarshukla/",

  // Professional Summary
  summary:
    "Backend Developer with 10 merged pull requests to a production Ruby on Rails API powering a live B2B salon analytics and booking platform. I ship feature modules, schema migrations and RSpec specs through senior code review, structure code with Query and Service Objects, and fix production defects on critical booking paths. Comfortable across the stack, with full-stack applications built in React, Node.js and Supabase.",

  // Hero Section
  hero: {
    badge: "Available for Work",
    mainHeading: "I build production backend systems",
    subHeading: "APIs that ship to real users",
    description: "Hello, I'm Saurabh Shukla 💻 a Backend Developer",
  },

  // Technical Skills
  skills: {
    languages: ["Ruby", "JavaScript", "TypeScript", "SQL", "Java", "C"],
    frameworks: ["Ruby on Rails", "ActiveRecord", "React.js", "Next.js", "Tailwind CSS", "shadcn/ui"],
    tools: ["Git", "Bitbucket", "GitHub", "Docker", "AWS", "Postman", "Vercel"],
    backend: ["Node.js", "Express.js", "REST API design", "Sidekiq", "ActiveJob", "Supabase Edge Functions", "WebRTC"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    testing: ["RSpec", "Request, Service & Query Specs", "OpenAPI / Swagger (Rswag)"],
    authentication: ["JWT", "Row Level Security"],
  },

  // Professional Experience
  experience: [
    {
      company: "Nearz",
      role: "Backend Developer Intern",
      period: "June 2026 – Present",
      location: "Gurugram, Haryana",
      context: "B2B salon analytics & booking platform",
      current: true,
      stack: ["Ruby on Rails", "PostgreSQL", "RSpec", "Sidekiq", "Docker", "Bitbucket"],
      highlights: [
        "Shipped 10 merged pull requests to the production api-service Rails codebase, spanning feature modules, schema migrations, request specs and production bug fixes — each iterated through senior code review.",
        "Built the Reschedule Booking API (PUT /appointments/:id/reschedule) as a dedicated endpoint to avoid regressions in the existing booking flow, encoding status-transition rules and 422 validation that blocks completed or cancelled appointments.",
        "Delivered the Billing module and product catalogue APIs, and engineered reporting and analytics modules covering sales, attendance, staff performance, taxation, inventory and profitability.",
        "Implemented the database schemas behind the Salon Setup and Customer CRM modules, and improved performance by resolving N+1 query issues and tuning ActiveRecord queries.",
        "Structured backend code with Query Objects, Service Objects and ActiveModel Serializers for maintainability, and scheduled asynchronous workflows with Sidekiq and ActiveJob.",
        "Authored RSpec request, service and query specs, and documented every endpoint with OpenAPI (Swagger) via Rswag to improve frontend integration.",
      ],
    },
    {
      company: "Bluestock Fintech",
      role: "Back End Developer, Intern",
      period: "July 2025 – August 2025",
      location: "Hybrid",
      context: "IPO web application",
      current: false,
      stack: ["React", "Express", "REST APIs", "MERN"],
      highlights: [
        "Played a key role in delivering a critical IPO web application, reporting directly to the project manager.",
        "Developed scalable API endpoints and integrated them with responsive React interfaces, optimizing database queries to reduce API response time by ~30%.",
        "Implemented reusable UI components and structured backend routing, and improved input validation and error handling across the application.",
      ],
    },
  ],

  // Projects
  projects: [
    {
      title: "MockMate – Peer Interview Practice Platform",
      description:
        "A real-time peer-to-peer mock interview platform with smart matchmaking, WebRTC video calling and session management. Built the signaling layer on Supabase Realtime rather than a third-party video SDK.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React 18", "TypeScript", "Supabase", "WebRTC", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://iammockmate.vercel.app/",
      githubUrl: "https://github.com/Saurabhshukla999/MockMate",
      featured: true,
      highlights: [
        "Implemented a queue-based matchmaking Edge Function (Deno/TypeScript) with FIFO ordering, experience-level compatibility filtering and a 10-minute TTL.",
        "Built WebRTC video calling on browser-native RTCPeerConnection, using Supabase Realtime as the signaling channel with SDP offer/answer and ICE candidates persisted in PostgreSQL.",
        "Designed a normalized PostgreSQL schema across 6 tables with Row Level Security and Realtime replication enabled for live signaling.",
        "Integrated an Elo rating system (base 1200) for post-session skill tracking across 12+ technical domains.",
      ],
    },
    {
      title: "SmartServe – Local Service Marketplace",
      description:
        "Full-stack marketplace connecting people with reliable local service providers — electricians, plumbers and more — who can register, be discovered, and be rated after each job.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://smartserve-omega.vercel.app/",
      githubUrl: "https://github.com/Saurabhshukla999/SmartServe",
      featured: true,
      highlights: [
        "Built the complete application end to end, from UI screens to backend REST APIs.",
        "Implemented role-based dashboards for customers and service providers, with secure JWT authentication and provider profiles.",
        "Created booking workflows, service management and a review system so users can rate providers after a service.",
        "Added search, filtering and location-based provider discovery, and deployed to a live production environment.",
      ],
    },
    {
      title: "TickTimerDo – Tasks, Notes & Pomodoro Productivity App",
      description:
        "Built an all-in-one productivity application combining a to-do list, notes system, and Pomodoro timer. Developed a clean, responsive UI in React and a robust backend using Node.js and MongoDB.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Saurabhshukla999/TickNoteDo",
      featured: false,
      highlights: [
        "Designed and developed the full MERN stack application end-to-end.",
        "Implemented CRUD operations for tasks and notes with efficient API design.",
        "Built a custom Pomodoro timer with state management for productivity tracking.",
        "Created reusable and responsive UI components styled with Tailwind CSS.",
      ],
    },
    {
      title: "Shortly – URL Shortener with Analytics",
      description:
        "Built a fast and reliable URL shortening service with custom link generation, redirection logic, and click-tracking analytics. Designed the backend for speed and accuracy with optimized database indexing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
      liveUrl: "https://url-shortner-qopf.onrender.com/",
      githubUrl: "https://github.com/Saurabhshukla999/URL-Shortner",
      featured: false,
      highlights: [
        "Developed REST APIs for generating short links, redirection, and analytics tracking.",
        "Implemented hashing logic and MongoDB indexing for fast lookups.",
        "Built a clean dashboard-style UI in React for creating and managing links.",
        "Added click analytics, device info logging, and error-handled redirects.",
      ],
    },
  ],

  // Education
  education: [
    {
      degree: "BTech in Computer Science and Engineering",
      institute: "Dronacharya College of Engineering, Gurugram",
      year: "2022-2026",
      grade: "74.56% (2378/3200)",
    },
    {
      degree: "Class XII CBSE-AISSCE",
      institute: "New Shishu Kalyan Sr Sec School, Gurugram",
      year: "2022",
      grade: "89.4%",
    },
    {
      degree: "Class X CBSE-AISSE",
      institute: "New Shishu Kalyan Sr Sec School, Gurugram",
      year: "2020",
      grade: "82.8%",
    },
  ],

  // Certifications
  certifications: [
    "freeCodeCamp — Back End Development and APIs",
    "NPTEL — Cloud Computing (Elite)",
  ],

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/saurabh-kumar-shukla/",
    github: "https://github.com/Saurabhshukla999",
    leetcode: "https://leetcode.com/u/saurabhkumarshukla/",
    email: "saurabhshukla8983@gmail.com",
  },
}

export type PersonalData = typeof personalData
