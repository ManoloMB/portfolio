import Navbar from './navbar';
import About from './about';
import Tecnology from './tecnology';
import Projects from './projects';
import Experience from './experience';
import Footer from './footer';
import data from './data.json';

export default function Home() {
  return (
    <div>
      <Navbar items={data.navbarItems} />
      <main className='max-w-screen-lg px-10 mx-auto'>
        <About />
        <Tecnology items={data.tecnologyItems}/>
        <Projects items={data.projectsItems} />
        <Experience items={data.experienceItems} />
      </main>
      <Footer />
    </div>
  );
}