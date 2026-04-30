import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  emphasis?: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  number,
  label,
  title,
  emphasis,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-16 md:mb-24', className)}>
      <Reveal>
        <div className="flex items-baseline gap-4 mb-6 border-b border-foreground/10 pb-4">
          <span className="font-mono text-xs tabular-nums text-amber">{number}</span>
          <span className="section-marker">{label}</span>
          <span className="ml-auto h-px flex-1 bg-foreground/10 hidden md:block" />
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
          {title}
          {emphasis && (
            <>
              {' '}
              <span className="italic text-amber">{emphasis}</span>
            </>
          )}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
