import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', ...Object.keys(skills)];

  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
            TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Skills & Capabilities
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-sky-500 text-black font-semibold shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => {
            if (activeTab !== 'All' && activeTab !== category) return null;

            return (
              <div 
                key={category}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4"
              >
                <h3 className="text-base font-bold text-white font-mono border-b border-zinc-800 pb-2">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-sky-500/50 hover:text-sky-300 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-sky-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
