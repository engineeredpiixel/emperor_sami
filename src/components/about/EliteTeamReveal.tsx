"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import { useCMS } from "@/components/CMSProvider";



export default function EliteTeamReveal() {
  const { t } = useCMS();
  
  const TEAM_MEMBERS = useMemo(() => {
    return [1, 2, 3, 4].map(id => ({
      id,
      firstName: t(`about.team.${id}.fname`, ''),
      lastName: t(`about.team.${id}.lname`, ''),
      role: t(`about.team.${id}.role`, ''),
      image: t(`about.team.${id}.img`, `https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/team_${id}.png`),
      description: t(`about.team.${id}.desc`, '')
    }));
  }, [t]);
  const [activeId, setActiveId] = useState<number>(1);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 lg:py-40 bg-[#050607] overflow-hidden relative border-t border-b border-white/5">
      
      {/* ── 1. DARK MODE BACKGROUND ENGINE ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute -inset-[100%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
         {/* Top Header */}
         <div>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-1.5 h-1.5 bg-[#D8A02A] rounded-full animate-ping" />
               <span className="text-[#D8A02A] text-[10px] md:text-sm font-black tracking-[0.4em] uppercase">
                  {t('about.team.label', 'The Human Foundation')}
               </span>
               <div className="flex-1 h-[1px] bg-gray-800 max-w-[100px]" />
            </div>
            
            <h2 className="text-4xl sm:text-6xl lg:text-[5rem] font-black text-white uppercase tracking-tighter leading-[0.9]">
               {t('about.team.title_1', 'The Structural')} <br />
               <span className="text-transparent" style={{ WebkitTextStroke: '2px #444' }}>{t('about.team.title_2', 'Pillars.')}</span>
            </h2>
         </div>
         
         <p className="max-w-md text-gray-500 font-bold uppercase tracking-widest leading-relaxed text-xs text-justify">
            {t('about.team.desc', 'A devastating physical execution is entirely dependent on the commander overseeing it. Meet the absolute apex masters dictating our multi-million dollar residential pipelines.')}
         </p>
      </div>

      {/* ── 2. THE FLEX-ACCORDION VAULTS ── */}
      <div className="w-full max-w-[1600px] mx-auto px-0 sm:px-6 lg:px-12">
         <div className="flex w-full h-[65vh] min-h-[500px] max-h-[850px] overflow-hidden bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 rounded-sm">
            
            {TEAM_MEMBERS.map((member) => {
               const isActive = activeId === member.id;
               
               return (
                  <div
                     key={member.id}
                     onMouseEnter={() => setActiveId(member.id)}
                     className="relative group cursor-crosshair overflow-hidden transition-all duration-[1s] ease-in-out border-l border-white/10 first:border-l-0"
                     style={{
                        flexGrow: isActive ? 6 : 1,
                        flexBasis: 0
                     }}
                  >
                     {/* OVERLAY TECTONIC GLASS */}
                     <div className={`absolute inset-0 z-20 bg-black/80 backdrop-blur-sm transition-opacity duration-[1.5s] ease-[0.19,1,0.22,1] pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100'}`} />

                     {/* IMAGE AESTHETICS */}
                     <Image 
                        src={member.image} 
                        alt={member.lastName}
                        fill
                        className={`object-cover object-center absolute inset-0 z-10 transition-all duration-[2s] ease-[0.19,1,0.22,1] transform origin-center ${
                           isActive ? "grayscale-0 brightness-[0.8] scale-100" : "grayscale-[80%] brightness-[0.2] scale-125"
                        }`}
                     />

                     {/* VERTICAL SPINE (Visible only when compressed) */}
                     <div className={`absolute inset-0 z-30 flex flex-col items-center justify-end pb-8 sm:pb-12 transition-all duration-700 ease-out pointer-events-none ${isActive ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0'}`}>
                        <span 
                           className="text-white/60 font-black text-xl sm:text-2xl lg:text-4xl tracking-tighter uppercase whitespace-nowrap drop-shadow-md pb-4"
                           style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                           {member.lastName}
                        </span>
                        <div className="w-[1px] h-12 bg-[#D8A02A]/50 mt-4" />
                     </div>

                     {/* ACTIVE DATA PAYLOAD */}
                     <div className={`absolute inset-0 z-40 bg-gradient-to-t from-[#050607] via-black/40 to-transparent transition-opacity duration-[1s] ease-in-out pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                     
                     <div className={`absolute bottom-0 left-0 w-[95vw] sm:w-[500px] shrink-0 p-6 sm:p-10 lg:p-16 z-50 flex flex-col justify-end transition-all duration-[1s] ease-[0.19,1,0.22,1] pointer-events-none ${isActive ? 'opacity-100 translate-y-0 delay-[200ms]' : 'opacity-0 translate-y-24'}`}>
                        <div className="flex flex-col gap-2 w-full transform">
                           <span className="text-[#D8A02A] text-[9px] md:text-xs font-black tracking-[0.4em] uppercase shadow-black drop-shadow-md">
                              {member.role}
                           </span>
                           <h3 className="text-white text-3xl sm:text-5xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.85] mb-4 sm:mb-6 shadow-black drop-shadow-xl">
                              {member.firstName} <br/> {member.lastName}
                           </h3>
                           
                           {/* Only visible on tablet+ to keep mobile clean */}
                           <p className="text-gray-300 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-widest leading-[1.8] max-w-md hidden sm:block border-l-2 border-[#D8A02A] pl-4 lg:pl-6 bg-black/40 p-4 backdrop-blur-sm">
                              {member.description}
                           </p>
                           
                           {/* Animated Golden Rule */}
                           <div className="hidden sm:block">
                              <div className={`h-[2px] bg-[#D8A02A] mt-8 lg:mt-10 transition-all duration-[1.5s] ease-[0.19,1,0.22,1] origin-left ${isActive ? 'scale-x-100 delay-[600ms]' : 'scale-x-0'}`} style={{ width: '120px' }} />
                           </div>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>

    </section>
  );
}
