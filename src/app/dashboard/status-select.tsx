"use client";

import { useTransition } from "react";
import { updateComplianceItemStatus } from "./actions";

const statusLabels = {
  pending: "Pending",
  in_review: "In review",
  complete: "Complete",
} as const;

export function StatusSelect({
  itemId,
  status,
}: {
  itemId: string;
  status: keyof typeof statusLabels;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <select
      defaultValue={status}
      disabled={isPending}
      onChange={(event) =>
        startTransition(() => {
          updateComplianceItemStatus(
            itemId,
            event.target.value as keyof typeof statusLabels,
          );
        })
      }
      className="rounded-[var(--radius-card)] border border-brand-border bg-background px-2.5 py-1.5 text-xs font-medium text-brand-secondary focus:border-brand-primary focus:outline-none disabled:opacity-50"
    >
      {Object.entries(statusLabels).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
