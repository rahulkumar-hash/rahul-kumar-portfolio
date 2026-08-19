import { useState } from "react";
import { motion } from "motion/react";
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CreditCard, 
  Activity, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap,
  Cpu,
  Eye,
  Users,
  Lock,
  Radio
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { projects } from "../../data/portfolio";

export default function FeaturedProject({ onOpenModal }) {
  // Use WishPay HRMS as the flagship enterprise spotlight
  const featured = projects.find((p) => p.id === "wishpay-hrms") || projects[0];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#090d17]/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Flagship System Spotlight"
          title="Featured Production"
          highlight="Architecture"
          subtitle="A deep dive into an enterprise HRMS platform engineered end-to-end (Frontend & Backend) with dual Staff & Admin portals."
        />

        {/* Big Featured Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#0e1424] to-[#0a0d16] border border-cyan-500/30 p-6 sm:p-8 lg:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.1)] overflow-hidden"
        >
          {/* Subtle glowing ambient behind */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Project Details */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {featured.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                  Dual Portal Architecture
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {featured.title}
                </h3>
                <p className="text-lg text-cyan-300/90 font-medium mt-1">
                  {featured.tagline}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {featured.overview}
              </p>

              {/* Core Features list */}
              <div className="space-y-3 pt-2">
                {featured.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_8px_#06b6d4]" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Full Stack Technologies (Frontend + Backend)
                </div>
                <div className="flex flex-wrap gap-2">
                  {featured.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700/80 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenModal(featured)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
                >
                  <Eye size={16} />
                  <span>Inspect System Architecture</span>
                </button>

                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/70 transition-colors"
                  >
                    <span>Visit Live Portal</span>
                    <ArrowUpRight size={16} className="text-cyan-400" />
                  </a>
                )}
              </div>

            </div>

            {/* Right Column: Interactive Browser System Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#070a12] border border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Browser Top Nav */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d1220] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  
                  <div className="px-4 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-2 max-w-[280px] truncate">
                    <ShieldCheck size={12} className="text-emerald-400 shrink-0" />
                    <span className="truncate">https://wishpay.wishgeekstechserve.com</span>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 font-medium">LIVE</span>
                </div>

                {/* Mockup Body Content */}
                <div className="p-6 space-y-5">
                  
                  {/* Dual Portal Modules */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300 font-bold mb-1">
                        <span className="flex items-center gap-1.5"><Users size={14} /> Staff Portal</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <p className="text-[11px] text-slate-400">Attendance clock-in, leave requests & payslip downloads.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-indigo-500/30">
                      <div className="flex items-center justify-between text-xs font-mono text-indigo-300 font-bold mb-1">
                        <span className="flex items-center gap-1.5"><Lock size={14} /> Admin Portal</span>
                        <span className="text-[10px] text-emerald-400">RBAC</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Payroll automation, staff onboarding & compliance audit.</p>
                    </div>
                  </div>

                  {/* Architecture Diagram Box */}
                  <div className="p-5 rounded-xl bg-[#0b0f1c] border border-cyan-500/20 space-y-3 font-mono">
                    <div className="text-xs font-bold text-cyan-400 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Cpu size={14} /> Enterprise Security & Data Pipeline
                      </span>
                      <span className="text-[10px] text-emerald-400">SSE Enabled</span>
                    </div>

                    <div className="space-y-2 text-[11px] text-slate-300">
                      <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                        <span>1. JWT Access & Refresh Token Rotation</span>
                        <span className="text-emerald-400">Secure</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                        <span>2. Compound MongoDB Indexing (-40% Latency)</span>
                        <span className="text-cyan-400">Optimized</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                        <span>3. Server-Sent Events (SSE) Instant Alerts</span>
                        <span className="text-indigo-400">Real-Time</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                        <span>4. Linux VPS Deployment (Nginx + PM2)</span>
                        <span className="text-emerald-400">Zero-Downtime</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats Row */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                    <span>Engineered End-to-End by Rahul Kumar</span>
                    <span className="text-emerald-400 font-semibold">100% Production Grade</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
