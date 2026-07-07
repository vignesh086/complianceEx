import Link from "next/link";

/**
 * Placeholder wordmark — swap for the Dealexus logo mark (see BRANDING.md).
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 text-lg font-bold tracking-tight text-brand-secondary ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-card)] bg-brand-primary text-sm text-white">
        Ag
      </span>
      Argus
    </Link>
  );
}
