import * as React from "react";
import { FaRegStar, FaCode, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className={`group relative h-full from-[#0d1224] border rounded-lg bg-gradient-to-r to-[#0a0d37] w-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(22,242,179,0.35)] ${
      project.featured 
        ? "border-violet-500/70 hover:border-[#16f2b3]" 
        : "border-[#1b2c68a0] hover:border-[#16f2b3]"
    }`}>
      {/* Decorative gradient lines */}
      <div className="flex flex-row">
        <div className={`h-[1px] w-full bg-gradient-to-r from-transparent ${
          project.featured ? "via-pink-500 to-emerald-400" : "via-pink-500 to-violet-600"
        }`}></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Card Header */}
      <div className="px-6 lg:px-8 py-5 border-b border-indigo-900/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-[#16f2b3] text-xl lg:text-2xl font-semibold">
              {project.name}
            </h3>
            {project.featured && (
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <FaRegStar size={10} className="animate-spin-slow" />
                Featured
              </span>
            )}
          </div>
          <div className="flex flex-row space-x-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-orange-400"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-200"></div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-6 lg:px-8 py-6">
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution block (if exists) */}
        {(project.problem || project.solution) && (
          <div className="mb-6 grid grid-cols-1 gap-4 rounded-lg bg-[#070b1e] border border-indigo-950 p-4">
            {project.problem && (
              <div>
                <span className="text-pink-400 text-xs font-semibold uppercase tracking-wider">
                  Problem
                </span>
                <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div>
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Solution
                </span>
                <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Role */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs lg:text-sm uppercase tracking-wide mb-1 block">
              My Role
            </span>
            <span className="text-[#16f2b3] text-sm lg:text-base font-medium">
              {project.role}
            </span>
          </div>
        </div>

        {/* Tools/Tech Stack */}
        <div>
          <span className="text-gray-400 text-xs lg:text-sm uppercase tracking-wide mb-3 block">
            Technologies Used
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#1a1443] border border-[#1b2c68a0] text-amber-300 text-xs lg:text-sm rounded hover:bg-[#1b2c68] hover:border-[#16f2b3] transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons (if code/demo links exist) */}
      {(project.code || project.demo) && (
        <div className="px-6 lg:px-8 py-4 border-t border-indigo-900/50 flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#16f2b3] text-[#0d1224] text-sm font-semibold rounded hover:bg-[#14d9a3] transition-colors duration-200 text-center"
            >
              <FaExternalLinkAlt size={12} />
              <span>Live Demo</span>
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[#16f2b3] text-[#16f2b3] text-sm font-semibold rounded hover:bg-[#16f2b3] hover:text-[#0d1224] transition-colors duration-200 text-center"
            >
              <FaCode size={14} />
              <span>View Code</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
