import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const students = [
    { name: "Aarav Sharma", location: "Russia", university: "Orenburg State Medical University", image: "https://i.pravatar.cc/150?img=11" },
    { name: "Priya Patel", location: "Kazakhstan", university: "Kazakh National Medical University", image: "https://i.pravatar.cc/150?img=5" },
    { name: "Rohan Desai", location: "Georgia", university: "Tbilisi State Medical University", image: "https://i.pravatar.cc/150?img=12" },
    { name: "Ananya Singh", location: "Kyrgyzstan", university: "Asian Medical Institute", image: "https://i.pravatar.cc/150?img=9" },
    { name: "Vikram Reddy", location: "Uzbekistan", university: "Samarkand State Medical Institute", image: "https://i.pravatar.cc/150?img=13" },
    { name: "Neha Gupta", location: "Russia", university: "Kazan Federal University", image: "https://i.pravatar.cc/150?img=20" },
    { name: "Aditya Kumar", location: "Kazakhstan", university: "Astana Medical University", image: "https://i.pravatar.cc/150?img=14" },
    { name: "Shruti Sharma", location: "Georgia", university: "Batumi Shota Rustaveli State University", image: "https://i.pravatar.cc/150?img=21" },
    { name: "Karan Verma", location: "Russia", university: "Crimea Federal University", image: "https://i.pravatar.cc/150?img=15" },
    { name: "Pooja Mishra", location: "Uzbekistan", university: "Bukhara State Medical Institute", image: "https://i.pravatar.cc/150?img=22" },
    
    { name: "Rahul Singh", location: "Kyrgyzstan", university: "Osh State University", image: "https://i.pravatar.cc/150?img=33" },
    { name: "Divya Patel", location: "Georgia", university: "European University", image: "https://i.pravatar.cc/150?img=24" },
    { name: "Siddharth Rao", location: "Russia", university: "Bashkir State Medical University", image: "https://i.pravatar.cc/150?img=53" },
    { name: "Kavya Menon", location: "Kazakhstan", university: "Semey Medical University", image: "https://i.pravatar.cc/150?img=26" },
    { name: "Amit Joshi", location: "Uzbekistan", university: "Tashkent Medical Academy", image: "https://i.pravatar.cc/150?img=57" },
    { name: "Sneha Reddy", location: "Russia", university: "Perm State Medical University", image: "https://i.pravatar.cc/150?img=28" },
    { name: "Varun Malhotra", location: "Georgia", university: "Caucasus International University", image: "https://i.pravatar.cc/150?img=59" },
    { name: "Nisha Singh", location: "Kyrgyzstan", university: "Kyrgyz State Medical Academy", image: "https://i.pravatar.cc/150?img=30" },
    { name: "Arjun Nair", location: "Kazakhstan", university: "South Kazakhstan Medical Academy", image: "https://i.pravatar.cc/150?img=61" },
    { name: "Megha Sharma", location: "Russia", university: "Ulyanovsk State University", image: "https://i.pravatar.cc/150?img=32" }
  ];

  const row1 = students.slice(0, 10);
  const row2 = students.slice(10, 20);

  const rowWidth = 3240; 

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-[#f8fafc] relative border-t border-gray-100 overflow-hidden font-sans">
      <div className="container mx-auto px-4 max-w-[1440px] relative z-10 mb-14">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#111827] mb-4 tracking-tight">
            Our Successful Students
          </h2>
          <p className="text-[16px] text-gray-600 leading-relaxed font-medium">
            Join hundreds of Indian students who have trusted SMMM Consultancy to achieve their dream of studying MBBS abroad in top NMC-approved medical universities.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden w-full pb-10">
        
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#f8fafc] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#f8fafc] to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max relative group">
          <motion.div 
            className="flex gap-6 pr-6"
            animate={{ x: [0, -rowWidth] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...row1, ...row1, ...row1].map((student, idx) => (
              <StudentCard key={`r1-${idx}`} student={student} />
            ))}
          </motion.div>
        </div>

        <div className="flex w-max relative group" style={{ marginLeft: '-500px' }}>
          <motion.div 
            className="flex gap-6 pr-6"
            animate={{ x: [-rowWidth, 0] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {[...row2, ...row2, ...row2].map((student, idx) => (
              <StudentCard key={`r2-${idx}`} student={student} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white rounded-xl p-4 w-[300px] shrink-0 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow hover:border-[#30AFFF]/30">
      <div className="w-[64px] h-[64px] rounded-full overflow-hidden shrink-0 border-[3px] border-[#f0f5fa]">
        <img src={student.image} alt={student.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <h4 className="font-bold text-[15px] text-gray-900 truncate leading-tight">{student.name}</h4>
        <div className="flex items-center gap-1.5 mt-1 text-[#30AFFF]">
          <MapPin size={12} strokeWidth={3} className="shrink-0" />
          <span className="text-[13px] font-bold truncate">{student.location}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5 text-gray-500">
          <GraduationCap size={12} strokeWidth={2.5} className="shrink-0" />
          <span className="text-[12px] font-medium truncate">{student.university}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
