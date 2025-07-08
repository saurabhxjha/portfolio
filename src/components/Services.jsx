import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaLock, FaLightbulb, FaDesktop, FaTabletAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-blue-400 text-4xl mb-4" />,
    title: 'Web Development',
    desc: 'Fast, scalable web apps using React, Next.js, Tailwind.'
  },
  {
    icon: <FaMobileAlt className="text-purple-400 text-4xl mb-4" />,
    title: 'App Development',
    desc: 'Cross-platform mobile apps using Flutter.'
  },
  {
    icon: <FaPaintBrush className="text-pink-400 text-4xl mb-4" />,
    title: 'UI/UX Design',
    desc: 'Clean, user-focused interfaces.'
  },
  {
    icon: <FaDesktop className="text-yellow-400 text-4xl mb-4" />,
    title: 'Web Design',
    desc: 'Modern and responsive website layouts.'
  },
  {
    icon: <FaTabletAlt className="text-green-400 text-4xl mb-4" />,
    title: 'App Design',
    desc: 'Smooth mobile-first experiences.'
  },
  {
    icon: <FaLock className="text-blue-300 text-4xl mb-4" />,
    title: 'Authentication System',
    desc: 'Google login, Firebase Auth, secure sign-in.'
  },
  {
    icon: <FaLightbulb className="text-orange-400 text-4xl mb-4" />,
    title: 'Product Ideation',
    desc: 'Turning raw ideas into working MVPs.'
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 sm:py-20 flex justify-center items-center px-2">
      <div className="max-w-6xl mx-auto w-full px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center animate-slideUp">Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group bg-white/10 dark:bg-black/40 rounded-2xl shadow-xl border border-gray-200/10 dark:border-gray-800/60 backdrop-blur-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:border-blue-400/40 cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-300 text-base font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 