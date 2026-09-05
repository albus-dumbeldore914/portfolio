import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './ui/Icons';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0b0c0e]/80 backdrop-blur-md border-b border-[#23252a]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo - J Pawan Bramha Gowd */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Go to top"
        >
          <div className="w-8 h-8 rounded-lg bg-[#18191d] border border-[#272930] text-[#f4f4f5] flex items-center justify-center font-bold text-xs font-cal transition-all group-hover:border-[#3a3d46] group-hover:bg-[#202227]">
            PBG
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">
            J Pawan Bramha Gowd
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-1.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-white/[0.04] transition-all rounded-md cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          <div className="w-px h-4 bg-[#23252a] mx-2" />

          <a
            href="https://github.com/albus-dumbeldore914"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#d4d4d8] hover:text-white hover:bg-white/[0.06] border border-[#282a30] rounded-md transition-all"
            title="GitHub"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/j-pawan-bramha-gowd-301033432"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0b0c0e] bg-[#f4f4f5] hover:bg-white rounded-md transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon size={14} />
            <span>Connect</span>
            <ArrowUpRight size={13} className="text-[#52525b]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#a1a1aa] hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0b0c0e] border-b border-[#23252a] px-4 py-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-sm text-[#a1a1aa] hover:text-white hover:bg-white/[0.04] rounded-md text-left transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-2 pt-3 border-t border-[#23252a] mt-2">
                <a
                  href="https://github.com/albus-dumbeldore914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white border border-[#282a30] rounded-md"
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/j-pawan-bramha-gowd-301033432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-[#0b0c0e] bg-white rounded-md"
                >
                  <LinkedinIcon size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
