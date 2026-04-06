"use client";

import Image from "next/image";
import { useState } from "react";

const coreServices = [
  {
    id: "01",
    cat: "Architecture",
    title: "Custom Home Building",
    desc: "We command the entire architectural cycle, forging visionary concept designs into breathtaking million-dollar estates. Uncompromised structural integrity strictly aligned with Toronto's elite zoning codes.",
    img: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_bespoke_exterior_1774904336356.png"
  },
  {
    id: "02",
    cat: "Renovation",
    title: "Structural Gut & Extend",
    desc: "Master-level heritage restorations and full-property expansions. We seamlessly integrate cutting-edge modern luxury into legacy foundations without disrupting the neighborhood aesthetic.",
    img: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_modern_renovation_1774904319283.png"
  },
  {
    id: "03",
    cat: "Engineering",
    title: "Executive Basements",
    desc: "Transforming subterranean concrete into high-yield luxury square footage. Think automated wine cellars, sound-isolated theaters, and private wellness spas.",
    img: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/custom_home_interior_1774895577855.png"
  },
  {
    id: "04",
    cat: "Logistics",
    title: "Project Management",
    desc: "The hallmark of Emperor Sami. Zero-anxiety execution. We handle the brutal logistics—master tradesmen, aggressive city permits, and absolute timeline enforcement.",
    img: "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/card_project_management_1774895647508.png"
  }
];

export default function DetailedServices() {
  const [activeHover, setActiveHover] = useState(0);

  return (
    <section className="bg-white py-24 sm:py-32 w-full max-w-[1500px] mx-auto px-4 sm:px-8">
      
      {/* Title Engine */}
      <div className="flex flex-col mb-16 max-w-4xl">
         <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-[#D8A02A]" />
            <span className="text-[#111] text-[10px] md:text-sm font-black tracking-[0.4em] uppercase">Core Capabilities</span>
         </div>
         <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-[#111] tracking-tighter uppercase leading-[0.95]">
            The Blueprint <br />
            <span className="text-gray-400">To Reality.</span>
         </h2>
      </div>

      {/* Expansion Grid Engine */}
      <div className="flex flex-col lg:flex-row w-full h-[1000px] lg:h-[650px] gap-4">
        {coreServices.map((service, i) => {
          const isActive = activeHover === i;
          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveHover(i)}
              className={`relative overflow-hidden cursor-pointer bg-[#0a0a0a] rounded-xl transition-all duration-700 ease-[0.2,1,0.3,1] group/slab drop-shadow-lg flex flex-col justify-end
                ${isActive ? 'lg:flex-[2.5] flex-[2.5] shadow-2xl scale-[1.01]' : 'lg:flex-[1] flex-[1] grayscale sm:grayscale-0 hover:grayscale-0'}
              `}
            >
              
              {/* Background Plate */}
              <div className={`absolute inset-0 transition-transform duration-1000 pointer-events-none ${isActive ? 'scale-100' : 'scale-110 opacity-70'}`}>
                <Image quality={95} src={service.img} alt={service.title} fill className="object-cover" />
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/95 via-black/40 to-transparent' : 'bg-black/60'}`} />
              </div>

              {/* Data Plate */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col pointer-events-none">
                <span className={`text-[#D8A02A] text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase mb-4 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {service.id} // {service.cat}
                </span>

                <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tighter leading-[1.1] transition-all duration-500 drop-shadow-md ${isActive ? 'mb-4' : 'mb-0 lg:rotate-90 lg:origin-bottom-left lg:absolute lg:bottom-10 lg:left-8 whitespace-nowrap'}`}>
                  {service.title}
                </h3>

                <div className={`overflow-hidden transition-all duration-700 ease-[0.2,1,0.3,1] ${isActive ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0 lg:hidden block'}`}>
                  <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-md">
                    {service.desc}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-3 text-white text-xs font-bold tracking-widest uppercase">
                    <span>Explore Metric</span>
                    <svg className="w-4 h-4 text-[#D8A02A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
            </div>
          )
        })}
      </div>

    </section>
  )
}
