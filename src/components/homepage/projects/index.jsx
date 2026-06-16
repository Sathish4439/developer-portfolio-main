import { useState } from "react";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "featured") return project.featured;
    if (activeTab === "mobile") return project.tools.includes("Flutter") || project.tools.includes("Dart");
    if (activeTab === "fullstack") return project.tools.includes("NodeJS") || project.tools.includes("Node.js") || project.tools.includes("Express") || project.tools.includes("Express.js");
    return true; // "all"
  });

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="mb-12 lg:mb-16">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <h2 className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </h2>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { id: "featured", label: "★ Featured Projects" },
          { id: "all", label: "All Projects" },
          { id: "mobile", label: "Mobile Apps (Flutter)" },
          { id: "fullstack", label: "Full Stack / APIs" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full border transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-[#16f2b3] text-[#0d1224] border-[#16f2b3]"
                : "bg-[#0d1224] text-white border-indigo-900 hover:border-[#16f2b3]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id || index} className="w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
