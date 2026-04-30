import { projects } from '@/lib/data';
import { SectionHeading } from '../shared/section-heading';
import { Reveal } from '../shared/reveal';
import { Badge } from '../ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  return (
    <section
      id="projects"
      className="cv-auto relative py-24 md:py-40 mx-auto max-w-7xl px-6 md:px-10"
    >
      <SectionHeading
        number="04"
        label="Selected work"
        title="Things I've shipped — and what"
        emphasis="they taught me."
        description="A handful of production systems I've designed and built UI for, plus this very portfolio."
      />

      <div className="grid gap-px bg-foreground/10 border-y border-foreground/10">
        {projects.map((p, i) => (
          <Reveal key={p.title}>
            <article className="group relative grid gap-6 md:grid-cols-12 bg-background hover:bg-foreground/[0.02] transition-colors px-2 md:px-6 py-10 md:py-12">
              <div className="md:col-span-1 flex md:justify-start">
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="md:col-span-5 space-y-3">
                <div className="flex items-center gap-3">
                  <Badge
                    variant={p.status === 'In Progress' ? 'amber' : 'default'}
                    className="text-[10px]"
                  >
                    {p.status}
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="display-serif text-2xl md:text-3xl leading-tight group-hover:text-amber transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-sm text-foreground/70 italic font-serif">{p.blurb}</p>
              </div>

              <div className="md:col-span-5 space-y-4">
                <p className="text-sm text-foreground/75 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {tech}
                      <span className="ml-1.5 text-foreground/20">·</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-1 flex md:justify-end items-start">
                  {p.liveLink ? (
                    <Link className="grid h-10 w-10 place-items-center border border-foreground/10 group-hover:border-amber group-hover:bg-amber group-hover:text-background transition-colors" href={p.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title}`}>
                      <ArrowUpRight className="h-4 w-4 -rotate-12 group-hover:rotate-0 transition-transform" />
                    </Link>
                  ) : (
                      <div className="grid h-10 w-10 place-items-center border border-foreground/10 group-hover:border-amber group-hover:bg-amber group-hover:text-background transition-colors">
                        <ArrowUpRight className="h-4 w-4 -rotate-12 group-hover:rotate-0 transition-transform" />
                      </div>
                  )}
              </div>

              {/* Hover line accent */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-0 group-hover:w-full bg-amber transition-[width] duration-700 ease-out"
              />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
