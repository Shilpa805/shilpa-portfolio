import React from "react";
import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 z-10" />

      {/* Aurora glow blob 1 (Sky Blue) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-transparent blur-[120px]"
      />

      {/* Aurora glow blob 2 (Indigo Blue) */}
      <motion.div
        animate={{
          x: [0, -90, 60, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.95, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-indigo-500/12 via-sky-600/10 to-transparent blur-[140px]"
      />

      {/* Subtle bottom aura */}
      <div className="absolute bottom-0 inset-x-0 h-[400px] bg-gradient-to-t from-sky-950/20 via-transparent to-transparent blur-[100px]" />
    </div>
  );
}
