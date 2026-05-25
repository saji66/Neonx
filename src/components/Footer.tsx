'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone } from 'lucide-react';

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/neon_x_digital',
    color: '#E1306C',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sajith-s-13a0752a5?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    color: '#0A66C2',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919087387656',
    color: '#25D366',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:optimasprime6666@gmail.com',
    color: '#a78bfa',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const links = [
  { label: 'Services',  href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About',     href: '#about' },
  { label: 'Contact',   href: '#contact' },
];

const contact = [
  { icon: Mail,  label: 'optimasprime6666@gmail.com', href: 'mailto:optimasprime6666@gmail.com' },
  { icon: Phone, label: '+91 90873 87656',             href: 'tel:+919087387656' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-20 pb-10" style={{ borderTop: '1px solid rgba(139,92,246,0.1)' }}>
      {/* Bottom glow */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[220px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center bottom, rgba(139,92,246,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* ── Brand ─────────────────────────────── */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'rgba(139,92,246,0.15)',
                  border: '1px solid rgba(139,92,246,0.4)',
                  color: '#a78bfa',
                  fontFamily: "'Syne',sans-serif",
                  textShadow: '0 0 12px #8b5cf6',
                  boxShadow: '0 0 14px rgba(139,92,246,0.18)',
                }}
              >
                NX
              </div>
              <span
                className="text-xl font-bold"
                style={{
                  fontFamily: "'Syne',sans-serif",
                  background: 'linear-gradient(135deg, #f0e6ff 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                NeonX
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(240,230,255,0.38)' }}>
              Creative design agency crafting bold digital experiences for ambitious brands worldwide.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              {contact.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 text-xs transition-colors hover:text-violet-400 group"
                  style={{ color: 'rgba(240,230,255,0.38)', fontFamily: "'JetBrains Mono',monospace" }}
                >
                  <Icon size={12} className="flex-shrink-0 group-hover:text-violet-400 transition-colors" style={{ color: '#8b5cf6' }} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ────────────────────────── */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-5"
              style={{ color: 'rgba(240,230,255,0.3)', fontFamily: "'JetBrains Mono',monospace" }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-all duration-200 hover:text-violet-400 hover:translate-x-1 inline-block"
                    style={{ color: 'rgba(240,230,255,0.45)', fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ──────────────────────────── */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-5"
              style={{ color: 'rgba(240,230,255,0.3)', fontFamily: "'JetBrains Mono',monospace" }}
            >
              Services
            </p>
            <ul className="space-y-3">
              {['UI/UX Design', 'Brand Identity', 'Logo Design', 'Social Media', 'Packaging'].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-all duration-200 hover:text-violet-400 hover:translate-x-1 inline-block"
                    style={{ color: 'rgba(240,230,255,0.45)', fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Follow Us ─────────────────────────── */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-5"
              style={{ color: 'rgba(240,230,255,0.3)', fontFamily: "'JetBrains Mono',monospace" }}
            >
              Follow Us
            </p>
            <div className="flex flex-col gap-3">
              {socials.map(({ label, href, color, svg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex items-center gap-3 group"
                >
                  {/* Icon box */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(240,230,255,0.04)',
                      border: '1px solid rgba(139,92,246,0.12)',
                      color: 'rgba(240,230,255,0.45)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = color + '66';
                      el.style.color = color;
                      el.style.background = color + '18';
                      el.style.boxShadow = `0 0 14px ${color}44`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(139,92,246,0.12)';
                      el.style.color = 'rgba(240,230,255,0.45)';
                      el.style.background = 'rgba(240,230,255,0.04)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    {svg}
                  </div>
                  {/* Label */}
                  <span
                    className="text-sm transition-colors duration-200 group-hover:text-white"
                    style={{ color: 'rgba(240,230,255,0.42)', fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {label === 'Instagram' ? '@neon_x_digital' : label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(240,230,255,0.05)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'rgba(240,230,255,0.25)', fontFamily: "'JetBrains Mono',monospace" }}
          >
            © {new Date().getFullYear()} NeonX Studio · Crafted with{' '}
            <span style={{ color: '#8b5cf6' }}>♥</span> by Sajith
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.3)',
              color: '#a78bfa',
              boxShadow: '0 0 12px rgba(139,92,246,0.15)',
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}