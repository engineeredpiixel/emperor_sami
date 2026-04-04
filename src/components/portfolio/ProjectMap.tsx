"use client";

import { ProjectType } from "@/lib/projectsData";
import { useEffect, useRef, useState, ComponentType } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("pigeon-maps").then((m) => m.Map as ComponentType<any>), { ssr: false });
const Overlay = dynamic(() => import("pigeon-maps").then((m) => m.Overlay as ComponentType<any>), { ssr: false });

export default function ProjectMap({ data, overrideTitle }: { data: ProjectType, overrideTitle?: string }) {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#111] py-24 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Narrative Side */}
        <div className={`w-full md:w-5/12 flex flex-col transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
           <div className="flex items-center gap-3 mb-6">
              <span className="text-[#D8A02A] text-xs font-black tracking-[0.4em] uppercase">{overrideTitle || "Geographic Node"}</span>
              <div className="h-[1px] w-12 bg-[#D8A02A]" />
           </div>
           
           <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-[0.95] mb-6">
              Execution <br />
              <span className="text-gray-500">Radius.</span>
           </h2>
           
           <p className="text-gray-400 leading-relaxed font-bold sm:text-lg mb-8">
              This masterwork is located in <span className="text-white">{data.location}</span>. Every neighborhood holds its own distinct topographical and municipal challenges. Emperor Sami guarantees 100% compliance and absolute structural dominance regardless of the postal code.
           </p>

           <div className="bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-sm">
              <span className="block text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Project Site</span>
              <span className="text-[#D8A02A] text-xl font-black uppercase tracking-widest">{data.location}</span>
           </div>
        </div>

        {/* Map Container */}
        <div className={`w-full md:w-7/12 h-[450px] sm:h-[550px] relative rounded-lg overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-[0.19,1,0.22,1] ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
          {/* Glass Overlay to make it feel cinematic instead of interactive */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-[#111] via-transparent to-transparent opacity-80" />
          
          {isMounted && (
            <div className="absolute inset-0 z-10 filter grayscale-[50%] contrast-[1.1] invert-[90%] hue-rotate-180 brightness-[0.8]">
                <Map
                  center={[data.lat, data.lng]}
                  defaultZoom={13}
                  minZoom={10}
                  maxZoom={15}
                  provider={(x: number, y: number, z: number) => {
                     // Using CartoDB Positron for a hyper-clean architectural look
                     return `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;
                  }}
                  mouseEvents={false}
                  touchEvents={false}
                >
                  <Overlay anchor={[data.lat, data.lng]} offset={[18, 50]}>
                     <div className="relative group z-30 transform scale-125">
                        {/* Radar Pulse */}
                        <div className="absolute inset-0 bg-[#D8A02A] rounded-full animate-ping opacity-30" />
                        
                        {/* Hexagon Pin */}
                        <div className="w-9 h-10 border-2 border-[#D8A02A] bg-[#111] shadow-[0_0_15px_rgba(216,160,42,0.8)] flex items-center justify-center relative backdrop-blur-md" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                            <div className="w-2 h-2 rounded-full bg-[#D8A02A] shadow-[0_0_10px_#D8A02A] animate-pulse" />
                        </div>
                     </div>
                  </Overlay>
                </Map>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
