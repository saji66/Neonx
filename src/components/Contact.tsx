'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, MapPin, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight, viewportConfig } from '@/animations/motion';

const PROJECT_TYPES = ['UI/UX Design','Logo Design','Brand Identity','Packaging','Social Media','Poster Design','Other'];
const BUDGETS       = ['Under $500','$500 – $1,000','$1,000 – $5,000','$5,000+',"Let's Discuss"];

const INITIAL = { name:'', email:'', project_type:'', budget:'', message:'' };

const contactInfo = [
  { icon:Mail,  label:'Email',    value:'optimasprime6666@gmail.com' },
  { icon:Clock, label:'Response', value:'Within 24 hours' },
  { icon:MapPin,label:'Location', value:'Remote — Worldwide' },
];

export default function Contact() {
  const [form,    setForm]    = useState({ ...INITIAL });
  const [loading, setLoading] = useState(false);
  const [errors,  setErrors]  = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())    e.name = 'Name is required';
    if (!form.email.trim())   e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.project_type)   e.project_type = 'Select a project type';
    if (!form.message.trim()) e.message = 'Tell us about your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      toast.success("Message sent! We'll be in touch within 24 hours.");
      setForm({ ...INITIAL }); setErrors({});
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value })),
  });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
        style={{ background:'radial-gradient(ellipse at left, #8b5cf6, transparent 70%)' }} />
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-[0.04] pointer-events-none"
        style={{ background:'radial-gradient(ellipse at right, #c026d3, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="text-center mb-20">
          <motion.p variants={staggerItem} className="text-xs tracking-[0.45em] uppercase mb-4"
            style={{ color:'#8b5cf6', fontFamily:"'JetBrains Mono',monospace" }}>Get In Touch</motion.p>
          <motion.h2 variants={staggerItem} className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily:"'Syne',sans-serif" }}>
            Start a <span className="gradient-text">Project</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 text-base max-w-lg mx-auto"
            style={{ color:'rgba(240,230,255,0.38)' }}>
            Ready to build something extraordinary? Tell us what you have in mind.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info panel */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="lg:col-span-2 flex flex-col gap-6">

            {contactInfo.map(({ icon:Icon, label, value }) => (
              <div key={label} className="glass-card p-5 flex items-center gap-4 group hover:border-violet-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background:'rgba(139,92,246,0.12)', border:'1px solid rgba(139,92,246,0.25)' }}>
                  <Icon size={18} style={{ color:'#a78bfa' }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-0.5"
                    style={{ color:'rgba(240,230,255,0.35)', fontFamily:"'JetBrains Mono',monospace" }}>{label}</p>
                  <p className="text-sm font-medium" style={{ color:'rgba(240,230,255,0.85)', fontFamily:"'Syne',sans-serif" }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}

            <div className="glass-card p-6 mt-2"
              style={{ background:'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(192,38,211,0.06))' }}>
              <MessageSquare size={20} style={{ color:'#a78bfa', marginBottom:'12px' }} />
              <p className="text-sm font-semibold mb-1" style={{ fontFamily:"'Syne',sans-serif", color:'rgba(240,230,255,0.9)' }}>
                Free Consultation
              </p>
              <p className="text-xs leading-relaxed" style={{ color:'rgba(240,230,255,0.42)' }}>
                Not sure where to start? We offer a free 30-minute strategy call to discuss your goals.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="lg:col-span-3 glass-card p-8">
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color:'rgba(240,230,255,0.4)', fontFamily:"'Syne',sans-serif" }}>Name *</label>
                  <input className="input-neon" placeholder="Your name" {...field('name')} />
                  {errors.name && <p className="text-xs mt-1" style={{ color:'#e879f9' }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color:'rgba(240,230,255,0.4)', fontFamily:"'Syne',sans-serif" }}>Email *</label>
                  <input className="input-neon" placeholder="you@email.com" type="email" {...field('email')} />
                  {errors.email && <p className="text-xs mt-1" style={{ color:'#e879f9' }}>{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color:'rgba(240,230,255,0.4)', fontFamily:"'Syne',sans-serif" }}>Project Type *</label>
                  <select className="input-neon" {...field('project_type')}>
                    <option value="">Select a type</option>
                    {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.project_type && <p className="text-xs mt-1" style={{ color:'#e879f9' }}>{errors.project_type}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color:'rgba(240,230,255,0.4)', fontFamily:"'Syne',sans-serif" }}>Budget</label>
                  <select className="input-neon" {...field('budget')}>
                    <option value="">Select budget</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2"
                  style={{ color:'rgba(240,230,255,0.4)', fontFamily:"'Syne',sans-serif" }}>Message *</label>
                <textarea className="input-neon resize-none" rows={5}
                  placeholder="Describe your project, goals, and timeline..." {...field('message')} />
                {errors.message && <p className="text-xs mt-1" style={{ color:'#e879f9' }}>{errors.message}</p>}
              </div>

              <button
                onClick={handleSubmit} disabled={loading}
                className="btn-neon-solid w-full flex items-center justify-center gap-2 py-4"
                style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    style={{ animation:'spin 0.8s linear infinite' }} />
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}