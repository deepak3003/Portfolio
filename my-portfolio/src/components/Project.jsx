import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Real Time Chat",
    description:
      "A fully functional real-time chat app using Spring Boot, WebSocket & STOMP.",
    img: "RealTimeChat.png",
    live: "https://real-time-chat-wt3s.onrender.com/",
    code: "https://github.com/deepak3003/Real-Time_Chat",
  },
  {
    title: "Todo List",
    description:
      "A simple task manager with vanilla JavaScript, HTML, and CSS.",
    img: "/todolist.png",
    live: "https://deepak3003.netlify.app/day%2010%20to-do%20list/",
    code: "https://github.com/deepak3003/JavaScript_Project/tree/main/Day%2010%20To-Do%20List",
  },
  {
    title: "Medical Chatbot",
    description:
      "Chatbot that uses NLP to answer basic medical queries for quick info.",
    img: "/medibot.png",
    code: "https://github.com/deepak3003/Medical_Chatbot",
  },
  {
    title: "File Hider",
    description:
      "The File Hider is a simple Java-based utility that allows users to hide and unhide files.",
    img: "/FileHider.png",
    code: "https://github.com/deepak3003/File_Hider",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-14">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
            Projects
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="
                group bg-white dark:bg-zinc-800 rounded-xl
                shadow-md hover:shadow-2xl p-6 flex flex-col
                transition duration-300 ease-in-out
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4 group-hover:opacity-90 transition"
              />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition text-sm"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full shadow-md hover:bg-gray-800 transition text-sm"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
