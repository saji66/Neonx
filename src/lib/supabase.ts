import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// ── Types ──────────────────────────────────────────────
export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  project_type: string;
  budget: string;
  message: string;
  created_at?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  created_at: string;
}

// ── Lazy client — only created when env vars are present ──
let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (_client) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (
    !url || !key ||
    url.includes('placeholder') ||
    url === 'your_supabase_project_url' ||
    url.startsWith('YOUR_')
  ) {
    return null;
  }

  try {
    _client = createClient(url, key);
    return _client;
  } catch {
    return null;
  }
}

// ── Safe wrapper — returns null if Supabase not configured ──
export const supabase = {
  from: (table: string) => getSupabase()?.from(table) ?? null,
};