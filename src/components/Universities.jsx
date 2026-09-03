import React, { useRef } from 'react';
import { Trophy, MapPin, Building, ChevronLeft, ChevronRight, Banknote } from 'lucide-react';

const Universities = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const universities = [
    {
      country: "Russia",
      code: "RU",
      name: "Kazan Federal University",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Established in 1804, Kazan Federal University is one of Russia's oldest and most prestigious universities. It is recognized by the NMC, WHO, FAIMER, ECFMG, and the Russian Ministry of Science and Higher Education.",
      stats: {
        ranking: "Country #20th",
        founded: "1804",
        fees: "₽ 5,53,400",
        hostel: "₽ 20,000"
      }
    },
    {
      country: "Russia",
      code: "RU",
      name: "Chechen State University",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Established in 1938, Chechen State University is a government university recognized by the NMC and other global medical bodies. SMMM Consultancy is the official contractor in India, providing authentic admissions and complete support.",
      stats: {
        ranking: "Country #144th",
        founded: "1938",
        fees: "₽ 3,25,000",
        hostel: "₽ 84,000"
      }
    },
    {
      country: "Russia",
      code: "RU",
      name: "Tver State Medical University",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Tver State Medical University is one of Russia's leading government medical universities. It is popular among Indian students for its experienced faculty, modern teaching hospitals, affordable tuition fees, and NMC-recognized MBBS degree.",
      stats: {
        ranking: "#6700th",
        founded: "1936",
        fees: "₽ 4,30,000",
        hostel: "₽ 60,000"
      }
    },
    {
      country: "Kazakhstan",
      code: "KZ",
      name: "Al-Farabi Kazakh National",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "One of the top universities in Kazakhstan, offering excellent medical programs with advanced clinical training and modern infrastructure for international students.",
      stats: {
        ranking: "Top 5",
        founded: "1934",
        fees: "KZT 2,000,000",
        hostel: "KZT 150,000"
      }
    },
    {
      country: "Georgia",
      code: "GE",
      name: "Tbilisi State Medical",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Leading medical university in Georgia with a European standard curriculum. Highly preferred for its globally recognized degree and excellent FMGE passing rate.",
      stats: {
        ranking: "#1 in Georgia",
        founded: "1918",
        fees: "$ 8,000",
        hostel: "$ 2,000"
      }
    }
  ];

  return (
    <section className="py-10 md:py-14 bg-slate-100 overflow-hidden relative font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-gray-900 font-bold tracking-widest text-[14px] uppercase mb-3 block">
            OUR PARTNERS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Top NMC-Approved Universities We Partner With
          </h2>
          <p className="text-[16px] text-gray-600 leading-relaxed font-medium">
            We partner with leading NMC-approved medical universities globally, offering quality English-medium MBBS programs, experienced faculty, and modern infrastructure for Indian students.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Arrow Left */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-6 top-[45%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#30AFFF] transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards Scroll View */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {universities.map((uni, idx) => (
              <div 
                key={idx}
                className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img 
                    src={uni.image} 
                    alt={uni.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
                  
                  {/* NMC Approved Badge */}
                  <div className="absolute top-4 right-4 bg-[#22c55e] text-white text-[13px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md tracking-wide">
                    <Trophy size={14} strokeWidth={2.5} /> NMC Approved
                  </div>

                  {/* Country Overlay */}
                  <div className="absolute bottom-4 left-5 flex items-center gap-2">
                    <span className="text-white font-black text-2xl leading-none">{uni.code}</span>
                    <span className="text-white/90 font-bold text-[16px]">{uni.country}</span>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="p-5 lg:p-6 flex flex-col flex-grow bg-white">
                  <h3 className="text-[21px] font-extrabold text-gray-900 mb-3 leading-tight">{uni.name}</h3>
                  <p className="text-[15px] text-gray-500 mb-6 font-medium leading-relaxed flex-grow min-h-[80px]">
                    {uni.desc}
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-7">
                    {/* Ranking */}
                    <div className="bg-white border border-slate-200 p-3.5 rounded-lg shadow-sm">
                      <div className="flex items-center gap-1.5 text-[#30AFFF] mb-1.5 opacity-90">
                        <Trophy size={14} strokeWidth={2.5} />
                        <span className="text-[12px] font-bold tracking-wide">Ranking</span>
                      </div>
                      <p className="text-[15px] font-bold text-gray-900">{uni.stats.ranking}</p>
                    </div>
                    
                    {/* Founded */}
                    <div className="bg-white border border-slate-200 p-3.5 rounded-lg shadow-sm">
                      <div className="flex items-center gap-1.5 text-[#30AFFF] mb-1.5 opacity-90">
                        <MapPin size={14} strokeWidth={2.5} />
                        <span className="text-[12px] font-bold tracking-wide">Founded</span>
                      </div>
                      <p className="text-[15px] font-bold text-gray-900">{uni.stats.founded}</p>
                    </div>

                    {/* Total Fees */}
                    <div className="bg-white border border-slate-200 p-3.5 rounded-lg shadow-sm">
                      <div className="flex items-center gap-1.5 text-[#30AFFF] mb-1.5 opacity-90">
                        <Banknote size={14} strokeWidth={2.5} />
                        <span className="text-[12px] font-bold tracking-wide">Total Fees</span>
                      </div>
                      <p className="text-[15px] font-bold text-gray-900">{uni.stats.fees}</p>
                    </div>

                    {/* Hostel */}
                    <div className="bg-white border border-slate-200 p-3.5 rounded-lg shadow-sm">
                      <div className="flex items-center gap-1.5 text-[#30AFFF] mb-1.5 opacity-90">
                        <Building size={14} strokeWidth={2.5} />
                        <span className="text-[12px] font-bold tracking-wide">Hostel</span>
                      </div>
                      <p className="text-[15px] font-bold text-gray-900">{uni.stats.hostel}</p>
                    </div>
                  </div>
                  
                  {/* Apply Button */}
                  <a href="#contact" className="w-full flex items-center justify-center bg-[#121935] text-white py-3.5 rounded-lg font-bold text-[15px] hover:bg-[#1e2433] transition-colors shadow-md">
                    Apply to This University
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Right */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-6 top-[45%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#30AFFF] transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
          
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2, 3, 4].map((dot) => (
            <div 
              key={dot} 
              className={`w-2 h-2 rounded-full transition-colors ${dot === 0 ? 'bg-[#121935]' : 'bg-[#e5e7eb]'}`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Universities;



