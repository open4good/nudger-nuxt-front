# Dépannage

## Erreur `pnpm build:ssr`

Lors de l'exécution de `pnpm build:ssr`, Nuxt peut afficher l'erreur :

```
Nuxt Build Error: It looks like you're trying to use tailwindcss directly as a PostCSS plugin.
```

Depuis Tailwind CSS 4, le plugin PostCSS a été déplacé dans le paquet `@tailwindcss/postcss`.
Pour corriger le build SSR :

1. Installez les dépendances :

   ```bash
   pnpm add -D tailwindcss @tailwindcss/postcss @nuxt/postcss8
   ```

2. Dans `nuxt.config.ts`, activez la prise en charge de Tailwind 4 et déclarez le plugin PostCSS :

   ```ts
   export default defineNuxtConfig({
     tailwindcss: {
       experimental: {
         tailwindcss4: true,
       },
     },
     postcss: {
       plugins: {
         '@tailwindcss/postcss': {},
       },
     },
   })
   ```

Cette configuration permettra à Nuxt de charger correctement Tailwind lors du build serveur.

