import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is the process for MBBS abroad admission?",
      a: "The process begins with free counselling and profile assessment. We then shortlist universities, help you gather documents, apply for admission, secure the offer letter, and finally process your student visa. We guide you at every single step."
    },
    {
      q: "Which countries does SMMM Consultancy assist with?",
      a: "We currently specialize in MBBS admissions in Russia, Kazakhstan, Kyrgyzstan, Uzbekistan, and Georgia, offering options for various budgets and academic profiles."
    },
    {
      q: "Do I need NEET to study MBBS abroad?",
      a: "Yes, qualifying NEET-UG is mandatory for Indian students if they wish to return and practice in India after completing their MBBS abroad."
    },
    {
      q: "How do I choose the right university?",
      a: "We help you select based on your budget, preferred location, university ranking, medium of instruction (we recommend 100% English medium), FMGE passing rate, and patient inflow for clinical practice."
    },
    {
      q: "How does visa assistance work?",
      a: "Our team handles the entire visa process, including document translation, apostille, notarization, filling out embassy applications, and preparing you for any potential embassy interviews."
    },
    {
      q: "What support is provided after admission?",
      a: "Our post-arrival support includes airport pickup, hostel allocation, local SIM card provision, help with university registration, and ongoing assistance throughout your course."
    },
    {
      q: "Can parents get counselling too?",
      a: "Absolutely! We encourage parents to be part of the counselling process so they can make an informed decision alongside the student."
    }
  ];

  return (
    <section id="faqs" className="py-10 md:py-14 bg-[#f0f5fa] border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <span className="font-bold tracking-widest text-[14px] uppercase mb-3 block text-[12px] sm:text-[13px] text-transparent bg-clip-text bg-gradient-to-r from-[#B00010] to-[#E00018]">
            FAQ
          </span>
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium mb-4 tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] text-gray-600 leading-relaxed font-medium">
            Got questions? We have answers. Here are some of the most common questions we get from students and parents.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-lg border overflow-hidden transition-all duration-300 ${openIdx === idx ? 'border-[#D00012] ' : 'border-slate-200 hover:border-[#D00012]/50 '}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className={`font-medium text-[15px] transition-colors ${openIdx === idx ? 'text-[#0A1424]' : 'text-gray-800'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIdx === idx ? 'bg-[#D00012]/10' : 'bg-gray-100'}`}>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-[#D00012]' : 'text-gray-500'}`} 
                    size={18} 
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 mt-1">
                      <p className="text-[14.5px] leading-relaxed font-normal">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-14 bg-[#0A1424] rounded-2xl p-5 md:px-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-5  relative overflow-hidden w-full max-w-[1050px] mx-auto border border-slate-700/50">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D00012]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 text-center md:text-left flex-1">
            <h3 className="text-white text-[18px] md:text-[20px] font-semibold mb-1.5">Still have questions about studying abroad?</h3>
            <p className="text-gray-300 text-[13px] md:text-[14px] leading-relaxed m-0">Our expert counselors are here to help you clear all your doubts and guide you properly.</p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <a href="https://wa.me/919649637111?text=Hello%20Eduway India%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full md:w-auto bg-gradient-to-r from-[#B00010] to-[#E00018] text-white px-8 py-3.5 md:py-3.5 rounded-lg font-medium text-[14px] md:text-[15px] hover:-translate-y-0.5 transition-all  ">
              Contact Our Counselling Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;



