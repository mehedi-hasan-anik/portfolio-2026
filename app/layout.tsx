import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Geist, JetBrains_Mono } from 'next/font/google';
import { siteConfig } from '@/lib/data';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ThemeProvider } from '@/components/shared/theme-provider';
import './globals.css';

const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf3e6' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0c0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Engineer',
    'Frontend Developer',
    'Redux Developer',
    'Zustand',
    'Tailwind CSS',
    'Material UI',
    'NX Monorepo',
    'Bangladesh',
    'Dhaka',
    'MD. Anik Miah',
    'Anik Miah',
    'Anik Hasan',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: ['/og.png'],
    creator: '@mehedi-hasananik',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { icon: '/favicon.ico', apple: '/apple-icon.png' },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  alternateName: 'Anik Hasan',
  url: siteConfig.url,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  image: `${siteConfig.url}/og.png`,
  worksFor: {
    '@type': 'Organization',
    name: 'Simec System Limited',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Tejgaon College',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Uttara, Dhaka',
    addressRegion: 'Dhaka Division',
    addressCountry: 'BD',
  },
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.facebook,
    siteConfig.social.website,
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Redux',
    'Zustand',
    'Tailwind CSS',
    'Material UI',
    'Frontend Architecture',
    'Responsive Design',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="grain min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="anik-portfolio-theme"
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
