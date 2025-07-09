import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss, SiFlutter } from 'react-icons/si';
import { motion } from 'framer-motion';

const techIcons = {
  React: <FaReact className="inline mr-1 text-cyan-400 text-base align-middle" />,
  Firebase: <SiFirebase className="inline mr-1 text-yellow-400 text-base align-middle" />,
  'Tailwind CSS': <SiTailwindcss className="inline mr-1 text-sky-400 text-base align-middle" />,
  Flutter: <SiFlutter className="inline mr-1 text-blue-400 text-base align-middle" />,
};

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'My personal portfolio built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/saurabhxjha/portfolio',
    live: 'https://saurabhxjha.xyz',
  },
  {
    title: 'TaskNest',
    desc: 'A modern task management app built with Flutter.',
    tech: ['Flutter'],
    github: 'https://github.com/saurabhxjha/tasknest',
    live: '', // No live preview for Flutter app
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60, scale: 0.95 },
  onscreen: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', bounce: 0.18, duration: 0.8 }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-16 sm:py-20 flex justify-center items-center px-2 overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1, type: 'spring', bounce: 0.18 }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-10 left-10 text-6xl opacity-10 blur-sm animate-float-slow">⚙️</div>
        <div className="absolute bottom-12 right-10 text-6xl opacity-10 blur-sm animate-float-slower">💻</div>
        <div className="absolute top-1/2 left-1/2 text-6xl opacity-10 blur-sm animate-float-slowest">{"</>"}</div>
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>
      <div className="max-w-6xl mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, type: 'spring', bounce: 0.18 }}
          className="bg-black/60 rounded-2xl shadow-2xl p-8 sm:p-12 backdrop-blur-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center animate-slideUp">Projects</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="group bg-black/60 rounded-2xl shadow-2xl backdrop-blur-lg p-6 flex flex-col h-full min-h-[340px] transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-400/60 cursor-pointer relative border-2 border-transparent hover:border-blue-400/40 focus-within:border-blue-400/60"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.18 + idx * 0.08, type: 'spring', bounce: 0.18 }}
                variants={undefined}
              >
                <h3 className="text-xl font-bold text-blue-300 mb-2 flex items-center gap-2 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-200 mb-4 flex-1 transition-colors duration-300 text-base font-medium">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-gray-700/80 text-blue-100 rounded-full text-xs font-semibold border border-blue-800 transition-colors duration-300 group-hover:bg-blue-800/80 group-hover:text-blue-100 flex items-center gap-1 shadow-sm">
                      {techIcons[t] || null}{t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2 mb-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:shadow-blue-400/40 transition-all duration-200 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <FaExternalLinkAlt className="text-base" /> Live Preview
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 text-white rounded-lg shadow hover:bg-gray-800 hover:shadow-blue-400/40 transition-all duration-200 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <FaGithub className="text-base" /> GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 