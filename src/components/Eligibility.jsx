import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Stethoscope, Book, Info } from 'lucide-react';

const Eligibility = () => {
  const criteria = [
    { icon: <User size={24} />, title: "Age", desc: "Minimum 17 years of age as of 31st December of the admission year." },
    { icon: <GraduationCap size={24} />, title: "10+2 / PCB", desc: "Minimum 50% marks in Physics, Chemistry & Biology (40% for reserved categories)." },
    { icon: <Stethoscope size={24} />, title: "NEET", desc: "Must be NEET UG qualified. Score is valid for 3 years for abroad admissions." },
    { icon: <Book size={24} />, title: "Passport", desc: "Valid passport required (ideally with at least 18 months validity)." }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="text-center mb-12">
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] section-title">Are You Eligible for MBBS Abroad?</h2>
          <p className="section-subtitle">Basic requirements for Indian students applying for medical universities abroad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {criteria.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-offWhite p-6 rounded-lg border border-gray-100  transition-"
            >
              <div className="w-12 h-12 rounded-full bg-red-100 text-medicalBlue flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-medium text-navy-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <Info className="text-yellow-600 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Eligibility requirements may vary based on country or specific university. Always verify the latest applicable rules before admission.
            </p>
          </div>
          <a href="https://wa.me/919649637111?text=Hello%20Eduway India%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors whitespace-nowrap text-sm ">
            Check My Eligibility
          </a>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;



