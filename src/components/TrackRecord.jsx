import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, GraduationCap, Clock, History } from 'lucide-react';

const TrackRecord = () => {
  const stats = [
    {
      icon: <Users size={20} className="text-sky-500" />,
      iconBg: "bg-sky-50",
      number: "1000+",
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
    <section className="relative z-20 font-sans border-b border-gray-200 bg-gray-50 pt-6">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto pt-4 lg:pt-8 mb-4 md:mb-6 px-4">
          <span className="text-gray-600 font-bold tracking-widest uppercase text-[12px] sm:text-[13px]">Our Track Record</span>
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium mt-2 mb-3 md:mb-4 leading-snug text-gray-900">
            A Legacy of Excellence in Global Medical Education
          </h2>
          <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed w-full mx-auto">
            Guiding over 1000 aspiring students to top medical universities worldwide with trust, transparency, and a proven legacy of success.
          </p>
        </div>

        {/* Stats Carousel (Marquee) */}
        <div className="pb-10 pt-4 md:pt-6 lg:pb-12 overflow-hidden relative">
          
          {/* Gradient edges for smooth fade */}
          <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

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
                <div className="bg-white border-[1.5px] border-gray-300 rounded-xl p-5 flex flex-col items-center text-center group shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:shadow-md ${stat.iconBg}`}>
                    {React.cloneElement(stat.icon, { size: 20 })}
                  </div>
                  <h3 className="text-[26px] md:text-[28px] font-medium text-gray-900 mb-1.5 tracking-tight transition-colors duration-300">{stat.number}</h3>
                  <h4 className="text-[14px] md:text-[15px] font-semibold text-gray-800 mb-1 leading-tight">{stat.title}</h4>
                  <p className="text-[12px] md:text-[13px] text-gray-500 font-normal leading-relaxed">{stat.subtitle}</p>
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



