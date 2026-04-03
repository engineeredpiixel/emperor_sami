"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";
import { useCMS } from "@/components/CMSProvider";

const defaultCommitments = [
  {
    id: "01",
    title: "Project Management",
    description: "Total oversight from initial architectural drafting to final executive walkthrough. We manage every permit, master contractor, and logistical hurdle so your luxury building experience remains completely unburdened.",
    image: "/card_project_management_1774895647508.png",
  },
  {
    id: "02",
    title: "Financial Precision",
    description: "Unprecedented financial transparency and ironclad scheduling. We engineer our timeline with military precision to ensure your absolute custom estate is delivered exactly when promised, without compromise.",
    image: "/card_budget_guarantee_1774895665774.png",
  },
  {
    id: "03",
    title: "Elite Custom Quality",
    description: "We source globally for premium architectural materials and employ only master craftsmen. Our obsession with structural perfection and high-end finishes guarantees a legacy-tier home built to endure.",
    image: "/card_elite_quality_1774895683555.png",
  },
  {
    id: "04",
    title: "Licensed Execution",
    description: "Fully certified, comprehensively insured general contractors operating at the absolute highest tier of safety compliance. Genuine peace of mind engineered directly into the foundation of your investment.",
    image: "/card_safety_compliant_1774895701318.png",
  }
];

export default function CoreValuesSection() {
  const { t, getImage } = useCMS();
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); 
  const sectionRef = useRef<HTMLElement>(null);

  const commitments = useMemo(() => {
    const list = [];
    const defaultImages = [
      "/card_project_management_1774895647508.png",
      "/card_budget_guarantee_1774895665774.png",
      "/card_elite_quality_1774895683555.png",
      "/card_safety_compliant_1774895701318.png"
    ];

    for (let i = 1; i <= 4; i++) {
       const titleKey = `corevalues.value${i}_title`;
       const descKey = `corevalues.value${i}_desc`;
       const imgKey = `corevalues.value${i}_img`;
       const title = t(titleKey);
       if (title && !title.startsWith("[Missing") && title.trim() !== "") {
          list.push({
             id: `0${i}`,
             title: title,
             description: t(descKey),
             image: getImage(imgKey) || defaultImages[i - 1] || defaultImages[0]
          });
       }
    }
    
    if (list.length === 0) {
      return defaultCommitments;
    }
    return list;
  }, [t]);

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


  return (
    <section ref={sectionRef} className="bg-[#FAFAFA] py-24 sm:py-32 overflow-hidden w-full select-none selection:bg-[#F9A825]/30">
       
       {/* ── HEADER: Absolute Minimalism ── */}
       <div className={`max-w-[1500px] mx-auto px-6 lg:px-12 mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-8 transition-all duration-1000 delay-100 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="w-full">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-black" />
                <span className="text-black text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">{t("corevalues.badge_text")}</span>
             </div>
             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-[#111] tracking-tighter leading-[1.05] uppercase max-w-5xl">
                {t("corevalues.headline")}
             </h2>
          </div>
       </div>

       {/* ── THE STRUCTURAL SLICER (Accordion) ── */}
       <div className={`w-full border-t border-black/10 transition-all duration-1000 delay-300 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {commitments.map((com, index) => {
             const isActive = activeIndex === index;

             return (
                <div 
                  key={com.id}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`relative w-full border-b border-black/10 overflow-hidden cursor-pointer transition-all duration-[1s] ease-[0.19,1,0.22,1] group/row bg-[#FAFAFA] will-change-[height]
                    ${isActive ? 'h-[350px] sm:h-[450px] lg:h-[550px]' : 'h-[80px] sm:h-[100px] lg:h-[130px]'}
                  `}
                >
                   
                   {/* 1. The Expanding Clip-Path Mask Container (Fixed Height perfectly centered) */}
                   <div 
                      className={`absolute top-1/2 left-0 w-full h-[600px] -translate-y-1/2 z-0 transition-all duration-[1s] ease-[0.19,1,0.22,1] pointer-events-none will-change-transform
                         ${isActive ? '[clip-path:inset(0_0_0_0)] opacity-100 scale-100' : '[clip-path:inset(50%_0_50%_0)] opacity-0 scale-[1.03]'}
                      `}
                   >
                      <Image 
                         src={com.image} 
                         alt={com.title} 
                         fill 
                         className="object-cover" 
                      />
                      
                      {/* Architectural Lighting Overlays */}
                      <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                      <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent backdrop-blur-[2px]" />
                      {/* Subtle scanner grid overlay on active images */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
                   </div>

                   {/* 2. The Interactive Typography Engine */}
                   <div className="relative w-full h-full max-w-[1500px] mx-auto px-6 lg:px-12 z-10 flex flex-col justify-center sm:justify-between py-6 sm:py-8 lg:py-10 pointer-events-none">
                      
                      {/* Top Axis: Number & Massive Title */}
                      <div className="flex items-center justify-between transition-colors duration-700 w-full">
                         
                         <div className="flex items-center gap-6 sm:gap-10 lg:gap-20">
                            
                            {/* Decimal ID */}
                            <div className="overflow-hidden">
                               <span className={`inline-block font-mono text-xs sm:text-sm lg:text-base font-black transition-all duration-[0.8s] ease-[0.19,1,0.22,1] 
                                  ${isActive ? 'text-[#F9A825] -translate-y-0 drop-shadow-sm' : 'text-gray-400 group-hover/row:text-[#F9A825] translate-y-0'}
                               `}>
                                  /{com.id}
                               </span>
                            </div>

                            {/* Heavy Title */}
                            <h3 className={`text-[1.3rem] sm:text-4xl md:text-5xl lg:text-[4.5rem] font-black uppercase tracking-tighter transition-all duration-[0.8s] ease-[0.19,1,0.22,1] leading-none whitespace-nowrap will-change-transform
                               ${isActive ? 'text-[#111] translate-x-0 drop-shadow-sm' : 'text-gray-300 lg:-translate-x-6 sm:-translate-x-2 group-hover/row:translate-x-0 group-hover/row:text-[#222]'}
                            `}>
                               {com.title}
                            </h3>

                         </div>
                         
                         {/* The Interactive Crosshair Plus */}
                         <div className={`hidden sm:flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 rounded-full border transition-all duration-[0.8s] ease-[0.19,1,0.22,1] overflow-hidden relative will-change-transform
                            ${isActive ? 'border-gray-900 bg-gray-900 rotate-45 scale-100 shadow-[0_10px_30px_rgba(0,0,0,0.15)]' : 'border-gray-200 rotate-0 scale-90 group-hover/row:border-[#F9A825] group-hover/row:scale-100 bg-transparent'}
                         `}>
                            <svg className={`w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-700 relative z-10 ${isActive ? 'text-white' : 'text-gray-300 group-hover/row:text-[#F9A825]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                         </div>

                      </div>

                      {/* Bottom Axis: Sliced Description (Slides UP into existence) */}
                      <div className="overflow-hidden w-full flex justify-end">
                         <div className={`max-w-[700px] transition-transform duration-[1s] ease-[0.19,1,0.22,1] delay-100 hidden sm:flex items-start gap-4
                            ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}
                         `}>
                            <div className="w-[2px] h-6 bg-[#F9A825] shrink-0 mt-1" />
                            <p className="text-gray-600 text-xs sm:text-sm lg:text-[15px] font-medium leading-[1.8] tracking-wide">
                               {com.description}
                            </p>
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
