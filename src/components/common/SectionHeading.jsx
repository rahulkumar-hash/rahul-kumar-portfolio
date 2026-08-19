import { motion } from "motion/react";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = true
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}{" "}
        {highlight && (
          <span className="text-gradient-cyan">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      {centered && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>
      )}
    </motion.div>
  );
}
