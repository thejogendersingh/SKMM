import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, Globe, FileText, MailCheck, BookOpen, PlaneTakeoff, GraduationCap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <MessageSquareText size={24} strokeWidth={1.5} />,
      line1: "Free Counselling",
      line2: "& Profile Evaluation"
    },
    {
      icon: <Globe size={24} strokeWidth={1.5} />,
      line1: "College / Country",
      line2: "Selection"
    },
    {
      icon: <FileText size={24} strokeWidth={1.5} />,
      line1: "Application",
      line2: "& Documentation"
    },
    {
      icon: <MailCheck size={24} strokeWidth={1.5} />,
      line1: "Admission",
      line2: "Letter"
    },
    {
      icon: <BookOpen size={24} strokeWidth={1.5} />, // Placeholder for passport/visa icon
      line1: "Visa Processing",
      line2: "(for Abroad)"
    },
    {
      icon: <PlaneTakeoff size={24} strokeWidth={1.5} />,
      line1: "Travel &",
      line2: "Departure"
    },
    {
      icon: <GraduationCap size={24} strokeWidth={1.5} />,
      line1: "Final",
      line2: "Enrollment"
    }
  ];

  return (
    <section 
      className="py-8 md:py-10 bg-[#0A1424] relative font-sans overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-[1440px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[20px] md:text-[24px] font-bold text-white tracking-tight">
            Process of MBBS Admission in India and Abroad
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto px-2 md:px-6">
          
          {/* Connecting line (Horizontal) */}
          <div className="hidden md:block absolute top-[32px] left-[7%] right-[7%] h-[2px] bg-red-200/20 z-0"></div>

          {/* Grid of Steps */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-2 md:flex md:flex-row justify-between items-start md:gap-2 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="flex flex-col items-center text-center flex-1 relative group w-full"
              >
                {/* Icon Circle with Theme Gradient */}
                <div className="relative w-[64px] h-[64px] shrink-0 rounded-full bg-gradient-to-br from-[#B00010] to-[#E00018] text-white flex items-center justify-center mb-3 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 bg-white text-[#D00012] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center  border border-gray-100">
                    {idx + 1}
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-1 flex flex-col items-center justify-center min-h-[40px]">
                  <span className="text-[12px] md:text-[13px] font-bold text-white leading-tight">
                    {step.line1}
                  </span>
                  <span className="text-[11px] md:text-[12px] font-medium text-slate-300 leading-tight mt-0.5">
                    {step.line2}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
