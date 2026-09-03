import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Search, FileSignature, FileText, PlaneTakeoff, Navigation, Building, Users } from 'lucide-react';

const Services = () => {
  const servicesList = [
    { icon: <Headphones size={28} />, title: "Free Counselling", desc: "Expert 1-on-1 sessions for students and parents." },
    { icon: <Search size={28} />, title: "University Selection", desc: "Unbiased guidance to find the best fit." },
    { icon: <FileSignature size={28} />, title: "Admission Processing", desc: "Guaranteed admission in top universities." },
    { icon: <FileText size={28} />, title: "Documentation Assistance", desc: "Apostille, translation and notarization support." },
    { icon: <FileText size={28} />, title: "Visa Assistance", desc: "100% visa success rate with our expert team." },
    { icon: <PlaneTakeoff size={28} />, title: "Travel Guidance", desc: "Group departures and forex assistance." },
    { icon: <Building size={28} />, title: "Accommodation Guidance", desc: "Safe, comfortable university hostels." },
    { icon: <Users size={28} />, title: "Post-Arrival Support", desc: "Local support during the entire course duration." },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="section-title">Complete Support, From Counselling to Campus</h2>
            <p className="section-subtitle ml-0 text-left">We provide comprehensive services to ensure you only focus on your studies while we handle the rest.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="p-5 rounded-lg border border-slate-200 shadow-sm bg-offWhite hover:bg-navy-900 hover:text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-medicalBlue mb-4 group-hover:bg-white/10 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-navy-900 group-hover:text-white">{service.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



