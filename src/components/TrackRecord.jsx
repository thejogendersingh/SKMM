import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, GraduationCap, Clock, History } from 'lucide-react';

const TrackRecord = () => {
  const stats = [
    {
      icon: <Users size={20} className="text-sky-500" />,
      iconBg: "bg-sky-50",
      number: "50000+",
      title: "Students Admitted",
      subtitle: "Across 20+ Countries"
    },
    {
      icon: <Globe size={20} className="text-indigo-500" />,
      iconBg: "bg-indigo-50",
      number: "20+",
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
      number: "13+",
      title: "Years of Experience",
      subtitle: "Trusted Since 2013"
    }
  ];

  return (
    <section className="relative z-20 font-sans border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        
        {/* Stats Carousel (Marquee) */}
        <div className="bg-white py-8 lg:py-10 overflow-hidden relative">
          
          {/* Gradient edges for smooth fade */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...stats, ...stats].map((stat, idx) => (
              <div 
                key={idx} 
                className="w-[280px] md:w-[320px] flex-shrink-0 flex flex-col items-center text-center px-4 group cursor-default border-r border-gray-100"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-lg ${stat.iconBg}`}>
                  {stat.icon}
                </div>
                <h3 className="text-[32px] font-black text-gray-900 mb-1 tracking-tight transition-colors duration-300 group-hover:text-[#30AFFF]">{stat.number}</h3>
                <h4 className="text-[16px] font-bold text-gray-800 mb-1 leading-tight">{stat.title}</h4>
                <p className="text-[14px] text-gray-500 font-medium leading-snug">{stat.subtitle}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TrackRecord;



