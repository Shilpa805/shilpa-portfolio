import React from "react";
import { motion } from "framer-motion";
import { Award, Code, GitPullRequest, Sparkles, Zap, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "../data/cvData";

const ICON_MAP = {
  Code: Code,
  Award: Award,
  Zap: Zap,
  GitPullRequest: GitPullRequest,
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span>05 / KEY MILESTONES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Honors & <span className="text-accent-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const IconComponent = ICON_MAP[item.iconName] || Trophy;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </h3>
                  <p className="text-sm font-semibold text-sky-300">
                    {item.label}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-sky-500/20 text-amber-400 border border-amber-500/30 shrink-0">
              <Trophy className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">
                Flipkart Grid Hackathon Qualifier
              </h4>
              <p className="text-xs text-zinc-400">
                Advanced to Round 3 in Flipkart Grid Hackathon on Unstop competitive track.
              </p>
            </div>
          </div>

          <span className="px-4 py-2 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-mono font-semibold shrink-0">
            Round 3 Qualifier
          </span>
        </motion.div>

      </div>
    </section>
  );
}
