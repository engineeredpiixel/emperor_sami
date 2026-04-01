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
        
        {/* Overall Google Review Badge at top */}
        <div className="flex items-center justify-center gap-3 mb-10 bg-black/5 px-4 py-2.5 rounded-full border border-black/10 w-fit mx-auto transition-transform hover:scale-105">
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-[#111] text-[15px] font-bold mt-px">5.0</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#D8A02A]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            ))}
          </div>
          <span className="text-gray-600 text-[11px] uppercase tracking-wider font-bold ml-1 mt-0.5 whitespace-nowrap">84 Reviews</span>
        </div>

        <div className="flex gap-1.5 justify-center mb-8">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-[#D8A02A]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          ))}
        </div>

        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111] leading-[1.3] sm:leading-[1.4] tracking-tight mb-12 relative z-10 w-full max-w-4xl">
          <svg className="w-10 h-10 sm:w-16 sm:h-16 absolute -top-10 -left-6 sm:-top-12 sm:-left-12 opacity-10 text-[#D8A02A] -z-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
          &ldquo;{data.testimonial.quote}&rdquo;
        </h3>

        <div className="flex flex-col items-center">
            <div className="w-12 h-[2px] bg-[#D8A02A] mb-6" />
            <div className="flex items-center gap-2">
                <span className="text-xl font-black uppercase tracking-widest text-[#111]">{data.testimonial.author}</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
            </div>
            {data.testimonial.role && (
                <span className="mt-2 text-sm font-bold text-gray-500 uppercase tracking-widest">{data.testimonial.role}</span>
            )}
        </div>

      </div>
    </section>
  );
}
