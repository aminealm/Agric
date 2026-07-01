import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import NavbarMobile from "./components/navbar/NavbarMobile";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/footer/Footer";
import Contact from "./components/Contact/Contact";
import References from "./components/References/references";
import ReferenceDetailPage from "./components/References/ReferenceDetailPage";
import ReferencesPage from "./components/References/ReferencesPage";
import Sectors from "./components/Sectors/Sectors";
import SectorsPage from "./components/Sectors/SectorsPage";
import TeamShowcase from "./components/Team/TeamShowcase";

function ScrollReset() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (location.state?.scrollTo) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return null;
}

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    const offset = location.state?.offset ?? -100;

    if (!sectionId) return;

    const timer = setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        const top =
          section.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Home />
      <About />
      <Sectors />
      <References />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollReset />

      <Navbar />
      <NavbarMobile />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<TeamShowcase />} />
        <Route path="/references" element={<ReferencesPage />} />
        <Route path="/references/:id" element={<ReferenceDetailPage />} />
        <Route path="/secteurs" element={<SectorsPage />} />
      </Routes>

      <ScrollToTop
        smooth
        className="scroll"
        color="white"
        height="20"
        width="20"
        style={{
          borderRadius: "50%",
          zIndex: 999999,
          backgroundColor: "var(--green-main)",
        }}
      />

      <Footer />
    </BrowserRouter>
  );
}

export default App;

