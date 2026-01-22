import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/data";
import { Container, Section, BadgeList, LinkButton } from "@/components/ui";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section className="pt-20">
      <Container>
        <nav className="mb-8">
          <Link
            href="/projects"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            &larr; All Projects
          </Link>
        </nav>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              {project.title}
            </h1>
            <span className="text-zinc-500 dark:text-zinc-500">
              {project.year}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <span>{project.role}</span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span>{project.duration}</span>
          </div>

          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          {project.links && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.live && (
                <LinkButton href={project.links.live} external>
                  View Live
                </LinkButton>
              )}
              {project.links.github && (
                <LinkButton href={project.links.github} variant="secondary" external>
                  View Source
                </LinkButton>
              )}
            </div>
          )}
        </header>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Overview
          </h2>
          <div className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400">
            {project.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-12 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Key Achievements
          </h2>
          <ul className="mt-4 space-y-2">
            {project.highlights.map((highlight, i) => (
              <li
                key={i}
                className="text-zinc-600 dark:text-zinc-400"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Technologies
          </h2>
          <div className="mt-4">
            <BadgeList items={project.technologies} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
