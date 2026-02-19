'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Projects } from '@/components/projects';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Footer');

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-4xl px-6">
          <Experience />
          <Education />
          <Projects />
        </div>
      </main>
      <footer className="border-t border-[var(--border-color)] py-8 text-center">
        <p className="font-mono text-sm text-[var(--text-muted)]">
          {t('copyright')}
        </p>
      </footer>
    </>
  );
}
