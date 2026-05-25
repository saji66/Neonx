'use client';

import { motion } from 'framer-motion';
import { Layers, PenTool, Image, Share2, Box, Sparkles } from 'lucide-react';
import { staggerContainer, staggerItem, viewportConfig } from '@/animations/motion';

const services = [
  { icon: Layers,   title:'UI/UX Design',    desc:'Human-centred interfaces that convert. From wireframe to pixel-perfect handoff.',      color:'#8b5cf6', tag:'01' },
  { icon: PenTool,  title:'Logo Design',     desc:'Iconic marks that tell your story. Timeless, versatile, and unmistakably yours.',       color:'#c084fc', tag:'02' },
  { icon: Image,    title:'Poster Design',   desc:'Bold visual communication that stops the scroll and demands attention.',                  color:'#e879f9', tag:'03' },
  { icon: Share2,   title:'Social Media',    desc:'Scroll-stopping content that builds communities and drives engagement.',                  color:'#8b5cf6', tag:'04' },
  { icon: Sparkles, title:'Brand Identity',  desc:'Complete brand systems — strategy, visual language, and guidelines.',                    color:'#c084fc', tag:'05' },
  { icon: Box,      title:'Packaging Design',desc:'Shelf presence that sells. Premium packaging that consumers remember.',                  color:'#e879f9', tag:'06' },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background:'radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="text-center mb-20">
          <motion.p variants={staggerItem} className="text-xs tracking-[0.45em] uppercase mb-4"
            style={{ color:'#8b5cf6', fontFamily:"'JetBrains Mono',monospace" }}>
            What We Do
          </motion.p>
          <motion.h2 variants={staggerItem} className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily:"'Syne',sans-serif" }}>
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 text-base max-w-lg mx-auto"
            style={{ color:'rgba(240,230,255,0.38)' }}>
            From concept to launch — every visual touchpoint, handled.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <motion.div key={svc.title} variants={staggerItem}
              whileHover={{ y:-6, transition:{duration:0.3} }}
              className="glass-card p-8 group relative overflow-hidden cursor-default">

              {/* Number tag */}
              <span className="absolute top-6 right-6 text-xs font-mono opacity-15 group-hover:opacity-50 transition-opacity"
                style={{ color:svc.color, fontFamily:"'JetBrains Mono',monospace" }}>{svc.tag}</span>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background:`radial-gradient(circle at 50% 0%, ${svc.color}15, transparent 65%)` }} />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background:`${svc.color}12`, border:`1px solid ${svc.color}28` }}>
                <svc.icon size={24} style={{ color:svc.color, filter:`drop-shadow(0 0 8px ${svc.color})` }} />
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily:"'Syne',sans-serif", color:'rgba(240,230,255,0.9)' }}>{svc.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color:'rgba(240,230,255,0.4)' }}>{svc.desc}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background:`linear-gradient(90deg, ${svc.color}, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}