"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { ComplianceStatus } from "./status";

export async function addComplianceItem(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const title = String(formData.get("title") ?? "").trim();
  const dueDate = String(formData.get("dueDate") ?? "") || null;

  if (!title) return;

  const { error } = await supabase.from("compliance_items").insert({
    owner: user.id,
    title,
    due_date: dueDate,
  });

  if (error) {
    console.error("addComplianceItem: insert failed", error);
    return;
  }

  revalidatePath("/dashboard");
}

export async function updateComplianceItemStatus(
  itemId: string,
  status: ComplianceStatus,
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // RLS already scopes updates to rows owned by the caller, but checking
  // ownership here too means this server action is safe even if it's ever
  // invoked directly (Server Actions are POST endpoints, not gated by the
  // /dashboard-only proxy route matcher) or RLS is misconfigured.
  const { error } = await supabase
    .from("compliance_items")
    .update({ status })
    .eq("id", itemId)
    .eq("owner", user.id);

  if (error) {
    console.error("updateComplianceItemStatus: update failed", error);
    return;
  }

  revalidatePath("/dashboard");
}
