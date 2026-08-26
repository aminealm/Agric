import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { references } from "./Data";
import ReferenceCard from "./ReferenceCard";
import "./references.css";

function References() {
  const landingReferences = references.slice(0, 6);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollState, setScrollState] = useState({
    atStart: true,
    atEnd: false,
  });

  const carouselRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(
    () => window.innerWidth <= 1100
  );
  const visibleCards = 3;
  const maxIndex = Math.max(landingReferences.length - visibleCards, 0);

  const updateScrollButtons = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const atStart = carousel.scrollLeft <= 2;
    const atEnd =
      carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2;

    setScrollState((current) =>
      current.atStart === atStart && current.atEnd === atEnd
        ? current
        : { atStart, atEnd }
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsScrollable(window.innerWidth <= 1100);
      updateScrollButtons();
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScrollButtons]);

  const isPreviousDisabled = isScrollable
    ? scrollState.atStart
    : currentIndex === 0;

  const isNextDisabled = isScrollable
    ? scrollState.atEnd
    : currentIndex === maxIndex;

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector(".reference-card");
    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 350);
  };

  const nextReference = () => {
    if (isNextDisabled) return;

    if (isScrollable) {
      scrollCarousel(1);
      return;
    }

    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const previousReference = () => {
    if (isPreviousDisabled) return;

    if (isScrollable) {
      scrollCarousel(-1);
      return;
    }

    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="section section--white references-section" id="references">
      <div className="section-container">
        <div className="section-header references-header">
          <span className="section-eyebrow">Nos réalisations</span>
          <h2>Références</h2>
          <p>
            Une sélection de projets et missions menés auprès d’acteurs publics
            et privés au Maroc et à l’international.
          </p>
        </div>
      </div>

      <div
        className="references-carousel"
        ref={carouselRef}
        onScroll={updateScrollButtons}
      >
        <div
          className="references-track"
          style={{ "--slide-index": currentIndex }}
        >
          {landingReferences.map((reference) => (
            <ReferenceCard
              key={reference.id}
              reference={reference}
              to={`/references/${reference.id}`}
            />
          ))}
        </div>
      </div>

      <div className="references-actions section-container">
        <Link
          className="btn-secondary references-all-btn"
          to="/references"
        >
          ↗ Voir toutes les références
        </Link>
      </div>

      <div className="references-controls section-container">
        <button
          type="button"
          onClick={previousReference}
          disabled={isPreviousDisabled}
          aria-label="Référence précédente"
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextReference}
          disabled={isNextDisabled}
          aria-label="Référence suivante"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default References;
