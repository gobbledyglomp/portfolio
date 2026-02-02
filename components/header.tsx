'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { FaGithub } from 'react-icons/fa';
import { LanguageToggle } from '@/components/language-toggle';

import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations('Header');

  return (
    <motion.header
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12 flex items-start justify-between"
    >
      <div>
        {/* Name */}
        <div className="mb-2">
          <h1 className="inline text-4xl font-bold drop-shadow-xl">
            <span className="bg-linear-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Stanislav Muntyan
            </span>
            <a
              href="https://github.com/gobbledyglomp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="ml-3 inline-block text-3xl text-slate-600 transition-colors duration-300 hover:text-black dark:text-slate-400 dark:hover:text-white"
            >
              <FaGithub className="inline align-baseline" />
            </a>
          </h1>
        </div>
        {/* Job title */}
        <p className="mb-0.5 text-lg text-slate-600 duration-300 dark:text-slate-400">
          {t('role')}
        </p>
        {/* Location */}
        <p className="text-sm text-slate-600 duration-300 dark:text-slate-400">
          {t('location')}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
