"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const residentialServices = [
  // Planning & Management
  {
    category: "Planning & Management",
    title: "Architectural Drafting & 3D Rendering",
    slug: "architectural-drafting",
    description: "Collaborative CAD design services that flawlessly blend aesthetic ambition with rigorous structural integrity.",
    image: "/blueprint_bg_1774895613394.png",
    isNew: false
  },
  {
    category: "Planning & Management",
    title: "Residential Project Management",
    slug: "residential-project-management",
    description: "End-to-end oversight of residential builds, mitigating timeline and budget overruns with absolute transparency.",
    image: "/card_project_management_1774895647508.png",
    isNew: false
  },
  {
    category: "Planning & Management",
    title: "Zoning & Permitting Acquisition",
    slug: "zoning-permitting",
    description: "Navigating complex municipal codes to secure necessary residential building approvals and accelerate your timeline.",
    image: "/card_safety_compliant_1774895701318.png",
    isNew: true
  },
  // Core Construction & Development
  {
    category: "Core Construction & Development",
    title: "Custom Home Building",
    slug: "custom-home-building",
    description: "Ground-up construction of tailored residential properties engineered for absolute structural perfection.",
    image: "/custom_home_exterior_1774895595441.png",
    isNew: false
  },
  {
    category: "Core Construction & Development",
    title: "High-End Renovations",
    slug: "high-end-renovations",
    description: "Premium material upgrades and comprehensive interior remodeling explicitly designed to maximize property value.",
    image: "/custom_home_interior_1774895577855.png",
    isNew: false
  },
  {
    category: "Core Construction & Development",
    title: "Accessory Dwelling Unit (ADU) Construction",
    slug: "adu-construction",
    description: "Building secondary housing units on existing residential lots—a highly lucrative play in current real estate climates.",
    image: "/card_elite_quality_1774895683555.png",
    isNew: true
  },
  {
    category: "Core Construction & Development",
    title: "Sustainable & Passive Home Development",
    slug: "sustainable-development",
    description: "Eco-friendly building utilizing advanced insulation, solar integration, and low-impact materials for maximum efficiency.",
    image: "/blueprint_bg_1774895613394.png",
    isNew: true
  },
  // Targeted Improvements
  {
    category: "Targeted Improvements",
    title: "Basement Optimization & Finishing",
    slug: "basement-optimization",
    description: "Converting sub-grade concrete spaces into high-utility living areas, gyms, or sound-proof entertainment theaters.",
    image: "/card_elite_quality_1774895683555.png",
    isNew: false
  },
  {
    category: "Targeted Improvements",
    title: "Residential Exterior Improvement",
    slug: "exterior-improvements",
    description: "Roofs, siding, hardscaping, and holistic curb-appeal enhancements that completely transform estate profiles.",
    image: "/card_safety_compliant_1774895701318.png",
    isNew: false
  },
  {
    category: "Targeted Improvements",
    title: "Precision Kitchen & Bath Remodeling",
    slug: "kitchen-bath-remodel",
    description: "Specialized, high-margin renovations focusing on the two most critical and valuable rooms in every luxury residence.",
    image: "/custom_home_interior_1774895577855.png",
    isNew: true
  },
  {
    category: "Targeted Improvements",
    title: "Smart Home Infrastructure Integration",
    slug: "smart-home-integration",
    description: "Hardwiring and installing comprehensive home automation systems during the build phase for invisible mastery.",
    image: "/card_project_management_1774895647508.png",
    isNew: true
  }
];

