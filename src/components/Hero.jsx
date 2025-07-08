import React, { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaDownload } from 'react-icons/fa';

const typingPhrases = [
  'Breathing life into pixels and logic',
  'Code is my canvas, logic is my brush',
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    if (!mounted.current) return;
    const full = typingPhrases[currentPhrase];
    if (!isDeleting && typed.length < full.length) {
      setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 80);
    } else if (isDeleting && typed.length > 0) {
      setTimeout(() => setTyped(full.slice(0, typed.length - 1)), 40);
    } else if (!isDeleting && typed.length === full.length) {
      setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && typed.length === 0) {
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % typingPhrases.length);
    }
  }, [typed, isDeleting, currentPhrase]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[70vh] flex flex-col justify-center items-center px-4 pt-24 pb-12"
    >
      {/* 🧠 Main Content */}
      <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-6 z-10 drop-shadow-lg animate-slideUp">
        Hi, I&apos;m <span className="text-blue-300 transition-all duration-300 ease-in-out hover:text-blue-400 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-105 inline-block">Saurabh Jha</span>
      </h1>
      <div className="relative h-12 mb-10 flex items-center justify-center z-10 animate-fadeIn">
        <span className="text-lg sm:text-2xl md:text-3xl font-mono text-blue-100 bg-black/60 px-4 py-2 rounded-xl shadow backdrop-blur">
          {typed}
          <span className="animate-pulse">|</span>
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center z-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <a
          href="/resume.pdf"
          download
          className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 active:scale-95 transition-all text-lg flex items-center justify-center gap-2 group"
        >
          <FaDownload className="group-hover:animate-bounce" /> Download Resume
        </a>
        <a
          href="#projects"
          className="w-full sm:w-auto px-8 py-4 border-2 border-blue-500 text-blue-200 rounded-xl font-semibold shadow-lg hover:bg-blue-900 hover:border-blue-400 active:scale-95 transition-all text-lg flex items-center justify-center gap-2 group bg-black/80 border-blue-400"
        >
          See Projects <FaArrowDown className="group-hover:animate-bounce" />
        </a>
      </div>
    </section>
  );
}
