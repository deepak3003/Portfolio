import React from "react";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiC, SiMongodb, SiTensorflow } from "react-icons/si";
import { MdOutlineMemory } from "react-icons/md";

const skills = [
  { name: "DSA with Java", icon: <FaJava className="text-red-600" /> },
  { name: "C Programming", icon: <SiC className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  {
    name: "Machine Learning",
    icon: <MdOutlineMemory className="text-green-600" />,
  },
  { name: "Deep Learning", icon: <SiTensorflow className="text-orange-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-6 py-20 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Blurred Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl animate-blob1 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl animate-blob2 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-14">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-100 tracking-wide">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blob1 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-25px) scale(1.05); }
          }
          .animate-blob1 {
            animation: blob1 9s infinite ease-in-out;
          }

          @keyframes blob2 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(25px) scale(1.05); }
          }
          .animate-blob2 {
            animation: blob2 11s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