const commercialServices = [
  // Pre-Construction & Consulting
  {
    category: "Pre-Construction & Consulting",
    title: "Commercial Architectural Drafting",
    slug: "commercial-drafting",
    description: "Structuring spaces for optimal workflow, maximum occupancy loads, and exacting ADA compliance.",
    image: "/blueprint_bg_1774895613394.png",
    isNew: false
  },
  {
    category: "Pre-Construction & Consulting",
    title: "Commercial Project Management",
    slug: "commercial-management",
    description: "Managing complex supply chains, multi-tiered subcontractor hierarchies, and rigorous commercial scheduling.",
    image: "/card_project_management_1774895647508.png",
    isNew: false
  },
  {
    category: "Pre-Construction & Consulting",
    title: "Pre-Construction Feasibility Analysis",
    slug: "feasibility-analysis",
    description: "Assessing site viability, engineering requirements, and cost estimations prior to commercial land acquisition.",
    image: "/card_safety_compliant_1774895701318.png",
    isNew: true
  },
  // Commercial Build & Renovation
  {
    category: "Commercial Build & Renovation",
    title: "Tenant Build-Outs / Leasehold Improvements",
    slug: "tenant-build-outs",
    description: "Customizing commercial spaces to perfectly meet the operational and aesthetic needs of a new lessee.",
    image: "/custom_home_interior_1774895577855.png",
    isNew: true
  },
  {
    category: "Commercial Build & Renovation",
    title: "White Box / Vanilla Shell Construction",
    slug: "white-box-construction",
    description: "Prepping commercial interiors to a blank-slate standard (finished walls, concrete floors, essential electrical).",
    image: "/card_elite_quality_1774895683555.png",
    isNew: true
  },
  {
    category: "Commercial Build & Renovation",
    title: "Corporate & Retail Remodeling",
    slug: "corporate-remodel",
    description: "Updating existing office ecosystems or retail storefronts to modernize brand aesthetics and empower employees.",
    image: "/custom_home_exterior_1774895595441.png",
    isNew: true
  },
  {
    category: "Commercial Build & Renovation",
    title: "Adaptive Reuse Construction",
    slug: "adaptive-reuse",
    description: "Repurposing existing historical or industrial buildings for highly functional modern commercial utility.",
    image: "/blueprint_bg_1774895613394.png",
    isNew: true
  },
  // Facility Upgrades
  {
    category: "Facility Upgrades",
    title: "Commercial Exterior & Façade Improvement",
    slug: "commercial-exterior",
    description: "Upgrading massive building envelopes, installing commercial glazing, and optimizing exterior branding assets.",
    image: "/card_safety_compliant_1774895701318.png",
    isNew: false
  },
  {
    category: "Facility Upgrades",
    title: "Structural Retrofitting & Code Upgrades",
    slug: "structural-retrofitting",
    description: "Reinforcing structural integrity to meet modern safety codes, including crucial seismic and fire suppression systems.",
    image: "/card_project_management_1774895647508.png",
    isNew: true
  },
  {
    category: "Facility Upgrades",
    title: "Commercial Preventative Maintenance",
    slug: "preventative-maintenance",
    description: "Ongoing structural and aesthetic upkeep contracts that protect your commercial real estate investments.",
    image: "/card_elite_quality_1774895683555.png",
    isNew: true
  }
];

