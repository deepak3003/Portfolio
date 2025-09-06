import React from "react";
import { FaTrophy, FaStar } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    title: "2nd Prize – 9th TECH YUVA",
    date: "Oct 2024",
    detail:
      "Certificate of Merit for 1st Runner-Up in TECH YUVA organised by Buddha Group of Institutions, Gorakhpur (AKTU).",
    link: "https://github.com/deepak3003/Certificate/blob/main/3rd%20year%20TechYuva.jpg", // 🔗 certificate URL
    label: "View Certificate",
  },
  {
    icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    title: "2nd Prize – 8th TECH YUVA",
    date: "Oct 2023",
    detail:
      "Certificate of Merit for 1st Runner-Up in TECH YUVA organised by Buddha Institute of Technology, Gorakhpur (AKTU).",
    link: "https://github.com/deepak3003/Certificate/blob/main/2nd%20year%20TechYuva.jpg", // 🔗 certificate URL
    label: "View Certificate",
  },
  {
    icon: <FaStar className="text-green-500 text-3xl" />,
    title: "LeetCode 100+ Problems",
    date: "Ongoing",
    detail:
      "Consistently practicing DSA; solved 100+ questions on LeetCode improving problem-solving skills.",
    link: "https://leetcode.com/deepak3003/",
    label: "View Profile",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-16 px-6 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-14">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Achievements
          </span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition p-6 text-left flex flex-col items-start"
            >
              <div className="mb-4">{ach.icon}</div>
              <h4 className="text-lg font-semibold mb-1">{ach.title}</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {ach.date}
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {ach.detail}
              </p>

              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-5 py-2 text-sm font-semibold
             rounded-full bg-gradient-to-r from-indigo-500 to-purple-600
             text-white shadow hover:shadow-lg hover:from-indigo-600 hover:to-purple-700
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
             transition-all duration-200 ease-in-out"
                >
                  {ach.label || "View Details"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
