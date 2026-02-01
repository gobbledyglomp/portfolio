'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-start justify-between"
        >
          <div>
            <h1 className="mb-2 inline-block bg-linear-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-4xl font-bold text-transparent drop-shadow-xl">
              Stanislav Muntyan
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Junior Full-Stack Developer
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Zaragoza, Spain
            </p>
          </div>
          <ThemeToggle />
        </motion.header>
      </div>
    </div>
  );
}
