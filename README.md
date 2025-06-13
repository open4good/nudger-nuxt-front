# Nuder.fr Frontend

![CI](https://github.com/your/repo/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/your/repo/actions/workflows/deploy-static.yml/badge.svg)

Nuder.fr est le front‑end révolutionnaire du projet. Ce dépôt contient l'interface construite avec Nuxt 3 et TypeScript.

## Technologies
- **Nuxt 3**
- **TypeScript**
- **Pinia** pour l'état
- **Tailwind CSS** pour la mise en page
- **Strapi** comme CMS
- **Vitest** pour les tests unitaires

## Installation

```bash
pnpm install
```

## Développement

```bash
pnpm dev
```

## Tests

```bash
pnpm test -- --run
```

## Déploiement
- GitHub Pages via `deploy-static.yml`
- Vercel / Render
- Docker + serveur SSH

## Progressive Web App
Cette application peut s'installer comme une PWA. Le module `@vite-pwa/nuxt` gère
le manifeste, les icônes (voir `public/icon.png`) et le service worker.

## Contribuer
Les commits doivent suivre Conventional Commits via `pnpm commit`. Consultez `CONTRIBUTING.md` pour le détail de la procédure.

## Licence
Aucune licence ouverte n'est définie pour le moment.
