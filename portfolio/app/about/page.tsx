import { Metadata } from "next";
import { personalInfo, education, languages } from "@/lib/data";
import { Container, Section, SectionHeader, LinkButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personalInfo.name}, including education, languages, and background.`,
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
              {personalInfo.bio}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href={`mailto:${personalInfo.email}`}>
              Get in Touch
            </LinkButton>
            {personalInfo.resumeUrl && (
              <LinkButton href={personalInfo.resumeUrl} variant="secondary" external>
                View Resume
              </LinkButton>
            )}
          </div>
        </header>

        <div className="space-y-16">
          <section>
            <SectionHeader
              title="Languages"
              description="Spoken languages and proficiency levels."
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
          </section>

          <section className="border-t border-zinc-100 pt-16 dark:border-zinc-800">
            <SectionHeader
              title="Education"
              description="Academic background and relevant coursework."
            />
            <div className="space-y-6">
              {education.map((edu, index) => (
                <article key={index}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {edu.degree}
                      </p>
                    </div>
                    <time className="text-sm text-zinc-500">{edu.period}</time>
                  </div>
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Relevant Coursework:
                      </p>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        {edu.coursework.join(", ")}
                      </p>
                    </div>
                  )}
                </article>
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
