export const statusLabels = {
  pending: "Pending",
  in_review: "In review",
  complete: "Complete",
} as const;

export type ComplianceStatus = keyof typeof statusLabels;
