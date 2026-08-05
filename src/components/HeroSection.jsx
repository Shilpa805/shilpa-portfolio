import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Award, Mail, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data/cvData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import shilpaImg from "../assets/shilpa.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-sky-500/20 text-xs font-semibold text-sky-300 shadow-lg">
            <Award className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{PERSONAL_INFO.tcsBadge}</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 font-mono text-sm tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Hi, I'm</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
            Shilpa <br />
            <span className="text-accent-gradient">Kumari</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-zinc-300">
            {PERSONAL_INFO.role}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#projects"
              className="btn-accent px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="glass-panel glass-panel-hover px-6 py-3 rounded-full text-sm font-semibold text-white flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-panel hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-panel hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-full glass-panel hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Portrait Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-88 sm:w-80 sm:h-96 lg:w-88 lg:h-[420px]">
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-transparent rounded-3xl blur-2xl opacity-70 animate-pulse" />

            <div className="relative w-full h-full glass-panel rounded-3xl p-3 overflow-hidden border border-white/15 shadow-2xl group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900">
                <img
                  src={shilpaImg}
                  alt="Shilpa Kumari"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-sky-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Available for Opportunities
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      LPU '26
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
