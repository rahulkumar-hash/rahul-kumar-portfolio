import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  Server, 
  ShieldCheck, 
  Zap,
  Terminal
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { personalInfo } from "../../data/portfolio";

const pillars = [
  {
    icon: Layers,
    title: "Frontend Architecture",
    desc: "Building typed, modular React.js and Next.js applications using TypeScript, Tailwind CSS, Zustand, and Redux Toolkit with optimal render cycles and code-splitting."
  },
  {
    icon: Server,
    title: "Backend & Microservices",
    desc: "Designing resilient Node.js and Express.js RESTful APIs with JWT access & refresh token rotation, custom RBAC middleware, and scheduled task pipelines via Node-Cron."
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    desc: "Implementing low-latency bidirectional WebSockets with Socket.IO and Server-Sent Events (SSE) for live chat networks, instant alerts, and real-time dashboards."
  },
  {
    icon: Database,
    title: "Database Performance",
    desc: "Structuring high-throughput MongoDB data models, complex aggregation pipelines, compound indexing, and Redis caching layers for sub-second query execution."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Developer Profile"
          title="Transforming Complex Requirements Into"
          highlight="Production-Grade Systems"
          subtitle="Experienced in end-to-end product delivery from frontend architecture to Dockerized VPS/Cloud deployment."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Developer Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="text-cyan-400" size={22} />
                Engineering Philosophy & Approach
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a results-driven <strong className="text-white">Full Stack & React Developer</strong> with over 3+ years of hands-on experience architecting scalable, production-grade web applications using the modern JavaScript and TypeScript ecosystem.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My core strength lies in bridging seamless client-side experiences with performant, secure backend services. Whether architecting enterprise HRMS portals with granular <strong className="text-white">Role-Based Access Control (RBAC)</strong>, integrating real-time messaging with <strong className="text-white">Socket.IO/SSE</strong>, or optimizing MongoDB aggregation pipelines to slash latency by 40%, I focus on reliability and clean maintainability.
              </p>

              <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400">Location</span>
                  <div className="text-sm font-semibold text-white mt-0.5">{personalInfo.location}</div>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400">Availability</span>
                  <div className="text-sm font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {personalInfo.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Technical Highlights */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 to-slate-900/40 border border-cyan-500/20 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Core Specializations
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                  <span>React.js, Next.js (App Router), TypeScript, Redux Toolkit, Zustand</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                  <span>Node.js, Express.js, RESTful APIs, JWT Auth with Token Rotation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                  <span>MongoDB Aggregation Pipelines, Compound Indexing, Redis Caching</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                  <span>Linux VPS Deployment, PM2 Process Monitoring, Nginx Reverse Proxy</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: 4 Architectural Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all shadow-sm">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
                    <span>Pillar 0{idx + 1}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">Production Ready</span>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
