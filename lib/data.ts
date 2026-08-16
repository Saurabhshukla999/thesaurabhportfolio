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
    "Backend Developer with 10 merged pull requests to a production Ruby on Rails API powering a live B2B salon analytics and booking platform. I ship feature modules, schema migrations and RSpec request specs through senior code review, and fix production defects on critical booking paths. Comfortable across the stack, with full-stack applications built in React, Node.js and Supabase.",

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
    frameworks: ["Ruby on Rails", "React.js", "Next.js", "Tailwind CSS", "Radix UI", "shadcn/ui"],
    tools: ["Git", "Bitbucket", "GitHub", "Postman", "Swagger / OpenAPI", "Vercel"],
    backend: ["Node.js", "Express.js", "REST API design", "Supabase Edge Functions", "Sidekiq", "WebRTC"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    testing: ["RSpec", "Request & Controller Specs", "Postman"],
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
      stack: ["Ruby on Rails", "PostgreSQL", "RSpec", "Bitbucket", "Swagger"],
      highlights: [
        "Shipped 10 merged pull requests to the production api-service Rails codebase, spanning feature modules, schema migrations, request specs and production bug fixes — each iterated through senior code review.",
        "Built the Reschedule Booking API (PUT /appointments/:id/reschedule) as a dedicated endpoint to avoid regressions in the existing booking flow, encoding status-transition rules and 422 validation that blocks completed or cancelled appointments.",
        "Delivered the Billing module and the product catalogue APIs, plus update and destroy actions for salon customer profiles.",
        "Implemented the database schemas behind the Salon Setup and Customer CRM modules — salon settings, staff, products and customer family relationships.",
        "Fixed production defects across the booking path: promo-code expiry validation, past-dated time-slot booking, and appointment update parameters for guest details.",
        "Authored RSpec request specs covering the appointment booking flow and AppointmentsController, and documented endpoint schemas in the team's Swagger/OpenAPI spec.",
      ],
    },
    {
      company: "Bluestock Fintech",
      role: "Software Developer Intern",
      period: "July 2025 – September 2025",
      location: "Remote",
      context: "IPO listing platform",
      current: false,
      stack: ["React", "Express", "REST APIs"],
      highlights: [
        "Built a web-based IPO listing platform using React and Express with modular UI and REST APIs.",
        "Integrated the frontend with backend APIs and optimized database queries, reducing API response time by ~30%.",
        "Implemented reusable UI components and structured backend routing for scalability, and improved input validation and error handling across the application.",
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
      title: "SmartServe – Local Service Finder Platform",
      description:
        "Developed an end-to-end platform that connects users with nearby verified service providers. Built fully responsive UI screens, secure authentication, location-based service discovery, and structured backend workflows.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://smartserve-omega.vercel.app/",
      githubUrl: "https://github.com/Saurabhshukla999/SmartServe",
      featured: true,
      highlights: [
        "Designed and developed the complete Full Stack application from UI to backend APIs.",
        "Implemented secure user authentication, provider profiles, and service listings.",
        "Created booking flow, provider dashboard, and role-based access logic.",
        "Developed robust REST APIs with validation and optimized database queries.",
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
        "Integrated MongoDB with structured schema design for reliable data storage.",
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
        "Deployed the backend for stable public use with structured routing.",
      ],
    },
  ],

  // Education
  education: [
    {
      degree: "BTech in Computer Science and Engineering",
      institute: "Dronacharya College of Engineering, Gurugram",
      year: "2022-Present",
      grade: "74.56%",
    },
    {
      degree: "Class XII CBSE-AISSCE",
      institute: "Dronacharya College of Engineering, Gurugram",
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
    "NPTEL — Cloud Computing",
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
