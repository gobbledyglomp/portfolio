'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Bold } from '@/components/bold';

import { useTranslations } from 'next-intl';

export function Experience() {
  const t = useTranslations('Experience');
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="mb-8 bg-linear-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-3xl font-bold text-transparent drop-shadow-md dark:from-rose-500 dark:via-indigo-400 dark:to-sky-400">
        {t('title')}
      </h2>

      <div className="space-y-6">
        <Card className="border-slate-200 shadow-sm transition-transform duration-300 hover:scale-[1.02] dark:border-slate-800 dark:bg-slate-950/50">
          <CardHeader>
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                {/* Job title */}
                <CardTitle className="text-xl font-bold text-slate-800 duration-300 dark:text-slate-100">
                  {t('qa.title')}
                </CardTitle>
                {/* Company name */}
                <CardDescription className="text-base text-rose-600 duration-300 dark:text-rose-400">
                  {t('qa.company')}
                </CardDescription>
              </div>
              {/* Date range */}
              <span className="text-sm font-medium text-slate-500 duration-300 dark:text-slate-400">
                {t('qa.date')}
              </span>
            </div>
          </CardHeader>
          {/* Job description */}
          <CardContent>
            <p className="text-slate-600 duration-300 dark:text-slate-400">
              {t.rich('qa.description', {
                bold: (chunks) => <Bold>{chunks}</Bold>,
              })}
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
