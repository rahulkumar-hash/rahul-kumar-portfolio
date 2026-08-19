import { motion } from "motion/react";
import { TrendingUp, Rocket, Timer, CheckCircle, Award } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { achievements } from "../../data/portfolio";

const icons = [TrendingUp, Rocket, Timer, CheckCircle];

export default function Achievements() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Proven Impact"
          title="Measurable Engineering"
          highlight="Achievements"
          subtitle="Quantifiable results delivered across performance optimization, production delivery, and UI turnaround speed."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-mono tracking-tight">
                      {item.metric}
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.label}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400/80 flex items-center gap-1.5">
                  <Award size={13} className="text-cyan-400" />
                  <span>Production Validated</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
