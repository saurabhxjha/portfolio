import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaJava, FaCloud, FaMobileAlt, FaPencilRuler, FaCloudUploadAlt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiFirebase, SiC, SiCplusplus, SiPostman, SiVscodium } from 'react-icons/si';

export default function About() {
  const skillCategories = [
    {
      icon: '🧠',
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: <SiC className="text-cyan-300" /> },
        { name: 'C++', icon: <SiCplusplus className="text-blue-300" /> },
        { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
        { name: 'Java', icon: <FaJava className="text-red-400" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      icon: '🛠️',
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
        { name: 'REST APIs', icon: <FaCloud className="text-blue-200" /> },
      ],
    },
    {
      icon: '🎨',
      title: 'Frontend & Design',
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-400" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
        { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
        { name: 'Flutter', icon: <SiFlutter className="text-blue-300" /> },
        { name: 'UI/UX Design', icon: <FaPencilRuler className="text-pink-300" /> },
        { name: 'Web Design', icon: <FaMobileAlt className="text-green-200" /> },
        { name: 'App Design', icon: <FaMobileAlt className="text-green-200" /> },
        { name: 'Figma', icon: <FaFigma className="text-pink-400" /> },
      ],
    },
    {
      icon: '🚀',
      title: 'Deployment & Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-200" /> },
        { name: 'VS Code', icon: <SiVscodium className="text-blue-400" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-300" /> },
        { name: 'Deployment (Netlify, Vercel)', icon: <FaCloudUploadAlt className="text-blue-200" /> },
        { name: 'Responsive Web Design', icon: <FaMobileAlt className="text-green-200" /> },
      ],
    },
  ];

  return (
    <section id="about" className="w-full py-16 sm:py-20 flex flex-col items-center px-2">
      <div className="max-w-3xl w-full mx-auto rounded-3xl bg-white/10 dark:bg-black/40 shadow-2xl backdrop-blur-lg flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-6 sm:px-12 py-10 border border-gray-200/10 dark:border-gray-800/60 transition-colors duration-300 group animate-slideUp hover:shadow-blue-500/30 hover:scale-[1.025] hover:border-blue-400/40 cursor-pointer">
        <motion.img
          src="/saurabh.jpg"
          alt="Saurabh Jha profile"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring', bounce: 0.18 }}
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl border-4 border-blue-400 dark:border-blue-500 shadow-lg object-cover mb-6 md:mb-0 mx-auto md:mx-0 transition-colors duration-300 group-hover:border-blue-400/80 transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 transition-colors duration-300">About Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.18 }}
          >
            <p className="text-gray-200 mb-6 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl font-medium leading-relaxed transition-colors duration-300">
              I&apos;m Saurabh Jha, a curious developer who loves building sleek, responsive web apps. I enjoy working with <span className="text-blue-400 font-semibold">React</span>, <span className="text-yellow-400 font-semibold">Firebase</span>, and modern web technologies to bring ideas to life. Alongside development, I regularly sharpen my problem-solving skills through <span className="text-pink-400 font-semibold">Data Structures and Algorithms</span> to strengthen my core logic and efficiency.
            </p>
            <p className="text-gray-400 mb-4 max-w-xl mx-auto md:mx-0 text-base sm:text-lg font-normal leading-relaxed italic transition-colors duration-300">
              Whether it’s designing smooth user experiences or cracking complex problems, I’m always learning, experimenting, and growing — one project at a time.
            </p>
            <p className="text-blue-300 text-base sm:text-lg font-semibold max-w-xl mx-auto md:mx-0 mt-2 transition-colors duration-300">“I don’t just write code — I carve ideas into reality, one line at a time.”</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          offscreen: { opacity: 0, y: 60 },
          onscreen: {
            opacity: 1, y: 0,
            transition: { staggerChildren: 0.15, type: 'spring', bounce: 0.18, duration: 0.8 },
          },
        }}
        className="bg-black/60 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-500 p-8 w-full max-w-4xl mx-auto mt-10"
      >
        <h3 className="text-3xl font-bold text-white text-center mb-6 border-b-2 border-blue-500 pb-2">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.12, type: 'spring', bounce: 0.18 }}
              className="bg-black/60 rounded-2xl p-4 shadow-lg backdrop-blur border border-blue-500 w-full max-w-md mx-auto"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{cat.icon}</span>
                <span className="text-xl font-semibold text-blue-400 mb-0.5">{cat.title}</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/70 text-white text-sm shadow backdrop-blur-sm hover:scale-105 transition-all"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 