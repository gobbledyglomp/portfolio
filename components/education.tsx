'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Bold } from './bold';

export function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="mb-8 bg-linear-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-3xl font-bold text-transparent drop-shadow-md dark:from-rose-500 dark:via-indigo-400 dark:to-sky-400">
        Education
      </h2>

      <div className="space-y-6">
        <Card className="border-slate-200 shadow-sm transition-transform duration-300 hover:scale-[1.02] dark:border-slate-800 dark:bg-slate-950/50">
          <CardHeader>
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                {/* Degree */}
                <CardTitle className="text-xl font-bold text-slate-800 duration-300 dark:text-slate-100">
                  Multiplatform Application Development
                </CardTitle>
                {/* School */}
                <CardDescription className="text-base text-rose-600 duration-300 dark:text-rose-400">
                  Davante MEDAC
                </CardDescription>
              </div>
              {/* Date */}
              <span className="text-sm font-medium text-slate-500 duration-300 dark:text-slate-400">
                2024 - Present
              </span>
            </div>
          </CardHeader>
          {/* Description */}
          <CardContent>
            <p className="text-slate-600 duration-300 dark:text-slate-400">
              Technical training focused on building scalable applications
              across different platforms. Gaining experience with{' '}
              <Bold>Java</Bold>, <Bold>SQL</Bold>, and enterprise-grade
              development practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
