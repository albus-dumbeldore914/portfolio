import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Shield, Brain, Cpu, Wrench } from 'lucide-react';
import SkillBadge from '../components/ui/SkillBadge';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2, Server, Shield, Brain, Cpu, Wrench,
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const displayed =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="section-padding border-t border-[#1e2025] bg-[#0d0e12]">
      <div className="max-w-6xl mx-auto">
        {/* Section Tag */}
        <motion.div {...fadeUp} className="flex items-center gap-2 mb-4">
          <span className="cal-badge font-mono uppercase tracking-wider text-[11px]">
            Technical Competencies
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f5] font-cal"
            >
              Skills &amp; Capabilities
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[#a1a1aa] mt-2 max-w-xl text-sm sm:text-base"
            >
              Hands-on proficiencies without misleading percentage meters. Concrete tools, stacks, and theoretical fundamentals.
            </motion.p>
          </div>

          {/* Cal.com style Tab Segmented Control */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex p-1 rounded-lg bg-[#141518] border border-[#23252a] self-start md:self-auto overflow-x-auto max-w-full"
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#202227] text-white shadow-sm'
                  : 'text-[#858895] hover:text-[#d4d4d8]'
              }`}
            >
              All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-[#202227] text-white shadow-sm'
                    : 'text-[#858895] hover:text-[#d4d4d8]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Skill Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="cal-card p-5 bg-[#121316] border-[#22242a] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#191b20] border border-[#272930] flex items-center justify-center text-[#d4d4d8]">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#f4f4f5] font-cal">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[#71717a]">
                        {cat.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <SkillBadge key={skill.name} name={skill.name} />
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
