import React from 'react';
import { education, training } from '../data/portfolioData';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
            ACADEMICS & TRAINING
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Education & Bootcamps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              <span>Formal Education</span>
            </h3>

            {education.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-sky-400 font-semibold">{edu.badge}</span>
                  <span className="text-zinc-500">{edu.period}</span>
                </div>
                <h4 className="text-base font-bold text-white">{edu.institution}</h4>
                <p className="text-xs text-zinc-400">{edu.degree}</p>
                <div className="pt-2 flex justify-between items-center text-xs border-t border-zinc-800/60">
                  <span className="text-zinc-400">{edu.location}</span>
                  <span className="font-mono font-bold text-emerald-400">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Training */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Specialized Training</span>
            </h3>

            {training.map((t, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-indigo-400 font-semibold">{t.organization}</span>
                  <span className="text-zinc-500">{t.period}</span>
                </div>
                <h4 className="text-base font-bold text-white">{t.title}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">{t.description}</p>
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                  <strong className="text-sky-300">Capstone: </strong> {t.projectBuilt}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
