import React from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Projects & Case Studies
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono font-medium">
                    {proj.subtitle}
                  </span>
                  <span className="text-zinc-500 font-mono">
                    {proj.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {proj.title}
                </h3>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {proj.description}
                </p>

                {/* Key Metrics */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
                  {proj.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Tech */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-800 text-[11px] font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-black text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
