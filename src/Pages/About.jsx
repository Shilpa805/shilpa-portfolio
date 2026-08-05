import React, { useEffect, memo } from "react";
import { FileText, Code, Sparkles, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import shilpaImg from "../assets/shilpa.jpg";

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <h2
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      About Me
    </h2>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into high-performance digital solutions
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-center lg:justify-end items-center p-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
      <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
        <img
          src={shilpaImg}
          alt="Shilpa Kumari"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Shilpa Kumari
              </span>
            </h2>

            <p
              className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Computer Science student at <strong className="text-blue-300">Lovely Professional University (LPU)</strong> with a strong foundation in full-stack web development, database optimization, and competitive coding. Secured an offer from <strong className="text-amber-300">TCS for the Digital profile (₹7 LPA)</strong> and solved <strong className="text-purple-300">500+ DSA problem statements</strong> across LeetCode, GeeksforGeeks, and HackerRank.
            </p>

            {/* Highlights */}
            <div className="space-y-2 text-sm text-gray-300" data-aos="fade-right" data-aos-duration="1600">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Web Development Intern @ <strong>Inglu Global</strong> (Jan'26 – Jun'26)</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>65% Database Query Speedup on <strong>Contest Tracker</strong></span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Merged PR #262 in <strong>NitroStack</strong> (577/577 tests passing)</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4 pt-2">
              <a
                href="#Contact"
                className="w-full lg:w-auto"
              >
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <FileText className="w-5 h-5" /> Get in Touch
                </button>
              </a>
              <a href="#Portfolio" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-[#a855f7]/10 cursor-pointer"
                >
                  <Code className="w-5 h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);
