---
name: Portfolio MONKIÉ
description: Portfolio d'ingénieur logiciel, clair, sobre et précis.
colors:
  bg: "#FAFAF9"
  surface: "#FFFFFF"
  subtle: "#F5F5F4"
  line: "#E7E5E4"
  line-strong: "#D6D3D1"
  ink: "#0C0C0E"
  ink-2: "#44403C"
  ink-3: "#6B6560"
  accent: "#1E3A8A"
  accent-hover: "#172E6E"
  accent-soft: "#EEF2FB"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  h2:
    fontFamily: "Geist"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Geist"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: "Geist"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Geist"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  meta:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  tag: "6px"
  control: "10px"
  card: "16px"
  panel: "24px"
spacing:
  gutter-mobile: "20px"
  gutter-desktop: "32px"
  container: "1152px"
  section-mobile: "80px"
  section-desktop: "112px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 20px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "32px"
  tag:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.tag}"
    padding: "4px 8px"
  badge-award:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "9999px"
    padding: "4px 12px"
  contact-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.panel}"
---

# Design System: Portfolio MONKIÉ

## Overview

Le portfolio d'ingénieur logiciel, joué droit et soigné. Le fond est clair, le texte presque noir et un seul accent bleu nuit est utilisé avec parcimonie. La crédibilité vient de la structure (besoin, rôle, résultat), des faits réels et de la typographie, pas de la décoration. C'est un choix ferme de l'utilisateur : clair, sobre, professionnel, jamais de monde coloré pleine page.

## Colors

- Neutres chauds très légers (stone) : le fond `bg`, les surfaces blanches, les filets `line`.
- Trois rôles de texte : `ink` (titres), `ink-2` (paragraphes), `ink-3` (méta, ≥ 5:1 sur `bg`).
- L'accent bleu nuit `#1E3A8A` est réservé au bouton principal, aux liens de code, à la pastille « 1er prix » et aux points de statut.
- Le seul aplat sombre de la page est le bloc contact final (`ink`).

## Typography

Geist pour tout, en graisses 400, 500 et 600. Les titres ont une approche resserrée (-0.025 à -0.035em) ; le texte de taille normale n'en a jamais. Geist Mono n'est utilisé que pour les dates et les étiquettes de stack. Tout est en casse de phrase : pas de capitales espacées.

## Layout

Conteneur de 1152px, gouttières de 20/32px. Le premier écran est partagé entre le texte à gauche et la carte d'identité à droite (23rem). Les projets suivent une hiérarchie : une carte phare pleine largeur, puis deux cartes, puis les projets en cours en pointillés. Le parcours a un titre fixe à gauche et une chronologie à droite. Les sections alternent les fonds `bg` et `surface`, séparées par un filet.

## Elevation & Depth

Presque plat. Seule la carte d'identité porte une ombre douce et neutre. Les cartes reposent sur des bordures de 1px. L'en-tête fixe a un léger `backdrop-blur` et ne prend sa bordure qu'après défilement.

## Shapes

Rayons imbriqués : étiquettes 6px, contrôles 10px, cartes 16px, bloc contact 24px. Les cercles sont réservés au portrait et aux points de statut.

## Components

- **Bouton principal** : fond accent, texte blanc, 44px de haut.
- **Bouton secondaire** : surface blanche, bordure `line-strong`.
- **Carte projet** : nom, sous-titre, puis la grille Besoin / Rôle / Résultat, la stack en étiquettes mono et les liens GitHub en accent.
- **Chronologie** : un filet vertical, des points creux, la date en mono.
- **Bloc contact** : fond `ink`, e-mail en grand, actions (e-mail en principal, puis WhatsApp, GitHub, CV).

## Do's and Don'ts

- À faire : un seul accent, utilisé rarement ; des faits plutôt que des adjectifs.
- À faire : nommer les transitions (`transition-colors`, `transition-transform`).
- À éviter : les fonds colorés pleine page, les dégradés, les halos et les glyphes Unicode comme icônes.
- À éviter : les intitulés (kickers) au-dessus des titres et les capitales espacées.
