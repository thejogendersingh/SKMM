import React from 'react';
import { motion } from 'framer-motion';
import { Target, Map, FileText, Plane, Home, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Target size={32} />,
      title: "Expert Career Guidance",
      desc: "Personalized advice matching your academic profile and career aspirations."
    },
    {
      icon: <Map size={32} />,
      title: "Right University Selection",
      desc: "Unbiased help to select NMC/WHO recognized universities fitting your budget."
    },
    {
      icon: <FileText size={32} />,
      title: "Complete Admission Assistance",
      desc: "Seamless handling of applications, translations, and university coordination."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Visa & Documentation Support",
      desc: "Hassle-free visa processing with exact embassy document requirements."
    },
    {
      icon: <Plane size={32} />,
      title: "Pre-Departure Guidance",
      desc: "Comprehensive briefings for students and parents before flying."
    },
    {
      icon: <Home size={32} />,
      title: "Post-Arrival Student Support",
      desc: "Assistance with hostel, local registration, and ongoing support."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-us" className="section-padding bg-offWhite">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="text-center mb-16">
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] section-title">Why Students & Parents Choose SKMM</h2>
          <p className="section-subtitle">We don't just secure admissions; we build careers through transparent, end-to-end guidance.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants} className="premium-card group">
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center text-medicalBlue mb-6 group-hover:bg-medicalBlue group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 line-clamp-2">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



