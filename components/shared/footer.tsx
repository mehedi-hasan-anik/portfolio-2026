import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { Github, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 mt-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-sm bg-amber text-accent-foreground font-bold text-sm">
              A
            </span>
            <div>
              <p className="font-serif text-base leading-tight">{siteConfig.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                {siteConfig.role}
              </p>
            </div>
          </div>

          {/* Quick socials */}
          <ul className="flex items-center gap-2 md:justify-center">
            {[
              { Icon: Github, href: siteConfig.social.github, label: 'GitHub' },
              { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
              { Icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
            ].map(({ Icon, href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-sm border border-foreground/10 hover:border-amber hover:text-amber transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ul>

          <p className="font-mono text-[11px] text-muted-foreground md:text-right">
            © {new Date().getFullYear()} {siteConfig.shortName}. Built with Next.js, Tailwind & motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
