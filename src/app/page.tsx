import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { LinkButton } from "@/components/button";
import {
  ShieldIcon,
  DocumentIcon,
  RadarIcon,
  GraduationCapIcon,
  ChartIcon,
  BellIcon,
  CheckIcon,
} from "@/components/icons";

const features = [
  {
    icon: <DocumentIcon />,
    title: "Policy management",
    description:
      "Draft, version, and publish policies with built-in approval workflows and acknowledgement tracking.",
  },
  {
    icon: <ShieldIcon />,
    title: "Risk assessments",
    description:
      "Run structured risk assessments and track remediation plans from a single register.",
  },
  {
    icon: <RadarIcon />,
    title: "Regulatory monitoring",
    description:
      "Track relevant regulatory changes and map them to the controls they affect.",
  },
  {
    icon: <ChartIcon />,
    title: "Audit trails",
    description:
      "Every change is timestamped and attributable, ready for your next internal or external audit.",
  },
  {
    icon: <GraduationCapIcon />,
    title: "Training & certifications",
    description:
      "Assign training, track completion, and keep certification expirations from slipping through the cracks.",
  },
  {
    icon: <BellIcon />,
    title: "Reporting & alerts",
    description:
      "Real-time dashboards and alerts keep stakeholders informed the moment something needs attention.",
  },
];

const steps = [
  {
    title: "Connect your framework",
    description:
      "Import existing policies and controls, or start from one of our regulatory framework templates.",
  },
  {
    title: "Assign ownership",
    description:
      "Route tasks, assessments, and reviews to the right owners with due dates and reminders.",
  },
  {
    title: "Monitor continuously",
    description:
      "Argus watches for overdue items, expiring certifications, and control gaps automatically.",
  },
];

const testimonials = [
  {
    quote:
      "Argus cut our quarterly audit prep from three weeks to three days. Everything we need is already organized.",
    name: "Priya N.",
    role: "Head of Compliance, fintech scale-up",
  },
  {
    quote:
      "The regulatory monitoring alone paid for the platform — we caught a policy gap before our auditors did.",
    name: "Marcus T.",
    role: "VP Risk & Compliance",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-brand-border bg-brand-surface">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
              Compliance, continuously monitored
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-brand-secondary sm:text-5xl">
              One system of record for policies, risk, and audits.
            </h1>
            <p className="mt-6 text-lg text-brand-muted">
              Argus brings policy management, risk assessments, and
              regulatory monitoring into a single platform so nothing falls
              through the cracks before your next audit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/signup" className="sm:w-auto">
                Start free trial
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" className="sm:w-auto">
                Talk to sales
              </LinkButton>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-muted">
              {["No credit card required", "14-day trial", "Cancel anytime"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckIcon className="h-4 w-4 text-brand-accent" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="rounded-[var(--radius-card)] border border-brand-border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-brand-border pb-4">
              <p className="text-sm font-semibold text-brand-secondary">
                Compliance overview
              </p>
              <span className="rounded-full bg-brand-accent/10 px-2.5 py-1 text-xs font-medium text-brand-accent">
                92% ready
              </span>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              {[
                { label: "Open policies", value: "4" },
                { label: "Risks in review", value: "7" },
                { label: "Audits this quarter", value: "2" },
                { label: "Certifications expiring", value: "3" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius-card)] bg-brand-surface p-4"
                >
                  <dt className="text-xs text-brand-muted">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-brand-secondary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Platform"
            title="Everything compliance teams need, in one place"
            description="Replace spreadsheets and shared drives with a purpose-built system that keeps every control, policy, and assessment audit-ready."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-border bg-brand-surface py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="How it works" title="Up and running in three steps" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-secondary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Customers" title="Trusted by compliance teams" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-[var(--radius-card)] border border-brand-border p-6"
              >
                <p className="text-lg text-brand-secondary">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-brand-muted">
                  <span className="font-semibold text-brand-secondary">
                    {testimonial.name}
                  </span>{" "}
                  &mdash; {testimonial.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-secondary py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
            Ready to see Argus in action?
          </h2>
          <p className="max-w-xl text-white/80">
            Start a free trial or book time with our team to see how Argus
            fits your compliance program.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/signup">Start free trial</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Talk to sales
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
