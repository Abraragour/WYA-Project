import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar'; // ضيفي الـ StatsBar
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients'; // ضيفي الـ Clients
import ContactCTA from './components/ContactCTA';
import Notfound from './components/Notfound';

const HomePage = () => (
  <>
    <Hero />
    <StatsBar />
    <About />
    <Services />
    <Projects />
    <Clients />
    <ContactCTA />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> }, 
      
      { path: 'aboutus', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <ContactCTA /> },
      { path: '*', element: <Notfound /> },
    ]
  },
]);

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #070e18; color: white; }
      `}</style>

      <RouterProvider router={router} />
    </>
  );
}