import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-amber mb-6">404 — not found</p>
      <h1 className="display-serif text-6xl md:text-8xl leading-none">
        Lost in the <span className="italic text-amber">stack.</span>
      </h1>
      <p className="mt-6 text-muted-foreground max-w-md">
        The page you&apos;re looking for has either moved or never existed in the first place.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 border border-foreground/20 hover:border-amber hover:text-amber px-6 py-3 text-sm transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to safety
      </Link>
    </div>
  );
}
