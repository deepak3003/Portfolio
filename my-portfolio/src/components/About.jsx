import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Deepak.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center px-6 py-12 md:py-20 bg-white dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-[-3rem] w-64 h-64 bg-blue-300 opacity-20 rounded-full filter blur-3xl animate-blob1 pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-3rem] w-64 h-64 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-blob2 pointer-events-none"></div>

      {/* Subtle Wave Accent */}
      <svg className="absolute top-0 left-0 w-full h-20" viewBox="0 0 1440 320">
        <path
          fill="#93c5fd"
          fillOpacity="0.15"
          d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,218.7C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Profile Image (RIGHT on desktop) */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-400 opacity-40 blur-2xl" />
          <img
            src={profilePic}
            alt="Deepak Singh"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-xl object-cover relative z-10"
          />
          <span className="absolute inset-0 rounded-full border-4 border-blue-300 animate-spin-slow pointer-events-none" />
        </div>

        {/* About Text (LEFT on desktop) */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-white/80 leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              Deepak Singh
            </span>
            , an aspiring{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              CSE Engineer & Full Stack Developer
            </span>{" "}
            based in Gorakhpur, Uttar Pradesh.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-white/80 leading-relaxed">
            Currently pursuing B.Tech at Dr. A.P.J. Abdul Kalam Technical
            University, I enjoy transforming ideas into efficient, scalable
            solutions.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-white/80 leading-relaxed">
            Passionate about{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              problem solving, teamwork, and creativity
            </span>
            —I thrive on building real-world projects that make an impact.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>

      {/* Animations */}
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) scale(1);}
          50% { transform: translateY(-25px) scale(1.05);}
        }
        .animate-blob1 { animation: blob1 8s infinite ease-in-out; }

        @keyframes blob2 {
          0%, 100% { transform: translateY(0) scale(1);}
          50% { transform: translateY(25px) scale(1.05);}
        }
        .animate-blob2 { animation: blob2 10s infinite ease-in-out; }

        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </section>
  );
};

export default About;
