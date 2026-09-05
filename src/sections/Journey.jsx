import { motion } from 'framer-motion';
import TimelineItem from '../components/ui/TimelineItem';
import { timelineItems } from '../data/timeline';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function Journey() {
  return (
    <section id="journey" className="section-padding border-t border-[#1e2025] bg-[#0b0c0e]">
      <div className="max-w-4xl mx-auto">
        {/* Section Tag */}
        <motion.div {...fadeUp} className="flex items-center gap-2 mb-4">
          <span className="cal-badge font-mono uppercase tracking-wider text-[11px]">
            Trajectory &amp; Growth
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f5] font-cal mb-3"
        >
          Learning Journey &amp; Milestones
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[#a1a1aa] mb-12 max-w-xl text-sm sm:text-base"
        >
          From syntax fundamentals to security analysis and AI architecture. The path of deliberate practice.
        </motion.p>

        {/* Timeline container */}
        <div className="cal-card p-6 sm:p-8 bg-[#121316] border-[#22242a]">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === timelineItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
