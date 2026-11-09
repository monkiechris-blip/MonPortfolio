// Tout le contenu du site vit ici. Modifier ce fichier suffit pour mettre le portfolio à jour.

export const profil = {
  prenom: "Chris-Orhé Aduko",
  nom: "MONKIÉ",
  titre: "Développeur full-stack · Licence 3 MIAGE",
  accroche: "Du besoin réel au logiciel fiable",
  resume:
    "Étudiant en Licence 3 MIAGE à l’Université Félix Houphouët-Boigny, en double diplôme avec l’Université de Rennes. Je conçois des applications web de bout en bout, de la modélisation des données à l’interface, et je vise un Master en génie logiciel orienté IA appliquée pour la rentrée 2027.",
  email: "monkiechris@gmail.com",
  telephone: "+225 07 17 55 51 00",
  telephoneLien: "+2250717555100",
  whatsapp: "+225 05 04 46 13 94",
  // Lien wa.me : ouvre directement une conversation WhatsApp.
  whatsappLien: "https://wa.me/2250504461394",
  localisation: "Riviera Golf, Abidjan, Côte d’Ivoire",
  cv: "/CV_MONKIE_Chris-Orhe_Aduko.pdf",
  // À compléter : les liens s’affichent automatiquement dès qu’ils sont renseignés.
  github: "https://github.com/monkiechris-blip",
  linkedin: "",
  codeSource: "https://github.com/monkiechris-blip/MonPortfolio",
};

export const etat = [
  { label: "Formation", valeur: "Licence 3 MIAGE, UFHB × Université de Rennes" },
  { label: "Objectif", valeur: "Master génie logiciel & IA appliquée, rentrée 2027" },
  { label: "Basé à", valeur: "Abidjan, Côte d’Ivoire" },
  { label: "Langues", valeur: "Français, anglais (B1)" },
];

export const preuves = [
  { valeur: "1er prix", detail: "Hackathon des 25 ans MIAGE, 2026" },
  { valeur: "Major", detail: "de promotion en Licence 1" },
  { valeur: "IMAKO", detail: "Stage développeur, 2026" },
];

export type Projet = {
  id: string;
  nom: string;
  sousTitre: string;
  cadre: string;
  prix?: string;
  stack: string[];
  besoin: string;
  role: string;
  resultat: string;
  liens?: { label: string; href: string }[];
};

export const projets: Projet[] = [
  {
    id: "skillmap",
    nom: "SkillMap",
    sousTitre: "Marketplace de prestataires",
    cadre: "Hackathon des 25 ans de la filière MIAGE · 2026",
    prix: "1er prix",
    stack: ["React", "Node.js", "MySQL", "Figma"],
    besoin:
      "Permettre à un client de trouver et de contacter vite un prestataire qualifié, à partir d’un profil centralisé : compétences, expérience, réalisations.",
    role:
      "Chef de projet. J’ai imaginé la solution, réparti le travail de l’équipe et développé le front-end React comme l’API Node.js reliée à MySQL, après des maquettes sous Figma.",
    resultat:
      "Une plateforme livrée en temps limité, avec recherche par catégorie et niveau d’expérience, défendue devant le jury : besoin, démonstration, choix techniques. Premier prix.",
    liens: [{ label: "Code sur GitHub", href: "https://github.com/godlumi111-hue/SkillMap" }],
  },
  {
    id: "medmap",
    nom: "MedMap+",
    sousTitre: "Plateforme de santé numérique pour Abidjan",
    cadre: "Projet d’équipe",
    stack: ["FastAPI", "MySQL", "React", "Tailwind CSS", "Leaflet"],
    besoin:
      "Faciliter l’accès aux soins : localiser l’établissement le plus proche, être orienté vers la bonne structure, payer en confiance.",
    role:
      "Développement dans une architecture multi-rôles : chaque profil a son tableau de bord, ses fonctionnalités et ses droits d’accès.",
    resultat:
      "Une carte interactive des structures de santé, un assistant conversationnel IA intégré et un paiement par séquestre : la somme reste bloquée jusqu’à la confirmation du service.",
    liens: [
      { label: "Front-end sur GitHub", href: "https://github.com/godlumi111-hue/medmap-plus-frontend" },
      { label: "Back-end sur GitHub", href: "https://github.com/godlumi111-hue/medmap-plus-backend" },
    ],
  },
  {
    id: "mymiage",
    nom: "MyMIAGE",
    sousTitre: "Portail universitaire",
    cadre: "Projet académique",
    stack: ["PHP", "MySQL", "PDO"],
    besoin:
      "Centraliser la vie de la filière : cours, emplois du temps, examens, devoirs et bibliothèque numérique.",
    role:
      "Deux espaces, étudiant et administrateur, avec une gestion des droits qui limite chaque utilisateur aux fonctions de son rôle. Accès aux données via PDO.",
    resultat:
      "Une campagne de tests de bout en bout a révélé des anomalies d’accès aux données, corrigées avant la mise en service. La qualité se vérifie, elle ne se suppose pas.",
  },
];

