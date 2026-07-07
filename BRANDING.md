# Brand tokens (placeholder)

This project ships with a placeholder brand — a blue/slate palette and system
fonts — so the site is fully designed and functional while the real Dealexus
brand identity assets are being gathered. Everything reads from a small set
of tokens, so re-skinning the site is a find-and-replace job, not a rebuild.

## Where the tokens live

`src/app/globals.css` defines every brand value as a CSS variable, exposed to
Tailwind via `@theme inline`:

| Token | Current placeholder | Used for |
| --- | --- | --- |
| `--brand-primary` | `#1d4ed8` (blue) | Primary buttons, links, active states |
| `--brand-primary-hover` | `#1e40af` | Hover state for primary actions |
| `--brand-secondary` | `#0f172a` (near-black) | Headings, dark sections |
| `--brand-accent` | `#0ea5a4` (teal) | Success states, highlights |
| `--brand-muted` | `#64748b` | Body copy, secondary text |
| `--brand-surface` | `#f8fafc` | Section backgrounds, cards |
| `--brand-border` | `#e2e8f0` | Borders, dividers |
| `--font-heading` / `--font-body` | Geist (system) | Headings / body text |
| `--radius-card` | `0.75rem` | Corner radius for cards, buttons, inputs |

Tailwind utility classes like `bg-brand-primary`, `text-brand-secondary`, and
`border-brand-border` are generated from these tokens throughout the
codebase — there are no hard-coded hex values in component files.

## Swapping in the Dealexus identity

1. **Colors** — replace the hex values in the `:root` block of
   `src/app/globals.css` with the Dealexus palette. Keep the same variable
   names so every component picks them up automatically.
2. **Fonts** — swap the `Geist`/`Geist_Mono` imports in `src/app/layout.tsx`
   for the Dealexus typeface (via `next/font/google` or `next/font/local` for
   a licensed font), and point `--font-heading`/`--font-body` at the new
   font variables.
3. **Logo** — replace the placeholder wordmark in `src/components/logo.tsx`
   with the real Dealexus mark (SVG recommended, drop it in `public/` and
   render it with `next/image` or inline SVG).
4. **Radius / spacing** — if Dealexus uses sharper or more rounded corners,
   adjust `--radius-card`.
5. **Favicon / OG image** — replace `src/app/favicon.ico` and add an
   `opengraph-image` per the [Next.js metadata file conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image).

No component, page, or Tailwind class needs to change — only the token
values and the logo asset.
