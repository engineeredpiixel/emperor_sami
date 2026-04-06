"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { generateMegaMenuData } from "@/lib/megaMenuData";
import { useCMS } from "@/components/CMSProvider";

export default function Navbar() {
  const { t, getRaw } = useCMS();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const megaMenuData = useMemo(() => generateMegaMenuData(t), [t]);

  const hwIcons = [
    <svg key={0} className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    <svg key={1} className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
    <svg key={2} className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  ];

  const handleServicesEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {
      label: t("navbar.link_services") || "Services",
      href: "/services",
      hasMegaMenu: true,
    },
    { label: t("navbar.link_service_area") || "Service Area", href: "/service-area" },
    { label: t("navbar.link_projects") || "Projects", href: "/projects" },
    { label: t("navbar.link_about") || "About Us", href: "/about" },
    { label: t("navbar.link_contact") || "Contact Us", href: "/contact#secure-data-link" },
  ];

  /* ── Shared cubic-bezier transition ── */
  const transitionStyle = {
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  if (['/login', '/forgot-password', '/reset-password'].includes(pathname) || pathname?.startsWith('/admin')) return null;

  return (
    <div className="sticky top-[-48px] w-full z-[9999] bg-transparent">
      {/* ═══ TOP UTILITY BAR ═══ */}
      <div
        ref={topBarRef}
        className="bg-white border-b border-gray-100 w-full relative z-[9998] h-12"
      >
        <div className="flex items-center h-12 px-8 sm:px-12 lg:px-20 xl:px-28 relative">
          {/* Glowing accent line */}
          <span className="glow-line absolute left-8 sm:left-12 lg:left-20 xl:left-28 top-0 bottom-0 w-1 bg-[#F9A825]" />
          <span className="w-1 mr-4 flex-shrink-0" />

          <p className="text-sm text-gray-600 font-normal flex-1">
            {t("navbar.top_bar_text") || "Need a Reliable Contractor in the Toronto Area?"}{" "}
            <Link
              href="/contact#secure-data-link"
              className="text-gray-800 font-medium underline underline-offset-2 hover:text-[#F9A825] transition-colors"
            >
              {t("navbar.top_bar_link_text") || "Contact Us"}
            </Link>
          </p>

          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`mailto:${t("navbar.top_bar_email") || t("contact.email")}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#F9A825] transition-colors"
            >
              <svg
                className="w-4 h-4 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              {t("navbar.top_bar_email") || t("contact.email")}
            </a>

            <a
              href={`tel:${(t("navbar.top_bar_phone") || t("contact.phone")).replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-2 bg-[#F9A825] hover:bg-[#F4511E] text-[#1a1209] hover:text-white text-sm font-semibold px-5 py-1.5 rounded transition-colors"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5.5A1.5 1.5 0 014.5 4h1.379a1 1 0 01.949.684l1.05 3.15a1 1 0 01-.23 1.02L6.5 10a11.042 11.042 0 005.5 5.5l1.146-1.148a1 1 0 011.02-.23l3.15 1.05A1 1 0 0118 16.121V17.5A1.5 1.5 0 0116.5 19C9.044 19 3 12.956 3 5.5z"
              />
            </svg>
            {t("navbar.top_bar_phone") || t("contact.phone")}
          </a>
          </div>
        </div>
      </div>

      {/* ═══ PRIMARY NAVIGATION BAR ═══ */}
      <div className="relative w-full z-[9999]">
        <nav
          style={transitionStyle}
          className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 mx-8 sm:mx-12 lg:mx-20 xl:mx-28 relative"
        >
          {/* Glowing accent line */}
          <span
            style={transitionStyle}
            className={`glow-line absolute left-0 top-0 bottom-0 w-1 ${scrolled ? "bg-[#F4511E]" : "bg-[#F9A825]"
              }`}
          />

          <div className="flex items-center justify-between h-20 pl-6 pr-4 sm:pl-7 sm:pr-5 lg:pl-8 lg:pr-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                {t("navbar.logo_image") ? (
                  <img src={t("navbar.logo_image")} alt="Emperor Sami Logo" className="h-10 w-auto object-contain flex-shrink-0" />
                ) : (
                  <svg
                    className="w-10 h-10 text-[#b8960c] flex-shrink-0"
                    viewBox="0 0 40 40"
                    fill="currentColor"
                  >
                    <path d="M20 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                    <path d="M10 18c-2 2-3 5-3 8 0 4 3 7 6 9l7 3 7-3c3-2 6-5 6-9 0-3-1-6-3-8" opacity="0.6" />
                    <path d="M14 20c0 0-2 3 0 6s6 4 6 4 4-1 6-4 0-6 0-6" opacity="0.4" />
                  </svg>
                )}
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-[17px] tracking-[0.1em] uppercase">
                    {t("navbar.brand_name")}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-2 h-full">
              {navLinks.map((link) =>
                link.hasMegaMenu ? (
                  <div 
                    key={link.label} 
                    className="group h-full flex items-center"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <button
                      onClick={() => setServicesOpen(prev => !prev)}
                      className="flex items-center gap-1.5 px-5 py-2 text-[13px] font-semibold text-white/90 tracking-[0.15em] uppercase hover:text-white transition-colors"
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 mt-px opacity-60 transition-transform duration-300 ${servicesOpen ? "-rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={`absolute top-full left-0 w-full bg-[#111111]/98 backdrop-blur-2xl border-t-2 border-[#b8960c] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 transition-all duration-300 transform origin-top ${
                        servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                      }`}
                    >
                      <div className="mx-auto max-w-[1450px] p-10 grid grid-cols-14 gap-8 xl:gap-12 bg-gradient-to-b from-white/[0.02] to-transparent">
                        {/* Column 1: Residential */}
                        <div className="col-span-5 flex flex-col gap-6">
                          <div>
                            <h3 className="text-white text-lg font-bold tracking-wider uppercase mb-1">{megaMenuData.residential.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed max-w-[90%]">{megaMenuData.residential.description}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                            {megaMenuData.residential.sections.map((section: any, idx: number) => (
                              <div key={idx}>
                                <h4 className="text-[#b8960c] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">{section.title}</h4>
                                <ul className="flex flex-col gap-2.5">
                                  {section.items.map((item: any, iData: number) => (
                                    <li key={iData}>
                                      <Link href={item.href} className="group/item flex items-center text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-700 mr-2.5 group-hover/item:bg-[#F9A825] transition-colors" />
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Commercial */}
                        <div className="col-span-5 flex flex-col gap-6 border-l border-white/5 pl-8 xl:pl-10">
                          <div>
                            <h3 className="text-white text-lg font-bold tracking-wider uppercase mb-1">{megaMenuData.commercial.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed max-w-[90%]">{megaMenuData.commercial.description}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                            {megaMenuData.commercial.sections.map((section: any, idx: number) => (
                              <div key={idx}>
                                <h4 className="text-[#b8960c] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">{section.title}</h4>
                                <ul className="flex flex-col gap-2.5">
                                  {section.items.map((item: any, iData: number) => (
                                    <li key={iData}>
                                      <Link href={item.href} className="group/item flex items-center text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-700 mr-2.5 group-hover/item:bg-[#F9A825] transition-colors" />
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: How It Works */}
                        <div className="col-span-4 bg-[url('/grid-pattern.svg')] bg-[length:24px_24px] bg-center bg-[#111]/80 rounded-xl border border-white/10 p-8 flex flex-col h-full relative overflow-hidden backdrop-blur-xl group/hw">
                          {/* Premium Accent Glows */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F9A825]/20 to-transparent blur-[80px] rounded-full pointer-events-none opacity-50 group-hover/hw:opacity-100 transition-opacity duration-700" />
                          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#D8A02A]/10 to-transparent blur-[60px] rounded-full pointer-events-none" />
                          
                          <div className="flex items-center justify-between mb-8 relative z-10 border-b border-white/10 pb-4">
                            <h3 className="text-white text-[12px] font-black tracking-[0.3em] uppercase">{megaMenuData.howItWorks.title}</h3>
                            <div className="w-8 h-px bg-gradient-to-r from-[#F9A825] to-transparent" />
                          </div>
                          
                          <div className="flex flex-col gap-8 flex-1 relative z-10">
                            {megaMenuData.howItWorks.steps.map((step: any, idx: number) => (
                              <div key={idx} className="flex items-start gap-5 group/step">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center transform group-hover/step:rotate-3 transition-all duration-300 shadow-xl relative overflow-hidden">
                                  <div className="absolute inset-0 bg-gradient-to-b from-[#F9A825]/20 to-transparent opacity-0 group-hover/step:opacity-100 transition-opacity duration-500" />
                                  {step.icon || hwIcons[idx % 3]}
                                </div>
                                <div className="flex flex-col pt-0.5">
                                  <h4 className="text-white font-bold text-[14px] group-hover/step:text-[#F9A825] transition-colors duration-300">{step.title}</h4>
                                  <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">{step.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-10 flex flex-col gap-3 relative z-10">
                            <Link href="/contact#secure-data-link" className="w-full text-center bg-[#F9A825] hover:bg-[#F4511E] text-[#111] font-black uppercase tracking-[0.2em] py-4 rounded-sm transition-all duration-500 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(249,168,37,0.2)] hover:shadow-[0_15px_40px_rgba(244,81,30,0.4)] relative overflow-hidden group/cta">
                               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]" />
                               {t("nav.mega.how.btn_book") || "Book A Free Strategy Call"}
                            </Link>
                            <Link href="/services" className="w-full text-center py-3 text-[11px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors font-bold group/btn">
                              {t("nav.mega.how.btn_view") || "View All Services"} <span className="inline-block transition-transform group-hover/btn:translate-x-2">&rarr;</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-5 py-2 text-[13px] font-semibold text-white/90 tracking-[0.15em] uppercase hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Phone number + Get In Touch (desktop) */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Phone */}
              <a href={`tel:${(t("navbar.main_phone") || t("contact.phone")).replace(/[^0-9]/g, "")}`} className="flex items-center gap-3 group">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#2a2218] group-hover:bg-[#3a3020] transition-colors">
                  <svg className="w-5 h-5 text-[#b8960c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A1.5 1.5 0 014.5 4h1.379a1 1 0 01.949.684l1.05 3.15a1 1 0 01-.23 1.02L6.5 10a11.042 11.042 0 005.5 5.5l1.146-1.148a1 1 0 011.02-.23l3.15 1.05A1 1 0 0118 16.121V17.5A1.5 1.5 0 0116.5 19C9.044 19 3 12.956 3 5.5z" />
                  </svg>
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-gray-400 font-medium">{t("navbar.main_phone_label") || "Call Us:"}</span>
                  <span className="text-sm text-white font-semibold">{t("navbar.main_phone") || t("contact.phone")}</span>
                </div>
              </a>

              {/* Get In Touch button */}
              <a
                href="/contact#secure-data-link"
                className="group flex items-center gap-0 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center bg-[#F9A825] group-hover:bg-[#F4511E] text-[#1a1209] group-hover:text-white font-bold text-sm pl-7 pr-5 py-3.5 rounded-l-full transition-all duration-300 whitespace-nowrap">
                  {t("navbar.cta_button") || "Get a Quote"}
                </span>
                <span className="flex items-center justify-center w-12 h-12 bg-[#F9A825] group-hover:bg-[#F4511E] rounded-r-full border-l border-[#e6960c]/30 transition-all duration-300">
                  <svg className="w-4 h-4 text-[#1a1209] group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#b8960c] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-4 pb-5 overflow-y-auto max-h-[85vh]">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <div className="flex items-center justify-between border-b border-white/5 group">
                    <Link
                      href={link.href}
                      onClick={() => !link.hasMegaMenu && setMenuOpen(false)}
                      className="block flex-1 py-4 text-sm font-semibold text-white/90 tracking-[0.12em] uppercase group-hover:text-[#b8960c] transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.hasMegaMenu && (
                      <button 
                        onClick={() => setServicesOpen(!servicesOpen)} 
                        className="px-4 py-4 text-white/60 hover:text-[#b8960c]"
                      >
                        <svg className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Mega Menu Expansion */}
                  {link.hasMegaMenu && servicesOpen && (
                    <div className="bg-black/40 pl-4 py-3 my-2 border-l-2 border-[#b8960c] rounded-r-md">
                      {/* Mobile Residential */}
                      <div className="mb-5">
                        <h4 className="text-[#b8960c] text-[11px] font-bold tracking-[0.15em] uppercase mb-3 border-b border-white/5 pb-2">{megaMenuData.residential.title}</h4>
                        {megaMenuData.residential.sections.map((sec: any, i: number) => (
                          <div key={i} className="mb-4">
                            <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2 block">{sec.title}</span>
                            <div className="flex flex-col gap-2">
                              {sec.items.map((item: any, j: number) => (
                                <Link key={j} onClick={() => setMenuOpen(false)} href={item.href} className="flex items-center text-[12px] text-gray-300 hover:text-white transition-colors group/item">
                                  <span className="w-1 h-1 rounded-full bg-gray-700 mr-2 group-hover/item:bg-[#F9A825]" />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Mobile Commercial */}
                      <div className="mb-2 mt-4 pt-4 border-t border-white/5">
                         <h4 className="text-[#b8960c] text-[11px] font-bold tracking-[0.15em] uppercase mb-3 border-b border-white/5 pb-2">{megaMenuData.commercial.title}</h4>
                         {megaMenuData.commercial.sections.map((sec: any, i: number) => (
                          <div key={i} className="mb-4">
                            <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2 block">{sec.title}</span>
                            <div className="flex flex-col gap-2">
                              {sec.items.map((item: any, j: number) => (
                                <Link key={j} onClick={() => setMenuOpen(false)} href={item.href} className="flex items-center text-[12px] text-gray-300 hover:text-white transition-colors group/item">
                                  <span className="w-1 h-1 rounded-full bg-gray-700 mr-2 group-hover/item:bg-[#F9A825]" />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mobile How It Works brief */}
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <Link onClick={() => setMenuOpen(false)} href="/services" className="inline-flex items-center justify-center w-full bg-[#1a1a1a] text-white/90 text-xs font-bold uppercase tracking-widest py-3 rounded border border-white/10 hover:bg-[#F9A825] hover:text-[#111] transition-all">
                          {t("navbar.btn_view_services") || "View All Services →"}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-5 flex flex-col gap-3 pt-4 border-t border-white/10">
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="text-sm text-gray-400 hover:text-[#b8960c] transition-colors"
                >
                  ✉ {t("contact.email")}
                </a>
                <a
                  href={`tel:${t("contact.phone").replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-2 bg-[#F9A825] text-[#1a1209] text-sm font-semibold px-4 py-2 rounded w-fit hover:bg-[#F4511E] hover:text-white transition-colors"
                >
                  📞 {t("contact.phone")}
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>

    </div>
  );
}
