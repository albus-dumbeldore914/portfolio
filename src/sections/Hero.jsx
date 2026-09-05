import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

export default function Hero() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden cal-grid-bg"
    >
      {/* Subtle radial spotlight (Cal.com SaaS hero style) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Cal.com style Announcement / Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18191d] border border-[#26282e] text-[#d4d4d8] text-xs font-medium mb-8 hover:border-[#383b43] transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/20" />
          <span>2nd-Year Cybersecurity Student &amp; Systems Builder</span>
          <span className="text-[#71717a]">/</span>
          <span className="text-[#a1a1aa] font-mono text-[11px]">2025–2026</span>
        </motion.div>

        {/* Cal.com bold clean hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f4f5] mb-6 font-cal"
        >
          J Pawan Bramha Gowd
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Building, breaking, and understanding technology — from cybersecurity and
          backend systems to artificial intelligence.
        </motion.p>

        {/* Action Buttons (Cal.com primary and secondary styles) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a
            href="https://github.com/albus-dumbeldore914"
            target="_blank"
            rel="noopener noreferrer"
            className="cal-btn-secondary flex items-center gap-2 text-xs sm:text-sm font-medium"
          >
            <GithubIcon size={16} />
            <span>GitHub Profile</span>
            <ArrowUpRight size={14} className="text-[#71717a]" />
          </a>

          <a
            href="https://www.linkedin.com/in/j-pawan-bramha-gowd-301033432"
            target="_blank"
            rel="noopener noreferrer"
            className="cal-btn-primary flex items-center gap-2 text-xs sm:text-sm"
          >
            <LinkedinIcon size={16} />
            <span>Connect on LinkedIn</span>
          </a>
        </motion.div>

        {/* Cal.com style Interactive Mini-Widget / Proof Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto cal-card p-4 sm:p-5 text-left border-[#23252a] bg-[#121316]/90 shadow-2xl mb-12"
        >
          <div className="flex items-center justify-between border-b border-[#23252a] pb-3 mb-3 text-xs text-[#71717a] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#26282e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#26282e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#26282e]" />
              <span className="text-[#a1a1aa] ml-2 flex items-center gap-1">
                <Terminal size={12} /> pawan-stack.config
              </span>
            </div>
            <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
              <ShieldCheck size={12} /> verified
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-[#71717a] block font-mono text-[11px]">FOCUS</span>
              <span className="text-[#e4e4e7] font-medium">Cybersecurity</span>
            </div>
            <div>
              <span className="text-[#71717a] block font-mono text-[11px]">ENGINEERING</span>
              <span className="text-[#e4e4e7] font-medium">Backend &amp; Node</span>
            </div>
            <div>
              <span className="text-[#71717a] block font-mono text-[11px]">RESEARCH</span>
              <span className="text-[#e4e4e7] font-medium">Neural Nets / AI</span>
            </div>
            <div>
              <span className="text-[#71717a] block font-mono text-[11px]">FOUNDATIONS</span>
              <span className="text-[#e4e4e7] font-medium">OS &amp; Arch</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator: "Scroll to view my work" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center"
        >
          <button
            onClick={() => scrollToSection('#projects')}
            aria-label="Scroll to view my work"
            className="flex flex-col items-center gap-2 text-[#71717a] hover:text-[#d4d4d8] transition-colors cursor-pointer group"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#71717a] group-hover:text-white transition-colors">
              Scroll to view my work
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-7 h-7 rounded-full bg-[#18191d] border border-[#282a30] flex items-center justify-center text-[#a1a1aa] group-hover:border-[#3f3f46] group-hover:text-white transition-colors"
            >
              <ArrowDown size={14} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
