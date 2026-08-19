import { motion } from "motion/react";
import { 
  Layers, 
  Zap, 
  ShieldCheck, 
  Database, 
  LayoutDashboard, 
  Server,
  ArrowRight
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { whatIBuild } from "../../data/portfolio";

const iconMap = {
  Layers: Layers,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Database: Database,
  LayoutDashboard: LayoutDashboard,
  Server: Server
};

export default function WhatIBuild() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Capabilities & Scope"
          title="What I Build & Deliver"
          highlight="For Production"
          subtitle="Specialized capabilities built upon real-world project deliveries and client systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIBuild.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Layers;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
