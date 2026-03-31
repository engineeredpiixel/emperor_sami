"use client";

import Image from "next/image";
import { ServiceContentType } from "@/lib/servicesData";

export default function ServiceDetailContent({ data }: { data: ServiceContentType }) {
  return (
    <section className="bg-white py-24 sm:py-32 w-full max-w-[1500px] mx-auto px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* ── STICKY LEFT COLUMN (Image) ── */}
        <div className="w-full lg:w-5/12 xl:w-1/2">
           <div className="sticky top-32 w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-xl shadow-2xl bg-gray-100">
              <Image 
                src={data.heroImage} 
                alt={data.heroTitle} 
                fill 
                className="object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
           </div>
        </div>

        {/* ── SCROLLING RIGHT COLUMN (Deep Content) ── */}
        <div className="w-full lg:w-7/12 xl:w-1/2 flex flex-col justify-center">
           
           <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-[#D8A02A]" />
              <span className="text-[#111] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">Capability Overview</span>
           </div>

           <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111] tracking-tighter uppercase leading-[1.05] mb-8">
              {data.heroTitle}
           </h2>

           <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-16 border-l-4 border-[#D8A02A] pl-6">
              {data.description}
           </p>

           <div className="w-full h-[1px] bg-gray-200 mb-16" />

           {/* DETAILS MATRIX */}
           <h3 className="text-2xl font-black text-[#111] uppercase tracking-widest mb-10">Uncompromised Execution</h3>
           
           <div className="flex flex-col gap-10">
              {data.details.map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                    <span className="text-gray-300 font-black text-4xl group-hover:text-[#D8A02A] transition-colors duration-500 font-mono italic">
                       0{i+1}
                    </span>
                    <div>
                       <h4 className="text-[#111] font-bold text-xl uppercase tracking-tight mb-3">
                          {item.title}
                       </h4>
                       <p className="text-gray-600 leading-relaxed text-[15px]">
                          {item.text}
                       </p>
                    </div>
                 </div>
              ))}
           </div>

           {/* PROCESS ACCORDION OR LIST */}
           <div className="w-full bg-[#FAF9F6] p-8 sm:p-12 mt-20 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black text-[#111] uppercase tracking-widest mb-8">The Workflow</h3>
              <div className="flex flex-col gap-6">
                 {data.process.map((proc, i) => (
                    <div key={i} className="flex items-start gap-4 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                       <div className="w-8 h-8 rounded-full bg-[#111] text-white flex items-center justify-center shrink-0 font-black text-xs">
                          {i+1}
                       </div>
                       <div>
                          <strong className="block text-[#111] uppercase tracking-widest text-[13px] mb-1">{proc.step}</strong>
                          <span className="text-gray-500 text-sm">{proc.desc}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
