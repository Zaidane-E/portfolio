"use client";

import { languages } from "@/lib/data";
import { Container, Section, SectionHeader } from "@/components/ui";
import { useTranslations } from "@/lib/i18n";

export function Languages() {
  const t = useTranslations();
  return (
    <Section>
      <Container>
        <SectionHeader
          title={t.sections.languages}
          description={t.sections.languagesDesc}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((lang, index) => (
            <div key={index} className="flex items-baseline gap-2">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {lang.language}
              </span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {lang.proficiency}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
