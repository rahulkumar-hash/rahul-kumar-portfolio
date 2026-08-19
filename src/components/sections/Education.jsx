import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { educationData } from "../../data/portfolio";

export default function Education() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Academic Foundation"
          title="Educational"
          highlight="Background"
          subtitle="Strong grounding in core computer science principles and software engineering."
        />

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-[#0c101c] border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-sm">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-cyan-300/90 font-medium mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 self-start sm:self-auto">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Academic Highlights
                </div>
                <div className="space-y-2">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
