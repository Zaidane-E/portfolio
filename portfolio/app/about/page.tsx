import { Metadata } from "next";
import { personalInfo, skills, experience } from "@/lib/data";
import { Container, Section, SectionHeader, LinkButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personalInfo.name}, a software engineer focused on building performant and accessible applications.`,
};

export default function AboutPage() {
  return (
    <Section className="pt-20">
      <Container>
        <header className="mb-16">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            About
          </h1>
          <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m {personalInfo.name}, a {personalInfo.title.toLowerCase()} based in{" "}
              {personalInfo.location}. I build software that solves real
              problems, with a focus on performance, accessibility, and
              maintainability.
            </p>
            <p>
              My work spans the full stack, from designing distributed systems
              that handle millions of operations to crafting intuitive user
              interfaces. I believe in writing code that&apos;s not just functional,
              but readable and testable.
            </p>
            <p>
              Currently, I&apos;m particularly interested in developer tooling and
              infrastructure. I enjoy building tools that make other engineers
              more productive and systems that scale gracefully under pressure.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me reading about systems design,
              contributing to open source, or exploring the outdoors.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href={`mailto:${personalInfo.email}`}>
              Get in Touch
            </LinkButton>
            {personalInfo.resumeUrl && (
              <LinkButton href={personalInfo.resumeUrl} variant="secondary" external>
                Download Resume
              </LinkButton>
            )}
          </div>
        </header>

        <div className="space-y-16">
          <section>
            <SectionHeader
              title="Experience"
              description="My professional journey in software engineering."
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
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-zinc-100 pt-16 dark:border-zinc-800">
            <SectionHeader
              title="Technical Skills"
              description="Technologies and practices I work with regularly."
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
            <SectionHeader title="Connect" />
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
