import { about } from '@/lib/data';
import { SectionHeading } from '../shared/section-heading';
import { Reveal } from '../shared/reveal';

export function About() {
  return (
    <section id="about" className="cv-auto relative py-24 md:py-40 mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeading
        number="01"
        label="About"
        title="A frontend engineer with a"
        emphasis="bias for shipping."
      />

      <div className="grid gap-16 lg:grid-cols-12">
        {/* Bio */}
        <div className="lg:col-span-7 space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Side card */}
        <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-foreground/10">
          <Reveal>
            <div className="space-y-10">
              <div>
                <p className="section-marker mb-3">Currently exploring</p>
                <ul className="space-y-3 text-base">
                  {[
                    'Advanced Next.js 15 patterns — App Router, Server Actions, streaming',
                    'TypeScript at scale — generic constraints, branded types, inference tricks',
                    'Frontend performance — Core Web Vitals tuning on real workloads',
                    'Design systems — extracting reusable UI primitives across NX apps',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 group">
                      <span className="mt-2 h-px w-3 bg-foreground/30 group-hover:bg-amber transition-colors flex-shrink-0" />
                      <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-foreground/10">
                <p className="section-marker mb-6">By the numbers</p>
                <div className="grid grid-cols-3 gap-4">
                  {about.stats.map((s, i) => (
                    <Reveal key={i} delay={0.1 + i * 0.08}>
                      <div>
                        <p className="display-serif text-4xl md:text-5xl text-amber">{s.value}</p>
                        <p className="mt-2 text-xs text-muted-foreground leading-tight">
                          {s.label}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
