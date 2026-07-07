import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { LinkButton } from "@/components/button";
import { LogoutButton } from "@/components/logout-button";
import { MobileMenu } from "@/components/mobile-menu";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Next.js signals control-flow (redirects, dynamic-usage bailouts) by
// throwing errors with a "digest" starting with NEXT_ or DYNAMIC_SERVER_USAGE.
// Those must propagate — only genuine Supabase misconfiguration/network
// failures should be swallowed here.
function isNextInternalError(error: unknown) {
  const digest = (error as { digest?: string } | null)?.digest;
  return (
    typeof digest === "string" &&
    (digest.startsWith("NEXT_") || digest === "DYNAMIC_SERVER_USAGE")
  );
}

async function getCurrentUser() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    if (isNextInternalError(error)) {
      throw error;
    }
    console.error("Navbar: failed to load Supabase session", error);
    return null;
  }
}

export async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-background/95 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden sm:flex sm:items-center sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-muted hover:text-brand-secondary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex sm:items-center sm:gap-4">
          {user ? (
            <>
              <LinkButton href="/dashboard" variant="secondary">
                Dashboard
              </LinkButton>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-brand-secondary hover:text-brand-primary"
              >
                Log in
              </Link>
              <LinkButton href="/signup">Get started</LinkButton>
            </>
          )}
        </div>

        <MobileMenu isLoggedIn={Boolean(user)} />
      </Container>
    </header>
  );
}
