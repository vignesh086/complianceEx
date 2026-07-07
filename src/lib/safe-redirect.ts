/**
 * Restricts a user-supplied redirect target (query params, form fields) to a
 * same-origin relative path. Rejects absolute URLs, protocol-relative paths
 * ("//evil.com"), and the "@" userinfo trick that some URL parsers resolve
 * to a different host, so callers can safely hand the result to redirect()
 * or a manually-built Location header without an open-redirect risk.
 */
export function safeRedirectPath(path: string | null | undefined, fallback: string) {
  if (!path) return fallback;
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.includes("://") ||
    path.includes("\\") ||
    path.includes("@")
  ) {
    return fallback;
  }
  return path;
}
