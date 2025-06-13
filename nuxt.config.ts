export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/strapi',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@nuxtjs/storybook'
  ],
  storybook: {
    port: 6006,
    route: '/_storybook'
  }
})
