import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Container } from "@/components/container";
import { addComplianceItem } from "./actions";
import { StatusSelect } from "./status-select";

export const metadata: Metadata = {
  title: "Dashboard",
};

type ComplianceItem = {
  id: string;
  title: string;
  status: "pending" | "in_review" | "complete";
  due_date: string | null;
  created_at: string;
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: items } = await supabase
    .from("compliance_items")
    .select("id, title, status, due_date, created_at")
    .order("created_at", { ascending: false })
    .returns<ComplianceItem[]>();

  const complianceItems = items ?? [];
  const counts = {
    pending: complianceItems.filter((item) => item.status === "pending").length,
    in_review: complianceItems.filter((item) => item.status === "in_review").length,
    complete: complianceItems.filter((item) => item.status === "complete").length,
  };

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
          {[
            { label: "Pending", value: counts.pending },
            { label: "In review", value: counts.in_review },
            { label: "Complete", value: counts.complete },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[var(--radius-card)] border border-brand-border p-5"
            >
              <p className="text-xs text-brand-muted">{stat.label}</p>
              <p className="mt-1 text-3xl font-bold text-brand-secondary">
                {stat.value}
              </p>
            </div>
          ))}
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
                          Due {new Date(item.due_date).toLocaleDateString()}
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
                <input
                  id="title"
                  name="title"
                  required
                  className="mt-1 w-full rounded-[var(--radius-card)] border border-brand-border bg-background px-3 py-2 text-sm text-brand-secondary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                />
              </div>
              <div>
                <label htmlFor="dueDate" className="text-xs font-medium text-brand-secondary">
                  Due date
                </label>
                <input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  className="mt-1 w-full rounded-[var(--radius-card)] border border-brand-border bg-background px-3 py-2 text-sm text-brand-secondary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
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
