import { motion } from 'framer-motion';
import { Shield, Brain, Server, Terminal, Cpu, Layers } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const pillars = [
  {
    icon: Shield,
    title: 'Cybersecurity & Analysis',
    desc: 'Understanding offensive vectors, security scanning, threat modeling, and defensive implementations.',
  },
  {
    icon: Server,
    title: 'Backend & Systems',
    desc: 'Designing REST APIs, Express/Node architectures, controllers, middleware, and state handling.',
  },
  {
    icon: Brain,
    title: 'Neural Networks & AI',
    desc: 'Studying models and learning loops from first principles rather than relying only on external APIs.',
  },
  {
    icon: Cpu,
    title: 'Computer Architecture & OS',
    desc: 'Analyzing process scheduling algorithms, control unit designs, and low-level execution pipelines.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-[#1e2025] bg-[#0b0c0e]">
      <div className="max-w-6xl mx-auto">
        {/* Section Pill / Tag */}
        <motion.div {...fadeUp} className="flex items-center gap-2 mb-4">
          <span className="cal-badge font-mono uppercase tracking-wider text-[11px]">
            About Me
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f5] mb-6 font-cal max-w-2xl"
        >
          Curious about how software and systems behave beneath the surface.
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative (Cal.com high-contrast legible editorial typography) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 space-y-4 text-[#a1a1aa] leading-relaxed text-base"
          >
            <p>
              I’m <span className="text-[#f4f4f5] font-semibold">J Pawan Bramha Gowd</span>, a 2nd-year cybersecurity student. Rather than solely cataloging coursework, I spend my time building real systems from the ground up: writing security scanners, prototyping backend services, and studying neural network internals.
            </p>
            <p>
              I believe in learning by doing. To understand cybersecurity, I wrote automated scanning tools in Python. To understand backend engineering, I built Node.js &amp; Express APIs with custom controllers and database storage. To understand AI, I started implementing neural network concepts directly to demystify the mathematics behind models.
            </p>
            <p>
              My goal is to graduate as an agile, technically grounded engineer who can build resilient applications, audit system vulnerabilities, and engineer dependable infrastructure.
            </p>

            {/* Profile Avatar Card (Cal.com minimalist user card) */}
            <div className="pt-3">
              <div className="cal-card p-3.5 flex items-center justify-between max-w-md bg-[#121316] border-[#23252a]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1e2025] border border-[#2c2f37] flex items-center justify-center font-cal font-bold text-sm text-[#f4f4f5]">
                    PBG
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#f4f4f5] leading-tight">
                      J Pawan Bramha Gowd
                    </h4>
                    <p className="text-xs text-[#71717a] font-mono mt-0.5">
                      Cybersecurity • 2nd Year Student
                    </p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400" title="Active learner" />
              </div>
            </div>
          </motion.div>

          {/* Feature Grid / Core Focus Pillars (Cal.com 2x2 Bento Cards) */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {pillars.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                className="cal-card p-4 bg-[#121316] border-[#202227]"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-md bg-[#1b1d22] border border-[#282a31] flex items-center justify-center text-[#d4d4d8]">
                    <item.icon size={15} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#f4f4f5]">{item.title}</h3>
                </div>
                <p className="text-xs text-[#8f929d] leading-relaxed pl-9">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
