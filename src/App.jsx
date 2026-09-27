import { useEffect, useRef, useState, Component } from "react";
import Lenis from "lenis";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink px-6 text-center">
          <div>
            <h1 className="font-display text-2xl font-bold text-white">Something went wrong</h1>
            <p className="mt-2 text-slate-400">{String(this.state.error?.message || this.state.error)}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    window.__lenis = lenis;
    lenis.stop();

    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (hash && hash.length > 1) {
        e.preventDefault();
        lenis.scrollTo(hash, { offset: -70, duration: 1.4 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (loaded) lenis.start();
    else lenis.stop();
  }, [loaded]);

  return (
    <ErrorBoundary>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <div className="noise-overlay" aria-hidden="true" />
      <CustomCursor />
      <Navbar active={loaded} />
      <main id="top">
        <Hero active={loaded} />
        <Marquee />
        <Services />
        <Portfolio />
        <Process />
        <Stats />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
