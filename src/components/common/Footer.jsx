import { motion } from "motion/react";
import { ArrowUp, Heart, FileDown, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../../data/portfolio";

export default function Footer({ onDownloadResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#06080d] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
                RK
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Full Stack & React Developer specialized in engineering scalable web platforms, real-time Socket.IO/SSE systems, and high-performance MongoDB architectures.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.status} • {personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Story</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Capabilities</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Work Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Production Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Stack</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Get in Touch</a>
              </li>
            </ul>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Connect & Verify
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-slate-400" />
                <span className="text-slate-300">{personalInfo.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-200 hover:text-white bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
              >
                <FileDown size={14} className="text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Rahul Kumar. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
