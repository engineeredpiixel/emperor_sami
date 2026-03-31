"use client";

import { useState } from "react";
import { ServiceContentType } from "@/lib/servicesData";

export default function ServiceFAQ({ faqs }: { faqs: ServiceContentType['faqs'] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-[#FAF9F6] py-24 sm:py-32 w-full max-w-[1200px] mx-auto px-6 sm:px-12 border-t border-gray-200">
      
      {/* HEADER MATRIX */}
      <div className="flex flex-col mb-16 max-w-4xl">
         <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-[#111]" />
            <span className="text-[#111] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">Objection Mitigation</span>
         </div>
         <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#111] tracking-tighter uppercase leading-[1.05]">
            Service Specific <br className="lg:hidden" />
            <span className="text-gray-400">Logistics.</span>
         </h2>
      </div>

      {/* DYNAMIC FAQ ACCORDION ENGINE */}
      <div className="flex flex-col border-t-2 border-black/10">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;

          return (
            <div 
              key={i} 
              className="border-b-[1.5px] border-black/10 group bg-transparent transition-colors hover:bg-black/5"
            >
               <button 
                 onClick={() => setOpenIdx(isOpen ? null : i)}
                 className="w-full text-left py-6 sm:py-8 flex justify-between items-center px-4 gap-6 cursor-pointer outline-none"
               >
                  <h3 className={`text-xl sm:text-2xl font-black tracking-tighter uppercase transition-colors duration-300 ${isOpen ? 'text-[#D8A02A]' : 'text-[#111] group-hover:text-gray-600'}`}>
                     {faq.q}
                  </h3>
                  
                  {/* Plus/Minus Indicator */}
                  <div className={`w-10 h-10 rounded-full border-[2px] flex items-center justify-center shrink-0 transition-all duration-500 ease-[0.19,1,0.22,1] ${isOpen ? 'border-[#D8A02A] bg-[#D8A02A] rotate-45 scale-110 shadow-lg text-white' : 'border-black/20 text-[#111] bg-transparent rotate-0 scale-95 group-hover:scale-100'}`}>
                     <svg className="w-5 h-5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                     </svg>
                  </div>
               </button>

               {/* Dropdown Answer Payload */}
               <div 
                 className={`overflow-hidden transition-all duration-[0.8s] ease-[0.16,1,0.3,1] ${isOpen ? 'max-h-[500px] opacity-100 pb-8 px-4' : 'max-h-0 opacity-0 px-4'}`}
               >
                 <div className="w-full max-w-4xl border-l-[3px] border-[#D8A02A] pl-5 sm:pl-8 py-2">
                    <p className="text-gray-600 text-sm sm:text-[16px] font-medium leading-relaxed tracking-wide">
                       {faq.a}
                    </p>
                 </div>
               </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}
