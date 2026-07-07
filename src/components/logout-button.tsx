"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          const supabase = createClient();
          await supabase.auth.signOut();
          router.push("/");
          router.refresh();
        })
      }
      className={`text-sm font-semibold text-brand-secondary hover:text-brand-primary disabled:opacity-50 ${className}`}
    >
      {isPending ? "Logging out…" : "Log out"}
    </button>
  );
}
