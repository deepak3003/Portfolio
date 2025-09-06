import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navItems = [
    "home",
    "about",
    "projects",
    "skills",
    "experience",
    "achievements",
    "training",
    
    "contact",
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Main Bar */}
      <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <h1 className=" text-2xl font-extrabold tracking-wide 
  text-transparent bg-clip-text 
  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 
  drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]">
            PORTFOLIO
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative"
              >
                <a
                  href={`#${item}`}
                  className="capitalize text-gray-800 dark:text-gray-200 font-medium tracking-wide"
                >
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded" />
              </motion.li>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-6 p-2 rounded-full bg-gray-100 dark:bg-zinc-700 hover:bg-cyan-50 dark:hover:bg-zinc-600 shadow transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </button>
          </ul>

          {/* Mobile Controls */}
          <div className="md:hidden flex gap-2 items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-zinc-700 shadow"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 dark:text-gray-100"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
        {/* Animated Gradient Strip */}
        <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-[pulse_6s_infinite_alternate]" />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 px-6 py-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block capitalize text-gray-800 dark:text-gray-200 hover:text-cyan-400 transition"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @keyframes pulse {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
        `}
      </style>
    </motion.nav>
  );
};

export default Navbar;
