"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Interpolation Engine State
  const [targetCircle, setTargetCircle] = useState({ x: -1000, y: -1000, radius: 0, opacity: 0 });
  const currentCircle = useRef({ x: -1000, y: -1000, radius: 0, opacity: 0 });
  const frameRef = useRef<number | null>(null);

  // Magnetic Button State
  const magneticRef = useRef<HTMLDivElement>(null);

  // Global Page Visibility trigger (staggered load)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  // 60FPS Hardware Accelerated Geometric Lerp Engine
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      // Butter-smooth interpolation towards target cursor mapping
      currentCircle.current.x = lerp(currentCircle.current.x, targetCircle.x, 0.12);
      currentCircle.current.y = lerp(currentCircle.current.y, targetCircle.y, 0.12);
      currentCircle.current.radius = lerp(currentCircle.current.radius, targetCircle.radius, 0.08);
      currentCircle.current.opacity = lerp(currentCircle.current.opacity, targetCircle.opacity, 0.1);

      if (heroRef.current) {
        heroRef.current.style.setProperty('--lens-x', `${currentCircle.current.x}px`);
        heroRef.current.style.setProperty('--lens-y', `${currentCircle.current.y}px`);
        heroRef.current.style.setProperty('--lens-r', `${currentCircle.current.radius}px`);
        heroRef.current.style.setProperty('--lens-o', `${currentCircle.current.opacity}`);
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); }
  }, [targetCircle]);

  // Pointer & Touch Handlers for Canvas Lens
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!heroRef.current || e.pointerType === 'touch') return; // Touch events handle mobile natively
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTargetCircle(prev => ({
      x,
      y,
      opacity: 1,
      // If we are currently "expanded" to 2500, keep it. Else, standard lens.
      radius: prev.radius > 1000 ? 2500 : 450
    }));
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return;
    setTargetCircle(prev => ({ ...prev, opacity: 0, radius: 0 }));
  };

  // Mobile Physical Touch Drivers
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!heroRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = heroRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    setTargetCircle(prev => ({
      x,
      y,
      opacity: 1,
      radius: prev.radius > 1000 ? 2500 : 350 // Precision radius for phone displays
    }));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleTouchMove(e); // Ignite the lens immediately exactly where they tap
  };

  const handleTouchEnd = () => {
    setTargetCircle(prev => ({ ...prev, opacity: 0, radius: 0 }));
  };

  // Hover triggers for the enormous Reality sweep
  const hoverExpand = () => setTargetCircle(prev => ({ ...prev, radius: 3000 }));
  const unhoverExpand = () => setTargetCircle(prev => ({ ...prev, radius: 450 }));

  // Magnetic Friction Button Logics (No React State Re-renders)
  const handleMagneticMove = (e: React.PointerEvent) => {
    if (!magneticRef.current) return;
    const rect = magneticRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    magneticRef.current.style.setProperty('--mag-x', `${x}px`);
    magneticRef.current.style.setProperty('--mag-y', `${y}px`);
  };
  const handleMagneticLeave = () => {
    if (magneticRef.current) {
      magneticRef.current.style.setProperty('--mag-x', '0px');
      magneticRef.current.style.setProperty('--mag-y', '0px');
    }
  };

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`relative w-full min-h-[100svh] overflow-hidden -mt-20 pt-20 flex flex-col justify-center pb-0 bg-[#050505] cursor-crosshair transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        // Define default CSS vars to prevent hydration errors before loop starts
        '--lens-x': '-1000px',
        '--lens-y': '-1000px',
        '--lens-r': '0px',
        '--lens-o': '0'
      } as React.CSSProperties}
    >

      {/* ── LAYER 1: The Ambient Blueprint Architecture (Base Layer) ── */}
      <div className="absolute inset-0 z-0 bg-[#020202]">
        <Image
          src="/blueprint_bg_1774895613394.png"
          alt="Emperor Sami Group architectural blueprint"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.7] sepia-[0.3] hue-rotate-[180deg] saturate-50 opacity-60 mix-blend-screen transition-transform duration-[10s] scale-105"
          priority
        />
        {/* Cinematic Grid Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none" />
      </div>

      {/* ── LAYER 2: The Reality Revelation Mask (The Flashlight/Lens) ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
        style={{
          WebkitMaskImage: `radial-gradient(circle at var(--lens-x) var(--lens-y), black 0%, transparent var(--lens-r))`,
          maskImage: `radial-gradient(circle at var(--lens-x) var(--lens-y), black 0%, transparent var(--lens-r))`,
          opacity: `var(--lens-o)`
        }}
      >
        <Image
          src="/custom_home_exterior_1774895595441.png"
          alt="Revealed Luxury Masterpiece"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.8] contrast-[1.1] saturate-[1.1]"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ── LAYER 3: Interactive Typography & Structural UI ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center min-h-[85svh] pointer-events-none pt-[10svh] pb-[200px] sm:pb-[150px]">

        {/* Floating Architect Line */}
        <div className={`flex items-center gap-4 mb-4 sm:mb-8 transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-white to-transparent opacity-60" />
          <span className="text-white/80 text-[9px] sm:text-[11px] font-bold tracking-[0.4em] uppercase">
            From Blueprint to Reality
          </span>
        </div>

        {/* Monumental Headline */}
        <h1 className="text-white text-[3rem] sm:text-6xl md:text-[5rem] lg:text-[6.5rem] leading-[1.0] sm:leading-[0.95] font-black tracking-tighter sm:tracking-[-0.04em] mb-10 mix-blend-difference drop-shadow-2xl max-w-[900px]">
          <div className="overflow-hidden pb-1 sm:pb-2">
            <div className={`transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] delay-[400ms] ${visible ? "translate-y-0" : "translate-y-[120%]"}`}>
              Masterful Design.
            </div>
          </div>
          <div className="overflow-hidden pb-1 sm:pb-4">
            <div className={`transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] delay-[550ms] ${visible ? "translate-y-0" : "translate-y-[120%]"}`}>
              Built to Last.
            </div>
          </div>
        </h1>

        {/* Engineering Philosophy */}
        <p className={`text-gray-300/80 text-[14px] sm:text-[16px] lg:text-lg leading-[1.8] font-light max-w-[500px] mb-12 lg:mb-14 drop-shadow-lg transition-all duration-[1.2s] ease-[0.16,1,0.3,1] delay-[700ms] will-change-transform ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          Experience a new paradigm in luxury residential construction. Point around the canvas to reveal the masterpiece, or click below to transform your vision.
        </p>

        {/* Magnetic Interactions */}
        <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pointer-events-auto transition-all duration-[1.2s] ease-[0.16,1,0.3,1] delay-[850ms] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>

          <div
            ref={magneticRef}
            onPointerMove={handleMagneticMove}
            onPointerLeave={(e) => { handleMagneticLeave(); unhoverExpand(); }}
            onMouseEnter={hoverExpand}
            className="group relative cursor-pointer"
          >
            <Link
              href="/projects"
              style={{ transform: `translate3d(var(--mag-x, 0px), var(--mag-y, 0px), 0)` } as React.CSSProperties}
              className="flex items-center justify-center gap-4 bg-white text-[#050505] font-black text-[11px] sm:text-sm uppercase tracking-[0.2em] px-8 sm:px-10 py-5 sm:py-6 overflow-hidden transition-all duration-[0.5s] ease-[0.16,1,0.3,1] hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-2 mix-blend-difference text-white">View Latest Work</span>
              <span className="absolute right-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10">
                <svg className="w-4 h-4 text-white mix-blend-difference" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
              <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[0.16,1,0.3,1]" />
            </Link>
          </div>

          <div
            onMouseEnter={hoverExpand}
            onMouseLeave={unhoverExpand}
            className="group cursor-pointer flex items-center"
          >
            <Link
              href="/contact#secure-data-link"
              className="flex items-center justify-center gap-3 bg-transparent border border-white/20 hover:border-[#F9A825] text-white font-black text-[11px] sm:text-sm uppercase tracking-[0.2em] px-8 sm:px-10 py-[18px] sm:py-[22px] overflow-hidden transition-all duration-[0.5s] ease-[0.16,1,0.3,1] hover:bg-[#F9A825]/10 hover:shadow-[0_0_30px_rgba(249,168,37,0.15)] group/btn"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover/btn:-translate-x-1">Get Estimation</span>
              <svg className="w-4 h-4 text-[#F9A825] opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-[0.5s] ease-[0.16,1,0.3,1]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
