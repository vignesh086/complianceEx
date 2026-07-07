"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { login, type AuthState } from "@/app/auth/actions";
import { Button } from "@/components/button";

const inputClasses =
  "w-full rounded-[var(--radius-card)] border border-brand-border bg-background px-3.5 py-2.5 text-sm text-brand-secondary placeholder:text-brand-muted focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20";

const initialState: AuthState = { error: null };

export function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/dashboard";
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <section className="flex items-center justify-center py-20 sm:py-28">
      <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-brand-border p-8">
        <h1 className="text-2xl font-bold text-brand-secondary">Log in</h1>
        <p className="mt-1 text-sm text-brand-muted">
          Welcome back to Argus.
        </p>

        <form action={formAction} className="mt-6 space-y-4">
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div>
            <label htmlFor="email" className="text-sm font-medium text-brand-secondary">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={`mt-1.5 ${inputClasses}`}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-brand-secondary">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className={`mt-1.5 ${inputClasses}`}
            />
          </div>

          {state.error && <p className="text-sm text-red-600">{state.error}</p>}

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Logging in…" : "Log in"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-brand-muted">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-brand-primary">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
