import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import HeroSlider, { Slide } from "hero-slider";
import Agric1 from "../../img/Agric1.jpg";
import Agric2 from "../../img/Agric2.jpg";
import Agric3 from "../../img/Agric3.jpg";
import { Link } from "react-scroll";


function Home() {
  return (
    <div className="container-fluide home" id="home">
      <div className="backcolor"></div>

      <div className="container home-content">
        <h1>
          <Typewriter
            options={{
              strings: [
                "Agriconsulting Maroc",
                "L’Expertise au service du développement agricole et territorial",
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

        <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
          <span className="view">Découvrir plus</span>
        </Link>
      </div>

      <React.Fragment>
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
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img
                src={Agric1}
                className="d-block w-100"
                alt="Développement agricole et territorial"
              />
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={Agric2}
                className="d-block w-100"
                alt="Agriculture et développement rural"
              />
            </div>

            <div className="carousel-item">
              <img
                src={Agric3}
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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Précédent</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Home;