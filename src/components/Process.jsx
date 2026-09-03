import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Globe2, FileText, MailCheck, IdCard, Plane, GraduationCap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <MessageCircle size={28} strokeWidth={1.5} />,
      title: "Free Counselling\n& Profile Evaluation",
    },
    {
      icon: <Globe2 size={28} strokeWidth={1.5} />,
      title: "College / Country\nSelection",
    },
    {
      icon: <FileText size={28} strokeWidth={1.5} />,
      title: "Application\n& Documentation",
    },
    {
      icon: <MailCheck size={28} strokeWidth={1.5} />,
      title: "Admission\nLetter",
    },
    {
      icon: <IdCard size={28} strokeWidth={1.5} />,
      title: "Visa Processing\n(for Abroad)",
    },
    {
      icon: <Plane size={28} strokeWidth={1.5} />,
      title: "Travel &\nDeparture",
    },
    {
      icon: <GraduationCap size={28} strokeWidth={1.5} />,
      title: "Final\nEnrollment",
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-[#1e2433] border-t border-slate-800 font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1440px]">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-extrabold text-white mb-2 tracking-tight">
            Process of MBBS Admission in India and Abroad
          </h2>
        </div>

        {/* Horizontal Scrollable Timeline */}
        <div className="relative max-w-6xl mx-auto overflow-x-auto no-scrollbar pb-6 scroll-smooth snap-x snap-mandatory">
          <div className="min-w-[800px] lg:min-w-full relative py-2 px-4 md:px-6">
            
            {/* Connecting Line */}
            <div className="absolute top-[40px] md:top-[48px] left-[6%] right-[6%] h-[2px] bg-slate-700/60 z-0"></div>
            
            <div className="flex justify-between relative z-10 gap-2 md:gap-4">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center w-[110px] md:w-full shrink-0 relative group snap-center"
                >
                  {/* Circle */}
                  <div className="w-[64px] h-[64px] md:w-[76px] md:h-[76px] rounded-full bg-white/10 backdrop-blur-sm text-[#30AFFF] flex items-center justify-center mb-4 md:mb-5 shadow-lg group-hover:-translate-y-2 group-hover:bg-[#30AFFF] group-hover:text-white transition-all duration-300 z-10 border-[4px] md:border-[5px] border-[#1e2433]">
                    {React.cloneElement(step.icon, { className: "w-[24px] h-[24px] md:w-[28px] md:h-[28px]" })}
                  </div>
                  {/* Title */}
                  <h3 className="text-[12px] md:text-[14px] lg:text-[15px] font-bold text-gray-300 leading-[1.3] whitespace-pre-line group-hover:text-[#30AFFF] transition-colors">
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="text-center mt-2 lg:hidden">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Swipe to see all steps
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </span>
        </div>

      </div>
    </section>
  );
};

export default Process;



