import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-20 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md tracking-wider">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443] mt-4"></span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="font-medium mb-5 text-[#16f2b3] text-xl uppercase tracking-wider">
            Who I am?
          </h2>
          <div className="text-gray-200 text-sm lg:text-lg leading-loose space-y-4">
            <p>{personalData.description}</p>
          </div>
          
          {/* Trust Signals */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm font-medium">
              <span className="font-bold">✓</span> Fast Delivery
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              <span className="font-bold">✓</span> Scalable Architecture
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium">
              <span className="font-bold">✓</span> Clean Code
            </div>
          </div>

          {/* Core Specializations Checklist */}
          <div className="mt-8">
            <h3 className="text-gray-300 font-semibold mb-3 text-base md:text-lg">Core Expertise & Specializations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-[#16f2b3] font-bold">✓</span> Flutter Mobile Apps
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#16f2b3] font-bold">✓</span> React Web Applications
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#16f2b3] font-bold">✓</span> Node.js APIs
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#16f2b3] font-bold">✓</span> AWS Cloud Deployment
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#16f2b3] font-bold">✓</span> MVP Development
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#16f2b3] font-bold">✓</span> SaaS Platforms
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-[#1b2c68a0] overflow-hidden shadow-[0_0_30px_rgba(22,242,179,0.15)] transition-all duration-500 hover:scale-105 hover:border-[#16f2b3]/80 hover:shadow-[0_0_40px_rgba(22,242,179,0.3)]">
            <img 
              src={personalData.profile} 
              alt={personalData.name} 
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
