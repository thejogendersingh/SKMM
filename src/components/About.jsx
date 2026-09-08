import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send } from 'lucide-react';
import aboutImg from '../assets/about.png';
import aboutBgBottom from '../assets/about-bg-bottom.jpg';

const About = () => {
  return (
    <section id="about" className="py-10 md:py-12 bg-[#0A1424] relative overflow-hidden">
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
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 flex justify-center lg:justify-end pr-0 lg:pr-8">
            
            <div className="relative w-full max-w-[380px] sm:max-w-[440px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full rounded-xl overflow-hidden  bg-white p-2.5 md:p-3"
              >
                <img 
                  src={aboutImg} 
                  alt="Medical Student Counselling" 
                  className="w-full h-[400px] md:h-[480px] object-cover object-center rounded-lg"
                />
              </motion.div>

              {/* Floating Top Left Box - Sky Blue (Scaled Down) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-8 -left-2 sm:-left-6 bg-gradient-to-r from-[#B00010] to-[#E00018] rounded-lg py-2 px-2.5 sm:py-2.5 sm:px-3 flex items-center gap-2 sm:gap-2.5  z-20 max-w-[90%]"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-[#D00012] shrink-0">
                  <Phone size={13} fill="currentColor" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[9px] font-medium text-white/90 mb-0.5">Call For Consultation</span>
                  <span className="text-[12px] sm:text-[13px] font-bold text-white tracking-wide leading-none">+91 96496 37111</span>
                </div>
              </motion.div>

              {/* Floating Bottom Left Card - White (Scaled Down) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-5 -left-2 sm:-left-4 bg-white rounded-lg p-2.5 sm:p-3  z-20 w-[150px] sm:w-[160px] border border-gray-100"
              >
                {/* Overlapping Plane Icon (Attached to Card) */}
                <div className="absolute -top-3 -left-3 sm:-top-3.5 sm:-left-3.5 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#B00010] to-[#E00018] rounded-full flex items-center justify-center text-white  z-30">
                  <Send size={13} className="-translate-x-0.5 translate-y-0.5" strokeWidth={2.5} />
                </div>

                <div className="text-center pb-1.5 border-b border-gray-100 flex items-center gap-2 justify-center mt-1">
                  <span className="text-[9px] sm:text-[10px] font-bold text-gray-800">Served Students</span>
                </div>
                
                <div className="py-2.5 flex flex-col items-center">
                  {/* Arc gauge simulation fixed so text is not cut off */}
                  <div className="relative w-20 h-10 flex justify-center">
                    <div className="absolute top-0 w-20 h-10 overflow-hidden">
                      <div className="w-20 h-20 rounded-full border-[4px] border-[#D00012] border-b-transparent border-r-transparent rotate-45"></div>
                    </div>
                    <div className="relative mt-3.5 flex flex-col items-center z-10">
                      <span className="text-[7.5px] text-gray-500 font-medium leading-tight">Successful</span>
                      <span className="text-[13px] font-black text-gray-900 leading-none mt-1">5,000+</span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-center gap-1">
                  <div className="flex -space-x-1.5">
                    <img src="https://flagcdn.com/w40/ru.png" alt="Russia" className="w-3.5 h-3.5 rounded-full border border-white object-cover " />
                    <img src="https://flagcdn.com/w40/kz.png" alt="Kazakhstan" className="w-3.5 h-3.5 rounded-full border border-white object-cover " />
                    <div className="w-3.5 h-3.5 rounded-full bg-red-50 border border-white flex items-center justify-center text-[6px] font-bold text-[#D00012]">+</div>
                  </div>
                  <span className="text-[8px] font-bold text-gray-800 ml-1">5 Countries</span>
                </div>
                
                <div className="text-center mt-2">
                  <span className="text-[7.5px] text-gray-500 font-medium">We are serving for 3+ Years</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-10 mt-12 lg:mt-0 relative z-20">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-2.5"
            >
              <Send size={14} className="text-[#D00012]" strokeWidth={2.5} />
              <span className="text-[13px] font-bold text-white uppercase tracking-widest">About Eduway India</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-[40px] font-serif text-white leading-tight mb-3"
            >
              We help Making your dream into Reality
            </motion.h2>
            
            {/* Decorative line */}
            <motion.div
              initial={{ opacity: 0, w: 0 }}
              whileInView={{ opacity: 1, w: "auto" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-1 mb-5"
            >
              <div className="w-10 h-[2px] bg-[#D00012]"></div>
              <div className="w-1 h-[2px] bg-[#D00012]"></div>
              <div className="w-1 h-[2px] bg-[#D00012]"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3.5 text-[15px] text-gray-300 mb-5 leading-relaxed font-medium"
            >
              <p>
                Eduway India provides uniquely designed premium services for medical education abroad. As aspiring doctors dream of hands-on clinical experience, we bridge the gap by offering complete transparency, expert guidance, and end-to-end support throughout the entire journey.
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
              href="https://wa.me/919649637111?text=Hello%20Eduway India%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" 
              className="inline-block mt-2 px-7 py-2.5 bg-gradient-to-r from-[#B00010] to-[#E00018] text-white rounded-full font-bold text-[13px]  hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
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



