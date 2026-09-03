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
          <span className="text-gray-900 font-bold tracking-widest text-[14px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
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
              className={`bg-white rounded-lg border overflow-hidden transition-all duration-300 ${openIdx === idx ? 'border-[#30AFFF] shadow-[0_8px_30px_rgba(48,175,255,0.12)]' : 'border-slate-200 hover:border-[#30AFFF]/50 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className={`font-bold text-[17px] transition-colors ${openIdx === idx ? 'text-[#30AFFF]' : 'text-gray-800'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIdx === idx ? 'bg-[#30AFFF]/10' : 'bg-gray-100'}`}>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-[#30AFFF]' : 'text-gray-500'}`} 
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
                      <p className="text-[16px] leading-relaxed font-medium">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
          <p className="text-gray-800 font-bold mb-4 text-[16px]">Still have questions about studying abroad?</p>
          <a href="#contact" className="inline-flex items-center justify-center bg-[#121935] text-white px-8 py-3.5 rounded-lg font-bold text-[15px] hover:bg-[#1e2433] transition-colors shadow-md">
            Contact Our Counselling Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;



