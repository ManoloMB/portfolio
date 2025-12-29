import Navbar from '@/components/navbar';
import About from '@/components/about';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Footer from '@/components/footer';
import data from '@/components/data.json';
import skills from '@/components/skills.json';
import EmbeddedChat from '@/components/embbedChat';

export default function Home() {
  return (
    <div>
      <Navbar items={data.navbarItems} />
      <main className='max-w-screen-lg px-10 mx-auto'>
        <About />
        <EmbeddedChat />
        <Experience items={data.experienceItems} />
        <Projects items={data.projectsItems} />
        <Skills items={skills.categories} />
      </main>
      <Footer />
    </div>
  );
}