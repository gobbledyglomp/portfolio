'use client';

import { motion } from 'framer-motion';
import { Rss } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/navbar';

export default function BlogPage() {
  const t = useTranslations('Blog');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--cyan)]/20 bg-[var(--cyan)]/5">
            <Rss size={28} className="text-[var(--cyan)]" />
          </div>

          <h1 className="mb-3 font-mono text-3xl font-bold text-[var(--text-bright)] sm:text-4xl">
            {t('title')}
          </h1>

          <p className="mb-2 font-mono text-lg text-[var(--cyan)]">
            {t('comingSoon')}
          </p>

          <p className="mx-auto max-w-md text-[var(--text-muted)]">
            {t('description')}
          </p>
        </motion.div>
      </main>
    </>
  );
}
