import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, AlertCircle } from 'lucide-react';

const Checklist = () => {
  const documents = [
    "Original Passport (Minimum 18 months validity)",
    "10th Marksheet & Certificate",
    "12th Marksheet & Certificate",
    "NEET UG Scorecard (Qualified)",
    "10 Passport-size Photographs (White background)",
    "Medical Fitness Certificate (Including HIV report)",
    "Birth Certificate",
    "Bank Statement of Parents (If required by embassy)"
  ];

  return (
    <section className="py-10 bg-red-50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="bg-white rounded-3xl  border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-navy-900 text-white p-10 flex flex-col justify-center">
              <h2 className="section-title">Documents You May Need</h2>
              <p className="text-red-100 mb-8">
                Keep these documents ready to ensure a smooth admission and visa process.
              </p>
              <a href="https://wa.me/919672854110?text=Hello%20Eduway India%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-center mt-auto">
                Get Detailed Checklist
              </a>
            </div>
            
            <div className="md:col-span-3 p-8">
              <ul className="space-y-4 mb-8">
                {documents.map((doc, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FileCheck className="text-medicalBlue shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{doc}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
                <AlertCircle className="text-medicalBlue shrink-0 mt-0.5" size={20} />
                <p className="text-xs text-gray-600">
                  <strong className="text-navy-900">Note:</strong> Requirements may vary by university, country and current regulations. Confirm the latest requirements with our counsellors before submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;



