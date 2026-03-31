"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    num: "01",
    title: "Architectural Pitch & Feasibility",
    desc: "We analyze zoning constraints, strict city bylaws, and immediate structural feasibility before drafting the initial architectural blueprint. Every million-dollar home starts with an uncompromised structural strategy."
  },
  {
    num: "02",
    title: "Strict City Permitting",
    desc: "Navigating Toronto's aggressive permitting bureaucracy. We handle all Committee of Adjustment hearings, conservation approvals, and heritage restrictions so you remain completely insulated from red tape."
  },
  {
    num: "03",
    title: "The Structured Foundation",
    desc: "Excavation, structural pouring, and steel framing. This is where legacy is literally cemented into the earth. We over-engineer foundations to guarantee multi-generational durability."
  },
  {
    num: "04",
    title: "Elite Execution & Finishes",
    desc: "Master tradesmen execute bespoke millwork, imported marble installations, structural glass engineering, and smart-home integration with obsessive, military-grade precision."
  },
  {
    num: "05",
    title: "The Executive Walkthrough",
    desc: "Final rigorous inspections. We hand you the keys to a flawless, aggressively beautiful custom estate that immediately commands market dominance."
  }
];

export default function ServiceProcess() {
  const containerRef = useRef<HTMLElement>(null);
  const [visibleIdx, setVisibleIdx] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
         if (entry.isIntersecting) {
            // Trigger cascade
            let i = 0;
            const interval = setInterval(() => {
               setVisibleIdx(i);
               i++;
               if (i >= processSteps.length) clearInterval(interval);
            }, 300);
         }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#FAF9F6] py-24 sm:py-32 w-full max-w-[1400px] mx-auto px-4 sm:px-8 border-t border-gray-200">
      
      {/* Title block */}
      <div className="flex flex-col mb-16 max-w-4xl lg:items-center lg:mx-auto lg:text-center">
         <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-[#111]" />
            <span className="text-[#111] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">The Emperor Workflow</span>
            <div className="h-[2px] w-8 bg-[#111] hidden lg:block" />
         </div>
         <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#111] tracking-tighter uppercase leading-[1.05]">
            Blueprint To <br className="lg:hidden" />
            <span className="text-[#b8960c]">Keys in Hand.</span>
         </h2>
      </div>

      {/* Vertical Timeline Engine */}
      <div className="relative max-w-3xl mx-auto flex flex-col gap-10 sm:gap-14">
         {/* The Central Line */}
         <div className="absolute left-[23px] sm:left-[35px] top-0 bottom-0 w-[2px] bg-gray-200 z-0">
            <div 
               className="w-full bg-[#111] transition-all duration-[2s] ease-out"
               style={{ height: visibleIdx >= 0 ? `${((visibleIdx + 1) / processSteps.length) * 100}%` : '0%' }}
            />
         </div>

         {processSteps.map((step, i) => {
           const isRevealed = visibleIdx >= i;
           return (
             <div 
               key={step.num}
               className={`relative z-10 flex gap-6 sm:gap-10 transition-all duration-1000 ease-[0.16,1,0.3,1] ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
             >
                {/* Number Orb */}
                <div className={`w-12 h-12 sm:w-[72px] sm:h-[72px] shrink-0 rounded-full flex items-center justify-center border-[3px] transition-colors duration-700 ${isRevealed ? 'bg-[#111] border-[#111] text-[#FAF9F6] drop-shadow-xl' : 'bg-[#FAF9F6] border-gray-300 text-gray-400'}`}>
                   <span className="text-sm sm:text-xl font-black">{step.num}</span>
                </div>

                {/* Content Matrix */}
                <div className={`mt-2 sm:mt-4 transition-all duration-700 delay-300 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                   <h4 className="text-xl sm:text-3xl font-black text-[#111] tracking-tighter uppercase mb-3 leading-tight drop-shadow-sm">
                      {step.title}
                   </h4>
                   <p className="text-gray-600 font-medium text-sm sm:text-[15px] leading-[1.8] max-w-lg">
                      {step.desc}
                   </p>
                </div>
             </div>
           )
         })}
      </div>
      
    </section>
  )
}
