import Link from "next/link";
import { getFeaturedProjects } from "@/lib/data";
import { Container, Section, SectionHeader, BadgeList } from "@/components/ui";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section>
      <Container>
        <SectionHeader
          title="Featured Projects"
          description="Selected work that showcases my technical skills and problem-solving approach."
        />
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block rounded-lg border border-zinc-100 bg-white p-6 transition-colors hover:border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
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
        <div className="mt-8">
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            View all projects &rarr;
          </Link>
        </div>
      </Container>
    </Section>
  );
}
