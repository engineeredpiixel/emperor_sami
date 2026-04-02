"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { residentialServicesData } from "@/lib/servicesDataResidential";
import { commercialServicesData } from "@/lib/servicesDataCommercial";

// Define the 3 Residential and 3 Commercial featured services
const featuredResidentialSlugs = ["new-construction", "whole-home-renovations", "home-theaters"];
const featuredCommercialSlugs = ["ground-up-construction", "tenant-build-outs", "adaptive-reuse"];

const residentialServices = featuredResidentialSlugs.map((slug) => ({
  title: residentialServicesData[slug].heroTitle,
  slug: slug,
  description: residentialServicesData[slug].description,
  image: residentialServicesData[slug].heroImage,
  category: "Residential Architecture",
}));

const commercialServices = featuredCommercialSlugs.map((slug) => ({
  title: commercialServicesData[slug].heroTitle,
  slug: slug,
  description: commercialServicesData[slug].description,
  image: commercialServicesData[slug].heroImage,
  category: "Commercial Infrastructure",
}));

export default function ServicesSection() {
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

  // Complex Card Helper ensuring perfectly isolated state based on Slugs instead of Map Indexes
  const renderCard = (service: any, i: number) => {
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

        <div className={`absolute top-6 left-6 z-10 flex flex-col gap-2 transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-0' : 'group-hover/scanner:opacity-0'}`}>
          <span className="text-gray-400 font-mono text-[9px] uppercase tracking-[0.4em] drop-shadow-sm whitespace-nowrap">
            Phase // 0{i + 1}
          </span>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent mix-blend-multiply" />
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
            <span className="text-[#F9A825] font-black text-[9px] tracking-[0.4em] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap">
              {service.category}
            </span>
          </div>

          <h3 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-[1] mb-5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] max-w-[90%]">
            {service.title}
          </h3>

          <div className="bg-white/95 backdrop-blur-md border-l-[3px] border-[#F9A825] pl-5 pr-4 py-4 shadow-xl pointer-events-auto flex flex-col">
            <p className="text-gray-700 text-xs sm:text-sm font-medium leading-[1.8] mb-4">
              {service.description}
            </p>

            <div className="flex">
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

        {/* Hover Border Targeting Box */}
        <div className={`absolute inset-0 border-[2px] pointer-events-none transition-all duration-[0.8s] ease-[0.16,1,0.3,1] will-change-transform rounded-sm z-50 ${isActive ? 'border-[#F9A825]/50 scale-100' : 'border-[#F9A825]/0 scale-95 group-hover/scanner:border-[#F9A825]/50 group-hover/scanner:scale-100'}`} />

      </div>
    );
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#FAF9F6] py-24 sm:py-32 overflow-hidden select-none border-b border-gray-100 scroll-mt-24"
    >
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── MAIN HEADER ── */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <div className={`flex items-center gap-3 mb-6 transition-all duration-1000 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="h-[2px] w-8 bg-[#F9A825]" />
              <span className="text-[#F9A825] text-xs font-black tracking-[0.4em] uppercase">
                Core Capabilities
              </span>
            </div>

            <h2 className={`text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-black tracking-tighter transition-all duration-1000 delay-100 will-change-transform uppercase ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <span className="text-[#111] drop-shadow-sm">Blueprint</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300 mt-2">To Reality.</span>
            </h2>

          </div>

          <p className={`hidden lg:block text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em] max-w-sm leading-relaxed pb-4 transition-all duration-1000 delay-200 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Project Visualization // Transforming preliminary architectural blueprints into master-crafted luxury real estate. Hover over drafts to reveal the completed build.
          </p>
        </div>

        {/* ── RESIDENTIAL DIVISION ── */}
        <div className={`mb-12 flex items-center gap-4 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
           <h3 className="text-[#111] font-black uppercase text-xl sm:text-2xl tracking-[0.1em]">Residential Services</h3>
           <div className="flex-1 h-[1px] bg-gray-200" />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 transition-all duration-[1.5s] ease-[0.16,1,0.3,1] delay-300 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
          {residentialServices.map((service, i) => renderCard(service, i))}
        </div>

        <div className={`mt-16 flex justify-center w-full mb-24 lg:mb-32 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
           <Link href="/all-services#residential" className="group flex items-center gap-3 bg-[#111] hover:bg-[#F9A825] text-white hover:text-[#111] font-black uppercase tracking-widest text-xs px-10 py-4 lg:py-5 rounded-sm transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(249,168,37,0.3)] cursor-pointer">
             View All Residential Services 
             <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </Link>
        </div>

        {/* ── COMMERCIAL DIVISION ── */}
        <div className={`mb-12 flex items-center gap-4 transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
           <h3 className="text-[#111] font-black uppercase text-xl sm:text-2xl tracking-[0.1em]">Commercial Services</h3>
           <div className="flex-1 h-[1px] bg-gray-200" />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 transition-all duration-[1.5s] ease-[0.16,1,0.3,1] delay-500 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
          {commercialServices.map((service, i) => renderCard(service, i))}
        </div>

        <div className={`mt-16 flex justify-center w-full transition-all duration-1000 delay-[700ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
           <Link href="/all-services#commercial" className="group flex items-center gap-3 bg-[#111] hover:bg-[#F9A825] text-white hover:text-[#111] font-black uppercase tracking-widest text-xs px-10 py-4 lg:py-5 rounded-sm transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(249,168,37,0.3)] cursor-pointer">
             View All Commercial Services
             <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </Link>
        </div>

      </div>
    </section>
  );
}
