'use client';

import { Header } from '@/components/header';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-20">
        <Header />
        <About />
        <Experience />
        <Education />
        <Projects />
      </div>
    </div>
  );
}
