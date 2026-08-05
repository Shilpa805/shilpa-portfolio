import React from 'react';
import { achievements, certificates } from '../data/portfolioData';
import { Trophy, Award, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Achievements() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 }
    });
  };

  return (
    <section id="achievements" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
            HONORS & CREDENTIALS
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
        </div>

        {/* Top Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {achievements.map((item, idx) => (
            <div 
              key={idx}
              onClick={triggerConfetti}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all cursor-pointer space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                  {item.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="text-zinc-300 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certificates List */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <h3 className="text-lg font-bold text-white border-b border-zinc-800 pb-3">
            Verified Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificates.map((cert, cIdx) => (
              <div key={cIdx} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  {cert.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
