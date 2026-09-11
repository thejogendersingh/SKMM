import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, GraduationCap, Clock, History } from 'lucide-react';

const TrackRecord = () => {
  const stats = [
    {
      icon: <Users size={20} className="text-sky-500" />,
      iconBg: "bg-sky-50",
      number: "5000+",
      title: "Students Admitted",
      subtitle: "Across 5+ Countries"
    },
    {
      icon: <Globe size={20} className="text-indigo-500" />,
      iconBg: "bg-indigo-50",
      number: "5+",
      title: "Countries Covered",
      subtitle: "Globally Recognized"
    },
    {
      icon: <GraduationCap size={20} className="text-teal-500" />,
      iconBg: "bg-teal-50",
      number: "100+",
      title: "University Partnerships",
      subtitle: "with NMC-approved institutions"
    },
    {
      icon: <Clock size={20} className="text-rose-500" />,
      iconBg: "bg-rose-50",
      number: "98%",
      title: "Visa Success Rate",
      subtitle: "for eligible applicants"
    },
    {
      icon: <History size={20} className="text-amber-500" />,
      iconBg: "bg-amber-50",
      number: "3+",
      title: "Years of Experience",
      subtitle: "Trusted Expertise"
    }
  ];

  return (
    <section className="relative z-20 border-b border-gray-200 bg-white pt-4">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        
        <div className="text-center max-w-5xl mx-auto pt-4 lg:pt-8 mb-4 md:mb-6 px-4">
          <span className="font-satoshi font-bold tracking-widest uppercase text-[12px] sm:text-[13px] text-transparent bg-clip-text bg-[#A51318]">Our Track Record</span>
          <h2 className="section-title font-satoshi font-extrabold">
            A Legacy of Excellence in Global Medical Education
          </h2>
          <p className="font-inter font-medium text-[14px] md:text-[16px] text-gray-600 leading-relaxed w-full mx-auto">
            Guiding over 5000 aspiring students to top medical universities worldwide with trust, transparency, and a proven legacy of success.
          </p>
        </div>

        {/* Stats Carousel (Marquee) */}
        <div className="pb-6 pt-2 md:pt-4 lg:pb-8 overflow-hidden relative">
          
          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...stats, ...stats].map((stat, idx) => (
              <div 
                key={idx} 
                className="w-[240px] md:w-[260px] flex-shrink-0 px-2.5"
              >
                <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center group   transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 group- ${stat.iconBg}`}>
                    {React.cloneElement(stat.icon, { size: 20 })}
                  </div>
                  <h3 className="font-satoshi text-[26px] md:text-[28px] font-bold text-gray-900 mb-1.5 tracking-tight transition-colors duration-300">{stat.number}</h3>
                  <h4 className="font-inter text-[14px] md:text-[15px] font-semibold text-gray-800 mb-1 leading-tight">{stat.title}</h4>
                  <p className="font-inter text-[12px] md:text-[13px] text-gray-500 font-medium leading-relaxed">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TrackRecord;



