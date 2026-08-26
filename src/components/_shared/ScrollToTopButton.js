import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 520);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-top${isVisible ? " scroll-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Revenir en haut de la page"
    >
      <BsArrowUp aria-hidden="true" />
    </button>
  );
}

export default ScrollToTopButton;
