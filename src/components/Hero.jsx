import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { ArrowRight, Mail, Download, Sparkles, Award, Code2, Zap, GitPullRequest } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import shilpaImg from '../assets/shilpa.jpg';

export default function Hero({ onOpenResume }) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="about" className="pt-28 pb-16 sm:pt-36 sm:pb-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Offer Pill */}
            <div 
              onClick={triggerConfetti}
              className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 hover:border-sky-400 transition-all group"
            >
              <Award className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono font-medium text-sky-300">
                {personalInfo.tcsOffer}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Shilpa Kumari
              </h1>
              <p className="text-lg sm:text-xl font-medium text-sky-400 font-mono">
                Full-Stack MERN Developer & Software Engineer
              </p>
            </div>

            {/* Summary */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Computer Science student at <strong className="text-white">LPU</strong> with expertise in building scalable web apps, optimizing database queries by <strong className="text-emerald-400">65%</strong>, and solving <strong className="text-amber-300">500+ DSA problems</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 font-semibold text-xs sm:text-sm flex items-center gap-2 border border-zinc-700/80 transition-all"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-xs sm:text-sm flex items-center gap-2 border border-zinc-800 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume CV</span>
              </button>
            </div>

            {/* Clean Key Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-800/80 w-full text-xs">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-lg font-bold text-white block font-mono">500+</span>
                <span className="text-[11px] text-zinc-400">DSA Solved</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-lg font-bold text-amber-400 block font-mono">₹7 LPA</span>
                <span className="text-[11px] text-zinc-400">TCS Digital</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-lg font-bold text-emerald-400 block font-mono">65%</span>
                <span className="text-[11px] text-zinc-400">Query Speedup</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-lg font-bold text-sky-400 block font-mono">577</span>
                <span className="text-[11px] text-zinc-400">OpenSource Tests</span>
              </div>
            </div>

          </div>

          {/* Right Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl shadow-xl space-y-3">
                <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden">
                  <img 
                    src={shilpaImg} 
                    alt="Shilpa Kumari" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="px-2 py-1 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 font-mono text-[11px]">Available for Opportunities</span>
                  </div>
                  <span className="font-mono text-[11px]">LPU '26</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
