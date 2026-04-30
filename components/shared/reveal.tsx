'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, className, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { rootMargin: '-80px 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const style = delay
    ? ({ '--reveal-delay': `${delay}s` } as CSSProperties)
    : undefined;

  return (
    <div
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={style}
    >
      {children}
    </div>
  );
}
