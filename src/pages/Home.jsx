import NavbarCorporativo from '../components/NavbarCorporativo.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ServiciosAccordion from '../components/ServiciosAccordion.jsx';
import CasosEstudioModal from '../components/CasosEstudioModal.jsx';
import TimelineProyectos from '../components/TimelineProyectos.jsx';
import ContactoCTA from '../components/ContactoCTA.jsx';
import Footer from '../components/Footer.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

function Home() {
  // Activa las animaciones de aparición al hacer scroll (clase .reveal).
  useScrollReveal();

  return (
    <>
      <NavbarCorporativo />
      <main>
        <HeroSection />
        <ServiciosAccordion />
        <CasosEstudioModal />
        <TimelineProyectos />
        <ContactoCTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
