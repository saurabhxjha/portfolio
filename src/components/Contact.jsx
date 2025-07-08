import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [focus, setFocus] = useState({ name: false, email: false, message: false });
  return (
    <section id="contact" className="w-full py-16 sm:py-20 flex justify-center items-center px-2">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1, type: 'spring', bounce: 0.18 }}
        className="max-w-xl w-full mx-auto rounded-3xl bg-white/10 dark:bg-black/40 shadow-2xl backdrop-blur-lg px-6 sm:px-10 py-10 border border-gray-200/10 dark:border-gray-800/60 transition-colors duration-300 group hover:shadow-blue-500/30 hover:scale-[1.025] hover:border-blue-400/40 cursor-pointer"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Contact</h2>
        <form className="flex flex-col gap-6">
          {/* Floating label input */}
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              required
              onFocus={() => setFocus(f => ({ ...f, name: true }))}
              onBlur={e => setFocus(f => ({ ...f, name: !!e.target.value }))}
              className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
            <label
              htmlFor="name"
              className={`absolute left-4 top-2 text-gray-400 text-sm pointer-events-none transition-all duration-200 ${focus.name ? 'text-xs -top-2.5 bg-black/80 px-1' : 'peer-focus:text-xs peer-focus:-top-2.5 peer-focus:bg-black/80 peer-focus:px-1'}`}
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              onFocus={() => setFocus(f => ({ ...f, email: true }))}
              onBlur={e => setFocus(f => ({ ...f, email: !!e.target.value }))}
              className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
            <label
              htmlFor="email"
              className={`absolute left-4 top-2 text-gray-400 text-sm pointer-events-none transition-all duration-200 ${focus.email ? 'text-xs -top-2.5 bg-black/80 px-1' : 'peer-focus:text-xs peer-focus:-top-2.5 peer-focus:bg-black/80 peer-focus:px-1'}`}
            >
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              onFocus={() => setFocus(f => ({ ...f, message: true }))}
              onBlur={e => setFocus(f => ({ ...f, message: !!e.target.value }))}
              className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
            />
            <label
              htmlFor="message"
              className={`absolute left-4 top-2 text-gray-400 text-sm pointer-events-none transition-all duration-200 ${focus.message ? 'text-xs -top-2.5 bg-black/80 px-1' : 'peer-focus:text-xs peer-focus:-top-2.5 peer-focus:bg-black/80 peer-focus:px-1'}`}
            >
              Message
            </label>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 active:scale-95 transition-all duration-300 text-lg mt-2">
            Send
          </button>
        </form>
      </motion.div>
    </section>
  );
} 