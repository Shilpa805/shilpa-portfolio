import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#09090b] py-8 text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div>
          <span className="text-zinc-300 font-bold">Shilpa Kumari</span> — Full-Stack Developer
        </div>

        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
