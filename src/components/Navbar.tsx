'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'Services',  href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About',     href: '#about' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]   = useState(false);
  const [mobileOpen,  setMobileOpen] = useState(false);
  const [active,      setActive]     = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home','services','portfolio','about','contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace('#',''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background:    scrolled ? 'rgba(4,4,8,0.92)'   : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)'         : 'none',
          borderBottom:  scrolled ? '1px solid rgba(139,92,246,0.12)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick('#home')} className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                background: 'rgba(139,92,246,0.15)',
                border:     '1px solid rgba(139,92,246,0.45)',
                color:      '#a78bfa',
                fontFamily: "'Syne', sans-serif",
                textShadow: '0 0 12px #8b5cf6',
                boxShadow:  '0 0 12px rgba(139,92,246,0.2)',
              }}
            >
              NX
            </div>
            <span
              className="text-xl font-bold tracking-wide"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: 'linear-gradient(135deg, #f0e6ff 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              NeonX
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const id = link.href.replace('#','');
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color:      isActive ? '#a78bfa' : 'rgba(240,230,255,0.5)',
                      textShadow: isActive ? '0 0 12px #8b5cf6' : 'none',
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px"
                        style={{ background: '#8b5cf6', boxShadow: '0 0 8px #8b5cf6' }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden md:block btn-neon text-xs py-2 px-5"
          >
            Get a Quote
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            style={{ color: '#a78bfa' }}
          >
            {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-xl overflow-hidden"
            style={{
              background:     'rgba(8,8,15,0.97)',
              border:         '1px solid rgba(139,92,246,0.2)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <ul className="py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors duration-200 hover:text-violet-400"
                    style={{ fontFamily: "'Syne', sans-serif", color: 'rgba(240,230,255,0.65)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="px-6 pt-2 pb-2">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="btn-neon w-full text-xs py-3"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}