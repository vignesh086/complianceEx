import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Check your email",
};

export default function CheckEmailPage() {
  return (
    <section className="flex items-center justify-center py-20 sm:py-28">
      <Container className="max-w-sm text-center">
        <h1 className="text-2xl font-bold text-brand-secondary">
          Check your email
        </h1>
        <p className="mt-2 text-sm text-brand-muted">
          We sent you a confirmation link. Click it to activate your Argus
          account.
        </p>
      </Container>
    </section>
  );
}
