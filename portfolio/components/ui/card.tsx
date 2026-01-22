import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  const hoverStyles = hover
    ? "transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
    : "";

  return (
    <article
      className={`rounded-lg border border-zinc-100 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 ${hoverStyles} ${className}`}
    >
      {children}
    </article>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <header className={`mb-3 ${className}`}>{children}</header>;
}

interface CardTitleProps {
  children: ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}

export function CardTitle({
  children,
  as: Component = "h3",
  className = "",
}: CardTitleProps) {
  return (
    <Component
      className={`font-semibold text-zinc-900 dark:text-zinc-100 ${className}`}
    >
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-sm text-zinc-600 dark:text-zinc-400 ${className}`}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <footer className={`mt-4 ${className}`}>{children}</footer>;
}
