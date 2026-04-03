"use client";

import Image from "next/image";
import Link from "next/link";
import { useCMS } from "@/components/CMSProvider";

export default function Footer() {
  const { t } = useCMS();
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FAF9F6] pt-[6rem] sm:pt-[8rem]">
      <footer className="relative w-full bg-[#0d1013] pt-32 sm:pt-36 pb-10">
      
      {/* Stunning Luxury Home Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image 
          src="/footer_luxury_bg.png" 
          alt="Emperor Sami Luxury Background" 
          fill 
          sizes="100vw"
          className="object-cover opacity-[0.12] mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0e] via-black/60 to-[#080B10]" />
      </div>

      {/* ── TOP OVERLAPPING BANNER ── */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-20 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row w-full gap-6 lg:gap-8">
          
          {/* Left: Image Block */}
          <Link href="/about#team" className="block w-full md:w-1/2 relative min-h-[160px] sm:min-h-[180px] group flex items-end rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] cursor-pointer">
            <Image 
              src="/luxury_architect_team.png" 
              alt="Emperor Sami Group Expert Team" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark gradient to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="relative z-10 p-5 sm:p-6 w-full text-center">
              <h3 className="text-white text-xl sm:text-2xl font-black tracking-wide shadow-black drop-shadow-md">
                Meet Our Expert Team
              </h3>
            </div>
          </Link>

          {/* Right: Yellow Subscription Box */}
          <div className="w-full md:w-1/2 bg-[#D8A02A] p-6 sm:p-8 hidden md:flex md:flex-col justify-center rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <h3 className="text-[#111111] text-[1.3rem] sm:text-[1.5rem] font-black leading-tight mb-2 drop-shadow-sm">
              Get in Touch with Our Construction Experts Today
            </h3>
            <p className="text-[#2a1a09] text-[13px] font-medium leading-relaxed mb-4 max-w-[480px]">
              Ready to protect your home with a new build or renovation? One call or email and we&apos;ll take it from there!
            </p>
            
            {/* Input Form */}
            <form className="flex flex-col lg:flex-row gap-0 w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email Address.."
                aria-label="Your Email Address"
                required
                className="flex-1 bg-black/10 border-none text-[#111111] placeholder-[#4a3512] px-5 py-4 focus:outline-none focus:bg-black/15 transition-all font-medium text-[15px] outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#111] hover:bg-gray-100 font-bold uppercase tracking-widest text-[14px] px-8 py-4 whitespace-nowrap transition-colors flex items-center justify-center"
              >
                SUBSCRIBE
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ── MAIN DARK FOOTER CONTENT ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* 4-COLUMN GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 sm:gap-x-8 lg:gap-8 mb-16 border-b border-white/5 pb-16">

            {/* Column 1: Logo & About */}
            <div className="col-span-2 lg:col-span-1 flex flex-col items-start pr-0 lg:pr-8">
              {/* Logo Re-created precisely */}
              <Link href="/" className="mb-6 group">
                <span className="text-2xl font-black text-white tracking-widest uppercase flex flex-col leading-none">
                  <span className="flex items-center gap-2">
                    <span className="text-white group-hover:text-white transition-colors">
                      <svg viewBox="0 0 40 20" className="h-6 w-auto" fill="currentColor">
                        <path d="M15,20 L20,10 L25,20 Z" />
                        <path d="M18,10 L20,6 L22,10 Z" fill="#D8A02A" />
                      </svg>
                    </span>
                    EMPEROR SAMI
                  </span>
                  <span className="text-gray-400 text-sm tracking-[0.3em] ml-10 transition-colors">GROUP</span>
                </span>
              </Link>

              <p className="text-[#899197] text-[15px] leading-relaxed mb-8">
                {t("footer.description") || "With over 25 years of experience in residential construction, we have built our reputation on delivering exceptional craftsmanship, honest communication, and unwavering commitment to our clients' vision."}
              </p>

              {/* Social Icons matching exactly */}
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Facebook Profile" className="w-10 h-10 rounded-full bg-[#D8A02A] text-white flex items-center justify-center hover:bg-[#C28C22] transition-colors shadow-lg shadow-[#D8A02A]/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram Profile" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" aria-label="Twitter Profile" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="Houzz Profile" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Top Links */}
            <div className="flex flex-col pt-2">
              <h4 className="text-white text-[18px] font-bold mb-8">Top Links</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/about" className="text-[#899197] text-[15px] hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#services" className="text-[#899197] text-[15px] hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="/service-area" className="text-[#899197] text-[15px] hover:text-white transition-colors">Service Area</Link></li>
                <li><Link href="/projects" className="text-[#899197] text-[15px] hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/contact" className="text-[#899197] text-[15px] hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="flex flex-col pt-2">
              <h4 className="text-white text-[18px] font-bold mb-8">Our Services</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/services/custom-home-building" className="text-[#899197] text-[15px] hover:text-white transition-colors">Custom Home Building</Link></li>
                <li><Link href="/services/high-end-renovations" className="text-[#899197] text-[15px] hover:text-white transition-colors">High-End Renovations</Link></li>
                <li><Link href="/services/basement-optimization" className="text-[#899197] text-[15px] hover:text-white transition-colors">Basement Optimization</Link></li>
                <li><Link href="/services/project-management" className="text-[#899197] text-[15px] hover:text-white transition-colors">Project Management</Link></li>
                <li><Link href="/services/architectural-drafting" className="text-[#899197] text-[15px] hover:text-white transition-colors">Architectural Drafting</Link></li>
                <li><Link href="/services/exterior-improvements" className="text-[#899197] text-[15px] hover:text-white transition-colors">Exterior Improvements</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="col-span-2 lg:col-span-1 flex flex-col pt-2">
              <h4 className="text-white text-[18px] font-bold mb-8">Contact Us</h4>
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-4 group">
                  <svg className="w-[18px] h-[18px] text-[#D8A02A] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${(t("contact.phone") || "+16479011626").replace(/[^0-9+]/g, '')}`} className="text-[#899197] text-[15px] group-hover:text-white transition-colors">
                    {t("contact.phone") || "+1 647 901 1626"}
                  </a>
                </li>
                <li className="flex items-start gap-4 group">
                  <svg className="w-[18px] h-[18px] text-[#D8A02A] mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[#899197] text-[15px] leading-relaxed">
                    {t("contact.location") || "Toronto, Ontario"}
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <svg className="w-[18px] h-[18px] text-[#D8A02A] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${t("contact.email") || "info@emperorsamigroup.com"}`} className="text-[#899197] text-[15px] group-hover:text-white transition-colors">
                    {t("contact.email") || "info@emperorsamigroup.com"}
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 font-medium pr-12 lg:pr-10 relative">

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-[#777E85] text-[13px] text-center sm:text-left">
              <span>{t("footer.copyright") || "Copyright ©2026 Emperor Sami Group. All Rights Reserved"}</span>
              <span className="hidden sm:inline">|</span>
              <span>Custom Home Building & Renovations in Toronto</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-[#777E85] text-[13px]">
              <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>

          </div>

        </div>

      {/* FOOTER SCROLL TO TOP (Right Aligned Bottom Corner) */}
      <div className="absolute right-0 bottom-0 z-40">
        <button
          onClick={scrollToTop}
          className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] bg-[#D8A02A] hover:bg-[#C28C22] text-white flex items-center justify-center transition-colors shadow-2xl"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      </footer>
    </div>
  );
}
