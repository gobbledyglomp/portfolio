'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { LanguageToggle } from '@/components/language-toggle';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'projects', href: '#projects' },
] as const;

export function Navbar() {
  const t = useTranslations('Navbar');
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === '/';

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace('#', '');

    if (isHome) {
      // On the home page — smooth scroll directly
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On another page (e.g. /blog) — navigate home with the hash.
      // The browser will jump to the anchor after navigation.
      router.push(`/#${id}` as '/');
    }
  }

  const linkClass =
    'font-mono text-sm text-(--text-muted) transition-colors duration-200 hover:text-(--cyan)';

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-(--border-color) bg-(--bg)/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Left: nav links (desktop) */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={linkClass}
              >
                {t(item.key)}
              </a>
            </li>
          ))}
          <li>
            <Link href="/blog" className={linkClass}>
              {t('blog')}
            </Link>
          </li>
        </ul>

        {/* Right: language toggle (desktop) */}
        <div className="hidden md:block">
          <LanguageToggle />
        </div>

        {/* Mobile: hamburger + language toggle */}
        <div className="flex w-full items-center justify-between md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="cursor-pointer text-(--text-muted) transition-colors duration-200 hover:text-(--cyan)"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-(--border-color) bg-(--bg)/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={linkClass}
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className={linkClass}
                >
                  {t('blog')}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
