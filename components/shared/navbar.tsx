'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/data';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const nav = [
  { href: '#about', label: 'About', n: '01' },
  { href: '#experience', label: 'Experience', n: '02' },
  { href: '#education', label: 'Education', n: '03' },
  { href: '#projects', label: 'Projects', n: '04' },
  { href: '#blog', label: 'Writing', n: '05' },
  { href: '#contact', label: 'Contact', n: '06' },
];

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  // Toggle "scrolled" class via IntersectionObserver on a top sentinel —
  // far cheaper than a scroll listener that re-renders React state per frame.
  useEffect(() => {
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;height:24px;width:1px;pointer-events:none;';
    document.body.prepend(sentinel);

    const obs = new IntersectionObserver(
      ([entry]) => {
        headerRef.current?.classList.toggle('nav-scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    obs.observe(sentinel);

    return () => {
      obs.disconnect();
      sentinel.remove();
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        style={{ animation: 'nav-mount 0.6s ease-out 0.2s backwards' } as CSSProperties}
        className="fixed top-0 inset-x-0 z-50 transition-[background,border] duration-500"
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10"
          aria-label="Primary"
        >
          <Link href="/" className="group flex items-center gap-2 font-mono text-sm tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-sm bg-amber text-accent-foreground font-bold">
              A
            </span>
            <span className="hidden sm:inline">{siteConfig.shortName.toLowerCase()}/</span>
            <span className="hidden sm:inline text-amber">portfolio</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-1.5 px-3 py-2 text-sm transition-colors hover:text-amber"
                >
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-amber">
                    {item.n}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-foreground/15 hover:border-amber hover:text-amber transition-colors"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        data-open={open}
        className="mobile-menu-panel fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden"
      >
        <ul className="flex flex-col items-start gap-2 px-8 pt-24">
          {nav.map((item, i) => (
            <li
              key={item.href}
              style={{ '--menu-i': i } as CSSProperties}
              className="w-full border-b border-foreground/10"
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 py-5 text-3xl display-serif"
              >
                <span className="font-mono text-xs text-amber tabular-nums">{item.n}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
