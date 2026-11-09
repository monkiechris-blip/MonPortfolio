import type { Contenu } from "./types";

// Tout le contenu français du site. Modifier ce fichier suffit pour mettre le portfolio à jour.

export const fr: Contenu = {
  langue: "fr",
  profil: {
    prenom: "Chris-Orhé Aduko",
    nom: "MONKIÉ",
    accroche: "Du besoin réel au logiciel",
    accrocheMot: "fiable.",
    presentation:
      "Chris-Orhé Aduko MONKIÉ, développeur full-stack en Licence 3 MIAGE. Je conçois des applications web de bout en bout.",
    resume:
      "Étudiant en Licence 3 MIAGE à l’Université Félix Houphouët-Boigny, en double diplôme avec l’Université de Rennes. Je vise un Master en génie logiciel orienté IA appliquée pour la rentrée 2027.",
    email: "monkiechris@gmail.com",
    telephone: "+225 07 17 55 51 00",
    telephoneLien: "+2250717555100",
    whatsapp: "+225 05 04 46 13 94",
    whatsappLien: "https://wa.me/2250504461394",
    localisation: "Riviera Golf, Abidjan, Côte d’Ivoire",
    cv: "/CV_MONKIE_Chris-Orhe_Aduko.pdf",
    github: "https://github.com/monkiechris-blip",
    linkedin: "https://www.linkedin.com/in/chris-monkie-63a595394",
    codeSource: "https://github.com/monkiechris-blip/MonPortfolio",
  },
  ui: {
    nav: [
      ["Projets", "#projets"],
      ["Parcours", "#parcours"],
      ["Compétences", "#competences"],
      ["Contact", "#contact"],
    ],
    menuOuvrir: "Ouvrir le menu",
    menuFermer: "Fermer le menu",
    allerContenu: "Aller au contenu",
    autreLangue: { label: "English version", href: "/en", court: "EN" },
    introDefiler: "Faites défiler",
    introSousTitre: "Développeur full-stack · Abidjan × Rennes",
    voirProjets: "Voir les projets",
    telechargerCv: "Télécharger le CV",
    cvCourt: "CV",
    lieuDiplome: "Abidjan · double diplôme avec l’Université de Rennes",
    candidat: "Candidat Master 2027",
    candidatDetail: "Génie logiciel & IA appliquée",
    portraitAlt: "Portrait de Chris-Orhé Aduko MONKIÉ",
    skillmapPrix: "1er prix 2026",
    medmapTuile: "Santé numérique · Abidjan",
    medmapTuileDetail: "Démo en ligne · assistante IA · paiement sécurisé",
    distinctions: "Distinctions",
    majorDetail: "Au concours d’entrée MIAGE et en Licence 1. Bourse intégrale au mérite.",
    projets: "Projets",
    projetsIntro:
      "Trois plateformes livrées et deux projets en cours. Pour chacun : le besoin de départ, ce que j’ai fait, ce qui en est sorti.",
    besoin: "Le besoin",
    role: "Mon rôle",
    resultat: "Le résultat",
    apercuIllustratif: "Aperçu illustratif.",
    apercuSkillmap: "Aperçu illustratif de l’interface de recherche.",
    trouverPrestataire: "Trouver un prestataire",
    voirDemo: "Voir la démo",
    etudeDeCas: "Lire l’étude de cas",
    enCours: "En cours",
    parcours: "Parcours",
    parcoursIntro:
      "Trois stages, du terrain au développement. La maintenance m’a appris comment un logiciel est installé, utilisé et dépanné ; IMAKO m’a confié un logiciel entier.",
    experiences: "Expériences",
    formation: "Formation",
    competences: "Compétences",
    cap: "Mon cap",
    contactTitre: "Travaillons ensemble.",
    contactTexte: "Pour une candidature en master, un stage ou un projet : je réponds par e-mail et sur WhatsApp.",
    cvPdf: "CV (PDF)",
    telephoneLabel: "Téléphone",
    localisationLabel: "Localisation",
    codeSourceSite: "Code source du site",
    hautDePage: "Haut de page",
    retourProjets: "Tous les projets",
    contexte: "Contexte",
    fonctionnalites: "Fonctionnalités",
    architecture: "Architecture",
    defis: "Défis techniques",
    retenu: "Ce que j’en retiens",
    captures: "Captures",
    projetSuivant: "Projet suivant",
    technologies: "Technologies",
  },
  projets: [
    {
      id: "skillmap",
      nom: "SkillMap",
      sousTitre: "Marketplace de prestataires",
      cadre: "Hackathon des 25 ans de la filière MIAGE · 2026",
      prix: "1er prix",
      stack: ["HTML / CSS / JavaScript", "Node.js", "Express", "SQLite", "JWT", "Figma"],
      besoin:
        "Permettre à un client de trouver et de contacter vite un prestataire qualifié près de chez lui, à partir d’un profil centralisé : compétences, expérience, réalisations.",
      role:
        "Chef de projet. J’ai imaginé la solution, réparti le travail de l’équipe, réalisé les maquettes sous Figma et développé le front-end comme l’API Node.js / Express.",
      resultat:
        "Une plateforme livrée en temps limité, avec recherche géolocalisée par catégorie et niveau d’expérience, défendue devant le jury : besoin, démonstration, choix techniques. Premier prix.",
      etude: {
        contexte:
          "À Abidjan, trouver un plombier, un électricien ou un développeur fiable passe surtout par le bouche-à-oreille. Pour le hackathon des 25 ans de la filière MIAGE, nous avions un temps limité pour proposer une solution utile et la défendre devant un jury.",
        fonctionnalites: [
          "Recherche de prestataires par catégorie, niveau d’expérience et distance",
          "Profil et portfolio de chaque prestataire, avec avis des clients",
          "Espaces séparés client, prestataire et administrateur",
          "Messagerie, favoris, notifications et demandes de rendez-vous",
          "Authentification par jeton JWT, mots de passe chiffrés avec bcrypt",
        ],
        architecture: [
          { couche: "Interface", detail: "Pages HTML / CSS / JavaScript, une par parcours (accueil client, tableau de bord prestataire, administration…)" },
          { couche: "API", detail: "Node.js et Express, organisés en routes et contrôleurs : authentification, prestataires, services, avis, favoris, catégories, messages, administration" },
          { couche: "Données", detail: "SQLite, avec un schéma et un jeu de données de démonstration" },
          { couche: "Géolocalisation", detail: "Calcul de distance par la formule de Haversine pour classer les prestataires les plus proches" },
        ],
        defis: [
          "Livrer un produit complet et démontrable en temps limité, sans sacrifier la clarté du code",
          "Répartir le travail entre front-end et back-end pour que l’équipe avance en parallèle",
          "Classer les résultats par proximité réelle, et pas seulement par ville",
        ],
        retenu:
          "Un bon produit de hackathon, c’est un besoin clair, un parcours qui fonctionne de bout en bout et une démonstration préparée. Le rôle de chef de projet m’a appris à trancher vite et à protéger le périmètre.",
      },
    },
    {
      id: "medmap",
      nom: "MedMap+",
      sousTitre: "Plateforme de santé numérique pour Abidjan",
      cadre: "Projet d’équipe",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Leaflet", "Socket.io", "Node.js / Express", "MySQL", "API Gemini & Claude"],
      besoin:
        "Faciliter l’accès aux soins : trouver l’établissement ou la pharmacie de garde la plus proche, être orienté vers la bonne structure, commander et payer en confiance.",
      role:
        "Développement dans une architecture multi-rôles : chaque profil a son tableau de bord, ses fonctionnalités et ses droits d’accès.",
      resultat:
        "Une plateforme en ligne avec carte interactive, assistante santé IA, pharmacies de garde, rendez-vous et paiement par séquestre : la somme reste bloquée jusqu’à la confirmation du service.",
      demo: "https://medmap-plus-frontend.vercel.app",
      liens: [
        { label: "Front-end sur GitHub", href: "https://github.com/godlumi111-hue/medmap-plus-frontend" },
        { label: "Back-end sur GitHub", href: "https://github.com/godlumi111-hue/medmap-plus-backend" },
      ],
      captures: [
        { src: "/projets/medmap-accueil.webp", alt: "Page d’accueil de MedMap+", legende: "Accueil de la plateforme" },
        { src: "/projets/medmap-assistant-ia.webp", alt: "Assistante santé IA MediA de MedMap+", legende: "MediA, l’assistante santé IA" },
        { src: "/projets/medmap-pharmacies.webp", alt: "Liste des pharmacies de garde dans MedMap+", legende: "Pharmacies de garde et commande" },
      ],
      etude: {
        contexte:
          "À Abidjan, savoir quelle pharmacie est de garde, quel hôpital peut vous recevoir ou comment obtenir un médicament reste compliqué. MedMap+ réunit patients, médecins, hôpitaux et pharmacies sur une seule plateforme.",
        fonctionnalites: [
          "Carte interactive des structures de santé (Leaflet), filtrée par type",
          "MediA, une assistante santé conversationnelle reliée aux API Gemini et Claude",
          "Pharmacies de garde, commande de médicaments et livraison",
          "Prise de rendez-vous, urgences, suivi et espace vétérinaire",
          "Portefeuille et paiement par séquestre, notifications en temps réel",
        ],
        architecture: [
          { couche: "Front-end", detail: "Next.js, React et TypeScript, styles Tailwind, carte Leaflet, temps réel avec Socket.io ; déployé sur Vercel" },
          { couche: "API", detail: "Node.js et Express, une vingtaine de modules : authentification, rendez-vous, pharmacies, médicaments, urgences, portefeuille, abonnements, administration…" },
          { couche: "Données", detail: "MySQL, avec scripts d’initialisation et de migration" },
          { couche: "IA", detail: "Assistante MediA : appels aux API Gemini et Claude, avec l’historique de la conversation et le contexte de l’utilisateur" },
        ],
        defis: [
          "Gérer plusieurs rôles (patient, structure, administrateur) avec des droits distincts",
          "Sécuriser un paiement où la somme reste bloquée jusqu’à la confirmation du service",
          "Intégrer une IA utile sans prétendre remplacer un médecin : l’interface rappelle le numéro d’urgence",
        ],
        retenu:
          "C’est le projet qui m’a convaincu de me spécialiser en IA appliquée : brancher un modèle est facile, le rendre fiable, utile et sûr dans un vrai parcours est un problème de génie logiciel.",
      },
    },
    {
      id: "mymiage",
      nom: "MyMIAGE",
      sousTitre: "Portail universitaire",
      cadre: "Projet académique",
      stack: ["PHP", "MySQL", "PDO"],
      besoin: "Centraliser la vie de la filière : cours, emplois du temps, examens, devoirs et bibliothèque numérique.",
      role:
        "Deux espaces, étudiant et administrateur, avec une gestion des droits qui limite chaque utilisateur aux fonctions de son rôle. Accès aux données via PDO.",
      resultat:
        "Une campagne de tests de bout en bout a révélé des anomalies d’accès aux données, corrigées avant la mise en service. La qualité se vérifie, elle ne se suppose pas.",
      etude: {
        contexte:
          "Les informations de la filière MIAGE (cours, emplois du temps, examens, devoirs) étaient dispersées. Le projet consistait à les réunir dans un portail unique.",
        fonctionnalites: [
          "Cours, emplois du temps et calendrier des examens",
          "Dépôt et suivi des devoirs",
          "Bibliothèque numérique",
          "Espace administrateur pour gérer les contenus et les comptes",
        ],
        architecture: [
          { couche: "Application", detail: "PHP côté serveur, organisé par rôle (étudiant, administrateur)" },
          { couche: "Données", detail: "MySQL, accès par PDO avec requêtes préparées" },
          { couche: "Qualité", detail: "Campagne de tests de bout en bout sur tous les parcours utilisateurs" },
        ],
        defis: [
          "Garantir qu’un étudiant n’accède jamais aux fonctions d’administration",
          "Trouver les erreurs d’accès aux données avant la mise en service",
        ],
        retenu: "Les tests de bout en bout m’ont montré des erreurs qui seraient passées inaperçues. Depuis, je teste chaque parcours avant de livrer.",
      },
    },
  ],
  enCours: [
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
  ],
  experiences: [
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
  ],
  formation: [
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
  ],
  distinctions: [
    { titre: "1er prix", detail: "Hackathon des 25 ans de la filière MIAGE, 2026, avec SkillMap" },
    { titre: "Major", detail: "au concours d’entrée de la filière MIAGE" },
    { titre: "Major de promotion", detail: "en Licence 1 MIAGE" },
    { titre: "Bourse intégrale", detail: "attribuée au mérite" },
  ],
  competences: [
    { groupe: "Langages", items: ["Java", "JavaScript", "TypeScript", "Python", "PHP", "SQL"] },
    { groupe: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"] },
    { groupe: "Back-end", items: ["Node.js / Express", "Spring Boot", "FastAPI", "API REST", "JWT", "Socket.io"] },
    { groupe: "Bases de données", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"] },
    { groupe: "IA appliquée", items: ["API Gemini", "API Claude", "Assistant conversationnel"] },
    { groupe: "Conception", items: ["UML", "MERISE", "MVC", "SOLID", "Design patterns"] },
    { groupe: "Outils", items: ["Git / GitHub", "Docker", "Postman", "IntelliJ IDEA", "VS Code", "Figma", "Vercel"] },
    { groupe: "Méthodes et langues", items: ["Agile", "Scrum", "Français, langue maternelle", "Anglais, B1"] },
  ],
  cap: {
    citation: "Intégrer un modèle d’IA dans une application est d’abord un problème de génie logiciel.",
    motCle: "génie logiciel",
    texte: [
      "Choisir le bon modèle, le relier aux données de l’entreprise, vérifier la qualité de ses réponses, le mettre en production de façon fiable et sécurisée : c’est à ce croisement que je veux construire mon expertise.",
      "Je suis attiré par les secteurs où une panne touche des milliers de personnes : la banque et les services financiers, la santé, les télécommunications. Mes projets m’y ont déjà conduit.",
    ],
    horsCode: "Hors du code : montage vidéo, création graphique et conception de visuels.",
  },
  seo: {
    titre: "Chris-Orhé Aduko MONKIÉ · Développeur full-stack",
    description:
      "Développeur full-stack, Licence 3 MIAGE (UFHB × Rennes). SkillMap, 1er prix hackathon MIAGE ; MedMap+ ; stage IMAKO. Candidat Master génie logiciel & IA 2027.",
  },
};
