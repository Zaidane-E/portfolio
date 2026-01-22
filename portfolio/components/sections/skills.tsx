import { skills } from "@/lib/data";
import { Container, Section, SectionHeader } from "@/components/ui";

export function Skills() {
  return (
    <Section className="border-t border-zinc-100 dark:border-zinc-800">
      <Container>
        <SectionHeader
          title="Skills"
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
      </Container>
    </Section>
  );
}
