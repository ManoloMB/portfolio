import Navbar from '@/components/navbar';
import About from '@/components/about';
import Tecnology from '@/components/tecnology';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import ActualProjects from '@/components/actualProjects';
import Footer from '@/components/footer';
import data from '@/components/data.json';
import EmbeddedChat from '@/components/embbedChat';

export default function Home() {
  return (
    <div>
      <Navbar items={data.navbarItems} />
      <main className='max-w-screen-lg px-10 mx-auto'>
        <About />
        <EmbeddedChat />
        <Projects items={data.projectsItems} />
        <Tecnology items={data.tecnologyItems}/>
        <Experience items={data.experienceItems} />
        <ActualProjects items={data.actualProjectsItems} />
      </main>
      <Footer />
    </div>
  );
}