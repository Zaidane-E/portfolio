"use client";

import { useLanguage } from "./context";
import { translations } from "./translations";
import { dataFr } from "./data-fr";
import {
  personalInfo as personalInfoEn,
  projects as projectsEn,
  experience as experienceEn,
  skills as skillsEn,
  education as educationEn,
  languages as languagesEn,
} from "../data";

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}

export function useTranslatedPersonalInfo() {
  const { language } = useLanguage();

  if (language === "fr") {
    return {
      ...personalInfoEn,
      bio: dataFr.personalInfo.bio,
      title: translations.fr.hero.title,
    };
  }

  return personalInfoEn;
}

export function useTranslatedProjects() {
  const { language } = useLanguage();

  if (language === "fr") {
    return projectsEn.map((project) => {
      const frData = dataFr.projects[project.slug as keyof typeof dataFr.projects];
      if (frData) {
        return {
          ...project,
          title: frData.title,
          description: frData.description,
          longDescription: frData.longDescription,
          highlights: frData.highlights,
        };
      }
      return project;
    });
  }

  return projectsEn;
}

export function useTranslatedExperience() {
  const { language } = useLanguage();

  if (language === "fr") {
    return experienceEn.map((exp) => {
      const key = exp.company.toLowerCase().replace(/\s+/g, "-");
      const frData = dataFr.experience[key as keyof typeof dataFr.experience];
      if (frData) {
        return {
          ...exp,
          description: frData.description,
          achievements: frData.achievements,
        };
      }
      return exp;
    });
  }

  return experienceEn;
}

export function useTranslatedSkills() {
  const { language } = useLanguage();

  if (language === "fr") {
    return skillsEn.map((skill) => {
      const frCategory = dataFr.skills.categories[skill.category as keyof typeof dataFr.skills.categories];
      return {
        ...skill,
        category: frCategory || skill.category,
      };
    });
  }

  return skillsEn;
}

export function useTranslatedEducation() {
  const { language } = useLanguage();

  if (language === "fr") {
    return educationEn.map((edu) => {
      const frData = dataFr.education.uottawa;
      return {
        ...edu,
        degree: frData.degree,
      };
    });
  }

  return educationEn;
}

export function useTranslatedLanguages() {
  const { language } = useLanguage();

  if (language === "fr") {
    return dataFr.languages;
  }

  return languagesEn;
}
