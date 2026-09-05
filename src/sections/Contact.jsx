import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

const GITHUB_URL = 'https://github.com/albus-dumbeldore914';
const LINKEDIN_URL = 'https://www.linkedin.com/in/j-pawan-bramha-gowd-301033432';
const EMAIL = 'gowdapawan35@gmail.com';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding border-t border-[#1e2025] bg-[#0d0e12]">
      <div className="max-w-6xl mx-auto">
        {/* Section Tag */}
        <motion.div {...fadeUp} className="flex items-center gap-2 mb-4">
          <span className="cal-badge font-mono uppercase tracking-wider text-[11px]">
            Direct Channel
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f5] font-cal mb-3"
        >
          Let’s discuss security, systems, or code.
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[#a1a1aa] mb-12 max-w-xl text-sm sm:text-base"
        >
          Available for cybersecurity internships, project collaborations, or technical discussions.
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-3"
          >
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cal-card p-4 flex items-center justify-between group hover:border-[#383b43]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#18191e] border border-[#272931] flex items-center justify-center text-[#f4f4f5]">
                  <LinkedinIcon size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#71717a] block uppercase">LinkedIn Profile</span>
                  <span className="text-sm font-semibold text-[#f4f4f5] group-hover:text-white">
                    j-pawan-bramha-gowd
                  </span>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-[#71717a] group-hover:text-white transition-colors" />
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cal-card p-4 flex items-center justify-between group hover:border-[#383b43]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#18191e] border border-[#272931] flex items-center justify-center text-[#f4f4f5]">
                  <GithubIcon size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#71717a] block uppercase">GitHub Repos</span>
                  <span className="text-sm font-semibold text-[#f4f4f5] group-hover:text-white">
                    albus-dumbeldore914
                  </span>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-[#71717a] group-hover:text-white transition-colors" />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="cal-card p-4 flex items-center justify-between group hover:border-[#383b43]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#18191e] border border-[#272931] flex items-center justify-center text-[#f4f4f5]">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#71717a] block uppercase">Direct Email</span>
                  <span className="text-sm font-semibold text-[#f4f4f5] group-hover:text-white">
                    {EMAIL}
                  </span>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-[#71717a] group-hover:text-white transition-colors" />
            </a>
          </motion.div>

          {/* Right Form */}
          <motion.form
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 cal-card p-6 sm:p-7 bg-[#121316] border-[#22242a] flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-mono text-[#71717a]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="px-3.5 py-2.5 rounded-lg bg-[#0e0f12] border border-[#22242a] text-[#f4f4f5] text-sm placeholder:text-[#52525b] focus:outline-none focus:border-[#424652] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-mono text-[#71717a]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="px-3.5 py-2.5 rounded-lg bg-[#0e0f12] border border-[#22242a] text-[#f4f4f5] text-sm placeholder:text-[#52525b] focus:outline-none focus:border-[#424652] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-mono text-[#71717a]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What project or opportunity would you like to discuss?"
                rows={4}
                className="px-3.5 py-2.5 rounded-lg bg-[#0e0f12] border border-[#22242a] text-[#f4f4f5] text-sm placeholder:text-[#52525b] focus:outline-none focus:border-[#424652] transition-colors resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                <CheckCircle size={14} />
                Message received! Ready to be connected to a production email provider.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-xs font-medium">
                <AlertCircle size={14} />
                Failed to send. Please connect via LinkedIn or Email directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="cal-btn-primary flex items-center justify-center gap-2 cursor-pointer mt-1"
            >
              <Send size={14} />
              <span>{status === 'sending' ? 'Transmitting...' : 'Send Direct Message'}</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
