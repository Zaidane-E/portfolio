export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  role: string;
  duration: string;
  year: number;
  highlights: string[];
  links?: {
    live?: string;
    github?: string;
    case_study?: string;
  };
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  avatar?: string;
  resumeUrl?: string;
  socials: SocialLink[];
}
