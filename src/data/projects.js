const AT = {
  GOBELINS: "Ecole des Gobelins",
  DUT_INFO: "DUT Informatique",
  PERSO: "Projet personnel"
};

export const Projects = [
  {
    image_name: "salsa.jpg" ,
    name: "Fait moi un câlin",
    at: AT.GOBELINS,
    date: "Janvier à Avril 2018",
    description: "\"Fait moi un câlin\" est un dispositif intéractif installé sur un poteau du balladoire du théatre de Bonlieu. Le but de se projet est de réunir les gens et de les faire danser à l'occasion de l'évènement \"Tout le monde danse\"",
    code: { name: "Github", icon: '<i class="fab fa-github"></i>', link: "" },
    link: "fake_link"
  },
  {
    image_name: "portfolioV2.png" ,
    name: "Portfolio, version 2.0",
    at: AT.PERSO,
    date: "Mars/Avril 2018",
    description: "J'ai fais la refonte de mon portfolio qui m'a permis de découvrir et de pratiquer le framework Vuejs. Le but étant d'avoir un code plus structuré et plus lisible que l'ancien. Par cette occasion j'ai amélioré l'interface et fait le responsive design.",
    code: { name: "Github", icon: '<i class="fab fa-github"></i>', link: "" },
    link: "fake_link"
  },
  {
    image_name: "salomon.png" ,
    name: "Salomon",
    at: AT.GOBELINS,
    date: "Décembre 2017",
    description: "Nous avons réalisé un projet scolaire avec Salomon dans le but de montrer les effets de la sur-hydratation et de la désydratation. Nous avons utilisé le javascript natif, le but étant de prendre des compétences sur les nouvelles versions d'EcmaScript.",
    code: { name: "Github", icon: '<i class="fab fa-github"></i>', link: "" },
    link: "fake_link"
  },
  {
    image_name: "dataviz.png" ,
    name: "Déforestation",
    at: AT.GOBELINS,
    date: "Octobre 2017",
    description: "Réaliser un projet de storytelling et datavisualisation sur un thème libre ? Ca a été le premier gros projet que j'ai eu à l'école des Gobelins. J'ai été en équipe avec une graphiste, nous avons choisi le sujet de la déforestion. Le site est codé en Javascript ES5, le but était d'approfondir les bases."
  },
  {
    image_name: "vrace.jpg" ,
    name: "VRACE",
    date: "Septembre 2016 à Juin 2017",
    at: AT.DUT_INFO,
    description: "VRACE est un projet de deuxième année de DUT Informatique. Le but est de faire jouer 4 personnes sur un circuit, le premier arrivé remporte la partie. Tout est en temps réel grâce à un serveur Nodejs et la librairie Socket.io"
  }
];
