'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Projects } from '@/components/projects';

export default function Home() {
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
    </>
  );
}
