import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Experience() {
  return (
    <section id="experience" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="mb-10">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
            WORK EXPERIENCE
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all space-y-5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 text-xs font-mono">
                      {exp.type}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.role} <span className="text-sky-400 font-normal">@ {exp.company}</span>
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {exp.live && (
                    <a
                      href={exp.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-black text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-xs sm:text-sm">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-400 text-xs font-mono border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
