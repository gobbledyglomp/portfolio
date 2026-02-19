'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-4xl px-6">
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
}
