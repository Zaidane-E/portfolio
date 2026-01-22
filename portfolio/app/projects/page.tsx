import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Container, Section, SectionHeader, BadgeList } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects showcasing my work in software engineering, from distributed systems to developer tools.",
};

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <Section className="pt-20">
      <Container>
        <SectionHeader
          title="Projects"
          description="A collection of work spanning distributed systems, developer tools, and web applications."
        />
        <div className="space-y-6">
          {sortedProjects.map((project) => (
            <article key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-lg border border-zinc-100 bg-white p-6 transition-colors hover:border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h2>
                      <span className="text-sm text-zinc-500 dark:text-zinc-500">
                        {project.year}
                      </span>
                      {project.featured && (
                        <span className="rounded-md bg-zinc-900 px-2 py-0.5 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <BadgeList items={project.technologies} limit={5} />
                      <span className="text-sm text-zinc-500 dark:text-zinc-500">
                        {project.role}
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-sm text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"
                    aria-hidden="true"
                  >
                    View
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
