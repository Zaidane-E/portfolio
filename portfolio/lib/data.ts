import { Project, Experience, Skill, PersonalInfo } from "./types";

export const personalInfo: PersonalInfo = {
  name: "Zaidane El Haouari",
  title: "Software Engineer",
  location: "Ottawa, ON, Canada",
  email: "elhaouarizaidane@gmail.com",
  bio: "Software Engineering New Grad with professional CO-OP experience in DevOps, backend development, automation, and web systems. Reliable, transparent, and detail-oriented, I bring a maker's mindset fueled by diverse interests in language learning, custom hardware, and creative problem-solving.",
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
      "A full-stack web application enabling cycling club owners to create and manage race events using real-time data from cyclists via Strava API integration.",
    longDescription: `Collaborated with peers to design and implement a full-stack web application for cycling club event management. The platform enables club owners to create and manage race events while tracking athlete performance in real-time.

Integrated the Strava API to retrieve athlete performance metrics, GPS data, and activity statistics. This integration enhanced event analytics and enabled comprehensive participant monitoring throughout race events.

The frontend was built with React for a responsive user experience, while the backend utilized Spring Boot with Maven for robust API development. MySQL was used for persistent data storage, ensuring reliable and scalable operations.`,
    technologies: ["React", "Java", "Maven", "MySQL", "Spring Boot", "Strava API"],
    role: "Full-Stack Developer",
    duration: "8 months",
    year: 2024,
    highlights: [
      "Integrated Strava API for real-time athlete performance tracking",
      "Built event management features with React frontend",
      "Implemented GPS data retrieval and visualization",
      "Designed scalable database schema with MySQL",
    ],
    featured: true,
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description:
      "A simple yet robust task management application demonstrating end-to-end API and frontend integration with comprehensive testing.",
    longDescription: `Built a task management application for tracking task priorities, due dates, and completion status. The project demonstrates clean architecture and best practices for full-stack development.

The backend is built with C# and .NET 8, using Entity Framework Core for database operations with SQLite. REST endpoints are fully documented with Swagger for easy API exploration and testing.

Implemented comprehensive testing with xUnit to ensure robust backend functionality. The Angular frontend provides a clean interface for task management with real-time updates.`,
    technologies: ["C#", ".NET 8", "SQLite", "Angular", "xUnit", "EF Core", "Swagger"],
    role: "Solo Developer",
    duration: "2 months",
    year: 2024,
    highlights: [
      "End-to-end API and frontend integration",
      "EF Core migrations for database management",
      "Swagger-documented REST endpoints",
      "Comprehensive xUnit test coverage",
    ],
    links: {
      github: "https://github.com/zaidane-e",
    },
    featured: true,
  },
  {
    slug: "minesweeper-bot",
    title: "Minesweeper Bot",
    description:
      "An automated Minesweeper solver using Python with a benchmarking framework to evaluate algorithm performance across hundreds of games.",
    longDescription: `Developed an automated Minesweeper solver that efficiently clears randomly generated games using logical deduction and probability-based decision making.

Built a comprehensive benchmarking framework to simulate hundreds of games, tracking win rates and decision accuracy. This allowed for systematic evaluation and improvement of the solving algorithm's performance.

The project demonstrates algorithmic problem-solving, probability theory application, and performance optimization techniques.`,
    technologies: ["Python"],
    role: "Solo Developer",
    duration: "1 month",
    year: 2023,
    highlights: [
      "Automated solving of randomly generated Minesweeper games",
      "Benchmarking framework for algorithm evaluation",
      "Win rate and decision accuracy tracking",
      "Optimized algorithm performance through iterative testing",
    ],
    links: {
      github: "https://github.com/zaidane-e",
    },
    featured: true,
  },
  {
    slug: "documentation-tool",
    title: "Documentation Tool",
    description:
      "A tool to generate stylized, searchable documentation from Confluence exports, improving accessibility for teams and clients.",
    longDescription: `Developed a documentation generation tool that transforms Confluence exports into stylized, searchable documentation. The tool significantly improves accessibility for both internal teams and external clients.

Automated indexing and search functionality reduces manual documentation effort while enhancing usability. The generated documentation features a clean, professional design with fast search capabilities.

Built with Java for the core processing logic, with CSS and HTML5 for the frontend presentation. Bash scripts automate the build and deployment process.`,
    technologies: ["Java", "CSS", "HTML5", "Bash"],
    role: "Solo Developer",
    duration: "2 months",
    year: 2023,
    highlights: [
      "Transforms Confluence exports into searchable documentation",
      "Automated indexing and search functionality",
      "Improved documentation accessibility for teams and clients",
      "Reduced manual documentation effort",
    ],
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    company: "AB Protection",
    role: "Software Developer (CO-OP)",
    location: "Casablanca, Morocco",
    period: "January 2025 - April 2025",
    description:
      "Worked on RESTful APIs, prototype features, and CI/CD pipelines for an Agile software development team.",
    achievements: [
      "Tested and debugged RESTful APIs using Python and JavaScript, improving system reliability",
      "Implemented and enhanced prototype features with React, Angular, and RxJS",
      "Integrated PostgreSQL databases ensuring smooth functionality",
      "Collaborated on Agile workflows using Git, Bitbucket, and Jira",
      "Implemented CI/CD pipelines with GitHub Actions, deploying applications on Vercel",
    ],
    technologies: ["Python", "JavaScript", "React", "Angular", "RxJS", "PostgreSQL", "GitHub Actions", "Vercel"],
  },
  {
    company: "Ribbon Communications",
    role: "Software Developer DevOps (CO-OP)",
    location: "Ottawa, ON",
    period: "May 2022 - August 2022",
    description:
      "Focused on cloud infrastructure visualization, automation, and Linux server administration.",
    achievements: [
      "Visualized cloud infrastructure data using Grafana, ElasticSearch, and Kibana",
      "Developed Ansible playbooks to automate operational tasks on OpenStack",
      "Diagnosed and resolved server issues across multiple Linux distributions (Ubuntu, CentOS, Debian, Solus, RHEL, Fedora)",
      "Improved system observability and troubleshooting efficiency",
    ],
    technologies: ["Grafana", "ElasticSearch", "Kibana", "Ansible", "OpenStack", "Linux"],
  },
  {
    company: "Ribbon Communications",
    role: "Software Developer DevOps (CO-OP)",
    location: "Ottawa, ON",
    period: "September 2021 - December 2021",
    description:
      "Built automation tools and enhanced server observability for DevOps workflows.",
    achievements: [
      "Built automation tools in Python, Java, and Bash to streamline workflows",
      "Automated Bitbucket repository updates, VM creation, and testing processes",
      "Enhanced server observability with Grafana, Telegraf, and InfluxDB",
      "Automated testing pipelines with Jenkins Pipelines, Docker, and Cron jobs",
    ],
    technologies: ["Python", "Java", "Bash", "Grafana", "Telegraf", "InfluxDB", "Jenkins", "Docker"],
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["C#", "Python", "Java", "JavaScript", "HTML/CSS", "C++"],
  },
  {
    category: "Frameworks & Libraries",
    items: [".NET", "React", "Angular", "Spring", "RxJS", "jQuery"],
  },
  {
    category: "Databases & Environments",
    items: ["PostgreSQL", "SQL", "MySQL", "SQLite", "Linux", "REST APIs"],
  },
  {
    category: "DevOps & Automation",
    items: ["Docker", "Ansible", "Jenkins", "GitHub Actions", "OpenStack", "Grafana", "InfluxDB"],
  },
  {
    category: "Tools",
    items: ["Git", "Bitbucket", "Jira", "Confluence", "Kibana", "Artifactory"],
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
