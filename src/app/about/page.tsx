import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Argus builds compliance software for teams who'd rather prevent findings than explain them.",
};

const values = [
  {
    title: "Evidence over assurances",
    description:
      "We believe compliance should be provable, not just promised. Every action in Argus leaves a record.",
  },
  {
    title: "Built for the people doing the work",
    description:
      "Compliance teams are often small and stretched thin. We design for speed, not just completeness.",
  },
  {
    title: "Continuous, not periodic",
    description:
      "Compliance isn't a once-a-year event. Argus is built to monitor and remind year-round.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brand-border bg-brand-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="About Argus"
            title="Compliance software built by people who've done the job"
            description="Argus started as an internal tool for tracking policies and audits across a fast-growing fintech. Today it's the system of record for compliance teams who'd rather prevent findings than explain them."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading align="left" eyebrow="What we believe" title="Our values" />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-base font-semibold text-brand-secondary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
