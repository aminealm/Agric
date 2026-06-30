import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { BsCheck2All, BsArrowRight } from "react-icons/bs";

function About() {
  return (
    <section className="section section--white about-sect" id="about">
      <div className="section-container about-preview">
        <div className="about-preview__content">
          <span className="section-eyebrow">À propos de nous</span>

          <h2>L’expertise au service du développement agricole et territorial.</h2>

          <p>
            Agriconsulting Maroc accompagne les opérateurs publics et privés
            dans leurs décisions stratégiques et opérationnelles, au service du
            développement durable au Maroc et en Afrique.
          </p>

          <Link to="/about" className="btn-main about-preview__button">
            En savoir plus
            <BsArrowRight size={20} />
          </Link>
        </div>

        <div className="about-preview__cards">
          <article className="ui-card">
            <BsCheck2All size={25} />
            <h3>Conseil & études</h3>
            <p>
              Des solutions adaptées aux enjeux agricoles, ruraux et
              territoriaux.
            </p>
          </article>

          <article className="ui-card">
            <BsCheck2All size={25} />
            <h3>Expertise terrain</h3>
            <p>
              Une connaissance locale renforcée par un savoir-faire
              international.
            </p>
          </article>

          <article className="ui-card">
            <BsCheck2All size={25} />
            <h3>Impact durable</h3>
            <p>
              Une approche responsable, inclusive et orientée vers les
              territoires.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
