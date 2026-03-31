"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "EXPERIENCE",
    number: "25+",
    description: "Years Core Capability",
  },
  {
    label: "PROJECTS",
    number: "500+",
    description: "Custom Homes Engineered",
  },
  {
    label: "RELIABILITY",
    number: "100%",
    description: "Safety & Code Compliant",
  },
  {
    label: "COVERAGE",
    number: "3",
    description: "Toronto Regional Area",
  },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Physics Engine Refs
  const engineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shard1Ref = useRef<HTMLDivElement>(null);
  const shadow1Ref = useRef<HTMLDivElement>(null);
  const shard2Ref = useRef<HTMLDivElement>(null);
  const shadow2Ref = useRef<HTMLDivElement>(null);
  const shard3Ref = useRef<HTMLDivElement>(null);
  const shadow3Ref = useRef<HTMLDivElement>(null);
  const shard4Ref = useRef<HTMLDivElement>(null);
  const shadow4Ref = useRef<HTMLDivElement>(null);

  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const computeScrollProgress = () => {
    if (!engineRef.current) return 0;
    const rect = engineRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // The prism begins assembling when it enters the bottom quarter of the screen
    const startY = windowHeight * 0.85;
    // It is fully assembled perfectly in the center of the screen
    const endY = windowHeight * 0.4;

    const elementCenterY = rect.top + (rect.height / 2);

    if (elementCenterY > startY) return 0;
    if (elementCenterY < endY) return 1;
    return 1 - ((elementCenterY - endY) / (startY - endY));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isHoveredRef.current) {
        targetProgress.current = computeScrollProgress();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const updateRender = () => {
      // Hardware accelerated lerping (0.08 multiplier for fluid magnetic lock)
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.08;
      const p = currentProgress.current; // 0 (shattered) to 1 (locked)
      const inv = 1 - p; // 1 (shattered) to 0 (locked)

      if (glowRef.current) {
        glowRef.current.style.opacity = `${0.6 * inv}`;
        glowRef.current.style.transform = `translate(-50%, -50%) scale(${0.5 + 0.5 * inv})`;
      }

      if (shard1Ref.current && shadow1Ref.current) {
        shard1Ref.current.style.transform = `translate(${-2 * inv}%, ${-10 * inv}%) scale(${1 + 0.05 * inv})`;
        shard1Ref.current.style.filter = `grayscale(${100 * inv}%) sepia(${30 * inv}%) contrast(${100 + 25 * inv}%) blur(${1 * inv}px)`;
        shadow1Ref.current.style.opacity = `${inv}`;
      }

      if (shard2Ref.current && shadow2Ref.current) {
        shard2Ref.current.style.transform = `translate(${12 * inv}%, ${-3 * inv}%) scale(${1 + 0.04 * inv})`;
        shard2Ref.current.style.filter = `saturate(${100 + 200 * inv}%) hue-rotate(${190 * inv}deg) brightness(${100 - 25 * inv}%) blur(${2 * inv}px)`;
        shadow2Ref.current.style.opacity = `${inv}`;
      }

      if (shard3Ref.current && shadow3Ref.current) {
        shard3Ref.current.style.transform = `translate(${2 * inv}%, ${12 * inv}%) scale(${1 + 0.03 * inv})`;
        shard3Ref.current.style.filter = `contrast(${100 + 100 * inv}%) saturate(${100 * p}%) brightness(${100 - 60 * inv}%)`;
        shadow3Ref.current.style.opacity = `${inv}`;
      }

      if (shard4Ref.current && shadow4Ref.current) {
        shard4Ref.current.style.transform = `translate(${-10 * inv}%, ${4 * inv}%) scale(${1 + 0.06 * inv})`;
        shard4Ref.current.style.filter = `sepia(${90 * inv}%) contrast(${100 + 80 * inv}%) blur(${1 * inv}px) brightness(${100 - 25 * inv}%)`;
        shadow4Ref.current.style.opacity = `${inv}`;
      }

      rafRef.current = requestAnimationFrame(updateRender);
    };

    rafRef.current = requestAnimationFrame(updateRender);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    targetProgress.current = 1; // Force 100% lock on hover
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    targetProgress.current = computeScrollProgress(); // Revert back to scroll bounds
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#02050A] py-24 sm:py-32 xl:py-40 overflow-hidden select-none"
    >
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 xl:gap-32">

          {/* ── LEFT: The Scroll-Synced Fractal Prism ── */}
          <div
            ref={engineRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full max-w-[500px] lg:max-w-none lg:w-[45%] aspect-[3/4] lg:h-[750px] flex-shrink-0 cursor-crosshair transition-opacity duration-1000 delay-100 mx-auto ${visible ? "opacity-100" : "opacity-0"}`}
          >

            {/* 1. The Blazing Core */}
            <div ref={glowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F9A825] shadow-[0_0_120px_60px_#F9A825] animate-pulse rounded-full pointer-events-none" />

            {/* 2. Overarching Engine Structure */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-[4px]">

              {/* ── SHARD 1: TOP ── */}
              <div
                ref={shard1Ref}
                className="absolute inset-0 overflow-hidden z-10 [clip-path:polygon(0_0,100%_0,50%_50%)]"
              >
                <Image src="/custom_home_interior_1774895577855.png" fill className="object-cover" alt="Custom Home Architecture" />
                <div ref={shadow1Ref} className="absolute inset-x-0 bottom-[50%] h-[40px] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              </div>

              {/* ── SHARD 2: RIGHT ── */}
              <div
                ref={shard2Ref}
                className="absolute inset-0 overflow-hidden z-20 [clip-path:polygon(100%_0,100%_100%,50%_50%)]"
              >
                <Image src="/custom_home_interior_1774895577855.png" fill className="object-cover" alt="Custom Home Construction" />
                <div ref={shadow2Ref} className="absolute inset-y-0 left-[50%] w-[40px] bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none" />
              </div>

              {/* ── SHARD 3: BOTTOM ── */}
              <div
                ref={shard3Ref}
                className="absolute inset-0 overflow-hidden z-10 [clip-path:polygon(100%_100%,0_100%,50%_50%)]"
              >
                <Image src="/custom_home_interior_1774895577855.png" fill className="object-cover" alt="Luxury Foundation Design" />
                <div ref={shadow3Ref} className="absolute inset-x-0 top-[50%] h-[40px] bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none" />
              </div>

              {/* ── SHARD 4: LEFT ── */}
              <div
                ref={shard4Ref}
                className="absolute inset-0 overflow-hidden z-20 [clip-path:polygon(0_100%,0_0,50%_50%)]"
              >
                <Image src="/custom_home_interior_1774895577855.png" fill className="object-cover" alt="Architectural Blueprint Overlay" />
                <div ref={shadow4Ref} className="absolute inset-y-0 right-[50%] w-[40px] bg-gradient-to-l from-black/90 via-black/40 to-transparent pointer-events-none" />
              </div>

            </div>

            {/* 3. Outer Frame & Reflection Glow */}
            <div className="absolute inset-0 border border-white/10 shadow-[inset_0_0_80px_rgba(255,255,255,0.05)] pointer-events-none z-30" />

          </div>

          {/* ── RIGHT: Architectonic Typography & Floating Ledger ── */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center relative z-20">

            {/* Label */}
            <div className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="h-[2px] w-12 bg-[#F9A825]" />
              <span className="text-[#F9A825] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(249,168,37,0.8)]">
                The Emperor Standard
              </span>
            </div>

            {/* Typography */}
            <h2 className={`text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] mb-8 tracking-tighter transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Building Perfect Vision Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 mt-2">Absolute Reality.</span>
            </h2>

            {/* Content Description */}
            <div className={`text-gray-400 text-sm sm:text-base leading-[1.8] mb-12 max-w-[540px] font-medium transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="mb-4">
                With over 25 years of master craftsmanship, Emperor Sami Group specializes in high-end residential engineering and breathtaking full-scale luxury renovations.
              </p>
              <p>
                We shatter the old standard. From executing the initial CAD geometry to the pristine final walkthrough, our elite team of tradespeople guarantee supreme architectural precision, impenetrable structural integrity, and flawless luxury.
              </p>
            </div>

            {/* The Floating Glass HUD Metrics */}
            <div className={`flex flex-col gap-4 sm:gap-6 lg:gap-8 mt-4 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group/stat relative flex flex-row items-end justify-between border-b border-white/5 pb-3 transition-colors duration-500 hover:border-[#F9A825]/50 pr-4 sm:pr-8"
                >
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 group-hover/stat:text-[#F9A825] transition-colors duration-300">
                      {stat.label}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium group-hover/stat:text-gray-300 transition-colors duration-300">
                      {stat.description}
                    </span>
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-white group-hover/stat:text-[#F9A825] transition-all duration-300 transform group-hover/stat:scale-110 origin-bottom-right drop-shadow-lg">
                    {stat.number}
                  </span>
                  {/* Ghost glow trailing the right side */}
                  <div className="absolute right-0 bottom-4 w-12 h-12 bg-[#F9A825]/30 blur-[20px] rounded-full opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* ── THE COMMITMENT TRAJECTORY BUTTON ── */}
            <div className={`mt-10 transition-all duration-1000 delay-[600ms] flex justify-start ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
               <a 
                 href="/about#our-commitment" 
                 className="group/commit inline-flex items-center gap-4 bg-transparent border border-[#F9A825]/30 px-8 py-4 sm:px-10 sm:py-5 hover:bg-[#F9A825]/10 hover:border-[#F9A825] transition-all duration-[0.5s] ease-[0.16,1,0.3,1] shadow-[0_0_20px_rgba(249,168,37,0)] hover:shadow-[0_0_40px_rgba(249,168,37,0.2)]"
               >
                 <span className="text-[#F9A825] font-black uppercase text-xs sm:text-sm tracking-[0.2em] transition-transform duration-500 group-hover/commit:-translate-x-1 drop-shadow-sm">
                    Our Commitment
                 </span>
                 <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#F9A825] opacity-0 -translate-x-4 group-hover/commit:opacity-100 group-hover/commit:translate-x-0 transition-all duration-[0.5s] ease-[0.16,1,0.3,1]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
