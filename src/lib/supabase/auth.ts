import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

// Next.js signals control-flow (redirects, dynamic-usage bailouts) by
// throwing errors with a "digest" starting with NEXT_ or DYNAMIC_SERVER_USAGE.
// Those must propagate — only genuine Supabase misconfiguration/network
// failures should be swallowed here.
export function isNextInternalError(error: unknown) {
  const digest = (error as { digest?: string } | null)?.digest;
  return (
    typeof digest === "string" &&
    (digest.startsWith("NEXT_") || digest === "DYNAMIC_SERVER_USAGE")
  );
}

/**
 * Resolves the current user for this request, memoized so multiple Server
 * Components rendered in the same request (e.g. the layout's Navbar and a
 * page) share one Supabase Auth round-trip instead of each calling
 * auth.getUser() independently. Degrades to `null` (logged out) instead of
 * throwing when Supabase is unreachable/misconfigured — callers that must
 * fail closed (e.g. the dashboard) should still check for `null` themselves.
 */
export const getSafeUser = cache(async () => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    if (isNextInternalError(error)) {
      throw error;
    }
    console.error("Supabase: failed to resolve session", error);
    return null;
  }
});
