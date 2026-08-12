import { Project, Experience, Skill, PersonalInfo, Language, Education } from "./types";

export const personalInfo: PersonalInfo = {
  name: "Zaidane El Haouari",
  title: "Software Engineer",
  location: "Ottawa, ON, Canada",
  email: "elhaouarizaidane@gmail.com",
  bio: "Software Engineer with hands-on experience designing, testing, and deploying RESTful APIs and full-stack applications using React, Angular, ASP.NET Core, and Spring Boot. Background in DevOps and infrastructure automation, including CI/CD pipelines, Docker, and monitoring across 50+ servers; adds a systems-level perspective to application development.",
  resumeUrl: "https://docs.google.com/document/d/1422r6OEzQqNt1IZyjk6uE1Ka18UenBrZ/preview",
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
    title: "Club Races — University Capstone Project",
    description:
      "A full-stack cycling race management platform built in a team setting with Strava API integration for athlete performance tracking.",
    longDescription: `Owned backend development and third-party integration for a full-stack cycling race management platform built in a team setting.

Designed and implemented the Strava API integration end-to-end: built endpoints to retrieve, clean, and analyze athlete performance and GPS data, then modeled and persisted results as entities in MySQL.

Built analytics and visualization features for event tracking and performance monitoring using Spring Boot and MySQL.`,
    technologies: ["React", "Maven", "Java", "MySQL", "Spring Boot"],
    role: "Backend Developer",
    duration: "January 2024 – December 2024",
    year: 2024,
    highlights: [
      "Owned backend development and third-party integration",
      "Designed and implemented the Strava API integration end-to-end",
      "Built analytics and visualization features for event tracking",
      "Modeled and persisted athlete performance data in MySQL",
    ],
    links: {
      github: "https://github.com/zaidane-e",
    },
    featured: true,
  },
  {
    slug: "pdf-ai",
    title: "PDF AI – Desktop RAG App",
    description:
      "A privacy-first desktop RAG application for local PDF chat, using Tauri, React, TypeScript, and Python with a user-supplied OpenAI API key.",
    longDescription: `Built a privacy-first desktop RAG application for local PDF chat, using Tauri, React, TypeScript, and Python with a user-supplied OpenAI API key; no data leaves the device.

Implemented the full retrieval pipeline: PDF ingestion, embedding generation, and semantic search using a local LanceDB vector store, returning context-aware answers with page-level source citations.

Supported multi-document navigation, allowing users to query and switch between multiple indexed PDFs in a single session.`,
    technologies: ["Tauri", "React", "TypeScript", "Tailwind CSS", "Python", "LanceDB"],
    role: "Solo Developer",
    duration: "January 2026 – Present",
    year: 2026,
    highlights: [
      "Privacy-first with local-only processing, no data leaves the device",
      "Full retrieval pipeline with PDF ingestion and semantic search",
      "Context-aware answers with page-level source citations",
      "Multi-document navigation in a single session",
    ],
    links: {
      github: "https://github.com/Zaidane-E/TalkPDF",
    },
    featured: true,
  },
  {
    slug: "sdv",
    title: "SDV – Data Visualization Tool",
    description:
      "A client-side data visualization tool that ingests arbitrary user-uploaded workout data exports and renders interactive analytics.",
    longDescription: `Built a client-side data visualization tool that ingests arbitrary user-uploaded workout data exports and renders interactive analytics.

Designed a layered architecture separating data ingestion, domain modeling, analytics, and UI to support extensibility.

Implemented interactive charts tracking volume, strength progression, and consistency metrics.

Deployed as a static application on Vercel, prioritizing performance, security, and data ownership (no server-side storage).`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Solo Developer",
    duration: "November 2025 – December 2025",
    year: 2025,
    highlights: [
      "Client-side data visualization for user-uploaded workout data",
      "Layered architecture for extensibility",
      "Interactive charts for volume, strength, and consistency tracking",
      "Static deployment with no server-side storage",
    ],
    links: {
      live: "https://strong-data-visualizer.vercel.app",
      github: "https://github.com/Zaidane-E/Strong-Data-Visualizer",
    },
    featured: true,
  },
  {
    slug: "chara",
    title: "Chara – Task & Habit Tracking App",
    description:
      "A full-stack task and habit tracking app with multi-user authentication and JWT-based, role-aware access control.",
    longDescription: `Developed a full-stack task and habit tracking app with multi-user authentication and JWT-based, role-aware access control.

Built RESTful APIs documented with Swagger/OpenAPI and covered by xUnit tests.

The application provides a clean interface for managing tasks and building consistent habits.`,
    technologies: ["C#", "ASP.NET Core", "PostgreSQL", "Angular", "xUnit", "Azure"],
    role: "Solo Developer",
    duration: "May 2025 – December 2025",
    year: 2025,
    highlights: [
      "Multi-user authentication with JWT-based access control",
      "RESTful APIs documented with Swagger/OpenAPI",
      "Comprehensive xUnit test coverage",
      "Clean interface for task and habit management",
    ],
    links: {
      live: "https://chara-eight.vercel.app",
      github: "https://github.com/Zaidane-E/Chara",
    },
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    company: "AB Protection",
    role: "Software Developer (Co-op)",
    location: "Casablanca, Morocco",
    period: "January 2025 – April 2025",
    description:
      "Tested and debugged RESTful APIs within a 5-6 person full-stack team, identifying 12+ bugs and writing 15+ test cases to improve reliability and data integrity.",
    achievements: [
      "Tested and debugged RESTful APIs within a 5-6 person full-stack team, identifying 12+ bugs and writing 15+ test cases to improve reliability and data integrity",
      "Built and fixed user-facing features, including data search, sorting, and file upload functionality, using React, Angular, RxJS, and PostgreSQL",
      "Automated manual deployment steps by implementing CI/CD pipelines with GitHub Actions for releases to Vercel",
    ],
    technologies: ["React", "Angular", "RxJS", "PostgreSQL", "GitHub Actions", "Vercel"],
  },
  {
    company: "Ribbon Communications",
    role: "Software Developer – DevOps (Co-op)",
    location: "Ottawa, ON",
    period: "September 2021 – August 2022",
    description:
      "Built Bash and Bitbucket API tools to identify inactive users, outdated emails, and duplicate accounts across the org following a company merger.",
    achievements: [
      "Built Bash and Bitbucket API tools to identify inactive users, outdated emails, and duplicate accounts across the org following a company merger, replacing manual DevOps cleanup processes",
      "Developed a Bash and WhiteSource API tool to audit large-scale whitespace/license data, converting results into browsable spreadsheets for team review",
      "Designed an automated documentation generator that converted Confluence wikis (hundreds of pages each) into standalone folders, enabling the technical documentation team to deliver docs to clients without wiki access",
      "Monitored and maintained uptime across 50+ servers on multiple Linux distributions using Grafana and InfluxDB, diagnosing and resolving storage, version, and connectivity failures; built an additional dashboard using ElasticSearch and Kibana",
      "Implemented Jenkins pipelines, Docker containers, and Cron jobs to run daily automated tests across up to 10 services/environments",
      "Migrated 12 VMs and server images between OpenStack/OpenShift instances as part of a 2-person team during a time-sensitive infrastructure migration; also maintained Artifactory for the team",
    ],
    technologies: ["Bash", "Bitbucket", "Python", "Linux", "Grafana", "InfluxDB", "ElasticSearch", "Kibana", "Jenkins", "Docker", "Cron", "OpenStack", "Artifactory"],
  },
  {
    company: "Sunny Futures",
    role: "Technical Consultant (Volunteer)",
    location: "Ottawa, ON",
    period: "May 2026 – July 2026",
    description:
      "Advised on website structure and platform configuration using Wix, translating stakeholder needs into actionable technical recommendations to improve digital presence.",
    achievements: [
      "Advised on website structure and platform configuration using Wix, translating stakeholder needs into actionable technical recommendations to improve digital presence",
    ],
    technologies: ["Wix"],
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "C#", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["RESTful APIs", "JWT Authentication", "OpenAPI/Swagger"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["ASP.NET Core", "React", "Angular", "Next.js", "Spring Boot", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Neon"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "Vercel", "Linux", "Artifactory"],
  },
  {
    category: "DevOps & Automation",
    items: ["Docker", "Ansible", "Jenkins", "Cron", "CI/CD", "OpenStack", "Grafana", "InfluxDB"],
  },
  {
    category: "Tools & Methodologies",
    items: ["Git", "Bitbucket", "Jira", "Confluence", "Scrum"],
  },
];

export const languages: Language[] = [
  {
    language: "English",
    proficiency: "Fluent (IELTS 8.0)",
  },
  {
    language: "French",
    proficiency: "Native/Bilingual",
  },
  {
    language: "Arabic",
    proficiency: "Native/Bilingual",
  },
  {
    language: "Japanese",
    proficiency: "Advanced (JLPT N2)",
  },
  {
    language: "Spanish",
    proficiency: "Elementary (A2)",
  },
];

export const education: Education[] = [
  {
    institution: "University of Ottawa",
    degree: "Bachelor of Applied Science, Software Engineering (Co-op Program)",
    location: "Ottawa, ON",
    period: "2019 – 2025",
    coursework: [
      "Software Architecture and Design",
      "Requirements Engineering",
      "Real-Time and Embedded Software Design",
      "Software Engineering Project Management",
    ],
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
