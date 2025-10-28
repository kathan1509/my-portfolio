import { ThemeProvider } from "./hooks/useTheme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import FreelancerAdvantages from "./sections/FreelancerAdvantages";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <ThemeProvider>
      <PageTransition>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <FreelancerAdvantages />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </PageTransition>
    </ThemeProvider>
  );
}

export default App;
