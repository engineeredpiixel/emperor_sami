"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of construction services do you specialize in?",
    answer: "At Emperor Sami Group, we specialize in luxury custom home building, comprehensive home renovations, high-end basement finishing, and complete exterior improvements. Our team handles every phase of the project from initial design to final walkthrough."
  },
  {
    question: "Do you provide services in my specific area?",
    answer: "We proudly serve homeowners across Toronto, Ontario, and the surrounding Greater Toronto Area (GTA). If your project is located slightly outside these bounds, please reach out to us to confirm availability."
  },
  {
    question: "How long does a typical custom home build or renovation take?",
    answer: "Project timelines depend heavily on the scope and complexity of the work. Minor interior renovations can take a few weeks, while large-scale additions or custom home builds may require several months. We always provide a clear, detailed schedule before breaking ground."
  },
  {
    question: "Are you fully licensed and insured as a General Contractor?",
    answer: "Absolutely. Emperor Sami Group is a fully licensed and insured general contracting firm in Ontario. Safety, compliance with local Toronto building codes, and protecting your property are our top priorities on every single job site."
  },
  {
    question: "Can you help with the architectural and interior design phases?",
    answer: "Yes! Our integrated project management approach means we can support you with architectural planning, secure necessary city permits, and guide you through interior design choices to ensure your vision is executed flawlessly."
  },
  {
    question: "Do you provide free estimates or on-site project consultations?",
    answer: "Yes, we offer complimentary on-site evaluations. Our construction experts will visit your property, discuss your vision, explain the necessary steps, and provide a detailed, highly transparent budget estimate."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF9F6] py-24 sm:py-32 overflow-hidden border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-4 h-4 text-[#111]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[#111] text-xs font-black tracking-[0.2em] uppercase">
              Common Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#111111] leading-tight mb-4">
            Frequently Asked <span className="text-gray-500">Questions</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about our construction services, project processes, and timelines before we begin building your dream together.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border transition-colors duration-300 ${isOpen ? 'border-[#F9A825]' : 'border-gray-100'}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <span className={`font-bold text-base sm:text-lg transition-colors ${isOpen ? 'text-[#111]' : 'text-gray-500 group-hover:text-[#111]'}`}>
                    {faq.question}
                  </span>
                  <div className={`ml-6 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#111] text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-[#111] group-hover:text-white'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="p-6 pt-0 text-gray-500 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
