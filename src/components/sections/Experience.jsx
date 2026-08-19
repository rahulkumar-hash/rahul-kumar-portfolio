import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { experiences } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Career Trajectory"
          title="Professional Work"
          highlight="Experience"
          subtitle="3+ years of progressive engineering leadership across enterprise systems, SaaS platforms, and high-traffic consumer web applications."
        />

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line (Centered on Desktop, Left on Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Center Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-9 h-9 rounded-full bg-[#0a0d16] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                      {exp.current ? (
                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      ) : (
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer on opposite side for desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl group">
                      
                      {/* Role & Company Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                            {exp.role}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2 mt-0.5">
                            <Building2 size={18} className="text-slate-400" />
                            {exp.company}
                          </h3>
                        </div>

                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                      </div>

                      {/* Date & Location Pill */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono mb-4 pb-4 border-b border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Brief Overview */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Responsibilities & Bullet Points */}
                      <div className="space-y-2.5 mb-6">
                        {exp.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="pt-3 border-t border-slate-800/80">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                          Technologies Utilized
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-cyan-300 border border-slate-700/80 hover:border-cyan-500/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
