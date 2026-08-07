-- Communication / marketing consent log for Meta auditability
create table if not exists public.communication_opt_ins (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  contact_name text not null,
  company_name text,
  email text not null,
  phone text,
  opt_in_email boolean not null default false,
  opt_in_whatsapp boolean not null default false,
  consent_text_email text,
  consent_text_whatsapp text,
  consent_version text,
  source text not null default 'website-contact',
  page_url text,
  user_agent text,
  message text
);

comment on table public.communication_opt_ins is
  'Website contact submissions and marketing opt-in proof (email / WhatsApp).';

alter table public.communication_opt_ins enable row level security;

-- Public site can insert consent records; cannot read or modify them.
create policy "Allow anon insert communication_opt_ins"
  on public.communication_opt_ins
  for insert
  to anon
  with check (true);

-- Authenticated users also get insert (optional; dashboard uses service role).
create policy "Allow authenticated insert communication_opt_ins"
  on public.communication_opt_ins
  for insert
  to authenticated
  with check (true);
