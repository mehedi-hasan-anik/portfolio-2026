import { education } from '@/lib/data';
import { SectionHeading } from '../shared/section-heading';
import { Reveal } from '../shared/reveal';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="cv-auto relative py-24 md:py-40 mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeading
        number="03"
        label="Education"
        title="Where the curiosity"
        emphasis="started."
      />

      <div className="grid gap-8">
        {education.map((ed, i) => (
          <Reveal key={i}>
            <article className="group relative grid gap-8 md:grid-cols-12 border-t border-foreground/10 pt-8 hover:border-amber/40 transition-colors">
              <div className="md:col-span-3 flex flex-col gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-sm border border-foreground/10 group-hover:border-amber group-hover:text-amber transition-colors">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <p className="font-mono text-xs text-amber tabular-nums">{ed.period}</p>
                <p className="text-xs text-muted-foreground">{ed.location}</p>
              </div>

              <div className="md:col-span-9">
                <p className="section-marker mb-2">{ed.institution}</p>
                <h3 className="display-serif text-3xl md:text-4xl leading-tight">{ed.degree}</h3>
                <p className="mt-4 text-foreground/75 leading-relaxed max-w-2xl">{ed.detail}</p>
              </div>

              {/* Decorative number on hover */}
              <span
                aria-hidden="true"
                className="absolute -right-2 top-8 display-serif italic text-9xl text-amber/0 group-hover:text-amber/5 transition-colors duration-700"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
