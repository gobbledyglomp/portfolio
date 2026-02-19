'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLanguage() {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      className="cursor-pointer font-mono text-sm font-medium text-(--text-muted) transition-colors duration-200 hover:text-(--cyan)"
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
