'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { staggerContainer, staggerItem, viewportConfig } from '@/animations/motion';
import { supabase, type PortfolioItem } from '@/lib/supabase';

const PLACEHOLDER_ITEMS: PortfolioItem[] = [
  { id:'1', title:'Neon Brand Identity',  category:'Brand Identity', image:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', description:'Full brand identity system for a tech startup.', created_at:'' },
  { id:'2', title:'Cyber UI Dashboard',   category:'UI/UX Design',   image:'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80', description:'Admin dashboard with dark futuristic UI.',      created_at:'' },
  { id:'3', title:'Electric Poster Series',category:'Posters',        image:'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=80', description:'Concert poster series for underground events.',  created_at:'' },
  { id:'4', title:'Street Wear Logo',     category:'Logo Design',    image:'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80', description:'Streetwear brand mark with bold typography.',   created_at:'' },
  { id:'5', title:'Social Media Kit',     category:'Social Media',   image:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80', description:'30-day content kit for a lifestyle brand.',     created_at:'' },
  { id:'6', title:'Premium Packaging',    category:'Packaging',      image:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80', description:'Luxury packaging design for skincare brand.',    created_at:'' },
  { id:'7', title:'Mobile App Redesign',  category:'UI/UX Design',   image:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80', description:'Complete mobile app UI overhaul.',              created_at:'' },
  { id:'8', title:'Startup Brand Suite',  category:'Brand Identity', image:'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80', description:'Comprehensive brand system for SaaS startup.',  created_at:'' },
];

const CATEGORIES = ['All','UI/UX Design','Brand Identity','Logo Design','Posters','Social Media','Packaging'];

export default function Portfolio() {
  const [items,    setItems]    = useState<PortfolioItem[]>(PLACEHOLDER_ITEMS);
  const [filter,   setFilter]   = useState('All');
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase.from('portfolio').select('*').order('created_at',{ascending:false});
        if (!error && data && data.length > 0) setItems(data);
      } catch {}
    })();
  }, []);

  const filtered = filter === 'All' ? items : items.filter(i => i.category === filter);

  return (
    <>
      <section id="portfolio" className="section-padding relative">
        {/* top glow */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
          style={{ background:'radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="text-center mb-16">
            <motion.p variants={staggerItem} className="text-xs tracking-[0.45em] uppercase mb-4"
              style={{ color:'#8b5cf6', fontFamily:"'JetBrains Mono',monospace" }}>Our Work</motion.p>
            <motion.h2 variants={staggerItem} className="text-5xl md:text-6xl font-bold"
              style={{ fontFamily:"'Syne',sans-serif" }}>
              Selected <span className="gradient-text">Projects</span>
            </motion.h2>
          </motion.div>

          {/* Filter */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(cat => (
              <motion.button key={cat} variants={staggerItem} onClick={() => setFilter(cat)}
                className="px-4 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-300"
                style={{
                  fontFamily:"'Syne',sans-serif",
                  background: filter===cat ? 'linear-gradient(135deg,#7c3aed,#9333ea)' : 'rgba(240,230,255,0.04)',
                  color:      filter===cat ? '#fff'                                     : 'rgba(240,230,255,0.45)',
                  border:     filter===cat ? 'none'                                     : '1px solid rgba(139,92,246,0.12)',
                  boxShadow:  filter===cat ? '0 0 18px rgba(124,58,237,0.4)'            : 'none',
                }}>
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Masonry */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div key={item.id} layout
                  initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
                  exit={{ opacity:0, scale:0.9 }} transition={{ duration:0.4, delay:i*0.05 }}
                  className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
                  style={{ border:'1px solid rgba(139,92,246,0.08)' }}
                  onClick={() => setSelected(item)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title}
                    className="w-full block transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background:'linear-gradient(to top, rgba(4,4,8,0.96) 0%, transparent 60%)' }}>
                    <p className="text-xs tracking-widest uppercase mb-1"
                      style={{ color:'#a78bfa', fontFamily:"'JetBrains Mono',monospace" }}>{item.category}</p>
                    <h3 className="text-sm font-semibold text-white" style={{ fontFamily:"'Syne',sans-serif" }}>{item.title}</h3>
                  </div>
                  <div className="absolute inset-0 border border-violet-500/0 group-hover:border-violet-500/35 rounded-xl transition-all duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background:'rgba(0,0,0,0.88)', backdropFilter:'blur(12px)' }}
            onClick={() => setSelected(null)}>
            <motion.div initial={{ scale:0.85, opacity:0 }} animate={{ scale:1, opacity:1 }}
              exit={{ scale:0.85, opacity:0 }} transition={{ type:'spring', stiffness:300, damping:25 }}
              className="glass-card overflow-hidden max-w-2xl w-full" onClick={e => e.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selected.image} alt={selected.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <p className="text-xs tracking-widest uppercase mb-2"
                  style={{ color:'#a78bfa', fontFamily:"'JetBrains Mono',monospace" }}>{selected.category}</p>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily:"'Syne',sans-serif" }}>{selected.title}</h3>
                <p className="text-sm" style={{ color:'rgba(240,230,255,0.48)' }}>{selected.description}</p>
                <div className="mt-6 flex gap-3">
                  <button className="btn-neon-solid text-xs py-2 px-5 flex items-center gap-2">
                    <ExternalLink size={14} /> View Live
                  </button>
                  <button onClick={() => setSelected(null)} className="btn-neon text-xs py-2 px-5">Close</button>
                </div>
              </div>
            </motion.div>
            <button onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background:'rgba(139,92,246,0.1)', border:'1px solid rgba(139,92,246,0.3)' }}>
              <X size={18} className="text-violet-400" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}