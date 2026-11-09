---
name: Portfolio MONKIÉ
description: Une salle unique sous un soleil d'ambre ; le parcours est la ligne d'horizon.
colors:
  sun: "#FFC24A"
  mirror: "#FFD55A"
  haze: "#E5A32B"
  deep: "#C88A1E"
  dusk: "#9A6A12"
  ground: "#6E4A0D"
  ink: "#0B0B0B"
  ink-soft: "#3D2905"
typography:
  display:
    fontFamily: "Archivo (wdth 62), ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "Archivo (wdth 62)"
    fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 0.95
  label:
    fontFamily: "Archivo (wdth 72)"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Archivo (wdth 100)"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.625
  meta:
    fontFamily: "Archivo (wdth 100)"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter-mobile: "24px"
  gutter-desktop: "48px"
  row: "20px"
  section-mobile: "96px"
  section-desktop: "128px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mirror}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.ground}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 20px"
  observation-tile:
    backgroundColor: "{colors.haze}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  band-featured:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
  band-dark:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.mirror}"
---

# Design System: Portfolio MONKIÉ

## Overview

Une seule salle, une seule lumière : un ambre monofréquence qui aplatit tout. Le premier écran est un hall dont la ligne d'horizon est le parcours (2021 → 2027). Un demi-soleil y est posé, reflété au sol et au plafond. Choisir une année fait glisser le soleil jusqu'à elle. Le reste de la page alterne des bandes de la même matière (haze, sun, deep, ground) séparées par des filets noirs. Le texte noir y joue le rôle des silhouettes.

## Colors

- **Haze** `#E5A32B` : le sol de la page.
- **Sun** `#FFC24A` : les bandes mises en avant (projet phare, « Cap »).
- **Deep** `#C88A1E` : la bande Parcours et le haut du hall.
- **Ground** `#6E4A0D` : la seule bande sombre (Distinctions), avec **mirror** `#FFD55A` comme encre.
- **Ink** `#0B0B0B` : le texte, les filets et le bouton principal.
- **Ink-soft** `#3D2905` : le texte secondaire, toujours teinté d'ambre (≥ 4,68:1 sur toutes les bandes claires).
- Pas de gris et pas de seconde teinte : chaque couleur est une valeur de la même lumière.

## Typography

Une seule famille, Archivo, pilotée par son axe de largeur. Les titres sont en capitales noires extra-condensées (wdth 62, 900, interlignage 0,9), avec un maximum de 6rem. Les libellés et les commandes sont en capitales condensées (wdth 72, 600). Le texte courant est en largeur normale, 400. Les chiffres des dates sont tabulaires.

## Layout

Conteneur de 1500px maximum, gouttières de 24/48px. Les projets suivent une grille 5/12 – 7/12 : le nom à gauche, la structure apparente à droite (Le besoin / Mon rôle / Le résultat / Stack) en lignes séparées par des filets. Les sections ont 96px de marge verticale sur mobile et 128px sur desktop. Sur mobile, tout s'empile dans l'ordre de lecture et le rail de l'horizon passe à 3 colonnes.

## Elevation & Depth

Aucune ombre. La profondeur vient de la lumière : un dégradé vertical deep → haze dans le hall, le halo flou du soleil, et des tuiles d'observation en haze/70 avec un léger `backdrop-blur` par-dessus le soleil. Un grain de brume fixe est posé en `multiply` à 16 %.

## Shapes

Des angles droits partout. Le cercle est réservé au soleil : le disque, la pastille « 1er prix » et les points du rail. Les filets font 1,5px en noir plein pour les structures et 1px en noir à 55 % pour les lignes de contenu.

## Components

- **Bouton principal** : fond encre, texte mirror, bord 1,5px, flèche en SVG.
- **Bouton secondaire** : contour seul ; il se remplit de sun au survol.
- **Tuile d'observation** : cadre 1,5px. Elle affiche l'arrêt sélectionné (`aria-live`).
- **Rail de l'horizon** : six boutons `aria-pressed`, navigables aux flèches, Début et Fin. Le soleil se déplace par `transform`.
- **Soleil** : un disque en dégradé radial, la moitié haute posée sur l'horizon. Son reflet au sol est strié, flouté et masqué ; son reflet au plafond est atténué à 45 %.

## Do's and Don'ts

- À faire : laisser le soleil être le seul moment lumineux de chaque bande.
- À faire : garder le texte secondaire teinté d'ambre.
- À faire : déplacer le soleil par `transform`, jamais par `left`.
- À éviter : les ombres, les coins arrondis sur les commandes et les icônes en glyphes Unicode.
- À éviter : un intitulé (kicker) au-dessus d'un titre, et une seconde couleur d'accent.
