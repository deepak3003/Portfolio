import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
 
} from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
    >
      <section
        id="contact"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors duration-500"
      >
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-blob1 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full filter blur-3xl animate-blob2 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white drop-shadow mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            Feel free to reach out for collaborations, opportunities, or just to
            connect!
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="mailto:deepaksingh76152@gmail.com"
              className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
            >
              <FaEnvelope className="text-2xl text-blue-500" />
              <span>deepaksingh76152@gmail.com</span>
            </a>
            <a
              href="tel:+919336331724"
              className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
            >
              <FaPhone className="text-2xl text-green-500" />
              <span>+91-9336331724</span>
            </a>
            <a
              href="https://github.com/deepak3003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
            >
              <FaGithub className="text-2xl text-black dark:text-white" />
              <span>github.com/deepak3003</span>
            </a>
            <a
              href="https://www.linkedin.com/in/deepak3003/ "
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
            >
              <FaLinkedin className="text-2xl text-blue-700" />
              <span>linkedin.com/in/deepak3003/</span>
            </a>
          </div>
        </div>

        {/* Animations for blobs */}
        <style>
          {`
          @keyframes blob1 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
          }
          .animate-blob1 {
            animation: blob1 8s infinite ease-in-out;
          }
          @keyframes blob2 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(20px) scale(1.05); }
          }
          .animate-blob2 {
            animation: blob2 10s infinite ease-in-out;
          }
        `}
        </style>
      </section>
      <div className="max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center"></h3>

        {submitted ? (
          <div className="text-green-600 font-semibold text-center">
            ✅ Thanks! Your message has been sent.
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mdkdagyl" // ✅ Your actual form ID is correct
            method="POST"
            className="space-y-5"
            onSubmit={() => {
              // Let the form submit and show thank you *after* a short delay
              setTimeout(() => setSubmitted(true), 300);
            }}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded min-h-[120px]"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
