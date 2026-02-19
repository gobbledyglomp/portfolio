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
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-0 sm:pb-0"
    >
      <HeroBackground />

      <div className="relative z-10 px-6 text-center sm:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-3 font-mono text-5xl font-bold tracking-tight text-(--text-bright) sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {scrambledHeading}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-4 flex flex-col items-center gap-1.5 sm:mb-6 sm:flex-row sm:justify-center sm:gap-4"
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
          className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-(--text-muted) sm:mb-8 sm:max-w-2xl sm:text-lg"
        >
          {t('intro')}
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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

      {/* Glowing cyan seam — bottom edge of the hero section */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-px"
        style={{
          background: 'rgba(0, 229, 255, 0.35)',
          boxShadow:
            '0 0 6px 1px rgba(0, 229, 255, 0.4), 0 0 20px 4px rgba(0, 229, 255, 0.2), 0 0 60px 12px rgba(0, 229, 255, 0.07)',
        }}
      />
    </section>
  );
}
