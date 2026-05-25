'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/animations/motion';

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    type P = { x:number;y:number;vx:number;vy:number;size:number;opacity:number;color:string };
    const colors = ['#8b5cf6','#a78bfa','#c084fc','#e879f9','#6366f1'];
    const particles: P[] = Array.from({ length: 90 }, () => ({
      x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight,
      vx: (Math.random()-0.5)*0.35, vy: (Math.random()-0.5)*0.35,
      size: Math.random()*1.8+0.4, opacity: Math.random()*0.55+0.1,
      color: colors[Math.floor(Math.random()*colors.length)],
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach((p,i) => {
        particles.slice(i+1).forEach(p2 => {
          const dx=p.x-p2.x, dy=p.y-p2.y, dist=Math.sqrt(dx*dx+dy*dy);
          if (dist < 130) {
            ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(p2.x,p2.y);
            ctx.strokeStyle=`rgba(139,92,246,${0.07*(1-dist/130)})`; ctx.lineWidth=0.5; ctx.stroke();
          }
        });
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>canvas.width)p.vx*=-1;
        if(p.y<0||p.y>canvas.height)p.vy*=-1;
        ctx.globalAlpha=p.opacity; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle=p.color; ctx.fill(); ctx.globalAlpha=1;
      });
      animId=requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize',resize); };
  },[]);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{opacity:0.55}} />;
}

function FloatingOrb({ color, size, x, y, delay }:{ color:string;size:number;x:string;y:string;delay:number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ width:size, height:size, left:x, top:y,
        background:`radial-gradient(circle, ${color}44 0%, transparent 70%)`,
        filter:`blur(${size/2.8}px)` }}
      animate={{ y:[0,-28,0], opacity:[0.35,0.65,0.35], scale:[1,1.08,1] }}
      transition={{ duration:7, repeat:Infinity, ease:'easeInOut', delay }}
    />
  );
}

const stats = [
  { value:'150+', label:'Projects Done' },
  { value:'80+',  label:'Happy Clients' },
  { value:'5+',   label:'Years Active' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <ParticleCanvas />

      {/* Orbs */}
      <FloatingOrb color="#8b5cf6" size={500} x="-8%"  y="5%"  delay={0} />
      <FloatingOrb color="#c026d3" size={320} x="72%"  y="55%" delay={2.5} />
      <FloatingOrb color="#6366f1" size={250} x="82%"  y="2%"  delay={4.5} />
      <FloatingOrb color="#a78bfa" size={200} x="40%"  y="80%" delay={1.5} />

      {/* Scan line */}
      <div className="absolute left-0 w-full h-px pointer-events-none"
        style={{ background:'linear-gradient(90deg,transparent,rgba(139,92,246,0.45),transparent)', animation:'scanLine 10s linear infinite' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-7 text-center">

          {/* Badge */}
          <motion.div variants={staggerItem}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest uppercase"
            style={{ background:'rgba(139,92,246,0.1)', border:'1px solid rgba(139,92,246,0.3)',
              fontFamily:"'JetBrains Mono',monospace", color:'#a78bfa' }}>
            <Sparkles size={12} className="animate-pulse" />
            Award-winning Creative Studio
          </motion.div>

          {/* Headline */}
          <motion.div variants={staggerItem} className="flex flex-col items-center gap-2">
            <h1 className="text-7xl md:text-8xl lg:text-[108px] font-extrabold leading-none tracking-tight"
              style={{ fontFamily:"'Syne',sans-serif" }}>
              <span className="block" style={{ color:'rgba(240,230,255,0.95)' }}>We Design</span>
              <span className="block gradient-text" style={{ animation:'neonFlicker 5s ease-in-out infinite' }}>
                The Future
              </span>
            </h1>
            {/* Decorative line */}
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px w-16" style={{ background:'rgba(139,92,246,0.35)' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background:'#8b5cf6', boxShadow:'0 0 8px #8b5cf6' }} />
              <div className="h-px w-16" style={{ background:'rgba(139,92,246,0.35)' }} />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={staggerItem}
            className="text-lg md:text-xl max-w-xl leading-relaxed"
            style={{ color:'rgba(240,230,255,0.45)', fontFamily:"'DM Sans',sans-serif" }}>
            NeonX is a creative design agency that builds bold digital identities —
            UI/UX, branding, packaging, and everything in between.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 pt-1">
            <button className="btn-neon-solid text-sm flex items-center gap-2"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'})}>
              View Our Work <ArrowRight size={15} />
            </button>
            <button className="btn-neon text-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              Start a Project
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={staggerItem}
            className="flex flex-wrap justify-center gap-12 pt-12 mt-2 w-full max-w-lg"
            style={{ borderTop:'1px solid rgba(139,92,246,0.1)' }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-extrabold neon-text" style={{ fontFamily:"'Syne',sans-serif" }}>
                  {s.value}
                </p>
                <p className="text-xs tracking-widest uppercase mt-1"
                  style={{ color:'rgba(240,230,255,0.35)', fontFamily:"'JetBrains Mono',monospace" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y:[0,8,0] }} transition={{ duration:1.6, repeat:Infinity, ease:'easeInOut' }}>
        <div className="w-5 h-8 rounded-full border flex items-start justify-center p-1"
          style={{ borderColor:'rgba(139,92,246,0.4)' }}>
          <motion.div className="w-1 h-2 rounded-full" style={{ background:'#8b5cf6' }}
            animate={{ y:[0,12,0] }} transition={{ duration:1.6, repeat:Infinity }} />
        </div>
        <p className="text-xs tracking-widest uppercase"
          style={{ color:'rgba(240,230,255,0.3)', fontFamily:"'JetBrains Mono',monospace" }}>Scroll</p>
      </motion.div>
    </section>
  );
}