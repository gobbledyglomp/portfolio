import { motion } from 'framer-motion';
import { Bold } from '@/components/bold';

import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('About');
  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <h2 className="mb-4 bg-linear-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-2xl font-bold text-transparent drop-shadow-lg dark:from-rose-500 dark:via-indigo-400 dark:to-sky-400">
        {t('title')}
      </h2>
      <div className="space-y-4 text-slate-600 duration-300 dark:text-slate-400">
        <p>
          {t.rich('p1', {
            bold: (chunks) => <Bold>{chunks}</Bold>,
          })}
        </p>
        <p>
          {t.rich('p2', {
            bold: (chunks) => <Bold>{chunks}</Bold>,
          })}
        </p>
      </div>
    </motion.section>
  );
}
