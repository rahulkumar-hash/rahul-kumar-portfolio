import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database, Globe, ArrowUpRight } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0c101a] border border-slate-700/60 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)] text-slate-100 z-10 custom-scrollbar"
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#0c101a]/95 backdrop-blur-md border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs font-mono font-semibold tracking-wide uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                    {project.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors shadow-sm"
                  >
                    <span>Visit Live</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                  {project.title}
                  {project.domain && (
                    <span className="text-sm font-mono font-normal text-slate-400 hidden sm:inline">
                      ({project.domain})
                    </span>
                  )}
                </h3>
                <p className="text-base md:text-lg text-cyan-300/90 font-medium mt-1">
                  {project.tagline}
                </p>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4">
                  {project.overview}
                </p>
              </div>

              {/* Problem & Solution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-900/60 border border-rose-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Engineering Challenge / Problem
                  </div>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/60 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Architectural Solution
                  </div>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Implementation Highlights */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  Key Technical Deliverables & Features
                </h4>
                <div className="space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs md:text-sm text-slate-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Breakdown */}
              {project.architecture && (
                <div className="space-y-3">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                    <Cpu size={16} className="text-blue-400" />
                    System Architecture Breakdown
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(project.architecture).map(([layer, details]) => (
                      <div
                        key={layer}
                        className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1"
                      >
                        <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider font-semibold">
                          {layer}
                        </span>
                        <p className="text-xs md:text-sm text-slate-300">{details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Layers size={16} className="text-cyan-400" />
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                <div className="text-xs text-slate-400 font-mono">
                  Verified Production & Client System
                </div>
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
                    >
                      <span>Explore Live Application</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
