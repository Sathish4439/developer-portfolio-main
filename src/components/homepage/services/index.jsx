import { servicesData } from "@/utils/data/services-data";
import { FaMobileAlt, FaCode, FaServer, FaRocket, FaCloud, FaAws, FaNetworkWired, FaTools } from "react-icons/fa";

const iconMap = {
  FaMobileAlt: <FaMobileAlt size={32} className="text-[#16f2b3]" />,
  FaCode: <FaCode size={32} className="text-pink-500" />,
  FaServer: <FaServer size={32} className="text-emerald-400" />,
  FaRocket: <FaRocket size={32} className="text-violet-500" />,
  FaCloud: <FaCloud size={32} className="text-cyan-400" />,
  FaAws: <FaAws size={32} className="text-orange-400" />,
  FaNetworkWired: <FaNetworkWired size={32} className="text-yellow-400" />,
  FaTools: <FaTools size={32} className="text-red-400" />
};

function ServicesSection() {
  return (
    <div id="services" className="relative z-50 my-12 lg:my-24">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      
      <div className="flex flex-col items-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Services I Offer
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
        <p className="text-gray-400 text-sm md:text-base mt-3 text-center max-w-lg px-4">
          High-performance development services tailored to scale your product and grow your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {servicesData.map((service) => (
          <div 
            key={service.id}
            className="group relative flex flex-col justify-between from-[#0d1224] border border-[#1b2c68a0] rounded-xl bg-gradient-to-r to-[#0a0d37] p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(22,242,179,0.2)] hover:-translate-y-2 hover:border-[#16f2b3]"
          >
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#1a1443] group-hover:bg-[#1b2c68] transition-colors duration-300">
              {iconMap[service.icon]}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#16f2b3] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-4 right-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#16f2b3]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Book a Free Consultation CTA */}
      <div className="flex justify-center mt-12">
        <a
          href="#contact"
          className="px-6 py-3.5 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-center text-sm font-semibold uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:scale-105 shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)]"
        >
          Book a Free Consultation
        </a>
      </div>
    </div>
  );
}

export default ServicesSection;
