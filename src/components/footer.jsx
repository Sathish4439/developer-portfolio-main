import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="relative z-50 border-t border-[#1b2c68a0] bg-[#0d1224] py-8 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright / Location Info */}
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Built with Passion in <span className="text-[#16f2b3]">{personalData.address}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-[#16f2b3] transition-colors duration-200">About</a>
            <a href="#services" className="hover:text-[#16f2b3] transition-colors duration-200">Services</a>
            <a href="#projects" className="hover:text-[#16f2b3] transition-colors duration-200">Projects</a>
            <a href="#contact" className="hover:text-[#16f2b3] transition-colors duration-200">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-all hover:scale-110 duration-200"
              title="GitHub"
              aria-label="GitHub"
            >
              <BsGithub size={20} />
            </a>
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-all hover:scale-110 duration-200"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
