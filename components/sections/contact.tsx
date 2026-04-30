'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { SectionHeading } from '../shared/section-heading';
import { Reveal } from '../shared/reveal';
import { Magnetic } from '../shared/magnetic';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORMCARRY_ENDPOINT = 'https://formcarry.com/s/JPbGpbi0qPn';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: 'Best for project briefs',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
    note: 'Mon — Fri, GMT+6',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: siteConfig.location,
    href: 'https://maps.google.com/?q=Uttara+Dhaka+Bangladesh',
    note: 'Open to remote roles',
  },
];

const socials = [
  { icon: Github, label: 'GitHub', href: siteConfig.social.github, handle: '@mehedi-hasananik' },
  { icon: Linkedin, label: 'LinkedIn', href: siteConfig.social.linkedin, handle: '/in/md-anikmiah' },
  { icon: Facebook, label: 'Facebook', href: siteConfig.social.facebook, handle: '@anik.ahamed' },
];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMCARRY_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('Network response was not ok');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  }

  return (
    <section
      id="contact"
      className="cv-auto relative py-24 md:py-40 mx-auto max-w-7xl px-6 md:px-10 overflow-hidden"
      aria-label="Contact"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-[600px] glow-amber pointer-events-none"
      />

      <div className="relative">
        <SectionHeading
          number="06"
          label="Contact"
          title="Let's build something"
          emphasis="considered."
          description="Whether it's a frontend role, a freelance UI build, or just a React/Next.js conversation — my inbox is open."
        />

        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative border border-foreground/10 bg-card/30 backdrop-blur-sm">
              <span aria-hidden="true" className="absolute -top-px -left-px h-8 w-8 border-t-2 border-l-2 border-amber" />
              <span aria-hidden="true" className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-amber" />

              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-foreground/10">
                  <p className="section-marker">Write to me</p>
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-amber" />
                    <span className="h-2 w-2 rounded-full bg-foreground/15" />
                    <span className="h-2 w-2 rounded-full bg-foreground/15" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FloatingField
                      id="firstName"
                      name="firstName"
                      label="First name"
                      required
                      focused={focused === 'firstName'}
                      onFocus={() => setFocused('firstName')}
                      onBlur={() => setFocused(null)}
                    />
                    <FloatingField
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      required
                      focused={focused === 'lastName'}
                      onFocus={() => setFocused('lastName')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <FloatingField
                    id="email"
                    name="email"
                    type="email"
                    label="Email address"
                    required
                    focused={focused === 'email'}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />

                  <FloatingField
                    id="message"
                    name="message"
                    label="Tell me about your project"
                    required
                    multiline
                    focused={focused === 'message'}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ position: 'absolute', left: '-9999px' }}
                    aria-hidden="true"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                    <p className="text-xs text-muted-foreground font-mono">
                      I&apos;ll reply within 24 hours.
                    </p>

                    <Magnetic strength={12}>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={cn(
                          'group relative inline-flex items-center gap-3 bg-amber text-accent-foreground px-7 py-3.5 text-sm font-medium',
                          'hover:brightness-110 transition-all',
                          'shadow-[0_0_30px_-10px_hsl(var(--amber-glow))] hover:shadow-[0_0_45px_-5px_hsl(var(--amber-glow))]',
                          'disabled:opacity-60 disabled:cursor-not-allowed'
                        )}
                      >
                        {/* `key` change forces remount → triggers .status-enter CSS animation */}
                        {status === 'submitting' ? (
                          <span key="sending" className="status-enter flex items-center gap-3">
                            <span className="h-3 w-3 rounded-full border-2 border-current border-t-transparent" style={{ animation: 'spin 0.8s linear infinite' }} />
                            Sending…
                          </span>
                        ) : status === 'success' ? (
                          <span key="sent" className="status-enter flex items-center gap-3">
                            <CheckCircle2 className="h-4 w-4" /> Sent — talk soon!
                          </span>
                        ) : (
                          <span key="send" className="status-enter flex items-center gap-3">
                            Send message
                            <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        )}
                      </button>
                    </Magnetic>
                  </div>

                  {status === 'error' && errorMsg && (
                    <div
                      className="status-enter flex items-start gap-3 text-sm text-destructive border border-destructive/30 bg-destructive/5 px-4 py-3"
                      role="alert"
                    >
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </Reveal>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <Reveal>
                <p className="section-marker mb-8">Direct channels</p>
              </Reveal>
              <ul className="space-y-px bg-foreground/10 border-y border-foreground/10">
                {channels.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Reveal key={c.label} delay={i * 0.06}>
                      <li className="bg-background">
                        <Link
                          href={c.href}
                          target={c.href.startsWith('http') ? '_blank' : undefined}
                          rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="group flex items-center gap-5 px-1 py-5 hover:bg-foreground/[0.03] transition-colors"
                        >
                          <div className="grid h-12 w-12 place-items-center border border-foreground/10 group-hover:border-amber group-hover:text-amber transition-colors flex-shrink-0">
                            <Icon className="h-4 w-4" strokeWidth={1.5} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                              {c.label}
                            </p>
                            <p className="font-serif text-lg leading-tight truncate group-hover:text-amber transition-colors">
                              {c.value}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">{c.note}</p>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-amber group-hover:rotate-45 transition-all flex-shrink-0" />
                        </Link>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>

            <div>
              <Reveal>
                <p className="section-marker mb-6">Follow along</p>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="grid grid-cols-3 gap-3">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.label}>
                        <Link
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${s.label} — ${s.handle}`}
                          className="group relative flex flex-col items-center gap-3 border border-foreground/10 px-4 py-6 hover:border-amber hover:bg-foreground/[0.02] transition-colors"
                        >
                          <Icon className="h-5 w-5 text-foreground/70 group-hover:text-amber transition-colors" strokeWidth={1.5} />
                          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                            {s.label}
                          </span>
                          <span aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full bg-amber transition-[width] duration-500 ease-out" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="border border-foreground/10 p-6 bg-card/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="pulse-dot relative inline-flex h-2 w-2 rounded-full bg-amber" />
                  </span>
                  <p className="section-marker text-amber">Available for work</p>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  Currently open to frontend engineer and React / Next.js roles, freelance UI
                  builds, and interesting product work.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Floating-label input — unchanged */
type FloatingFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
};

function FloatingField({
  id,
  name,
  label,
  type = 'text',
  required,
  multiline,
  focused,
  onFocus,
  onBlur,
}: FloatingFieldProps) {
  const [hasValue, setHasValue] = useState(false);
  const lifted = focused || hasValue;

  const sharedClass = cn(
    'peer w-full bg-transparent border-0 border-b border-foreground/15 px-0 pt-6 pb-2',
    'text-base text-foreground placeholder-transparent',
    'focus:outline-none focus:border-amber focus:ring-0',
    'transition-colors'
  );

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={4}
          placeholder={label}
          onFocus={onFocus}
          onBlur={(e) => {
            onBlur();
            setHasValue(!!e.target.value);
          }}
          onChange={(e) => setHasValue(!!e.target.value)}
          className={cn(sharedClass, 'resize-none min-h-[120px]')}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={label}
          onFocus={onFocus}
          onBlur={(e) => {
            onBlur();
            setHasValue(!!e.target.value);
          }}
          onChange={(e) => setHasValue(!!e.target.value)}
          autoComplete={
            id === 'email'
              ? 'email'
              : id === 'firstName'
              ? 'given-name'
              : id === 'lastName'
              ? 'family-name'
              : 'off'
          }
          className={sharedClass}
        />
      )}

      <label
        htmlFor={id}
        className={cn(
          'absolute left-0 pointer-events-none transition-all duration-300 ease-out',
          'font-mono uppercase tracking-widest',
          lifted ? 'top-0 text-[10px] text-amber' : 'top-6 text-sm text-muted-foreground'
        )}
      >
        {label}
        {required && <span className="ml-1 text-amber">*</span>}
      </label>

      <span
        aria-hidden="true"
        className={cn(
          'absolute bottom-0 left-0 h-px bg-amber transition-all duration-500 ease-out',
          focused ? 'w-full' : 'w-0'
        )}
      />
    </div>
  );
}
