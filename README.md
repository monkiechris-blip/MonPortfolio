# Portfolio — Chris-Orhé Aduko MONKIÉ

**Site en ligne : https://chris-monkie.vercel.app**

Site statique Next.js + TypeScript + Tailwind.

## Modifier le contenu

- Texte français : `src/content/fr.ts`
- Texte anglais : `src/content/en.ts` (les coordonnées, liens et stacks sont repris du fichier français)
- Captures des projets : `public/projets/`, déclarées dans le champ `captures` de chaque projet

## Pages

- `/` et `/en` : accueil en français et en anglais
- `/projets/<id>` et `/en/projets/<id>` : études de cas (SkillMap, MedMap+, MyMIAGE)

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

Sur Vercel : importer le dépôt `MonPortfolio`, sans réglage particulier. Les statistiques de visite (Vercel Analytics) s’activent dans l’onglet Analytics du projet. Les URL absolues (Open Graph, canonical) se règlent toutes seules grâce à `VERCEL_PROJECT_PRODUCTION_URL`.
