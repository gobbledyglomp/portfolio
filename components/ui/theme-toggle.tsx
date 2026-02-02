'use client';

import { useTheme } from 'next-themes';
import { Button } from './button';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="dark:bg-input/10 h-10 w-10 rounded-full dark:border-zinc-950"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <FaSun className="absolute h-6 w-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <FaMoon className="absolute h-6 w-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
