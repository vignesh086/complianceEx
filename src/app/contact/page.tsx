import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Argus team.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your compliance program"
          description="Whether you have questions about pricing, need a walkthrough, or want to talk implementation, we're happy to help."
        />
        <div className="mt-12">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
