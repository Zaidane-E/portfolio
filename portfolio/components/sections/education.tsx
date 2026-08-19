"use client";

import { Container, Section, SectionHeader } from "@/components/ui";
import { useTranslations, useTranslatedEducation } from "@/lib/i18n";

export function Education() {
  const t = useTranslations();
  const education = useTranslatedEducation();
  return (
    <Section>
      <Container>
        <SectionHeader
          title={t.sections.education}
          description={t.sections.educationDesc}
        />
        <div className="space-y-6">
          {education.map((edu, index) => (
            <article key={index}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.degree}
                  </p>
                </div>
                <time className="text-sm text-zinc-500">{edu.period}</time>
              </div>
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {t.sections.relevantCoursework}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.coursework.join(", ")}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
