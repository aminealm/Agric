import { useEffect, useState } from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsPauseFill,
  BsPlayFill,
} from "react-icons/bs";
import "./Home.css";
import agric1 from "../../img/optimized/agric1.webp";
import agric2 from "../../img/optimized/agric2.webp";
import agric3 from "../../img/optimized/agric3.webp";

const slides = [
  {
    src: agric1,
    alt: "Paysage agricole illustrant le développement territorial au Maroc",
  },
  {
    src: agric2,
    alt: "Cultures agricoles accompagnées par Agriconsulting Maroc",
  },
  {
    src: agric3,
    alt: "Ressources naturelles et environnement au service des territoires",
  },
];

const heroPhrases = [
  "Agriconsulting Maroc",
  "L’expertise au service du développement agricole et territorial",
];

function useTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState(heroPhrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setTypedText(heroPhrases[0]);
      return undefined;
    }

    const phrase = heroPhrases[phraseIndex];
    let delay = isDeleting ? 28 : 58;

    if (!isDeleting && typedText === phrase) delay = 1900;
    if (isDeleting && typedText === "") delay = 320;

    const timer = window.setTimeout(() => {
      if (!isDeleting && typedText === phrase) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % heroPhrases.length);
        return;
      }

      const nextLength = typedText.length + (isDeleting ? -1 : 1);
      setTypedText(phrase.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, phraseIndex, typedText]);

  return typedText;
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const typedText = useTypewriter();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || isPaused || isInteracting) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [isInteracting, isPaused]);

  const changeSlide = (direction) => {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length
    );
  };

  return (
    <section className="container-fluide home" id="home" aria-labelledby="home-title">
      <div className="home-content">
        <span className="home-eyebrow">Agriconsulting Maroc SA</span>

        <h1 id="home-title">
          <span className="visually-hidden">
            Conseil agricole et développement territorial au Maroc et en Afrique
          </span>
          <span className="home-title__typewriter" aria-hidden="true">
            {typedText}
          </span>
        </h1>

        <p>
          Agriconsulting Maroc accompagne les opérateurs publics et privés dans
          leurs décisions stratégiques et opérationnelles, au service d’un
          développement durable au Maroc et en Afrique.
        </p>

        <a href="#about" className="btn-main home__cta">
          Découvrir plus
        </a>
      </div>

      <div
        className="home-carousel"
        role="region"
        aria-roledescription="carrousel"
        aria-label="Domaines d’intervention d’Agriconsulting Maroc"
        onFocus={() => setIsInteracting(true)}
        onBlur={() => setIsInteracting(false)}
      >
        <div className="home-carousel__slides">
          {slides.map((slide, index) => (
            <div
              className={`home-carousel__slide${
                index === activeSlide ? " is-active" : ""
              }`}
              aria-hidden={index !== activeSlide}
              key={slide.src}
            >
              <img
                src={slide.src}
                alt={index === activeSlide ? slide.alt : ""}
                width="1920"
                height="1080"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="home-carousel__indicators" aria-label="Choisir une image">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Afficher l’image ${index + 1} sur ${slides.length}`}
              aria-current={index === activeSlide ? "true" : undefined}
              key={slide.src}
            />
          ))}

          <button
            type="button"
            className="home-carousel__pause"
            onClick={() => setIsPaused((current) => !current)}
            aria-label={
              isPaused
                ? "Reprendre le diaporama"
                : "Mettre le diaporama en pause"
            }
          >
            {isPaused ? (
              <BsPlayFill aria-hidden="true" />
            ) : (
              <BsPauseFill aria-hidden="true" />
            )}
          </button>
        </div>

        <button
          type="button"
          className="home-carousel__control home-carousel__control--previous"
          onClick={() => changeSlide(-1)}
          aria-label="Image précédente"
        >
          <BsChevronLeft aria-hidden="true" />
        </button>

        <button
          type="button"
          className="home-carousel__control home-carousel__control--next"
          onClick={() => changeSlide(1)}
          aria-label="Image suivante"
        >
          <BsChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export default Home;
