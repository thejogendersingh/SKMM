import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      icon: "passport",
      title: "Get your passport"
    },
    {
      icon: "school",
      title: "Select your universities submit your 10th & 12th\nClass mark sheets and Get Your Admission Letter"
    },
    {
      icon: "mail",
      title: "Get your\nInvitation Letter"
    },
    {
      icon: "fact_check",
      title: "Submit passport with Visa Support Letter &\nother required documents to respective Embassy.\nGet your Visa"
    },
    {
      icon: "flight",
      title: "Start your Journey\nto become a Doctor"
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-[#1e2433] border-t border-slate-800 font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1440px]">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium mb-2 tracking-tight text-white">
            Process of MBBS Admission in India and Abroad
          </h2>
        </div>

        {/* Horizontal Scrollable Timeline for Mobile, Full Width for Desktop */}
        <div className="relative max-w-7xl mx-auto overflow-x-auto md:overflow-x-visible pb-6 scroll-smooth snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            .overflow-x-auto::-webkit-scrollbar { display: none; }
          `}</style>
          
          <div className="min-w-[900px] md:min-w-0 w-full relative py-2 px-4 md:px-0">
            
            {/* Connecting Line */}
            <div className="absolute top-[40px] md:top-[48px] left-[10%] right-[10%] h-[2px] bg-slate-700/60 z-0"></div>
            
            <div className="flex justify-between relative z-10 gap-2 md:gap-0">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center w-[180px] shrink-0 md:w-auto md:shrink md:flex-1 relative snap-center"
                >
                  {/* Circle */}
                  <div className="w-[64px] h-[64px] md:w-[76px] md:h-[76px] rounded-full bg-[#1e2433] text-[#30AFFF] flex items-center justify-center mb-4 md:mb-5 z-10 border-[3px] md:border-[4px] border-slate-700/60 relative">
                    <span className="material-symbols-outlined text-[28px]">{step.icon}</span>
                  </div>
                  {/* Title */}
                  <h3 className="text-[12px] md:text-[13px] font-normal text-gray-300 leading-[1.4] whitespace-pre-line px-2 mt-1">
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
