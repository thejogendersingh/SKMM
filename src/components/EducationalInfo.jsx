import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2, BookOpen, Handshake, BrainCircuit } from 'lucide-react';

const EducationalInfo = () => {
  return (
    <div className="bg-white">
      {/* Why Study Abroad Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-[22px] md:text-[26px] lg:text-[28px] section-title">Why Study MBBS Abroad?</h2>
              <p className="text-gray-600 text-lg">
                Studying MBBS abroad is a practical and strategic choice for many Indian medical aspirants who face high competition and limited seats in India.
              </p>
              
              <ul className="space-y-6 mt-8">
                {[
                  { icon: <Globe />, title: "International Exposure", desc: "Gain a global perspective and experience diverse medical cases." },
                  { icon: <Building2 />, title: "Modern Infrastructure", desc: "Access to advanced laboratories and highly equipped affiliated hospitals." },
                  { icon: <BookOpen />, title: "Multiple Options", desc: "A wider range of NMC and WHO recognized universities to choose from." },
                  { icon: <Handshake />, title: "Different Budget Options", desc: "Find universities that fit your specific financial planning without compromising quality." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-medicalBlue flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-lg">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Laboratory" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decision Support Section */}
      <section className="py-10 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primaryRed rounded-full blur-[150px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <BrainCircuit size={32} className="text-medicalBlue" />
            </div>
            <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium mb-4 text-gray-900">We Help You Choose, Not Just Apply</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              SKMM Consultancy considers multiple factors to recommend the perfect university for you. We treat every student's profile uniquely.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "NEET Score", "Academic Profile", "Budget Limits", "Preferred Country",
              "University Recognition", "Course Structure", "Career Goals", "Student Preferences"
            ].map((factor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-semibold"
              >
                {factor}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalInfo;



