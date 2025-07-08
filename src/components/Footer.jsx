import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="relative w-full py-6 px-4 bg-black/80 backdrop-blur-md border-t border-blue-900/40 text-center transition-colors duration-300 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-4xl mx-auto w-full gap-4">
        <p className="text-sm text-gray-400 font-medium mb-2 sm:mb-0 text-center sm:text-left">&copy; {new Date().getFullYear()} Saurabh Jha. All rights reserved.</p>
        <div className="flex flex-row sm:flex-row justify-center sm:justify-end gap-4">
          <a href="https://github.com/saurabhxjha" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-400 transition-colors duration-300 bg-black/80 rounded-full p-3 shadow hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-jha-925a8628b/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-400 transition-colors duration-300 bg-black/80 rounded-full p-3 shadow hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/saurabhxjha/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-pink-400 transition-colors duration-300 bg-black/80 rounded-full p-3 shadow hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-6 sm:right-8 sm:bottom-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fadeIn"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
} 