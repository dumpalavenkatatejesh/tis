import { useEffect } from "react";
import Academics from "./components/Academics.jsx";
import Admissions from "./components/Admissions.jsx";
import Boarding from "./components/Boarding.jsx";
import Campus from "./components/Campus.jsx";
import Cursor from "./components/Cursor.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Houses from "./components/Houses.jsx";
import MobileCta from "./components/MobileCta.jsx";
import Navbar from "./components/Navbar.jsx";
import Pillars from "./components/Pillars.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import Ribbon from "./components/Ribbon.jsx";
import Story from "./components/Story.jsx";
import { ScrollTrigger } from "./lib/gsap.js";

export default function App() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <>
      <a
        href="#story"
        className="fixed top-3 left-4 z-[80] -translate-y-24 rounded-full bg-ember px-4 py-2 text-sm font-semibold text-on-ember focus:translate-y-0"
      >
        Skip to story
      </a>
      <ProgressBar />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ribbon />
        <Story />
        <Pillars />
        <Academics />
        <Campus />
        <Houses />
        <Boarding />
        <Admissions />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
