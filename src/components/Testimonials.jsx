import React, { useRef } from 'react';
import { Star, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>

  </svg>
);

const Testimonials = () => {
  const scrollRef = useRef(null);

  const reviews = [
    {
      name: "Aarav Sharma",
      time: "2 months ago",
      avatar: "A",
      color: "bg-purple-600",
      text: "Eduway India provides a perfect combination of professionalism and student support. I would gladly recommend their services to others. The entire visa and admission process for Russia was completely seamless."
    },
    {
      name: "Priya Patel",
      time: "3 months ago",
      avatar: "P",
      color: "bg-red-600",
      text: "I was confused about studying MBBS in Kazakhstan, but Eduway India made the process simple. Their counseling, university selection, and visa support were excellent. They are with you till you reach the campus!"
    },
    {
      name: "Rohan Desai",
      time: "4 months ago",
      avatar: "R",
      color: "bg-amber-500",
      text: "Best consultancy for MBBS abroad in Georgia—proper guidance, transparent fees & full support till admission. Thanks to the entire team for helping me secure a seat in Tbilisi State Medical University."
    },
    {
      name: "Ananya Singh",
      time: "5 months ago",
      avatar: "A",
      color: "bg-green-600",
      text: "Very genuine consultancy for MBBS abroad. They guided me through every step for admission in Kyrgyzstan. From documentation to travel arrangements, everything was handled perfectly without any hidden charges."
    },
    {
      name: "Vikram Reddy",
      time: "5 months ago",
      avatar: "V",
      color: "bg-teal-500",
      text: "I had a great experience with Eduway India. They are very transparent and honest about the universities, fee structure, and hostel facilities in Uzbekistan. Truly the best advisors you can get."
    },
    {
      name: "Neha Gupta",
      time: "6 months ago",
      avatar: "N",
      color: "bg-rose-500",
      text: "Eduway India is doing a great job! Their team is very polite and always ready to help. They made my journey to Russia very smooth and hassle-free."
    }
  ];

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -350 : 350, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="testimonials" 
      className="py-12 md:py-16 relative font-sans border-t border-slate-100 overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/8828679/pexels-photo-8828679.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')` }}
    >
      {/* Light Overlay for Map Background */}
      <div className="absolute inset-0 bg-[#f4f7fc]/90 backdrop-blur-[1px]"></div>

      <div className="container mx-auto px-4 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="font-bold tracking-widest uppercase text-[12px] sm:text-[13px] text-transparent bg-clip-text bg-gradient-to-r from-[#B00010] to-[#E00018] mb-2 block">
            STUDENT SUCCESS STORIES
          </span>
          <h2 className="section-title">
            What Our Students Say
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed font-medium">
            Real stories from real students who trusted Eduway India with their MBBS abroad journey.
          </p>
        </div>

        {/* Content Area - Only Scrollable Reviews Now */}
        <div className="max-w-7xl mx-auto relative group">
            
          {/* Scroll Buttons (Desktop) */}
          <button onClick={() => scroll('left')} className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full  border border-slate-200 items-center justify-center z-20 hover:bg-slate-50 text-gray-600 transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft size={22} />
          </button>
          <button onClick={() => scroll('right')} className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full  border border-slate-200 items-center justify-center z-20 hover:bg-slate-50 text-gray-600 transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight size={22} />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 pt-1 snap-x snap-mandatory hide-scrollbar px-4 lg:px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, idx) => (
              <div 
                key={idx} 
                className="w-[300px] md:w-[340px] shrink-0 bg-white rounded-xl p-5 border border-slate-200  snap-center flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[16px] shrink-0 ${review.color}`}>
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-gray-900 leading-tight">{review.name}</h4>
                      <span className="text-[12px] text-gray-500 font-medium">{review.time}</span>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                  <CheckCircle2 size={13} className="text-red-600 ml-1" />
                </div>
                
                <p className="text-[14px] text-gray-700 leading-relaxed line-clamp-4">
                  {review.text}
                </p>
                
                <button className="text-[13px] text-gray-500 font-medium mt-3 text-left hover:text-gray-800 transition-colors">
                  Read more
                </button>
              </div>
            ))}
          </div>
            
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
