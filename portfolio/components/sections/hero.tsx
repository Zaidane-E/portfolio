"use client";

import { Container } from "@/components/ui";
import { LinkButton } from "@/components/ui";
import { useTranslations, useTranslatedPersonalInfo } from "@/lib/i18n";

export function Hero() {
  const t = useTranslations();
  const personalInfo = useTranslatedPersonalInfo();

  return (
    <Container as="section" className="py-20">
      <div className="max-w-2xl">
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          {t.hero.greeting}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {personalInfo.name}
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          {personalInfo.title}
        </p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
          {personalInfo.location}
        </p>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {personalInfo.bio}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <LinkButton href="/projects">{t.nav.projects}</LinkButton>
          <LinkButton href={`mailto:${personalInfo.email}`} variant="secondary">
            {t.sections.getInTouch}
          </LinkButton>
          {personalInfo.resumeUrl && (
            <LinkButton
              href={personalInfo.resumeUrl}
              variant="ghost"
              external
            >
              {t.hero.viewResume}
            </LinkButton>
          )}
        </div>
      </div>
    </Container>
  );
}
