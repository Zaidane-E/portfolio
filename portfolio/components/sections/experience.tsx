import { experience } from "@/lib/data";
import { Container, Section, SectionHeader } from "@/components/ui";

export function Experience() {
  return (
    <Section className="border-t border-zinc-100 dark:border-zinc-800">
      <Container>
        <SectionHeader
          title="Experience"
          description="My professional journey building software at scale."
        />
        <div className="space-y-12">
          {experience.map((job, index) => (
            <article key={index} className="relative">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {job.role}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {job.company} · {job.location}
                  </p>
                </div>
                <time className="text-sm text-zinc-500 dark:text-zinc-500">
                  {job.period}
                </time>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {job.description}
              </p>
              <ul className="mt-3 space-y-1">
                {job.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mr-2 text-zinc-400 dark:text-zinc-600">
                      ·
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
