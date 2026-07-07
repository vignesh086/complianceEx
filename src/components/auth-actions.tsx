import Link from "next/link";
import { LinkButton } from "@/components/button";
import { LogoutButton } from "@/components/logout-button";

/** Logged-in/logged-out nav actions, shared by the desktop nav and the mobile menu. */
export function AuthActions({
  isLoggedIn,
  variant,
  onNavigate,
}: {
  isLoggedIn: boolean;
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-2">
        {isLoggedIn ? (
          <>
            <LinkButton href="/dashboard" className="w-full" onClick={onNavigate}>
              Dashboard
            </LinkButton>
            <LogoutButton className="text-center" />
          </>
        ) : (
          <>
            <LinkButton href="/login" variant="secondary" className="w-full" onClick={onNavigate}>
              Log in
            </LinkButton>
            <LinkButton href="/signup" className="w-full" onClick={onNavigate}>
              Get started
            </LinkButton>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
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
  );
}
