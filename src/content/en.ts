import { fr } from "./fr";
import type { Contenu } from "./types";

// English content. Shared facts (contact, links, stacks) come from the French file.

const [skillmapFr, medmapFr, mymiageFr] = fr.projets;

export const en: Contenu = {
  langue: "en",
  profil: {
    ...fr.profil,
    accroche: "From real needs to",
    accrocheMot: "reliable software.",
    presentation:
      "Chris-Orhé Aduko MONKIÉ, full-stack developer in the third year of a MIAGE bachelor’s degree. I build web applications end to end.",
    resume:
      "Third-year MIAGE student (information systems and software development) at Université Félix Houphouët-Boigny, in a double degree with Université de Rennes. I am applying for a Master’s in software engineering focused on applied AI, starting in 2027.",
    localisation: "Riviera Golf, Abidjan, Côte d’Ivoire",
  },
  ui: {
    nav: [
      ["Projects", "#projets"],
      ["Background", "#parcours"],
      ["Skills", "#competences"],
      ["Contact", "#contact"],
    ],
    menuOuvrir: "Open menu",
    menuFermer: "Close menu",
    allerContenu: "Skip to content",
    autreLangue: { label: "Version française", href: "/", court: "FR" },
    introDefiler: "Scroll down",
    introSousTitre: "Full-stack developer · Abidjan × Rennes",
    voirProjets: "See the projects",
    telechargerCv: "Download my CV",
    cvCourt: "CV",
    lieuDiplome: "Abidjan · double degree with Université de Rennes",
    candidat: "Master’s applicant 2027",
    candidatDetail: "Software engineering & applied AI",
    portraitAlt: "Portrait of Chris-Orhé Aduko MONKIÉ",
    skillmapPrix: "1st prize 2026",
    medmapTuile: "Digital health · Abidjan",
    medmapTuileDetail: "Live demo · AI assistant · secure payment",
    distinctions: "Awards",
    majorDetail: "Ranked first in the MIAGE entrance exam and in year 1. Full merit scholarship.",
    projets: "Projects",
    projetsIntro:
      "Three platforms delivered and two in progress. For each one: the initial need, what I did, and what came out of it.",
    besoin: "The need",
    role: "My role",
    resultat: "The outcome",
    apercuIllustratif: "Illustrative preview.",
    apercuSkillmap: "Illustrative preview of the search interface.",
    trouverPrestataire: "Find a provider",
    voirDemo: "Live demo",
    etudeDeCas: "Read the case study",
    enCours: "In progress",
    parcours: "Background",
    parcoursIntro:
      "Three internships, from IT support to software development. Maintenance taught me how software is installed, used and fixed; IMAKO trusted me with an entire application.",
    experiences: "Experience",
    formation: "Education",
    competences: "Skills",
    cap: "Where I’m heading",
    contactTitre: "Let’s work together.",
    contactTexte: "For a Master’s application, an internship or a project, I reply by email and on WhatsApp.",
    cvPdf: "CV (PDF, in French)",
    telephoneLabel: "Phone",
    localisationLabel: "Location",
    codeSourceSite: "Site source code",
    hautDePage: "Back to top",
    retourProjets: "All projects",
    contexte: "Context",
    fonctionnalites: "Features",
    architecture: "Architecture",
    defis: "Technical challenges",
    retenu: "What I learned",
    captures: "Screenshots",
    projetSuivant: "Next project",
    technologies: "Technologies",
  },
  projets: [
    {
      ...skillmapFr,
      sousTitre: "Service provider marketplace",
      cadre: "MIAGE 25th anniversary hackathon · 2026",
      prix: "1st prize",
      besoin:
        "Help clients quickly find and contact a qualified provider near them, from a single profile showing skills, experience and past work.",
      role:
        "Project lead. I designed the solution, split the work across the team, made the Figma mockups and built both the front end and the Node.js / Express API.",
      resultat:
        "A platform delivered under time pressure, with location-based search by category and experience level, defended in front of the jury: need, live demo, technical choices. First prize.",
      liens: [{ label: "Code on GitHub", href: skillmapFr.liens![0].href }],
      etude: {
        contexte:
          "In Abidjan, finding a reliable plumber, electrician or developer mostly relies on word of mouth. For the MIAGE 25th anniversary hackathon, we had limited time to build a useful solution and defend it before a jury.",
        fonctionnalites: [
          "Provider search by category, experience level and distance",
          "Profile and portfolio for each provider, with client reviews",
          "Separate client, provider and admin areas",
          "Messaging, favourites, notifications and appointment requests",
          "JWT authentication, passwords hashed with bcrypt",
        ],
        architecture: [
          { couche: "Interface", detail: "HTML / CSS / JavaScript pages, one per user journey (client home, provider dashboard, admin…)" },
          { couche: "API", detail: "Node.js and Express, split into routes and controllers: auth, providers, services, reviews, favourites, categories, messages, admin" },
          { couche: "Data", detail: "SQLite, with a schema and a demo dataset" },
          { couche: "Geolocation", detail: "Distance computed with the Haversine formula to rank the closest providers" },
        ],
        defis: [
          "Shipping a complete, demo-ready product in limited time without sacrificing code clarity",
          "Splitting front-end and back-end work so the team could move in parallel",
          "Ranking results by real distance, not just by neighbourhood",
        ],
        retenu:
          "A good hackathon product is a clear need, one journey that works end to end, and a well-prepared demo. Leading the project taught me to decide fast and protect the scope.",
      },
    },
    {
      ...medmapFr,
      sousTitre: "Digital health platform for Abidjan",
      cadre: "Team project",
      besoin:
        "Make healthcare easier to reach: find the nearest facility or on-duty pharmacy, get directed to the right place, order and pay with confidence.",
      role: "Development within a multi-role architecture: each profile has its own dashboard, features and access rights.",
      resultat:
        "A live platform with an interactive map, an AI health assistant, on-duty pharmacies, appointments and escrow payment: the money stays on hold until the service is confirmed.",
      liens: [
        { label: "Front end on GitHub", href: medmapFr.liens![0].href },
        { label: "Back end on GitHub", href: medmapFr.liens![1].href },
      ],
      captures: [
        { src: "/projets/medmap-accueil.webp", alt: "MedMap+ home page", legende: "Platform home page" },
        { src: "/projets/medmap-assistant-ia.webp", alt: "MediA, the MedMap+ AI health assistant", legende: "MediA, the AI health assistant" },
        { src: "/projets/medmap-pharmacies.webp", alt: "On-duty pharmacies list in MedMap+", legende: "On-duty pharmacies and ordering" },
      ],
      etude: {
        contexte:
          "In Abidjan, knowing which pharmacy is on duty, which hospital can see you, or how to get a medicine is still hard. MedMap+ brings patients, doctors, hospitals and pharmacies onto a single platform.",
        fonctionnalites: [
          "Interactive map of health facilities (Leaflet), filtered by type",
          "MediA, a conversational health assistant connected to the Gemini and Claude APIs",
          "On-duty pharmacies, medicine ordering and delivery",
          "Appointments, emergencies, follow-up and a vet area",
          "Wallet and escrow payment, real-time notifications",
        ],
        architecture: [
          { couche: "Front end", detail: "Next.js, React and TypeScript, Tailwind styles, Leaflet map, real time with Socket.io; deployed on Vercel" },
          { couche: "API", detail: "Node.js and Express, about twenty modules: auth, appointments, pharmacies, medicines, emergencies, wallet, subscriptions, admin…" },
          { couche: "Data", detail: "MySQL, with init and migration scripts" },
          { couche: "AI", detail: "MediA assistant: calls to the Gemini and Claude APIs, with conversation history and user context" },
        ],
        defis: [
          "Handling several roles (patient, facility, admin) with distinct permissions",
          "Securing a payment where the money stays on hold until the service is confirmed",
          "Adding useful AI without pretending to replace a doctor: the interface shows the emergency number",
        ],
        retenu:
          "This is the project that convinced me to specialise in applied AI: plugging in a model is easy; making it reliable, useful and safe inside a real user journey is a software engineering problem.",
      },
    },
    {
      ...mymiageFr,
      sousTitre: "University portal",
      cadre: "Academic project",
      besoin: "Bring the programme’s daily life into one place: courses, timetables, exams, assignments and a digital library.",
      role:
        "Two areas, student and administrator, with access control that limits each user to the features of their role. Data access through PDO.",
      resultat:
        "An end-to-end testing campaign uncovered data-access bugs, fixed before launch. Quality has to be verified, not assumed.",
      etude: {
        contexte:
          "Information about the MIAGE programme (courses, timetables, exams, assignments) was scattered. The project was to bring it together in a single portal.",
        fonctionnalites: [
          "Courses, timetables and exam calendar",
          "Assignment submission and tracking",
          "Digital library",
          "Admin area to manage content and accounts",
        ],
        architecture: [
          { couche: "Application", detail: "Server-side PHP, organised by role (student, administrator)" },
          { couche: "Data", detail: "MySQL, accessed through PDO with prepared statements" },
          { couche: "Quality", detail: "End-to-end testing campaign across every user journey" },
        ],
        defis: [
          "Making sure a student can never reach admin features",
          "Finding data-access errors before launch",
        ],
        retenu: "End-to-end tests revealed errors that would otherwise have gone unnoticed. Since then, I test every journey before shipping.",
      },
    },
  ],
  enCours: [
    {
      nom: "Moov Application 2026 contest",
      detail:
        "A mobile app that uses AI to help subscribers diagnose issues with their fibre connection. I handle the front end and the back end, with a team from my university.",
    },
    {
      nom: "Sika",
      detail: "A fictional banking app, built as a portfolio project to work on the reliability and security requirements of finance.",
    },
  ],
  experiences: [
    {
      periode: "Jul – Aug 2026",
      poste: "Software & application developer intern",
      entreprise: "IMAKO",
      contexte: "IT services company: application development, IS security, document management, BI · Abidjan",
      points: [
        "Designed and built, on my own and end to end, a time-tracking app that records employees’ attendance and absences (confidential project).",
        "Owned every step: requirements analysis, data modelling, development, testing and delivery.",
      ],
    },
    {
      periode: "2023",
      poste: "IT support intern",
      entreprise: "Société Multinationale de Bitume (SMB)",
      contexte: "Technical department · Abidjan",
      points: [
        "Maintained the computer fleet: diagnosed failures, fixed hardware and software issues.",
        "Replaced faulty components to bring workstations back into service.",
      ],
    },
    {
      periode: "2021",
      poste: "Technical support & IT infrastructure intern",
      entreprise: "EDF Côte d’Ivoire",
      contexte: "IT department · Abidjan",
      points: [
        "Preventive and corrective maintenance of workstations and network equipment.",
        "Level 1 and 2 user support: diagnosis, resolution or escalation, workstation security.",
      ],
    },
  ],
  formation: [
    {
      periode: "2024 – 2027",
      titre: "MIAGE bachelor’s degree, year 3",
      lieu: "Université Félix Houphouët-Boigny, Abidjan",
      detail:
        "Double degree with Université de Rennes since year 1. Java, Python, algorithms, relational databases, MERISE and UML, information systems, web development.",
    },
    {
      periode: "2024",
      titre: "Baccalauréat, series C (science)",
      lieu: "With honours (mention assez bien)",
      detail: "Mathematics and physical sciences.",
    },
  ],
  distinctions: [
    { titre: "1st prize", detail: "MIAGE 25th anniversary hackathon, 2026, with SkillMap" },
    { titre: "Top rank", detail: "in the MIAGE entrance exam" },
    { titre: "Top of class", detail: "in MIAGE year 1" },
    { titre: "Full scholarship", detail: "awarded on merit" },
  ],
  competences: [
    { groupe: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "PHP", "SQL"] },
    { groupe: "Front end", items: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"] },
    { groupe: "Back end", items: ["Node.js / Express", "Spring Boot", "FastAPI", "REST APIs", "JWT", "Socket.io"] },
    { groupe: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"] },
    { groupe: "Applied AI", items: ["Gemini API", "Claude API", "Conversational assistant"] },
    { groupe: "Design", items: ["UML", "MERISE", "MVC", "SOLID", "Design patterns"] },
    { groupe: "Tools", items: ["Git / GitHub", "Docker", "Postman", "IntelliJ IDEA", "VS Code", "Figma", "Vercel"] },
    { groupe: "Methods & languages", items: ["Agile", "Scrum", "French, native", "English, B1"] },
  ],
  cap: {
    citation: "Integrating an AI model into an application is, first of all, a software engineering problem.",
    motCle: "software engineering",
    texte: [
      "Choosing the right model, connecting it to company data, checking the quality of its answers, running it in production reliably and securely: that is where I want to build my expertise.",
      "I’m drawn to fields where an outage affects thousands of people: banking and financial services, healthcare, telecoms. My projects have already taken me there.",
    ],
    horsCode: "Outside of code: video editing, graphic design and visual creation.",
  },
  seo: {
    titre: "Chris-Orhé Aduko MONKIÉ · Full-stack developer",
    description:
      "Full-stack developer, MIAGE bachelor’s year 3 (UFHB × Rennes). SkillMap, 1st prize MIAGE hackathon; MedMap+; IMAKO internship. Applying for a Master’s in software engineering & AI, 2027.",
  },
};
