import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "@/assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <img
        src="/section.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-0 -z-10 w-full"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center items-center">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col gap-6 items-center w-full max-w-2xl">
              {experiences.map((experience) => (
                <div key={experience.id} className="w-full items-center">
                  <GlowCard identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative w-full min-h-[120px] items-center">
                      <img
                        src="/blur-23.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute bottom-0 opacity-80 w-full items-center"
                      />
                      <div className="flex items-start gap-x-6 px-3 py-4">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-[#16f2b3] mb-2">
                            {experience.duration}
                          </p>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base text-gray-300 font-semibold">
                            {experience.company}
                          </p>
                          {experience.achievements && (
                            <ul className="mt-3 list-disc list-inside text-xs text-gray-450 space-y-1.5 border-t border-indigo-950 pt-2.5">
                              {experience.achievements.map((ach, idx) => {
                                // Render markdown **bold** as bold HTML elements
                                const highlightedText = ach.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#16f2b3] font-bold">$1</strong>');
                                
                                return (
                                  <li key={idx} className="text-left text-gray-400 leading-relaxed pl-1 -indent-4 ml-4">
                                    <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
