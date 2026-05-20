import Navbar from '@/components/navbar';
import About from '@/components/about';
import Tecnology from '@/components/tecnology';
import FeaturedProjects from '@/components/featuredProjects';
import Experience from '@/components/experience';
import ChatbotSection from '@/components/chatbotSection';
import ContactSection from '@/components/contactSection';
import EmbeddedChat from '@/components/embbedChat';
import ScrollReveal from '@/components/scrollReveal';
import HealthCheck from '@/components/healthCheck';
import data from '@/components/data.json';

export default function Home() {
  return (
    <div>
      <HealthCheck />
      <Navbar items={data.navbarItems} />
      <main className='max-w-screen-lg px-10 mx-auto'>

        <About />

        <ScrollReveal delay={0}>
          <EmbeddedChat />
        </ScrollReveal>

        <ScrollReveal delay={0}>
          <Tecnology skillsCategories={data.skillsCategories} />
        </ScrollReveal>

        <ScrollReveal delay={0}>
          <Experience items={data.experienceItems} />
        </ScrollReveal>

        <ScrollReveal delay={0}>
          <FeaturedProjects items={data.featuredProjects} />
        </ScrollReveal>

        <ScrollReveal delay={0}>
          <ChatbotSection data={data.chatbotSection} />
        </ScrollReveal>

        <ScrollReveal delay={0}>
          <ContactSection data={data.contactSection} />
        </ScrollReveal>

      </main>
    </div>
  );
}