export const enCours = [
  {
    nom: "Concours Moov Application 2026",
    detail:
      "Application mobile qui s’appuie sur l’IA pour aider les abonnés à diagnostiquer les incidents de leur connexion fibre. Je suis chargé du front-end et du back-end, avec une équipe de mon université.",
  },
  {
    nom: "Sika",
    detail:
      "Application bancaire fictive, conçue comme projet de portfolio, pour travailler les exigences de fiabilité et de sécurité du secteur financier.",
  },
];

export const experiences = [
  {
    periode: "Juil. – août 2026",
    poste: "Stagiaire développeur d’applications & logiciels",
    entreprise: "IMAKO",
    contexte: "ESN : développement d’applications, sécurité des SI, GED, business intelligence · Abidjan",
    points: [
      "Conception et développement complet, seul et de A à Z, d’une application de pointage qui enregistre les présences et les absences des employés (projet confidentiel).",
      "Toutes les étapes prises en charge : analyse du besoin, modélisation des données, développement, tests et livraison.",
    ],
  },
  {
    periode: "2023",
    poste: "Stagiaire assistance informatique",
    entreprise: "Société Multinationale de Bitume (SMB)",
    contexte: "Service technique · Abidjan",
    points: [
      "Maintenance du parc : diagnostic des pannes, correction des dysfonctionnements matériels et logiciels.",
      "Remplacement des composants défectueux pour remettre les postes en service.",
    ],
  },
  {
    periode: "2021",
    poste: "Stagiaire support technique & infrastructure IT",
    entreprise: "EDF Côte d’Ivoire",
    contexte: "Département informatique · Abidjan",
    points: [
      "Maintenance préventive et corrective des postes de travail et des équipements réseau.",
      "Support utilisateurs de niveaux 1 et 2 : diagnostic, résolution ou transmission au bon interlocuteur, sécurisation des postes.",
    ],
  },
];

export const formation = [
  {
    periode: "2024 – 2027",
    titre: "Licence MIAGE, L3 en cours",
    lieu: "Université Félix Houphouët-Boigny, Abidjan",
    detail:
      "Double diplôme avec l’Université de Rennes depuis la L1. Java, Python, algorithmique, bases de données relationnelles, MERISE et UML, systèmes d’information, développement web.",
  },
  {
    periode: "2024",
    titre: "Baccalauréat série C",
    lieu: "Mention assez bien",
    detail: "Mathématiques et sciences physiques.",
  },
];

export const distinctions = [
  { titre: "1er prix", detail: "Hackathon des 25 ans de la filière MIAGE, 2026, avec SkillMap" },
  { titre: "Major", detail: "au concours d’entrée de la filière MIAGE" },
  { titre: "Major de promotion", detail: "en Licence 1 MIAGE" },
  { titre: "Bourse intégrale", detail: "attribuée au mérite" },
];

export const competences = [
  { groupe: "Langages", items: ["Java", "JavaScript", "TypeScript", "Python", "PHP", "SQL"] },
  { groupe: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"] },
  { groupe: "Back-end", items: ["Node.js / Express", "Spring Boot", "FastAPI", "API REST", "JWT"] },
  { groupe: "Bases de données", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { groupe: "Conception", items: ["UML", "MERISE", "MVC", "SOLID", "Design patterns"] },
  { groupe: "Outils", items: ["Git / GitHub", "Docker", "Postman", "IntelliJ IDEA", "VS Code", "Figma"] },
  { groupe: "Méthodes", items: ["Agile", "Scrum", "Dépôt Git partagé en équipe"] },
  { groupe: "Langues", items: ["Français, langue maternelle", "Anglais, B1"] },
];

export const cap = {
  citation:
    "Intégrer un modèle d’IA dans une application est d’abord un problème de génie logiciel.",
  texte: [
    "Choisir le bon modèle, le relier aux données de l’entreprise, vérifier la qualité de ses réponses, le mettre en production de façon fiable et sécurisée : c’est à ce croisement que je veux construire mon expertise.",
    "Je suis attiré par les secteurs où une panne touche des milliers de personnes : la banque et les services financiers, la santé, les télécommunications. Mes projets m’y ont déjà conduit.",
  ],
  horsCode: "Hors du code : montage vidéo, création graphique et conception de visuels.",
};
