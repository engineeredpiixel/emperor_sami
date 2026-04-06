"use client";

import Image from "next/image";
import { useCMS } from "@/components/CMSProvider";

export default function EliteEnclaves() {
  const { t } = useCMS();
  const enclaves = [
    {
      id: "01",
      subtitle: t("servicearea.rc1_subtitle", "The Heritage Core"),
      title: t("servicearea.rc1_title", "Rosedale & Forest Hill"),
      desc: t("servicearea.rc1_desc", "Executing flawless underpinning and surgical extensions without breaching Toronto's absolutely strictest historic brickwork and preservation protocols. We safely gut century-old skeletons and install modern superstructures inside."),
      image: t("servicearea.rc1_img", "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_modern_renovation_1774904319283.png"),
      stat: t("servicearea.rc1_stat", "Heritage Preservation")
    },
    {
      id: "02",
      subtitle: t("servicearea.rc2_subtitle", "The Billionaires Row"),
      title: t("servicearea.rc2_title", "Bridle Path & Hoggs Hollow"),
      desc: t("servicearea.rc2_desc", "Building isolated, multi-generational fortress compounds featuring massive subterranean amenities (saunas, theaters) and aggressive, custom iron perimeter gating. Absolute privacy and uncompromising scale."),
      image: t("servicearea.rc2_img", "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_lakefront_mansion_1774904298419.png"),
      stat: t("servicearea.rc2_stat", "Maximum Footprint Yield")
    },
    {
      id: "03",
      subtitle: t("servicearea.rc3_subtitle", "The Suburban Estates"),
      title: t("servicearea.rc3_title", "King City, Vaughan, Aurora"),
      desc: t("servicearea.rc3_desc", "Unlocking massive multi-acre framing capacities, executing commercial-scale heated driveways, independent guest houses, and expansive rear-lot structural hardscaping layouts."),
      image: t("servicearea.rc3_img", "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_architectural_concrete_1774904384443.png"),
      stat: t("servicearea.rc3_stat", "Multi-Acre Mastery")
    },
    {
      id: "04",
      subtitle: t("servicearea.rc4_subtitle", "The Lakeshore Properties"),
      title: t("servicearea.rc4_title", "Oakville & Mississauga"),
      desc: t("servicearea.rc4_desc", "Expertly navigating Conservation Authorities and strict waterfront setbacks to engineer ultra-modern structural glass villas with uninterrupted views and rigorous moisture-control systems."),
      image: t("servicearea.rc4_img", "https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/base_assets/portfolio_structural_glass_1774904353242.png"),
      stat: t("servicearea.rc4_stat", "Waterfront Engineering")
    }
  ];

  return (
    <section className="bg-[#FAF9F6] pt-32 pb-64 w-full relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-[#D8A02A]" />
              <span className="text-[#D8A02A] text-xs font-black tracking-[0.4em] uppercase">{t("servicearea.regional_badge", "Regional Dominance")}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl leading-[1.05] font-black tracking-tighter uppercase text-[#111]">
              {t("servicearea.regional_title_1", "The Elite")} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300">{t("servicearea.regional_title_2", "Enclaves.")}</span>
            </h2>
          </div>
          <p className="text-sm sm:text-[15px] font-medium text-gray-500 max-w-sm uppercase tracking-widest leading-relaxed">
            {t("servicearea.regional_desc", "Every neighborhood requires entirely different execution strategies. We have conquered them all.")}
          </p>
        </div>

        {/* STICKY TIMELINE ENGINE */}
        <div className="relative w-full">
           {enclaves.map((enclave, i) => (
              <div 
                 key={i} 
                 className={`sticky w-full min-h-[500px] sm:min-h-[60vh] bg-[#111] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/10`}
                 style={{ 
                    top: `calc(10vh + ${i * 2.5}vh)`,
                    marginTop: i === 0 ? "0" : "15vh",
                    zIndex: i * 10 
                 }}
              >
                 {/* Left Content Half */}
                 <div className="w-full md:w-1/2 p-10 sm:p-16 lg:p-20 flex flex-col justify-center relative z-10">
                    <span className="text-[#D8A02A] font-black text-5xl sm:text-7xl mb-8 opacity-40 italic">{enclave.id}</span>
                    
                    <h4 className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-2">{enclave.subtitle}</h4>
                    <h3 className="text-white text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-tight mb-8">
                       {enclave.title}
                    </h3>
                    
                    <p className="text-gray-300 font-medium leading-relaxed sm:text-lg mb-10 border-l-2 border-[#D8A02A] pl-5">
                       {enclave.desc}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-4">
                       <svg className="w-5 h-5 text-[#D8A02A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       <span className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm">{enclave.stat}</span>
                    </div>
                 </div>
                 
                 {/* Right Image Half */}
                 <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111] via-transparent to-transparent pointer-events-none w-1/4" />
                    <Image 
                       src={enclave.image} 
                       alt={enclave.title}
                       fill
                       sizes="(max-width: 768px) 100vw, 50vw"
                       className="object-cover scale-[1.02] filter contrast-[1.1]"
                    />
                 </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}
