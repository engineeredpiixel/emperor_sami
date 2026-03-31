"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CommitmentSection({ hideButton = false }: { hideButton?: boolean }) {
  const [visible, setVisible] = useState(false);
  const [isScrolledOpen, setIsScrolledOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);

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

  // Omni-Scroll Direction Tracker for the Zigzag Split Frame
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!engineRef.current) return;
      const rect = engineRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollingUp = currentScrollY < lastScrollY;

      if (isVisible) {
        if (scrollingDown && currentScrollY - lastScrollY > 5) {
          setIsScrolledOpen(true);
        } else if (scrollingUp && lastScrollY - currentScrollY > 5) {
          setIsScrolledOpen(false);
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOpen = isHovered || isScrolledOpen;

  return (
    <section
      ref={sectionRef}
      className="bg-[#FCFCFC] py-24 sm:py-32 overflow-hidden border-t border-gray-100 relative"
    >
      {/* Background Texture Overlay */}
      <Image
        src="/blueprint_bg_1774895613394.png"
        alt="Blueprint Background"
        fill
        className="object-cover opacity-10 pointer-events-none mix-blend-multiply"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

        {/* ── LEFT: Content ── */}
        <div className="w-full lg:w-[50%] flex flex-col items-start">
          {/* Label */}
          <div
            className={`flex items-center gap-2 mb-6 transition-all duration-700 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <svg className="w-4 h-4 text-[#F4511E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[#F4511E] text-xs font-bold tracking-[0.2em] uppercase">
              WHY CHOOSE US
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`text-[2rem] sm:text-4xl lg:text-[2.6rem] leading-[1.2] text-[#111111] mb-6 transition-all duration-700 delay-100 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="font-light">Experienced </span>
            <span className="font-black">Builders Committed To Quality and Customer </span>
            <span className="font-light">Satisfaction Always</span>
          </h2>

          {/* Description */}
          <p
            className={`text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-[480px] transition-all duration-700 delay-200 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Emperor Sami Group means partnering with a team that values customer satisfaction above all else. We bring years of experience and a proven
          </p>

          {/* Features 2x2 grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 w-full transition-all duration-700 delay-300 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform cursor-pointer group/card">
              <div className="w-full h-[140px] relative rounded-lg overflow-hidden shrink-0">
                <Image src="/card_project_management_1774895647508.png" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" alt="Complete Project Management" />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#F9A825] flex items-center justify-center text-[#111] shadow-md z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </div>
              <span className="text-[#111111] text-[15px] font-extrabold leading-tight">Complete Project<br />Management</span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform cursor-pointer group/card">
              <div className="w-full h-[140px] relative rounded-lg overflow-hidden shrink-0">
                <Image src="/card_budget_guarantee_1774895665774.png" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" alt="On-Time, On-Budget Guarantee" />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#F9A825] flex items-center justify-center text-[#111] shadow-md z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </div>
              <span className="text-[#111111] text-[15px] font-extrabold leading-tight">On-Time, On-Budget<br />Guarantee</span>
            </div>

            {/* Feature 3 */}
            <div className="hidden sm:flex flex-col gap-4 p-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform cursor-pointer group/card">
              <div className="w-full h-[140px] relative rounded-lg overflow-hidden shrink-0">
                <Image src="/card_elite_quality_1774895683555.png" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" alt="Elite Custom Home Building Quality" />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#F9A825] flex items-center justify-center text-[#111] shadow-md z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
              </div>
              <span className="text-[#111111] text-[15px] font-extrabold leading-tight">Elite Custom Home<br />Building Quality</span>
            </div>

            {/* Feature 4 */}
            <div className="hidden sm:flex flex-col gap-4 p-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform cursor-pointer group/card">
              <div className="w-full h-[140px] relative rounded-lg overflow-hidden shrink-0">
                <Image src="/card_safety_compliant_1774895701318.png" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" alt="Fully Licensed & Insured" />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#F9A825] flex items-center justify-center text-[#111] shadow-md z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
              </div>
              <span className="text-[#111111] text-[15px] font-extrabold leading-tight">Fully Licensed & Insured<br />General Contractor</span>
            </div>
          </div>

          {/* CTA Button */}
          {!hideButton && (
            <div
              className={`flex items-center gap-3 transition-all duration-700 delay-400 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <Link
                href="/about"
                className="bg-[#F9A825] hover:bg-[#F4511E] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#F9A825]/30 hover:shadow-[#F4511E]/40 active:scale-95"
              >
                More About Us
              </Link>
              <Link
                href="/about"
                className="w-12 h-12 rounded-full bg-[#F9A825] hover:bg-[#F4511E] text-white flex items-center justify-center transition-all shadow-lg shadow-[#F9A825]/30 hover:shadow-[#F4511E]/40 group active:scale-95"
              >
                <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* ── RIGHT: The Zigzag Split-Frame Engine ── */}
        <div
          className={`relative w-full lg:w-[50%] flex justify-end transition-all duration-700 delay-300 mt-12 lg:mt-0 will-change-transform ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
        >
          {/* Main frame container */}
          <div
            ref={engineRef}
            className={`relative w-[95%] lg:w-[90%] aspect-[4/3] z-10 group/engine drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)] cursor-pointer rounded-[4px] ${isOpen ? "is-open" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsScrolledOpen(!isScrolledOpen)}
          >

            {/* Layer 0: The Core Matrix (Inner Masterpiece) */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black rounded-[4px]">
              <Image
                src="/custom_home_interior_1774895577855.png"
                alt="Luxury custom home interior"
                fill
                className="object-cover transition-all duration-[2.5s] ease-out scale-100 group-[.is-open]/engine:scale-110 opacity-30 group-[.is-open]/engine:opacity-100 will-change-transform"
              />
              {/* Inner label on hover */}
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-[.is-open]/engine:opacity-100 transition-opacity duration-[1.5s] delay-300 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-full text-xs shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  Masterpiece Revealed
                </span>
              </div>
            </div>

            {/* Layer 1: Apex Shell (Top Left Brick Wall) */}
            <div
              className="absolute inset-0 w-full h-full z-20 transition-all duration-[1s] ease-[0.25,1,0.5,1] will-change-transform group-[.is-open]/engine:-translate-x-6 group-[.is-open]/engine:-translate-y-6 md:group-[.is-open]/engine:-translate-x-12 md:group-[.is-open]/engine:-translate-y-12 lg:group-[.is-open]/engine:-translate-x-24 lg:group-[.is-open]/engine:-translate-y-24 group-[.is-open]/engine:drop-shadow-[15px_15px_25px_rgba(0,0,0,0.85)] drop-shadow-[0px_0px_0px_rgba(0,0,0,0)]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 80% 20%, 80% 40%, 60% 40%, 60% 60%, 40% 60%, 40% 80%, 20% 80%, 20% 100%, 0 100%)' }}
            >
              <Image src="/custom_home_exterior_1774895595441.png" alt="Premium home foundation" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-[.is-open]/engine:bg-black/30 transition-colors duration-[1s]" />
            </div>

            {/* Layer 2: Base Shell (Bottom Right Brick Wall) */}
            <div
              className="absolute inset-0 w-full h-full z-10 transition-all duration-[1s] ease-[0.25,1,0.5,1] will-change-transform group-[.is-open]/engine:translate-x-6 group-[.is-open]/engine:translate-y-6 md:group-[.is-open]/engine:translate-x-12 md:group-[.is-open]/engine:translate-y-12 lg:group-[.is-open]/engine:translate-x-24 lg:group-[.is-open]/engine:translate-y-24 group-[.is-open]/engine:drop-shadow-[-15px_-15px_25px_rgba(0,0,0,0.85)] drop-shadow-[0px_0px_0px_rgba(0,0,0,0)]"
              style={{ clipPath: 'polygon(100% 20%, 100% 100%, 20% 100%, 20% 80%, 40% 80%, 40% 60%, 60% 60%, 60% 40%, 80% 40%, 80% 20%)' }}
            >
              <Image src="/custom_home_exterior_1774895595441.png" alt="Premium home foundation" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-[.is-open]/engine:bg-black/50 transition-colors duration-[1s]" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
