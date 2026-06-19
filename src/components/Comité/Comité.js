import React from "react";
import "./comité.css";
import DataInfo from "./DataInfo";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import img1 from "./collage.jpg";


function Comité() {

  const data = [
    {
      number: <RiNumber1 />,
      title: "Comité Forum et Séminaire",
      body: 'Se charge de l"élaboration, la planification et l"organisation du forum annuel GR-entreprises qui sert a l"initiation de l"étudiant au monde professionnel, ainsi que des conférences et séminaires tot au long de l"année.',
    },
    {
      number: <RiNumber2 />,
      title: "Comité Projet",
      body: "Equipe Unie et Enthousiaste Devant les défis de Mettre en Pratique les Connaissances Acquises au cours de la Formation, d'acquérir de nouvelles compétences professionnelles et personnelles, de développer la créativite et trouver des solutions innovantes a des problématique dans le domaine du Génie Rural.",
    },
    {
      number: <RiNumber3 />,
      title: "Comite Social",
      body: "A Pour intéret de Mettre en Jeu l'Esprit de Solidarité, de Partage et de Collaboration Chez l'Eleve Ingénieur en Génie Rural, dans le but d'apporter le maximun de soutien possible en faveur des populations et des institutions défavorisées en participant a l'amélioration de leurs conditions de vie, a travers l'organisation des manifestations humanitaires, a savoir des caravanes sociales dans les zones enclavées, des visites aux orphelinats ainsi qu'aux maisons de retraites et des distributions d'aides aux nécessiteux ...",
    },
    {
      number: <RiNumber4 />,
      title: "Comite Formation",
      body: "A Pour But de Valoriser et d'enrichir le Profil du Génie Rural tout en Assurant une Formation Complémentaire de Qualité qui répond aux éxigences professionnelles et académiques, ainsi de créer un esprit d'échange inter-promos de connaissances et d'expériences visant le développement et le renforcement des compétences des étudiants.",
    },
    {
      number: <RiNumber5 />,
      title: "Comite Parascolaire",
      body: "S'occupe des différentes activités comme étant une source de persévérance scolaire, d'épanouissement, de divertissement, de bien-étre et de fierté personnelle, en visant l'échange et la communication entre les étudiants et l'élargissement de leurs cercles de connaissances.",
    },
    {
      number: <RiNumber6 />,
      title: "Comite Médiatisation",
      body: "A pour but de collaborer avec les autres comités, assurer la couverture médiatique des événements phares de l'association, améliorer le contenu des réseaux sociaux pour garder les internautes engagés.",
    },
  ];

  return (
    <div className="container career" id="career">
      <div className="service-title career-title">
        <h2>Comités</h2>
        <span className="line"></span>
      </div>
      <div className="row">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 img">
          <img className="lazyload" src={img1} alt=''></img>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 comité-content">
          {data.map((item, index) => (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
              <DataInfo {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comité;
