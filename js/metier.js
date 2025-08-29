// AC Métier
const acData = [
  {
    "id": "CM-01",
    "titre": "Développement web",
    "projet": "Développement du site web du département MMI",
    "logo": "img/logoiut.png",
    "contenu": {
      "contexte": "Dans le cadre de mon stage, j’ai été chargé de reprendre, développer et maintenir le site web du département MMI en utilisant PluXML, un CMS léger ne nécessitant pas de base de données. L’objectif était d’adapter et personnaliser un site institutionnel afin qu’il reflète l’identité visuelle du département et qu’il puisse être utilisé comme vitrine des projets étudiants.",
      "contribution": "J’ai réalisé ce projet en grande partie en autonomie. Mon rôle a été de concevoir un thème sur mesure, d’intégrer les différents contenus, de configurer les menus et d’optimiser la navigation. J’ai également assuré la mise en cohérence graphique avec l’identité institutionnelle, garantissant un rendu professionnel et homogène.",
      "lien": "J’ai su développer et personnaliser un site dynamique en réponse à un besoin réel. L’utilisation de PluXML, bien qu’atypique par rapport à d’autres CMS plus répandus, m’a permis d’approfondir ma compréhension des systèmes de gestion de contenu tout en consolidant mes compétences en HTML, CSS et PHP.",      
      "progression": "Au début du projet, j’ai rencontré des difficultés à comprendre la structure interne de PluXML et ses mécanismes de gestion des contenus. Grâce à la documentation et à une phase de tests, j’ai progressivement surmonté ces obstacles. Cette expérience m’a permis d’apprendre à chercher des solutions par moi-même, à m’adapter à des outils existants et à traduire des attentes métiers en fonctionnalités concrètes.",
      "images": [
        { "src": "img/accueil.png", "alt": "maquettes" }
      ],
  }
  },
  {
    "id": "CM-02",
    "titre": "Gestion de projet web / maintenance de site",
    "projet": "Refonte du site du département MMI de l’IUT de Bobigny avec PluXML",
    "logo": "img/logoiut.png",
    "contenu": {
      "contexte": "Durant mon stage de fin d’année, j’ai mené le développement et la refonte complète du site web du département MMI de l’IUT de Bobigny. L’objectif était de remplacer le site existant, conçu sous Jimdo, par une version plus moderne et personnalisée sous PluXML, tout en respectant l’identité visuelle de l’établissement. Le nouveau site devait également être évolutif et facilement administrable par l’équipe pédagogique, afin de valoriser les projets et formations.",
      "contribution": "J’ai pris en charge le projet de bout en bout. J’ai d’abord analysé les besoins avec les enseignants référents afin de bien comprendre leurs attentes. J’ai ensuite choisi l’outil le plus adapté, PluXML, pour sa légèreté et sa simplicité de maintenance. J’ai planifié et priorisé les différentes étapes du projet, en commençant par la structure du site, puis en développant les fonctionnalités dynamiques avant d’assurer la mise en production. Tout au long du projet, j’ai communiqué régulièrement avec les parties prenantes afin de vulgariser mes choix techniques et de m’assurer que les solutions proposées correspondaient à leurs besoins. Enfin, j’ai rédigé une documentation claire et adaptée au personnel administratif, afin de garantir leur autonomie dans la gestion et la mise à jour du site après mon départ.",
      "lien": "Cette expérience illustre ma capacité à gérer un projet web complet, bien au-delà du simple développement technique. J’ai su traduire des besoins exprimés par des interlocuteurs non techniques en solutions concrètes, tout en assurant la pérennité et la qualité du site livré.",
      "progression": "J’ai su démontrer ma capacité à prendre en charge un projet web de A à Z, en conciliant contraintes techniques, attentes utilisateurs et respect des délais. Ce projet m’a aussi permis de développer mes compétences en communication avec des interlocuteurs non spécialistes, en expliquant des concepts techniques de manière claire. J’ai progressé dans la planification, la rédaction de documentation fonctionnelle, et la gestion de la maintenance.",
  }
  },
];

// Génération des cartes
const cardsContainer = document.getElementById("cards");
acData.forEach(ac => {
  const link = document.createElement("a");
  link.href = "#" + ac.id;
  link.className = "card-link";
  link.dataset.ac = ac.id;

  link.innerHTML = `
    <article class="card">
      <header class="card-head">
        <h2>${ac.titre}</h2>
      </header>
      <div class="card-body">
        <div class="card-text">
          <p class="muted">${ac.projet}</p>
        </div>
        ${ac.logo ? `<img class="logo" src="${ac.logo}" alt="${ac.projet}">` : ""}
      </div>
    </article>
  `;

  cardsContainer.appendChild(link);
});
