import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Placeholder Name",
      role: "Director & Lead Counsellor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expert: "10+ years guiding medical aspirants"
    },
    {
      name: "Placeholder Name",
      role: "Senior Admissions Expert",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expert: "Specialist in CIS Universities"
    },
    {
      name: "Placeholder Name",
      role: "Visa & Documentation Head",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expert: "Expert in embassy processes"
    }
  ];

  return (
    <section className="section-padding bg-offWhite">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] section-title">Meet the SKMM Team</h2>
          <p className="section-subtitle">Dedicated professionals committed to making your MBBS dream a reality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg group border border-gray-100 text-center pb-6"
            >
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="pt-6 px-6 relative">
                <h3 className="text-xl font-medium text-navy-900 mb-1">{member.name}</h3>
                <p className="text-primaryRed font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.expert}</p>
                
                <a href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-medicalBlue hover:bg-medicalBlue hover:text-white transition-colors">
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;



