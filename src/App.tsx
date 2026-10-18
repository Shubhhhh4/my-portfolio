import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Proof from "./components/Proof";
import About from "./components/About";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Engagements from "./components/Engagements";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      {/* film grain overlay */}
      <div
        className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.035]"
        aria-hidden="true"
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Proof />
        <About />
        <Features />
        <Projects />
        <Experience />
        <Benefits />
        <Testimonials />
        <Engagements />
        <Faq />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
