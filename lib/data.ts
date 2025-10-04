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
    "Software Developer focused on building performant, scalable web interfaces. Experience in building production-grade apps using React, JavaScript, NodeJs, and Express,. Eager to contribute and grow with a team pushing real impact.",

  // Hero Section
  hero: {
    badge: "Available for Work",
    mainHeading: "I build scalable web interfaces",
    subHeading: "modern React applications",
    description: "Hello, I'm Saurabh Shukla 💻 a Frontend Developer",
  },

  // Technical Skills
  skills: {
    languages: ["JavaScript", "Java", "C", "HTML", "CSS"],
    frameworks: ["React.js", "Tailwind CSS"],
    tools: ["Git", "GitHub", "Postman", "Docker"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    authentication: ["Supabase","Firebase","JWT", "OAuth"],
    learning: ["Next.js","Typescript"],
  },

  // Projects
  projects: [
    {
      title: "DevLog – Technical Blog for Developers",
      description:
        "Developed a responsive blogging platform for developers using React with functional components and hooks. Implemented JWT-based user authentication using Supabase’s built-in auth features.",
      image: "/placeholder.svg?height=300&width=500", // Placeholder, consider adding specific images later
      tags: ["React", "React Query", "Tailwind CSS", "Supabase", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Used React Query to handle server state and API integration efficiently.",
        "Optimized component rendering using React.memo and useCallback, improving performance by ~40%.",
        "Styled the application using Tailwind CSS, ensuring a clean, mobile-friendly UI.",
        "Applied best practices in component structuring and state management to ensure scalability and maintainability.",
      ],
    },
    {
      title: "WeatherInsights – Climate Visualization Tool",
      description:
        "Built a weather dashboard using React, integrating the OpenWeather API for real-time climate data. Implemented geolocation-based weather fetching with dynamic 5-day forecast visualizations using Chart.js.",
      image: "/placeholder.svg?height=300&width=500", // Placeholder, consider adding specific images later
      tags: ["React", "Axios", "Chart.js", "Geolocation API", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Reduced unnecessary API calls by 30% through smart caching and conditional rendering techniques.",
        "Designed an interactive and responsive UI that adapts to current weather conditions (e.g. icons, color changes).",
        "Utilized Axios for API integration and React hooks for managing side effects and component state.",
      ],
    },
    {
      title: "FlowBoard – Task Management App",
      description:
        "Developed a Trello-style task board with drag-and-drop functionality using React DnD. Built a type-safe React codebase with TypeScript, improving reliability and developer experience.",
      image: "/placeholder.svg?height=300&width=500", // Placeholder, consider adding specific images later
      tags: ["React", "TypeScript", "React DnD", "JWT Authentication"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      highlights: [
        "Integrated JWT-based user authentication to manage user sessions securely.",
        "Focused on clean component architecture and modular design for scalability.",
        "Designed a responsive, intuitive UI that supports task categorization and real-time UI feedback.",
      ],
    },
  ],

  // Education
  education: [
    {
      degree: "BTech in Computer Science and Engineering",
      institute: "Dronacharya College of Engineering, Gurugram",
      year: "2022-Present",
      grade: "CGPA: 6.5/10",
    },
    {
      degree: "Class XII CBSE-AISSCE",
      institute: "Dronacharya College of Engineering, Gurugram",
      year: "2022",
      grade: "89.8%",
    },
    {
      degree: "Class X CBSE-AISSE",
      institute: "New Shishu Kalyan Sr Sec School, Gurugram",
      year: "2020",
      grade: "82.8%",
    },
  ],

  // Courses
  relevantCourses: {
    computerScience: [
      "Computer Networks",
      "Operating Systems",
      "Theory Of Computation",
      "Design and Analysis of Algorithms",
      "Programming Languages",
      "Computer Architecture",
      "Discrete Mathematical Structures",
      "Data Structures",
    ],
    mathematics: [
      "Graph Theory",
      "Statistics",
      "Probability Theory",
      "Differential Equations",
      "Linear Algebra",
      "Matrix Theory",
    ],
  },

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/saurabh-kumar-shukla/",
    github: "https://github.com/Saurabhshukla999",
    email: "saurabhshukla8983@gmail.com",
  },
}

export type PersonalData = typeof personalData
