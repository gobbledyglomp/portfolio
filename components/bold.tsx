import React from 'react';

export function Bold({ children }: { children: React.ReactNode }) {
  return (
    <strong className="text-slate-800 duration-300 dark:text-slate-300">
      {children}
    </strong>
  );
}
