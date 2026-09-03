import React from 'react';
import { IndianRupee, Clock, GraduationCap, ArrowRight, ArrowUpRight } from 'lucide-react';
import imgRussia from '../assets/Kremlin Moscow.jpg';
import imgKazakhstan from '../assets/Astana,Kazakistan.jpg';
import imgGeorgia from '../assets/Terry College Of Business _ University of Georgia.jpg';
import imgUzbekistan from '../assets/samarkand, uzbekistan.jpg';
import imgKyrgyzstan from '../assets/Kyrgyzstan - Victory Square, Bishkek.jpg';

const Destinations = () => {
  const destinations = [
    {
      id: "RU",
      code: "RU",
      name: "MBBS in Russia",
      subtitle: "Top 50 World",
      badge: "Most Popular",
      badgeColor: "bg-emerald-500",
      desc: "NMC-recognized universities with strong clinical training.",
      fees: "₹18-35 Lakhs",
      duration: "6 Years",
      eligibility: "45-50% PCB • NEET Qualified",
      tags: ["NMC Approved", "WHO Listed", "Affordable Fees"],
      imgUrl: imgRussia,
      linkText: "Learn More"
    },
    {
      id: "KZ",
      code: "KZ",
      name: "MBBS in Kazakhstan",
      subtitle: "Central Asia Top",
      badge: "Indian Friendly",
      badgeColor: "bg-purple-600",
      desc: "Affordable MBBS with English-medium programs.",
      fees: "₹18-30 Lakhs",
      duration: "5+1 Years*",
      eligibility: "45-50% PCB • NEET Qualified",
      tags: ["Indian Food", "Large Community", "Affordable"],
      imgUrl: imgKazakhstan,
      linkText: "Learn More"
    },
    {
      id: "GE",
      code: "GE",
      name: "MBBS in Georgia",
      subtitle: "EU Standard",
      badge: "Trending",
      badgeColor: "bg-orange-500",
      desc: "European-standard curriculum with advanced infrastructure.",
      fees: "₹35-55 Lakh",
      duration: "6 Years",
      eligibility: "40-50% PCB • NEET Qualified",
      tags: ["English Medium", "EU Standards", "Safe Country"],
      imgUrl: imgGeorgia,
      linkText: "Learn More"
    },
    {
      id: "UZ",
      code: "UZ",
      name: "MBBS in Uzbekistan",
      subtitle: "Growing Hub",
      badge: "Budget Pick",
      badgeColor: "bg-blue-500",
      desc: "English medium universities with affordable tuition fees and modern facilities.",
      fees: "₹15-25 Lakh",
      duration: "5+1 Years*",
      eligibility: "40-50% PCB • NEET Qualified",
      tags: ["Low Cost", "English Medium", "NMC Approved"],
      imgUrl: imgUzbekistan,
      linkText: "Learn More"
    },
    {
      id: "KG",
      code: "KG",
      name: "MBBS in Kyrgyzstan",
      subtitle: "WHO Listed",
      badge: "Lowest Fees",
      badgeColor: "bg-red-500",
      desc: "Budget-friendly medical education for Indian students.",
      fees: "₹16-25 Lakh",
      duration: "6 Years",
      eligibility: "40-50% PCB • NEET Qualified",
      tags: ["Lowest Fees", "Good Climate", "Safe for Students"],
      imgUrl: imgKyrgyzstan,
      linkText: "Learn More"
    },
    {
      id: "MORE",
      code: "🌎",
      name: "More Destinations",
      subtitle: "Expanding Horizons",
      badge: "Coming Soon",
      badgeColor: "bg-[#1e2433]",
      desc: "We are constantly partnering with top medical universities globally.",
      fees: "TBA",
      duration: "Various",
      eligibility: "NEET Qualified",
      tags: ["Europe", "Asia", "Global Reach"],
      imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkText: "Stay Tuned",
      isComingSoon: true
    }
  ];

  return (
    <section id="destinations" className="py-10 md:py-14 bg-white relative w-full overflow-hidden font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <p className="text-[15px] font-bold text-gray-900 uppercase tracking-widest mb-3">
            STUDY DESTINATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e2433] mb-4 tracking-tight">
            Countries We Offer for MBBS Abroad
          </h2>
          <p className="text-[#64748b] max-w-3xl mx-auto text-[17px] leading-relaxed font-medium">
            As a trusted consultant for MBBS in abroad and one of the leading overseas MBBS consultants,
            SMMM Consultancy helps students choose the right destination based on their budget, career goals, and
            NMC guidelines.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {destinations.map((dest, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-slate-200"
            >
              {/* Image Header */}
              <div className="relative h-[220px] w-full">
                <img 
                  src={dest.imgUrl} 
                  alt={dest.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${dest.isComingSoon ? 'grayscale-[30%]' : ''}`} 
                />
                
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`${dest.badgeColor} text-white text-[13px] font-bold px-3 py-1.5 rounded-full shadow-md tracking-wide`}>
                    {dest.badge}
                  </span>
                </div>

                {/* Country Code & Title */}
                <div className="absolute bottom-4 left-5 flex items-end gap-3">
                  <div className="text-5xl font-black text-white/90 leading-none tracking-tighter">
                    {dest.code}
                  </div>
                  <div className="flex flex-col pb-0.5">
                    <span className="text-xl font-bold text-white leading-tight">{dest.name}</span>
                    <span className="text-[14px] text-white/80 font-medium">{dest.subtitle}</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-[15px] text-gray-600 font-medium mb-5 leading-relaxed line-clamp-2 min-h-[42px]">
                  {dest.desc}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-y-5 gap-x-2 mb-6">
                  {/* Fees */}
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 text-emerald-500 opacity-90">
                      <IndianRupee size={16} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-bold text-gray-900 leading-tight mb-0.5">{dest.fees}</span>
                      <span className="text-[13px] text-gray-500 font-medium leading-none">Total Fees</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 text-amber-500 opacity-90">
                      <Clock size={16} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-bold text-gray-900 leading-tight mb-0.5">{dest.duration}</span>
                      <span className="text-[13px] text-gray-500 font-medium leading-none">Duration</span>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="col-span-2 flex items-start gap-2.5">
                    <div className="mt-0.5 text-blue-500 opacity-90">
                      <GraduationCap size={16} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-bold text-gray-900 leading-tight mb-0.5">{dest.eligibility}</span>
                      <span className="text-[13px] text-gray-500 font-medium leading-none">Eligibility Criteria</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {dest.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-[#f1f5f9] text-[#475569] text-[12px] font-bold px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button 
                  className={`w-full py-3.5 rounded-lg font-bold text-[15px] flex items-center justify-between px-5 transition-all
                    ${dest.isComingSoon 
                      ? 'bg-gray-100 text-gray-500 cursor-default' 
                      : 'bg-[#121935] text-white hover:bg-[#1e2433] shadow-md shadow-[#121935]/20'
                    }
                  `}
                >
                  {dest.linkText}
                  {!dest.isComingSoon ? <ArrowRight size={16} /> : <ArrowUpRight size={16} className="opacity-50" />}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note Banner */}
        <div className="mt-12 relative overflow-hidden rounded-2xl shadow-xl border border-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 w-full bg-[#1e2433]">
          {/* Background Image / Overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          
          <div className="relative z-10 flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 hidden md:flex border border-white/20">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold text-[18px] mb-2 drop-shadow-md">Planning to Study Abroad?</h4>
              <p className="text-[15px] text-blue-100/90 max-w-2xl font-medium leading-relaxed drop-shadow-sm">
                Course duration may vary by university and applicable NMC regulations. Always verify the latest
                eligibility, fee structure, and admission requirements before applying.
              </p>
            </div>
          </div>
          <a 
            href="#contact" 
            className="relative z-10 shrink-0 w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] text-white rounded-lg font-bold text-[15px] hover:shadow-[0_8px_25px_rgba(48,175,255,0.4)] hover:-translate-y-1 transition-all shadow-md uppercase tracking-wide text-center"
          >
            Get Free Counselling
          </a>
        </div>

      </div>
    </section>
  );
};

export default Destinations;



