import React, { useEffect, useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import agric1 from "../../img/agric1.jpg";
import agric2 from "../../img/agric2.jpg";
import agric3 from "../../img/agric3.jpg";
import { Link } from "react-scroll";

const slides = [
  {
    image: agric1,
    alt: "D\u00e9veloppement agricole et territorial",
    interval: 5000,
  },
  {
    image: agric2,
    alt: "Agriculture et d\u00e9veloppement rural",
    interval: 3000,
  },
  {
    image: agric3,
    alt: "Environnement et ressources naturelles",
    interval: 3000,
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const showSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, slides[activeSlide].interval);

    return () => window.clearTimeout(timer);
  }, [activeSlide]);

  return (
    <div className="container-fluide home" id="home">
      <div className="home-content">
        <span className="home-eyebrow">Agriconsulting Maroc SA</span>

        <h1>
          <Typewriter
            options={{
              strings: [
                "Agriconsulting Maroc",
                "L\u2019expertise au service du d\u00e9veloppement agricole et territorial",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p>
          {"Agriconsulting Maroc accompagne les op\u00e9rateurs publics et priv\u00e9s dans leurs d\u00e9cisions strat\u00e9giques et op\u00e9rationnelles, au service du d\u00e9veloppement durable au Maroc et en Afrique."}
        </p>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          className="btn-main home__cta"
        >
          {"D\u00e9couvrir plus"}
        </Link>
      </div>

      <div id="carouselExampleCaptions" className="carousel carousel-home slide">
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === activeSlide ? "active" : ""}
              aria-current={index === activeSlide ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
              onClick={() => showSlide(index)}
              key={slide.image}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === activeSlide ? "active" : ""}`}
              data-bs-interval={slide.interval}
              key={slide.image}
            >
              <img src={slide.image} className="d-block w-100" alt={slide.alt} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          onClick={() => showSlide(activeSlide - 1)}
          aria-label="Pr\u00e9c\u00e9dent"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">{"Pr\u00e9c\u00e9dent"}</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          onClick={() => showSlide(activeSlide + 1)}
          aria-label="Suivant"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
}

export default Home;