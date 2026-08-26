import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import NavbarMobile from "./components/navbar/NavbarMobile";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Contact from "./components/Contact/Contact";
import References from "./components/References/references";
import Sectors from "./components/Sectors/Sectors";
import Seo from "./components/Seo/Seo";
import ScrollToTopButton from "./components/_shared/ScrollToTopButton";
import LoadingState from "./components/_shared/LoadingState";

const TeamShowcase = lazy(() => import("./components/Team/TeamShowcase"));
const ReferencesPage = lazy(() =>
  import("./components/References/ReferencesPage")
);
const ReferenceDetailPage = lazy(() =>
  import("./components/References/ReferenceDetailPage")
);
const SectorsPage = lazy(() => import("./components/Sectors/SectorsPage"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function ScrollReset() {
  const location = useLocation();
  const scrollTarget = location.state?.scrollTo;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (scrollTarget) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname, scrollTarget]);

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
    <main id="main-content">
      <Home />
      <About />
      <Sectors />
      <References />
      <Contact />
    </main>
  );
}

function RouteFallback() {
  return <LoadingState />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <Seo />

      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>

      <Navbar />
      <NavbarMobile />

      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<TeamShowcase />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/references/:id" element={<ReferenceDetailPage />} />
          <Route path="/secteurs" element={<SectorsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <ScrollToTopButton />

      <Footer />
    </BrowserRouter>
  );
}

export default App;

