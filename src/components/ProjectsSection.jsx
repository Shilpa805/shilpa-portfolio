import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/cvData";
import CaseStudyModal from "./CaseStudyModal";
import { GithubIcon } from "./Icons";

export default function ProjectsSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / FEATURED WORK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Highlighted <span className="text-accent-gradient">Projects</span> & Contributions
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base font-normal">
            Real-world full-stack platforms engineered for scale, speed, and clean user experience.
          </p>
        </motion.div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative group rounded-3xl p-3 glass-panel border border-white/10 overflow-hidden shadow-2xl">
                    <div className="relative w-full h-[300px] sm:h-[380px] rounded-2xl overflow-hidden bg-zinc-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    </div>
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                      Featured Project
                    </span>
                    <h3 className="text-3xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-panel glass-panel-hover px-5 py-2.5 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4 text-zinc-300" />
                      <span>Code</span>
                    </a>

                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="px-5 py-2.5 rounded-full bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 border border-sky-500/20 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Case Study</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
