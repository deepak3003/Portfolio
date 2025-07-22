import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="py-16 px-6 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 text-center md:text-left">
        {/* Left: About Text */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">About Me</h3>
          <p className="text-lg text-gray-600 mb-6">
            I'm a passionate web developer with experience building modern,
            responsive web applications using React and state-of-the-art tools. I
            love transforming ideas into reality through clean, efficient code and
            delightful design.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#projects" className="text-blue-600 hover:underline">
              View Projects
            </a>
            <a href="#contact" className="text-blue-600 hover:underline">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-blue-100">
          <img
            src="/Deepak.jpeg"
            alt="Your Name"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default About;
