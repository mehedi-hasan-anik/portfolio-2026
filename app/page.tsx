import { Banner } from '@/components/sections/banner';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Projects } from '@/components/sections/projects';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
