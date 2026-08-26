// src/components/TeamShowcase/teamData.js

import lorenzoImg from "../../img/optimized/Lorenzo.webp";
import abdellahImg from "../../img/optimized/Abdellah.webp";
import asmaImg from "../../img/optimized/Asma.webp";
import ilyasImg from "../../img/optimized/Ilyas.webp";
import clientLogo01 from "../../img/clients/client-logo-01.avif";
import worldBankLogo from "../../img/clients/world-bank.png";
import onssaLogo from "../../img/clients/onssa.png";
import oncaLogo from "../../img/clients/onca.png";
import afdLogo from "../../img/clients/afd.png";
import economyFinanceLogo from "../../img/clients/ministere-economie-finances.png";
import equipmentWaterLogo from "../../img/clients/ministere-equipement-eau.png";
import mccMarocLogo from "../../img/clients/mcc-maroc.png";

const onlinePortraits = {
  lorenzo: lorenzoImg,
  abdellah: abdellahImg,
  asma: asmaImg,
  ilyas: ilyasImg,
};

export const aboutIntro = {
  eyebrow: "À propos de nous",
  title: "Agriconsulting Maroc SA",
  descriptionStart:
    "Agriconsulting Maroc SA est une société anonyme de droit marocain, fondée en 2002 à la suite d'un partenariat italo-marocain. Membre du Groupe ",
  europe: {
    label: "Agriconsulting Europe",
    url: "https://aesagroup.eu/",
  },
  descriptionMiddle: ", en fusion avec le Groupe ",
  bfInternational: {
    label: "BF International",
    url: "https://bfint.co.uk",
  },
  descriptionEnd:
    ", elle se positionne comme un acteur majeur du conseil, des études et de l'assistance technique au service du développement durable au Maroc et en Afrique.",
};

export const aboutCards = [
  {
    title: "Notre mission",
    text: "Fournir des services de haute qualité pour accompagner les opérateurs publics et privés dans leurs décisions stratégiques et opérationnelles.",
  },
  {
    title: "Nos domaines d'intervention",
    text: "Agriculture, développement rural, pêche maritime, chaînes de valeur agro-industrielles, planification territoriale, développement régional, tourisme rural, écotourisme, environnement et ressources naturelles.",
  },
  {
    title: "Notre approche",
    text: "Combiner le savoir-faire d'experts internationaux, la connaissance du terrain et la valorisation des compétences locales.",
  },
  {
    title: "Nos valeurs",
    text: "Éthique, responsabilité sociale, respect de l'environnement, approche participative, inclusion et durabilité à chaque étape de nos projets.",
  },
];

export const aboutAmbition =
  "Contribuer activement à un développement équilibré, responsable et porteur d'avenir pour les territoires.";

export const clienteleLogos = [
  {
    name: "Partenaire institutionnel",
    image: clientLogo01,
  },
  {
    name: "The World Bank",
    image: worldBankLogo,
    wide: true,
    size: "large",
  },
  {
    name: "ONSSA",
    image: onssaLogo,
    size: "large",
  },
  {
    name: "Office National du Conseil Agricole",
    image: oncaLogo,
    size: "large",
  },
  {
    name: "Agence Française de Développement",
    image: afdLogo,
    wide: true,
  },
  {
    name: "Ministère de l'Économie et des Finances",
    image: economyFinanceLogo,
    wide: true,
    size: "large",
  },
  {
    name: "Ministère de l'Équipement et de l'Eau",
    image: equipmentWaterLogo,
    tall: true,
    size: "medium",
  },
  {
    name: "MCC Maroc",
    image: mccMarocLogo,
  },
];

export const boardMembers = [
  {
    id: 1,
    name: "GRAZIOLI LORENZO",
    role: "Président Directeur Général",
    image: onlinePortraits.lorenzo,
    imagePosition: "center 34%",
    imageScale: 1,
    quote:
      "Pilotage stratégique, vision globale et développement général de la société.",
  },
  {
    id: 2,
    name: "EL FERRADI ABDELLAH",
    role: "Directeur de Développement Commercial et Opérations Techniques",
    image: onlinePortraits.abdellah,
    imagePosition: "center 34%",
    imageScale: 1,
    quote:
      "Développement commercial, coordination des opérations techniques et suivi des opportunités.",
  },
  {
    id: 3,
    name: "BABA-KHOUYA ASMA",
    role: "Chargée de projets",
    image: onlinePortraits.asma,
    imagePosition: "center 28%",
    imageScale: 1,
    quote:
      "Gestion, coordination et suivi opérationnel des projets avec rigueur et efficacité.",
  },
  {
    id: 4,
    name: "MAAROUF ILYAS",
    role: "Chargé de projets Junior",
    image: onlinePortraits.ilyas,
    imagePosition: "center 34%",
    imageScale: 1,
    quote:
      "Appui au suivi des projets, coordination interne et accompagnement des équipes.",
  },
];

export const values = [
  "Expertise",
  "Innovation",
  "Engagement",
  "Qualité",
  "Performance",
  "Confiance",
  "Ingénierie",
  "Impact",
];

export const teamIntro = {
  eyebrow: "Notre équipe",
  title: "Notre équipe",
  description:
    "Une équipe professionnelle mobilisée pour accompagner nos clients avec rigueur, expertise et performance.",
};

export const principles = [
  {
    number: "01",
    title: "Coordonner",
    text: "Chaque membre travaille en synergie pour assurer un suivi clair, fluide et efficace des projets.",
  },
  {
    number: "02",
    title: "Concevoir",
    text: "Nos experts analysent les besoins afin de proposer des solutions adaptées, fiables et évolutives.",
  },
  {
    number: "03",
    title: "Impacter",
    text: "Chaque projet est mené avec une approche orientée résultat, qualité, innovation et satisfaction client.",
  },
];
