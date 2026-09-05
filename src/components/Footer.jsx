import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2025] bg-[#090a0c] text-[#71717a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#18191d] border border-[#272930] text-[#f4f4f5] flex items-center justify-center font-bold text-[10px] font-cal">
              PBG
            </div>
            <span className="text-[#d4d4d8] font-semibold text-sm">
              J Pawan Bramha Gowd
            </span>
          </div>
          <p className="text-xs text-[#585b66] mt-1 font-mono">
            © {new Date().getFullYear()} J Pawan Bramha Gowd • All rights reserved
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 text-xs">
          <a
            href="https://github.com/albus-dumbeldore914"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors p-1.5"
            aria-label="GitHub"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/j-pawan-bramha-gowd-301033432"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors p-1.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
            <ArrowUpRight size={11} className="text-[#585b66]" />
          </a>

          <a
            href="mailto:gowdapawan35@gmail.com"
            className="flex items-center gap-1 hover:text-white transition-colors p-1.5"
            aria-label="Email"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>

          <div className="w-px h-3.5 bg-[#23252a] mx-1" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 text-xs text-[#8f929d] hover:text-white transition-colors p-1.5 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
