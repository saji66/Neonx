/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          violet:  '#8b5cf6',
          lavender:'#a78bfa',
          purple:  '#c084fc',
          magenta: '#c026d3',
          indigo:  '#6366f1',
        },
        dark: {
          900: '#040408',
          800: '#08080f',
          700: '#0d0d1a',
          600: '#121224',
          500: '#1a1a30',
        },
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #e879f9 100%)',
        'dark-gradient': 'linear-gradient(180deg, #040408 0%, #08080f 100%)',
      },
      animation: {
        'glow-pulse':  'glowPulse 2.5s ease-in-out infinite',
        'float':       'float 7s ease-in-out infinite',
        'scan-line':   'scanLine 5s linear infinite',
        'neon-flicker':'neonFlicker 4s ease-in-out infinite',
        'gradient-shift':'gradientShift 6s ease infinite',
        'orb-pulse':   'orbPulse 3s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow:'0 0 10px #8b5cf6, 0 0 20px #8b5cf6' },
          '50%':      { boxShadow:'0 0 24px #8b5cf6, 0 0 48px #8b5cf6, 0 0 90px #8b5cf6' },
        },
        float: {
          '0%, 100%': { transform:'translateY(0px)' },
          '50%':      { transform:'translateY(-22px)' },
        },
        scanLine: {
          '0%':   { transform:'translateY(-100%)' },
          '100%': { transform:'translateY(100vh)' },
        },
        neonFlicker: {
          '0%, 100%': { opacity:'1' },
          '92%':{ opacity:'1' }, '93%':{ opacity:'0.4' }, '94%':{ opacity:'1' },
          '96%':{ opacity:'0.65' }, '97%':{ opacity:'1' },
        },
        gradientShift: {
          '0%':   { backgroundPosition:'0% 50%' },
          '50%':  { backgroundPosition:'100% 50%' },
          '100%': { backgroundPosition:'0% 50%' },
        },
        orbPulse: {
          '0%, 100%': { opacity:'0.35', transform:'scale(1)' },
          '50%':      { opacity:'0.6',  transform:'scale(1.08)' },
        },
      },
      boxShadow: {
        'neon-violet': '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 40px #8b5cf6',
        'neon-purple': '0 0 10px #c084fc, 0 0 20px #c084fc, 0 0 40px #c084fc',
        'neon-magenta':'0 0 10px #c026d3, 0 0 20px #c026d3, 0 0 40px #c026d3',
        'glass':       '0 8px 32px 0 rgba(139,92,246,0.1)',
      },
    },
  },
  plugins: [],
};