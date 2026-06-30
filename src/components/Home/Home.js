import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import agric1 from "../../img/agric1.jpg";
import agric2 from "../../img/agric2.jpg";
import agric3 from "../../img/agric3.jpg";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="container-fluide home" id="home">
      <div className="home-content">
        <span className="home-eyebrow">Agriconsulting Maroc SA</span>

        <h1>
          <Typewriter
            options={{
              strings: [
                "Agriconsulting Maroc",
                "L’expertise au service du développement agricole et territorial",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p>
          Agriconsulting Maroc accompagne les opérateurs publics et privés dans
          leurs décisions stratégiques et opérationnelles, au service du
          développement durable au Maroc et en Afrique.
        </p>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          className="btn-main home__cta"
        >
          Découvrir plus
        </Link>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel carousel-home slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src={agric1}
              className="d-block w-100"
              alt="Développement agricole et territorial"
            />
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={agric2}
              className="d-block w-100"
              alt="Agriculture et développement rural"
            />
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={agric3}
              className="d-block w-100"
              alt="Environnement et ressources naturelles"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Précédent</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
