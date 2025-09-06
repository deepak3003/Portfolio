import { motion } from "framer-motion";

export default function Experience() {
  const items = [
    {
      role: "Machine Learning Intern",
      company: "Summer Internship Program",
      period: "05 Jul 2025 – 18 Aug 2025",
      details: [
        "Completed training on ML algorithms, data preprocessing, model evaluation",
        "Built and deployed a Medical Chatbot using NLP techniques",
      ],
    },
    // add more experiences as needed
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-zinc-900">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Center line visible only on md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full" />

        {items.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`relative mb-12 flex flex-col md:flex-row ${
              idx % 2 === 0
                ? "md:justify-start md:pr-10"
                : "md:justify-end md:pl-10"
            }`}
          >
            {/* Timeline dot (md+) */}
            <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 dark:bg-zinc-900 dark:border-purple-500 z-10 shadow" />

            {/* Card */}
            <div className="bg-white dark:bg-zinc-800 w-full md:w-5/12 rounded-2xl shadow-md hover:shadow-2xl p-6 border border-gray-100 dark:border-zinc-700">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {exp.company} · {exp.period}
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
