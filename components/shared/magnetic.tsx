'use client';

import { useEffect, useRef, type ReactNode, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className, strength = 18 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const enabled = useRef(true);

  useEffect(() => {
    // Disable on touch / reduced-motion devices — saves all the work for free
    enabled.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const tick = () => {
    const t = target.current;
    const c = current.current;
    c.x += (t.x - c.x) * 0.15;
    c.y += (t.y - c.y) * 0.15;

    if (ref.current) {
      ref.current.style.transform = `translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0)`;
    }

    if (Math.abs(t.x - c.x) > 0.05 || Math.abs(t.y - c.y) > 0.05) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      rafRef.current = null;
      if (ref.current) ref.current.style.willChange = '';
    }
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enabled.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    target.current.x = ((e.clientX - cx) / rect.width) * strength;
    target.current.y = ((e.clientY - cy) / rect.height) * strength;
    if (rafRef.current === null) {
      if (ref.current) ref.current.style.willChange = 'transform';
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  const handleLeave = () => {
    if (!enabled.current) return;
    target.current.x = 0;
    target.current.y = 0;
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn('inline-block', className)}
    >
      {children}
    </div>
  );
}
