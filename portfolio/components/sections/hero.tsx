import { personalInfo } from "@/lib/data";
import { Container } from "@/components/ui";
import { LinkButton } from "@/components/ui";

export function Hero() {
  return (
    <Container as="section" className="py-20">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {personalInfo.name}
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          {personalInfo.title} in {personalInfo.location}
        </p>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {personalInfo.bio}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <LinkButton href="/projects">View Projects</LinkButton>
          <LinkButton href={`mailto:${personalInfo.email}`} variant="secondary">
            Get in Touch
          </LinkButton>
          {personalInfo.resumeUrl && (
            <LinkButton
              href={personalInfo.resumeUrl}
              variant="ghost"
              external
            >
              Resume
            </LinkButton>
          )}
        </div>
      </div>
    </Container>
  );
}
