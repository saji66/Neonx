# NeonX — Creative Design Agency Website

A futuristic cyberpunk-themed creative agency website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase**.

---

## ⚡ Quick Start (VSCode)

### 1. Clone / Open the project

```bash
cd neonx
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 4. Set up the database

1. Go to [supabase.com](https://supabase.com) → New Project
2. Open **SQL Editor**
3. Paste and run the contents of `supabase-schema.sql`

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure

```
neonx/
├── src/
│   ├── app/
│   │   ├── page.tsx            # Home page
│   │   ├── layout.tsx          # Root layout + metadata
│   │   ├── globals.css         # Global styles, neon effects, animations
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Contact form API route
│   ├── components/
│   │   ├── Loader.tsx          # 3s loading screen
│   │   ├── CursorEffect.tsx    # Custom animated cursor
│   │   ├── Navbar.tsx          # Sticky navbar with scroll detection
│   │   ├── Hero.tsx            # Hero with particle canvas
│   │   ├── Services.tsx        # Services grid with hover effects
│   │   ├── Portfolio.tsx       # Masonry grid + category filter + modal
│   │   ├── About.tsx           # Timeline + skills + values
│   │   ├── Contact.tsx         # Contact form with validation
│   │   └── Footer.tsx          # Footer with social links
│   ├── animations/
│   │   └── motion.ts           # Framer Motion variants
│   └── lib/
│       ├── supabase.ts         # Supabase client + types
│       └── utils.ts            # cn() utility
├── supabase-schema.sql         # Database schema
├── .env.local.example          # Environment template
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## 🎨 Features

| Feature | Status |
|---|---|
| Loading screen (3s neon animation) | ✅ |
| Custom animated cursor | ✅ |
| Sticky glassmorphism navbar | ✅ |
| Hero with particle canvas | ✅ |
| Services with hover glow | ✅ |
| Portfolio masonry + filter + modal | ✅ |
| About with timeline + skill bars | ✅ |
| Contact form + validation + toast | ✅ |
| Supabase integration | ✅ |
| Responsive (mobile-first) | ✅ |
| SEO metadata | ✅ |
| Scroll reveal animations | ✅ |

---

## 🚀 Deploy to Vercel

### Option A: CLI

```bash
npm i -g vercel
vercel --prod
```

### Option B: Dashboard

1. Push to GitHub: `git init && git add . && git commit -m "init" && git push`
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Select your repo
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Click **Deploy** 🚀

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Toasts**: React Hot Toast
- **Deployment**: Vercel

---

## 📝 Customization Checklist

- [ ] Update agency name and tagline in `Hero.tsx`
- [ ] Replace stats (150+ projects, etc.) with real numbers
- [ ] Add real portfolio images in Supabase `portfolio` table
- [ ] Update contact email in `Footer.tsx`
- [ ] Add social media links in `Footer.tsx`
- [ ] Configure custom domain in Vercel

---

## 🎨 Theme

| Variable | Color |
|---|---|
| Primary (Neon Pink) | `#ff008c` |
| Secondary (Neon Cyan) | `#00f5ff` |
| Accent (Neon Purple) | `#9d00ff` |
| Background | `#050505` |
| Card | `#111111` |
