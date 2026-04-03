"use client";

import { useEffect, useRef } from "react";
import { useCMS } from "@/components/CMSProvider";

export default function ScrollingText({ theme = "light" }: { theme?: "light" | "dark" }) {
  const { getRaw } = useCMS();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    const speed = 1.5; // pixels per frame
    let raf: number;

    const scroll = () => {
      offset -= speed;
      // Reset when first half has scrolled out
      if (Math.abs(offset) >= track.scrollWidth / 2) {
        offset = 0;
      }
      track.style.transform = `translateX(${offset}px)`;
      raf = requestAnimationFrame(scroll);
    };

    raf = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(raf);
  }, []);

  const rawItems = getRaw("scrolling.items");
  const words = rawItems && !rawItems.startsWith("[Missing") 
    ? rawItems.split(",").map(w => w.trim().toUpperCase()) 
    : ["ARCHITECTURE", "LUXURY", "CRAFTSMANSHIP", "ESTATES", "DESIGN"];
  
  // Double for seamless loop
  const repeated = [...words, ...words, ...words, ...words, ...words, ...words, ...words, ...words];

  const isDark = theme === "dark";

  return (
    <section className={`${isDark ? 'bg-[#111111] py-6 sm:py-8' : 'bg-white py-10'} overflow-hidden`}>
      <div
        ref={trackRef}
        className="flex items-center whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {repeated.map((word, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span 
               className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black uppercase tracking-tighter text-transparent select-none px-6"
               style={{ WebkitTextStroke: isDark ? '2px rgba(255,255,255,0.7)' : '3px rgba(17,17,17,0.85)' }}
            >
              {word}
            </span>
            <span className={`${isDark ? 'text-white/20' : 'text-black/10'} text-6xl font-black select-none px-2`}>+</span>
          </span>
        ))}
      </div>
    </section>
  );
}
