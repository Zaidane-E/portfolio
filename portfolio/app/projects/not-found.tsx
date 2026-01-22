import Link from "next/link";
import { Container, Section } from "@/components/ui";

export default function ProjectNotFound() {
  return (
    <Section className="pt-20">
      <Container>
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Project Not Found
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            The project you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-block text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </Container>
    </Section>
  );
}
