'use client';

import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-24">
        <section id="home" className="min-h-screen">
          <p className="text-[var(--text-muted)]">Hero section coming...</p>
        </section>
      </main>
    </>
  );
}
