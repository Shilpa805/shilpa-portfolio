import React from 'react';
import { personalInfo, skills, experience, projects, openSource, training, certificates, achievements, education } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header bar */}
        <div className="p-4 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400" />
            <h3 className="font-bold text-white text-sm">Shilpa Kumari - Curriculum Vitae</h3>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn-primary px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0e1422] text-slate-200 text-sm">
          
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">
              Shilpa Kumari
            </h1>
            <p className="text-cyan-400 font-mono text-xs mb-3 font-semibold">
              Full-Stack MERN Developer & Software Engineer | TCS Digital Offer Holder (₹7 LPA)
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.phone}</span>
              <span className="flex items-center gap-1"><LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" /> linkedin.com/in/shilpa-kumari08</span>
              <span className="flex items-center gap-1"><GithubIcon className="w-3.5 h-3.5 text-cyan-400" /> github.com/Shilpa805</span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 pb-1 border-b border-slate-800">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs">
              {Object.entries(skills).map(([cat, list]) => (
                <div key={cat} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-bold text-slate-300 font-mono">{cat}:</span>
                  <span className="sm:col-span-3 text-slate-300">{list.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 pb-1 border-b border-slate-800">
              Experience
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-white text-sm">{exp.company} — <span className="font-normal text-cyan-300">{exp.role}</span></h3>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 pb-1 border-b border-slate-800">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, pIdx) => (
                <div key={pIdx} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-white text-sm">{proj.title} <span className="text-xs text-slate-400 font-mono">({proj.tech.join(', ')})</span></h3>
                    <span className="text-xs font-mono text-slate-400">{proj.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-300">
                    {proj.metrics.map((m, mIdx) => (
                      <li key={mIdx}>{m}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Open Source & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 pb-1 border-b border-slate-800">
                Open Source Contributions
              </h2>
              <div className="text-xs text-slate-300 space-y-1">
                <p className="font-bold text-white">NitroStack (PR #262 Merged)</p>
                <p>Merged PR improving accessibility for MCP documentation interface. 577/577 tests passing.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 pb-1 border-b border-slate-800">
                Key Achievements
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                {achievements.map((ach, aIdx) => (
                  <li key={aIdx}><strong className="text-white">{ach.title}:</strong> {ach.description}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 pb-1 border-b border-slate-800">
              Education
            </h2>
            <div className="space-y-3 text-xs">
              {education.map((edu, eIdx) => (
                <div key={eIdx} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white">{edu.institution}</h3>
                    <p className="text-slate-400">{edu.degree}</p>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-slate-400">{edu.period}</span>
                    <p className="text-emerald-400 font-bold">{edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
