'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLanguage() {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="dark:bg-input/10 h-10 w-10 rounded-full font-bold dark:border-zinc-950"
      onClick={toggleLanguage}
      aria-label="Toggle Language"
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </Button>
  );
}
