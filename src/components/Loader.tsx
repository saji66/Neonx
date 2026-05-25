'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => { if (p >= 100) { clearInterval(interval); return 100; } return p + 3; });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-overlay">
      {/* Ambient orbs */}
      <div className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          filter:'blur(60px)', animation:'orbPulse 3s ease-in-out infinite' }} />

      <motion.div className="relative z-10 flex flex-col items-center gap-8"
        initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>

        {/* Logo mark */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black"
            style={{ fontFamily:"'Syne',sans-serif", background:'rgba(139,92,246,0.12)',
              border:'1px solid rgba(139,92,246,0.4)', color:'#a78bfa',
              textShadow:'0 0 20px #8b5cf6', boxShadow:'0 0 30px rgba(139,92,246,0.2)' }}>
            NX
          </div>
          {/* Spinning ring */}
          <div className="absolute -inset-2 rounded-2xl border border-violet-500/30 animate-spin"
            style={{ animationDuration:'3s', borderTopColor:'rgba(167,139,250,0.7)' }} />
        </div>

        <p className="text-xs tracking-[0.5em] uppercase"
          style={{ color:'rgba(240,230,255,0.4)', fontFamily:"'JetBrains Mono',monospace" }}>
          Loading experience
        </p>

        {/* Progress bar */}
        <div className="w-48 h-px relative" style={{ background:'rgba(139,92,246,0.15)' }}>
          <motion.div className="absolute top-0 left-0 h-full"
            style={{ background:'linear-gradient(90deg,#7c3aed,#c084fc)', boxShadow:'0 0 8px #8b5cf6' }}
            animate={{ width:`${progress}%` }} transition={{ ease:'linear' }} />
        </div>

        <p className="text-xs" style={{ color:'rgba(240,230,255,0.25)', fontFamily:"'JetBrains Mono',monospace" }}>
          {progress}%
        </p>
      </motion.div>
    </div>
  );
}