import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #070e18; }
        .nav-desktop { display: flex !important; }
        @media(max-width: 768px) {
          .nav-desktop { display: none !important; }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a1220; }
        ::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 3px; }
      `}</style>

      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Projects />
      <Clients />
      <ContactCTA />
      <Footer />
    </>
  );
}
