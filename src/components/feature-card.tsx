import { type ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-brand-border bg-background p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] bg-brand-primary/10 text-brand-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-brand-secondary">
        {title}
      </h3>
      <p className="mt-2 text-sm text-brand-muted">{description}</p>
    </div>
  );
}
