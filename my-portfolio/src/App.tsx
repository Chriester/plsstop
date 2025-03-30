import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (

    
    <div className="min-h-screen bg-dark-light text-text">
      <Navbar />
      <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about" className="py-20">
            <About />
          </section>
          <section id="skills" className="py-20">
            <Skills />
          </section>
          <section id="projects" className="py-20">
            <Projects />
          </section>
          <section id="contact" className="py-20">
            <Contact />
          </section>
        </main>
        <Footer />
    </div>
  );
}