import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 md:px-10 pt-32 pb-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-amber transition-colors mb-12"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All posts
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <Badge variant="amber">{post.tag}</Badge>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          {post.date} · {post.readTime}
        </span>
      </div>

      <h1 className="display-serif text-4xl md:text-6xl leading-[1] mb-8">{post.title}</h1>
      <p className="text-xl text-foreground/80 italic font-serif border-l-2 border-amber pl-6 mb-16">
        {post.excerpt}
      </p>

      <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-6">
        <p>
          This is a placeholder for the full post body. Replace this template with your MDX
          rendering pipeline (e.g., <code>contentlayer</code>, <code>next-mdx-remote</code>, or a
          headless CMS like Sanity or Notion).
        </p>
        <p>
          Wire each post to a real source, swap this component for an MDX renderer, and the rest
          of the routing, metadata, and sitemap entries are already in place.
        </p>
      </div>
    </article>
  );
}
