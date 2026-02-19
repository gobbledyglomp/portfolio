'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { HeroBackground } from '@/components/hero-background';

const CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

function useScrambleText(text: string, duration = 1500) {
  const [display, setDisplay] = useState('');

  const scramble = useCallback(() => {
    const length = text.length;
    let iteration = 0;
    const totalIterations = length * 3;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration++;
      if (iteration > totalIterations) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, duration / totalIterations);

    return () => clearInterval(interval);
  }, [text, duration]);

  useEffect(() => {
    const cleanup = scramble();
    return cleanup;
  }, [scramble]);

  return display;
}

export function Hero() {
  const t = useTranslations('Hero');
  const heading = t('heading');
  const scrambledHeading = useScrambleText(heading, 2000);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-mono text-4xl font-bold text-(--text-bright) sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {scrambledHeading}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4"
        >
          <span className="font-mono text-sm text-(--cyan) sm:text-base">
            {t('role')}
          </span>
          <span className="hidden text-(--border-color) sm:inline">|</span>
          <span className="flex items-center gap-1 text-sm text-(--text-muted)">
            <MapPin size={14} />
            {t('location')}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-(--text-muted) sm:text-lg"
        >
          {t('intro')}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          href="https://github.com/gobbledyglomp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-(--border-color) bg-(--bg-surface) px-5 py-2.5 font-mono text-sm text-(--text-muted) transition-all duration-300 hover:border-(--cyan) hover:text-(--cyan) hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]"
        >
          <Github size={18} />
          GitHub
        </motion.a>
      </div>
    </section>
  );
}
