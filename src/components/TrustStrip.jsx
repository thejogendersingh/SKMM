import React from 'react';
import { motion } from 'framer-motion';

const TrustStrip = () => {
  const accreditations = [
    { name: "NMC", fullName: "National Medical Commission" },
    { name: "WHO", fullName: "World Health Organization" },
    { name: "FAIMER", fullName: "Int. Medical Education" },
    { name: "WDOMS", fullName: "World Directory" },
    { name: "ECFMG", fullName: "US Medical Graduates" }
  ];

  return (
    <section className="py-12 bg-[#C4F7CA] relative z-10 shadow-sm border-b border-[#D8FFC5]">
      <div className="container mx-auto px-4 max-w-[1440px]">
        
        {/* Centered Label */}
        <div className="text-center mb-8">
          <p className="text-[12px] font-black text-[#1e2433]/50 uppercase tracking-widest">
            Admissions Recognized By Global Medical Councils
          </p>
        </div>

        {/* Centered Logo Strip */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
          {accreditations.map((acc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                <span className="text-[#30AFFF] font-black tracking-tighter text-[14px]">{acc.name}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#1e2433] leading-none mb-1">{acc.name}</span>
                <span className="text-[11px] text-[#1e2433]/60 font-medium leading-tight max-w-[100px]">{acc.fullName}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TrustStrip;



