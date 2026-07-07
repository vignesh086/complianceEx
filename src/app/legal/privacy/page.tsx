import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <h1 className="text-3xl font-bold text-brand-secondary">Privacy policy</h1>
        <p className="mt-4 text-brand-muted">
          This is placeholder content. Replace with Argus&apos;s actual privacy
          policy before launch.
        </p>
      </Container>
    </section>
  );
}
