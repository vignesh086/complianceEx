"use client";

import Link from "next/link";
import { useState } from "react";
import { LinkButton } from "@/components/button";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] text-brand-secondary hover:bg-brand-surface"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="h-6 w-6"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 z-40 border-b border-brand-border bg-background px-4 pb-6 shadow-lg">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius-card)] px-3 py-2.5 text-base font-medium text-brand-secondary hover:bg-brand-surface"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            {isLoggedIn ? (
              <LinkButton href="/dashboard" className="w-full" onClick={() => setOpen(false)}>
                Dashboard
              </LinkButton>
            ) : (
              <>
                <LinkButton href="/login" variant="secondary" className="w-full">
                  Log in
                </LinkButton>
                <LinkButton href="/signup" className="w-full">
                  Get started
                </LinkButton>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
