import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { LinkButton } from "@/components/button";
import {
  ShieldIcon,
  DocumentIcon,
  RadarIcon,
  GraduationCapIcon,
  ChartIcon,
  BellIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore how Argus handles policy management, risk assessments, regulatory monitoring, audits, and training.",
};

const solutions = [
  {
    icon: <DocumentIcon />,
    title: "Policy management",
    description:
      "Centralize every policy with version history, review cycles, and e-signature acknowledgements.",
    points: [
      "Draft and route policies for approval",
      "Automatic re-attestation on a schedule you set",
      "Full version history with redline comparisons",
    ],
  },
  {
    icon: <ShieldIcon />,
    title: "Risk assessments",
    description:
      "Run consistent, repeatable risk assessments across every business unit.",
    points: [
      "Configurable risk scoring models",
      "Linked remediation plans with owners and due dates",
      "Heat maps for leadership reporting",
    ],
  },
  {
    icon: <RadarIcon />,
    title: "Regulatory monitoring",
    description:
      "Stay ahead of regulatory change instead of reacting to it.",
    points: [
      "Curated regulatory change feeds by jurisdiction",
      "Impact mapping to affected policies and controls",
      "Change history for examiner requests",
    ],
  },
  {
    icon: <ChartIcon />,
    title: "Audit trails",
    description:
      "Every action is logged automatically, so audit prep stops being a fire drill.",
    points: [
      "Immutable, timestamped activity logs",
      "Exportable evidence packages",
      "Role-based access for auditors",
    ],
  },
  {
    icon: <GraduationCapIcon />,
    title: "Training & certifications",
    description:
      "Assign, track, and prove completion of required training.",
    points: [
      "Automated reminders before expiration",
      "Completion certificates stored per employee",
      "Manager dashboards for team-wide status",
    ],
  },
  {
    icon: <BellIcon />,
    title: "Reporting & alerts",
    description:
      "Give leadership a live view of compliance posture at all times.",
    points: [
      "Real-time dashboards by team or framework",
      "Configurable alerts for overdue items",
      "Scheduled executive summaries",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-brand-border bg-brand-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="A complete compliance toolkit"
            description="Argus covers the full lifecycle of your compliance program, from policy drafting to audit-ready reporting."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`grid items-start gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] bg-brand-primary/10 text-brand-primary">
                  {solution.icon}
                </div>
                <h2 className="mt-4 text-2xl font-bold text-brand-secondary">
                  {solution.title}
                </h2>
                <p className="mt-3 text-brand-muted">{solution.description}</p>
              </div>
              <ul className="space-y-3 rounded-[var(--radius-card)] border border-brand-border p-6">
                {solution.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-brand-secondary">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-brand-secondary py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            See these solutions on a live walkthrough
          </h2>
          <LinkButton href="/contact">Book a walkthrough</LinkButton>
        </Container>
      </section>
    </>
  );
}
