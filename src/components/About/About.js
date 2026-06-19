import React from "react";
import "./about.css";
import { BsCheck2All } from "react-icons/bs";

function About() {
  return (
    <div className="container about-sect" id="about">
      <div className="about-title">
        <h2>À PROPOS DE NOUS</h2>
      </div>

      <span className="line"></span>

      <div className="row about-row">
        <div className="col-12">
          <div className="about-dtl">
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-icon">
                  <BsCheck2All size={27}  />
                </div>

                <p>
                  Agriconsulting Maroc est une société anonyme de droit
                  marocain, fondée en 2002 à la suite d’un partenariat
                  italo-marocain. Membre du Groupe Agriconsulting, elle se
                  positionne comme un acteur majeur du conseil, des études et de
                  l’assistance technique au service du développement durable au
                  Maroc et en Afrique.
                </p>
              </div>

              <div className="about-list-item">
                <div className="about-icon">
                  <BsCheck2All size={27} color="#18B85A" />
                </div>

                <p>
                  Notre mission est de fournir des services de haute qualité
                  pour accompagner les opérateurs publics et privés dans leurs
                  décisions stratégiques et opérationnelles.
                </p>
              </div>

              <div className="about-list-item">
                <div className="about-icon">
                  <BsCheck2All size={27} color="#18B85A" />
                </div>

                <p>
                  Forts d’une expertise reconnue à l’échelle internationale,
                  nous intervenons dans des domaines clés tels que
                  l’agriculture, le développement rural et la pêche maritime, le
                  développement des chaînes de valeur agro-industrielles, la
                  planification territoriale et le développement régional, le
                  tourisme rural et l’écotourisme, la gestion de l’environnement
                  et des ressources naturelles, ainsi que le soutien
                  institutionnel et politique.
                </p>
              </div>

              <div className="about-list-item">
                <div className="about-icon">
                  <BsCheck2All size={27} color="#18B85A" />
                </div>

                <p>
                  Agriconsulting Maroc s’appuie sur une vision de développement
                  à moyen et long terme, en combinant le savoir-faire d’experts
                  internationaux et la valorisation des compétences locales.
                </p>
              </div>

              <div className="about-list-item">
                <div className="about-icon">
                  <BsCheck2All size={27} color="#18B85A" />
                </div>

                <p>
                  Guidée par des valeurs fortes d’éthique, de responsabilité
                  sociale et de respect de l’environnement, la société privilégie
                  une approche participative, inclusive et durable à chaque
                  étape de ses projets.
                </p>
              </div>

              <div className="about-highlight">
                Notre ambition : contribuer activement à un développement
                équilibré, responsable et porteur d’avenir pour les territoires.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;