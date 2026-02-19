import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stanislavmuntyan.com'),
  title: 'Stanislav Muntyan',
  description:
    'Junior Full-Stack Developer specializing in MERN stack, React, and scalable web solutions.',
  openGraph: {
    title: 'Stanislav Muntyan - Full-Stack Developer',
    description: 'Specializing in MERN stack, QA and Scalable Web Solutions.',
    url: '/',
    siteName: 'Stanislav Muntyan Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stanislav Muntyan Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stanislav Muntyan - Full-Stack Developer',
    description: 'Check out my latest full-stack projects and experience.',
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
