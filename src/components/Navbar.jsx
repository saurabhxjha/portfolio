import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes, FaGithub } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true); // default dark
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none animate-fadeIn">
      <div className="pointer-events-auto max-w-3xl w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] rounded-2xl bg-black/60 dark:bg-black/70 border border-blue-900/40 shadow-2xl backdrop-blur-lg px-4 sm:px-8 py-3 flex items-center justify-between transition-all duration-300 mt-4">
        <a href="#home" className="text-2xl font-extrabold text-white tracking-tight drop-shadow-lg">Saurabh Jha</a>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-blue-100 hover:text-blue-400 font-semibold text-lg transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden ml-2 p-2 rounded-full bg-black/80 hover:bg-gray-900 shadow transition-colors"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes className="text-xl text-white" /> : <FaBars className="text-xl text-white" />}
        </button>
        {/* Dark mode toggle */}
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => setDarkMode(dm => !dm)}
          className="ml-2 p-2 rounded-full bg-black/80 hover:bg-gray-900 shadow transition-colors"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-300" />}
        </button>
      </div>
      {/* Mobile nav menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 z-50 transition-all animate-fadeIn">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
} 