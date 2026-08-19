import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  Sparkles, 
  Check, 
  Copy, 
  Phone,
  Terminal,
  Code2,
  Cpu,
  Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import MagneticButton from "../common/MagneticButton";
import { personalInfo, codeSnippet } from "../../data/portfolio";

export default function Hero({ onDownloadResume, onCopySnippet }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    if (onCopySnippet) onCopySnippet();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Hero Copy & Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Eyebrow & Status Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{personalInfo.eyebrow}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{personalInfo.status}</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <MapPin size={13} className="text-slate-400" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm{" "}
              <span className="text-gradient-cyan relative">
                {personalInfo.name}
              </span>
              <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200">
                Engineering Scalable Web Systems with{" "}
                <span className="text-white border-b-2 border-cyan-500/60 pb-0.5">
                  React.js & Node.js
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle / Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
          >
            Full Stack & React Developer with <span className="text-white font-semibold">3+ years of production experience</span> building enterprise HRMS platforms, SaaS ecosystems, real-time Socket.IO/SSE architectures, and high-performance MongoDB aggregation pipelines.
          </motion.p>

          {/* Floating Technology Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Socket.IO",
              "Tailwind CSS"
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 pt-4"
          >
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight size={16} />
            </MagneticButton>

            <MagneticButton
              onClick={onDownloadResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/70 shadow-sm transition-all cursor-pointer"
            >
              <FileDown size={16} className="text-cyan-400" />
              <span>Download Resume</span>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-cyan-300 bg-transparent hover:bg-white/[0.04] border border-white/[0.08] transition-all cursor-pointer"
            >
              <Mail size={15} />
              <span>Let's Connect</span>
            </MagneticButton>
          </motion.div>

          {/* Social Quick Links & Direct Contacts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-400 font-mono"
          >
            <span className="text-slate-400">Direct Connect:</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail size={13} className="text-cyan-400" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Phone size={13} className="text-emerald-400" />
              <span>{personalInfo.phone}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Floating Code Workspace Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Ambient Card Backlight */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl opacity-60 group-hover:opacity-100 transition duration-1000" />

          {/* Terminal Window Card */}
          <div className="relative rounded-2xl bg-[#0a0d16] border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
            
            {/* Terminal Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d121f] border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal size={12} className="text-cyan-400" />
                  rahul.config.ts
                </span>
              </div>

              <button
                onClick={handleCopy}
                aria-label="Copy code snippet"
                className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800 transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto space-y-1">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-slate-400">=</span> &#123;
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">name</span>: <span className="text-emerald-300">"Rahul Kumar"</span>,
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">role</span>: <span className="text-emerald-300">"Full Stack & React.js Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">experience</span>: <span className="text-amber-300">"3+ Years Production"</span>,
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">status</span>: <span className="text-emerald-300">"Immediate Joiner"</span>,
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">location</span>: <span className="text-emerald-300">"Noida, India"</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-400">stack</span>: &#123;
              </div>
              <div className="pl-8">
                <span className="text-slate-400">frontend:</span> [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"TypeScript"</span>],
              </div>
              <div className="pl-8">
                <span className="text-slate-400">backend:</span> [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"REST APIs"</span>],
              </div>
              <div className="pl-8">
                <span className="text-slate-400">database:</span> [<span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"Redis"</span>, <span className="text-emerald-300">"PostgreSQL"</span>],
              </div>
              <div className="pl-8">
                <span className="text-slate-400">realtime:</span> [<span className="text-emerald-300">"Socket.IO"</span>, <span className="text-emerald-300">"SSE Alerts"</span>]
              </div>
              <div className="pl-4">&#125;,</div>
              <div className="pl-4">
                <span className="text-cyan-300">productionMetrics</span>: &#123;
              </div>
              <div className="pl-8">
                <span className="text-slate-400">appsShipped:</span> <span className="text-amber-400">"6+ live platforms"</span>,
              </div>
              <div className="pl-8">
                <span className="text-slate-400">loadSpeedGain:</span> <span className="text-emerald-400">"+40%"</span>,
              </div>
              <div className="pl-8">
                <span className="text-slate-400">apiLatencyDrop:</span> <span className="text-emerald-400">"-30%"</span>
              </div>
              <div className="pl-4">&#125;</div>
              <div>&#125;;</div>
            </div>

            {/* Terminal Footer Status */}
            <div className="px-5 py-2.5 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Ready for production deployment</span>
              </div>
              <span className="text-cyan-400 font-semibold">UTF-8</span>
            </div>
          </div>

          {/* Floating Metric Badge on Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center gap-3"
          >
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white">6+ Production Apps</div>
              <div className="text-[11px] text-slate-400">VPS Deployed & Live</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
