import React from "react";
import { motion } from "framer-motion";
import { Code2, GraduationCap, Layers, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data/cvData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Engineering with <span className="text-accent-gradient">Precision</span> & Curiosity
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 glass-panel glass-panel-hover rounded-3xl p-8 space-y-6 border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Who I Am</h3>
            </div>

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed font-normal">
              {PERSONAL_INFO.aboutStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 flex flex-col gap-6"
          >
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 space-y-3 flex-1">
              <div className="p-2.5 w-max rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">What I Build</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Full-stack web applications, RESTful microservices, real-time Socket.IO chat platforms, and performant CMS solutions.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 space-y-3 flex-1">
              <div className="p-2.5 w-max rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Current Status</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Final year B.Tech CSE student at LPU ('26), TCS Digital Offer Holder (₹7 LPA), actively contributing to open-source software.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
