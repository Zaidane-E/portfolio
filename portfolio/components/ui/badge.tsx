import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium";

  const variants = {
    default: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    outline:
      "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400",
  };

  return <span className={`${baseStyles} ${variants[variant]}`}>{children}</span>;
}

interface BadgeListProps {
  items: string[];
  variant?: "default" | "outline";
  limit?: number;
}

export function BadgeList({ items, variant = "default", limit }: BadgeListProps) {
  const displayItems = limit ? items.slice(0, limit) : items;
  const remaining = limit ? items.length - limit : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {displayItems.map((item) => (
        <Badge key={item} variant={variant}>
          {item}
        </Badge>
      ))}
      {remaining > 0 && (
        <Badge variant="outline">+{remaining} more</Badge>
      )}
    </div>
  );
}
