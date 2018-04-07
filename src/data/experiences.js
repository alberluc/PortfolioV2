import { Technos } from "./technos";
export const Experiences = [
  {
    name: "Développeur Full-Stack",
    location: "Cheylas",
    company: {
      name: "Ingénie",
      link: ""
    },
    type: "Alternance",
    plus: [
      "Travail sur un framework maison",
      "Prendre des décisions",
      "Travail en groupe"
    ],
    date: {
      from: { month: "Septembre", year: "2017" },
      to: { month: "Septembre", year: "2018" }
    },
    technos: [
      Technos.HTML,
      Technos.PHP,
      Technos.SCSS,
      Technos.ES5
    ]
  },
  {
    name: "Développeur web",
    location: "Saint-Jean de Maurienne",
    company: {
      name:"Alliance Réseaux",
      link: ""
    },
    type: "Stage",
    link: "",
    plus: [
      "Autonomie",
      "Compétences en POO"
    ],
    date: {
      from: { month: "Avril", year: "2017" },
      to: { month: "Juin", year: "2017" }
    },
    technos: [
      Technos.HTML,
      Technos.CSS,
      Technos.CSHARP
    ]
  }
];
