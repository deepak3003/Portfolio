import React from "react";

const projects = [
  {
    title: "Real Time Chat",
    description:
      "A fully functional real-time chat application built using Spring Boot, WebSocket, and STOMP protocol.",
    img: "RealTimeChat.png",
    live: "https://real-time-chat-wt3s.onrender.com/",
    code: "https://github.com/deepak3003/Real-Time_Chat",
  },
  {
    title: "Todo List",
    description:
      "A simple task management application with HTML, CSS and JavaScript.",
    img: "/todolist.png",
    live: "https://deepak3003.netlify.app/day%2010%20to-do%20list/",
    code: "http://github.com/deepak3003/JavaScript_Project/tree/main/Day%2010%20To-Do%20List",
  },
  {
    title: "Medical Chatbot",
    description:
      "A medical chatbot that uses NLP to answer health-related queries and assist users with quick, reliable medical information.",
    img: "/medibot.png",
    code: "https://github.com/deepak3003/Medical_Chatbot",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-14">
          <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                bg-white dark:bg-zinc-800
                rounded-lg shadow hover:shadow-lg transition
                p-6 flex flex-col
              "
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block text-center px-4 py-2
                      bg-green-600 text-white rounded
                      hover:bg-green-700 dark:hover:bg-green-500 transition w-full
                    "
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block text-center px-4 py-2
                    bg-blue-600 text-white rounded
                    hover:bg-blue-700 dark:hover:bg-blue-500 transition w-full
                  "
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
