"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCMS } from "@/components/CMSProvider";

export default function ServicesHero() {
  const { t } = useCMS();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] pt-[130px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* ── MASSIVE CINEMATIC BACKGROUND ── */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0005})`,
          opacity: Math.max(0, 1 - scrollY / 700)
        }}
      >
        <Image 
          src={t('services.hero_img', '/portfolio_architectural_concrete_1774904384443.png')}
          alt="Emperor Sami High-End Architecture"
          fill
          className="object-cover grayscale-[30%]"
          priority
        />
        {/* Aggressive Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image-[radial-gradient(circle_at_center,black_40%,transparent_100%)]" />
      </div>

      {/* ── PARALLAX TYPOGRAPHY ENGINE ── */}
      <div 
        className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 400)
        }}
      >
        <div className="flex items-center gap-4 mb-6 animate-[fadeSlideUp_0.8s_ease-out]">
           <div className="h-[2px] w-12 bg-[#D8A02A]" />
           <span className="text-[#D8A02A] text-xs sm:text-sm font-black tracking-[0.5em] uppercase">{t('services.hero_tagline', 'Comprehensive Capabilities')}</span>
           <div className="h-[2px] w-12 bg-[#D8A02A]" />
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-white tracking-tighter uppercase leading-[0.9] drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] animate-[fadeSlideUp_1s_ease-out]">
          {t('services.hero_title_1', 'Elite')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">{t('services.hero_title_2', 'Services.')}</span>
        </h1>

        <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium tracking-wide leading-relaxed animate-[fadeSlideUp_1.2s_ease-out]">
          {t('services.hero_desc', "Emperor Sami Group executes Toronto's most ambitious residential and commercial builds. From absolute structural architecture to turnkey estate management, explore our complete master directory.")}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 animate-pulse opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
         <span className="text-[10px] text-white font-bold tracking-[0.3em] uppercase">Scroll</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>

    </section>
  );
}
