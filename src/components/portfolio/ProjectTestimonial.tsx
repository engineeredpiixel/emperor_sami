"use client";

import { ProjectType } from "@/lib/projectsData";

export default function ProjectTestimonial({ data }: { data: ProjectType }) {
  if (!data.testimonial) return null;

  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F5F5F5] font-black text-[120px] sm:text-[200px] leading-none whitespace-nowrap opacity-50 z-0 pointer-events-none select-none uppercase tracking-tighter">
        Feedback
      </div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        <div className="mb-10 text-[#D8A02A]">
           <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto opacity-40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
           </svg>
        </div>

        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111] leading-[1.3] sm:leading-[1.4] tracking-tight mb-12">
          &ldquo;{data.testimonial.quote}&rdquo;
        </h3>

        <div className="flex flex-col items-center">
            <div className="w-12 h-[2px] bg-[#D8A02A] mb-6" />
            <span className="text-xl font-black uppercase tracking-widest text-[#111]">{data.testimonial.author}</span>
            {data.testimonial.role && (
                <span className="mt-2 text-sm font-bold text-gray-500 uppercase tracking-widest">{data.testimonial.role}</span>
            )}
        </div>

      </div>
    </section>
  );
}
