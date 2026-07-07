export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-brand-secondary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-brand-muted">{description}</p>
      )}
    </div>
  );
}
