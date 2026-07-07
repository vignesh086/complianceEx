import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/pricing", label: "Pricing" },
      { href: "/signup", label: "Get started" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy policy" },
      { href: "/legal/terms", label: "Terms of service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface">
      <Container className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-4">
        <div className="col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-brand-muted">
            Argus keeps your regulatory obligations, policies, and audits in
            one continuously monitored system of record.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-brand-secondary">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="flex flex-col gap-2 border-t border-brand-border py-6 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Argus. All rights reserved.</p>
        <p>Brand identity placeholder &mdash; pending final assets.</p>
      </Container>
    </footer>
  );
}
