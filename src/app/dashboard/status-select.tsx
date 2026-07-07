"use client";

import { useTransition } from "react";
import { updateComplianceItemStatus } from "./actions";
import { statusLabels, type ComplianceStatus } from "./status";

export function StatusSelect({
  itemId,
  status,
}: {
  itemId: string;
  status: ComplianceStatus;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <select
      defaultValue={status}
      disabled={isPending}
      onChange={(event) =>
        startTransition(() => {
          updateComplianceItemStatus(itemId, event.target.value as ComplianceStatus);
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
