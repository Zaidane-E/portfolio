"use client";

import Link from "next/link";
import { Container, Section, SectionHeader, BadgeList, LinkButton } from "@/components/ui";
import { useTranslations, useTranslatedProjects } from "@/lib/i18n";

export function FeaturedProjects() {
  const t = useTranslations();
  const allProjects = useTranslatedProjects();
  const projects = allProjects.filter(p => p.featured);

  return (
    <Section>
      <Container>
        <SectionHeader
          title={t.sections.featuredProjects}
          description={t.sections.featuredProjectsDesc}
        />
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-lg border border-zinc-100 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-500">
                  {project.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4">
                <BadgeList items={project.technologies} limit={4} />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links?.live && (
                  <LinkButton href={project.links.live} external>
                    {t.sections.viewLiveDemo}
                  </LinkButton>
                )}
                <LinkButton href={`/projects/${project.slug}`} variant="secondary">
                  {t.sections.learnMore}
                </LinkButton>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {t.sections.viewAllProjects} &rarr;
          </Link>
        </div>
      </Container>
    </Section>
  );
}
