import { motion } from 'framer-motion';

export default function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative flex gap-5 group"
    >
      {/* Cal.com clean vertical hairline indicator */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#3a3d46] group-hover:bg-[#f4f4f5] transition-colors mt-1.5" />
        {!isLast && (
          <div className="w-px flex-1 bg-[#23252a] mt-2 mb-1" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono font-medium text-[#71717a] bg-[#141519] border border-[#23252a] px-2 py-0.5 rounded">
            {item.year}
          </span>
          <h3 className="text-base font-semibold text-[#f4f4f5] font-cal">
            {item.title}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-[#8f929e] leading-relaxed mb-3">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-[#71717a] bg-[#121316] border border-[#202227] px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
