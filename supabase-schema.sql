-- ============================================
-- NeonX Database Schema
-- Run this in your Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── Inquiries Table ─────────────────────────
CREATE TABLE IF NOT EXISTS inquiries (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  project_type TEXT NOT NULL,
  budget      TEXT,
  message     TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: allow anyone to insert (public form)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts on inquiries"
  ON inquiries FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read
CREATE POLICY "Allow auth users to read inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (true);

-- ─── Portfolio Table ─────────────────────────
CREATE TABLE IF NOT EXISTS portfolio (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title       TEXT NOT NULL,
  category    TEXT NOT NULL,
  image       TEXT NOT NULL,
  description TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: public can read portfolio
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read on portfolio"
  ON portfolio FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow auth users to manage portfolio"
  ON portfolio FOR ALL
  TO authenticated
  USING (true);

-- ─── Sample Portfolio Data ───────────────────
INSERT INTO portfolio (title, category, image, description) VALUES
  ('Neon Brand Identity',   'Brand Identity', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', 'Full brand identity system for a tech startup.'),
  ('Cyber UI Dashboard',    'UI/UX Design',   'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80', 'Admin dashboard with dark futuristic UI.'),
  ('Electric Poster Series','Posters',        'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=80', 'Concert poster series for underground events.'),
  ('Street Wear Logo',      'Logo Design',    'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80', 'Streetwear brand mark with bold typography.'),
  ('Social Media Kit',      'Social Media',   'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80', '30-day content kit for a lifestyle brand.'),
  ('Premium Packaging',     'Packaging',      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80', 'Luxury packaging design for skincare brand.');
