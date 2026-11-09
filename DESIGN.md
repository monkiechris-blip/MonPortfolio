---
name: Portfolio MONKIÉ
description: Bento sombre et 3D au défilement ; le travail réel en panneaux vivants.
colors:
  bg: "#0B0D12"
  tile: "#13161D"
  tile-2: "#0F1218"
  line: "#1F2430"
  line-2: "#2A2F3A"
  text: "#ECEEF2"
  text-2: "#C3C8D2"
  text-3: "#9AA1AF"
  accent: "#4C8DFF"
  accent-ink: "#0B0D12"
  ci-green: "#009E60"
typography:
  display:
    fontFamily: "Bricolage Grotesque (wdth 80, opsz 96), Geist, sans-serif"
    fontSize: "clamp(3.1rem, 6.4vw, 6.5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Bricolage Grotesque"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.95
  card-title:
    fontFamily: "Bricolage Grotesque"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 0.95
  lead:
    fontFamily: "Geist"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Geist"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  caption:
    fontFamily: "Geist"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  preview-xs:
    fontFamily: "Geist"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.25
  preview-xxs:
    fontFamily: "Geist"
    fontSize: "0.65rem"
    fontWeight: 400
    lineHeight: 1.25
  meta:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  tag: "6px"
  chip: "8px"
  control: "12px"
  inner: "16px"
  tile: "22px"
  finale: "28px"
spacing:
  gutter-mobile: "16px"
  gutter-desktop: "56px"
  container: "1400px"
  grid-gap: "16px"
  section-mobile: "64px"
  section-desktop: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.control}"
    height: "48px"
    padding: "0 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    height: "48px"
    padding: "0 20px"
  tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.text}"
    rounded: "{rounded.tile}"
    padding: "28px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.tag}"
    padding: "4px 8px"
  contact-finale:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.finale}"
    padding: "64px"
---

# Design System: Portfolio MONKIÉ

## Overview

Un atelier d'ingénieur dans la nuit. Le travail réel apparaît en panneaux vivants (la recherche SkillMap qui se tape, la carte MedMap+, l'emploi du temps MyMIAGE), dessinés en code et signalés comme aperçus illustratifs. Au premier écran, le nom est au premier plan et les panneaux sont dispersés en 3D ; le défilement les assemble en bento. Ce choix vient de l'utilisateur, qui a refusé un ambre saturé (fatigant) et une page claire trop basique.

## Colors

Un fond nuit, des tuiles légèrement plus claires et des filets de 1px. Trois rôles de texte : `text`, `text-2`, `text-3` (≥ 5,7:1 sur les tuiles). Un seul accent, le bleu électrique `#4C8DFF` (choisi par l'utilisateur à la place de l'orange), utilisé pour le mot « fiable », le bouton principal, le badge du 1er prix, la carte de distinction phare et le bloc contact final. Le drapeau tricolore (orange #F77F00, blanc, vert) ne sert que de petite signature ; le vert `ci-green` sert aussi à un bloc de l'emploi du temps.

## Typography

Bricolage Grotesque, resserrée (wdth 80), pour les titres et les noms de projets. Geist pour le texte courant, Geist Mono pour les dates et les étiquettes de stack. Tout est en casse de phrase, sans capitales espacées.

## Layout

Conteneur de 1400px. Le premier écran est une grille bento 3 colonnes × 2 rangées : la tuile slogan occupe les deux rangées ; à côté, SkillMap, le portrait, MedMap+ et Distinctions. Projets : SkillMap en pleine largeur (texte + fenêtre d'aperçu), puis deux tuiles, puis les projets en cours. Toutes les grilles utilisent `minmax(0,1fr)` pour qu'aucun texte ne déborde sur mobile.

## Elevation & Depth

Pas d'ombres. La profondeur est spatiale :
- assemblage 3D épinglé du premier écran (GSAP ScrollTrigger, `scrub: 1`, scène en perspective 1600px) ;
- les panneaux suivants arrivent avec `rotationX`, puis se posent à plat ;
- les petites tuiles s'inclinent au survol.

Toute la 3D se désactive sous 1024px et avec `prefers-reduced-motion`.

## Shapes

Rayons imbriqués de 6, 12, 16, 22 et 28px. Les cercles sont réservés aux avatars, aux points de statut et aux repères de la carte.

## Components

- **Tuile** : fond `tile`, bordure `line`, rayon 22px ; la bordure s'éclaircit au survol.
- **Aperçu SkillMap** : la requête se tape, puis les résultats s'affichent en décalé ; l'affichage est statique si l'utilisateur réduit les animations.
- **Chronologie de parcours** : une tuile par expérience ; IMAKO a une bordure et des puces bleues.
- **Bloc contact final** : aplat bleu, e-mail en grand, boutons sombres.

## Do's and Don'ts

- À faire : faire porter la richesse par le contenu réel (aperçus, chiffres, faits), avec un seul accent.
- À faire : animer avec `transform` et `opacity` uniquement, et toujours respecter la réduction des animations.
- À éviter : les dégradés violets, les halos, les emoji, les glyphes Unicode comme icônes et les capitales espacées.
- À éviter : un fond coloré sur toute la page ; le bleu reste un accent et un bloc final.
