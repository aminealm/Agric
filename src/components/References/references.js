import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { references } from "./Data";
import ReferenceCard from "./ReferenceCard";
import "./references.css";

function References() {
  const navigate = useNavigate();
  const landingReferences = references.slice(0, 6);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollState, setScrollState] = useState({
    atStart: true,
    atEnd: false,
  });

  const carouselRef = useRef(null);
  const visibleCards = 3;
  const maxIndex = Math.max(landingReferences.length - visibleCards, 0);

  const isScrollableLayout = () => window.innerWidth <= 1100;

  const updateScrollButtons = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const atStart = carousel.scrollLeft <= 2;
    const atEnd =
      carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2;

    setScrollState({ atStart, atEnd });
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const isPreviousDisabled = isScrollableLayout()
    ? scrollState.atStart
    : currentIndex === 0;

  const isNextDisabled = isScrollableLayout()
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

    if (isScrollableLayout()) {
      scrollCarousel(1);
      return;
    }

    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const previousReference = () => {
    if (isPreviousDisabled) return;

    if (isScrollableLayout()) {
      scrollCarousel(-1);
      return;
    }

    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handlePointerDown = (event) => {
    if (!isScrollableLayout()) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.dataset.isDragging = "true";
    carousel.dataset.startX = event.clientX;
    carousel.dataset.scrollLeft = carousel.scrollLeft;
    carousel.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const carousel = carouselRef.current;
    if (!carousel || carousel.dataset.isDragging !== "true") return;

    const startX = Number(carousel.dataset.startX);
    const scrollLeft = Number(carousel.dataset.scrollLeft);
    const moveX = event.clientX - startX;

    carousel.scrollLeft = scrollLeft - moveX;
  };

  const stopDragging = (event) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.dataset.isDragging = "false";
    updateScrollButtons();

    try {
      carousel.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer was already released.
    }
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
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
      >
        <div
          className="references-track"
          style={{ "--slide-index": currentIndex }}
        >
          {landingReferences.map((reference) => (
            <ReferenceCard
              key={reference.id}
              reference={reference}
              onMoreClick={() => navigate(`/references?selected=${reference.id}`)}
            />
          ))}
        </div>
      </div>

      <div className="references-actions section-container">
        <button
          type="button"
          className="btn-secondary references-all-btn"
          onClick={() => navigate("/references")}
        >
          ↗ Voir toutes les références
        </button>
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
