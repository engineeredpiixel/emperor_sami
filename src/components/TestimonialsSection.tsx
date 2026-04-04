"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { useCMS } from "@/components/CMSProvider";

import Link from "next/link";
import { masterProjects } from "@/lib/projectsData";

const testimonials = Object.values(masterProjects).slice(0, 10).map(p => ({
  project: p.title,
  name: p.testimonial.author,
  title: p.testimonial.role || p.category,
  text: p.testimonial.quote,
  image: p.heroImage,
  slug: p.slug
}));

const NUM_PILLARS = 4;

export default function TestimonialsSection() {
  const { t } = useCMS();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // The Physics State
  const [activeIndex, setActiveIndex] = useState(0); // The data currently selected
  const [renderIndex, setRenderIndex] = useState(0); // The one actually physically rendering (-1 = shutter closed/empty)
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Preload images for instant shutter
  useEffect(() => {
    testimonials.forEach(t => {
      const img = new window.Image();
      img.src = t.image;
    });
  }, []);

  const executeShutter = useCallback((direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // 1. Shutter Tear Down (Slide everything away into the void)
    setRenderIndex(-1);
    
    // 2. The Blueprint Void
    setTimeout(() => {
      const nextIndex = direction === 'next' 
        ? (activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)
        : (activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
        
      setActiveIndex(nextIndex);
      
      // 3. Shutter Rebuild (Slide the new pillars in from the void)
      setRenderIndex(nextIndex);
    }, 800); // 800ms gap exposes the beautiful glowing CAD blueprint
    
    // 4. Release execution lock
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // Total animation is ~1.2s + 800ms gap = 2s
  }, [isAnimating, activeIndex]);

  // Autoplay Logic: Advances every 6 seconds. Resets interval on manual click or animation state changes.
  useEffect(() => {
    if (!visible || isAnimating) return;
    
    const timer = setInterval(() => {
       executeShutter('next');
    }, 6000);
    
    return () => clearInterval(timer);
  }, [visible, isAnimating, executeShutter]);

  const isVisible = renderIndex !== -1;

  return (
    <section ref={sectionRef} className="bg-[#020202] py-24 sm:py-36 overflow-hidden relative z-10 w-full">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── HEADER ── */}
        <div className={`mb-16 md:mb-24 flex items-end justify-between transition-all duration-1000 delay-100 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
             <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-[#F9A825]" />
                  <span className="text-[#F9A825] text-xs font-black tracking-[0.4em] uppercase">{t("testimonials.badge_text")}</span>
                </div>
                {/* Overall Google Review Badge */}
                <div className="flex items-center gap-2.5 bg-white/5 px-3 py-1.5 rounded border border-white/10 w-fit backdrop-blur-sm">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-white text-[13px] font-bold mt-px">{t("testimonials.rating_value") || "5.0"}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-[#F9A825]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                  </div>
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold ml-1 mt-0.5 whitespace-nowrap">{t("testimonials.reviews_count") || "84 Reviews"}</span>
                </div>
             </div>
             <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter">
                {t("testimonials.headline")}
             </h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="hidden md:flex items-center gap-3">
             <button 
               aria-label="Previous Testimonial"
               onClick={() => executeShutter('prev')}
               className={`w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-500 overflow-hidden relative group/btn ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#F9A825]'}`}
             >
                <div className="absolute inset-0 bg-[#F9A825] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                <svg className="w-6 h-6 text-gray-400 group-hover/btn:text-black relative z-10 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
             </button>
             <button 
               aria-label="Next Testimonial"
               onClick={() => executeShutter('next')}
               className={`w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-500 overflow-hidden relative group/btn ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#F9A825]'}`}
             >
                <div className="absolute inset-0 bg-[#F9A825] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                <svg className="w-6 h-6 text-gray-400 group-hover/btn:text-black relative z-10 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
             </button>
          </div>
        </div>

        {/* ── MASTERPIECE VIEWPORT ── */}
        <div className={`flex flex-col lg:flex-row h-auto lg:h-[700px] w-full gap-12 lg:gap-16 transition-all duration-1000 delay-300 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
           
           {/* ── LEFT: Typographic Assembly ── */}
           <div className="w-full lg:w-[45%] flex flex-col justify-center relative min-h-[400px]">
              
              <div className="absolute top-10 right-0 pointer-events-none opacity-[0.03] select-none">
                 <span className="font-serif text-[18rem] md:text-[24rem] leading-none font-black text-white">“</span>
              </div>

              {/* Masked Typography Layers */}
              {testimonials.map((test, index) => {
                 const isRendered = renderIndex === index;
                 
                 return (
                    <div 
                      key={index} 
                      className={`absolute top-1/2 -translate-y-1/2 w-full transition-opacity duration-300 ${isRendered ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                    >
                       <div className="overflow-hidden mb-8">
                          <div className={`transition-transform duration-[1.2s] ease-[0.19,1,0.22,1] ${isRendered ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                             <div className="flex gap-1 mb-5">
                               {[...Array(5)].map((_, i) => (
                                 <svg key={i} className="w-5 h-5 text-[#F9A825]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                               ))}
                             </div>
                             <p className="text-white text-xl sm:text-2xl lg:text-[1.8rem] font-medium leading-[1.65] tracking-tight">
                               {test.text}
                             </p>
                          </div>
                       </div>

                       <div className="overflow-hidden flex items-center gap-6">
                          <div className={`w-12 h-[2px] bg-[#F9A825] transition-all duration-[1.2s] ease-[0.19,1,0.22,1] delay-[200ms] will-change-transform ${isRendered ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} />
                          
                          <div className={`flex flex-col transition-transform duration-[1.2s] ease-[0.19,1,0.22,1] delay-[100ms] ${isRendered ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                             <Link href={`/projects/${test.slug}`} className="text-[#F9A825] hover:text-white transition-colors text-xl font-black uppercase tracking-tight mb-1 inline-block border-b border-transparent hover:border-white w-fit">
                               {test.project}
                             </Link>
                             <div className="flex items-center gap-2">
                               <span className="text-gray-400 font-bold text-sm tracking-widest">{test.name}</span>
                               <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                               </svg>
                             </div>
                             <span className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.25em]">{test.title}</span>
                          </div>
                       </div>
                    </div>
                 )
              })}

              {/* Mobile Navigation Controls */}
              <div className="flex md:hidden items-center gap-3 absolute -bottom-16 left-0">
                 <button aria-label="Previous Testimonial" onClick={() => executeShutter('prev')} className={`w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center ${isAnimating ? 'opacity-50' : 'active:bg-[#F9A825]'}`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                 </button>
                 <button aria-label="Next Testimonial" onClick={() => executeShutter('next')} className={`w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center ${isAnimating ? 'opacity-50' : 'active:bg-[#F9A825]'}`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                 </button>
              </div>

           </div>

           {/* ── RIGHT: The Architectural Shutter Engine ── */}
           <div className="w-full lg:w-[55%] h-[400px] sm:h-[500px] lg:h-full relative overflow-hidden bg-black mt-16 lg:mt-0 shadow-2xl">
              
              {/* The Blueprint Void (Visible only when pillars tear apart) */}
              <div className="absolute inset-0 bg-[#000508] z-0 flex items-center justify-center">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
                 <div className="w-32 h-32 border border-teal-500/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    <div className="w-1 h-1 bg-[#F9A825] absolute top-0" />
                    <div className="w-1 h-1 bg-[#F9A825] absolute bottom-0" />
                 </div>
                 <span className="absolute text-teal-500/30 text-[9px] font-mono tracking-[0.5em] uppercase">Processing Data</span>
              </div>

              {/* The 4-Pillar Native Mask Arrays */}
              {testimonials.map((test, index) => {
                 const isRendered = renderIndex === index;
                 
                 return (
                    <div 
                      key={index}
                      className={`absolute inset-0 flex w-full h-full pointer-events-none transition-opacity duration-0 delay-[1.2s] ${isRendered || isAnimating ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                       {Array.from({ length: NUM_PILLARS }).map((_, col) => {
                          const isEven = col % 2 === 0;
                          // If it is the rendered frame, it is at 0. If not, it violently translates away.
                          const awayTransform = isEven ? '-translate-y-full' : 'translate-y-full';
                          const currentTransform = isRendered ? 'translate-y-0' : awayTransform;

                          return (
                             <div 
                               key={col} 
                               className={`relative flex-1 h-full overflow-hidden transition-transform duration-[1.2s] ease-[0.19,1,0.22,1] ${currentTransform}`}
                               style={{ transitionDelay: `${col * 70}ms` }}
                             >
                                {/* Native 400% CSS Slicer Engine */}
                                <div 
                                  className="absolute top-0 h-full max-w-none"
                                  style={{ width: `${NUM_PILLARS * 100}%`, left: `-${col * 100}%` }}
                                >
                                   <Image 
                                      src={test.image} 
                                      alt="High-End Custom Home" 
                                      fill 
                                      className="object-cover" 
                                   />
                                   {/* Lighting overlay on the pillars */}
                                   <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
                                </div>
                                
                                {/* Structural Seam between pillars */}
                                {col !== NUM_PILLARS - 1 && (
                                   <div className="absolute top-0 right-0 w-[1px] h-full bg-black/40 z-20" />
                                )}
                             </div>
                          )
                       })}
                    </div>
                 )
              })}

              {/* Global Shutter Vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)] pointer-events-none z-30" />
              
              {/* Corner Targeting UI */}
              <div className={`absolute top-6 left-6 w-4 h-4 border-t border-l border-[#F9A825] z-30 transition-all duration-500 will-change-transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
              <div className={`absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[#F9A825] z-30 transition-all duration-500 will-change-transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />

           </div>

        </div>
      </div>
    </section>
  );
}
