import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will preserve the locale in the pathname
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
