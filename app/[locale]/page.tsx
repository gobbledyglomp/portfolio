'use client';

import { Header } from '@/components/header';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 pt-10 pb-6 md:pt-20 md:pb-10">
        <Header />
        <About />
        <Experience />
        <Education />
        <Projects />
        <footer className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400">
          © 2026 Stanislav Muntyan
        </footer>
      </div>
    </div>
  );
}
