"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signup, type AuthState } from "@/app/auth/actions";
import { Button } from "@/components/button";
import { inputClasses } from "@/components/form-field";

const initialState: AuthState = { error: null };

export function SignupForm() {
  const [state, formAction, isPending] = useActionState(signup, initialState);

  return (
    <section className="flex items-center justify-center py-20 sm:py-28">
      <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-brand-border p-8">
        <h1 className="text-2xl font-bold text-brand-secondary">
          Start your free trial
        </h1>
        <p className="mt-1 text-sm text-brand-muted">
          14 days free. No credit card required.
        </p>

        <form action={formAction} className="mt-6 space-y-4">
          <div>
            <label htmlFor="fullName" className="text-sm font-medium text-brand-secondary">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              className={`mt-1.5 ${inputClasses}`}
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-brand-secondary">
              Work email
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
              minLength={8}
              required
              className={`mt-1.5 ${inputClasses}`}
            />
          </div>

          {state.error && <p className="text-sm text-red-600">{state.error}</p>}

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Creating account…" : "Create account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-brand-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-brand-primary">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
