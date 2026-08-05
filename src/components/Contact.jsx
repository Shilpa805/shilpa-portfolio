import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10 text-center max-w-xl mx-auto">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Contact Shilpa Kumari
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Open for software engineering roles, full-stack projects, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                  <div className="flex flex-col truncate">
                    <span className="text-[11px] text-zinc-500 font-mono">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-zinc-100 hover:text-sky-400 truncate">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button onClick={copyEmail} className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white shrink-0">
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[11px] text-zinc-500 font-mono">Phone / WhatsApp</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-zinc-100 hover:text-emerald-400">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button onClick={copyPhone} className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white shrink-0">
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-300" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message Delivered</h3>
                  <p className="text-xs text-zinc-400">Thank you! Shilpa will respond to your email soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-xs focus:outline-none focus:border-sky-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-xs focus:outline-none focus:border-sky-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">Message</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-xs focus:outline-none focus:border-sky-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
