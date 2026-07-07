"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(false);

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          try {
            const supabase = createClient();
            await supabase.auth.signOut();
            router.push("/");
            router.refresh();
          } catch {
            setError(true);
          }
        })
      }
      className={`text-sm font-semibold text-brand-secondary hover:text-brand-primary disabled:opacity-50 ${className}`}
    >
      {isPending ? "Logging out…" : error ? "Log out failed — retry?" : "Log out"}
    </button>
  );
}
