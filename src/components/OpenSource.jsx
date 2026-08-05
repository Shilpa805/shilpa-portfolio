import React from 'react';
import { openSource } from '../data/portfolioData';
import { GitPullRequest, ShieldCheck, ExternalLink } from 'lucide-react';

export default function OpenSource() {
  return (
    <section id="opensource" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-8">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
            OPEN SOURCE
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Open Source Contributions
          </h2>
        </div>

        {openSource.map((item, idx) => (
          <div 
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium">
                    Merged PR #262
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {item.project} <span className="text-zinc-400 font-normal">Documentation Interface</span>
                  </h3>
                </div>
              </div>

              <a
                href={item.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center gap-1.5 self-start sm:self-auto transition-colors"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">
              {item.summary}
            </p>

            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs text-emerald-300 font-mono">
                577 / 577 Automated Tests Passing across 50 test suites ensuring dark-mode & reduced-motion accessibility.
              </span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
