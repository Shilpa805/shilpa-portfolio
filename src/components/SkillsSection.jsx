import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Code2, Database, Terminal } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/cvData";

const CATEGORY_ICONS = {
  Languages: Code2,
  "Technologies & Frameworks": Cpu,
  "Core Engineering Concepts": Database,
  "Developer Tools & Platforms": Terminal,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 / TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Core <span className="text-accent-gradient">Stack</span> & Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.title] || Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-sky-500/20 hover:to-indigo-500/20 border border-white/10 hover:border-sky-400/50 transition-all duration-300 flex items-center justify-between gap-3 cursor-default"
                    >
                      <span className="text-xs font-mono font-medium text-zinc-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
