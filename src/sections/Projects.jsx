import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';
import { projects, categoryFilters } from '../data/projects';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding border-t border-[#1e2025] bg-[#0b0c0e]">
      <div className="max-w-6xl mx-auto">
        {/* Section Tag */}
        <motion.div {...fadeUp} className="flex items-center gap-2 mb-4">
          <span className="cal-badge font-mono uppercase tracking-wider text-[11px]">
            Engineering Work
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f5] font-cal"
            >
              Projects &amp; Systems
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[#a1a1aa] mt-2 max-w-xl text-sm sm:text-base"
            >
              Hands-on implementations across security tooling, AI architecture, backend systems, and operating system scheduling.
            </motion.p>
          </div>

          {/* Cal.com style Tab Segmented Control */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex p-1 rounded-lg bg-[#141518] border border-[#23252a] self-start md:self-auto overflow-x-auto max-w-full"
          >
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-[#202227] text-white shadow-sm'
                    : 'text-[#858895] hover:text-[#d4d4d8]'
                }`}
              >
                {filter}
                <span className="ml-1.5 text-[10px] font-mono text-[#585b66]">
                  {filter === 'All'
                    ? projects.length
                    : projects.filter((p) => p.category === filter).length}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
