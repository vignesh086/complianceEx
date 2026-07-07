import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSafeUser } from "@/lib/supabase/auth";
import { Container } from "@/components/container";
import { inputClasses } from "@/components/form-field";
import { addComplianceItem } from "./actions";
import { StatusSelect } from "./status-select";
import { statusLabels, type ComplianceStatus } from "./status";

export const metadata: Metadata = {
  title: "Dashboard",
};

type ComplianceItem = {
  id: string;
  title: string;
  status: ComplianceStatus;
  due_date: string | null;
  created_at: string;
};

function formatDueDate(dateString: string) {
  // due_date is a plain SQL "date" (no time/timezone). Building the Date
  // from its Y/M/D parts in local time avoids new Date(dateString) parsing
  // it as UTC midnight and displaying a day early in negative-UTC zones.
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString();
}

export default async function DashboardPage() {
  const user = await getSafeUser();

  if (!user) {
    redirect("/login");
  }

  const supabase = await createClient();
  const { data: items } = await supabase
    .from("compliance_items")
    .select("id, title, status, due_date, created_at")
    .eq("owner", user.id)
    .order("created_at", { ascending: false })
    .returns<ComplianceItem[]>();

  const complianceItems = items ?? [];
  const counts = complianceItems.reduce(
    (acc, item) => {
      acc[item.status] += 1;
      return acc;
    },
    { pending: 0, in_review: 0, complete: 0 } as Record<ComplianceStatus, number>,
  );

  return (
    <section className="py-12">
      <Container>
        <div>
          <h1 className="text-2xl font-bold text-brand-secondary">
            Welcome back{user.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ""}
          </h1>
          <p className="mt-1 text-sm text-brand-muted">{user.email}</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {(Object.entries(statusLabels) as [ComplianceStatus, string][]).map(
            ([status, label]) => (
              <div
                key={status}
                className="rounded-[var(--radius-card)] border border-brand-border p-5"
              >
                <p className="text-xs text-brand-muted">{label}</p>
                <p className="mt-1 text-3xl font-bold text-brand-secondary">
                  {counts[status]}
                </p>
              </div>
            ),
          )}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-[var(--radius-card)] border border-brand-border">
            <div className="border-b border-brand-border px-5 py-4">
              <h2 className="text-sm font-semibold text-brand-secondary">
                Compliance items
              </h2>
            </div>

            {complianceItems.length === 0 ? (
              <p className="px-5 py-8 text-center text-sm text-brand-muted">
                No compliance items yet — add your first one.
              </p>
            ) : (
              <ul className="divide-y divide-brand-border">
                {complianceItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-brand-secondary">
                        {item.title}
                      </p>
                      {item.due_date && (
                        <p className="text-xs text-brand-muted">
                          Due {formatDueDate(item.due_date)}
                        </p>
                      )}
                    </div>
                    <StatusSelect itemId={item.id} status={item.status} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="h-fit rounded-[var(--radius-card)] border border-brand-border p-5">
            <h2 className="text-sm font-semibold text-brand-secondary">
              Add compliance item
            </h2>
            <form action={addComplianceItem} className="mt-4 space-y-3">
              <div>
                <label htmlFor="title" className="text-xs font-medium text-brand-secondary">
                  Title
                </label>
                <input id="title" name="title" required className={`mt-1 ${inputClasses}`} />
              </div>
              <div>
                <label htmlFor="dueDate" className="text-xs font-medium text-brand-secondary">
                  Due date
                </label>
                <input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  className={`mt-1 ${inputClasses}`}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-[var(--radius-card)] bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-brand-primary-hover"
              >
                Add item
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
