"use client";

import { personalInfo } from "@/lib/data";
import { Container, Section, SectionHeader, LinkButton } from "@/components/ui";
import {
  useTranslations,
  useTranslatedExperience,
  useTranslatedSkills
} from "@/lib/i18n/useTranslatedData";

export default function ExperiencePage() {
  const t = useTranslations();
  const experience = useTranslatedExperience();
  const skills = useTranslatedSkills();
  return (
    <Section className="pt-20">
      <Container>
        <header className="mb-16">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            {t.pages.experience.title}
          </h1>
          <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              {t.pages.experience.description}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href={`mailto:${personalInfo.email}`}>
              {t.sections.getInTouch}
            </LinkButton>
            <LinkButton href={t.hero.resumeUrl} variant="secondary" external>
              {t.hero.viewResume}
            </LinkButton>
          </div>
        </header>

        <div className="space-y-16">
          <section>
            <SectionHeader
              title={t.sections.workExperience}
              description={t.sections.workExperienceDesc}
            />
            <div className="space-y-10">
              {experience.map((job, index) => (
                <article key={index}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {job.role}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <time className="text-sm text-zinc-500">{job.period}</time>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {job.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-600 dark:text-zinc-400 before:mr-2 before:content-['•']"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-zinc-100 pt-16 dark:border-zinc-800">
            <SectionHeader
              title={t.sections.technicalSkills}
              description={t.sections.technicalSkillsDesc}
            />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {skill.category}
                  </h3>
                  <ul className="mt-3 space-y-1">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-zinc-100 pt-16 dark:border-zinc-800">
            <SectionHeader title={t.sections.connect} />
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {personalInfo.email}
                </a>
              </li>
              {personalInfo.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </Section>
  );
}
