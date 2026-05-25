'use client';

import { useEffect, useRef } from 'react';

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail  = trailRef.current;
    if (!cursor || !trail) return;

    let tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      tx = e.clientX; ty = e.clientY;
    };
    let animId: number;
    let cx = 0, cy = 0;
    const lerp = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      trail.style.left = cx + 'px';
      trail.style.top  = cy + 'px';
      animId = requestAnimationFrame(lerp);
    };
    lerp();
    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(animId); };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={trailRef}  className="cursor-trail" />
    </>
  );
}