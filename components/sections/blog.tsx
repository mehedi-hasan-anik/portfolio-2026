import { posts } from '@/lib/data';
import { SectionHeading } from '../shared/section-heading';
import { Reveal } from '../shared/reveal';
import { Badge } from '../ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Blog() {
  return (
    <section id="blog" className="cv-auto relative py-24 md:py-40 mx-auto max-w-7xl px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24 border-b border-foreground/10 pb-8">
        <div>
          <Reveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-mono text-xs tabular-nums text-amber">05</span>
              <span className="section-marker">Writing</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
              Notes from the{' '}
              <span className="italic text-amber">trenches.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-amber transition-colors"
          >
            Read all posts
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06}>
            <Link
              href={`/blog/${post.slug}`}
              className="group relative block h-full p-8 border border-foreground/10 hover:border-amber/40 transition-all duration-500 hover:bg-foreground/[0.02]"
            >
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="amber" className="text-[10px]">
                  {post.tag}
                </Badge>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  {post.date}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">{post.readTime}</span>
              </div>

              <h3 className="display-serif text-2xl md:text-3xl leading-tight group-hover:text-amber transition-colors duration-500">
                {post.title}
              </h3>

              <p className="mt-4 text-sm text-foreground/70 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Read post
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative corner accent */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 h-0 w-0 group-hover:h-12 group-hover:w-12 border-t border-r border-amber transition-all duration-500"
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
