export const personalData = {
  // Personal Information
  name: "Saurabh Shukla",
  title: "Frontend Developer",
  location: "Gurugram, Haryana",
  email: "saurabhshukla8983@gmail.com",
  linkedin: "https://www.linkedin.com/in/saurabh-kumar-shukla/", // Corrected LinkedIn URL
  github: "https://github.com/Saurabhshukla999", // Corrected GitHub URL

  // Professional Summary
  summary:
    "Full Stack Developer focused on building performant, scalable web interfaces. Experience in building production-grade apps using React, JavaScript, NodeJs, and Express, PostgreSQL, MongoDB. Eager to contribute and grow with a team pushing real impact.",

  // Hero Section
  hero: {
    badge: "Available for Work",
    mainHeading: "I build scalable web interfaces",
    subHeading: "modern Full Stack applications",
    description: "Hello, I'm Saurabh Shukla 💻 a Full Stack Developer",
  },

  // Technical Skills
  skills: {
    languages: ["JavaScript","TypeScript", "Java", "C", "HTML", "CSS"],
    frameworks: ["React.js", "Tailwind CSS", "Radix UI"],
    tools: ["Git", "GitHub", "Postman", "Docker"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    authentication: ["Supabase","Firebase","JWT", "OAuth"],
    learning: ["Rust", "Golang"],
  },

  // Projects
  projects: [
    {
      title: "TickTimerDo – Tasks, Notes & Pomodoro Productivity App",
      description:
        "Built an all-in-one productivity application combining a to-do list, notes system, and Pomodoro timer. Developed a clean, responsive UI in React and a robust backend using Node.js and MongoDB.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Saurabhshukla999/TickNoteDo",
      featured: true,
      highlights: [
        "Designed and developed the full MERN stack application end-to-end.",
        "Implemented CRUD operations for tasks and notes with efficient API design.",
        "Built a custom Pomodoro timer with state management for productivity tracking.",
        "Created reusable and responsive UI components styled with Tailwind CSS.",
        "Integrated MongoDB with structured schema design for reliable data storage.",
      ],
    },
    
    {
      title: "ServEase – Local Service Finder Platform",
      description:
        "Developed an end-to-end platform that connects users with nearby verified service providers. Built fully responsive UI screens, secure authentication, location-based service discovery, and structured backend workflows.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React","TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Designed and developed the complete MERN application from UI to backend APIs.",
        "Implemented secure user authentication, provider profiles, and service listings.",
        "Built location-based search using MongoDB geospatial queries for accurate results.",
        "Created booking flow, provider dashboard, and role-based access logic.",
        "Developed robust REST APIs with validation and optimized MongoDB queries.",
      ],
    },
    
    {
      title: "Shortly – URL Shortener with Analytics",
      description:
        "Built a fast and reliable URL shortening service with custom link generation, redirection logic, and click-tracking analytics. Designed the backend for speed and accuracy with optimized database indexing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Javascript", "Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
      liveUrl: "#",
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
      grade: "CGPA: 6.7/10",
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

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/saurabh-kumar-shukla/",
    github: "https://github.com/Saurabhshukla999",
    email: "saurabhshukla8983@gmail.com",
  },
}

export type PersonalData = typeof personalData
