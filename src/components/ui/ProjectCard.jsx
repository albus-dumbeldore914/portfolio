import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="cal-card flex flex-col justify-between overflow-hidden bg-[#121316] border-[#22242a] hover:border-[#33363f] transition-all p-6 group"
    >
      <div className="flex flex-col gap-4">
        {/* Top bar: Category Badge + Status */}
        <div className="flex items-center justify-between">
          <span className="cal-badge text-[11px] font-mono uppercase tracking-wide text-[#a1a1aa] bg-[#18191e] border-[#282a32]">
            {project.category}
          </span>
          {project.highlight && (
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
              featured
            </span>
          )}
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-bold tracking-tight text-[#f4f4f5] group-hover:text-white transition-colors font-cal">
            {project.title}
          </h3>
          <p className="text-sm text-[#8e919e] mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Tags (Cal.com minimal monochrome tags) */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-mono text-[#a1a1aa] bg-[#17181d] border border-[#26272e] rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expandable "What I Learned" Accordion */}
        <div className="pt-2 border-t border-[#1e2025]">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs font-medium text-[#71717a] hover:text-[#e4e4e7] transition-colors py-1 cursor-pointer"
            aria-expanded={expanded}
          >
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            <span>{expanded ? 'Hide Architecture & Learnings' : 'What I Learned & Architecture'}</span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="learn"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-3 p-3 rounded-lg bg-[#0e0f12] border border-[#1e2025] space-y-2">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#71717a]">
                    Key Takeaways
                  </span>
                  <ul className="space-y-1.5">
                    {project.learned.map((item, i) => (
                      <li key={i} className="flex gap-2 text-xs text-[#a1a1aa] leading-relaxed">
                        <span className="text-[#71717a] font-mono">0{i + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Card Action Buttons (Cal.com crisp buttons) */}
      <div className="flex items-center gap-2 pt-5 mt-4 border-t border-[#1b1c22]">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cal-btn-secondary flex-1 flex items-center justify-center gap-1.5 text-xs py-2"
          aria-label={`GitHub — ${project.title}`}
        >
          <GithubIcon size={14} />
          <span>Code Repo</span>
          <ArrowUpRight size={12} className="text-[#71717a]" />
        </a>

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cal-btn-primary flex-1 flex items-center justify-center gap-1.5 text-xs py-2"
            aria-label={`Live Demo — ${project.title}`}
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        ) : (
          <span className="text-[11px] font-mono text-[#52525b] px-2" title="Source code available">
            src ready
          </span>
        )}
      </div>
    </motion.div>
  );
}
