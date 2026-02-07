import { Project, Experience, Skill, PersonalInfo } from "./types";

export const personalInfo: PersonalInfo = {
  name: "Zaidane El Haouari",
  title: "Software Engineer",
  location: "Ottawa, ON, Canada",
  email: "elhaouarizaidane@gmail.com",
  bio: "Software Engineer Graduate with experience across full-stack development, backend systems, DevOps, and automation. Proven ability to design, build, test, and deploy software using modern frameworks, cloud, and CI/CD pipelines. Strong foundation in RESTful APIs, scalable architectures, and Agile environments.",
  resumeUrl: "https://docs.google.com/document/d/1jptXmIVcfRCmKWfOXgiofdkhyq76BbbeqLQx0iYp3aw/preview",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/zaidane-e",
      label: "View GitHub profile",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zaidane-el-haouari",
      label: "Connect on LinkedIn",
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "club-races",
    title: "Club Races - University Capstone",
    description:
      "A full-stack web application for managing cycling race events with Strava API integration for athlete performance tracking.",
    longDescription: `Designed and implemented a full-stack web application for managing cycling race events. The platform enables club owners to create and manage events while tracking athlete performance.

Integrated the Strava API to collect athlete performance metrics and GPS data. Built analytics and visualization features for event tracking and performance monitoring.

Implemented persistent storage and backend services using Spring Boot and MySQL, with a React frontend for responsive user experience.`,
    technologies: ["React", "Java", "Maven", "MySQL", "Spring Boot", "Strava API"],
    role: "Full-Stack Developer",
    duration: "8 months",
    year: 2024,
    highlights: [
      "Integrated Strava API for athlete performance metrics and GPS data",
      "Built analytics and visualization features for event tracking",
      "Implemented persistent storage with Spring Boot and MySQL",
      "Designed responsive React frontend",
    ],
    links: {
      github: "https://github.com/zaidane-e",
    },
    featured: true,
  },
  {
    slug: "chara",
    title: "Chara - Task & Habit Tracking App",
    description:
      "A task and habit management system with prioritization, streak tracking, analytics, and Google Sheets integration.",
    longDescription: `Developed a task and habit management system with prioritization, streak tracking, and analytics. The application helps users build consistent habits and manage tasks effectively.

Implemented JWT-based authentication and role-aware data access for secure user management. Integrated Google Sheets API for external reporting and data visualization.

Built RESTful APIs documented with Swagger/OpenAPI and thoroughly tested using xUnit. The Angular frontend provides a clean interface for task and habit management.`,
    technologies: ["C#", "ASP.NET Core", "PostgreSQL", "Angular", "xUnit", "Azure", "Swagger"],
    role: "Solo Developer",
    duration: "1 month",
    year: 2026,
    highlights: [
      "JWT-based authentication and role-aware data access",
      "Google Sheets API integration for reporting",
      "RESTful APIs documented with Swagger/OpenAPI",
      "Comprehensive xUnit test coverage",
    ],
    links: {
      github: "https://github.com/Zaidane-E/Chara",
    },
    featured: true,
  },
  {
    slug: "sdv",
    title: "SDV - Data Visualization Tool",
    description:
      "A client-side data visualization application for analyzing workout data with interactive charts and layered architecture.",
    longDescription: `Built a client-side data visualization application for analyzing workout data. Designed a layered architecture separating data ingestion, domain modeling, analytics, and UI.

Implemented interactive charts for volume, strength progression, and consistency metrics. The application emphasizes performance, security, and data ownership by processing all data client-side.

Deployed as a static application on Vercel, ensuring fast load times and minimal infrastructure overhead.`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Solo Developer",
    duration: "1 months",
    year: 2026,
    highlights: [
      "Layered architecture separating concerns",
      "Interactive charts for volume, strength, and consistency",
      "Client-side data processing for privacy",
      "Static deployment for performance",
    ],
    links: {
      github: "https://github.com/Zaidane-E/Strong-Data-Visualizer",
    },
    featured: true,
  },
  {
    slug: "pdf-ai",
    title: "PDF AI - Desktop RAG App",
    description:
      "A privacy-first desktop PDF chat assistant using RAG with local vector storage and user-supplied OpenAI API key.",
    longDescription: `Built a privacy-first desktop PDF chat assistant using Tauri, React, TypeScript, Tailwind CSS, and Python. The application supports local-only operation with user-supplied OpenAI API key.

Developed PDF ingestion, embedding generation, vector indexing, and context-aware Q&A with source citations and page-level references. Implemented local vector storage with LanceDB for semantic retrieval of document embeddings.

Created the frontend with React, TypeScript, Tailwind CSS, and Zustand for state management. Desktop packaging handled via Tauri for cross-platform support.`,
    technologies: ["Tauri", "React", "TypeScript", "Tailwind CSS", "Python", "LanceDB"],
    role: "Solo Developer",
    duration: "In progress",
    year: 2025,
    highlights: [
      "Privacy-first with local-only processing",
      "PDF ingestion with embedding generation and vector indexing",
      "Context-aware Q&A with source citations",
      "Cross-platform desktop app via Tauri",
    ],
    links: {
      github: "https://github.com/zaidane-e",
    },
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    company: "Freelance",
    role: "Software Developer",
    location: "Ottawa, ON",
    period: "July 2025 - Present",
    description:
      "Designing and developing full-stack applications and privacy-focused tools for client-specific business workflows.",
    achievements: [
      "Designed and developed full-stack applications using C#, ASP.NET Core, Angular, TypeScript, and PostgreSQL",
      "Built privacy-focused desktop and web applications using Tauri, React, Tailwind CSS, and Python",
      "Integrated OpenAI APIs and retrieval-augmented generation (RAG) systems",
      "Delivered end-to-end solutions including requirements analysis, UI/UX implementation, backend development, automated testing, and cloud deployment on Azure, Vercel, and Neon",
    ],
    technologies: ["C#", "ASP.NET Core", "Angular", "TypeScript", "PostgreSQL", "Tauri", "React", "Python", "Azure", "Vercel"],
  },
  {
    company: "AB Protection",
    role: "Software Developer (CO-OP)",
    location: "Casablanca, Morocco",
    period: "January 2025 - April 2025",
    description:
      "Worked on RESTful APIs, frontend and backend features, and CI/CD pipelines for an Agile software development team.",
    achievements: [
      "Tested, debugged, and validated RESTful APIs using Python and JavaScript, increasing reliability and data integrity",
      "Implemented frontend and backend features using React, Angular, RxJS, and PostgreSQL",
      "Participated in Agile development cycles using Jira and Git-based workflows",
      "Implemented CI/CD pipelines with GitHub Actions and deployed applications to Vercel",
    ],
    technologies: ["Python", "JavaScript", "React", "Angular", "RxJS", "PostgreSQL", "GitHub Actions", "Vercel"],
  },
  {
    company: "Ribbon Communications",
    role: "Software Developer - DevOps (CO-OP)",
    location: "Ottawa, ON",
    period: "September 2021 - August 2022",
    description:
      "Developed automation tools, internal documentation systems, and enhanced infrastructure observability.",
    achievements: [
      "Developed automation scripts and internal tools using Python, Java, Bash, and Linux",
      "Built a searchable, automated documentation generator integrated with Confluence",
      "Improved system observability through monitoring and logging using Grafana, ElasticSearch, Kibana, Telegraf, and InfluxDB",
      "Automated infrastructure and testing workflows using Docker, Jenkins, Ansible, and Cron",
      "Supported and managed OpenStack-based infrastructure across multiple Linux distributions",
    ],
    technologies: ["Python", "Java", "Bash", "Linux", "Grafana", "ElasticSearch", "Kibana", "Docker", "Jenkins", "Ansible", "OpenStack"],
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["C#", "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["ASP.NET Core", "React", "Angular", "Next.js", "Spring Boot", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["RESTful APIs", "JWT Authentication", "OpenAPI/Swagger"],
  },
  {
    category: "Databases & Environments",
    items: ["PostgreSQL", "Azure", "Vercel", "Linux", "Artifactory"],
  },
  {
    category: "DevOps & Automation",
    items: ["Docker", "Ansible", "Jenkins", "CI/CD", "OpenStack", "Grafana", "InfluxDB"],
  },
  {
    category: "Tools & Methodologies",
    items: ["Git", "Bitbucket", "Jira", "Confluence", "Scrum", "xUnit"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
