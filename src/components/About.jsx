import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send } from 'lucide-react';
import aboutImg from '../assets/about.png';
import aboutBgBottom from '../assets/about-bg-bottom.jpg';

const About = () => {
  return (
    <section id="about" className="py-10 md:py-12 bg-[#1e2433] relative overflow-hidden">
      {/* Bottom Half Background Image */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[55%] opacity-[0.05] z-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url(${aboutBgBottom})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Images & Floating Cards */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center lg:justify-end pr-0 lg:pr-8">
            
            <div className="relative w-full max-w-[420px] sm:max-w-[480px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white p-3 md:p-4"
              >
                <img 
                  src={aboutImg} 
                  alt="Medical Student Counselling" 
                  className="w-full h-[470px] md:h-[550px] object-cover object-center rounded-lg"
                />
              </motion.div>

              {/* Floating Top Left Box - Sky Blue */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-10 -left-2 sm:-left-12 bg-[#30AFFF] rounded-lg py-3 px-4 sm:py-4 sm:px-6 flex items-center gap-3 sm:gap-4 shadow-[0_20px_40px_rgba(48,175,255,0.3)] z-20 max-w-[95%]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center text-[#30AFFF] shrink-0">
                  <Phone size={18} fill="currentColor" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-[12px] font-medium text-white/90 mb-0.5">Call For Consultation</span>
                  <span className="text-[15px] sm:text-[17px] font-bold text-white tracking-wide leading-none">+91 96496 37111</span>
                </div>
              </motion.div>

              {/* Floating Bottom Left Card - White */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-8 -left-2 sm:-left-8 bg-white rounded-lg p-5 shadow-2xl z-20 w-[200px] sm:w-[220px] border border-gray-100"
              >
                <div className="text-center pb-3 border-b border-gray-100 flex items-center gap-2 justify-center">
                  <span className="text-[12px] sm:text-[13px] font-bold text-gray-800">Served Students</span>
                </div>
                
                <div className="py-4 flex flex-col items-center">
                  {/* Arc gauge simulation fixed so text is not cut off */}
                  <div className="relative w-28 h-16 flex justify-center">
                    <div className="absolute top-0 w-28 h-14 overflow-hidden">
                      <div className="w-28 h-28 rounded-full border-[7px] border-[#30AFFF] border-b-transparent border-r-transparent rotate-45"></div>
                    </div>
                    <div className="relative mt-5 flex flex-col items-center z-10">
                      <span className="text-[10px] text-gray-500 font-medium leading-tight">Successful</span>
                      <span className="text-lg font-black text-gray-900 leading-none mt-1">5,000+</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-white flex items-center justify-center text-[9px]">🇷🇺</div>
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-white flex items-center justify-center text-[9px]">🇰🇿</div>
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-white flex items-center justify-center text-[8px] font-bold text-[#30AFFF]">+</div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-800">10 Countries</span>
                </div>
                
                <div className="text-center mt-3">
                  <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium">We are serving for 10+ Years</span>
                </div>
              </motion.div>

              {/* Overlapping Plane Icon */}
              <div className="absolute top-2/3 -left-3 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#30AFFF] rounded-full flex items-center justify-center text-white shadow-lg z-30 transform -translate-y-1/2">
                <Send size={16} className="-translate-x-0.5 translate-y-0.5" strokeWidth={2.5} />
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-10 mt-16 lg:mt-0 relative z-20">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <Send size={16} className="text-[#30AFFF]" strokeWidth={2.5} />
              <span className="text-[14px] font-bold text-white uppercase tracking-widest">About SKMM Consultancy</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-[46px] font-serif text-white leading-tight mb-4"
            >
              We help Making your dream into Reality
            </motion.h2>
            
            {/* Decorative line */}
            <motion.div
              initial={{ opacity: 0, w: 0 }}
              whileInView={{ opacity: 1, w: "auto" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-1 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#30AFFF]"></div>
              <div className="w-1 h-[2px] bg-[#30AFFF]"></div>
              <div className="w-1 h-[2px] bg-[#30AFFF]"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 text-[16px] text-gray-300 mb-6 leading-relaxed font-medium"
            >
              <p>
                SKMM Consultancy provides uniquely designed premium services for medical education abroad. As aspiring doctors dream of hands-on clinical experience, we bridge the gap by offering complete transparency, expert guidance, and end-to-end support throughout the entire journey.
              </p>
              <p>
                We specialize in facilitating admissions to top NMC-approved medical universities worldwide. From meticulously evaluating your profile to ensuring fast admission and visa processing, we stand by you at every step, transforming your medical aspirations into a successful reality.
              </p>
            </motion.div>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              href="#contact" 
              className="inline-block mt-4 px-10 py-4 bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] text-white rounded-full font-bold text-[15px] hover:shadow-[0_8px_25px_rgba(48,175,255,0.4)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
            >
              Get Started
            </motion.a>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;



