import Link from "next/link";
import { getSafeUser } from "@/lib/supabase/auth";
import { navLinks } from "@/lib/nav-links";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { AuthActions } from "@/components/auth-actions";
import { MobileMenu } from "@/components/mobile-menu";

export async function Navbar() {
  const user = await getSafeUser();

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

        <div className="hidden sm:flex sm:items-center">
          <AuthActions isLoggedIn={Boolean(user)} variant="desktop" />
        </div>

        <MobileMenu isLoggedIn={Boolean(user)} />
      </Container>
    </header>
  );
}
