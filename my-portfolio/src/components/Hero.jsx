import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="home"
      className="
        flex flex-col justify-center items-center min-h-[80vh]
        bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50
        dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
        text-center p-6 sm:p-8
      "
    >
      {/* Heading with Typewriter */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-md text-gray-900 dark:text-white leading-snug sm:leading-tight"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Hi,&nbsp;I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Typewriter
            words={["Deepak Singh", "a Web Developer", "a React Enthusiast"]}
            loop={0} // infinite
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={1500}
          />
        </span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4 sm:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I craft clean, modern, and performant web experiences.
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <SocialLink
          href="https://www.linkedin.com/in/deepak3003/"
          src="/icons8-linkedin-50.png"
          alt="LinkedIn"
          text="LinkedIn"
        />
        <SocialLink
          href="https://github.com/deepak3003"
          src="/icons8-github.gif"
          alt="GitHub"
          text="GitHub"
        />
        <SocialLink
          href="https://codolio.com/profile/deepak3003"
          src="/codolio.svg"
          alt="Codolio"
          text="Codolio"
        />
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a
          href="/DeepakResume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5 sm:px-6 py-2 sm:py-3
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            text-white font-semibold tracking-wide
            rounded-full shadow-lg
            hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
            dark:hover:from-indigo-400 dark:hover:via-purple-400 dark:hover:to-pink-400
            transform hover:scale-105 transition-all duration-300 ease-in-out
          "
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, src, alt, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-2 text-gray-800 dark:text-gray-200
        hover:text-blue-600 dark:hover:text-blue-400 transition text-base sm:text-lg
      "
    >
      <img
        src={src}
        alt={alt}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow"
      />
      <span className="hidden sm:inline">{text}</span>
    </a>
  );
}

export default Hero;
