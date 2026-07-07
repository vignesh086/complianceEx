"use client";

import { useEffect } from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold text-brand-secondary">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-sm text-brand-muted">
        This usually means <code>NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
        <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> aren&apos;t set correctly
        for this deployment. Check your hosting provider&apos;s environment
        variables and redeploy.
      </p>
      <Button onClick={() => reset()} className="mt-6">
        Try again
      </Button>
    </Container>
  );
}
