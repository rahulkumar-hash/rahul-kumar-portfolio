import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Layers, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Sparkles,
  CheckCircle2,
  Boxes
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { skillsData } from "../../data/portfolio";

const tabs = [
  { id: "frontend", label: "Frontend", icon: Layers },
  { id: "backend", label: "Backend & APIs", icon: Server },
  { id: "databases", label: "Databases & Cache", icon: Database },
  { id: "devops", label: "DevOps & Cloud", icon: Terminal },
  { id: "integrations", label: "Integrations & APIs", icon: Boxes }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const currentData = skillsData[activeTab];

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Battle-Tested"
          highlight="Technologies & Tools"
          subtitle="Specialized in modern JavaScript/TypeScript stack with end-to-end full stack execution capabilities."
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                    : "text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800"
                }`}
              >
                <Icon size={16} className={isActive ? "text-cyan-400" : "text-slate-400"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0b0f1a]/90 border border-slate-800 shadow-2xl space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    {currentData.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    {currentData.description}
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 self-start sm:self-auto flex items-center gap-2">
                  <Sparkles size={14} />
                  <span>{currentData.skills.length} Core Competencies</span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentData.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      skill.highlight
                        ? "bg-gradient-to-r from-slate-900 to-slate-900/80 border-cyan-500/30 hover:border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.08)]"
                        : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${skill.highlight ? "bg-cyan-400 shadow-[0_0_8px_#06b6d4]" : "bg-slate-400"}`} />
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {skill.category}
                        </div>
                      </div>
                    </div>

                    {skill.highlight && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                        Primary
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Tech Marquee / Quick Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Frequently Deployed Stack
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {[
              "React.js",
              "Next.js App Router",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Socket.IO",
              "Server-Sent Events",
              "Zustand",
              "Redux Toolkit",
              "Tailwind CSS",
              "JWT Rotation",
              "Redis",
              "Linux VPS",
              "Nginx",
              "PM2",
              "Razorpay"
            ].map((name) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
