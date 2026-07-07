-- ComplianceX schema
-- Run this in the Supabase SQL editor (or via the CLI) on a fresh project.

-- Profile row created for every authenticated user.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  company text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Creates a profile row automatically when a user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data ->> 'full_name');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Contact form submissions from the public marketing site.
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Anyone (including anonymous visitors) can submit the contact form.
create policy "Anyone can submit a contact request"
  on public.contact_submissions for insert
  to anon, authenticated
  with check (true);

-- Only authenticated staff can read submissions. Tighten this to a
-- specific role/claim before shipping to production.
create policy "Authenticated users can read contact submissions"
  on public.contact_submissions for select
  to authenticated
  using (true);

-- Example compliance items shown on the dashboard demo.
create table if not exists public.compliance_items (
  id uuid primary key default gen_random_uuid(),
  owner uuid not null references auth.users (id) on delete cascade,
  title text not null,
  status text not null default 'pending' check (status in ('pending', 'in_review', 'complete')),
  due_date date,
  created_at timestamptz not null default now()
);

alter table public.compliance_items enable row level security;

create policy "Users manage their own compliance items"
  on public.compliance_items for all
  using (auth.uid() = owner)
  with check (auth.uid() = owner);
