# Portfolio — Chris-Orhé Aduko MONKIÉ

Site statique Next.js + TypeScript + Tailwind.

## Modifier le contenu

Tout le texte est dans `src/content/profil.ts`. Pour afficher GitHub et LinkedIn, renseigner `github` et `linkedin` : les liens apparaissent automatiquement dans la section contact.

Fichiers dans `public/` :
- `CV_MONKIE_Chris-Orhe_Aduko.pdf` : le CV téléchargeable ;
- `portrait.jpg` : la photo (230×290, à remplacer par une version plus grande si possible) ;
- `og.png` : l'aperçu des partages LinkedIn.

## Lancer en local

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # génère le site statique dans out/
```

## Mettre en ligne

Sur Vercel : importer le dossier `site/`, sans réglage particulier. Les URL absolues (Open Graph, canonical) se règlent toutes seules grâce à `VERCEL_PROJECT_PRODUCTION_URL`.
