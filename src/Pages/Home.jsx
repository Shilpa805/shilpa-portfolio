"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sparkles,
  Award,
  Code2
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import shilpaImg from "../assets/shilpa.jpg";

// Constants
const TYPING_SPEED = 80;
const ERASING_SPEED = 40;
const PAUSE_DURATION = 2000;
const WORDS = [
  "Full-Stack MERN Developer",
  "Software Engineer",
  "TCS Digital Offer Holder (₹7 LPA)",
  "500+ DSA Problems Solved",
];
const TECH_STACK = ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/Shilpa805/" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/shilpa-kumari08/" },
  { icon: Mail, link: "mailto:shilpakumari12911@gmail.com" },
];

export default function Home() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 10,
    });

    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Typing effect
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isTyping) {
          if (charIndex < WORDS[wordIndex].length) {
            setText((prev) => prev + WORDS[wordIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsTyping(false), PAUSE_DURATION);
          }
        } else {
          if (charIndex > 0) {
            setText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            setWordIndex((prev) => (prev + 1) % WORDS.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, wordIndex]);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen pt-20">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 lg:gap-12 py-12">
            
            {/* Left Column - Text Content */}
            <div
              className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {/* TCS Offer Badge */}
              <div
                className="inline-block animate-float lg:mx-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center">
                    <Award className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.75rem] font-semibold">
                      TCS Digital Offer Holder (₹7 LPA)
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <div
                className="space-y-2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                  <span className="relative inline-block">
                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                    <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Shilpa Kumari
                    </span>
                  </span>
                </h1>
              </div>

              {/* Typing Effect */}
              <div
                className="h-10 flex items-center justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <span className="text-xl md:text-2xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-medium">
                  {text}
                </span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
              </div>

              {/* Summary Paragraph */}
              <p
                className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Computer Science student at <strong className="text-blue-300">LPU</strong> with a passion for designing scalable MERN stack web applications, optimizing database query times by <strong className="text-emerald-400">65%</strong>, and solving <strong className="text-amber-300">500+ DSA problems</strong>.
              </p>

              {/* Tech Stack Pills */}
              <div
                className="flex flex-wrap gap-2.5 justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                {TECH_STACK.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs font-mono text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-row gap-3 justify-center lg:justify-start pt-2"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                <a href="#Portfolio">
                  <button className="group relative w-[150px] cursor-pointer">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                    <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm">
                        <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                          Projects
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-200 group-hover:rotate-45 transform transition-all duration-300 z-10" />
                      </span>
                    </div>
                  </button>
                </a>
                <a href="#Contact">
                  <button className="group relative w-[150px] cursor-pointer">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                    <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm">
                        <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                          Contact
                        </span>
                        <Mail className="w-4 h-4 text-gray-200 group-hover:translate-x-1 transform transition-all duration-300 z-10" />
                      </span>
                    </div>
                  </button>
                </a>
              </div>

              {/* Social Links */}
              <div
                className="flex gap-4 justify-center lg:justify-start pt-2"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group relative p-2.5">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2.5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                      </div>
                    </button>
                  </a>
                ))}
              </div>

            </div>

            {/* Right Column - Profile Image Frame */}
            <div
              className="w-full lg:w-2/5 flex items-center justify-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="relative w-72 h-80 sm:w-80 sm:h-96">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] rounded-3xl blur-xl transition-all duration-700 ${
                    isHovering ? "opacity-70 scale-105" : "opacity-30 scale-100"
                  }`}
                ></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/40">
                  <img
                    src={shilpaImg}
                    alt="Shilpa Kumari"
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovering ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Open to Opportunities
                    </span>
                    <span className="text-gray-300 font-mono">B.Tech CSE '26</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
