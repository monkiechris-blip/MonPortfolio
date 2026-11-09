"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

// Positions de départ des tuiles du premier écran : dispersées dans la profondeur.
const dispersion = [
  { x: -240, y: 110, z: -520, rotationY: 30, rotationX: -8 },
  { x: 260, y: -170, z: -950, rotationY: -36, rotationX: 14 },
  { x: 430, y: 70, z: -720, rotationY: -26, rotationX: -12, rotationZ: 4 },
  { x: -140, y: 260, z: -1150, rotationY: 22, rotationX: 22 },
  { x: 320, y: 300, z: -820, rotationY: -32, rotationX: -16 },
];

export function Effets3D() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    // Sur téléphone, la barre d'adresse change la hauteur : on évite de tout recalculer à chaque fois.
    ScrollTrigger.config({ ignoreMobileResize: true });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // La dispersion suit la largeur de l'écran : moins d'écart sur téléphone.
      const k = Math.min(1, Math.max(0.32, window.innerWidth / 1440));
      const souris = window.matchMedia("(pointer: fine)").matches;
      const section = document.querySelector<HTMLElement>("[data-hero3d]");
      const scene = document.querySelector<HTMLElement>("[data-scene]");
      const tuiles = gsap.utils.toArray<HTMLElement>("[data-hero-tile]");
      const intro = document.querySelector<HTMLElement>("[data-hero-intro]");
      // 1. L'assemblage (page d'accueil uniquement) : les tuiles quittent la profondeur et forment le bento.
      let bouge: ((e: PointerEvent) => void) | null = null;
      if (section && scene && intro && tuiles.length > 0) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top+=64",
            end: "+=130%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
        tuiles.forEach((t, i) => {
          tl.fromTo(
            t,
            (() => {
              const d = dispersion[i % dispersion.length];
              return {
                ...d,
                x: d.x * k,
                y: d.y * k,
                z: d.z * Math.max(k, 0.6),
                opacity: 0.4,
              };
            })(),
            {
              x: 0,
              y: 0,
              z: 0,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1,
            },
            i * 0.06,
          );
        });
        tl.to(
          intro,
          {
            z: 500,
            scale: 1.12,
            opacity: 0,
            ease: "power1.in",
            duration: 0.55,
          },
          0,
        );
        section.classList.remove("attente-3d");

        // La scène suit légèrement la souris (ordinateur uniquement).
        if (souris) {
          const rx = gsap.quickTo(scene, "rotationX", {
            duration: 0.8,
            ease: "power3.out",
          });
          const ry = gsap.quickTo(scene, "rotationY", {
            duration: 0.8,
            ease: "power3.out",
          });
          bouge = (e: PointerEvent) => {
            const nx = e.clientX / window.innerWidth - 0.5;
            const ny = e.clientY / window.innerHeight - 0.5;
            rx(-ny * 5);
            ry(nx * 7);
          };
          window.addEventListener("pointermove", bouge);
        }
      }

      // 2. Les panneaux suivants arrivent de la profondeur et se posent à plat.
      gsap.utils.toArray<HTMLElement>("[data-depth]").forEach((el) => {
        const fort = el.dataset.depth === "fort";
        gsap.fromTo(
          el,
          {
            rotationX: fort ? 32 : 16,
            y: fort ? 80 : 60,
            z: fort ? -160 : -80,
            opacity: fort ? 0.5 : 0.3,
            transformPerspective: 1400,
          },
          {
            rotationX: 0,
            y: 0,
            z: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: fort ? "bottom bottom" : "top 55%",
              scrub: 1,
              // Une fois posé à plat, on retire la transformation 3D pour un rendu net.
              onLeave: () => gsap.set(el, { clearProps: "transform" }),
            },
          },
        );
      });

      // 3. Inclinaison au survol (ordinateur uniquement).
      const nettoyages = (
        souris ? gsap.utils.toArray<HTMLElement>("[data-tilt]") : []
      ).map((el) => {
        const tx = gsap.quickTo(el, "rotationY", {
          duration: 0.5,
          ease: "power3.out",
        });
        const ty = gsap.quickTo(el, "rotationX", {
          duration: 0.5,
          ease: "power3.out",
        });
        gsap.set(el, { transformPerspective: 1200 });
        const dedans = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          tx(((e.clientX - r.left) / r.width - 0.5) * 6);
          ty(-((e.clientY - r.top) / r.height - 0.5) * 6);
        };
        const sortie = () => {
          tx(0);
          ty(0);
        };
        el.addEventListener("pointermove", dedans);
        el.addEventListener("pointerleave", sortie);
        return () => {
          el.removeEventListener("pointermove", dedans);
          el.removeEventListener("pointerleave", sortie);
        };
      });

      const rafraichir = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(rafraichir);
      window.addEventListener("load", rafraichir);

      return () => {
        if (bouge) window.removeEventListener("pointermove", bouge);
        window.removeEventListener("load", rafraichir);
        nettoyages.forEach((n) => n());
      };
    });

    // Animations réduites : on retire l'attente pour afficher la grille normale.
    mm.add("(prefers-reduced-motion: reduce)", () => {
      document.querySelector("[data-hero3d]")?.classList.remove("attente-3d");
    });

    return () => mm.revert();
  }, []);

  return null;
}
