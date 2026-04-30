export const siteConfig = {
  name: 'MD. Anik Miah',
  shortName: 'Anik',
  role: 'Software Engineer',
  location: 'Uttara, Dhaka, Bangladesh',
  email: 'anikhasan.cse@gmail.com',
  phone: '+880 1959 109322',
  url: 'https://new-project-e5fa6.web.app',
  description:
    'Software Engineer specializing in React, Next.js, and TypeScript. Currently building production interfaces for government and enterprise platforms at Simec System Limited — including LIMS, EMS, and Simec Career.',
  social: {
    github: 'https://github.com/mehedi-hasan-anik',
    linkedin: 'https://linkedin.com/in/md-anikmiah-051072211',
    facebook: 'https://www.facebook.com/anik.ahamed.908',
    website: 'https://new-project-e5fa6.web.app',
  },
};

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Redux',
  'Zustand',
  'Tailwind CSS',
  'Material UI',
  'Bootstrap',
  'styled-components',
  'react-router',
  'NX Monorepo',
  'Nginx',
  'REST APIs',
  'Responsive Design',
  'PSD/XD to React',
];

export const about = {
  headline: 'A frontend engineer who ships interfaces that hold up in production.',
  paragraphs: [
    "I'm a Software Engineer at Simec System Limited, where I've spent three years building user interfaces for systems that real organizations depend on — a Labor Information Management System running on an NX monorepo, an Education Management System for the Islamic Foundation, plus the Simec News and Simec Career platforms.",
    'My focus is the user-facing layer: turning Figma and PSD designs into responsive, accessible React and Next.js interfaces that hold up under real workloads. Comfortable across the modern frontend stack — Redux and Zustand for state, Tailwind and Material UI for styling, NX for monorepo tooling.',
    "Before Simec, I worked at Bdtask Limited on Bus365 — a bus-ticket platform with online payments, social login, and PSD-to-React conversion. I'm always looking for projects where careful UI work compounds into something users actually feel.",
  ],
  stats: [
    { value: '5+', label: 'Years building production frontends' },
    { value: '10+', label: 'Live products shipped' },
    { value: '2', label: 'Companies, one craft' },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Simec System Limited',
    role: 'Software Developer',
    period: 'Dec 2022 — Present',
    location: 'Dhaka, Bangladesh',
    description:
      'Frontend engineer across four production platforms — a labor information system, an education management system, a news platform, and a career portal. Day-to-day work is React, Redux, and Next.js inside an NX monorepo deployed behind Nginx.',
    highlights: [
      'Designed and built UI for the Labor Information Management System (LIMS) — Organization, Workforce, Management, and Job Portal modules — meeting accessibility and design-system standards',
      'Shipped the Education Management System (EMS) for the Islamic Foundation, covering Center, Student, Teacher, and Visit/Inspection management',
      'Developed the Simec News frontend — News Feed, Articles, Editorials, Multimedia — with responsive layouts that work on both desktop and mobile',
      'Built Simec Career — a job portal with separate experiences for admins and job seekers',
    ],
    stack: ['React', 'Next.js', 'Redux', 'TypeScript', 'NX Monorepo', 'Nginx', 'Tailwind CSS'],
  },
  {
    company: 'Bdtask Limited',
    role: 'React.js Developer',
    period: 'Jul 2021 — Nov 2022',
    location: 'Dhaka, Bangladesh',
    description:
      'Frontend developer on Bus365 — a bus-ticket platform letting passengers book online or offline, return tickets within a window, and pay through integrated gateways.',
    highlights: [
      'Converted PSD/XD designs into responsive React components matching the design specs pixel-for-pixel',
      'Integrated REST APIs across booking, payment, and ticket-return flows',
      'Implemented social login with Google and Facebook OAuth',
      'Wired up the payment gateway integration end-to-end',
    ],
    stack: ['React', 'react-router', 'Redux', 'styled-components', 'REST APIs'],
  },
];

