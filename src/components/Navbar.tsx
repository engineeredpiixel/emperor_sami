"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
      children: [
        { label: "Custom Home Building", href: "/services/custom-home-building" },
        { label: "High-End Renovations", href: "/services/high-end-renovations" },
        { label: "Basement Optimization", href: "/services/basement-optimization" },
        { label: "Project Management", href: "/services/project-management" },
        { label: "Architectural Drafting", href: "/services/architectural-drafting" },
        { label: "Exterior Improvement", href: "/services/exterior-improvements" },
      ],
    },
    { label: "Service Area", href: "/service-area" },
    { label: "Projects", href: "/projects" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact#secure-data-link" },
  ];

  /* ── Shared cubic-bezier transition ── */
  const transitionStyle = {
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <>
      {/* ═══ TOP UTILITY BAR ═══
          - Scroll > 50px → translateY(-100%)  (hidden)
          - Scroll ≤ 50px → translateY(0)      (visible)  */}
      <div
        ref={topBarRef}
        style={transitionStyle}
        className={`bg-white border-b border-gray-100 w-full relative z-[9998] ${scrolled
          ? "-translate-y-full opacity-0 pointer-events-none h-0 overflow-hidden"
          : "translate-y-0 opacity-100 h-12"
          }`}
      >
        <div className="flex items-center h-12 px-8 sm:px-12 lg:px-20 xl:px-28 relative">
          {/* Glowing accent line */}
          <span className="glow-line absolute left-8 sm:left-12 lg:left-20 xl:left-28 top-0 bottom-0 w-1 bg-[#F9A825]" />
          <span className="w-1 mr-4 flex-shrink-0" />

          <p className="text-sm text-gray-600 font-normal flex-1">
            Need a Reliable Contractor in the Toronto Area?{" "}
            <Link
              href="/contact#secure-data-link"
              className="text-gray-800 font-medium underline underline-offset-2 hover:text-[#F9A825] transition-colors"
            >
              Contact Us
            </Link>
          </p>

          <div className="hidden sm:flex items-center gap-5">
            <a
              href="mailto:info@emperorsamigroup.com"
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
              info@emperorsamigroup.com
            </a>

            <a
              href="tel:6479011626"
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
              (647) 901-1626
            </a>
          </div>
        </div>
      </div>

      {/* ═══ PRIMARY NAVIGATION BAR ═══
          - Scroll > 50px → position:fixed, top:0, z-index:9999
          - Scroll ≤ 50px → position:relative                    */}
      <div
        style={{
          ...transitionStyle,
          zIndex: 9999,
          position: scrolled ? "fixed" : "relative",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
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
                <svg
                  className="w-10 h-10 text-[#b8960c] flex-shrink-0"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                >
                  <path d="M20 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                  <path d="M10 18c-2 2-3 5-3 8 0 4 3 7 6 9l7 3 7-3c3-2 6-5 6-9 0-3-1-6-3-8" opacity="0.6" />
                  <path d="M14 20c0 0-2 3 0 6s6 4 6 4 4-1 6-4 0-6 0-6" opacity="0.4" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-lg tracking-[0.2em] uppercase">
                    Emperor Sami
                  </span>
                  <span className="text-[#b8960c] text-[10px] tracking-[0.35em] font-semibold uppercase mt-0.5">
                    Group
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative group">
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="flex items-center gap-1.5 px-5 py-2 text-[13px] font-semibold text-white/90 tracking-[0.15em] uppercase hover:text-white transition-colors"
                    >
                      {link.label}
                      <svg
                        className="w-3 h-3 mt-px opacity-60"
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

                    {servicesOpen && (
                      <div
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        className="absolute top-full left-0 bg-[#111111] border-t-2 border-[#b8960c] shadow-2xl min-w-[200px] z-50"
                      >
                        {link.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-3 text-sm text-gray-300 hover:text-[#b8960c] hover:bg-white/5 transition-colors tracking-wide"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
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
              <a href="tel:6479011626" className="flex items-center gap-3 group">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#2a2218] group-hover:bg-[#3a3020] transition-colors">
                  <svg className="w-5 h-5 text-[#b8960c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A1.5 1.5 0 014.5 4h1.379a1 1 0 01.949.684l1.05 3.15a1 1 0 01-.23 1.02L6.5 10a11.042 11.042 0 005.5 5.5l1.146-1.148a1 1 0 011.02-.23l3.15 1.05A1 1 0 0118 16.121V17.5A1.5 1.5 0 0116.5 19C9.044 19 3 12.956 3 5.5z" />
                  </svg>
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-gray-400 font-medium">Call Us:</span>
                  <span className="text-sm text-white font-semibold">(647) 901-1626</span>
                </div>
              </a>

              {/* Get In Touch button */}
              <a
                href="/contact#secure-data-link"
                className="group flex items-center gap-0 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center bg-[#F9A825] group-hover:bg-[#F4511E] text-[#1a1209] group-hover:text-white font-bold text-sm pl-7 pr-5 py-3.5 rounded-l-full transition-all duration-300">
                  Get In Touch
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
            <div className="lg:hidden bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 px-4 pb-5">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-sm font-semibold text-white/90 tracking-[0.12em] uppercase border-b border-white/5 hover:text-[#b8960c] transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown &&
                    link.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block pl-4 py-2.5 text-sm text-gray-400 hover:text-[#b8960c] transition-colors"
                      >
                        — {child.label}
                      </Link>
                    ))}
                </div>
              ))}
              <div className="mt-5 flex flex-col gap-3 pt-4 border-t border-white/10">
                <a
                  href="mailto:info@emperorsamigroup.com"
                  className="text-sm text-gray-400 hover:text-[#b8960c] transition-colors"
                >
                  ✉ info@emperorsamigroup.com
                </a>
                <a
                  href="tel:6479011626"
                  className="inline-flex items-center gap-2 bg-[#F9A825] text-[#1a1209] text-sm font-semibold px-4 py-2 rounded w-fit hover:bg-[#F4511E] hover:text-white transition-colors"
                >
                  📞 (647) 901-1626
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* ═══ CLS PREVENTION SPACER ═══
          When navbar goes fixed, this spacer occupies its original
          80px height so content below doesn't jump up.            */}
      {scrolled && <div className="h-20" aria-hidden="true" />}
    </>
  );
}
