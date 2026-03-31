"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full h-[420px] sm:h-[460px] lg:h-[260px] overflow-hidden group cursor-pointer z-10">
      {/* Background Image */}
      <Image
        src="/cta_dream_home_dusk_1774903473288.png"
        fill
        className="object-cover transition-transform duration-[3s] group-hover:scale-105"
        alt="Build Your Dream Home Background"
        priority
      />

      {/* Premium Emperor Sami Tint Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00050A]/95 via-[#001D3D]/90 to-[#00BFFF]/40 mix-blend-multiply border-y border-[#00BFFF]/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(26,17,9,0.7)_0%,_transparent_70%)]"></div>

      {/* Content Wrapper */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between z-10">

        {/* Left: Typography */}
        <div className="text-center lg:text-left flex-1 max-w-3xl w-full mb-3 lg:mb-0 mt-4 lg:mt-0">
          <h2 className="text-[2rem] sm:text-5xl lg:text-[3.15rem] leading-[1.2] text-white tracking-wide">
            <span className="font-light text-white/95">Let&apos;s Build Your </span>
            <span className="font-black text-white drop-shadow-md">Dream<br />
              Home Today</span>
            <span className="font-light text-white/95"> – Contact Us<br />
              For A Consultation!</span>
          </h2>
        </div>

        {/* Right: Spinning Circular Button */}
        <div className="shrink-0 transform -translate-y-3 lg:-translate-y-2">
          <a href="/contact#secure-data-link" className="relative w-36 h-36 lg:w-[180px] lg:h-[180px] rounded-full bg-[#F4511E] flex items-center justify-center group/btn shadow-[0_0_50px_rgba(244,81,30,0.6)] hover:shadow-[0_0_80px_rgba(244,81,30,0.9)] transition-shadow duration-500 cursor-pointer block">

            {/* Spinning Text SVG Ring */}
            <svg className="absolute inset-[6px] w-[92%] h-[92%] animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
              </defs>
              <text className="text-[10px] font-bold tracking-[0.2em] uppercase fill-white/95">
                <textPath href="#circlePath" textLength="230" startOffset="0%">
                  Schedule A Call. Schedule A Call.
                </textPath>
              </text>
            </svg>

            {/* Inner Arrow Circle */}
            <div className="absolute inset-[32px] lg:inset-[42px] rounded-full bg-black/25 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-500 will-change-transform group-hover/btn:scale-110 group-hover/btn:bg-white group-hover/btn:border-white">
              <svg className="w-6 h-6 lg:w-9 lg:h-9 text-[#F9A825] group-hover/btn:text-[#F4511E] transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
