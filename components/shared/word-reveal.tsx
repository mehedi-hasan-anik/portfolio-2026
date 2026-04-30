import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WordReveal({ text, className, delay = 0 }: WordRevealProps) {
  const words = text.split(' ');

  return (
    <span
      className={cn('word-stagger', className)}
      style={{ display: 'inline-block', '--word-base-delay': `${delay}s` } as CSSProperties}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span style={{ '--word-index': i } as CSSProperties}>
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </span>
  );
}
