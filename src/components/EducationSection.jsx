import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Sparkles } from "lucide-react";
import { EDUCATION } from "../data/cvData";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span>06 / ACADEMICS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Educational <span className="text-accent-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-sky-300 border border-white/10">
                    {edu.score}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {edu.degree}
                </h3>
                
                <p className="text-xs font-semibold text-zinc-400">
                  {edu.institution}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {edu.details}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
