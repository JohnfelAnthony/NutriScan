import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

export default function App() {
  /* ── Intersection Observer for scroll-reveal animations ── */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".reveal-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </>
  );
}
