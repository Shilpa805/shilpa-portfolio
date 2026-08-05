import React from "react";
import { PERSONAL_INFO } from "../data/cvData";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-zinc-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Built with React + Tailwind CSS by Shilpa Kumari</span>
        </div>
      </div>
    </footer>
  );
}
