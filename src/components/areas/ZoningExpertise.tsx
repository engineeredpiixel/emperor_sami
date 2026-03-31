"use client";

import { useEffect, useRef, useState } from "react";

const expertise = [
  {
    icon: "legal",
    title: "Committee of Adjustment",
    desc: "Achieving major footprint expansions in Toronto requires navigating the C of A. We secure complex variances for height, side-yard setbacks, and gross floor areas that average builders abandon.",
  },
  {
    icon: "conservation",
    title: "Conservation Authorities",
    desc: "Building near Oakville or King City waterfronts involves strict TRCA and Halton conservation laws. We engineer retaining walls and drainage systems that instantly clear environmental impact reviews.",
  },
  {
    icon: "heritage",
    title: "Heritage Preservation",
    desc: "Rosedale and Annex estates demand Historical Board approvals. We flawlessly match century-old masonry and execute permitted structural lifts without violating neighborhood heritage facades.",
  }
];

export default function ZoningExpertise() {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.2 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#111] py-32 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D8A02A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Narrative */}
        <div className={`w-full md:w-5/12 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
           <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-white/20" />
              <span className="text-white/40 text-xs font-black tracking-[0.4em] uppercase">Bureaucratic Supremacy</span>
           </div>
           
           <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95] mb-8 drop-shadow-lg">
              Conquering <br className="hidden lg:block" />
              <span className="text-[#D8A02A]">The Red Tape.</span>
           </h2>
           
           <p className="text-gray-400 leading-relaxed font-medium sm:text-lg max-w-md border-l-[3px] border-[#D8A02A] pl-6 mb-12">
              The greatest threat to a multi-million-dollar build is not the structural engineering—it is the municipal bureaucracy. Our internal legal and architectural teams ruthlessly navigate Toronto's most aggressively regulated zones so your timeline never stalls.
           </p>

           <div className="inline-flex items-center gap-4 border border-white/10 bg-white/5 py-4 px-6 font-mono text-sm tracking-widest text-[#D8A02A] uppercase font-bold">
              <span>Zero Zoning Denials</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#D8A02A] animate-pulse" />
           </div>
        </div>

        {/* RIGHT COLUMN: 3-Grid Matrix */}
        <div className="w-full md:w-7/12 flex flex-col gap-10">
           {expertise.map((exp, i) => (
              <div 
                 key={i}
                 className={`group flex items-start gap-6 sm:gap-8 pb-10 border-b border-white/10 last:border-0 transition-all duration-1000 ease-[0.16,1,0.3,1] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                 style={{ transitionDelay: `${i * 200}ms` }}
              >
                 <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-white/20 flex flex-col justify-center items-center text-[#D8A02A] group-hover:bg-[#1a1a1a] transition-colors rounded-se-xl">
                    <span className="font-mono text-xs uppercase opacity-50 mb-1">0{i+1}</span>
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                       {/* Abstract Legal Icon */}
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                 </div>
                 
                 <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-[#D8A02A] transition-colors">
                       {exp.title}
                    </h3>
                    <p className="text-gray-400 font-medium leading-[1.8] text-sm sm:text-base">
                       {exp.desc}
                    </p>
                 </div>
              </div>
           ))}
        </div>

      </div>

    </section>
  )
}
