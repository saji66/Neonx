'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight, viewportConfig } from '@/animations/motion';

const timeline = [
  { year:'2019', title:'Agency Founded',  desc:'Started as a two-person studio with a vision to redefine digital design.' },
  { year:'2020', title:'First 20 Clients',desc:'Delivered groundbreaking brand identities across tech and lifestyle sectors.' },
  { year:'2022', title:'Expanded Team',   desc:'Grew to a team of 10 specialists — designers, strategists, and animators.' },
  { year:'2024', title:'150+ Projects',   desc:'Crossed 150 successful project deliveries across 15 countries.' },
];

const skills = [
  { label:'UI/UX Design',   pct:95 },
  { label:'Brand Identity', pct:90 },
  { label:'Motion Design',  pct:80 },
  { label:'Packaging',      pct:85 },
  { label:'Web Design',     pct:88 },
];

const values = [
  { label:'Bold Vision',    desc:'We push creative boundaries every single project.' },
  { label:'Pixel Perfect',  desc:'Every detail matters — we obsess over quality.' },
  { label:'On Time',        desc:'Deadlines are sacred. We always deliver.' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
        style={{ background:'radial-gradient(ellipse at right, #8b5cf6, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="text-center mb-20">
          <motion.p variants={staggerItem} className="text-xs tracking-[0.45em] uppercase mb-4"
            style={{ color:'#8b5cf6', fontFamily:"'JetBrains Mono',monospace" }}>Our Story</motion.p>
          <motion.h2 variants={staggerItem} className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily:"'Syne',sans-serif" }}>
            About <span className="gradient-text">NeonX</span>
          </motion.h2>
        </motion.div>

        {/* Two-column */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left — mission + skills */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily:"'Syne',sans-serif" }}>
              We believe great design<br />
              <span className="neon-text">changes everything.</span>
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color:'rgba(240,230,255,0.45)' }}>
              NeonX was born from a simple obsession: make every brand look like it belongs to the future.
              We combine strategy, creativity, and technical excellence to deliver design that doesn&apos;t
              just look good — it performs.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color:'rgba(240,230,255,0.45)' }}>
              From early-stage startups to established companies, we partner with ambitious brands ready
              to make a lasting impression.
            </p>

            {/* Skills */}
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span style={{ color:'rgba(240,230,255,0.7)', fontFamily:"'Syne',sans-serif" }}>{skill.label}</span>
                    <span style={{ color:'#a78bfa', fontFamily:"'JetBrains Mono',monospace" }}>{skill.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ background:'rgba(240,230,255,0.06)' }}>
                    <motion.div className="h-full rounded-full"
                      style={{ background:'linear-gradient(90deg, #7c3aed, #c084fc)' }}
                      initial={{ width:0 }}
                      whileInView={{ width:`${skill.pct}%` }}
                      viewport={{ once:true }}
                      transition={{ duration:1.3, delay:i*0.1, ease:[0.22,1,0.36,1] }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — timeline */}
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background:'linear-gradient(to bottom, transparent, #8b5cf6, #c084fc, transparent)' }} />
            <div className="space-y-10">
              {timeline.map((step, i) => (
                <motion.div key={step.year} className="relative"
                  initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.15, duration:0.5 }}>
                  <div className="absolute -left-10 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor:'#8b5cf6', background:'#040408', boxShadow:'0 0 12px #8b5cf6' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background:'#8b5cf6' }} />
                  </div>
                  <p className="text-xs mb-1" style={{ color:'#a78bfa', fontFamily:"'JetBrains Mono',monospace" }}>
                    {step.year}
                  </p>
                  <h4 className="text-lg font-semibold mb-1.5"
                    style={{ fontFamily:"'Syne',sans-serif", color:'rgba(240,230,255,0.9)' }}>
                    {step.title}
                  </h4>
                  <p className="text-sm" style={{ color:'rgba(240,230,255,0.42)' }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <motion.div key={v.label} variants={staggerItem}
              className="glass-card p-7 text-center group hover:border-violet-500/30 transition-colors">
              <h4 className="text-lg font-semibold mb-2 group-hover:text-violet-300 transition-colors"
                style={{ fontFamily:"'Syne',sans-serif" }}>{v.label}</h4>
              <p className="text-sm" style={{ color:'rgba(240,230,255,0.42)' }}>{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}