'use client';

import { useState, type CSSProperties } from 'react';
import { experiences } from '@/lib/data';
import { SectionHeading } from '../shared/section-heading';
import { Reveal } from '../shared/reveal';
import { Badge } from '../ui/badge';
import { ArrowRight } from 'lucide-react';

export function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="cv-auto relative py-24 md:py-40 mx-auto max-w-7xl px-6 md:px-10"
    >
      <SectionHeading
        number="02"
        label="Experience"
        title="Five years, two companies —"
        emphasis="one craft."
      />

      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <ol className="relative">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-foreground/10" />
              {experiences.map((exp, i) => {
                const isActive = active === i;
                return (
                  <li key={exp.company} className="relative">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="group flex w-full items-start gap-4 py-4 pl-8 pr-4 text-left transition-colors"
                    >
                      <span
                        className={`absolute left-1 top-7 h-3 w-3 rounded-full border-2 transition-all ${
                          isActive
                            ? 'border-amber bg-amber scale-125 shadow-[0_0_20px_hsl(var(--amber-glow))]'
                            : 'border-foreground/30 bg-background group-hover:border-amber'
                        }`}
                        aria-hidden="true"
                      />
                      <div className="flex-1">
                        <p
                          className={`font-mono text-[10px] uppercase tracking-widest mb-1 transition-colors ${
                            isActive ? 'text-amber' : 'text-muted-foreground'
                          }`}
                        >
                          {exp.period}
                        </p>
                        <p
                          className={`font-serif text-xl leading-tight transition-colors ${
                            isActive
                              ? 'text-foreground'
                              : 'text-foreground/60 group-hover:text-foreground'
                          }`}
                        >
                          {exp.company}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{exp.role}</p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>

        <div className="lg:col-span-8 lg:pl-12 lg:border-l lg:border-foreground/10">
          {/* `key={active}` forces remount, triggering the CSS panel-enter animation */}
          <div key={active} className="panel-enter">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-marker">{experiences[active].location}</span>
              <span className="h-px flex-1 bg-foreground/10" />
              <span className="font-mono text-xs text-amber">{experiences[active].period}</span>
            </div>

            <h3 className="display-serif text-3xl md:text-4xl leading-tight">
              {experiences[active].role}{' '}
              <span className="text-amber italic">@ {experiences[active].company}</span>
            </h3>

            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              {experiences[active].description}
            </p>

            <ul className="mt-8 space-y-4">
              {experiences[active].highlights.map((h, i) => (
                <li
                  key={i}
                  className="panel-list-item flex gap-3"
                  style={{ '--item-i': i } as CSSProperties}
                >
                  <ArrowRight className="h-4 w-4 mt-1.5 text-amber flex-shrink-0" />
                  <span className="text-foreground/85 leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {experiences[active].stack.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
