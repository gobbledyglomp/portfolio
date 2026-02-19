'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Experience() {
  const t = useTranslations('Experience');

  return (
    <section id="experience" className="py-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="mb-12 font-mono text-2xl font-bold text-(--text-bright) sm:text-3xl">
          <span className="mr-3 text-(--cyan)">#</span>
          {t('title')}
        </h2>

        <div className="relative border-l-2 border-(--border-color) pl-8">
          {/* Timeline dot */}
          <div className="absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2 border-(--cyan) bg-(--bg)" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg border border-(--border-color) bg-(--bg-surface) p-6 transition-colors duration-300 hover:border-(--cyan)/30"
          >
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-(--text-bright)">
                  <Briefcase size={18} className="text-(--cyan)" />
                  {t('qa.title')}
                </h3>
                <p className="mt-1 text-(--cyan)">{t('qa.company')}</p>
              </div>
              <span className="font-mono text-sm text-(--text-muted)">
                {t('qa.date')}
              </span>
            </div>
            <p className="leading-relaxed text-(--text-muted)">
              {t('qa.description')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
