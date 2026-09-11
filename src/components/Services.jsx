import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Building, FileSignature, Landmark, FileText, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const leftServices = [
    {
      title: "COUNSELLING",
      icon: <Headphones size={28} className="text-white" />,
      desc: "We provide counselling to students interested in studying MBBS abroad. For counselling, we have a team of expert counsellors and admission advisors. Depending on the convenience of the students, counselling is provided through online as well as the offline medium. We believe that the first interaction between the students and our representatives marks the beginning of our association with our students."
    },
    {
      title: "ADMISSION APPLICATION",
      icon: <FileSignature size={28} className="text-white" />,
      desc: "To make the admission process to the MBBS program easier and hassle-free, on behalf of the students, the team of Eduway India files an application for admission to the MBBS program of the selected university at no additional cost to students. All the documentation work is taken care of by our team."
    },
    {
      title: "DOCUMENTATION",
      icon: <FileText size={28} className="text-white" />,
      desc: "Going abroad for medical education is not a small decision. It requires lots of paperwork and documentation. Immigration documents are required to be compiled for passport and visa formalities. Further, MBBS Admission and University procedures need a number of academic documents and student's records that need to be apostilled and submitted to the University."
    }
  ];

  const rightServices = [
    {
      title: "UNIVERSITY SELECTION",
      icon: <Building size={28} className="text-white" />,
      desc: "These countries are home to many NMC(MCI)-Approved Medical Universities that offer MBBS admission for Indian students. All these universities have different fees structure, facilities, and located in many different regions. For a student, making the right choice from so many options and selecting the best-fit can be difficult. We help students in selecting a medical University that is the best fit for them, depending on their financial means, personal preferences, the preferred medium of instruction, and academic records."
    },
    {
      title: "FINANCIAL SUPPORT",
      icon: <Landmark size={28} className="text-white" />,
      desc: "We assist our students in getting currency exchange. At Eduway India, we make sure that our students get the best possible exchange rate. We have tie-ups with various International Banks that provide the students with Forex Card and traveller's cheque at the time of departure. While medical education all over the World is very affordable, some students may require financial support to fund their MBBS program."
    }
  ];

  return (
    <section id="services" className="py-10 md:py-14 bg-white relative font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-widest mb-2 block text-transparent bg-clip-text bg-[#A51318]">
            WHAT WE DO
          </span>
          <h2 className="section-title">
            Our Student Support Services
          </h2>
          <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed max-w-2xl mx-auto">
            To help medical students in India get admission to top-ranked and government medical universities all over the World, we offer a variety of integrated student services right from counselling to travel arrangements and continuous support during student's medical education all over the World.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {leftServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-6 md:p-8 rounded-xl  border border-gray-100  transition- duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#A51318] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-gradient-to-br from-[#A51318] to-[#A51318] flex items-center justify-center ">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-gray-900 mb-3 group-hover:text-[#A51318] transition-colors">{service.title}</h3>
                    <p className="text-[14.5px] text-gray-600 leading-relaxed text-justify">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {rightServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                className="bg-white p-6 md:p-8 rounded-xl  border border-gray-100  transition- duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#A51318] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-gradient-to-br from-[#A51318] to-[#A51318] flex items-center justify-center ">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-gray-900 mb-3 group-hover:text-[#A51318] transition-colors">{service.title}</h3>
                    <p className="text-[14.5px] text-gray-600 leading-relaxed text-justify">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Highlight Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-gradient-to-br from-[#A51318] to-[#A51318] p-8 rounded-xl  text-white relative overflow-hidden mt-auto"
            >
              <div className="absolute -right-6 -top-6 text-white/10">
                <CheckCircle2 size={120} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <h3 className="text-[22px] md:text-[24px] font-black mb-4 leading-tight uppercase tracking-wide">
                  When We Say Complete Support, We Mean It
                </h3>
                <p className="text-[16px] text-white/90 leading-relaxed font-medium">
                  Eduway India remains involved with the students during the entire cycle of academic pursuit starting from choosing the university till the convocation.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
