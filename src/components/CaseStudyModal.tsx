"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Sparkles, AlertCircle, Lightbulb } from "lucide-react";
import { Project } from "@/data/cvData";
import { GithubIcon } from "@/components/Icons";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl z-10 max-h-[85vh] overflow-y-auto my-auto space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono border border-sky-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ENGINEERING CASE STUDY</span>
            </div>
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <p className="text-sm font-medium text-sky-400">{project.subtitle}</p>
          </div>

          {/* Metrics Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white/5 p-3 rounded-2xl border border-white/5 space-y-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <p className="text-xs text-zinc-300 font-medium">{metric}</p>
              </div>
            ))}
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Problem */}
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 text-sm font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>

          </div>

          {/* Key Engineering Takeaways */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Key Engineering Learnings</h4>
            <div className="space-y-2">
              {project.caseStudy.keyLearnings.map((learning, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                  <span>{learning}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-mono text-zinc-400 border border-white/5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full glass-panel hover:bg-white/10 text-xs font-semibold text-zinc-300 flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
