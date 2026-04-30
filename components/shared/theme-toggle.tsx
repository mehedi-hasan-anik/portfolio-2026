'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative grid h-10 w-10 place-items-center rounded-full border border-foreground/15',
        'hover:border-amber hover:text-amber transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
    >
      <Sun
        className="theme-icon h-4 w-4"
        data-active={mounted && !isDark ? 'true' : 'false'}
        aria-hidden="true"
      />
      <Moon
        className="theme-icon h-4 w-4"
        data-active={mounted && isDark ? 'true' : 'false'}
        aria-hidden="true"
      />
    </button>
  );
}
