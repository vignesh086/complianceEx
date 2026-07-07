"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

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

  await supabase.from("compliance_items").insert({
    owner: user.id,
    title,
    due_date: dueDate,
  });

  revalidatePath("/dashboard");
}

export async function updateComplianceItemStatus(
  itemId: string,
  status: "pending" | "in_review" | "complete",
) {
  const supabase = await createClient();
  await supabase
    .from("compliance_items")
    .update({ status })
    .eq("id", itemId);

  revalidatePath("/dashboard");
}
