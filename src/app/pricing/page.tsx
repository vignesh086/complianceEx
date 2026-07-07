import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { LinkButton } from "@/components/button";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for compliance teams of any size.",
};

const tiers = [
  {
    name: "Starter",
    price: "$99",
    cadence: "/month",
    description: "For small teams getting their first compliance program off the ground.",
    features: [
      "Up to 10 users",
      "Policy management",
      "Basic risk register",
      "Email support",
    ],
    cta: "Start free trial",
    href: "/signup",
    featured: false,
  },
  {
    name: "Professional",
    price: "$349",
    cadence: "/month",
    description: "For growing compliance teams managing multiple frameworks.",
    features: [
      "Up to 50 users",
      "Everything in Starter",
      "Regulatory monitoring",
      "Audit trail exports",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "/signup",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For organizations with complex, multi-entity compliance needs.",
    features: [
      "Unlimited users",
      "Everything in Professional",
      "Custom frameworks & workflows",
      "SSO & advanced permissions",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    href: "/contact",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your program"
          description="Every plan includes a 14-day free trial. No credit card required."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-[var(--radius-card)] border p-8 ${
                tier.featured
                  ? "border-brand-primary bg-background shadow-lg lg:-translate-y-2"
                  : "border-brand-border bg-background"
              }`}
            >
              {tier.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-brand-secondary">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-brand-muted">{tier.description}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold text-brand-secondary">
                  {tier.price}
                </span>
                <span className="text-sm text-brand-muted">{tier.cadence}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-brand-secondary">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <LinkButton
                href={tier.href}
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {tier.cta}
              </LinkButton>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
