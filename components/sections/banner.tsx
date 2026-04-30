import type { CSSProperties } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { siteConfig, skills } from '@/lib/data';
import { WordReveal } from '../shared/word-reveal';
import { Magnetic } from '../shared/magnetic';

export function Banner() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-12"
      aria-label="Introduction"
    >
      {/* Ambient amber glow — pure CSS, no scroll handler */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] glow-amber glow-pulse" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-foreground/5" />
        <div className="absolute right-6 md:right-10 top-0 bottom-0 w-px bg-foreground/5" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        {/* Eyebrow */}
        <div
          className="mount-fade-up flex items-center gap-3 mb-10"
          style={{ '--mount-delay': '0.6s' } as CSSProperties}
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          <p className="section-marker">
            {siteConfig.role} · {siteConfig.location}
          </p>
        </div>

        {/* Main display */}
        <h1 className="display-serif text-[clamp(3rem,11vw,11rem)] leading-[0.85] tracking-tight max-w-[16ch]">
          <span className="block">
            <WordReveal text="Building" delay={0.3} />
          </span>
          <span className="block">
            <WordReveal text="systems" delay={0.4} />{' '}
            <span className="italic text-amber">
              <WordReveal text="that" delay={0.5} />
            </span>
          </span>
          <span className="block">
            <span className="italic text-amber">
              <WordReveal text="scale" delay={0.6} />
            </span>{' '}
            <WordReveal text="quietly." delay={0.7} />
          </span>
        </h1>

        {/* Subtitle and CTAs */}
        <div
          className="mount-fade-up mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end"
          style={{ '--mount-delay': '1.4s' } as CSSProperties}
        >
          <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            I&apos;m <span className="text-foreground">{siteConfig.name}</span> — a frontend
            engineer who turns designs into production interfaces that hold up under real
            workloads. Currently shipping React and Next.js apps inside an NX monorepo at{' '}
            <span className="text-foreground">Simec System Limited</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 bg-amber text-accent-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition-all shadow-[0_0_30px_-10px_hsl(var(--amber-glow))]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                See selected work
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 text-sm hover:border-amber hover:text-amber transition-colors"
              >
                Get in touch
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Skills marquee */}
      <div
        className="mount-fade-up relative mt-20 md:mt-28 mask-fade-x"
        style={{ '--mount-delay': '1.8s' } as CSSProperties}
        aria-label="Tech stack"
      >
        <div className="flex w-max animate-marquee-css gap-12">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="font-serif italic text-2xl md:text-3xl text-muted-foreground/80 hover:text-amber transition-colors whitespace-nowrap"
            >
              {skill}
              <span className="ml-12 text-amber/40">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="mount-fade-up absolute bottom-8 right-6 md:right-10 hidden md:flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground"
        style={{ '--mount-delay': '2s' } as CSSProperties}
      >
        <span>Scroll</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </div>
    </section>
  );
}
