"use client";

import { useEffect, useRef, useState } from "react";
import { residentialServicesData } from "@/lib/servicesDataResidential";
import { commercialServicesData } from "@/lib/servicesDataCommercial";
import { useCMS } from "@/components/CMSProvider";

export default function ContactSection() {
  const { t } = useCMS();
  const [visible, setVisible] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setIsOpened(true), 1500);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative bg-[#2A322D] py-24 sm:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* ── LEFT: Text & Contact Info ── */}
          <div className="w-full lg:w-1/2 flex flex-col items-start pt-4">

            {/* Label */}
            <div className={`flex items-center gap-2 mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <svg className="w-4 h-4 text-[#D19C2C]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-[#D19C2C] text-sm font-bold tracking-[0.15em] uppercase">
                {t("contact.badge_text")}
              </span>
            </div>

            {/* Heading */}
            <h2 
              className={`text-[2.5rem] sm:text-5xl lg:text-[3.2rem] leading-[1.1] font-black text-white mb-6 tracking-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              dangerouslySetInnerHTML={{
                __html: t("contact.headline").replace("Your Property?", `<br /> Your Property?`)
              }}
            />

            {/* Description */}
            <p className={`text-gray-300 text-base sm:text-[1.05rem] leading-relaxed mb-12 max-w-[500px] font-medium transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {t("contact.description")}
            </p>

            {/* Contact Details List */}
            <div className={`flex flex-col gap-8 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-[#A38D35]/20 border border-[#A38D35]/30 rounded-md flex items-center justify-center text-[#D19C2C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-white font-bold text-[1.05rem] mb-1">Phone</span>
                  <a href={`tel:${t("contact.phone").replace(/[^0-9]/g, '')}`} className="text-gray-400 text-[15px] font-medium hover:text-[#D19C2C] transition-colors">{t("contact.phone")}</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-[#A38D35]/20 border border-[#A38D35]/30 rounded-md flex items-center justify-center text-[#D19C2C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-white font-bold text-[1.05rem] mb-1">Email</span>
                  <a href={`mailto:${t("contact.email")}`} className="text-gray-400 text-[15px] font-medium hover:text-[#D19C2C] transition-colors">{t("contact.email")}</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-[#A38D35]/20 border border-[#A38D35]/30 rounded-md flex items-center justify-center text-[#D19C2C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10c0 7.142-7.5 11.25-7.5 11.25S4.5 17.142 4.5 10a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-white font-bold text-[1.05rem] mb-1">Location</span>
                  <span className="text-gray-400 text-[15px] font-medium">{t("contact.location")}</span>
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT: Cinematic Air-Mail Envelope Reveal ── */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>

            {/* THE ENVELOPE MASTER CONTAINER */}
            <div
              className="relative w-full p-2.5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] group overflow-visible cursor-pointer"
              style={{
                background: 'repeating-linear-gradient(-45deg, #da5c53 0px, #da5c53 16px, #ffffff 16px, #ffffff 32px, #4ea1d3 32px, #4ea1d3 48px, #ffffff 48px, #ffffff 64px)',
                perspective: '2500px'
              }}
              onMouseEnter={() => setIsOpened(true)}
              onClick={() => setIsOpened(true)}
            >

              {/* THE ENVELOPE COVER SYSTEM (Disappears when opened) */}
              <div className={`absolute inset-2.5 z-30 pointer-events-none transition-all duration-1000 ${isOpened ? "opacity-0 invisible delay-700" : "opacity-100 visible"}`}>
                 
                 {/* Backing paper core (blocks interior form) */}
                 <div className="absolute inset-0 bg-[#F5F2EB]" />

                 {/* Front Lower Envelope Fold */}
                 <div 
                   className={`absolute bottom-0 left-0 right-0 w-full h-full bg-[#EAE5D9] shadow-[-10px_-10px_30px_rgba(0,0,0,0.08)] transition-transform duration-[1.2s] ease-[0.25,1,0.5,1] drop-shadow-md
                     ${isOpened ? "translate-y-32 opacity-0" : "translate-y-0 opacity-100"}`}
                   style={{ clipPath: 'polygon(0 40%, 50% 67%, 100% 40%, 100% 100%, 0 100%)' }}
                 >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                 </div>

                 {/* Top Flap (Hinged Lid) */}
                 <div 
                   className="absolute top-0 left-0 right-0 w-full h-[67%] origin-top transition-transform duration-[1.2s] ease-[0.25,1,0.5,1] z-30"
                   style={{ transform: isOpened ? 'rotateX(180deg)' : 'rotateX(0deg)' }}
                 >
                    {/* The Visual Triangle Paper */}
                    <div 
                      className="w-full h-full transition-colors duration-[1s]"
                      style={{ 
                         clipPath: 'polygon(0 0, 100% 0, 50% 100%)', 
                         background: isOpened ? '#DCD7CB' : '#F5F2EB',
                         filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.25))'
                      }}
                    >
                       <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                    </div>
                 </div>

                 {/* Gold Wax Seal Detonator */}
                 <div 
                    className={`absolute left-1/2 top-[67%] -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full flex flex-col items-center justify-center transition-all duration-[0.8s] ease-in-out cursor-pointer pointer-events-auto z-40
                      ${isOpened ? "scale-[4] opacity-0 blur-2xl" : "scale-100 opacity-100 shadow-[0_15px_30px_rgba(0,0,0,0.6)] bg-gradient-to-br from-[#F9A825] via-[#D19C2C] to-[#8A661C]"}`}
                    onClick={(e) => {
                       e.stopPropagation();
                       setIsOpened(true);
                    }}
                 >
                    <div className="absolute inset-[4px] border-[2px] border-white/40 rounded-full opacity-80" />
                    <span className="text-white font-black text-3xl font-serif drop-shadow-md leading-none">E</span>
                    <span className="text-white/90 text-[7px] font-bold tracking-[0.25em] uppercase mt-1 drop-shadow-sm">Sealed</span>
                 </div>

                 {/* Floating CTA Badge */}
                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none transition-all duration-[1s] ease-[0.25,1,0.5,1] ${isOpened ? "opacity-0 translate-y-8" : "opacity-100 translate-y-16 delay-500"}`}>
                    <span className="text-[#111] font-black tracking-[0.2em] uppercase text-[10px] bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-full shadow-2xl border border-black/10 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-[#D19C2C] rounded-full animate-pulse shadow-[0_0_10px_#D19C2C]" />
                       Click to Unseal
                    </span>
                 </div>
              </div>

              {/* THE ACTUAL FORM (The Payload) */}
              <form 
                 onSubmit={(e) => { e.preventDefault(); console.log('Form Captured!'); }}
                 className={`bg-[#F1F1F1] p-8 sm:p-10 pb-32 sm:pb-10 w-full relative z-10 flex flex-col gap-4 border-2 border-white shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] transition-all duration-[1.5s] delay-[400ms] ease-[0.25,1,0.5,1]
                   ${isOpened ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.96] translate-y-8 pointer-events-none"}`}
              >

                <input
                  type="text"
                  placeholder="Your Name *"
                  aria-label="Your Name"
                  required
                  className="w-full bg-white border border-[#E5E5E5] px-5 py-3.5 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D19C2C] focus:ring-1 focus:ring-[#D19C2C] transition-shadow shadow-sm"
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  aria-label="Your Email"
                  required
                  className="w-full bg-white border border-[#E5E5E5] px-5 py-3.5 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D19C2C] focus:ring-1 focus:ring-[#D19C2C] transition-shadow shadow-sm"
                />

                <input
                  type="tel"
                  placeholder="Your Phone"
                  aria-label="Your Phone"
                  className="w-full bg-white border border-[#E5E5E5] px-5 py-3.5 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D19C2C] focus:ring-1 focus:ring-[#D19C2C] transition-shadow shadow-sm"
                />

                <input
                  type="text"
                  placeholder="Project Location *"
                  aria-label="Project Location"
                  required
                  className="w-full bg-white border border-[#E5E5E5] px-5 py-3.5 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D19C2C] focus:ring-1 focus:ring-[#D19C2C] transition-shadow shadow-sm"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    required
                    defaultValue=""
                    aria-label="Select Project Range"
                    className="w-full bg-white border border-[#E5E5E5] px-5 py-3.5 text-[15px] text-gray-800 focus:outline-none focus:border-[#D19C2C] focus:ring-1 focus:ring-[#D19C2C] transition-shadow cursor-pointer shadow-sm appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23000000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                      backgroundSize: '1.2rem'
                    }}
                  >
                    <option value="" disabled className="text-gray-400">Select Project Range</option>
                    <option value="50k" className="bg-white text-[#111]">$50,000 - $100,000</option>
                    <option value="100k" className="bg-white text-[#111]">$100,000 - $250,000</option>
                    <option value="250k" className="bg-white text-[#111]">$250,000 - $500,000</option>
                    <option value="500k+" className="bg-white text-[#111]">$500,000+ (Master Build)</option>
                  </select>

                  <select
                    defaultValue=""
                    aria-label="Select a Service"
                    className="w-full bg-white border border-[#E5E5E5] px-5 py-3.5 text-[15px] text-gray-800 focus:outline-none focus:border-[#D19C2C] focus:ring-1 focus:ring-[#D19C2C] transition-shadow cursor-pointer shadow-sm appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23000000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                      backgroundSize: '1.2rem'
                    }}
                  >
                    <option value="" disabled>Select a Service</option>
                    <optgroup label="Residential Division">
                      {Object.values(residentialServicesData).map(s => (
                        <option key={s.slug} value={s.slug}>{s.heroTitle}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Commercial Division">
                      {Object.values(commercialServicesData).map(s => (
                        <option key={s.slug} value={s.slug}>{s.heroTitle}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    required
                    aria-label="Select Consultation Date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-white border border-[#E5E5E5] px-5 py-3.5 text-[15px] text-gray-800 focus:outline-none focus:border-[#D19C2C] focus:ring-1 focus:ring-[#D19C2C] transition-shadow shadow-sm uppercase tracking-wide text-sm"
                  />
                  <select
                    required
                    defaultValue=""
                    aria-label="Select a Time"
                    className="w-full bg-white border border-[#E5E5E5] px-5 py-3.5 text-[15px] text-gray-800 focus:outline-none focus:border-[#D19C2C] focus:ring-1 focus:ring-[#D19C2C] transition-shadow cursor-pointer shadow-sm appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23000000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                      backgroundSize: '1.2rem'
                    }}
                  >
                    <option value="" disabled>Toronto Time (EST)</option>
                    <optgroup label="Morning">
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                    </optgroup>
                    <optgroup label="Afternoon">
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </optgroup>
                    <optgroup label="Evening & Weekend">
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                    </optgroup>
                  </select>
                </div>

                <textarea
                  placeholder="Tell us about your construction needs... *"
                  aria-label="Message details"
                  required
                  rows={5}
                  className="w-full bg-white border border-[#E5E5E5] px-5 py-3.5 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D19C2C] focus:ring-1 focus:ring-[#D19C2C] transition-shadow resize-none shadow-sm"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-[#D8A02A] hover:bg-[#C28C22] text-white font-bold text-[17px] py-[18px] transition-all hover:shadow-[0_10px_20px_rgba(216,160,42,0.4)] mt-2 hover:-translate-y-1"
                >
                  {t("contact.button_text") || "Send Message"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Back to Top Button exactly as in the mock */}
      <button
        onClick={scrollToTop}
        className={`absolute bottom-8 right-8 z-50 w-12 h-12 bg-[#D19C2C] hover:bg-[#C28C22] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </section>
  );
}