export const education = [
  {
    institution: 'Tejgaon College',
    degree: 'Computer Science & Engineering',
    period: 'Graduated 2022',
    location: 'Dhaka, Bangladesh',
    detail:
      'Studied core CS — data structures, algorithms, databases, and software engineering — while working professionally as a frontend developer on the side.',
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  href?: string;
  year: string;
  status: 'Production' | 'Internal' | 'Open Source' | 'In Progress';
  liveLink: string;
};

export const projects: Project[] = [
  {
    title: 'LIMS — Labor Information Management System',
    blurb: 'Government-scale labor registry running on an NX monorepo.',
    description:
      'Designed and built the UI for several LIMS modules — Organization, Workforce, Management, and Job Portal — using React and Next.js. Worked inside an NX monorepo deployed behind Nginx with shared component libraries across apps.',
    stack: ['React', 'Next.js', 'Redux', 'NX Monorepo', 'Nginx'],
    year: '2024',
    status: 'Production',
    liveLink: 'https://lims.dife.gov.bd/'
  },
  {
    title: 'EMS — Education Management System',
    blurb: 'Education platform for the Islamic Foundation.',
    description:
      'Responsive interfaces for Center Management, Student Management, Teacher Management, and Visit/Inspection Management. Built to be used daily by foundation staff across multiple regions.',
    stack: ['React', 'Next.js', 'Redux'],
    year: '2023',
    status: 'Production',
    liveLink: 'http://mbe.gov.bd/'
  },
  {
    title: 'Simec News',
    blurb: 'News platform with feeds, articles, editorials, and multimedia.',
    description:
      'Dynamic frontend for a news website — News Feed, Articles, Editorials, and Multimedia sections. Interactive elements and responsive design tuned for both desktop reading and on-the-go mobile browsing.',
    stack: ['React', 'Next.js', 'Redux'],
    year: '2024',
    status: 'Production',
    liveLink: 'https://simecnews.com/'
  },
  {
    title: 'Simec Career',
    blurb: 'Two-sided job portal for admins and seekers.',
    description:
      'A career platform with separate UI tracks for the job-portal admin and for job seekers. Focus on responsive layouts and the ergonomics of long forms (job posts, applications, profile editing).',
    stack: ['React', 'Next.js', 'Redux'],
    year: '2024',
    status: 'Production',
    liveLink: 'https://career.simec-inc.net/'
  },
  {
    title: 'Bus365 — Online Bus Ticketing',
    blurb: 'Online and offline bus-ticket booking with integrated payments.',
    description:
      'Frontend for a bus-ticket platform letting passengers buy tickets online or offline, return tickets within a time window, and log in with Google or Facebook. PSD/XD-to-React conversion, full responsive build, and payment-gateway integration.',
    stack: ['React', 'react-router', 'Redux', 'styled-components'],
    year: '2022',
    status: 'Production',
    liveLink: 'https://bus365demo.bdtask-demo.com/'
  },
  {
    title: 'Personal Portfolio',
    blurb: 'This site. Next.js 15, Tailwind, shadcn, motion.',
    description:
      'Editorial-themed portfolio with dark/light mode, scroll-triggered animations, and full SEO setup. Statically generated, deployed on the edge.',
    href: 'https://new-project-e5fa6.web.app',
    stack: ['Next.js', 'Tailwind', 'shadcn/ui', 'motion'],
    year: '2026',
    status: 'In Progress',
    liveLink: ''
  },
];

export type Post = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  slug: string;
};

export const posts: Post[] = [
  {
    title: 'Redux to Zustand — When the Migration Is Worth It',
    excerpt:
      'Notes from gradually moving slices of an enterprise app from Redux Toolkit to Zustand — what got faster, what stayed the same, and where I would still reach for Redux.',
    date: 'Mar 14, 2026',
    readTime: '8 min read',
    tag: 'State',
    slug: 'redux-to-zustand-migration',
  },
  {
    title: 'NX Monorepos for Next.js Teams — A Field Report',
    excerpt:
      'A year of running production Next.js apps inside an NX monorepo behind Nginx. Build caching, shared UI libs, and the gotchas nobody mentions in the docs.',
    date: 'Feb 02, 2026',
    readTime: '12 min read',
    tag: 'Architecture',
    slug: 'nx-monorepo-nextjs',
  },
  {
    title: 'PSD to React, Done Right',
    excerpt:
      'A practical workflow for turning Figma and PSD designs into responsive, accessible React components — without losing the spec along the way.',
    date: 'Jan 21, 2026',
    readTime: '10 min read',
    tag: 'Frontend',
    slug: 'psd-to-react-workflow',
  },
  {
    title: 'Material UI vs Tailwind — A Frontend Engineer Picks',
    excerpt:
      'Three years shipping production with both. Where MUI shines, where Tailwind wins, and how I decide which one a project should be built on.',
    date: 'Dec 09, 2025',
    readTime: '14 min read',
    tag: 'CSS',
    slug: 'mui-vs-tailwind',
  },
];
