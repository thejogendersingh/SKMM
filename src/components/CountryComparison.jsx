import React from 'react';
import { motion } from 'framer-motion';

const CountryComparison = () => {
  const data = [
    { country: "Russia", duration: "6 Years", medium: "English", fee: "₹18L - ₹35L", eligibility: "50% PCB + NEET", advantage: "Top Global Ranking" },
    { country: "Kazakhstan", duration: "5 Years", medium: "English", fee: "₹15L - ₹25L", eligibility: "50% PCB + NEET", advantage: "Modern Infrastructure" },
    { country: "Kyrgyzstan", duration: "5 Years", medium: "English", fee: "₹12L - ₹20L", eligibility: "50% PCB + NEET", advantage: "Lowest Budget" },
    { country: "Uzbekistan", duration: "5 Years", medium: "English", fee: "₹14L - ₹22L", eligibility: "50% PCB + NEET", advantage: "High Clinical Exposure" },
    { country: "Georgia", duration: "6 Years", medium: "English", fee: "₹25L - ₹40L", eligibility: "50% PCB + NEET", advantage: "European Standard" },
  ];

  return (
    <section className="py-12 md:py-16 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-medicalBlue rounded-full blur-[100px] opacity-20 -z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px] relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium mb-4 text-gray-900">Quick Country Comparison</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">A quick overview to help you compare top MBBS destinations. All fee ranges are indicative and subject to change.</p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-white/10 shadow-2xl bg-white/5 backdrop-blur-md">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-white/10 border-b border-white/10">
                <th className="py-4 px-6 font-semibold text-white">Country</th>
                <th className="py-4 px-6 font-semibold text-white">Course Duration</th>
                <th className="py-4 px-6 font-semibold text-white">Medium</th>
                <th className="py-4 px-6 font-semibold text-white">Approx. Fee Range*</th>
                <th className="py-4 px-6 font-semibold text-white">Eligibility</th>
                <th className="py-4 px-6 font-semibold text-white">Key Advantage</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    {row.country}
                  </td>
                  <td className="py-4 px-6 text-gray-300">{row.duration}</td>
                  <td className="py-4 px-6 text-gray-300">{row.medium}</td>
                  <td className="py-4 px-6 text-yellow-400 font-medium">{row.fee}</td>
                  <td className="py-4 px-6 text-gray-300">{row.eligibility}</td>
                  <td className="py-4 px-6 text-gray-300">{row.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">*Fee figures are indicative. Verify current fees and regulations before applying.</p>
          <a href="https://wa.me/919649637111?text=Hello%20SKMM%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="btn-primary text-sm whitespace-nowrap">
            Get Current Fee Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default CountryComparison;



