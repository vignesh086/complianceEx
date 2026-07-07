# Argus

A responsive compliance management site (policy management, risk
assessments, regulatory monitoring, audits, training) built with Next.js and
Supabase.

The site currently uses a **placeholder brand identity** — see
[`BRANDING.md`](./BRANDING.md) for how to swap in the real Dealexus brand
assets once available.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- [Supabase](https://supabase.com) for auth, database, and row-level security

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a Supabase project, then copy `.env.example` to `.env.local` and
   fill in your project URL and anon key:

   ```bash
   cp .env.example .env.local
   ```

3. Run `supabase/schema.sql` in the Supabase SQL editor (or via the CLI) to
   create the `profiles`, `contact_submissions`, and `compliance_items`
   tables with row-level security policies.

4. In Supabase Auth settings, add `http://localhost:3000/auth/callback` (and
   your production URL equivalent) to the redirect allow list.

5. Start the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## What's wired up

- **Marketing pages**: Home, Solutions, Pricing, About, Contact
- **Auth**: email/password sign up (with email confirmation), log in, log
  out, session refresh via `proxy.ts`, protected `/dashboard` route
- **Database**: the contact form writes to `contact_submissions`; the
  dashboard reads/writes `compliance_items` scoped to the signed-in user via
  RLS
- **Responsive layout**: mobile nav menu, responsive grids throughout

## Project structure

```
src/
  app/            Routes (App Router)
  components/     Shared UI (nav, footer, buttons, cards)
  lib/supabase/   Browser/server Supabase clients + session-refresh proxy
  proxy.ts        Next.js 16 proxy (formerly middleware) for session refresh
supabase/
  schema.sql      Database schema and RLS policies
```

## Deploying

Any Next.js host works (e.g. Vercel). Set the environment variables from
`.env.example` in your hosting provider, and update the Supabase Auth
redirect URL allow list to match your production domain.
