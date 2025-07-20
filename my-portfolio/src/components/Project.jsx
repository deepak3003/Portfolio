import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek, responsive website built with React and Tailwind CSS to showcase my work.",
    img: "https://via.placeholder.com/400x200", // Replace with project image or remove this line
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Todo App",
    description:
      "A simple task management app with React hooks and local storage.",
    img: "https://via.placeholder.com/400x200",
    link: "https://your-todoapp-link.com",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-10 text-center text-gray-800">
          Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-6 flex flex-col items-center"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
