import { motion } from "framer-motion";

export default function Training() {
  const trainings = [
    {
      title: "Data Structures & Algorithms",
      org: "Internshala Trainings",
      period: "Sep – Oct 2024",
      highlights: [
        "8-week certified training on arrays, stacks, queues, linked lists, trees, graphs",
        "Scored 93%, ranked top performer",
      ],
      link: "https://github.com/deepak3003/Certificate/blob/main/Data%20Structures%20%26%20Algorithms%20Training.png", // 🔗 put real link
    },
    {
      title: "Core Java",
      org: "Internshala Trainings",
      period: "Feb – Apr 2024",
      highlights: [
        "8-week certified training on Java fundamentals, OOP, database handling, GUI",
        "Scored 79% in final assessment",
      ],
      link: "https://github.com/deepak3003/Certificate/blob/main/Core%20Java%20Training.png", // 🔗 put real link
    },
  ];

  return (
    <section id="training" className="py-20 bg-gray-50 dark:bg-zinc-900">
      {/* Gradient heading */}
      <h2 className="text-4xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Training & Certifications
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {trainings.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 dark:border-zinc-700 p-7 transition-all flex flex-col"
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              {t.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {t.org} · {t.period}
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              {t.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            {/* Button */}
            {t.link && (
              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-5 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition shadow-md self-start"
              >
                View Certificate
              </a>
            )}

            {/* Accent underline */}
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
