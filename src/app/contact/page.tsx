"use client";

import TestimonialsSection from "@/components/TestimonialsSection";
import ContactHero from "@/components/contact/ContactHero";
import { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // 3D Architectural Envelope Sealing States
  const [isSubmitting, setIsSubmitting] = useState(false);   // Letter slides down inside
  const [isSealed, setIsSealed] = useState(false);           // Top flap physically closes
  const [isFlying, setIsFlying] = useState(false);           // Entire envelope takes off
  const [isTransmitted, setIsTransmitted] = useState(false); // Success text triggers

  useEffect(() => {
    setIsMounted(true);
    
    // Hash routing fix for Next.js cross-page anchor jumps
    if (typeof window !== "undefined" && window.location.hash === "#secure-data-link") {
      setTimeout(() => {
        const el = document.getElementById("secure-data-link");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Allow brief render time before scrolling
    }
  }, []);

  const handleDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSealed || isFlying) return;

    // 1. The Letter Slides deep into the Envelope
    setIsSubmitting(true);

    // 2. The Heavy Top Flap Physically Slams Shut
    setTimeout(() => {
      setIsSealed(true);

      // 3. The Whole Envelope Takes Off
      setTimeout(() => {
        setIsFlying(true);

        // 4. Transmission Success Text
        setTimeout(() => {
          setIsTransmitted(true);

          // Wait briefly while the success text shows, then wipe the form data
          // so it's a completely fresh letter when it unseals later.
          setTimeout(() => {
            if (formRef.current) formRef.current.reset();
          }, 1000);

          // Reset entire protocol allowing them to send again after a delay
          setTimeout(() => {
            setIsTransmitted(false);
            setIsFlying(false);
            setIsSealed(false);
            setIsSubmitting(false);
          }, 5000);
        }, 800);
      }, 800);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] font-sans selection:bg-[#D8A02A] selection:text-[#111] overflow-hidden -mt-[130px]">
      {/* ── 0. THE LIGHT-MODE SURVEYOR MASK ── */}
      <ContactHero />

      {/* ── 1. THE ARCHITECTURAL TELEMETRY GRID ── */}
      <section id="secure-data-link" className="relative pt-24 lg:pt-32 pb-48 px-6 sm:px-12 lg:px-24 max-w-[1600px] mx-auto z-10 w-full min-h-[900px] flex items-center bg-[#FAF9F6]">

        {/* CAD Technical Blueprint Background */}
        <div className="absolute inset-0 z-0 opacity-100"
          style={{
            backgroundImage: `url('/images/light-cad-blueprint.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Fading Mask so text remains legible over the drawing */}
        <div className="absolute inset-0 z-0 bg-white/70" />

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 w-full">

          {/* LEFT: THE COMMAND TEXT */}
          <div className="w-full lg:w-4/12 flex flex-col pt-8">
            <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="w-12 h-[1px] bg-[#D8A02A]" />
              <span className="text-[#D8A02A] text-[11px] font-black tracking-[0.4em] uppercase">
                Initiate Protocol
              </span>
            </div>

            <h1 className={`text-[#111] text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8 transition-all duration-[1.5s] ease-[0.19,1,0.22,1] delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
              Let's <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #D8A02A' }}>Build.</span>
            </h1>

            <p className={`text-gray-600 text-sm sm:text-base font-bold uppercase tracking-widest leading-relaxed max-w-sm mb-16 transition-all duration-1000 delay-500 ${isMounted ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
              Send the coordinates. We deploy the architecture. From flagship estates to subterranean integrations, our structurals are standing by.
            </p>

            {/* Radar Contact Blocks */}
            <div className="flex flex-col gap-8 w-full max-w-xs">

              {/* Phone Radar */}
              <div className={`group relative p-6 bg-white border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-[#D8A02A]/50 transition-colors duration-500 flex items-center gap-6 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000 delay-500`}>
                <div className="absolute inset-0 bg-[#D8A02A]/0 group-hover:bg-[#D8A02A]/5 transition-colors duration-500" />
                <div className="w-12 h-12 bg-[#FAF9F6] border border-[#D8A02A] flex items-center justify-center relative shrink-0">
                  <div className="absolute inset-0 border border-[#D8A02A] animate-ping opacity-20" />
                  <svg className="w-5 h-5 text-[#D8A02A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col relative z-10">
                  <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Direct Line</span>
                  <a href="tel:6479011626" className="text-[#111] text-lg font-bold tracking-widest hover:text-[#D8A02A] transition-colors">+1 (647) 901-1626</a>
                </div>
              </div>

              {/* Email Radar */}
              <div className={`group relative p-6 bg-white border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-[#D8A02A]/50 transition-colors duration-500 flex items-center gap-6 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000 delay-[600ms]`}>
                <div className="absolute inset-0 bg-[#D8A02A]/0 group-hover:bg-[#D8A02A]/5 transition-colors duration-500" />
                <div className="w-12 h-12 bg-[#FAF9F6] border border-[#D8A02A] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#D8A02A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col relative z-10 w-full overflow-hidden">
                  <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Master Inbox</span>
                  <a href="mailto:info@emperorsamigroup.com" className="text-[#111] flex-1 text-sm sm:text-[13px] font-bold tracking-wider hover:text-[#D8A02A] transition-colors truncate">info@emperorsamigroup.com</a>
                </div>
              </div>

            </div>
          </div>


          {/* RIGHT: THE 3D PHYSICAL AIRMAIL ENVELOPE (LIGHT MODE) */}
          <div className="w-full lg:w-8/12 relative mt-24 lg:mt-0 flex items-end justify-center perspective-[2000px]">

            {/* The Master Envelope Wrapper (Controls the Flight) */}
            <div
              className={`w-full max-w-[800px] mx-auto relative transition-all duration-[1.5s] ease-[0.5,0,0.1,1] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
                } ${isFlying ? 'translate-x-[200px] -transition-y-[150vh] scale-50 rotate-12 opacity-0' : ''
                }`}
            >

              {/* ── A. THE ENVELOPE BACKING (STRIPED AIRMAIL BACKGROUND) ── */}
              <div className="absolute inset-0 bg-white border border-[#D8A02A]/30 shadow-[0_20px_40px_rgba(0,0,0,0.05)] z-0">
                {/* Airmail Striped Rim (Gold and Light Cream) */}
                <div className="absolute inset-0 opacity-[0.8]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D8A02A 0, #D8A02A 10px, transparent 10px, transparent 20px, #EAE5D9 20px, #EAE5D9 30px, transparent 30px, transparent 40px)' }} />
              </div>

              {/* ── B. THE INNER ENVELOPE FLAP (Visible only when Open) ── */}
              <div
                className={`absolute top-0 left-0 w-full h-[50%] bg-[#f5f2e9] origin-top z-10 transition-transform duration-[800ms] ease-[0.19,1,0.22,1]`}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transform: isSealed ? 'rotateX(180deg)' : 'rotateX(0deg)',
                  backfaceVisibility: 'hidden'
                }}
              />

              {/* ── C. THE LETTER (THE SECURE DATA LINK FORM) ── */}
              <div
                className={`relative z-20 w-[92%] mx-auto bg-white border border-black/5 p-8 sm:p-12 mb-24 transition-all duration-[800ms] ease-[0.19,1,0.22,1] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] ${isSubmitting || isSealed ? 'translate-y-[150px] opacity-0 scale-95' : 'translate-y-[-80px] opacity-100 scale-100'
                  }`}
              >
                <div className="flex items-center justify-between mb-8 border-b border-black/10 pb-6 relative z-10">
                  <span className="text-[#111] text-xl md:text-2xl font-black uppercase tracking-widest">
                    Secure Data Link
                  </span>
                  <span className="text-[#D8A02A] text-[10px] uppercase tracking-[0.4em] font-black animate-pulse">
                    Unsealed
                  </span>
                </div>

                <form ref={formRef} className="flex flex-col gap-8 relative z-10" onSubmit={handleDeploy}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input type="text" id="name" required className="peer w-full bg-transparent border-b-2 border-black/10 px-0 py-4 text-[#111] text-lg font-medium placeholder-transparent focus:outline-none focus:border-transparent transition-colors" placeholder="Name" disabled={isSubmitting} />
                      <label className="absolute left-0 top-4 text-gray-400 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#D8A02A] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-[#D8A02A]">Full Name</label>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D8A02A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out" />
                    </div>
                    <div className="relative group">
                      <input type="email" id="email" required className="peer w-full bg-transparent border-b-2 border-black/10 px-0 py-4 text-[#111] text-lg font-medium placeholder-transparent focus:outline-none focus:border-transparent transition-colors" placeholder="Email" disabled={isSubmitting} />
                      <label className="absolute left-0 top-4 text-gray-400 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#D8A02A] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-[#D8A02A]">Email Address</label>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D8A02A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                    <div className="relative group">
                      <input type="tel" id="phone" required className="peer w-full bg-transparent border-b-2 border-black/10 px-0 py-4 text-[#111] text-lg font-medium placeholder-transparent focus:outline-none focus:border-transparent transition-colors" placeholder="Phone Number" disabled={isSubmitting} />
                      <label className="absolute left-0 top-4 text-gray-400 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#D8A02A] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-[#D8A02A]">Phone Number</label>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D8A02A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out" />
                    </div>

                    <div className="relative group">
                      <input type="text" id="location" required className="peer w-full bg-transparent border-b-2 border-black/10 px-0 py-4 text-[#111] text-lg font-medium placeholder-transparent focus:outline-none focus:border-transparent transition-colors" placeholder="Project Location" disabled={isSubmitting} />
                      <label className="absolute left-0 top-4 text-gray-400 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#D8A02A] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-[#D8A02A]">Project Location</label>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D8A02A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 mt-8">
                    <div className="relative group">
                      <select id="budget" required defaultValue="" className="peer w-full bg-transparent border-b-2 border-black/10 px-0 py-4 text-[#111] text-lg font-medium focus:outline-none focus:border-transparent transition-colors appearance-none" disabled={isSubmitting}>
                        <option value="" disabled className="text-gray-400">Select Project Range</option>
                        <option value="50k" className="bg-white text-[#111]">$50,000 - $100,000</option>
                        <option value="100k" className="bg-white text-[#111]">$100,000 - $250,000</option>
                        <option value="250k" className="bg-white text-[#111]">$250,000 - $500,000</option>
                        <option value="500k+" className="bg-white text-[#111]">$500,000+ (Master Build)</option>
                      </select>
                      <label className="absolute left-0 -top-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest peer-focus:text-[#D8A02A] transition-colors">Allocation Range</label>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D8A02A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out" />
                      <div className="absolute right-0 top-5 pointer-events-none">
                        <svg className="w-5 h-5 text-[#D8A02A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                    <div className="relative group">
                      <input type="date" id="date" required min={new Date().toISOString().split("T")[0]} className="peer w-full bg-transparent border-b-2 border-black/10 px-0 py-4 text-[#111] text-lg font-medium focus:outline-none focus:border-transparent transition-colors uppercase tracking-widest text-sm" disabled={isSubmitting} />
                      <label className="absolute left-0 -top-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest peer-focus:text-[#D8A02A] transition-colors">Consultation Date</label>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D8A02A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out" />
                    </div>

                    <div className="relative group">
                      <select id="time" required defaultValue="" className="peer w-full bg-transparent border-b-2 border-black/10 px-0 py-4 text-[#111] text-lg font-medium focus:outline-none focus:border-transparent transition-colors appearance-none cursor-pointer" disabled={isSubmitting}>
                        <option value="" disabled className="text-gray-400">Toronto Time (EST)</option>
                        <optgroup label="Morning">
                          <option value="9:00 AM" className="bg-white text-[#111]">9:00 AM</option>
                          <option value="10:00 AM" className="bg-white text-[#111]">10:00 AM</option>
                          <option value="11:00 AM" className="bg-white text-[#111]">11:00 AM</option>
                        </optgroup>
                        <optgroup label="Afternoon">
                          <option value="12:00 PM" className="bg-white text-[#111]">12:00 PM</option>
                          <option value="1:00 PM" className="bg-white text-[#111]">1:00 PM</option>
                          <option value="2:00 PM" className="bg-white text-[#111]">2:00 PM</option>
                          <option value="3:00 PM" className="bg-white text-[#111]">3:00 PM</option>
                          <option value="4:00 PM" className="bg-white text-[#111]">4:00 PM</option>
                          <option value="5:00 PM" className="bg-white text-[#111]">5:00 PM</option>
                        </optgroup>
                        <optgroup label="Evening & Weekend">
                          <option value="6:00 PM" className="bg-white text-[#111]">6:00 PM</option>
                          <option value="7:00 PM" className="bg-white text-[#111]">7:00 PM</option>
                          <option value="8:00 PM" className="bg-white text-[#111]">8:00 PM</option>
                        </optgroup>
                      </select>
                      <label className="absolute left-0 -top-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest peer-focus:text-[#D8A02A] transition-colors">Preferred Time</label>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D8A02A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out" />
                      <div className="absolute right-0 top-5 pointer-events-none">
                        <svg className="w-5 h-5 text-[#D8A02A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative group mt-4">
                    <textarea id="scope" required rows={4} className="peer w-full bg-transparent border-b-2 border-black/10 px-0 py-4 text-[#111] text-lg font-medium placeholder-transparent focus:outline-none focus:border-transparent transition-colors resize-none" placeholder="Scope" disabled={isSubmitting} />
                    <label className="absolute left-0 top-4 text-gray-400 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#D8A02A] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-[#D8A02A]">Project Specifications</label>
                    <div className="absolute bottom-1 left-0 w-full h-[2px] bg-[#D8A02A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="group relative w-full h-[64px] inline-flex items-center justify-center overflow-hidden mt-4 transition-colors duration-500 bg-[#111] hover:bg-[#D8A02A]">
                    <span className="relative z-10 text-white text-sm font-black uppercase tracking-[0.3em] transition-colors duration-500">
                      Deploy Specifications
                    </span>
                  </button>
                </form>
              </div>

              {/* ── D. THE ENVELOPE FRONT POCKET (LIGHT MODE) ── */}
              <div
                className="absolute bottom-0 left-0 w-full h-full bg-[#EAE5D9] z-30 pointer-events-none drop-shadow-[0_-15px_25px_rgba(0,0,0,0.05)] transition-all duration-[800ms] ease-[0.19,1,0.22,1]"
                style={{
                  clipPath: isSubmitting || isSealed ? 'polygon(0 100%, 100% 100%, 100% 0%, 50% 50%, 0 0%)' : 'polygon(0 100%, 100% 100%, 100% 70%, 50% 90%, 0 70%)'
                }}
              >
                {/* Subtle Light Edge Highlight */}
                <div className="absolute top-0 w-[50%] h-[2px] bg-white/40 right-1/2 origin-bottom-right -rotate-[35deg]" />
                <div className="absolute top-0 w-[50%] h-[2px] bg-white/40 left-1/2 origin-bottom-left rotate-[35deg]" />
              </div>

              {/* ── E. THE SEVERING TOP FLAP (Closes after Deploy) ── */}
              <div
                className="absolute top-0 left-0 w-full h-[51%] bg-[#EAE5D9] origin-top z-40 drop-shadow-[0_20px_25px_rgba(0,0,0,0.1)] border-b border-black/5"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transform: isSealed ? 'rotateX(0deg)' : 'rotateX(-180deg)',
                  transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Wax Seal / Logo on the Outside of the Flap */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#D8A02A] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </div>
              </div>

            </div>

            {/* ── F. THE TRANSMITTED STATE (Left Behind after Flight) ── */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex flex-col items-center justify-center transition-all duration-1000 delay-300 ${isTransmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="w-24 h-24 border-2 border-[#D8A02A] bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(216,160,42,0.15)]">
                <svg className="w-10 h-10 text-[#D8A02A]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[#111] text-3xl font-black uppercase tracking-[0.3em]">Payload Sent</h3>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-2 text-center text-balance">The Commander has received your coordinates.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. TRUST REINFORCEMENT (TESTIMONIAL SHUTTER) ── */}
      <section className="bg-white border-t-8 border-[#D8A02A]">
        <TestimonialsSection />
      </section>
    </main>
  );
}
