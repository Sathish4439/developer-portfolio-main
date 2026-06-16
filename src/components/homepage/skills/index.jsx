import { skillsData } from "@/utils/data/skills";
import { skillsCategories } from "@/utils/data/skills-categories";
import { skillsImage } from "@/utils/skill-image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4">
        {Object.entries(skillsCategories).map(([category, skills]) => (
          <div
            key={category}
            className="p-[1px] bg-gradient-to-b from-[#1b2c68a0] to-[#0a0d37] rounded-xl hover:from-[#16f2b3] transition-all duration-300"
          >
            <div className="bg-[#0d1224] rounded-xl p-5 h-full">
              <h3 className="text-[#16f2b3] text-lg font-bold mb-4 border-b border-indigo-900/50 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11152c] border border-indigo-950 text-gray-200 text-sm hover:border-[#16f2b3] transition-colors duration-200"
                  >
                    {skillsImage(skill) && (
                      <img
                        src={typeof skillsImage(skill) === 'string' ? skillsImage(skill) : (skillsImage(skill)?.src || skillsImage(skill)?.default || '')}
                        alt={skill}
                        className="h-4 w-auto rounded"
                      />
                    )}
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scrolling Marquee */}
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    {skillsImage(skill) && (
                      <img
                        src={typeof skillsImage(skill) === 'string' ? skillsImage(skill) : (skillsImage(skill)?.src || skillsImage(skill)?.default || '')}
                        alt={skill}
                        className="h-full w-auto rounded-lg"
                      />
                    )}
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
