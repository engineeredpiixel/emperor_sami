-- ─── 1. LEADS TABLE ──────────────────────────────────────────────────────────
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  source text not null default 'unknown',
  full_name text,
  email text,
  phone text,
  project_location text,
  allocation_range text,
  service_scope text,
  consultation_date text,
  preferred_time text,
  message text,
  status text not null default 'new',
  notes text
);

-- RLS: public can insert, only authenticated users can read/update
alter table leads enable row level security;

create policy "Anyone can submit a lead"
  on leads for insert
  with check (true);

create policy "Admins can view leads"
  on leads for select
  using (auth.role() = 'authenticated');

create policy "Admins can update leads"
  on leads for update
  using (auth.role() = 'authenticated');

-- ─── 2. SUBSCRIBERS TABLE ─────────────────────────────────────────────────────
create table if not exists subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  email text unique not null,
  status text not null default 'active'
);

-- RLS: public can insert, only authenticated users can read
alter table subscribers enable row level security;

create policy "Anyone can subscribe"
  on subscribers for insert
  with check (true);

create policy "Admins can view subscribers"
  on subscribers for select
  using (auth.role() = 'authenticated');

create policy "Admins can update subscribers"
  on subscribers for update
  using (auth.role() = 'authenticated');
