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

  if (!url || !key || url === 'your_supabase_project_url' || url.startsWith('YOUR_')) {
    // Not configured yet — components will fall back to placeholder data
    return null;
  }

  try {
    _client = createClient(url, key);
    return _client;
  } catch {
    return null;
  }
}

// Convenience export — use getSupabase() anywhere you need the client
export const supabase = {
  from: (table: string) => {
    const client = getSupabase();
    if (!client) {
      // Return a no-op stub so components don't crash
      return {
        select: () => ({ order: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }) }),
        insert: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
      } as ReturnType<SupabaseClient['from']>;
    }
    return client.from(table);
  },
};
