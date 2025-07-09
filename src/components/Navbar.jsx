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
      const handleEsc = (e) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-center animate-fadeIn ${menuOpen ? 'pointer-events-none' : ''}`}>
      <div className={`max-w-3xl w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] rounded-2xl bg-black/60 dark:bg-black/70 border border-blue-900/40 shadow-2xl backdrop-blur-lg px-4 sm:px-8 py-3 flex items-center justify-between transition-all duration-300 mt-4 ${menuOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        {/* Mobile menu button - leftmost on mobile */}
        <button
          className="md:hidden mr-2 p-2 rounded-full bg-black/80 hover:bg-gray-900 shadow transition-colors order-1"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle Menu"
        >
          <FaBars className="text-xl text-white" />
        </button>
        {/* Site title - centered on mobile, left on desktop */}
        <a href="#home" className="text-2xl font-extrabold text-white tracking-tight drop-shadow-lg flex-1 text-center md:text-left order-2">
          Saurabh Jha
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center order-3 flex-1 justify-center">
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
        {/* Dark mode toggle - rightmost */}
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => setDarkMode(dm => !dm)}
          className="ml-2 p-2 rounded-full bg-black/80 hover:bg-gray-900 shadow transition-colors order-4"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-300" />}
        </button>
      </div>
      {/* Mobile nav menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 pointer-events-auto"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Modal Popup */}
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center pointer-events-auto"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative bg-zinc-900 rounded-2xl shadow-2xl w-[90vw] max-w-sm p-8 flex flex-col items-center gap-8 animate-fadeIn">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes className="text-2xl text-white" />
              </button>
              <nav className="flex flex-col gap-6 w-full mt-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
                    className="block text-xl font-bold text-white hover:text-blue-400 transition-colors px-2 py-2 rounded-lg text-center"
            >
              {link.name}
            </a>
          ))}
              </nav>
            </div>
        </div>
        </>
      )}
    </nav>
  );
} 