export default function AllServicesGrid() {
  const [visible, setVisible] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderServiceCards = (services: any[]) => {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 transition-all duration-[1.5s] ease-[0.16,1,0.3,1] delay-300 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
        {services.map((service, i) => {
          const isActive = activeSlug === service.slug;

          return (
            <div
              key={service.slug}
              onClick={() => setActiveSlug(isActive ? null : service.slug)}
              className={`relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] bg-[#F5F5F5] rounded-sm overflow-hidden group/scanner cursor-crosshair border transition-all duration-[1.2s] ease-[0.16,1,0.3,1] will-change-transform shadow-xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] hover:border-[#F9A825]/40 hover:-translate-y-4
                ${i % 3 === 1 ? 'lg:mt-16' : ''} ${i % 3 === 2 ? 'lg:mt-32' : ''}
                ${isActive ? 'border-[#F9A825]/40 -translate-y-4' : 'border-gray-200'}
              `}
            >

              {/* LAYER 1: THE RESTING CAD BLUEPRINT */}
              <div className={`absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:30px_30px] z-0 pointer-events-none transition-opacity duration-[1.5s] ${isActive ? 'opacity-0' : 'group-hover/scanner:opacity-0'}`} />
              
              <div className={`absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none filter grayscale contrast-125 brightness-[1.1] transition-opacity duration-[1s] will-change-opacity ${isActive ? 'opacity-0' : 'group-hover/scanner:opacity-0'}`}>
                 <Image src={service.image} alt="Blueprint" fill quality={30} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover scale-[1.05]" />
              </div>

               <div className={`absolute top-6 left-6 right-6 z-10 flex flex-col gap-2 transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-0' : 'group-hover/scanner:opacity-0'}`}>
                   <div className="flex items-center justify-between">
                       <span className="text-gray-400 font-mono text-[9px] uppercase tracking-[0.4em] drop-shadow-sm">
                           {service.category}
                       </span>
                       {service.isNew && (
                           <span className="bg-[#F9A825] text-[#111] text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-sm">New</span>
                       )}
                   </div>
                   <div className="border border-gray-200 bg-white/95 px-4 py-3 max-w-[200px] shadow-sm">
                       <h3 className="text-[#111] font-black uppercase text-[13px] tracking-widest leading-tight">
                           {service.title}
                       </h3>
                   </div>
               </div>

              {/* LAYER 2: THE REALITY WIPE (CLIP-PATH MASK) */}
              <div 
                 className={`absolute inset-0 z-20 pointer-events-none transition-all duration-[1.5s] ease-[0.16,1,0.3,1] ${isActive ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)] group-hover/scanner:[clip-path:inset(0_0_0_0)]'}`} style={{ willChange: "clip-path" }}
              >
                  <Image 
                      src={service.image} 
                      alt={service.title}
                      fill 
                      quality={60}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-transform duration-[2.5s] ease-out origin-bottom ${isActive ? 'scale-100' : 'scale-[1.1] group-hover/scanner:scale-100'}`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent mix-blend-multiply" />
              </div>

              {/* LAYER 3: THE GOLDEN MECHANICAL LASER BEAM */}
              <div 
                  className={`absolute top-0 left-0 w-full h-[2px] bg-[#F9A825] z-30 pointer-events-none 
                             -translate-y-[10px] 
                             transition-all duration-[1.5s] ease-[0.16,1,0.3,1] will-change-transform
                             shadow-[0_-5px_20px_4px_rgba(249,168,37,0.6),_0_0_40px_rgba(255,255,255,0.5)]
                             ${isActive ? 'opacity-100 translate-y-[calc(100%_-_2px)]' : 'opacity-0 group-hover/scanner:opacity-100 group-hover/scanner:translate-y-[calc(100%_-_2px)]'}`}
              >
                  <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-white shadow-[0_0_15px_3px_#F9A825]" />
                  <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-white shadow-[0_0_15px_3px_#F9A825]" />
              </div>

              {/* LAYER 4: POST-SCAN DATA HUD */}
              <div className={`absolute inset-x-0 bottom-0 p-8 sm:p-10 z-40 flex flex-col justify-end
                              transition-all duration-[1s] ease-[0.16,1,0.3,1] delay-300 pointer-events-none will-change-transform
                              ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[40px] opacity-0 group-hover/scanner:translate-y-0 group-hover/scanner:opacity-100'}`}
              >
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-[2px] bg-[#F9A825]" />
                      <span className="text-[#F9A825] font-black text-[9px] tracking-[0.4em] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          Construction Complete
                      </span>
                  </div>
                  
                  <h3 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-[1] mb-5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] max-w-[90%]">
                      {service.title}
                  </h3>
                  
                  <div className="bg-white/95 backdrop-blur-md border-l-[3px] border-[#F9A825] pl-5 pr-4 py-4 shadow-xl pointer-events-auto flex flex-col">
                     <p className="text-gray-700 text-xs sm:text-sm font-medium leading-[1.8] mb-4">
                         {service.description}
                     </p>
                     
                     <div className="flex items-center gap-4">
                        <Link 
                           href={`/services/${service.slug}`} 
                           aria-label={`View deep dive on ${service.title}`}
                           className="group/btn inline-flex items-center gap-2 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#111] hover:text-[#F9A825] transition-colors"
                        >
                           View Deep Dive 
                           <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                     </div>
                  </div>
              </div>

              {/* Hover Geometric Border */}
              <div className={`absolute inset-0 border-[2px] pointer-events-none transition-all duration-[0.8s] ease-[0.16,1,0.3,1] will-change-transform rounded-sm z-50 ${isActive ? 'border-[#F9A825]/50 scale-100' : 'border-[#F9A825]/0 scale-95 group-hover/scanner:border-[#F9A825]/50 group-hover/scanner:scale-100'}`} />

            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="bg-[#FAF9F6] py-32 sm:py-48 overflow-hidden select-none pb-48">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* RESIDENTIAL MASTER SECTION */}
        <div className="mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div className={`transition-all duration-1000 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[#F9A825]" />
                <span className="text-[#F9A825] text-xs font-black tracking-[0.4em] uppercase">
                   Division I
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-black tracking-tighter uppercase text-[#111]">
                <span className="drop-shadow-sm">Residential</span><br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300">Services.</span>
              </h2>
            </div>
            <div className={`hidden lg:block text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em] max-w-sm leading-relaxed pb-4 transition-all duration-1000 delay-200 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Focusing on bespoke, luxury single-family property development and comprehensive multi-family environments. Hover to draft.
            </div>
          </div>
          
          {renderServiceCards(residentialServices)}
        </div>

        {/* COMMERCIAL MASTER SECTION */}
        <div className="mt-48 pt-32 border-t border-gray-200/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[#F9A825]" />
                <span className="text-[#F9A825] text-xs font-black tracking-[0.4em] uppercase">
                   Division II
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-black tracking-tighter uppercase text-[#111]">
                <span className="drop-shadow-sm">Commercial</span><br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300">Services.</span>
              </h2>
            </div>
            <div className="hidden lg:block text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em] max-w-sm leading-relaxed pb-4">
              Projecting vast scalability, strict compliance, and ROI-driven execution specifically engineered for B2B. Hover to draft.
            </div>
          </div>
          
          {renderServiceCards(commercialServices)}
        </div>

      </div>
    </section>
  );
}
