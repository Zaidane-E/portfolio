import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="mb-10">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
    </header>
  );
}
