import React, { useState, useEffect } from "react";
import { faqData } from "@/utils/data/faq-data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Generate FAQPage JSON-LD Schema
  const [schemaData, setSchemaData] = useState("");
  
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    setSchemaData(JSON.stringify(schema));
  }, []);

  return (
    <div id="faq" className="relative z-50 my-12 lg:my-24">
      {/* Inject JSON-LD Schema dynamically */}
      {schemaData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
      )}
      
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-full" />
        </div>
      </div>
      
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 mt-8">
        <div className="flex flex-col gap-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`from-[#0d1224] border rounded-lg bg-gradient-to-r to-[#0a0d37] overflow-hidden transition-all duration-300 ${openId === faq.id ? 'border-[#16f2b3] shadow-[0_0_15px_rgba(22,242,179,0.2)]' : 'border-[#1b2c68a0] hover:border-pink-500/50'}`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none cursor-pointer"
              >
                <h3 className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-300 ${openId === faq.id ? 'text-[#16f2b3]' : 'text-white'}`}>
                  {faq.question}
                </h3>
                <div className={`text-pink-500 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : 'rotate-0'}`}>
                  <FaChevronDown size={16} />
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
              >
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-900 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
