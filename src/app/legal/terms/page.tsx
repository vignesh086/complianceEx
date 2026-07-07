import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <h1 className="text-3xl font-bold text-brand-secondary">Terms of service</h1>
        <p className="mt-4 text-brand-muted">
          This is placeholder content. Replace with Argus&apos;s actual terms of
          service before launch.
        </p>
      </Container>
    </section>
  );
}
