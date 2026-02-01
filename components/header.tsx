'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { FaGithub } from 'react-icons/fa';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12 flex items-start justify-between"
    >
      <div>
        <div className="mb-2 flex items-center gap-3">
          <h1 className="inline-block bg-linear-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-4xl font-bold text-transparent drop-shadow-xl">
            Stanislav Muntyan
          </h1>
          <a
            href="https://github.com/gobbledyglomp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-slate-600 transition-colors duration-300 hover:text-black dark:text-slate-400 dark:hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-lg text-slate-600 duration-300 dark:text-slate-400">
          Junior Full-Stack Developer
        </p>
        <p className="text-sm text-slate-600 duration-300 dark:text-slate-400">
          Zaragoza, Spain
        </p>
      </div>
      <ThemeToggle />
    </motion.header>
  );
}
