"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const specializations = [
  {
    topic: "Structural Glass Engineering",
    desc: "Uninterrupted vistas and multi-story glass facades. We utilize advanced curtain wall systems allowing natural light to sweep aggressively through open-concept architecture. It's not just a window; it's a structural masterpiece.",
    img: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_structural_glass_1774904353242.png"
  },
  {
    topic: "Smart Home & Theatre Integration",
    desc: "Every Emperor Sami home is pre-wired with military-grade fiber optics, integrating seamless control over climate, security, automated blackout shades, and subterranean 8K screening rooms into a single iPad.",
    img: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/custom_home_interior_1774895577855.png"
  },
  {
    topic: "Radiant Heat & Hardscaping",
    desc: "Winter ceases to exist on an Emperor estate. We install commercial-grade radiant heated driveways, snow-melt systems, and bespoke architectural concrete hardscaping.",
    img: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_architectural_concrete_1774904384443.png"
  },
  {
    topic: "Heritage Material Replication",
    desc: "Building in historic Toronto requires absolute perfection. We source century-old reclaimed materials, authentic limestone, and custom millwork to preserve legacy while housing a completely modern superstructure inside.",
    img: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_marble_foyer_1774904369119.png"
  }
];

export default function SpecializedServices() {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050505] py-24 sm:py-32 w-full max-w-[1500px] mx-auto px-4 sm:px-8 border-t border-white/5 relative overflow-hidden text-center sm:text-left">
      
      {/* Cinematic Fog Overlay */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D8A02A]/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      {/* Header Engine */}
      <div className={`relative z-10 flex flex-col items-center sm:items-start mb-16 max-w-5xl mx-auto sm:mx-0 transition-opacity duration-[1.5s] ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}>
         <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-[#D8A02A]" />
            <span className="text-[#D8A02A] text-[10px] md:text-sm font-black tracking-[0.4em] uppercase">Niche Engineering</span>
         </div>
         <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white tracking-tighter uppercase leading-[0.95]">
            Bespoke Upgrades & <br />
            <span className="text-gray-600 drop-shadow-[0_20px_20px_rgba(0,0,0,1)]">Master Integrations.</span>
         </h2>
      </div>

      {/* Specialty Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-16 max-w-[1300px] mx-auto">
         {specializations.map((spec, i) => (
            <div 
               key={spec.topic}
               className={`group/spec relative overflow-hidden bg-[#111] rounded-lg aspect-square sm:aspect-[4/3] transition-all duration-1000 ease-[0.16,1,0.3,1] ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
               style={{ transitionDelay: `${i * 150}ms` }}
            >
               {/* Background Mask */}
               <Image quality={95} src={spec.img} alt={spec.topic} fill className="object-cover scale-110 group-hover/spec:scale-100 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] opacity-50 grayscale group-hover/spec:grayscale-0 group-hover/spec:opacity-70 mix-blend-luminosity group-hover/spec:mix-blend-normal" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-700 group-hover/spec:opacity-60" />

               {/* UI Plaque */}
               <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 z-10">
                  <span className="text-[#D8A02A] text-[10px] font-black tracking-[0.4em] uppercase mb-4 opacity-0 -translate-y-2 group-hover/spec:opacity-100 group-hover/spec:translate-y-0 transition-all duration-500 delay-100 border-l border-[#D8A02A] pl-3">
                     Integration // 0{i + 1}
                  </span>
                  
                  <h3 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-none mb-3 drop-shadow-lg transition-transform duration-700 ease-out group-hover/spec:-translate-y-2">
                     {spec.topic}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-[14px] leading-relaxed font-medium transition-all duration-[0.8s] ease-[0.16,1,0.3,1] opacity-0 h-0 mix-blend-plus-lighter group-hover/spec:opacity-100 group-hover/spec:h-auto group-hover/spec:mt-2">
                     {spec.desc}
                  </p>
               </div>
            </div>
         ))}
      </div>

    </section>
  )
}
