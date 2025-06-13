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

## Hydratation partielle

Le plugin `islands.client.ts` enregistre globalement le composant `LazyHydrate`.
Celui‑ci permet de différer l'hydratation d'une portion de page.

```vue
<template>
  <LazyHydrate when-visible>
    <Slider />
  </LazyHydrate>
</template>
```

## Tests

```bash
pnpm test -- --run
```

## Déploiement
- GitHub Pages via `deploy-static.yml`
- Vercel / Render
- Docker + serveur SSH

## Contribuer
Les commits doivent suivre Conventional Commits via `pnpm commit`. Consultez `CONTRIBUTING.md` pour le détail de la procédure.

## Licence
Aucune licence ouverte n'est définie pour le moment.
