import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on React, Next.js, frontend architecture, and the production lessons that came with them.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return (
    <article className="mx-auto max-w-4xl px-6 md:px-10 pt-32 pb-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-amber transition-colors mb-12"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back home
      </Link>

      <h1 className="display-serif text-5xl md:text-7xl leading-[0.95] mb-6">
        Notes from the <span className="italic text-amber">trenches.</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-20">
        Long-form notes on React, Next.js, frontend architecture, and the production lessons
        that came with them.
      </p>

      <ul className="space-y-px bg-foreground/10 border-y border-foreground/10">
        {posts.map((post) => (
          <li key={post.slug} className="bg-background">
            <Link
              href={`/blog/${post.slug}`}
              className="group grid md:grid-cols-[1fr_auto] gap-4 px-2 md:px-6 py-8 hover:bg-foreground/[0.02] transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="amber" className="text-[10px]">
                    {post.tag}
                  </Badge>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    {post.date} · {post.readTime}
                  </span>
                </div>
                <h2 className="display-serif text-2xl md:text-3xl group-hover:text-amber transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </div>
              <ArrowRight className="hidden md:block h-5 w-5 self-center text-muted-foreground group-hover:text-amber group-hover:translate-x-1 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
